import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {
    path: 'graph',
    component: GraphComponent,
    data: { title: 'Graph' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GraphRoutingModule {}
