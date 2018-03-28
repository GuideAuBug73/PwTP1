import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { AsyncPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/pluck';

platformBrowserDynamic().bootstrapModule(AppModule);
