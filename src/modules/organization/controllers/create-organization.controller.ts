import { Controller, Inject, Post, Body, UsePipes, Param } from '@nestjs/common';
import { CreateOrganizationDto} from "../domain/create-organization.dto";
import { TYPES } from '../interfaces/types';
import { CreateOrganizationApplication } from "../interfaces/services/create-organization.interface";

@Controller('create-organization')
export class CreateOrganizationController {

}
