import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { UserByRole } from '../../user-by-role/entities/user-by-role.entity';
import { RoleByAction } from '../../role-by-action/entities/role-by-action.entity';

@Entity('user_role')
export class UserRole {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_role_id'
    })
    user_role_id: number;

    @Column({
        type: 'text',
        name: 'role_name',
        nullable: true
    })
    role_name: string;

    @OneToMany(() => UserByRole, (ur) => ur.role)
    user_by_role: UserByRole[];

    @OneToMany(() => RoleByAction, (ra) => ra.user_role)
    role_by_action: RoleByAction[];
}
