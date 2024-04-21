import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SplashComponent} from "./views/splash/splash.component";
import {HomeComponent} from "./views/home/home.component";
import {MapBasicModule} from "../map-basic/map-basic.module";
import {NgOptimizedImage} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    component: SplashComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent, SplashComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MapBasicModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule {
}
