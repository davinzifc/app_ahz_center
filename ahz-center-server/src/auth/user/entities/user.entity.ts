import {
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../../../shared/entity-extends/base-entity';
import { UserByRole } from '../../user-by-role/entities/user-by-role.entity';
import { MentAlzh } from '../../../api/ment-alzh/entities/ment-alzh.entity';
import { Gender } from './gender.entity';

@Entity('user')
@Index(['user_id'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  user_id: number;

  @Column({
    type: 'text',
    nullable: false,
    name: 'first_name',
  })
  first_name: string;

  @Column({
    type: 'text',
    name: 'last_name',
    nullable: true,
    default: () => 'NULL',
  })
  last_name!: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'email',
  })
  email: string;

  @Column({
    type: 'text',
    name: 'password',
  })
  password: string;

  @Column({
    name: 'is_application',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  is_application: boolean;

  @Column({
    name: 'birthdate',
    type: 'timestamp',
    nullable: true,
    default: () => 'NULL',
  })
  birthdate!: Date;

  @Column({
    name: 'identity_card',
    type: 'bigint',
    nullable: true,
    default: () => 'NULL',
  })
  identity_card!: number;

  @Column({
    name: 'phone_number',
    type: 'bigint',
    nullable: true,
    default: () => 'NULL',
  })
  phone_number!: number;

  @Column({
    name: 'gender_id',
    type: 'bigint',
    nullable: true,
    default: () => 'NULL',
  })
  gender_id!: number;

  @ManyToOne(() => Gender, (g) => g.user_list)
  @JoinColumn({
    name: 'gender_id',
  })
  obj_gender: Gender;

  @OneToMany(() => UserByRole, (ur) => ur.user)
  user_by_role: UserByRole[];

  @OneToMany(() => MentAlzh, (ma) => ma.obj_user)
  list_ment_alzh: MentAlzh[];
}
