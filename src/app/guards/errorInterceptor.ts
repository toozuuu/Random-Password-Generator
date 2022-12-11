import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {DataService} from "../services/data.service";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dataService: DataService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
        this.dataService.logout();
      }
      const error = (err && err.error && err.error.message) || err.statusText;
      return throwError(error);
    }))
  }
}
