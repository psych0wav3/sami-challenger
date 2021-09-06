import { User } from '@modules/users/models/IUser';
import { container } from 'tsyringe';

container.registerSingleton<User>('User', User);
