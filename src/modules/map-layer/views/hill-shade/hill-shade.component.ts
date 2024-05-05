import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-hill-shade',
  templateUrl: './hill-shade.component.html',
  styleUrl: './hill-shade.component.less'
})
export class HillShadeComponent  implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.LIGHT_V11,
      center: [-119.55, 37.71],
      zoom: 9
    });

    map.on('load', () => {
      map.addSource('dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1'
      });
      map.addLayer(
        {
          'id': 'hillshading',
          'source': 'dem',
          'type': 'hillshade'
        },
        'land-structure-polygon'
      );
    });
  }
}
