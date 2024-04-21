import { Component, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrl: './style.component.less'
})
export class StyleComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map
  // 样式列表
  styleList: Array<MapStyle>
  // 选中样式
  selectedMapStyle: MapStyle

  constructor(
    private constantService: ConstantService
  ) {
    this.styleList = Reflect.ownKeys(MapStyles).map(key =>  {
      return { name: key as string, link: MapStyles[key as keyof typeof MapStyles] }
    });
    this.selectedMapStyle = this.styleList[0];
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: this.selectedMapStyle.link,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 9
    });
  }

  handleStyleSelect() {
    this.map?.setStyle(this.selectedMapStyle.link)
  }
}

interface MapStyle {
  name: string,
  link: string
}
