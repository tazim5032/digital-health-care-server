import { PrismaClient } from "../../../../generated/prisma";
import { Request, Response } from "express";
import { adminService } from "./admin.service";

const prisma = new PrismaClient();

const getAllFromDB = async (req: Request, res: Response) => {
  try {
    
    const result = await adminService.getAllFromDB(req.query);

    res.status(200).json({
      success: true,
      message: "Admin Data Fetched",
      data: result,
    });
  } catch (err) {
    res.status(5000).json({
      success: false,
      message: err?.name || "Something Went Wrong",
      error: err,
    });
  }
};

export const adminController = {
  getAllFromDB,
};
