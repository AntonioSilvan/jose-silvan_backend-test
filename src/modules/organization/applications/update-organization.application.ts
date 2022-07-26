import { Injectable, Inject } from "@nestjs/common";
import {UpdateOrganizationDto} from "../domain/update-organization.dto";
import { IUpdateOrganizationApplication} from "../interfaces/applications/update-organization.interface";
import { IUpdateOrganizationService} from "../interfaces/services/update-organization.interface";


@Injectable()
export class UpdateOrganizationApplication implements IUpdateOrganizationApplication {
    constructor(
        @Inject('IUpdateOrganizationService') private updateOrganizationService: IUpdateOrganizationService
    ) {}

    async update(organization: UpdateOrganizationDto): Promise<UpdateOrganizationDto> {
        return this.updateOrganizationService.update(organization);
    }
}
