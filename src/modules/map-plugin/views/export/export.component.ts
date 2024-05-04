import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {ConstantService} from '../../../../services/constant.service';
import {MapStyles} from '../../../../enums/map-styles';
import {DPI, Format, MapboxExportControl, PageOrientation, Size} from '@watergis/mapbox-gl-export';
import '@watergis/mapbox-gl-export/dist/mapbox-gl-export.css'

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrl: './export.component.less'
})
export class ExportComponent implements AfterViewInit {

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
    map.addControl(new MapboxExportControl({
      PageSize: Size.A3,
      PageOrientation: PageOrientation.Portrait,
      Format: Format.PNG,
      DPI: DPI[96],
      Crosshair: true,
      PrintableArea: true,
    }), 'top-right');
  }
}
