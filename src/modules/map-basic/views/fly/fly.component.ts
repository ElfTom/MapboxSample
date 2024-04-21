import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-fly',
  templateUrl: './fly.component.html',
  styleUrl: './fly.component.less'
})
export class FlyComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map;
  // 地点列表
  siteList: Array<Site> = [
    {
      name: '北京',
      lng: 116.390863,
      lat: 39.91443,
      pitch: 75
    },
    {
      name: '上海',
      lng: 121.506379,
      lat: 31.245414,
      pitch: 55
    }, {
      name: '广州',
      lng: 113.331534,
      lat: 23.112044,
      pitch: 35
    }
  ];
  // 选中地点
  selectedSite: Site = this.siteList[0];
  // 指示是否开启漫游
  isFlyOpened: boolean = false

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.STREETS_V12,
      center: this.siteList[0],
      pitch: this.siteList[0].pitch,
      zoom: 14
    });
  }

  handleSiteSelect() {
    if (this.isFlyOpened) {
      this.map?.flyTo({
        center: this.selectedSite,
        pitch: this.selectedSite.pitch
      });
    } else {
      this.map?.setCenter(this.selectedSite);
      this.map?.setPitch(this.selectedSite.pitch);
    }
  }
}

interface Site {
  name: string,
  lng: number,
  lat: number,
  pitch: number
}
