import { UpdateOrganizationDto } from "../../domain/update-organization.dto";

export interface IUpdateOrganizationService {
    update(updateOrganizationDto: UpdateOrganizationDto): Promise<UpdateOrganizationDto>
}
