import { IsString, IsNumber } from 'class-validator';

export class GetOrganizationDto {
    @IsNumber()
    id_organization: number

    @IsString()
    name: string

    @IsNumber()
    status: number
}
