import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import { User } from '@modules/users/models/IUser';
import { IUserRespository } from '@modules/users/repositories/IUserRespository';
import { inject, injectable } from 'tsyringe';
import { v4 } from 'uuid';

@injectable()
export class CreateUserService {
  private users: User;

  public constructor(
    @inject('UserRepository') private userRepository: IUserRespository,
  ) {}

  public async execute(user: CreateUserDTO): Promise<void> {
    this.users = { ...user, id: v4() };
    await this.userRepository.create(this.users);
  }
}
