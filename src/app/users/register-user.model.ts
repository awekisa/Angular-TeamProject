export class RegisterUserModel {
  constructor(
    public username?: string,
    public password?: string,
    public confirmPassword?: string,
    public firstName?: string,
    public lastName?: string,
    public company?: string
  ) {}
}