import { Column,Entity} from 'typeorm';
import { BaseModel } from './base.model';


@Entity({ name: 'Productss' })

export class ProductModel extends BaseModel {

	//#region constructors
	public constructor(init?: Partial<ProductModel>) {
		super()
		Object.assign(this, init)
	}
	//#endregion
	
	@Column()
	public productName: string

	@Column()
	public companyName: string

	@Column()
	public description: string

}

