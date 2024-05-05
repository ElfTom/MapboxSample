import {Component, AfterViewInit} from '@angular/core';
import mapboxgl, {GeoJSONSource} from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrl: './symbol.component.less'
})
export class SymbolComponent implements AfterViewInit {

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
      zoom: 11.15
    });

    map.on('load', () => {
      map.addSource('places', {
        type: 'geojson',
        data: {
          type: "FeatureCollection",
          features: [
            {
              'type': 'Feature',
              'properties': {
                'description': "天安门广场",
                'icon': 'music'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [116.39171804190886, 39.901443497218764]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'description': '后海',
                'icon': 'music'
              },
              'geometry': {
                'type': 'Point',
                'coordinates': [116.38167558228702, 39.940201423560296]
              }
            }
          ]
        }
      });

      map.addLayer({
        'id': 'poi-labels',
        'type': 'symbol',
        'source': 'places',
        'layout': {
          'text-field': ['get', 'description'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
          'icon-image': ['get', 'icon']
        },
        'paint': {
          'text-color': 'purple'
        }
      });

      map.rotateTo(180, { duration: 10000 });
    });
  }
}
