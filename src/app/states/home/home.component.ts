import { Component, OnInit } from '@angular/core';
import { CarsService } from './../../services/cars.service';
import { Car } from './../../models/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: Car[];
  carsFiltered: Car[];

  constructor(
    private carsService: CarsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
      this.carsFiltered = cars;
    });
  }

  search(value) {
    if (value) {
      this.carsFiltered = this.cars.filter(car => {
        if (car.brand.toLowerCase().indexOf(value.toLowerCase()) > -1 || car.model.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return car;
        }
      });
    } else {
      this.carsFiltered = this.cars;
    }
  }

  goToDetail(car) {
    this.router.navigate(['detail', {car: car}]);
  }
}
