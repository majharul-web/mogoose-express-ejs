import { Response } from "express";

interface IAPIResponse {
  success: boolean;
  data?: any;
  error?: any;
}

export const sendApiResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  data?: any,
  error?: any
): void => {
  const apiResponse: IAPIResponse = { success };
  if (data) {
    apiResponse.data = data;
  }
  if (error) {
    apiResponse.error = error;
  }
  res.status(statusCode).send(apiResponse);
};
