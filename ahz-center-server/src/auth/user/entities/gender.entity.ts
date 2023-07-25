import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('gender')
export class Gender {
  @PrimaryGeneratedColumn({
    name: 'gender_id',
    type: 'bigint',
  })
  gender_id: number;

  @Column({
    name: 'name',
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  description: string;

  @OneToMany(() => User, (u) => u.obj_gender)
  user_list: User[];
}
