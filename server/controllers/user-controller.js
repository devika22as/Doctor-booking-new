const User = require('../db/models/user-schema');

const signupUsers = async (req, res) => {
  const body = req.body;
  console.log(body);
  const users = await User.create(body);

  res.status(201).json({ message: 'success', data: users });
};
const loginUsers = async (req, res) => {};

module.exports = { signupUsers, loginUsers };
