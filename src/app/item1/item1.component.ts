import { WithTemplate } from '../with-template.component';
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-item1',
  template: `
    <p>item1 works!</p>
    <p>Count: {{ count }}</p>
    <ng-template #template1>
      <button mat-button [matMenuTriggerFor]="menu">Item 1 Menu</button>
      <mat-menu #menu>
        <button mat-menu-item (click)="countUp()">Count Up</button>
        <button mat-menu-item (click)="countDown()">Count Down</button>
      </mat-menu>
    </ng-template>
  `,
  styles: []
})
export class Item1Component implements WithTemplate {
  @ViewChild('template1')
  template: TemplateRef<any>;

  count: number;

  constructor() {
    this.count = 0;
  }

  countUp(): void {
    this.count++;
  }

  countDown(): void {
    this.count--;
  }
}
