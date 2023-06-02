import { Router, Request, Response } from "express";
import Controller from "../controllers";
import Validator from "../validations";

import { verifySuperAdmin } from "../middleware/auth/verifySuperAdmin";
import validations from "../validations";

const route = Router();

export default (app: Router) => {
  /**
   * @swagger
   * tags:
   *   name: User
   *   description: User management and login
   */
  app.use("/website", route);

  /**
   * @swagger
   * /add :
   *   Post:
   *     tags: [head]
   *     summary: adding new head
   *     description: For Adding new head tag.
   */
  // route.post("/add", Validator.head.validateHead, Controller.Head.Add);
  route.post("/add", validations.Website.validateWebsite, Controller.Website.Add);

  /**
   * @swagger
   * /get :
   *   get:
   *     tags: [Inventry]
   *     summary: getting inventry
   *     description: For getting all and custom inventry as per query .
   */
  route.get("/get", Controller.Website.Get);
//   /**
//    * @swagger
//    * /get :
//    *   put:
//    *     tags: [Inventry]
//    *     summary: getting inventry
//    *     description: For getting all and custom inventry as per query .
//    */
//   route.put("/update", Controller.Head.update);
};
