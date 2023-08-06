import { User } from './user.dto';

export interface UserControllerInterface {
  user: User;
  token: string;
  roleId: number | null;
}
