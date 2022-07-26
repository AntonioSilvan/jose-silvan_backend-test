import {Controller, Inject, Get} from '@nestjs/common';
import {IGetOrganizationApplication} from "../interfaces/applications/get-organization.interface";
import {GetOrganizationDto} from "../domain/get-organization.dto";

@Controller('get-organization')
export class GetOrganizationController {
    constructor(
        @Inject('IGetOrganizationApplication') private getOrganizationApplication: IGetOrganizationApplication
    ) {}

    @Get()
    async getAll():Promise<GetOrganizationDto[]> {
        const organizations = this.getOrganizationApplication.getAll();
        return organizations;
    }
}
