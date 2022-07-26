import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizations } from '../domain/organization.entity';
import { UpdateOrganizationDto } from '../domain/update-organization.dto';
import { IUpdateOrganizationService } from '../interfaces/services/update-organization.interface';

@Injectable()
export class UpdateOrganizationService implements IUpdateOrganizationService{
    constructor(
        @InjectRepository(Organizations) private organizationRepository: Repository<Organizations>
    ) {}

    async update(organization: UpdateOrganizationDto): Promise<UpdateOrganizationDto> {
        const update = await this.organizationRepository.update(organization.id_organization, organization);
        //if (await update.affected <= 0) return undefined
        return organization;
    }
}
