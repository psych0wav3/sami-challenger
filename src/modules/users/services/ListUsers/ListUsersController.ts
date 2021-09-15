/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserService } from './ListUsersService';

export class ListUserController {
  static async handle( request: Request, response: Response): Promise<Response> {
    const listUserService = container.resolve(ListUserService);
    return response.status(200).json(await listUserService.execute());
  }
}
