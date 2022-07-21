import { CreateOrganizationDto } from "../../domain/create-organization.dto";

export interface CreateOrganization {
    create(createOrganizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto>
}
