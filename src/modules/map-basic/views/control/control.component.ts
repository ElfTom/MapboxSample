import {AfterViewInit, Component} from '@angular/core';
import mapboxgl from "mapbox-gl";
import {ConstantService} from "../../../../services/constant.service";
import {MapStyles} from "../../../../enums/map-styles";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.less'
})
export class ControlComponent implements AfterViewInit {
  // 地图
  map?: mapboxgl.Map;
  // 双击缩放
  doubleClickZoom: boolean = true;
  // 拖拽平移
  dragPan: boolean = true;

  // 鼠标滚轮缩放
  scrollZoom: boolean = true;
  // 鼠标俯仰旋转
  dragRotate: boolean = true;
  // 键盘全部控制
  keyboard: boolean = true;
  // 键盘俯仰旋转
  keyboardPitchRotate: boolean = true;

  // 触控俯仰
  touchPitch: boolean = true;
  // 触控缩放旋转
  touchZoomRotate: boolean = true;
  // 触控旋转
  touchRotate: boolean = true;

  // 指示是否运行在移动端浏览器
  isMobile: boolean

  constructor(
    private constantService: ConstantService
  ) {
    this.isMobile = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i.test(navigator.userAgent);
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = this.constantService.MAPBOX_TOKEN;

    this.map = new mapboxgl.Map({
      container: 'mapContainer',
      style: MapStyles.STREETS_V12,
      center: this.constantService.DEFAULT_MAP_CENTER,
      zoom: 17
    });
  }

  handleDoubleClickZoomChange() {
    if (this.doubleClickZoom) {
      this.map?.doubleClickZoom.enable();
    } else {
      this.map?.doubleClickZoom.disable();
    }
  }

  handleDragPanChange() {
    if (this.dragPan) {
      this.map?.dragPan.enable();
    } else {
      this.map?.dragPan.disable();
    }
  }

  handleScrollZoomChange() {
    if (this.scrollZoom) {
      this.map?.scrollZoom.enable();
    } else {
      this.map?.scrollZoom.disable();
    }
  }

  handleDragRotateChange() {
    if (this.dragRotate) {
      this.map?.dragRotate.enable();
    } else {
      this.map?.dragRotate.disable();
    }
  }

  handleKeyboardChange() {
    if (this.keyboard) {
      this.map?.keyboard.enable();
      this.keyboardPitchRotate = true;
    } else {
      this.map?.keyboard.disable();
      this.keyboardPitchRotate = false;
    }
  }

  handleKeyboardPitchRotateChange() {
    if (this.keyboardPitchRotate) {
      this.map?.keyboard.enableRotation();
    } else {
      this.map?.keyboard.disableRotation();
    }
  }

  handleTouchPitchChange() {
    if (this.touchPitch) {
      this.map?.touchPitch.enable();
    } else {
      this.map?.touchPitch.disable();
    }
  }

  handleTouchZoomRotateChange() {
    if (this.touchZoomRotate) {
      this.map?.touchZoomRotate.enable();
      this.touchRotate = true;
    } else {
      this.map?.touchZoomRotate.disable();
      this.touchRotate = false;
    }
  }

  handleTouchRotateChange() {
    if (this.touchRotate) {
      this.map?.touchZoomRotate.enableRotation()
    } else {
      this.map?.touchZoomRotate.disableRotation();
    }
  }
}
