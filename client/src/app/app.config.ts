import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './__interceptors/error.interceptor';
import { jwtInterceptor } from './__interceptors/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([errorInterceptor, jwtInterceptor]),),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-bottom-right'
    })
  ]

};
