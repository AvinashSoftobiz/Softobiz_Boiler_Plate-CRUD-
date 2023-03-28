import { Inject, Injectable } from '@nestjs/common';
import { AppLoggerService, IRequestHandler, RecordIdModel, Result, UniqueEntityID } from '@softobiz-df/shared-lib';
import { User } from 'src/domain/user';
import { IUserRepository } from 'src/infrastructure/data-access/irepositories';
import { UserErrors } from '../../user.error';
import { DeleteQuery } from './delete.query';
import { DeleteReponseType } from './delete.response.type';

@Injectable()
export class DeleteQueryHandler implements IRequestHandler<DeleteQuery, DeleteReponseType> {
	private readonly _logger = AppLoggerService.getLogger(DeleteQueryHandler)

	constructor(@Inject(IUserRepository) private readonly _userRepo: IUserRepository) {}

	async handle(query: DeleteQuery, _token?: string): Promise<DeleteReponseType>{
		

		const user: Result<User> = await this._userRepo.findById(new UniqueEntityID(query.id))
		if (user.isFailure) return Result.fail(new UserErrors.UserNotFound())
		const userValue = user.getValue()
		console.log(userValue);


		await this._userRepo.save(userValue)
		console.log("deleted");
		return Result.ok(new RecordIdModel({ id: userValue.id.toString()}))

	}
	}

