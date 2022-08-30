const User = require("../models/userModel");
const Slots = require("../models/slotsmodal");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (data) => {
    try {
      const { email, password } = data;
      const user = await User.findOne({ email: email });
      if (!user) {
        return { status: false };
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return { status: false };
      }
      return { status: true, user: user };
    } catch (error) {
      console.log(error.message);
    }
  },
  formSubmit: async (values, email) => {
    try {
      const submitted = await User.findOne({ email: email });
      if (submitted.submitted) {
        return false;
      } else {
        const user = await User.updateOne(
          { email: email },
          {
            $set: {
              form: { ...values },
              submitted: true,
              status: "new",
            },
          }
        );
        if (user) return true;
        else return false;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  getData: async () => {
    try {
      const data = await User.find({ submitted: true });
      let newApplications = data.filter((user) => user.status === "new");
      let pendingApplications = data.filter(
        (user) =>
          user.status !== "new" &&
          user.status !== "approved" &&
          user.status !== "declined"
      );
      return {
        newApp: newApplications,
        pendingApp: pendingApplications,
      };
    } catch (error) {
      console.log(error.message);
    }
  },
  pending: async (id, status) => {
    try {
      const pending = await User.updateOne(
        { _id: id },
        {
          $set: {
            status: status,
          },
        }
      );
      if (pending) return true;
      else return false;
    } catch (error) {
      console.log(error.message);
    }
  },
  record: async () => {
    try {
      const data = await User.find({ role: 1, submitted: true });
      if (data) return { status: "ok", data: data };
      else return { status: "error" };
    } catch (error) {
      console.log(error.message);
    }
  },
  getSlots: async () => {
    try {
      const slots = await Slots.find({});
      const users = await User.find({
        status: "approved",
        role: 1,
        isBooked: false,
      });
      if (slots) return { status: "ok", slots: slots, users: users };
      else return { status: "error" };
    } catch (error) {
      console.log(error.message);
    }
  },
  bookedSlot: async (id, userId) => {
    try {
      const slot = await Slots.updateOne(
        { _id: id },
        {
          $set: {
            userId: userId,
            isBooked: true,
          },
        }
      );
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            isBooked: true,
          },
        }
      );
      if (slot) return "isBooked";
      else return "error";
    } catch (error) {
      console.log(error.message);
    }
  },
};
