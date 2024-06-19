/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from 'src/common/types';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  // TODO: Implement the endpoint to create a comment
  createComment(@Body() data: CreateCommentDto) {
    // Implementation goes here
  }

  @Get('post/:postId')
  // TODO: Implement the endpoint to find comments by post id
  findCommentsByPostId(@Param('postId') postId: number) {
    // Implementation goes here
  }

  @Get()
  // TODO: Implement the endpoint to fetch all comments
  getAllComments() {
    // Implementation goes here
  }
}
