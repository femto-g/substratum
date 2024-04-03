import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(user : Prisma.usersCreateInput) : Promise<void> {

  let createUser;
  try{
    createUser = await prisma.users.create({data : user});
  }
  catch(e){
    console.error(e);
  }

}

async function findUserById(id : number) : Promise<any> {
  let user;
  const where = { 
    where : {
      user_id : id
    }
  };

  try{
    user = await prisma.users.findUnique(where)
  }
  catch(e){
    console.error(e);
  }

  return user;
}

async function findUserByName(username : string) : Promise<any> {
  let user;
  const where = { 
    where : {
      username: username
    }
  };

  try{
    user = await prisma.users.findUnique(where)
  }
  catch(e){
    console.error(e);
  }

  return user;
}