import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environments';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private url = 'Animals';

  constructor(private httpClient: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${environment.apiUrl}/${this.url}`);
  }
}
