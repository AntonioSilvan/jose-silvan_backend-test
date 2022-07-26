import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metrics } from '../domain/metrics.entity';
import { RepositoryState} from "../../../mock/cat-state";
import axios from 'axios';
import { IGetRepositoryMetricsService } from "../interfaces/services/get-repository-metrics.interface";

@Injectable()
export class GetRepositoryMetricsService implements IGetRepositoryMetricsService{
    constructor(
        @InjectRepository(Metrics) private metricsRepository: Repository<Metrics>
    ) {}

    async getMetrics(idTribe: number) {
        const metricQb = this.metricsRepository.createQueryBuilder('metric')
            .select('repository.id_repository', 'id')
            .addSelect('repository.name', 'name')
            .addSelect('tribes.name', 'tribe')
            .addSelect('organizations.name', 'organization')
            .addSelect('metric.coverage', 'coverage')
            .addSelect('metric.code_smells', 'codeSmells')
            .addSelect('metric.bugs', 'bugs')
            .addSelect('metric.vulnerabilities', 'vulnerabilities')
            .addSelect('metric.hotspot', 'hotspots')
            .addSelect('repository.state', 'state')
            .leftJoin('metric.repository', 'repository')
            .leftJoin('repository.tribe', 'tribes')
            .leftJoin('tribes.organization', 'organizations')

        const metricWitTribe = metricQb.where('tribes.id_tribe = :idTribe', {idTribe})
        if(await metricWitTribe.getCount() == 0) return { error: true, message: 'La tribu no se encuentra registrada'}

        const metricsOfTheYear = metricWitTribe.andWhere('EXTRACT(YEAR FROM repository.create_time) = :year', {year: new Date().getFullYear()})
        if(await metricsOfTheYear.getCount() == 0) return { error: true, message: 'No son del año actual'}

        const metricsEnable = metricsOfTheYear.andWhere('repository.state = :state', {state: 'E'});
        if(await metricsEnable.getCount() == 0) return { error: true, message: 'La tribu no tiene repositorios activados'}

        const metricsMinimumCoverage = metricsEnable.andWhere('metric.coverage > :coverage', {coverage: 75})
        if(await metricsMinimumCoverage.getCount() == 0) return { error: true, message: 'La tribu no tiene repositorios que cumplan con la covertura'}
        await this.getMockStateRepositoryData();
        return await metricsMinimumCoverage.getRawMany()
    }

    async getMockStateRepositoryData() {
        try{
            const data = await axios.get('http://localhost:3000/mock')
            return data.data;
        } catch(e){
            console.log(e)
        }
    }
}
