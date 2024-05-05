import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.less'
})
export class BackgroundComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.LIGHT_V11,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 12
    });

    map.on('load', () => {
      map.addLayer({
        id: 'bg',
        type: 'background',
        paint: {
          'background-color': 'blue',
          'background-opacity': 0.3
        }
      });
    })
  }
}
