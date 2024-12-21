import '@facephi/sdk-web-wc';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineCustomElements(window);
