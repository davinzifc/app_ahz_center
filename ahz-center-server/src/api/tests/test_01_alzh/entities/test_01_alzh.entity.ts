import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../../shared/entity-extends/base-entity';

@Entity('test_01_alzh')
export class Test01Alzh extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'test_01_alzh_id',
    type: 'bigint',
  })
  test_01_alzh_id: number;

  @Column({
    name: 'test_value',
    type: 'int',
    nullable: false,
  })
  test_value: number;

  @Column({
    name: 'test_time',
    type: 'timestamp',
    nullable: false,
  })
  test_time: Date;

  @Column({
    name: 'uuid_test_code',
    type: 'text',
    nullable: false,
  })
  uuid_test_code: string;

  @Column({
    name: 'user_id',
    type: 'bigint',
    nullable: true,
  })
  user_id: number;
}
