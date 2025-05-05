import { Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";



const getAllFromDB = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, ["name", "email", "searchTerm"]);
    const result = await adminService.getAllFromDB(filters);

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
