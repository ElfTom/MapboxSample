import {Component, AfterViewInit} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-atmosphere',
  templateUrl: './atmosphere.component.html',
  styleUrl: './atmosphere.component.less'
})
export class AtmosphereComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map
  // 默认大气层
  defaultFog?: mapboxgl.Fog | null

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.STREETS_V12,
      projection: { name: 'globe' },
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 0
    });

    this.map.on('load', () => {
      this.defaultFog = this.map!.getFog();
    });
  }

  handleSetAtmosphere() {
    this.map?.setFog({
      color: 'rgb(186, 210, 235)', // Lower atmosphere
      'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
      'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
      'space-color': 'rgb(11, 11, 25)', // Background color
      'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
    });
  }

  handleResetAtmosphere() {
    this.map?.setFog(this.defaultFog);
  }

  handleClearAtmosphere() {
    this.map?.setFog(null);
  }
}
