import { Routes } from "@nestjs/core";
import { UserModule } from "./user/user.module";

export const AuthRoutes: Routes = [
    {
        path: 'user',
        module: UserModule
    }
];