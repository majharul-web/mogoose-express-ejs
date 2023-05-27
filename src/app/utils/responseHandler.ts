import { Response } from "express";

interface IAPIResponse {
  success: boolean;
  data?: any;
  error?: any;
  message?: string;
}

export const sendApiResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  message?: string,
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
  if (message) {
    apiResponse.message = message;
  }
  res.status(statusCode).send(apiResponse);
};
