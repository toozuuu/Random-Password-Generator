import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return sessionStorage.getItem("access_token");
    },
    disallowedRoutes: [
      // add all public api endpoints here.
      "/API_SERVICE/####/####",
    ]
  }
}

@NgModule({
  imports:
    [
      CommonModule,
      JwtModule.forRoot({
        jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtOptionsFactory,
        }
      })
    ],
  providers: [],
})
export class SecurityModule {
}
