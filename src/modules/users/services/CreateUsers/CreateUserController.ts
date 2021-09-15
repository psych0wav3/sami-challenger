/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  static async handle( request: Request, response: Response): Promise<Response> {
    const user: CreateUserDTO = request.body;
    const createUserService = container.resolve(CreateUserService);
    return response.status(201).json(await createUserService.execute(user));
  }
}
