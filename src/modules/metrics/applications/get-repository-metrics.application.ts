import { Injectable, Inject } from "@nestjs/common";
//import {GetOrganizationDto} from "../domain/get-organization.dto";
import { IGetRepositoryMetricsApplication} from "../interfaces/applications/get-repository-metrics.interface";
import { IGetRepositoryMetricsService} from "../interfaces/services/get-repository-metrics.interface";


@Injectable()
export class GetRepositoryMetricsApplication implements IGetRepositoryMetricsApplication {
    constructor(
        @Inject('IGetRepositoryMetricsService') private getRepositoryMetricsService: IGetRepositoryMetricsService
    ) {}

    async getMetrics(idTribe:number) {
        return this.getRepositoryMetricsService.getMetrics(idTribe);
    }

    async getMockStateRepositoryData() {
        return this.getRepositoryMetricsService.getMockStateRepositoryData()
    }
}
