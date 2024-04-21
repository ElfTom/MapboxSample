import {AfterViewInit, Component} from '@angular/core';
import {RouteWrapService} from "../../../../services/route-wrap.service";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.less'
})
export class SplashComponent implements AfterViewInit {

  constructor(
    private routerWrapService: RouteWrapService
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.routerWrapService.navigate('main/home')
    }, 1000)
  }
}
