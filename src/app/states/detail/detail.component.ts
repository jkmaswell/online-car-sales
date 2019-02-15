import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.carsService.getCar(this.id).subscribe(car => {
      this.car = car[0];
    });
  }
}
