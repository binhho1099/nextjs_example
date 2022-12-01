import { IUser } from '@interfaces/user';

export class User {
  userId: number;
  constructor(user: IUser) {
    this.userId = user.userId;
  }
}
