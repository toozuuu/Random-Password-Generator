import {Injectable} from '@angular/core';
import {InteractionService} from "./interaction.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  emailRegex: RegExp = /^(([^+<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;

  constructor(private router: Router,
              private interactionService: InteractionService
  ) {

  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.interactionService.updateUserLogin(false);
    this.router.navigate(['/']);
  }

}
