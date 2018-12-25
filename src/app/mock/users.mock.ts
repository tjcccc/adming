import { User } from '@adming/models/user.model';

export const userMock: User = {
  name: 'Tester',
  level: 0,
  state: 0,
  birth: new Date('1983-01-01'),
  sex: 0,
  firstName: 'Shi',
  lastName: 'Ce',
  createTime: new Date('2018-12-12'),
  email: 'tester@cronoworks.cn',
  phone: '+86 13900112233'
};

export const usersMock: User[] = new Array<User>(10).fill(userMock);
export const usersMock300: User[] = new Array<User>(295).fill(userMock);
