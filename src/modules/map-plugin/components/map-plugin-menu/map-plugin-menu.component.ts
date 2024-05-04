import { Component } from '@angular/core';
import {RouteWrapService} from "../../../../services/route-wrap.service";

@Component({
  selector: 'app-map-plugin-menu',
  templateUrl: './map-plugin-menu.component.html',
  styleUrl: './map-plugin-menu.component.less'
})
export class MapPluginMenuComponent {

  constructor(
    private routerWrapService: RouteWrapService
  ) {
  }

  routeTo(path: string) {
    this.routerWrapService.navigate(path);
  }
}
