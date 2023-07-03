export enum GenderType {
  Male = 'Male',
  Female = 'Female',
}
export interface Animal {
  animalNumber: string | null;
  gender: GenderType | undefined;
  children: Animal[] | null;
}
