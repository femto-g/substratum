import { Prisma } from '@prisma/client';
import { Context } from '../context';

export interface User extends Prisma.usersCreateInput {};

export interface UserRepository {
  create : (user: User, context: Context) => any,
  findById : (id : number, context : Context) => any,
  findByName : (username : string, context : Context) => any
}




export const userRepository : UserRepository = {


  create: async (user : User, context : Context) => {
    let result = null;
    try{
      result =  await context.client.users.create({data : user});
    } catch(e){
      console.error(e);
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          // console.log(
          //   'There is a unique constraint violation, a new user cannot be created with this email'
          // )
          return null;

        }
      }
      throw e;
    }
    return result;

  },

  findById: async (id : number, context : Context) : Promise<any> => {
    let result = null;
    const where = { 
      where : {
        user_id : id
      }
    };

    try{
      result = await context.client.users.findUnique(where)
    }
    catch(e){
      console.error(e);
      throw e;
    }

    return result;
  },

  findByName: async (username : string, context : Context) : Promise<any> => {
    let result = null;
    const where = { 
      where : {
        username: username
      }
    };

    try{
      result = await context.client.users.findUnique(where)
    } catch(e){
      console.error(e);
      throw e;
    }

    return result;
  }

}