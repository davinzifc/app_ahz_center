import { Action } from '../../actions/entities/action.entity';
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { UserRole } from '../../user-role/entities/user-role.entity';

@Entity('role_by_action')
export class RoleByAction {
    @Column({
        name: 'action_id',
        type: 'bigint',
        primary: true,
        nullable: false
    })
    action_id: number;

    @Column({
        name: 'role_id',
        type: 'bigint',
        primary: true,
        nullable: false
    })
    role_id: number;

    @ManyToOne(() => Action, u => u.role_by_action)
    @JoinColumn({
        name: 'action_id'
    })
    action: Action;

    @ManyToOne(() => UserRole, ur => ur.role_by_action)
    @JoinColumn({
        name: 'role_id'
    })
    user_role: UserRole;
}
