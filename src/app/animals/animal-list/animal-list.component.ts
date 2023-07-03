import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getAnimals } from '../store/animal/animal.actions';
import { AppState } from '../store/animal/animal.reduces';
import { Observable } from 'rxjs';
import { Animal } from '../animal.model';
import * as fromAnimals from '../store/animal/index';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent implements OnInit {
  filterText: string = '';
  animals$: Observable<Animal[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getAnimals());
    this.animals$ = this.store.pipe(select(fromAnimals.selectAnimalsList));
    this.isLoading$ = this.store.pipe(
      select(fromAnimals.selectAnimalsIsLoading)
    );
  }
}
