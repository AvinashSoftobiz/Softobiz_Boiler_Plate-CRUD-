import { IRequest } from '@softobiz-df/shared-lib';
import { DeleteReponseType } from './delete.response.type';

export class DeleteQuery implements IRequest<DeleteReponseType> {
		public id: string
	public constructor(init?: Partial<DeleteQuery>) {
		Object.assign(this, init)
	}
}
