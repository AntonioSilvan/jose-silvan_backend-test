import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id_organization: number

    @Column({length: 50})
    name: string

    @Column()
    status: number
}
