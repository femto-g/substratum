import { Context, createContext } from "../context";
import {
  CreateUser,
  User,
  UserRepositoryFunction,
  create,
  findById,
  findByName,
} from "../repositories/userRepository";

export interface UserCrudFunction {
  (index: any): Promise<User | null>;
}

const context = createContext();

export async function mockCreateUser(
  param: CreateUser,
  context: Context,
  repo: UserRepositoryFunction,
) {
  return await repo(param, context);
}

export async function createUser(user: CreateUser) {
  return await mockCreateUser(user, context, create);
}

export async function mockFindUserById(
  id: number,
  context: Context,
  repo: UserRepositoryFunction,
) {
  return await repo(id, context);
}

export async function findUserById(id: number) {
  return await mockFindUserById(id, context, findById);
}

export async function mockFindUserByName(
  username: string,
  context: Context,
  repo: UserRepositoryFunction,
) {
  return await repo(username, context);
}

export async function findUserByName(username: string) {
  return await mockFindUserByName(username, context, findByName);
}

// function crudFactory(context: Context, repo: UserRepositoryFunction) {
//   return async (index: any) => {
//     return await repo(index, context);
//   };
// }

// const find = crudFactory(context, findByName);
// const create2 = crudFactory(context, createUser);
