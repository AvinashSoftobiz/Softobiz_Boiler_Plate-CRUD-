import { eDataSource, GenericAppError, Result, UniqueEntityID, Entity } from '@softobiz-df/shared-lib'

interface UsernameProps {
	name: string	
}
export class Username extends Entity<UsernameProps> {
	private constructor(props: UsernameProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion

	//#region private setters
	private setName(name: string){
		this._props.name = name
		return Result.ok(this)
	}
	//#region public methods
	public static create(props: UsernameProps, id?: UniqueEntityID, dataSource?: eDataSource) {
		if (dataSource === eDataSource.STORAGE) return Result.ok(new Username(props, id))
		const username = new Username(Object.create(null), id)
		const validationQueue = [
			username.setName(props.name)	
		]
		const combinedResult = Result.combine(validationQueue)
		if (combinedResult.isFailure) return Result.fail<Username>(new GenericAppError.DomainError(combinedResult.errorValue()))
		return Result.ok(username)
	}
	//#endregion
}
