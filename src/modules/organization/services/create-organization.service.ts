import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizations } from '../domain/organization.entity';
import { CreateOrganizationDto } from '../domain/create-organization.dto';
import { ICreateOrganizationService } from '../interfaces/services/create-organization.interface';

@Injectable()
export class CreateOrganizationService implements ICreateOrganizationService{
    constructor(
       @InjectRepository(Organizations) private organizationRepository: Repository<Organizations>
    ) {}

    async create(organization: CreateOrganizationDto): Promise<CreateOrganizationDto> {
        return this.organizationRepository.save(organization);
    }
}
