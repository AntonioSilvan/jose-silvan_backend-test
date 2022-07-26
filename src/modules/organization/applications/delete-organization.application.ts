import { Injectable, Inject } from "@nestjs/common";
import {GetOrganizationDto} from "../domain/get-organization.dto";
import { IDeleteOrganizationApplication} from "../interfaces/applications/delete-organization.interface";
import { IDeleteOrganizationService} from "../interfaces/services/delete-organization.interface";


@Injectable()
export class DeleteOrganizationApplication implements IDeleteOrganizationApplication {
    constructor(
        @Inject('IDeleteOrganizationService') private deleteOrganizationService: IDeleteOrganizationService
    ) {}

    async delete(id:number): Promise<GetOrganizationDto[]> {
        return this.deleteOrganizationService.delete(id);
    }
}
