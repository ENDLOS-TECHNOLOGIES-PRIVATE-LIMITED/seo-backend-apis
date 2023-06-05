import { Router, Request, Response } from "express";
import Controller from "../controllers";
import Validator from "../validations";
import { verifySuperAdmin } from "../../api/middleware/auth/verifySuperAdmin";
const route = Router();

export default (app: Router) => {
  /**
   * @swagger
   * tags:
   *   name: User
   *   description: User management and login
   */
  app.use("/user", route);

/**
   * @swagger
   * /register:
   *   Post:
   *     tags: [User]
   *     summary: Register user
   *     description: Registering user.
   */
  route.post("/register", Validator.userValidataion.validateRegisterUser,  Controller.User.Register);
  /**
   * @swagger
   * /login:
   *   Post:
   *     tags: [User]
   *     summary: login user
   *     description: For Login user.
   */
  route.post("/login", Validator.userValidataion.validateLoginUser, Controller.User.Login);
};
