import { Column,Entity} from 'typeorm';
import { BaseModel } from './base.model';


@Entity({ name: 'User' })

export class UserModel extends BaseModel {

	//#region constructors
	public constructor(init?: Partial<UserModel>) {
		super()
		Object.assign(this, init)
	}
	//#endregion

	@Column()
	public name: string

}