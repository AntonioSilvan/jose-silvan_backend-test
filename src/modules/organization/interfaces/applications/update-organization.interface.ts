import { UpdateOrganizationDto } from "../../domain/update-organization.dto";

export interface IUpdateOrganizationApplication {
    update(updateOrganizationDto: UpdateOrganizationDto): Promise<UpdateOrganizationDto>
}
