import { Component } from '@angular/core';
import {RouteWrapService} from "../../../../services/route-wrap.service";

@Component({
  selector: 'app-map-layer-menu',
  templateUrl: './map-layer-menu.component.html',
  styleUrl: './map-layer-menu.component.less'
})
export class MapLayerMenuComponent {

  constructor(
    private routerWrapService: RouteWrapService
  ) {
  }

  routeTo(path: string) {
    this.routerWrapService.navigate(path);
  }
}
