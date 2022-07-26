import {GetOrganizationDto} from "../../domain/get-organization.dto";

export interface IDeleteOrganizationService {
    delete(id:number): Promise<GetOrganizationDto[]>
}
