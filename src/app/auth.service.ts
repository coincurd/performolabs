import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  LogAuthenticate()
  {
    if(localStorage.getItem('is_logged'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
