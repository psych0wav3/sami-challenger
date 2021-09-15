export class UpdateUserDTO {
  public id: string;

  public name: string;

  public cpf: number;

  public rg: number;

  public birthDate: string;

  public plan: string;

  public dependents?: number;
}
