import { IDTO } from '@softobiz-df/shared-lib';

export class ProductDto implements IDTO {
	
	public productName: string
	public companyName :string 
	public description : string

	public constructor(init?: Partial<ProductDto>) {
		Object.assign(this, init)
	}
}

