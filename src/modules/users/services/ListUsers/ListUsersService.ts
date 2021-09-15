import { User } from '@modules/users/models/IUser';
import { IUserRespository } from '@modules/users/repositories/IUserRespository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListUserService {
  public constructor(
    @inject('UserRepository') private userRepository: IUserRespository,
  ) {}

  public async execute(): Promise<User[]> {
    return this.userRepository.list();
  }
}
