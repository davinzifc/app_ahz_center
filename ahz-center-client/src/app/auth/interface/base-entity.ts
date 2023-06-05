export abstract class BaseEntity {
  public created_at: string = '';
  public created_by?: number | null = null;
  public updated_at?: string | null = null;
  public update_by: number = 0;
  public is_active: boolean | null = null;
}
