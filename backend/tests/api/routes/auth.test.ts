import { Server } from "http";
import { app } from "../../../src/index";
import request from "supertest";
import { getContext } from "../../../src/data/context";
import crypto from "crypto";
import { hashPassword } from "../../../src/util/helpers";
describe("Database: auth routes", () => {
  const username = "exists";
  const password = "password";
  let salt;
  let hashed_password;
  const client = getContext().client;
  beforeAll(async () => {
    salt = crypto.randomBytes(16);
    hashed_password = await hashPassword(password, salt);
    const user = {
      username,
      hashed_password,
      salt,
    };
    await client.users.create({
      data: user,
    });
  });

  afterAll(async () => {
    await client.users.deleteMany();
    await client.$disconnect();
  });
  describe("login route", () => {
    test("with bad body shape", async () => {
      const body = { a: "adf", b: "djsf" };
      const response = await request(app)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(body);
      expect(response.status).toBe(400);
    });
    test("with good body shape but nonexistent user", async () => {
      const body = { username: "adf", password: "djsf" };
      const response = await request(app)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(body);
      expect(response.status).toBe(401);
    });

    test("with existing user", async () => {
      const body = { username: username, password: password };
      const response = await request(app)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(body);
      expect(response.status).toBe(200);
    });
  });

  describe("sign up route", () => {
    test("with bad body shape", async () => {
      const body = { a: "adf", b: "djsf" };
      const response = await request(app)
        .post("/signup")
        .set("Content-Type", "application/json")
        .send(body);
      expect(response.status).toBe(400);
    });
    test("already existing user", async () => {
      const body = { username, password };
      const response = await request(app)
        .post("/signup")
        .set("Content-Type", "application/json")
        .send(body);
      expect(response.status).toBe(401);
    });

    test("with new user", async () => {
      const body = { username: "newuser", password: "something" };

      const response = await request(app)
        .post("/signup")
        .set("Content-Type", "application/json")
        .send(body);
      expect(response.status).toBe(200);
    });
  });
});
