import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('process_type')
export class ProcessType {
  @PrimaryGeneratedColumn({
    name: 'process_type_id',
    type: 'bigint',
  })
  process_type_id: number;

  @Column({
    name: 'process_type_name',
    type: 'text',
    nullable: false,
  })
  process_type_name: string;

  @Column({
    name: 'process_type_description',
    type: 'text',
    nullable: true,
    default: null,
  })
  process_type_description!: string;

  @Column({
    name: 'table_related',
    type: 'text',
    nullable: false,
  })
  table_related: string;
}
