import { Request, Response } from "express";
import catchBlock from "../utils/catchBlock";
import userSchema from "../models/user";
import bcrypt from "bcrypt";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";

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
    const { username, email, password } = req.body;
    const foundUser = await userSchema.findOne({ username: req.body.username });
    if (foundUser === null) {
      return res.status(400).send();
    }
    const {
      _id,
      username: foundUsername,
      email: foundEmail,
      password: foundPassword,
    } = foundUser;
    try {
      if (await bcrypt.compare(password, foundUser.password)) {
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
      res.status(200).send(foundUser);
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default User;
