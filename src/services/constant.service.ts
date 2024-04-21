import { Injectable } from '@angular/core';
import {LngLatLike} from "mapbox-gl";

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  public readonly MAPBOX_TOKEN = 'pk.eyJ1IjoicmVuaGlnIiwiYSI6ImNsc3RvZ2hmaTBhd3QyaXBmcHBjeGpkcWcifQ.s-lI_yYAwzm-xttG_FjWWQ';
  /**
   * 地图默认中心
   */
  public readonly DEFAULT_MAP_CENTER: LngLatLike = [116.390863, 39.91443];
}
