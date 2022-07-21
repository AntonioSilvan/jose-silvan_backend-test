import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from '../domain/organization.entity';
import { CreateOrganizationDto } from '../domain/create-organization.dto';
import { CreateOrganization } from '../interfaces/services/create-organization.interface';

@Injectable()
export class CreateOrganizationService implements CreateOrganization{
    constructor(
       @InjectRepository(Organization) private organizationRepository: Repository<Organization>
    ) {}

    async create(organization: CreateOrganizationDto): Promise<CreateOrganizationDto> {
        return this.organizationRepository.save(organization);
    }
}
