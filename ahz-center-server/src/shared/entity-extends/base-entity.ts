import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity{
    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        nullable: false
    })
    created_at: Date;

    @Column({
        type: 'bigint',
        nullable: true,
        name: 'created_by'
    })
    created_by: number;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        nullable: true
    })
    updated_at: Date;

    @Column({
        type: 'bigint',
        nullable: true,
        name: 'updated_by'
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