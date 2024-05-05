import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.less'
})
export class CircleComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.LIGHT_V11,
      center: [-122.4473, 37.7535],
      zoom: 12
    });

    map.on('load', () => {
      map.addSource('ethnicity', {
        type: 'vector',
        url: 'mapbox://examples.8fgz4egr'
      });
      map.addLayer(
        {
          'id': 'population',
          'type': 'circle',
          'source': 'ethnicity',
          'source-layer': 'sf2010',
          'paint': {
            'circle-radius': {
              'base': 1.75,
              'stops': [
                [12, 2],
                [22, 180]
              ]
            },
            'circle-color': [
              'match',
              ['get', 'ethnicity'],
              'White',
              '#fbb03b',
              'Black',
              '#223b53',
              'Hispanic',
              '#e55e5e',
              'Asian',
              '#3bb2d0',
              '#ccc'
            ]
          }
        },
        'aeroway-polygon'
      );
    });
  }
}
