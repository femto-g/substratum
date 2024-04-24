import { PrismaClient } from '@prisma/client'

export type Context = {
  client: PrismaClient
}

const client = new PrismaClient();

export const createContext = () : Context => {
  return {
    client
  }
}
