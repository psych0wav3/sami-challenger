import { IUserRespository } from '@modules/users/repositories/IUserRespository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteUserService {
  public constructor(
    @inject('UserRepository') private userRepository: IUserRespository,
  ) {}

  public async execute(id: string): Promise<void> {
    const hasUser = await this.userRepository.findOne(id);
    if(!hasUser) throw new AppError(404, "Usuário não encontrado!")
    await this.userRepository.delete(id);
  }
}
