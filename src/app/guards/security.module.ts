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
      "/dashboard-service/oauth/initiate",
      "/dashboard-service/oauth/token",
      "/dashboard-service/users/create"
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
