// Seeds file that remove all users and create new users

// To execute this seed, run from the root of the project
// $ node configs/user-seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const connection = require("../configs/db");
const User = require("../models/User");

const salt = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync(process.env.DUMMY_PASS, salt);

let users = [
  {
    firstName: "Ana",
    lastName: "Martínez",
    email: "ana@example.com",
    password: hashPass,
  },
  {
    firstName: "Karla",
    lastName: "Flores",
    email: "karla@example.com",
    password: hashPass,
  },
];

connection().then(() => {
  User.deleteMany()
    .then(() => {
      return User.create(users);
    })
    .then((usersCreated) => {
      console.log(
        `${usersCreated.length} users created with the following id:`
      );
      console.log(usersCreated.map((u) => u._id));
    })
    .then(() => {
      // Close properly the connection to Mongoose
      mongoose.disconnect();
    })
    .catch((err) => {
      mongoose.disconnect();
      throw err;
    });
});
