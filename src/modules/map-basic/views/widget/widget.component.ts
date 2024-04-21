import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.less'
})
export class WidgetComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map
  // 类型列表
  typeList: Array<string> = ['navigation', 'scale', 'location', 'fullscreen'];
  // 选中类型
  selectedType: string = this.typeList[0];
  // 位置列表
  positionList: Array<string> = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  // 选中位置
  selectedPosition: string = this.positionList[0];

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
      zoom: 9
    });
  }

  handleAddWidget() {
    const position = this.selectedPosition as 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

    switch (this.selectedType) {
      case this.typeList[0]: {
        const navigation = new mapboxgl.NavigationControl();
        this.map?.addControl(navigation, position);
        break;
      }
      case this.typeList[1]: {
        const scale = new mapboxgl.ScaleControl({
          maxWidth: 80,
          unit: 'imperial'
        });
        this.map?.addControl(scale, position);
        break;
      }
      case this.typeList[2]: {
        const geolocation = new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        });
        this.map?.addControl(geolocation, position);
        break;
      }
      case this.typeList[3]: {
        const fullscreen = new mapboxgl.FullscreenControl({
          container: document.querySelector('body')
        });
        this.map?.addControl(fullscreen, position);
        break;
      }
    }
  }
}
