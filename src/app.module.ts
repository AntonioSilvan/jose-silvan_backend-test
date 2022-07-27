import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './mock/mock.controller';
import { OrganizationModule } from './modules/organization/organization.module';
import { TypeOrmModule} from "@nestjs/typeorm";
import {URL} from "url";
import { TribeModule } from './modules/tribe/tribe.module';
import { RepositoryModule } from './modules/repository/repository.module';
import { MetricsModule } from './modules/metrics/metrics.module';
import {config} from './ormconfig';

const dbUrl = new URL("postgresql://AntonioSilvan:5IKG9On0G8wLPflZaUV7YA@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dflashy-shark-1521");
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

@Module({
  imports: [
      TypeOrmModule.forRoot(
          {
              type: "cockroachdb",
              url: dbUrl.toString(),
              ssl: true,
              synchronize: false,
              migrationsTableName: "migrations",
              migrations: [__dirname + "/database/migrations/*.ts"],
              entities: [__dirname + "/modules/**/*.entity{.ts,.js}"],
              extra: {
                  options: routingId
              }
          }
      ),
      OrganizationModule,
      TribeModule,
      RepositoryModule,
      MetricsModule
  ],
  controllers: [AppController, MockController],
  providers: [AppService],
})
export class AppModule {}
