import { Component, TemplateRef } from '@angular/core';
import { WithTemplate } from './with-template.component';

const isWithTemplate = (object: any): object is WithTemplate =>
  !!object.template;

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-button [matMenuTriggerFor]="menu">Menu</button>
      <mat-menu #menu>
        <button mat-menu-item routerLink="/item1">Item 1</button>
        <button mat-menu-item routerLink="/item2">Item 2</button>
      </mat-menu>
      <ng-container *ngTemplateOutlet="additionalMenu"></ng-container>
    </mat-toolbar>
    <router-outlet
      #routerOutlet
      (activate)="onActivate($event)"
    ></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  additionalMenu: TemplateRef<any>;

  onActivate(event): void {
    if (isWithTemplate(event)) {
      this.additionalMenu = event.template;
    } else {
      this.additionalMenu = undefined;
    }
  }
}
