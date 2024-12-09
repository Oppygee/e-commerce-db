const { hasMyPassword } = require("../src/config/utils");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");

const create = async (req, res) => {
  try {
    const {
      surname,
      othernames,
      email,
      password,
      phone,
      address,
      city,
      country,
    } = req.body;
    // const checkIfEmailExist = user.findOne().where('email').equals('email').$orwhere('phone').equals('phone')
    const checkIfEmailOrPhoneExist = await User.findOne({
      $or: [{ email }, { phone }],
    });
    if (checkIfEmailOrPhoneExist) throw new Error("user already exist!");
    const [salt, hash] = await hasMyPassword(password);
    const user_id = uuidv4();

    const user = await User.create({
      user_id,
      surname,
      othernames,
      email,
      phone,
      address,
      city,
      country,
      password_salt: salt,
      password_hash: hash,
      data: user,
    });

    res.status(201).json({
      status: "success",
      message: "user account created successfully",
    });
  } catch (error) {
    console.log("error :", error);
    next(error);
  }
};

module.exports = {
  create,
};
