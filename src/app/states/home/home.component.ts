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
  carsSelected = [];

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

  viewDetail(id) {
    this.router.navigate(['detail', id]);
  }

  selectCars(car) {
    if (this.carsSelected.length < 3 && !car.selected) {
      car.selected = true;
      this.carsSelected.push(car.id);
    } else if (car.selected) {
      car.selected = false;
      const index = this.carsSelected.indexOf(car.id);
      this.carsSelected.splice(index, 1);
    }
  }

  compareCars() {
    const id1 = this.carsSelected[0];
    const id2 = this.carsSelected[1];
    const id3 = this.carsSelected[2];
    if (id1 && id2) {
      this.router.navigate(['compare'], {queryParams: {id1: id1, id2: id2, id3: id3}});
    }
    return false;
  }
}
