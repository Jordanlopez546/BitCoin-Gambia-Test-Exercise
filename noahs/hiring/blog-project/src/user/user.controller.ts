/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/common/types';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  // TODO: Implement the endpoint to create a user
  createUser(@Body() data: CreateUserDto) {
    // Implementation goes here
  }

  @Get(':email')
  // TODO: Implement the endpoint to find a user by email
  findUserByEmail(@Param('email') email: string) {
    // Implementation goes here
  }

  @Get()
  // TODO: Implement the endpoint to fetch all users
  getAllUsers() {
    // Implementation goes here
  }
}
