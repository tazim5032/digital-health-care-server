import { Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllFromDB = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ["limit", "page"]);

    const result = await adminService.getAllFromDB(filters, options);

    res.status(200).json({
      success: true,
      message: "Admin Data Fetched",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something Went Wrong",
      error: err,
    });
  }
};

export const adminController = {
  getAllFromDB,
};
