import { Entity, Index, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../shared/entity-extends/base-entity';
import { UserByRole } from '../../user-by-role/entities/user-by-role.entity';

@Entity('user')
@Index(['user_id'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id'
    })
    user_id: number;

    @Column({
        type: 'text',
        nullable: false,
        name: 'first_name'
    })
    first_name: string;

    @Column({
        type: 'text',
        nullable: false,
        name: 'last_name'
    })
    last_name: string;

    @Column({
        type: 'text',
        nullable: false,
        name: 'email'
    })
    email: string;

    @Column({
        type: 'text',
        nullable: true,
        name: 'password'
    })
    password: string;

    @OneToMany(() => UserByRole, (ur) => ur.user)
    user_by_role: UserByRole[];
}
