import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatComponent } from './flat/flat.component';
import { AsyncComponent } from './async/async.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  {
    path: 'flat',
    component: FlatComponent,
    data: { title: 'Flat' }
  },
  {
    path: 'async',
    component: AsyncComponent,
    data: { title: 'async' }
  },
  {
    path: 'stream',
    component: StreamComponent,
    data: { title: 'stream' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ScrollersRoutingModule {}
