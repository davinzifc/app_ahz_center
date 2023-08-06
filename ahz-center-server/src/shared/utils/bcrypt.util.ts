import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { env } from 'process';

@Injectable()
export class BcryptPasswordEncoder {
  public matches(hashedPassword: string, incomingPassword: any): boolean {
    try {
      return bcrypt.compareSync(incomingPassword, hashedPassword);
    } catch (error) {
      return false;
    }
  }

  public encode(incomingPassword: any): string {
    const salt = bcrypt.genSaltSync(parseInt(env.B_SALT));
    return bcrypt.hashSync(incomingPassword, salt);
  }
}