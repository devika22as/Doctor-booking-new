const User = require('../db/models/user-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signupUsers = async (req, res) => {
  try {
    const { body } = req;
    const users = await User.findOne({ email: body.email });
    if (users) {
      return res.status(403).json({ message: 'Email already taken' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(403).json({ message: "Password doesn't match" });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    const newUser = await User.create(body);
    console.log(newUser);
    res.status(201).json({ message: 'Account created', data: newUser });
  } catch (e) {
    res.status(400).json(e);
  }
};
const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(403).json({ message: 'Email or Password incorrect' });
    }
    const isMatching= await bcrypt.compare(password,user.password);
    if(!isMatching){
      return res.status(403).json({message: "Email or Password incorrect"})
    }
    const token= jwt.sign({id: user._id,role: "USER"},process.env.SECRET_KEY, {expiresIn:'7d'});
    res.status(200).json({message:"You are Logged In !!!", token: token, id:user._id})
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = { signupUsers, loginUsers };
