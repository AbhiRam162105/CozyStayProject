import User from "../models/Users.js";
import { createError } from "../error.js";
import bcrypt from "bcrypt";
import { login } from "./autc.js";
import asyncHandler from "express-async-handler";
import cookieParser from "cookie-parser";
import { createTokens } from "../middleware/Auth.js";
import express from "express";
const app = express();
app.use(cookieParser);

const saltRounds = 10; // You can adjust the number of rounds (default is 10)
const salt = bcrypt.genSaltSync(saltRounds);

export const CREATE_USER = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

export const UPDATE_USER = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        username: req.body.username,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const CHANGEPASSWORD = async (req, res, next) => {
  try {
    const SALT_WORK_FACTOR = 10;
    const newPassword = req.body.password;
    console.log(newPassword);
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(newPassword, salt, async function (err, hash) {
        if (err) return next(err);

        try {
          // Update the user's password field with the new hashed password
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { password: hash }, // Update the password field
            { new: true }
          );

          res.status(200).json(updatedUser);
        } catch (error) {
          next(error);
        }
      });
    });
  } catch (error) {
    next(error);
  }
};

export const DELETE_USER = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

export const GET_USER = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const GET_ALL_USER = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required!!");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User doesn't Exists");
  }
  const realPassword = user.password;
  if (user && bcrypt.compare(password, realPassword)) {
    const accessToken = createToken(user);

    res.cookie("token", accessToken, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
      httpOnly: true,
    });
    res.json("Logged In");
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});
