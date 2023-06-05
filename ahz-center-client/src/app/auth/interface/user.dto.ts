import { BaseEntity } from './base-entity';

export class User extends BaseEntity {
  public user_id: number | null = null;
  public first_name: string = '';
  public last_name?: string = '';
  public email: string = '';
  public is_application?: boolean | null = null;
  public user_by_role: any[] = [];
  public list_ment_alzh: any[] = [];
}
