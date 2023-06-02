import { Router, Request, Response } from "express";
import Controller from "../controllers";
import Validator from "../validations";

import { verifySuperAdmin } from "../middleware/auth/verifySuperAdmin";

const route = Router();

export default (app: Router) => {
  /**
   * @swagger
   * tags:
   *   name: User
   *   description: User management and login
   */
  app.use("/head", route);

  /**
   * @swagger
   * /add :
   *   Post:
   *     tags: [head]
   *     summary: adding new head
   *     description: For Adding new head tag.
   */
  // route.post("/add", Validator.head.validateHead, Controller.Head.Add);
  route.post("/add",  Controller.Head.Add);

  /**
   * @swagger
   * /get :
   *   get:
   *     tags: [Inventry]
   *     summary: getting inventry
   *     description: For getting all and custom inventry as per query .
   */
  route.get("/get",  Controller.Head.Get);
  /**
   * @swagger
   * /get :
   *   put:
   *     tags: [Inventry]
   *     summary: getting inventry
   *     description: For getting all and custom inventry as per query .
   */
  route.put("/update",  Controller.Head.update);
};
