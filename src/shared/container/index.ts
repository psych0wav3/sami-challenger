import { UserRepository } from '@modules/users/infra/database/repositories/UserRepository';
import { IUserRespository } from '@modules/users/repositories/IUserRespository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRespository>('UserRepository', UserRepository);
