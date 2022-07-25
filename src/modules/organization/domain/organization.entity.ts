import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Tribes} from "../../tribe/domain/tribe.entity";

@Entity()
export class Organizations {
    @PrimaryGeneratedColumn({name: 'id_organization'})
    id_organization: number

    @Column({length: 50})
    name: string

    @Column()
    status: number

    @OneToMany(() => Tribes, tribes => tribes.organization)
    tribes: Tribes[]
}
