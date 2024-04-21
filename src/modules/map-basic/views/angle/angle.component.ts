import { Component, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-angle',
  templateUrl: './angle.component.html',
  styleUrl: './angle.component.less'
})
export class AngleComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map
  // 方位角
  bearing: number = 0;
  // 俯仰角
  pitch: number = 0;
  // 缩放级别
  zoom: number = 17

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
      bearing: this.bearing,
      pitch: this.pitch,
      zoom: this.zoom
    });
  }

  handleBearingChange() {
    this.map?.setBearing(this.bearing);
  }

  handlePitchChange() {
    this.map?.setPitch(this.pitch);
  }

  handleZoomChange() {
    this.map?.setZoom(this.zoom);
  }
}
