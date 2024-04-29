import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
 {
  path:'',
  // loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  component: HomePageComponent
 }


];

