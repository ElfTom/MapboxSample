import { Component, AfterViewInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {MapStyles} from "../../../../enums/map-styles";
import {ConstantService} from "../../../../services/constant.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.less'
})
export class EventComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map

  private lifecycleEventList: Array<string> = [
    "load", "renderstart", "render", "idle", "error", "webglcontextlost", "webglcontextrestored"
  ]

  private dataLoadingEventList: Array<string> = [
    "data", "styledata", "sourcedata", "dataloading", "styledataloading", "sourcedataloading",
    "styleimagemissing", "style.load", "style.import.load"
  ]

  private interactionEventList: Array<string> = [
    "mousedown", "mouseup", "preclick", "click", "dblclick", "mousemove", "mouseover", "mouseenter",
    "mouseleave", "mouseout", "contextmenu", "wheel", "touchstart", "touchend", "touchmove", "touchcancel"
  ]

  private movementEventList: Array<string> = [
    "movestart", "move", "moveend", "dragstart", "drag", "dragend", "zoomstart", "zoom", "zoomend",
    "rotatestart", "rotate", "rotateend", "pitchstart", "pitch", "pitchend",
    "boxzoomstart", "boxzoomend", "boxzoomcancel"
  ]

  private otherEventList: Array<string> = [
    "resize", "remove"
  ]

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
}
