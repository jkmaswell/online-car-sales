import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  cars: Car[];
  carsFiltered: Car[];

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.carsService.getCars().subscribe(cars => {
        this.cars = cars.filter(car => {
          if (car.id === params['id1'] || car.id === params['id2'] || car.id === params['id3'] ) {
            return car;
          }
        });
      });
    });
  }
}
