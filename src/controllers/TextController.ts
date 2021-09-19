import { Request, Response } from "express";
import { AppError } from "./errors/AppError";

const reverse = (req: Request, res: Response) => {
  const { text } = req.query;

  if(!text) throw new AppError("Missing text parameter.");

  const reversed = (text as string).split('').reverse().join('');

  return res.status(200).json({ reversed });
};

export { reverse };