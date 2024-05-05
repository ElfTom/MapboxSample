import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {RouterModule, Routes} from "@angular/router";

import {MapLayerMenuComponent} from './components/map-layer-menu/map-layer-menu.component';
import {FillComponent} from './views/fill/fill.component';
import {LineComponent} from './views/line/line.component';
import {SymbolComponent} from './views/symbol/symbol.component';
import {CircleComponent} from './views/circle/circle.component';
import {FillExtrusionComponent} from './views/fill-extrusion/fill-extrusion.component';
import {HillShadeComponent} from './views/hill-shade/hill-shade.component';
import {HeatmapComponent} from './views/heatmap/heatmap.component';
import {RasterComponent} from './views/raster/raster.component';
import { BackgroundComponent } from './views/background/background.component';

const routes: Routes = [
  {
    path: 'fill',
    component: FillComponent
  },
  {
    path: 'line',
    component: LineComponent
  },
  {
    path: 'symbol',
    component: SymbolComponent
  },
  {
    path: 'circle',
    component: CircleComponent
  },
  {
    path: 'fill-extrusion',
    component: FillExtrusionComponent
  },
  {
    path: 'hill-shade',
    component: HillShadeComponent
  },
  {
    path: 'heatmap',
    component: HeatmapComponent
  },
  {
    path: 'raster',
    component: RasterComponent
  },
  {
    path: 'background',
    component: BackgroundComponent
  }
];

@NgModule({
  declarations: [
    MapLayerMenuComponent,
    FillComponent,
    LineComponent,
    SymbolComponent,
    CircleComponent,
    FillExtrusionComponent,
    HillShadeComponent,
    HeatmapComponent,
    RasterComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    NzButtonComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    MapLayerMenuComponent
  ]
})
export class MapLayerModule {
}
