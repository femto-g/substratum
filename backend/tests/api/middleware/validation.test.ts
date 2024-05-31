import { z } from "zod";
import {
  formatIssuePath,
  validateRequestBody,
} from "../../../src/api/middleware/validation";
import { DeepMockProxy, MockProxy, mock, mockDeep } from "jest-mock-extended";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

describe("validation middleware", () => {
  describe("formatIssuePath function", () => {
    test("with an array path", () => {
      const path = ["array", 1];
      const result = formatIssuePath(path);
      expect(result).toBe("array[1]");
    });

    test("with object path", () => {
      const path = ["object", "key"];
      const result = formatIssuePath(path);
      expect(result).toBe("object.key");
    });

    test("with deeply nested path", () => {
      const path = [
        "object",
        "key",
        5,
        "nestedobject",
        "nestedkey",
        1,
        0,
        "nestedarry",
        3,
      ];
      const result = formatIssuePath(path);
      expect(result).toBe(
        "object.key[5].nestedobject.nestedkey[1][0].nestedarry[3]",
      );
    });
  });

  describe("validateRequestBody middleware", () => {
    test("responds with a bad request on improperly formed body", () => {
      const schema = z.object({
        string: z.string(),
        number: z.number(),
      });

      const createdMiddleware = validateRequestBody(schema);

      const mockReq = mock<Request>();
      const mockRes: DeepMockProxy<Response> = mockDeep<Response>();
      const mockNext = mock<NextFunction>();
      mockReq.body = {};
      mockRes.status.mockReturnValue(mockRes);
      createdMiddleware(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
      expect(mockRes.json).toHaveBeenCalled();
    });

    test("calls next middleware on properly formed body", () => {
      const schema = z.object({
        string: z.string(),
        number: z.number(),
      });

      const createdMiddleware = validateRequestBody(schema);

      const mockReq = mock<Request>();
      const mockRes: DeepMockProxy<Response> = mockDeep<Response>();
      const mockNext = jest.fn();
      mockReq.body = { string: "", number: 0 };
      mockRes.status.mockReturnValue(mockRes);
      createdMiddleware(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalled();
    });
  });
});
