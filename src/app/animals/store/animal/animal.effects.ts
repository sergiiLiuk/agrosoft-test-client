import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as animalActions from './animal.actions';
import { Animal } from '../../animal.model';
import { AnimalService } from '../../animal.service';
import * as fromAnimals from './index';

@Injectable()
export class AnimalEffect {
  constructor(
    private actions$: Actions,
    private animalService: AnimalService
  ) {}

  getAnimals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAnimals.getAnimals.type),
      switchMap(() => this.animalService.getAnimals()),
      map((animals: Animal[]) => {
        return animalActions.getAnimalsSuccess({ animals });
      })
    )
  );
}
