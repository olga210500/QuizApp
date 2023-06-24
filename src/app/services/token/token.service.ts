import { Injectable } from '@angular/core';
declare const crypto: Crypto;

@Injectable({ providedIn: 'root' })
export class TokenService {
  private tokenKey = 'quizToken';

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  generateToken(): string {
    const existingToken = localStorage.getItem(this.tokenKey);
    if (existingToken) {
      return existingToken;
    }
    const newToken = this.generateUniqueToken();
    localStorage.setItem(this.tokenKey, newToken);
    return newToken;
  }
  generateUniqueToken():string{
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
}
