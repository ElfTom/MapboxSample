import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NzButtonComponent} from "ng-zorro-antd/button";

import {CompareComponent} from './views/compare/compare.component';
import {MapPluginMenuComponent} from './components/map-plugin-menu/map-plugin-menu.component';
import {DrawComponent} from './views/draw/draw.component';
import {ExportComponent} from './views/export/export.component';
import {StyleSwitchComponent} from './views/style-switch/style-switch.component';
import {MinimapComponent} from './views/minimap/minimap.component';
import {AnimatedPopComponent} from './views/animated-pop/animated-pop.component';

const routes: Routes = [
  {
    path: 'compare',
    component: CompareComponent
  },
  {
    path: 'draw',
    component: DrawComponent
  },
  {
    path: 'export',
    component: ExportComponent
  },
  {
    path: 'style-switch',
    component: StyleSwitchComponent
  },
  {
    path: 'minimap',
    component: MinimapComponent
  },
  {
    path: 'animated-pop',
    component: AnimatedPopComponent
  }
];

@NgModule({
  declarations: [
    CompareComponent,
    MapPluginMenuComponent,
    DrawComponent,
    ExportComponent,
    StyleSwitchComponent,
    MinimapComponent,
    AnimatedPopComponent
  ],
  imports: [
    CommonModule,
    NzButtonComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    MapPluginMenuComponent
  ]
})
export class MapPluginModule {
}
