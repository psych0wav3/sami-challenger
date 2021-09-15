export class CreateUserDTO {
  public name: string;

  public cpf: number;

  public rg: number;

  public birthDate: string;

  public plan: string;

  public dependents?: number;
}
