import { Component } from '@angular/core';
import {RouteWrapService} from "../../../../services/route-wrap.service";

@Component({
  selector: 'app-map-basic-menu',
  templateUrl: './map-basic-menu.component.html',
  styleUrl: './map-basic-menu.component.less'
})
export class MapBasicMenuComponent {

  constructor(
    private routerWrapService: RouteWrapService
  ) {
  }

  routeTo(path: string) {
    this.routerWrapService.navigate(path);
  }
}
