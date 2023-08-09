const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_STRING, { expiresIn: "3600s" });
};
const authToken = (req, res, next) => {
  if (req.originalUrl === "/login" || req.originalUrl === "/register") {
    return next();
  } else {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_SECRET_STRING, (err, decode) => {
        if (err) {
          res.setHeader("Content-Type", "application/json");
          res.status(400).send({ err });
        } else {
          req.user = decode;
          next();
        }
      });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(401).send({ error: "no authorization" });
    }
  }
};

module.exports = { createToken, authToken };
