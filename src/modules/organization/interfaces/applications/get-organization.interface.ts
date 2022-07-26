import { GetOrganizationDto } from "../../domain/get-organization.dto";

export interface IGetOrganizationApplication {
    getAll(): Promise<GetOrganizationDto[]>
}
