import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProcessDataService {
  constructor() {}

  getInitials(firstName: string, lastName: string): string {
    const names = firstName.split(' ');
    if (names.length === 2) {
      return names[0][0] + names[1][0];
    } else {
      return names[0][0] + lastName[0];
    }
  }
}
