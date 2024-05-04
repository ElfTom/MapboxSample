import { Component, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {MapProjections} from "../../../../enums/map-projections";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.less'
})
export class ProjectionComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map
  // 样式列表
  projectionList: Array<MapProjection>
  // 选中样式
  selectedProjection: MapProjection

  constructor(
    private constantService: ConstantService
  ) {
    this.projectionList = Reflect.ownKeys(MapProjections).map(key =>  {
      return { name: key as string, value: MapProjections[key as keyof typeof MapProjections] }
    });
    this.selectedProjection = this.projectionList[0];
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.STREETS_V12,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 1
    });
  }

  handleProjectionSelect() {
    this.map?.setProjection(this.selectedProjection.value);
  }
}

interface MapProjection {
  name: string;
  value: string;
}
