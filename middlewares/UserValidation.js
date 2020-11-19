require('dotenv').config();

const bcrypt = require('bcryptjs');
const checkItem = require('../helpers/checkInput');
const requestHelper = require('../helpers/requestHelper');
const userModel = require('../models/model');
const hackModel = require('../models/lifeHackModel');


userInput = (req, res, next) => {
    const { guide, email, password, fullname, profileimage, validator } = req.body;
    const username = req.body.username.trim();

    const check = checkItem({
      username,
      email,
      password,
      fullname
    });
    if (Object.keys(check).length > 0) {
      return res.status(400).json({
        statusCode: 400,
        check
      });
    }
    const userEmail = /*await*/ userModel.findSingleUser({ email: email });
    const userName = /*await*/ userModel.findSingleUser({
      username: username
    });
    let existingUser;
    if (userEmail[0] !== undefined) {
      existingUser = `email ${email}`;
    }
    if (userName[0] !== undefined) {
      existingUser = `username ${username}`;
    }
    if (existingUser) {
      return requestHelper.error(
        res,
        409,
        `User with ${existingUser} already exist`
      );
    }

    const hash = /*await*/ bcrypt.hash(password, 12);
    const newUser = /*await*/ userModel.addUser({
      username,
      email,
      password: hash,
      fullname,
      profileimage,
      guide
    });
    // eslint-disable-next-line require-atomic-updates
    req.newuser = newUser;
    next();
  }

   userSignin = (req, res, next) => {
    const { username, password, email } = req.body;
    const input = username ? username : email;
    try {
      const check = checkItem({
        input,
        password
      });
      if (Object.keys(check).length > 0) {
        return res.status(400).json({
          statusCode: 400,
          check
        });
      }
      let validate = email
        //? await userModel.findSingleUser({ email })
       // : await userModel.findSingleUser({ username });

      if (validate.length > 0 && validate[0].password) {
        const checkPassword = /*await*/ bcrypt.compareSync(
          password,
          validate[0].password
        );
        if (validate[0] && checkPassword) {
          // eslint-disable-next-line require-atomic-updates
          req.checked = validate[0];
          next();
        }
      }

      return requestHelper.error(res, 400, 'wrong credentials');
    } catch (err) {
      err;
    }
  }

  lifehackValidation = (req, res, next) => {
    const { title } = req.body;
    const exists = /*await*/ hackModel.getSingleHack({ title });
    if (exists) {
      return requestHelper.error(
        res,
        409,
        'Lifehack with this title already exist'
      );
    }
    const check = checkItem({ title });

    if (Object.keys(check).length > 0) {
      return res.status(400).json({
        statusCode: 400,
        data: [check]
      });
    }
    return next();
  }

  stepsValidation = (req, res, next) => {
    const { steps } = req.body;

    const check = checkItem({ steps });

    if (Object.keys(check).length > 0) {
      return res.status(400).json({
        statusCode: 400,
        data: [check]
      });
    }
    return next();
  }

  reviewsValidation = (req, res, next) => {
    const { review } = req.body;

    const check = checkItem({ review });

    if (Object.keys(check).length > 0) {
      return res.status(400).json({
        statusCode: 400,
        data: [check]
      });
    }
    return next();
  }
