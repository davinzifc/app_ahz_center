export class CreateUserDto {
    public first_name: string;
    public last_name: string;
    public email: string;
    public password: string;
    public user_role_id: number;
    public is_application: boolean;
}
