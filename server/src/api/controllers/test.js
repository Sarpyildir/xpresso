async function getTest(req, res) {
  res.status(200).json("Test controller is working");
}

module.exports = { getTest };
