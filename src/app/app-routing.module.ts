import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

const routes: Routes = [
  { path: 'item1', component: Item1Component },
  { path: 'item2', component: Item2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
