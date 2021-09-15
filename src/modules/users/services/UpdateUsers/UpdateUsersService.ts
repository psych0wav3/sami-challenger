import { UpdateUserDTO } from '@modules/users/dtos/UpdateUserDTO';
import { IUserRespository } from '@modules/users/repositories/IUserRespository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
export class UpdateUserService {
  public constructor(
    @inject('UserRepository') private userRepository: IUserRespository,
  ) {}

  public async execute(user: UpdateUserDTO): Promise<void> {
    const hasUser = await this.userRepository.findOne(user.id);
    if (!hasUser) throw new AppError(404, 'Usuário não encontrado!');
    await this.userRepository.update(user);
  }
}
