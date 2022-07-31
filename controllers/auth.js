const express = require("express");
const bcrypt = require('bcryptjs')
const { validationResult } = require("express-validator");
const Users = require("../models/Users");

const createUser = async (request, response = express.response) => {

  const { email, password } = request.body;

  try {

    let user = await  Users.find({ email })

    console.log(user)

    if( user === [] ){

        return response.status(400).json({
            ok: false,
            msg: 'Email is registered already'
        })
    }

    user = new Users(request.body);

    ///encriptar password
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync( password, salt )

    await user.save();

    return response.status(201).json({
      ok: true,
      message: "register",
      uid: user.id,
      name: user.name
    });



  } catch (error) {
    console.log(error);
    response.status(500).json({
      ok: false,
      msg: "Please contact Administrater",
    });
  }
};

const loginUser = (request, response = express.response) => {
  const { email, password } = request.body;

  response.json({
    ok: true,
    message: "login",
    email,
    password,
  });
};

const renewToken = (request, response = express.response) => {
  response.json({
    ok: true,
    message: "renew",
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
