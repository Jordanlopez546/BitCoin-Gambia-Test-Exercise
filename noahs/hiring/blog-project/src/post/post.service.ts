/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/prisma.client';
import { CreatePostDto } from 'src/common/types';

@Injectable()
export class PostService {
  constructor() {}

  // TODO: Implement the method to create a post
  async createPost(data: CreatePostDto) {
    // Implementation goes here
  }

  // TODO: Implement the method to find a post by id
  async findPostById(id: number) {
    // Implementation goes here
  }

  // TODO: Implement the method to fetch all posts
  async getAllPosts() {
    // Implementation goes here
  }
}
