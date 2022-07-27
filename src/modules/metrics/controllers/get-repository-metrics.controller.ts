import { Controller, Get, Inject, Param } from '@nestjs/common';
import { IGetRepositoryMetricsApplication} from "../interfaces/applications/get-repository-metrics.interface";

@Controller('admin/get-repository-metrics')
export class GetRepositoryMetricsController {
    constructor(
        @Inject('IGetRepositoryMetricsApplication') private getRepositoryMetricsApp : IGetRepositoryMetricsApplication
    ){}

    @Get(':idTribe')
    async getMetrics(@Param('idTribe') idTribe: number) {
        return await this.getRepositoryMetricsApp.getMetrics(idTribe)
    }

    @Get('report/:idTribe')
    async reportCsv(@Param('idTribe') idTribe: number) {
        const metrics = await this.getRepositoryMetricsApp.getMetrics(idTribe)
        const reportSuccess = await this.getRepositoryMetricsApp.reportCsv(metrics);
        if(!reportSuccess) return {message: 'Error al generar el reporte'}
        return {message: 'El reporte se genero correctamente'}
    }
}
