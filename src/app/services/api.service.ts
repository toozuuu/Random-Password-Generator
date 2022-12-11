import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {Credentials, Token,} from "../utilities/models";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(protected httpClient: HttpClient) {
  }

  initiate(credentials: Credentials): Observable<HttpResponse<any>> {
    const urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.append('username', credentials['username']);
    urlSearchParams.append('password', credentials['password']);
    const headers: HttpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    );
    return this.httpClient.post<HttpResponse<any>>('/visitor-service/oauth/initiate', urlSearchParams.toString(), {
      headers: headers,
      observe: 'response'
    });
  }

  verifyLogin(credentials: Credentials): Observable<Token> {
    const urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.append('username', credentials['username']);
    urlSearchParams.append('password', credentials['password']);
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('otp', '');
    const headers: HttpHeaders = new HttpHeaders(
      {
        Authorization: 'Basic ',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    );
    return this.httpClient.post<Token>('/visitor-service/oauth/token', urlSearchParams.toString(), {headers});
  }
}
