const { User } = require("../models/index");
const { comparePassword } = require("../helpers/bcrypts");
const { createToken } = require("../helpers/jsonwebtoken");
class UserController {
  static async Register(req, res, next) {
    try {
      const { name, email, password, address, user_balance } = req.body;

      if (!name) {
        throw { name: "Name is required" };
      }
      if (!email) {
        throw { name: "Name is required" };
      }
      if (!password) {
        throw { name: "Name is required" };
      }

      await User.create({ name, email, password, address, user_balance });

      res.status(201).json({ msg: "Succesfully create new User" });
    } catch (error) {
      next(error);
    }
  }

  static async Login(req, res, next) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ where: { email } });

      if (!email || !password) {
        throw { name: "Email or Password undefined" };
      }

      if (!user) {
        throw { name: "Invalid Email Or Password" };
      }

      let comparePass = comparePassword(password, user.password);

      if (comparePass === false) {
        throw { name: "Invalid Email Or Password" };
      } else {
        let payload = {
          id: user.id,
        };

        let access_token = createToken(payload.id);

        res.status(200).json({
          message: "Succesfully login",
          name: user.name,
          email,
          access_token,
          user_balance: user.user_balance,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getDataUser(req, res, next) {
    try {
      const { id } = req.user;
      let user = await User.findByPk(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
