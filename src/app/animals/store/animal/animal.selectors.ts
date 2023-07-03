import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnimalState } from './animal.reduces';

export const selectAnimalState = createFeatureSelector<AnimalState>('animals');

export const selectAnimalsList = createSelector(selectAnimalState, (state) => {
  return state.animals;
});

export const selectAnimalsIsLoading = createSelector(
  selectAnimalState,
  (state) => state.isLoading
);
