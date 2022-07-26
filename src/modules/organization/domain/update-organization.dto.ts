import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrganizationDto {
    @IsNumber()
    id_organization: number

    @IsString()
    @IsOptional()
    name: string

    @IsNumber()
    @IsOptional()
    status: number
}
