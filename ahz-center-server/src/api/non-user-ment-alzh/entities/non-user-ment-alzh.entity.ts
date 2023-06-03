import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../shared/entity-extends/base-entity';

@Entity('non_user_ment_alzh')
export class NonUserMentAlzh extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'non_user_ment_alzh_id',
    type: 'bigint',
  })
  non_user_ment_alzh_id: number;

  @Column({
    name: 'user_name',
    nullable: true,
    type: 'text',
    default: () => 'NULL',
  })
  user_name: string;

  @Column({
    name: 'edad',
    nullable: true,
    type: 'int',
    default: () => 'NULL',
  })
  edad: number;

  @Column({
    name: 'sexo',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  sexo: string;

  @Column({
    name: 'orientacion_1',
    type: 'int',
    nullable: true,
    default: () => 'NULL',
  })
  orientacion_1: number;

  @Column({
    name: 'orientacion_1_time',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  orientacion_1_time: string;

  @Column({
    name: 'orientacion_2',
    type: 'int',
    nullable: true,
    default: () => 'NULL',
  })
  orientacion_2: number;

  @Column({
    name: 'orientacion_2_time',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  orientacion_2_time: string;

  @Column({
    name: 'fijacion',
    type: 'int',
    nullable: true,
    default: () => 'NULL',
  })
  fijacion: number;

  @Column({
    name: 'fijacion_time',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  fijacion_time: string;

  @Column({
    name: 'lenguaje',
    type: 'int',
    nullable: true,
    default: () => 'NULL',
  })
  lenguaje: number;

  @Column({
    name: 'lenguaje_time',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  lenguaje_time: string;

  @Column({
    name: 'calculo',
    type: 'int',
    nullable: true,
    default: () => 'NULL',
  })
  calculo: number;

  @Column({
    name: 'calculo_time',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  calculo_time: string;

  @Column({
    name: 'memoria',
    type: 'int',
    nullable: true,
    default: () => 'NULL',
  })
  memoria: number;

  @Column({
    name: 'memoria_time',
    type: 'text',
    nullable: true,
    default: () => 'NULL',
  })
  memoria_time: string;

  @Column({
    name: 'is_assigned',
    type: 'boolean',
    default: false,
  })
  is_assigned: boolean;
}
