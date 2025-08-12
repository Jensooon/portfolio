import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private globalIsDark = new BehaviorSubject<boolean>(true);

  setGlobalDark(value: boolean) {
    this.globalIsDark.next(value);
  }

  getIsDark(): boolean {
    return this.globalIsDark.getValue();
  }

  getGlobalDark(): Observable<boolean> {
    return this.globalIsDark.asObservable();
  }
}
