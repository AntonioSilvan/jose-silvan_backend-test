import { Module } from '@nestjs/common';
import { GetRepositoryMetricsApplication} from "./applications/get-repository-metrics.application";
import { GetRepositoryMetricsService } from "./services/get-repository-metrics.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Metrics} from "../metrics/domain/metrics.entity";
import { GetRepositoryMetricsController } from './controllers/get-repository-metrics.controller';

const getRepositoryMetricsApp = {
  provide: 'IGetRepositoryMetricsApplication',
  useClass: GetRepositoryMetricsApplication
}
const getRepositoryMetricsService = {
  provide : 'IGetRepositoryMetricsService',
  useClass: GetRepositoryMetricsService
}

@Module({
  imports: [TypeOrmModule.forFeature([Metrics])],
  providers: [
    getRepositoryMetricsApp,
    getRepositoryMetricsService
  ],
  controllers: [GetRepositoryMetricsController]
})
export class MetricsModule {}
