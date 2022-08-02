export interface User {
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

export const userMock: User = {
  name: 'Tester',
  level: 0,
  state: 0,
  birth: new Date('1983-01-01'),
  sex: 0,
  firstName: 'Tester',
  lastName: 'System',
  createTime: new Date('2018-12-12'),
  email: 'tester@adming.cn',
  phone: '+86 13900112233'
};

export const usersMock: User[] = new Array<User>(10).fill(userMock);
export const usersMock300: User[] = new Array<User>(295).fill(userMock);
