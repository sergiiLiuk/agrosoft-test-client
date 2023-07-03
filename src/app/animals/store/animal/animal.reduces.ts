import * as fromRoot from '../../../state/app.state';
import { createReducer, on } from '@ngrx/store';
import * as fromAnimal from './animal.actions';
import { Animal, GenderType } from '../../animal.model';

export interface AnimalState {
  animals: Animal[];
  isLoading: boolean;
}

export interface AppState extends fromRoot.AppState {
  animals: AnimalState;
}

export const initialState: AnimalState = {
  animals: [],
  isLoading: false,
};

const reducer = createReducer<AnimalState>(
  initialState,
  on(fromAnimal.getAnimals, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromAnimal.getAnimalsSuccess, (state, { animals }) => {
    return {
      ...state,
      isLoading: false,
      animals,
    };
  })
);

export function animalsReducer(
  state = initialState,
  actions: any
): AnimalState {
  return reducer(state, actions);
}
