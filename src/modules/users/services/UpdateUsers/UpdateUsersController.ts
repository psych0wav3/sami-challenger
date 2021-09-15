/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpdateUserDTO } from '@modules/users/dtos/UpdateUserDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserService } from './UpdateUsersService';

export class UpdateUserController {
  static async handle(request: Request, response: Response): Promise<Response> {
    const user: UpdateUserDTO = request.body;
    const updateUserService = container.resolve(UpdateUserService);
    return response.status(201).json(await updateUserService.execute(user));
  }
}
