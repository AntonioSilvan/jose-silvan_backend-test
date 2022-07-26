import { Injectable, Inject } from "@nestjs/common";
import {GetOrganizationDto} from "../domain/get-organization.dto";
import { IGetOrganizationApplication} from "../interfaces/applications/get-organization.interface";
import { IGetOrganizationService} from "../interfaces/services/get-organization.interface";


@Injectable()
export class GetOrganizationApplication implements IGetOrganizationApplication {
    constructor(
        @Inject('IGetOrganizationService') private getOrganizationService: IGetOrganizationService
    ) {}

    async getAll(): Promise<GetOrganizationDto[]> {
        return this.getOrganizationService.getAll();
    }
}
