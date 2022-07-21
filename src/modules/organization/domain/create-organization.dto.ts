import { IsString, IsNumber } from 'class-validator';

export class CreateOrganizationDto {
    @IsString()
    name: string

    @IsNumber()
    status: number
}
