import { Context, createContext } from "../context";
import {userRepository, UserRepository} from "../repositories/userRepository"

const context = createContext();
const repo = userRepository;

export async function mockCreateUser(param : any, context : Context, repo : UserRepository) {
  return await repo.create(param, context);
}

export async function createUser(param : any) {
  let result = null;
  try {
    result = await mockCreateUser(param, context, userRepository);
  } catch (e) {
    throw e;
  }
  return result;
}

export async function mockFindUserById(id : number, context : Context, repo : UserRepository) {
  return await repo.findById(id, context);
}

export async function findUserById(id : number){
  let result = null;
  try {
    result = await mockFindUserById(id, context, userRepository);
  } catch (e) {
    throw e;
  }
  return result;
}

export async function mockFindUserByName(username : string, context : Context, repo : UserRepository) {
  return await repo.findByName(username, context);
}

export async function findUserByName(username : string){
  let result = null;
  try {
    result = await mockFindUserByName(username, context, userRepository);
  } catch (e) {
    throw e;
  }
  return result;
}