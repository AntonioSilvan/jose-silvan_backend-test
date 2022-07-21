import { Module } from '@nestjs/common';
import { CreateOrganizationService } from './services/create-organization.service';
import { CreateOrganizationController } from './controllers/create-organization.controller';

@Module({
  providers: [CreateOrganizationService],
  controllers: [CreateOrganizationController]
})
export class OrganizationModule {}
