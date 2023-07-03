import { createAction, props, Action as sAction } from '@ngrx/store';
import { Animal } from '../../animal.model';

const prefix = '[Animals]';

export const getAnimals = createAction(`${prefix} Get Animals`);

export const getAnimalsSuccess = createAction(
  `${getAnimals.type} Success`,
  props<{
    animals: Animal[];
  }>()
);

export const animalActionTypes = {
  getAnimals,
  getAnimalsSuccess,
};
