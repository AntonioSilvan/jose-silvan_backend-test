import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repositories } from '../domain/repository.entity';
//import { GetOrganizationDto } from '../domain/get-organization.dto';
import { IGetRepositoryMetricsService} from "../interfaces/get-repository-metrics.interface";
import {Tribes} from "../../tribe/domain/tribe.entity";

@Injectable()
export class GetRepositoryMetricsService implements IGetRepositoryMetricsService{
    constructor(
        @InjectRepository(Repositories) private repositoriesRepository: Repository<Repositories>
    ) {}

    async getMetrics(idTribe: number) {
        return this.repositoriesRepository.createQueryBuilder('repository')
            .select('repository.id_repository', 'id')
            .addSelect('repository.name', 'name')
            .addSelect('tribes.name', 'tribe')
            .addSelect('organizations.name', 'organization')
            .addSelect('metrics.coverage')
            //.addSelect('metrics.code_smells')
            .leftJoin('repository.tribe', 'tribes')
            .leftJoin('tribes.organization', 'organizations')
            .leftJoin('repository.metric', 'metrics')
            //.where('tribe.id_tribe = :id')
            .getRawMany();
    }
}
