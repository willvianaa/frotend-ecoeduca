import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
// Exemplo de método
login(username: string, password: string): boolean {
  if (username === 'admin' && password === '12345') {
    return true;
  }
  return false;

}

}
