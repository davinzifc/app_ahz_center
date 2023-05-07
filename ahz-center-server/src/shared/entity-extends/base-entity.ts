import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, JoinColumn, ManyToOne, UpdateDateColumn, } from "typeorm";
import { User } from "../../auth/user/entities/user.entity";

export abstract class BaseEntity {
    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        nullable: false
    })
    created_at: Date;

    @Column({
        type: 'bigint',
        name: 'created_by',
        nullable: true,
        default: () => 'NULL'
    })
    created_by!: number;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        nullable: true
    })
    updated_at!: Date;

    @Column({
        type: 'bigint',
        nullable: true,
        name: 'updated_by',
        default: () => 'NULL'
    })
    update_by: number;

    @Column({
        type: 'boolean',
        name: 'is_active',
        nullable: false,
        default: true
    })
    is_active: boolean;
}