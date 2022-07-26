import { GetOrganizationDto } from "../../domain/get-organization.dto";

export interface IGetOrganizationService {
    getById(id:number): Promise<GetOrganizationDto>

    getAll(): Promise<GetOrganizationDto[]>
}
