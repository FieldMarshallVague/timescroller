import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollersRoutingModule } from './scrollers-routing.module';

import { FlatComponent } from './flat/flat.component';
import { PostComponent } from './post/post.component';
import { AsyncComponent } from './async/async.component';
import { StreamComponent } from './stream/stream.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollersRoutingModule
  ],
  declarations: [FlatComponent, PostComponent, AsyncComponent, StreamComponent],
})
export class ScrollersModule { }
