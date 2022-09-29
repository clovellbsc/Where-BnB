import { Request, Response } from "express";
import catchBlock from "../utils/catchBlock";
import userSchema from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { s3Uploadv2 } from "../utils/s3Service";

const User = {
  get: async (req: Request, res: Response) => {
    try {
      await userSchema.find({}).then((users) => res.send(users));
    } catch (e: unknown) {
      res.send(e);
    }
  },
  Register: async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await userSchema.create({
        username: username,
        email: email,
        password: hashedPassword,
      });
      res.status(200).send("User added successfully");
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
  Login: async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const foundUser = await userSchema.findOne({ username: username });
    if (foundUser === null) {
      return res.status(400).send();
    }
    const { _id, username: foundUsername, password: foundPassword } = foundUser;
    try {
      if (await bcrypt.compare(password, foundPassword)) {
        const token = jwt.sign(
          { _id: _id.toString(), username: foundUsername },
          process.env.ACCESS_TOKEN,
          {
            expiresIn: "2 days",
          }
        );
        res.status(200).send({ user: { _id, foundUsername }, token: token });
      } else {
        res.send("Incorrect email or password");
      }
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
  Delete: async (req: Request, res: Response) => {
    const userID = req.body.token._id;
    await userSchema.deleteOne({ _id: userID });

    try {
      res.send(`Deleted successfully`);
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
  UploadAvatar: async (req: Request, res: Response) => {
    const userID = req.body.token._id;

    const files = req.files as Express.Multer.File[];

    try {
      const results = await s3Uploadv2(files);
      await userSchema.findByIdAndUpdate(userID, {
        avatar: results[0].Location,
      });
      res.send({ success: "successful" });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default User;
