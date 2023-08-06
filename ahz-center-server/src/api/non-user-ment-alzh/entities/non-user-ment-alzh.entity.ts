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
    default: null,
  })
  user_name: string;

  @Column({
    name: 'edad',
    nullable: true,
    type: 'int',
    default: null,
  })
  edad: number;

  @Column({
    name: 'sexo',
    type: 'text',
    nullable: true,
    default: null,
  })
  sexo: string;

  @Column({
    name: 'orientacion_1',
    type: 'int',
    nullable: true,
    default: null,
  })
  orientacion_1: number;

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
    name: 'is_assigned',
    type: 'boolean',
    default: false,
  })
  is_assigned: boolean;
}
