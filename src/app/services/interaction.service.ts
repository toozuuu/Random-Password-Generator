import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _apiLoginUpdate = new Subject<boolean>();
  apiLoginUpdate = this._apiLoginUpdate.asObservable();

  updateUserLogin(status: boolean) {
    this._apiLoginUpdate.next(status);
  }

}
