import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './states/home/home.component';
import { CarsService } from './services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipes/sort.pipe';

// Material Components
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [
    CarsService,
    SortPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
