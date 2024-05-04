import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {ConstantService} from '../../../../services/constant.service';
import {MapStyles} from '../../../../enums/map-styles';
import {MapboxStyleDefinition, MapboxStyleSwitcherControl} from 'mapbox-gl-style-switcher';
import 'mapbox-gl-style-switcher/styles.css';

@Component({
  selector: 'app-style-switch',
  templateUrl: './style-switch.component.html',
  styleUrl: './style-switch.component.less'
})
export class StyleSwitchComponent implements AfterViewInit {

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

    // map.addControl(new MapboxStyleSwitcherControl());

    const styles = Reflect.ownKeys(MapStyles).map(key =>  {
      return { title: key as string, uri: MapStyles[key as keyof typeof MapStyles] }
    });

    map.addControl(new MapboxStyleSwitcherControl(styles));
  }
}
