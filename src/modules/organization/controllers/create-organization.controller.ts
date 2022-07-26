import {Controller, Inject, Post, Body, UsePipes, Param, ValidationPipe} from '@nestjs/common';
import { CreateOrganizationDto} from "../domain/create-organization.dto";
import { ICreateOrganizationApplication } from "../interfaces/applications/create-organization.interface";

@Controller('create-organization')
export class CreateOrganizationController {
    constructor(
        @Inject('ICreateOrganizationApplication') private createOrganizationApplication: ICreateOrganizationApplication
    ) {}

    @Post()
    async create(@Body() createOrganizationDto: CreateOrganizationDto): Promise<CreateOrganizationDto> {
        const organization = await this.createOrganizationApplication.create(createOrganizationDto);
        return organization;
    }
}
