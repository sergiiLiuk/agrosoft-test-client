import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ListComponent } from './tree-view/tree-view.component';
import { FilterPipe } from './animal-list/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AnimalEffect } from './store/animal/animal.effects';
import { animalsReducer } from './store/animal/animal.reduces';

const animalRoutes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'animal/:id', component: AnimalComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(animalRoutes),
    StoreModule.forFeature('animals', animalsReducer),
    EffectsModule.forFeature([AnimalEffect]),
    FormsModule,
  ],
  declarations: [
    AnimalComponent,
    AnimalListComponent,
    ListComponent,
    FilterPipe,
  ],
})
export class AnimalsModule {}
