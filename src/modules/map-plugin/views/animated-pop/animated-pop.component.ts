import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";
import AnimatedPopup from 'mapbox-gl-animated-popup';

@Component({
  selector: 'app-animated-pop',
  templateUrl: './animated-pop.component.html',
  styleUrl: './animated-pop.component.less'
})
export class AnimatedPopComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map

  popup?: mapboxgl.Popup

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.STREETS_V12,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 13
    });
  }

  handleAddPopup() {
    this.handleClearPopup();
    this.popup = new AnimatedPopup({
      openingAnimation: {
        duration: 1000,
        easing: 'easeOutElastic',
        transform: 'scale'
      },
      closingAnimation: {
        duration: 300,
        easing: 'easeInBack',
        transform: 'scale'
      }
    }).setLngLat(this.constantService.DEFAULT_MAP_CENTER).setHTML('Hello World!');
    this.popup?.addTo(this.map!);
  }

  handleClearPopup() {
    this.popup?.remove();
  }
}
