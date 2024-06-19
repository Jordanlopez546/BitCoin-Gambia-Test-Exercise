/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/prisma.client';
import { CreateCommentDto } from 'src/common/types';

@Injectable()
export class CommentService {
  constructor() {}

  // TODO: Implement the method to create a comment
  async createComment(data: CreateCommentDto) {
    // Implementation goes here
  }

  // TODO: Implement the method to find comments by post id
  async findCommentsByPostId(postId: number) {
    // Implementation goes here
  }

  // TODO: Implement the method to fetch all comments
  async getAllComments() {
    // Implementation goes here
  }
}
