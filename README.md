# Tagia UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build and `--aot` for ahead-of-time compliation.

Run `ng build --prod --aot`.

Then run `npm run precache` to generate the service worker for PWA.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Updating the packages

Run `npm outdated` to find the mis-matched modules and latest versions.
Either run `npm update` or manually edit the package.json file, then run `del-cli './node_modules'` to rimraf the nm folder.
If you've made a few changes, including uninstalls, consider running `npm cache verify` before doing an `npm install`.
