import { Routes } from "@nestjs/core";
import { AuthModule } from "./auth/auth.module";
import { AuthRoutes } from "./auth/auth.routes";

export const MainRoutes: Routes = [
    {
        path: 'auth',
        module: AuthModule,
        children: AuthRoutes,
    }
]