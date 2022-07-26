import {Controller, Inject, Delete, Param} from '@nestjs/common';
import {IDeleteOrganizationApplication} from "../interfaces/applications/delete-organization.interface";
import {GetOrganizationDto} from "../domain/get-organization.dto";

@Controller('delete-organization')
export class DeleteOrganizationController {
    constructor(
        @Inject('IDeleteOrganizationApplication') private deleteOrganizationApplication: IDeleteOrganizationApplication
    ) {
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<GetOrganizationDto[]> {
        const organizations = await this.deleteOrganizationApplication.delete(id);
        return organizations;
    }
}
