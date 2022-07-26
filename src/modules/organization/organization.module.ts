import { Module } from '@nestjs/common';
import { CreateOrganizationService } from './services/create-organization.service';
import { CreateOrganizationController } from './controllers/create-organization.controller';
import { CreateOrganizationApplication} from "./applications/create-organization.application";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UpdateOrganizationController } from './controllers/update-organization.controller';
import { UpdateOrganizationService} from "./services/update-organization.service";
import {UpdateOrganizationApplication} from "./applications/update-organization.application";
import { GetOrganizationController } from './controllers/get-organization.controller';
import {GetOrganizationService} from "./services/get-organization.service";
import {GetOrganizationApplication} from "./applications/get-organization.application";
import { DeleteOrganizationController } from './controllers/delete-organization.controller';
import {DeleteOrganizationService} from "./services/delete-organization.service";
import {DeleteOrganizationApplication} from "./applications/delete-organization.application";
import { Organizations } from  './domain/organization.entity';

const createOrganizationApp = {
  provide: 'ICreateOrganizationApplication',
  useClass: CreateOrganizationApplication
};
const createOrganizationService = {
  provide: 'ICreateOrganizationService',
  useClass: CreateOrganizationService
}

const updateOrganizationApp = {
    provide: 'IUpdateOrganizationApplication',
    useClass: UpdateOrganizationApplication
}
const updateOrganizationService = {
    provide: 'IUpdateOrganizationService',
    useClass: UpdateOrganizationService
}

const getOrganizationApp = {
    provide: 'IGetOrganizationApplication',
    useClass: GetOrganizationApplication
}
const getOrganizationService = {
    provide: 'IGetOrganizationService',
    useClass: GetOrganizationService
}

const deleteOrganizationApp ={
    provide: 'IDeleteOrganizationApplication',
    useClass: DeleteOrganizationApplication
}
const deleteOrganizationService = {
    provide: 'IDeleteOrganizationService',
    useClass: DeleteOrganizationService
}

@Module({
  imports: [TypeOrmModule.forFeature([Organizations])],
  providers: [
      createOrganizationApp,
      createOrganizationService,
      updateOrganizationApp,
      updateOrganizationService,
      getOrganizationApp,
      getOrganizationService,
      deleteOrganizationApp,
      deleteOrganizationService
  ],
  controllers: [CreateOrganizationController, UpdateOrganizationController, GetOrganizationController, DeleteOrganizationController]
})
export class OrganizationModule {}
