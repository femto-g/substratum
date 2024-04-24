import {mockCreateUser, mockFindUserById, mockFindUserByName} from '../../../src/data/crud/users';
import {mock} from 'jest-mock-extended';
import { User, UserRepository } from '../../../src/data/repositories/userRepository';
import { Context } from '../../../src/data/context';

describe('Users crud', () => {

  const mockUserRepo = mock<UserRepository>();
  const mockContext = mock<Context>();

  test('create user', async () => {

    const mockUser = mock<User>();
    await mockCreateUser(mockUser, mockContext, mockUserRepo);
    expect(mockUserRepo.create).toHaveBeenCalledWith(mockUser, mockContext);
  });

  test('find user by id', async () => {
    const num = 0;
    await mockFindUserById(num, mockContext, mockUserRepo);
    expect(mockUserRepo.findById).toHaveBeenCalledWith(num, mockContext);
  });

  test('find user by name', async () => {
    const name = "username";
    await mockFindUserByName(name, mockContext, mockUserRepo);
    expect(mockUserRepo.findByName).toHaveBeenCalledWith(name, mockContext);
  });
})