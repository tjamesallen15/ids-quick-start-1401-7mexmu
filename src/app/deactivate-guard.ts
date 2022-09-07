import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormComponent } from './form/form.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class DeactivateGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent): boolean | Observable<boolean> {
    let can = component.canDeactivate();
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Deactivation blocked');
      return false;
    }

    return true;
  }
}
