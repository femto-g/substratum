import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../../../src/util/helpers";
import crypto from "crypto";
import {
  createUser,
  findUserById,
  findUserByName,
} from "../../../src/data/repositories/userRepository";
import { getContext } from "../../../src/data/context";
describe("Database: User respository", () => {
  const client = getContext().client;

  beforeAll(async () => {
    const username = "user1";
    const salt = crypto.randomBytes(16);
    const hashed_password = await hashPassword("password", salt);
    await client.users.create({
      data: {
        username,
        hashed_password,
        salt,
      },
    });
  });

  afterAll(async () => {
    await client.users.deleteMany();
    await client.$disconnect();
  });

  describe("create", () => {
    test("when username exists in db", async () => {
      const username = "user1";
      const salt = crypto.randomBytes(16);
      const hashed_password = await hashPassword("password", salt);

      const result = await createUser({
        username,
        hashed_password,
        salt,
      });

      expect(result).toBe(null);
    });

    test("when username does not exist in db", async () => {
      const username = "user2";
      const salt = crypto.randomBytes(16);
      const hashed_password = await hashPassword("password", salt);

      const result = await createUser({
        username,
        hashed_password,
        salt,
      });

      expect(result).toBeTruthy();
    });

    describe("find by name", () => {
      test("when a user with the name exists in the db", async () => {
        const username = "user1";
        const result = await findUserByName(username);
        expect(result).toBeTruthy();
      });

      test("when a user with the name does not exist in the db", async () => {
        const username = "user9871042938741";
        const result = await findUserByName(username);
        expect(result).toBeFalsy;
      });
    });

    // describe("find by id", async () => {
    //   const existingUser = await client.users.findFirst();
    //   const existingId = existingUser!.id;
    //   const nonExistingId = 1984375923;
    //   client.users.delete({ where: { id: nonExistingId } });

    //   test("when a user with the id exists in the db", async () => {
    //     const result = await findUserById(existingId);
    //     expect(result).toBeTruthy();
    //   });

    //   test("when a user with the id exists in the db", async () => {
    //     const id = 1984375923;
    //     const result = await findUserById(nonExistingId);
    //     expect(result).toBeFalsy();
    //   });
    //});
  });
});
