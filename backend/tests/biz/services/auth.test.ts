import passportLocal from 'passport-local';
import passport from 'passport';
import { Request, Response } from 'express';
import { User } from '../../../src/data/repositories/userRepository';
import {mockVerify} from '../../../src/biz/services/auth'
import { mock } from 'jest-mock-extended';

describe('Auth', () => {

  describe('verify function', () => {

    test('when crud returns null', async () => {
    
      const mockFind = jest.fn(async (username) => null);
      const mockDone = jest.fn();

      await mockVerify('', '', mockDone, mockFind);

      expect(mockDone).toHaveBeenCalledWith(null, false);
    })
  })

})