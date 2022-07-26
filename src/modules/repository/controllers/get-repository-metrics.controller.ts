import {Controller, Get, Inject, Param} from '@nestjs/common';
import { IGetRepositoryMetricsApplication} from "../interfaces/applications/get-repository-metrics.interface";

@Controller('get-repository-metrics')
export class GetRepositoryMetricsController {
    constructor(
        @Inject('IGetRepositoryMetricsApplication') private getRepositoryMetricsApp : IGetRepositoryMetricsApplication
    ){}

    @Get(':idTribe')
    async getMetrics(@Param('idTribe') idTribe: number) {
        return await this.getRepositoryMetricsApp.getMetrics(idTribe)
    }
}
