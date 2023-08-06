import { PartialType } from "@nestjs/mapped-types";
import { User } from "../entities/user.entity";

export class UserRoleDto extends PartialType(User) {
    public role: string;
}