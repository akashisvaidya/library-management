// create user

import userSchema from "./userSchema.js";

export const createUser = (userObj) => {
  return userSchema(userObj).save();
};

// getUser

export const getUser = (filter) => {
  return userSchema.findOne(filter);
};
