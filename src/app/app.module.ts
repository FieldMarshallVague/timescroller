import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/* modules */
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ScrollersModule } from './scrollers';
import { GraphModule } from './graph';
import { SettingsModule } from './settings';
import { StaticModule } from './static';
import { AppRoutingModule } from './app-routing.module';

/* components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule, // .withServerTransition({ appId: 'serverApp' }),

    // core & shared
    CoreModule,
    SharedModule,

    // features
    GraphModule,
    ScrollersModule,
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
