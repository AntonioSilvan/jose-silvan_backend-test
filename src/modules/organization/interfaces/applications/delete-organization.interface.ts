import {GetOrganizationDto} from "../../domain/get-organization.dto";

export interface IDeleteOrganizationApplication {
    delete(id:number): Promise<GetOrganizationDto[]>
}
