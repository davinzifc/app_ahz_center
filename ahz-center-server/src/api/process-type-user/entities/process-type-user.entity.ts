import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../../shared/entity-extends/base-entity';
import { ProcessType } from '../../process-type/entities/process-type.entity';
import { User } from '../../../auth/user/entities/user.entity';

@Entity('process_type_user')
export class ProcessTypeUser extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'process_type_user_id',
    type: 'bigint',
  })
  process_type_user_id: number;

  @Column({
    name: 'process_type_id',
    type: 'bigint',
    nullable: false,
  })
  process_type_id: number;

  @Column({
    name: 'user_id',
    type: 'bigint',
    nullable: false,
  })
  user_id: number;

  @ManyToOne(() => ProcessType, (processType) => processType.process_type_id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'process_type_id',
  })
  obj_process_type!: ProcessType;

  @ManyToOne(() => User, (user) => user.user_id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  obj_user!: User;
}
