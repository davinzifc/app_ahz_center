import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '../../../shared/entity-extends/base-entity';
import { User } from '../../../auth/user/entities/user.entity';

@Entity('management_ticket')
export class ManagementTicket extends BaseEntity {
  @PrimaryColumn({
    type: 'bigint',
    name: 'management_ticket_id',
  })
  management_ticket_id: number;

  @Column({
    type: 'bigint',
    name: 'patient_id',
  })
  patient_id: number;

  @Column({
    type: 'bigint',
    name: 'doctor_id',
  })
  doctor_id: number;

  @ManyToOne(() => User, (user) => user.user_id)
  @JoinColumn({ name: 'patient_id' })
  patient: User;

  @ManyToOne(() => User, (user) => user.user_id)
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;
}
