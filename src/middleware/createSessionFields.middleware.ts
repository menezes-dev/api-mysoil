import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";

const createSessionFieldsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;
  const missingFields = [];

  if (!email) missingFields.push("email");
  if (!password) missingFields.push("password");

  if (missingFields.length > 0) {
    const errorMessage = `Os seguintes campos estão faltando: ${missingFields.join(
      ", "
    )}`;

    throw new AppError(errorMessage, 400);
  }

  return next();
};

export default createSessionFieldsMiddleware;
