import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './../models/car.model';

@Injectable()
export class CarsService {
  private carsUrl = '../../assets/cars.json';

  constructor(
    private http: HttpClient
  ) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }
}
