import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';


export const homeRoutes: Routes = [
  {
    path:'', //TODO: http://localhost:4200/dashboard
    component:HomePageComponent
  }
];

