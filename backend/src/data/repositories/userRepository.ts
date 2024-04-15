import { Prisma } from '@prisma/client';
import { Context } from '../context';

interface UserRepository {
  create : (user: Prisma.usersCreateInput, context: Context) => any,
  findById : (id : number, context : Context) => any,
  findByName : (username : string, context : Context) => any
}


export const userRepository : UserRepository = {


  create: async (user : Prisma.usersCreateInput, context : Context) => {

    let createUser;
    try{
      createUser = await context.client.users.create({data : user});
    }
    catch(e){
      console.error(e);
    }

  },

  findById: async (id : number, context : Context) : Promise<any> => {
    let user;
    const where = { 
      where : {
        user_id : id
      }
    };

    try{
      user = await context.client.users.findUnique(where)
    }
    catch(e){
      console.error(e);
    }

    return user;
  },

  findByName: async (username : string, context : Context) : Promise<any> => {
    let user;
    const where = { 
      where : {
        username: username
      }
    };

    try{
      user = await context.client.users.findUnique(where)
    }
    catch(e){
      console.error(e);
    }

    return user;
  }

}