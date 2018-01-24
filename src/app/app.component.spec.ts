import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

/* modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ScrollersModule } from './scrollers';
import { GraphModule } from './graph';
import { SettingsModule } from './settings';
import { StaticModule } from './static';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
