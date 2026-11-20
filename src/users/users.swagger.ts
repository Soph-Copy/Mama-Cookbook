import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto.js';

export function GetAllUsersDoc() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all users' }),
    ApiResponse({ status: 200, description: 'Successfully retrieved all users', type: [CreateUserDto]}),
  );
}

export function GetUserByIdDoc() {
  return applyDecorators(
    ApiOperation({ summary: 'Get user by ID' }),
    ApiParam({ name: 'id', description: 'User ID' }),
    ApiResponse({ status: 200, description: 'Found specific user', type: CreateUserDto}),
    ApiResponse({ status: 404, description: 'User not found' }),
  );
}

export function CreateUserDoc() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new user' }),
    ApiBody({ type: CreateUserDto }),
    ApiResponse({ status: 201, description: 'User created', type: [CreateUserDto] }),
  );
}