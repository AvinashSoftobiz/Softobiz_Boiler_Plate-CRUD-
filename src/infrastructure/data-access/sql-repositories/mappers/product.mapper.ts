import { Injectable } from '@nestjs/common';
import { eDataSource, IDTO, IMapper, UniqueEntityID } from '@softobiz-df/shared-lib';
import {  Product  } from 'src/domain/product/product';
import {  ProductModel } from '../models/product.model';


@Injectable()
export class  ProductSqlMapper implements IMapper {
	constructor() {}

	toDomain(raw:  ProductModel): Product {
		return  Product.create(
			{
				productName: raw.productName,
				companyName : raw.companyName,
				description: raw.description,
				
			},
			new UniqueEntityID(raw.uuid),
			eDataSource.STORAGE,
		).getValue()
	}
	toPersistence(input: Product, curEntity?: ProductModel): ProductModel {
		if (!curEntity) {
			curEntity = new ProductModel()
		}
		curEntity.uuid = input.id.toString()
		curEntity.productName = input.props.productName;
		curEntity.companyName = input.props.companyName;
		curEntity.description = input.props.description;
		
		//@todo:: improve mapping
		return curEntity;
	}
	toDto(input: ProductModel): IDTO {
		throw new Error('Method not implemented.')
	}
}
