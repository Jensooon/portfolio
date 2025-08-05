import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';

import routeConfig from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],

  // NOTE: Removed provideRouter(routeConfig
};
