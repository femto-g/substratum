import { Context, createContext } from "../context";
import {User, UserRepositoryFunction, create, findById, findByName} from "../repositories/userRepository"

export interface UserCrudFunction {
  (index : any) : Promise<User | null>
}

const context = createContext();

export async function mockCreateUser(param : User, context : Context, repo : UserRepositoryFunction) {
  return await repo(param, context);
}

export async function createUser(user : User) {
  return await mockCreateUser(user, context, create);
}

export async function mockFindUserById(id : number, context : Context, repo : UserRepositoryFunction) {
  return await repo(id, context);
}

export async function findUserById(id : number){
  return await mockFindUserById(id, context, findById);
}

export async function mockFindUserByName(username : string, context : Context, repo : UserRepositoryFunction) {
  return await repo(username, context);
}

export async function findUserByName(username : string){
  return await mockFindUserByName(username, context, findByName);
}