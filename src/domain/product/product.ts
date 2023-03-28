import { AggregateRoot,eDataSource, GenericAppError, Result,  UniqueEntityID } from '@softobiz-df/shared-lib';

interface ProductProps {
	productName: string
	companyName: string
	description: string 
	
}
export class Product extends AggregateRoot<ProductProps> {
	private constructor(props: ProductProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion
	//#region private setters
	private setName(productName: string, conpanyName: string , description:string) {
		this._props.productName = productName
		this._props.companyName=conpanyName
		this._props.description=description
		return Result.ok(this)
	}
  //#endregion
	//#region public methods
	public static create(props: ProductProps, id?: UniqueEntityID, dataSource?: eDataSource) {
		if (dataSource === eDataSource.STORAGE) return Result.ok(new  Product(props, id))
		const  product = new  Product(Object.create(null), id)
		const validationQueue = [
			product.setName(props.productName, props.companyName, props.description),
		]
		const combinedResult = Result.combine(validationQueue)
		if (combinedResult.isFailure) return Result.fail<Product>(new GenericAppError.DomainError(combinedResult.errorValue()))
		return Result.ok(product)
	}
	//#endregion
}
