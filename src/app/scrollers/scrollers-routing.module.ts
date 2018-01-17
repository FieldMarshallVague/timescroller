import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlatComponent } from './flat/flat.component';

const routes: Routes = [
  {
    path: 'flat',
    component: FlatComponent,
    data: { title: 'Flat' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ScrollersRoutingModule {}
