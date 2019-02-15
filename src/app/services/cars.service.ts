import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './../models/car.model';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Injectable()
export class CarsService {
  private carsUrl = '../../assets/cars.json';

  constructor(
    private http: HttpClient
  ) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  getCar(id): Observable<Car> {
    return this.http.get<any>(this.carsUrl).pipe(map(car => {
      return car.filter(carObj => {
        if (carObj.id === id) {
          return carObj;
        }
      });
    }));
  }
}
