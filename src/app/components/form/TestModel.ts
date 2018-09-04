export class TestModel {
  name: string;
  age: number;
  sex: Sex;

  constructor() {
    this.name = '(No Name)';
    this.age = 0;
    this.sex = Sex.Female;
  }
}

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE'
}
