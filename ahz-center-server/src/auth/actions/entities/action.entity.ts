import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleByAction } from '../../role-by-action/entities/role-by-action.entity';

@Entity('action')
export class Action {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'action_id'
    })
    action_id: number;

    @Column({
        type: 'text',
        nullable: true,
        name: 'action_name',
        default: () => 'NULL'
    })
    action_name: string;

    @OneToMany(() => RoleByAction, (ra) => ra.action)
    role_by_action: RoleByAction[];
}
