import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window[<any>'ngRef']) {
      (<any>window[<any>'ngRef']).destroy();
    }
    (<any>window[<any>'ngRef']) = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
