import { IUser } from './IUser.interface';

export interface IResponseAPI {
  httpStatusCode: number;
  message: string;
  data: IUser;
}
