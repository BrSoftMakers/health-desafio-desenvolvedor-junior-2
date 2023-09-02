import { HttpResponse } from "../types/http";
import { badRequest, notFound, serverError } from "../helpers/httpResponses";

interface httpResponseType {
  [key: string]: HttpResponse;
}

export const errorResponses = (error: unknown) => {
  const { name, message } =
    error instanceof Error
      ? { name: error.name, message: error.message }
      : { name: "Error", message: String(error) };

  const httpResponses: httpResponseType = {
    NotFoundError: notFound(message),
    BadRequestError: badRequest(message),
  };

  return httpResponses[name] || serverError(message);
};
