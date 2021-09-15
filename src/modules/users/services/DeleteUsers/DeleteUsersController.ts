/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserService } from './DeleteUsersService';

export class DeleteUserController {
  static async handle( request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUserService = container.resolve(DeleteUserService);
    return response.status(200).json(await deleteUserService.execute(id));
  }
}
