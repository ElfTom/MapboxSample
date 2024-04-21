import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrl: './marker.component.less'
})
export class MarkerComponent  implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map
  // 标记信息列表
  markerInfoList: Array<MarkInfo>= [
    {
      icon: '../../../assets/images/tiananmen.jpeg',
      message: '天安门广场',
      lng: 116.391463,
      lat: 39.90203
    },
    {
      icon: '../../../assets/images/beihai.jpg',
      message: '北海公园',
      lng: 116.382463,
      lat: 39.92503
    }
  ];
  markerList: Array<mapboxgl.Marker> = []

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

  handleAddMarkers() {
    // 先清除，再添加
    this.handleClearMarkers();

    this.markerInfoList.forEach(markerInfo => {
      const el: HTMLDivElement = document.createElement('div');
      el.style.width = '64px';
      el.style.height = '64px';
      el.style.backgroundImage = `url('${markerInfo.icon}')`;
      el.style.backgroundSize = '100%';
      el.style.backgroundRepeat = 'no-repeat';
      el.style.border = '4px solid #ffffff';
      el.style.borderRadius = '50%';

      el.addEventListener('click', () => {
        window.alert(markerInfo.message);
      });

      const mark = new mapboxgl.Marker(el).setLngLat(markerInfo);
      mark.addTo(this.map!);
      this.markerList.push(mark);
    })
  }

  handleClearMarkers() {
    if (this.markerList.length === 0) {
      return;
    }
    // 移除标记
    this.markerList.forEach(marker => {
      marker.remove();
    });
    // 清空标记列表
    this.markerList.splice(0, this.markerList.length)
  }

  handleAddPopup() {
    this.handleClearPopup();
    this.popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(this.constantService.DEFAULT_MAP_CENTER)
      .setHTML('<div style="padding: 8px 12px 0;font-size: 18px;">Welcome to Beijing!</div>');
    this.popup.addTo(this.map!);
  }

  handleClearPopup() {
    this.popup?.remove();
  }
}

interface MarkInfo {
  icon: string,
  message: string,
  lng: number,
  lat: number
}
