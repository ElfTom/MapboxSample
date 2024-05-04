import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import Compare from 'mapbox-gl-compare';
import {ConstantService} from '../../../../services/constant.service';
import {MapStyles} from '../../../../enums/map-styles';
import 'mapbox-gl-compare/dist/mapbox-gl-compare.css';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.less'
})
export class CompareComponent implements AfterViewInit {

  constructor(
    private constantService: ConstantService
  ) {
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;
    const beforeMap = new mapboxgl.Map({
      container: 'before',
      style: MapStyles.LIGHT_V11,
      center: [0, 0],
      zoom: 0
    });

    const afterMap = new mapboxgl.Map({
      container: 'after',
      style: MapStyles.DARK_V11,
      center: [0, 0],
      zoom: 0
    });

    // A selector or reference to HTML element
    const container = '#comparison-container';

    const compare = new Compare(beforeMap, afterMap, container, {
      mousemove: false,
      orientation: 'horizontal'
    });

    compare.on('slideend', (e: any) => {
      console.log('slide: ', e.currentPosition);
    });
  }
}
