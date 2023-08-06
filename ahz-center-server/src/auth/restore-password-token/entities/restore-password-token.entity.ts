import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../../shared/entity-extends/base-entity";
import { User } from "../../user/entities/user.entity";

@Entity('restore_password_token')
export class RestorePasswordToken{
    @Column({
        name: 'token',
        type: 'varchar',
        length: 40,
        nullable: false,
        primary: true
    })
    token: string;

    @Column({
        name: 'restore_user_id',
        type: 'bigint',
        nullable: false
    })
    restore_user_id: number;

    @Column({
        type: 'date',
        name: 'expiry_date',
        nullable: false
    })
    expiry_date: Date;

    @ManyToOne(() => User, u => u.user_id)
    @JoinColumn({
        name: 'restore_user_id'
    })
    obj_restore_user: User;
}
