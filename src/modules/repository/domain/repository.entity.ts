import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany} from "typeorm";
import { Tribes} from "../../tribe/domain/tribe.entity";
import { Metrics } from "../../metrics/domain/metrics.entity";

@Entity()
export class Repositories {
    @PrimaryGeneratedColumn({name: 'id_repository'})
    id_repository: number;

    @Column({length: 50})
    name: string

    @Column({type: 'char', length: 1})
    state: string

    @CreateDateColumn()
    create_time: Date

    @Column({type: 'char', length: 1})
    status: string

    @ManyToOne(() => Tribes, tribe => tribe.repositories)
    tribe: Tribes
}
