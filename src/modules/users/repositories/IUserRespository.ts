import { User } from '../models/IUser';

export interface IUserRespository {
  create(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  update(user: User): Promise<void>;
  list(): Promise<User[]>;
  findOne(id: string): Promise<User>;
}
