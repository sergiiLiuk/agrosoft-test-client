import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
})
export class AnimalComponent {
  private routeSub: Subscription;
  id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
