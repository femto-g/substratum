import passportLocal from "passport-local";
import passport from "passport";
import { Request, Response } from "express";
import { User } from "../../src/data/repositories/userRepository";
import { mockVerify, mockSignup } from "../../src/service/auth";
import { mock } from "jest-mock-extended";
import { cryptoPbkdf2 } from "../../src/util/promisified";
import crypto from "crypto";
import { hashPassword } from "../../src/util/helpers";

describe("Auth", () => {
  describe("verify function", () => {
    test("when crud returns null", async () => {
      const mockFind = jest.fn(async (username) => null);
      const mockDone = jest.fn();

      await mockVerify("", "", mockDone, mockFind);

      expect(mockDone).toHaveBeenCalledWith(null, false);
    });

    test("When the username exists but the password is incorrect", async () => {
      const username = "testuser";
      const password = "testpassword";
      const salt = crypto.randomBytes(16);
      const actualHashedPassword = await hashPassword("nottestpassword", salt);

      const user: User = {
        username,
        hashed_password: actualHashedPassword,
        salt,
      };
      const mockFind = jest.fn(async (username) => user);
      const mockDone = jest.fn();

      await mockVerify(username, password, mockDone, mockFind);

      expect(mockDone).toHaveBeenCalledWith(null, false);
    });

    test("When the username exists and the password is correct", async () => {
      const username = "testuser";
      const password = "testpassword";
      const salt = crypto.randomBytes(16);
      const actualHashedPassword = await hashPassword("testpassword", salt);

      const user: User = {
        username,
        hashed_password: actualHashedPassword,
        salt,
      };
      const mockFind = jest.fn(async (username) => user);
      const mockDone = jest.fn();

      await mockVerify(username, password, mockDone, mockFind);

      expect(mockDone).toHaveBeenCalledWith(null, user);
    });
  });

  describe("signup function", () => {
    test("When using an unavailable username", async () => {
      const mockRequest = mock<Request>();
      const mockCreate = jest.fn(async () => null);
      const username = "testuser";
      const password = "testpassword";

      mockRequest.body = { username, password };

      const signupResult = await mockSignup(mockRequest, mockCreate);

      expect(signupResult).toBeFalsy();
    });

    test("When using an available username", async () => {
      const username = "testuser";
      const hashed_password = crypto.randomBytes(32);
      const salt = crypto.randomBytes(16);
      const mockUser: User = {
        username,
        hashed_password,
        salt,
      };
      const mockRequest = mock<Request>();
      const mockCreate = jest.fn(async () => mockUser);
      const password = "testpassword";

      mockRequest.body = { username, password };

      const signupResult = await mockSignup(mockRequest, mockCreate);

      expect(mockRequest.login).toHaveBeenCalled();
    });
  });
});
