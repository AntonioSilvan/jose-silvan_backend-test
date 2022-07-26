import { Injectable, Inject } from "@nestjs/common";
//import {GetOrganizationDto} from "../domain/get-organization.dto";
import { IGetRepositoryMetricsApplication} from "../interfaces/applications/get-repository-metrics.interface";
import { IGetRepositoryMetricsService} from "../interfaces/get-repository-metrics.interface";


@Injectable()
export class GetRepositoryMetricsApplication implements IGetRepositoryMetricsApplication {
    constructor(
        @Inject('IGetRepositoryMetricsService') private getRepositoryMetricsService: IGetRepositoryMetricsService
    ) {}

    async getMetrics(idTribe:number) {
        return this.getRepositoryMetricsService.getMetrics(idTribe);
    }
    /*async delete(id:number): Promise<GetOrganizationDto[]> {
        return this.deleteOrganizationService.delete(id);
    }*/
}
