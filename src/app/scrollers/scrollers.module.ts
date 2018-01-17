import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollersRoutingModule } from './scrollers-routing.module';

import { FlatComponent } from './flat/flat.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollersRoutingModule
  ],
  declarations: [FlatComponent, PostComponent],
  exports: [
    FlatComponent
    , PostComponent
  ]
})
export class ScrollersModule { }
