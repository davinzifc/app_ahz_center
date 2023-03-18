import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Index } from 'typeorm/decorator/Index';
import { BaseEntity } from '../../../shared/entity-extends/base-entity';
import { User } from '../../user/entities/user.entity';
import { UserRole } from '../../user-role/entities/user-role.entity';


@Entity('user_by_role')
@Index(['user_id', 'role_id'])
export class UserByRole extends BaseEntity{

    @Column({
        name: 'user_id',
        type: 'bigint',
        nullable: false,
        primary: true
    })
    user_id: number;

    @Column({
        name: 'role_id',
        type: 'bigint',
        nullable: false,
        primary: true
    })
    role_id: number;

    @ManyToOne(() => User, (u) => u.user_by_role)
    @JoinColumn({
        name: 'user_id'
    })
    user: User;

    @ManyToOne(() => UserRole, (ur) => ur.user_by_role)
    @JoinColumn({
        name: 'role_id'
    })
    role: UserRole;
}
