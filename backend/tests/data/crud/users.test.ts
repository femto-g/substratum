// import {
//   mockCreateUser,
//   mockFindUserById,
//   mockFindUserByName,
// } from "../../../src/data/crud/users";
// import { mock } from "jest-mock-extended";
// import {
//   User,
//   UserRepositoryFunction,
//   create,
//   findById,
//   findByName,
// } from "../../../src/data/repositories/userRepository";
// import { Context } from "../../../src/data/context";

// describe("Users crud", () => {
//   const mockContext = mock<Context>();

//   test("create user", async () => {
//     const mockUser = mock<User>();
//     const mockUserRepoFn = jest.fn();
//     await mockCreateUser(mockUser, mockContext, mockUserRepoFn);

//     expect(mockUserRepoFn).toHaveBeenCalledWith(mockUser, mockContext);
//   });

//   test("find user by id", async () => {
//     const num = 0;
//     const mockUserRepoFn = jest.fn();
//     await mockFindUserById(num, mockContext, mockUserRepoFn);

//     expect(mockUserRepoFn).toHaveBeenCalledWith(num, mockContext);
//   });

//   test("find user by name", async () => {
//     const name = "username";
//     const mockUserRepoFn = jest.fn();
//     await mockFindUserByName(name, mockContext, mockUserRepoFn);
//     expect(mockUserRepoFn).toHaveBeenCalledWith(name, mockContext);
//   });
// });
