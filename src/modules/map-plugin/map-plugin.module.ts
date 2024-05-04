import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NzButtonComponent} from "ng-zorro-antd/button";

import {CompareComponent} from './views/compare/compare.component';
import {MapPluginMenuComponent} from './components/map-plugin-menu/map-plugin-menu.component';
import {DrawComponent} from './views/draw/draw.component';
import {ExportComponent} from './views/export/export.component';
import { InfoboxComponent } from './views/infobox/infobox.component';
import { StyleSwitchComponent } from './views/style-switch/style-switch.component';
import { MinimapComponent } from './views/minimap/minimap.component';
import {NzTransitionPatchDirective} from "ng-zorro-antd/core/transition-patch/transition-patch.directive";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";

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
    path: 'infobox',
    component: InfoboxComponent
  },
  {
    path: 'style-switch',
    component: StyleSwitchComponent
  },
  {
    path: 'minimap',
    component: MinimapComponent
  }
];

@NgModule({
  declarations: [
    CompareComponent,
    MapPluginMenuComponent,
    DrawComponent,
    ExportComponent,
    InfoboxComponent,
    StyleSwitchComponent,
    MinimapComponent
  ],
  imports: [
    CommonModule,
    NzButtonComponent,
    RouterModule.forChild(routes),
    NzTransitionPatchDirective,
    NzWaveDirective
  ],
  exports: [
    MapPluginMenuComponent
  ]
})
export class MapPluginModule {
}
