import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../../auth/user/entities/user.entity';
import { BaseEntity } from '../../../shared/entity-extends/base-entity';
import { NonUserMentAlzh } from '../../non-user-ment-alzh/entities/non-user-ment-alzh.entity';

@Entity('ment_alzh')
export class MentAlzh extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'ment_alzh_id',
    type: 'bigint',
  })
  ment_alzh_id: number;

  @Column({
    name: 'user_id',
    type: 'bigint',
    nullable: false,
  })
  user_id: number;

  @Column({
    name: 'orientacion_1',
    type: 'int',
    nullable: true,
    default: null,
  })
  orientacion: number;

  @Column({
    name: 'orientacion_1_time',
    type: 'text',
    nullable: true,
    default: null,
  })
  orientacion_1_time: string;

  @Column({
    name: 'orientacion_2',
    type: 'int',
    nullable: true,
    default: null,
  })
  orientacion_2: number;

  @Column({
    name: 'orientacion_2_time',
    type: 'text',
    nullable: true,
    default: null,
  })
  orientacion_2_time: string;

  @Column({
    name: 'fijacion',
    type: 'int',
    nullable: true,
    default: null,
  })
  fijacion: number;

  @Column({
    name: 'fijacion_time',
    type: 'text',
    nullable: true,
    default: null,
  })
  fijacion_time: string;

  @Column({
    name: 'lenguaje',
    type: 'int',
    nullable: true,
    default: null,
  })
  lenguaje: number;

  @Column({
    name: 'lenguaje_time',
    type: 'text',
    nullable: true,
    default: null,
  })
  lenguaje_time: string;

  @Column({
    name: 'calculo',
    type: 'int',
    nullable: true,
    default: null,
  })
  calculo: number;

  @Column({
    name: 'calculo_time',
    type: 'text',
    nullable: true,
    default: null,
  })
  calculo_time: string;

  @Column({
    name: 'memoria',
    type: 'int',
    nullable: true,
    default: null,
  })
  memoria: number;

  @Column({
    name: 'memoria_time',
    type: 'text',
    nullable: true,
    default: null,
  })
  memoria_time: string;

  @Column({
    name: 'non_user_ment_alzh_id',
    type: 'bigint',
    nullable: false,
  })
  non_user_ment_alzh_id: number;

  @ManyToOne(() => NonUserMentAlzh, (numa) => numa.non_user_ment_alzh_id)
  @JoinColumn({ name: 'non_user_ment_alzh_id' })
  obj_non_user_ment_alzh: NonUserMentAlzh;

  @ManyToOne(() => User, (user) => user.list_ment_alzh)
  @JoinColumn({ name: 'user_id' })
  obj_user: User;
}
