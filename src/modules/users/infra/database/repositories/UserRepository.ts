import { User } from '@modules/users/models/IUser';
import { IUserRespository } from '@modules/users/repositories/IUserRespository';

import { AppError } from '@shared/errors/AppError';
import connection from '@shared/infra/database/connection';

export class UserRepository implements IUserRespository {
  public async findOne(id: string): Promise<User> {
    try {
      const [response] = await connection(this.table)
        .select('*')
        .where('id', id);
      return response;
    } catch (err: any) {
      throw new AppError(500, err.message);
    }
  }

  private table = 'users';

  public async create(user: User): Promise<void> {
    try {
      await connection(this.table).insert(user);
    } catch (err: any) {
      throw new AppError(500, err.message);
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await connection(this.table).where('id', id).del();
    } catch (err: any) {
      throw new AppError(500, err.message);
    }
  }

  public async update(user: User): Promise<void> {
    try {
      await connection(this.table).where('id', user.id).update({
        name: user.name,
        cpf: user.cpf,
        rg: user.rg,
        birthDate: user.birthDate,
        plan: user.plan,
        dependents: user.dependents,
      });
    } catch (err: any) {
      throw new AppError(500, err.message);
    }
  }

  public async list(): Promise<User[]> {
    try {
      const response = await connection(this.table).select('*');
      return response;
    } catch (err: any) {
      throw new AppError(500, err.message);
    }
  }
}
