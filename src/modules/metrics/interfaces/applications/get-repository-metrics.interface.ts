export interface IGetRepositoryMetricsApplication {
    getMetrics(idTribe: number);
    reportCsv(records): Promise<boolean>;
}
