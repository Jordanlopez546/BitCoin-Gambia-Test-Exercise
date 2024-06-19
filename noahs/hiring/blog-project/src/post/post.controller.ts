/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from 'src/common/types';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  // TODO: Implement the endpoint to create a post
  createPost(@Body() data: CreatePostDto) {
    // Implementation goes here
  }

  @Get(':id')
  // TODO: Implement the endpoint to find a post by id
  findPostById(@Param('id') id: number) {
    // Implementation goes here
  }

  @Get()
  // TODO: Implement the endpoint to fetch all posts
  getAllPosts() {
    // Implementation goes here
  }
}
