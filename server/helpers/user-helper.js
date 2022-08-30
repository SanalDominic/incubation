const express = require("express");
const { mongoose } = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (data) => {
    try {
      const { name, email, password } = data;
      const user = await User.findOne({ email: email });
      if (!user) {
        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({
          name: name,
          email: email,
          password: hashPassword,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
    }
  },
};
