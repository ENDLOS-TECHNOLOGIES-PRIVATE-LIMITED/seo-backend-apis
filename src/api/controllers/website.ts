import { Request, Response, NextFunction } from "express";
import models from "../models";

interface AuthenticatedRequest extends Request {
  user?: {
    id: String;
    role: String;
  };
}

export const Add = async (req: AuthenticatedRequest, res: Response) => {
  try {
    // Destructuring data from request

    const { name } = req.body;

    // console.log({body:req.body});

    let alreadyExist = await models.Website.findOne({ name });
    if (alreadyExist) {
      return res.status(400).json({ error: "Website already exists" });
    }

    //Registering User in the Db
    const addedWebsite = await models.Website.create({
      ...req.body,
    });

    const Response = {
      addedWebsite,
    };

    //sending Registerd User response
    res.json({
      message: "Successfully Added Website",
      data: Response,
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const Get = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id, type } = req.query;

    if(type=="all" && !id){

     //Upading customoer in the Db
      const WebDetails = await models.Website.find({
   });

      const Response = {
        WebDetails,
      };

      //sending updated customer response
      res.json({
        message: "Website Details fetched Successfully",
        data: Response,
        success: true,
      });
    }


    else if (!id) {
      res.status(400).json({
        message: "Bad Request",
        success: false,
      });
    }
   else if (id&& type=="allheads") {


const webWithPages = await models.Website.aggregate([
  { $match: {} }, // Filter customers with isDelete set to false
  { $sort: { createdAt: -1 } },
  {
    $lookup: {
      from: "heads",
      localField: "_id",
      foreignField: "website",
      as: "heads",
    },
  },
]).exec();


   


      const Response = {
        // WebsiteAllDetails,
        webWithPages,
      };

      //sending updated customer response
      res.json({
        message: "Website Details fetched Successfully",
        data: Response,
        success: true,
      });
    }  else {
      //Upading customoer in the Db
      const WebDetails = await models.Website.find({
        _id: id,
      });

      const Response = {
        WebDetails,
      };

      //sending updated customer response
      res.json({
        message: "Website Details fetched Successfully",
        data: Response,
        success: true,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const update = async (req: AuthenticatedRequest, res: Response) => {
  try {
    let id = req.query.id;

    if (!id) {
      res.status(400).json({
        message: "Bad Request",
        success: false,
      });
    } else {
      const isSameExist = await models.Head.findOne({
        webPageUrl: req.body.webPageUrl,
      });

      console.log({ isSameExist });

      if (isSameExist && isSameExist?._id.toString() != id) {
        res.status(400).json({
          message: "Same page Already Exist",
          success: false,
        });
      } else {
        //Upading customoer in the Db
        const updatedHead = await models.Head.findOneAndUpdate(
          {
            _id: id,
          },
          {
            $set: {
              ...req.body,
            },
          },

          {
            new: true,
          }
        );

        const Response = {
          updatedHead,
        };

        //sending updated customer response
        res.json({
          message: "Head tagas Updated Successfully",
          data: Response,
          success: true,
        });
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};
