import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key): any {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key, value): any {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key): any {
    localStorage.removeItem(key);
  }
}
