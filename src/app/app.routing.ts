import { Routes } from '@angular/router';
import { state as HomeRoute} from './states/home/home.route';
import { state as DetailRoute} from './states/detail/detail.route';
import { state as CompareRoute } from './states/compare/compare.route';

export const routes: Routes = [HomeRoute, DetailRoute, CompareRoute];
