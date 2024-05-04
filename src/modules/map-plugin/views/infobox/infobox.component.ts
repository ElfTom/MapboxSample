import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {ConstantService} from '../../../../services/constant.service';
import {MapStyles} from '../../../../enums/map-styles';
import { MapboxGradientBoxControl, MapboxInfoBoxControl } from 'mapbox-gl-infobox';
import "mapbox-gl-infobox/styles.css";

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrl: './infobox.component.less'
})
export class InfoboxComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: MapStyles.STREETS_V12,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 12
    });
    // map.addControl(new MapboxGradientBoxControl());
    map.addControl(new MapboxInfoBoxControl());
  }
}
