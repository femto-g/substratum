import { Context, createContext } from "../context";
import {userRepository, UserRepository} from "../repositories/userRepository"

const context = createContext();
const repo = userRepository;

export async function mockCreateUser(param : any, context : Context, repo : UserRepository) {
  await repo.create(param, context);
}

async function createUser(param : any) {
  return await mockCreateUser(param, context, userRepository);
}
