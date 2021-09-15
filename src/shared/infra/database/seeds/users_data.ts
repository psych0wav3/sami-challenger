/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */

import { Knex } from 'knex';
import { v4 } from 'uuid';

export async function seed(knex: Knex) {
  await knex('users').insert([
    {
      id: v4(),
      name: 'Fulano da silva',
      cpf: 12345678912,
      rg: '123456789',
      birthDate: new Date().toString(),
      plan: 'premium',
      dependents: 2,
    },
    {
      id: v4(),
      name: 'Ciclano da silva',
      cpf: 12345678912,
      rg: '123456789',
      birthDate: new Date().toString(),
      plan: 'basic',
      dependents: null,
    },
  ]);
}
