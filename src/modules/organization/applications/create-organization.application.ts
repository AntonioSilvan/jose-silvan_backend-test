import { Injectable, Inject } from "@nestjs/common";
import {CreateOrganizationDto} from "../domain/create-organization.dto";
import { ICreateOrganizationApplication} from "../interfaces/applications/create-organization.interface";
import { ICreateOrganizationService} from "../interfaces/services/create-organization.interface";


@Injectable()
export class CreateOrganizationApplication implements ICreateOrganizationApplication {
    constructor(
        @Inject('ICreateOrganizationService') private createOrganizationService: ICreateOrganizationService
    ) {}

    async create(organization: CreateOrganizationDto): Promise<CreateOrganizationDto> {
        return this.createOrganizationService.create(organization);
    }
}
