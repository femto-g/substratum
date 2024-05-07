import { Context, createContext } from "../context";
import {User, userRepository, UserRepository} from "../repositories/userRepository"

export interface UserCrud {
  (index : any) : Promise<User | null>
}

const context = createContext();

export async function mockCreateUser(param : User, context : Context, repo : UserRepository) {
  return await repo.create(param, context);
}

export async function createUser(user : User) {
  return await mockCreateUser(user, context, userRepository);
}

export async function mockFindUserById(id : number, context : Context, repo : UserRepository) {
  return await repo.findById(id, context);
}

export async function findUserById(id : number){
  return await mockFindUserById(id, context, userRepository);
}

export async function mockFindUserByName(username : string, context : Context, repo : UserRepository) {
  return await repo.findByName(username, context);
}

export async function findUserByName(username : string){
  return await mockFindUserByName(username, context, userRepository);
}