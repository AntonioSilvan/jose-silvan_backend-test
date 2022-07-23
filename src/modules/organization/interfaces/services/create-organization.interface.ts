import { CreateOrganizationDto } from "../../domain/create-organization.dto";

export interface ICreateOrganizationService {
    create(createOrganizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto>
}
