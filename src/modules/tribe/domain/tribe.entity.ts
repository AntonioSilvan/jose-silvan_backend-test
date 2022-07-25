import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { Organizations} from "../../organization/domain/organization.entity";
import {Repositories} from "../../repository/domain/repository.entity";

@Entity()
export class Tribes {
    @PrimaryGeneratedColumn({name: 'id_tribe'})
    id_tribe: number;

    @Column({length: 50})
    name: string

    @Column()
    status: number

    @ManyToOne(() => Organizations, organization => organization.tribes)
    organization: Organizations

    @OneToMany(() => Repositories, repositories => repositories.tribe)
    repositories: Repositories[]
}
