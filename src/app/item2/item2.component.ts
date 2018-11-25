import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WithTemplate } from '../with-template.component';

@Component({
  selector: 'app-item2',
  template: `
    <p>item2 works!</p>
    <ng-template #template1>
      <button mat-button [matMenuTriggerFor]="menu">Item 2 Menu</button>
      <mat-menu #menu>
        <button mat-menu-item>Do Nothing</button>
      </mat-menu>
    </ng-template>
  `,
  styles: []
})
export class Item2Component implements WithTemplate {
  @ViewChild('template1')
  template: TemplateRef<any>;
}
