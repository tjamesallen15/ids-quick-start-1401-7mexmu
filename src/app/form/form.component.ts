import { Component, OnInit, Input } from '@angular/core';
import DeactivateGuard from '../deactivate-guard';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, DeactivateGuard {
  private checked: boolean = false;

  constructor() {
    console.log('form');
  }

  ngOnInit() {}
  canDeactivate(): boolean {
    return this.checked;
  }
}
