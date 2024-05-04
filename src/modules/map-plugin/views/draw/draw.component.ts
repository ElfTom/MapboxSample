import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import {ConstantService} from '../../../../services/constant.service';
import {MapStyles} from '../../../../enums/map-styles';
import {area} from '@turf/turf';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.less'
})
export class DrawComponent implements AfterViewInit {
  draw?: MapboxDraw;
  calculatedArea: number = 0;

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

    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });
    map.addControl(this.draw);

    map.on('draw.create', this.updateArea.bind(this));
    map.on('draw.delete', this.updateArea.bind(this));
    map.on('draw.update', this.updateArea.bind(this));
  }

  updateArea(event: any) {
    const data = this.draw?.getAll();
    if (data!.features.length > 0) {
      const areaValue = area(data!);
      this.calculatedArea = Math.round(areaValue * 100) / 100;
    } else {
      this.calculatedArea = 0;
      if (event.type !== 'draw.delete')
        alert('Click the map to draw a polygon.');
    }
  }
}
