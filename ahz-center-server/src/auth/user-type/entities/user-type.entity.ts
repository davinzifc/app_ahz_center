import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('user_type')
export class UserType {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_type_id'
    })
    user_type_id: number;

    @Column({
        type: 'text',
        nullable: true,
        name: 'type_name'
    })
    type_name: string;

    @OneToMany(() => User, (u) => u.user_type)
    user: User[];
}
