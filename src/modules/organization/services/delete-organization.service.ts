import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizations } from '../domain/organization.entity';
import { GetOrganizationDto } from '../domain/get-organization.dto';
import { IDeleteOrganizationService } from '../interfaces/services/delete-organization.interface';

@Injectable()
export class DeleteOrganizationService implements IDeleteOrganizationService{
    constructor(
        @InjectRepository(Organizations) private organizationRepository: Repository<Organizations>
    ) {}

    async delete(id:number):Promise<GetOrganizationDto[]> {
        await this.organizationRepository.delete(id);
        return this.organizationRepository.find();
    }
}
