import { IRequest } from '@softobiz-df/shared-lib';
import { IsOptional } from 'class-validator';
import { ProductCreateResponseType } from './product.response.type';
import { ApiProperty } from '@nestjs/swagger';



export class ProductCreateCommand implements IRequest<ProductCreateResponseType> {
	@IsOptional()
	@ApiProperty()
	public productName: string
  
	@IsOptional()
	@ApiProperty()
	public companyName: string
  
	@IsOptional()
	@ApiProperty()
	public description: string
  
	public constructor(init?: Partial<ProductCreateCommand>) {
		Object.assign(this, init)
	}
}