import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }
  
  
  ValidateUser( username:string ,password:string){
    
    if(username == "admin" && password == "admin")
    {
      return true;
    }
    else{
      return false;
    }
    
  }
}
