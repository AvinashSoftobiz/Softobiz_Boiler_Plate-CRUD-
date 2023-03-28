import { Inject, Injectable } from '@nestjs/common';
import { AppLoggerService, IRequestHandler} from '@softobiz-df/shared-lib';
import { IUserRepository } from 'src/infrastructure/data-access/irepositories';
import { DeleteUserCommand } from './delete-user.cmd';
import { DeleteUserResponseType } from './delete-user.response.type';

@Injectable()
export class DeleteUserCommandHandler implements IRequestHandler<DeleteUserCommand, DeleteUserResponseType> {
	private readonly _logger = AppLoggerService.getLogger(DeleteUserCommandHandler)

	constructor(@Inject(IUserRepository) private readonly _userRepo: IUserRepository) {}

	async handle(commandOrQuery: DeleteUserCommand, token?: string) {
 	
	// 	const user: Result<User> = await this._userRepo.findById(new UniqueEntityID(query.id))
	// 	if (user.isFailure) return Result.fail(new UserErrors.UserNotFound())
	// 	const userValue = user.getValue() 	
	}
	

	}
