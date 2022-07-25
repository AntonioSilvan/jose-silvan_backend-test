import {Entity, Column, OneToOne, PrimaryColumn, JoinColumn, BeforeInsert} from "typeorm";
import { Repositories} from "../../repository/domain/repository.entity";

@Entity()
export class Metrics {
    @PrimaryColumn()
    id_repository:number
    @OneToOne(() => Repositories)
    @JoinColumn({name: 'id_repository'})
    repository: Repositories

    @BeforeInsert()
    newid() {this.id_repository = this.repository.id_repository}

    @Column({type: 'double precision'})
    coverage: number

    @Column()
    bugs: number

    @Column()
    vulnerabilities: number

    @Column()
    hotspot: number

    @Column()
    code_smells: number
}
