import { Prisma, users } from "@prisma/client";
import { Context, getContext } from "../context";

export interface User extends users {}
export interface UserCreate extends Prisma.usersCreateInput {}

export interface UserRepositoryFunction {
  (index: any): Promise<User | null>;
}

const context = getContext();

export async function mockCreateUser(
  user: UserCreate,
  context: Context,
): Promise<User | null> {
  let result = null;
  try {
    result = await context.client.users.create({ data: user });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        //unique constraint violation
        return null;
      }
    }
    throw e;
  }
  return result;
}

export async function createUser(user: UserCreate) {
  return await mockCreateUser(user, context);
}

export async function mockFindUserById(
  id: number,
  context: Context,
): Promise<User | null> {
  let result = null;
  const where = {
    where: {
      id: id,
    },
  };

  try {
    result = await context.client.users.findUnique(where);
  } catch (e) {
    console.error(e);
    throw e;
  }

  return result;
}

export async function findUserById(id: number) {
  return await mockFindUserById(id, context);
}

export async function mockFindUserByName(
  username: string,
  context: Context,
): Promise<User | null> {
  let result = null;
  const where = {
    where: {
      username: username,
    },
  };

  try {
    result = await context.client.users.findUnique(where);
  } catch (e) {
    console.error(e);
    throw e;
  }

  return result;
}

export async function findUserByName(username: string) {
  return await mockFindUserByName(username, context);
}
