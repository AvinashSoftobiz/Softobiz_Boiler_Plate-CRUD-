import { IRequest } from '@softobiz-df/shared-lib';
import { IsOptional } from 'class-validator';
import { UpdateUserResponseType } from './update-user.response.type';
import { ApiProperty } from '@nestjs/swagger';



export class UpdateUserCommand implements IRequest<UpdateUserResponseType> {
	@IsOptional()
	@ApiProperty()
	public name: string
	
	@IsOptional()
	public id:string
	
	public constructor(init?: Partial<UpdateUserCommand>) {
		Object.assign(this, init)
	}
}