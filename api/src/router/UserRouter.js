import express from "express";
import { createUser, getUser } from "../model/user/userModel.js";

const router = express.Router();

// create user
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await createUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "User created successfully.",
        })
      : res.json({
          status: "error",
          message: "Unable to create the user.",
        });
  } catch (error) {
    next(error);
  }
});

//login
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await getUser(req.body);
    if (user?._id) {
      res.json({
        status: "success",
        message: "Login successfully.",
        user,
      });
    } else {
      res.json({
        status: "error",
        message: "Login credentials do not match.",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
