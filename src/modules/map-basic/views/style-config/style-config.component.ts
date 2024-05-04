import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {ConstantService} from "../../../../services/constant.service";
import {LightPresets} from "../../../../enums/light-presets";

@Component({
  selector: 'app-style-config',
  templateUrl: './style-config.component.html',
  styleUrl: './style-config.component.less'
})
export class StyleConfigComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map

  // 光源列表
  lightPresetList: Array<LightPreset>
  // 选中光源
  selectedLightPreset: LightPreset

  showPlaceLabels: boolean = true
  showPOILabels: boolean = true
  showRoadLabels: boolean = true
  showTransitLabels: boolean = true

  constructor(
    private constantService: ConstantService
  ) {
    this.lightPresetList = Reflect.ownKeys(LightPresets).map(key => {
      return {name: LightPresets[key as keyof typeof LightPresets]}
    });
    this.selectedLightPreset = this.lightPresetList[1];
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      center: [2.2922, 48.86069],
      zoom: 15.2,
      pitch: 62,
      bearing: -20
    });
  }

  handleLightPresetSelect() {
    this.map?.setConfigProperty('basemap', 'lightPreset', this.selectedLightPreset.name);
  }

  handleConfigItemChange(type: string) {
    if (type === 'place') {
      this.map?.setConfigProperty('basemap', 'showPlaceLabels', this.showPlaceLabels);
    } else if (type === 'poi') {
      this.map?.setConfigProperty('basemap', 'showPointOfInterestLabels', this.showPOILabels);
    } else if (type === 'road') {
      this.map?.setConfigProperty('basemap', 'showRoadLabels', this.showRoadLabels);
    } else if (type === 'transit') {
      this.map?.setConfigProperty('basemap', 'showTransitLabels', this.showTransitLabels);
    }
  }
}

interface LightPreset {
  name: string
}
