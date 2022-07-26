import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organizations } from '../domain/organization.entity';
import { GetOrganizationDto } from '../domain/get-organization.dto';
import { IGetOrganizationService } from '../interfaces/services/get-organization.interface';

@Injectable()
export class GetOrganizationService implements IGetOrganizationService{
    constructor(
        @InjectRepository(Organizations) private organizationRepository: Repository<Organizations>
    ) {}

    async getById(id:number):Promise<GetOrganizationDto> {
        return this.organizationRepository.findOne({where: {id_organization: id}});
    }

    async getAll(): Promise<GetOrganizationDto[]> {
        return this.organizationRepository.find();
    }
}
