import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphRoutingModule } from './graph-routing.module';
import { PlumbModule } from './plumb';

import { GraphComponent } from './graph/graph.component';
import { GraphCanvasComponent } from './graph-canvas/graph-canvas.component';
import { PlumbDefaultsFactory } from './plumb/plumb-defaults';

@NgModule({
  imports: [
    CommonModule
    , PlumbModule
    , GraphRoutingModule
  ],
  declarations: [
    GraphComponent
    , GraphCanvasComponent
  ],
  exports: [
    PlumbModule
    , GraphComponent
    , GraphCanvasComponent
  ],
  providers: [
    PlumbDefaultsFactory
  ]
})
export class GraphModule { }
