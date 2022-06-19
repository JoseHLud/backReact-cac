// const database = require('../storages/index');
// const User = require('./schemas/user.schema');

// const userModel = {
//     create: async (user) => {
//       try {
//         const newUser = new User(user);
//         return await newUser.save();
//       } catch (error) {
//         console.log(error);
//       }
//       return null;
//     },
//     findById: (id) => {
//       return database.users.find((user) => user.id === id);
//     },
//     deleteById: (id) => {
//       return (database.users = database.users.filter((user) => user.id !== id));
//     },
//     updateById: (id, user) => {
//       const userToUpdate = database.users.find((user) => user.id === id);
//       userToUpdate.name = user.name;
//       userToUpdate.password = user.password;
//       return userToUpdate;
//     },
//     getAllUsers: () => {
//       const users = database.users;
//       return users;
//     },
//     getUserByEmail: (email) => {
//         const user = User.findOne({ email });
//         // database.users.find((user) => user.email === email);
//         return user;
//     },
//   };

//   module.exports = userModel;

const mongoose = require("mongoose");
const User = require("../models/schemas/user.schema");

module.exports = {
  create: (user) => {
    try {
      const newUser = new User(user);
      return newUser.save();
    } catch (error) {
      console.log(error);
    }
    return null;
  },
  getUserByEmail: async (email) => {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.log(error);
    }
    return null;
  },
  getAllUsers: async () => {
    try {
      return await User.find();
    } catch (error) {
      console.log(error);
    }
    return null;
  },
  deleteById: async (id) => {
    try {
      return await User.findOneAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
    return null;
  },
  updateById: async (id, user) => {
    try {
      return await User.findOneAndUpdate({ _id: id }, user);
    } catch (error) {
      console.log(error);
    }
    return null;
  },
};
