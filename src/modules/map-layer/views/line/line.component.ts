import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrl: './line.component.less'
})
export class LineComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.STREETS_V12,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 14
    });

    map.on('load', () => {
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [116.39741198255632, 39.92276137118347],
              [116.39672583975494, 39.92226804756919],
              [116.39612546480481, 39.922103605574364],
              [116.3969831433053, 39.906545607125366],
              [116.38553313531793, 39.90605216669695],
              [116.38549025139235, 39.90197292303151],
              [116.3866481173688, 39.901479449669836]
            ]
          }
        }
      });
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'purple',
          'line-opacity': 0.5,
          'line-width': 8
        }
      });
    });
  }
}
