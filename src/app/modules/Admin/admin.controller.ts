import { PrismaClient } from "../../../../generated/prisma";
import { Request, Response } from "express";
import { adminService } from "./admin.service";

const prisma = new PrismaClient();

const getAllFromDB = async (req: Request, res: Response) => {
  const result = await adminService.getAllFromDB();

  res.status(200).json({
    success: true,
    message: "Admin Data Fetched",
    data: result,
  });
};

export const adminController = {
  getAllFromDB,
};
