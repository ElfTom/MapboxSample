import {Component, AfterViewInit} from '@angular/core';
import mapboxgl, {GeoJSONSource} from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-raster',
  templateUrl: './raster.component.html',
  styleUrl: './raster.component.less'
})
export class RasterComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.DARK_V11,
      center: [-75.789, 41.874],
      maxZoom: 5.99,
      minZoom: 4,
      zoom: 5
    });

    map.on('load', () => {
      map.addSource('radar', {
        'type': 'image',
        'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
        'coordinates': [
          [-80.425, 46.437],
          [-71.516, 46.437],
          [-71.516, 37.936],
          [-80.425, 37.936]
        ]
      });
      map.addLayer({
        id: 'radar-layer',
        'type': 'raster',
        'source': 'radar',
        'paint': {
          'raster-fade-duration': 0
        }
      });
    });
  }
}
