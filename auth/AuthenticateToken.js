require('dotenv').config();

const jwt = require('jsonwebtoken');
const requestHelper = require('../helpers/requestHelper'); 

const AuthenticateToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] || 
    req.headers.authorization;
  // decode token
  if (token) {
    // verifies token and checks if expired or invalid
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        requestHelper.error(res, 401, 'Authentication failed');
      }
      req.decoded = decoded;
      next();
    });
  } else {
    requestHelper.error(res, 403, 'Access denied. You are not logged in');
  }
};

module.exports = AuthenticateToken;