import { CreateOrganizationDto } from "../../domain/create-organization.dto";

export interface ICreateOrganizationApplication {
    create(createOrganizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto>
}
