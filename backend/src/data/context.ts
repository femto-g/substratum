import { PrismaClient } from '@prisma/client'

export type Context = {
  client: PrismaClient
}

export const createContext = () : Context => {
  return {
    client: new PrismaClient()
  }
}
