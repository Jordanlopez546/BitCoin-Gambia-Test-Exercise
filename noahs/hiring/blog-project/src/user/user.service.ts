/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/prisma.client';
import { CreateUserDto } from 'src/common/types';

@Injectable()
export class UserService {
  constructor() {}

  // DONE: Implement the method to create a user
  async createUser({ name, email, password }: CreateUserDto) {
    const user = await prisma.user.create({ data: { name, email, password } });
    return user;
  }

  // TODO: Implement the method to find a user by email
  async findUserByEmail(email: string) {
    // Implementation goes here
  }

  // TODO: Implement the method to fetch all users
  async getAllUsers() {
    // Implementation goes here
  }
}
