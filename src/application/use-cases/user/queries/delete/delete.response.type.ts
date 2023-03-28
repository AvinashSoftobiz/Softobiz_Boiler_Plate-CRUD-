import { AppError, RecordIdModel, Result } from '@softobiz-df/shared-lib';
// import { DeleteDto } from '../../dto/delete.dto';
import { UserDto } from '../../dto/user.dto';
import { UserErrors } from '../../user.error';



export type DeleteReponseType = Result< RecordIdModel | UserErrors.UserNotFound | AppError>