const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_RAHASIA;

function createToken(value) {
  return jwt.sign(value, "INITOKENRAHASIA");
}

function decodedToken(value) {
  return jwt.verify(value, "INITOKENRAHASIA");
}

module.exports = { createToken, decodedToken };
