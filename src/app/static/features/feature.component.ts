import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Feature } from '@app/static/features/feature';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatureComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  @Input() feature: Feature;

  constructor() { }

  ngOnInit() {
  }

}
