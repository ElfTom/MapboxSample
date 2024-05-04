import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {ConstantService} from '../../../../services/constant.service';
import {MapStyles} from '../../../../enums/map-styles';
// @ts-ignore
import {Minimap} from '../../../../assets/lib/mapboxgl-control-minimap';

@Component({
  selector: 'app-minimap',
  templateUrl: './minimap.component.html',
  styleUrl: './minimap.component.less'
})
export class MinimapComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: MapStyles.STREETS_V12,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 9
    });

    map.on("load", function () {
      // @ts-ignore
      map.addControl(new Minimap({
        center: [116.390863, 39.91443],
        zoom: 6,
        zoomLevels: []
      }), 'top-right');
    });
  }
}
