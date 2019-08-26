export class User {
  name: string;
  password?: string;
  level: number;
  state: number;
  birth: Date;
  sex: number;
  firstName: string;
  lastName: string;
  createTime: Date;
  email: string;
  phone: string;
}

export enum LevelType {
  User = 0,
  Adming = 1
}

export enum StateType {
  Common = 0,
  Ban = 1
}

export enum SexType {
  Male = 0,
  Female = 1,
  Unknown = 2
}
