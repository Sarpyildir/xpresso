async function registerUser(req, res) {
  console.log(req.body);
  res.status(200).json("Register controller is working");
}

module.exports = { registerUser };
