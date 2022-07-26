import {Controller, Inject, Post, Body, Put} from '@nestjs/common';
import { IUpdateOrganizationApplication} from "../interfaces/applications/update-organization.interface";
import { UpdateOrganizationDto } from "../domain/update-organization.dto";

@Controller('update-organization')
export class UpdateOrganizationController {
    constructor(
        @Inject('IUpdateOrganizationApplication') private updateOrganizationApplication: IUpdateOrganizationApplication
    ) {}

    @Put()
    async update(@Body() updateOrganizationDto: UpdateOrganizationDto): Promise<UpdateOrganizationDto> {
        const organization = this.updateOrganizationApplication.update(updateOrganizationDto);
        return organization;
    }
}






/*
*
@Controller('create-organization')
export class CreateOrganizationController {
    constructor(
        @Inject('ICreateOrganizationApplication') private createOrganizationApplication: ICreateOrganizationApplication
    ) {}

    //@UsePipes(new ValidationPipe(CreateOrganizationDto))
    @Post()
    async create(@Body() createOrganizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto> {
        const organization = await this.createOrganizationApplication.create(createOrganizationDto);
        return organization;
    }
}
*/
