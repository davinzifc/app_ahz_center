export class CreateUserDto {
  public first_name: string = null;
  public last_name: string = null;
  public email: string = null;
  public password: string = null;
  public user_role_id: number = null;
  public is_application: boolean = null;
  public birthdate: Date = null;
  public identity_card: number = null;
  public phone_number: number = null;
  public gender_id: number = null;
}
