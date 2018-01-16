import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { StaticRoutingModule } from './static-routing.module';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureComponent } from './features/feature.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [
    AboutComponent,
    FeaturesComponent,
    FeatureComponent
  ]
})
export class StaticModule {}
