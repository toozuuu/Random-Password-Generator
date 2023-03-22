import {Injectable} from '@angular/core';
import {InteractionService} from "./interaction.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
