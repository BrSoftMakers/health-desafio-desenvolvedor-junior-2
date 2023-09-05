import { ErrorRequestHandler } from "express";

const dataHandler: ErrorRequestHandler = (data, _req, res, _next) => {
  const { statusCode, body } = data;
  return res.status(statusCode).json(body);
};

export default dataHandler;
