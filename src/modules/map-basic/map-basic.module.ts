import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzSwitchModule} from 'ng-zorro-antd/switch';

import {InitComponent} from "./views/init/init.component";
import {MapBasicMenuComponent} from './components/map-basic-menu/map-basic-menu.component';
import {StyleComponent} from './views/style/style.component';
import {AngleComponent} from './views/angle/angle.component';
import {FlyComponent} from './views/fly/fly.component';
import {ControlComponent} from './views/control/control.component';
import {WidgetComponent} from './views/widget/widget.component';
import {MarkerComponent} from './views/marker/marker.component';
import {EventComponent} from './views/event/event.component';

const routes: Routes = [
  {
    path: 'init',
    component: InitComponent
  },
  {
    path: 'style',
    component: StyleComponent
  },
  {
    path: 'angle',
    component: AngleComponent
  },
  {
    path: 'fly',
    component: FlyComponent
  },
  {
    path: 'control',
    component: ControlComponent
  },
  {
    path: 'widget',
    component: WidgetComponent
  },
  {
    path: 'marker',
    component: MarkerComponent
  },
  {
    path: 'event',
    component: EventComponent
  }
]

@NgModule({
  declarations: [
    InitComponent,
    MapBasicMenuComponent,
    StyleComponent,
    AngleComponent,
    FlyComponent,
    ControlComponent,
    WidgetComponent,
    MarkerComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzSliderModule,
    NzSwitchModule,
    RouterModule.forChild(routes)
  ],
  exports: [MapBasicMenuComponent]
})
export class MapBasicModule {
}
