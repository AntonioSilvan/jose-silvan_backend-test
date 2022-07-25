import { Module } from '@nestjs/common';
import { CreateOrganizationService } from './services/create-organization.service';
import { CreateOrganizationController } from './controllers/create-organization.controller';
import { CreateOrganizationApplication} from "./applications/create-organization.application";
import {TypeOrmModule} from "@nestjs/typeorm";
import { Organizations } from  './domain/organization.entity';

const createOrganizationApp = {
  provide: 'ICreateOrganizationApplication',
  useClass: CreateOrganizationApplication
};
const createOrganizationService = {
  provide: 'ICreateOrganizationApplication',
  useClass: CreateOrganizationService
}

@Module({
  imports: [TypeOrmModule.forFeature([Organizations])],
  providers: [
      createOrganizationApp,
      createOrganizationService
  ],
  controllers: [CreateOrganizationController]
})
export class OrganizationModule {}
