import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteWrapService {

  constructor(
    private router: Router
  ) { }

  navigate(path: string) {
    this.router.navigate([path])
      .then(res => console.log(`navigate to ${path}: `, res))
      .catch(error => console.log(`navigate to ${path}: `, error));
  }
}
