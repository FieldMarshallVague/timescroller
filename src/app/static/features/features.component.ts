import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';

import { Feature } from './feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  versions = env.versions;
  features: Feature[];

  ngOnInit() {
    this.features = this.getFeatures();
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  getFeatures(): Feature[] {
    return [
      {
        title: 'Angular',
        subTitle: 'Modern powerful framework.',
        url: 'https://github.com/angular/angular',
        iconName: 'Github',
        version: this.versions.angular
      },
      {
        title: 'Angular Material',
        subTitle: 'Material design component library.',
        url: 'https://github.com/angular/material2/',
        iconName: 'Github',
        version: this.versions.angular
      },
      {
        title: 'Angular Cli',
        subTitle: 'Angular Command-Line interface.',
        url: 'https://github.com/angular/angular-cli',
        iconName: 'Github',
        version: this.versions.angularCli
      },
      {
        title: 'ngRx',
        subTitle: 'One way data flow powered by RxJS Observables.',
        url: 'https://github.com/ngrx/platform',
        iconName: 'Github',
        version: this.versions.ngrx
      },
      {
        title: 'RxJS',
        subTitle: 'Reactive programming with async collections using Observables.',
        url: 'https://github.com/ReactiveX/RxJS',
        iconName: 'Github',
        version: this.versions.rxjs
      },
      {
        title: 'Bootstrap',
        subTitle: 'Responsive layout library and components.',
        url: 'https://github.com/twbs/bootstrap',
        iconName: 'Github',
        version: this.versions.bootstrap
      },
      {
        title: 'Typescript',
        subTitle: 'Javascript that scales.',
        url: 'https://github.com/Microsoft/TypeScript',
        iconName: 'Github',
        version: this.versions.typescript
      },
    ];
  }
}
