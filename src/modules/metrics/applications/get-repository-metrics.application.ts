import { Injectable, Inject } from "@nestjs/common";
import {createObjectCsvWriter} from 'csv-writer'
import {join} from 'path';
import {cwd} from 'process';
import {RepositoryState} from "../../../mock/cat-state";
import {RepositoryStateEnum} from "../../repository/interfaces/state.enum";
import { IGetRepositoryMetricsApplication} from "../interfaces/applications/get-repository-metrics.interface";
import { IGetRepositoryMetricsService} from "../interfaces/services/get-repository-metrics.interface";


@Injectable()
export class GetRepositoryMetricsApplication implements IGetRepositoryMetricsApplication {
    constructor(
        @Inject('IGetRepositoryMetricsService') private getRepositoryMetricsService: IGetRepositoryMetricsService
    ) {}

    async getMetrics(idTribe:number) {
        const metrics = await this.getRepositoryMetricsService.getMetrics(idTribe);
        const repositoryState = await this.getRepositoryMetricsService.getMockStateRepositoryData();

        const metricsWithState = metrics.map(element => {
            const verificationState = repositoryState.repositories.find(repository => repository.id = element.id).state;
            element.verificationState = RepositoryState[verificationState];
            element.state = RepositoryStateEnum[element.state]
            return element
        });

        return metricsWithState;
    }

    async reportCsv(records): Promise<boolean>{
        try {
            const createCsvWriter = createObjectCsvWriter;
            const csvWriter = createCsvWriter({
                path: join(cwd(), 'src/storage/testreport.csv'),
                header: [
                    {id: 'id', title: 'id'},
                    {id: 'name', title: 'Name'},
                    {id: 'tribe', title: 'Tribe'},
                    {id: 'organization', title: 'Organization'},
                    {id: 'coverage', title: 'Coverage'},
                    {id: 'codeSmells', title: 'CodeSmells'},
                    {id: 'bugs', title: 'Bugs'},
                    {id: 'vulnerabilities', title: 'Vulnerabilities'},
                    {id: 'hotspots', title: 'Hotspots'},
                    {id: 'verificationState', title: 'Verification State'},
                    {id: 'state', title: 'State'}
                ]
            });
            const report = await csvWriter.writeRecords(records)
            if (!records) throw new Error("No se genero el reporte")
            return true
        }catch (e) {
            console.log(e);
            return false
        }
    }
}
