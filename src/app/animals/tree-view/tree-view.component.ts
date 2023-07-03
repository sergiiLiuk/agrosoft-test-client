import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-list',
  template: `
    <ul [class.wtree]="onWtree">
      <li *ngFor="let animal of animals">
        <a [routerLink]="['/animal', animal.animalNumber]">
          <div class="flex gap-5 text-base hover:bg-gray-200">
            <span>Number: {{ animal.animalNumber }}</span>
            <span>Gender: {{ animal.gender }}</span>
          </div>
          <app-list *ngIf="animal.children" [animals]="animal.children" />
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./tree-view.component.css'],
})
export class ListComponent implements OnInit {
  @Input() animals: Animal[] | null;

  onWtree = true;

  constructor() {}

  ngOnInit(): void {}
}
