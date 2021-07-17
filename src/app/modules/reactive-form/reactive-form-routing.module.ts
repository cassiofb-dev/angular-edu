import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form.component';

const reactiveFormRoutes: Routes = [
  { path: '', component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(reactiveFormRoutes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule {}
