import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form.component';

const templateFormRoutes: Routes = [
  { path: '', component: TemplateFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(templateFormRoutes)],
  exports: [RouterModule]
})
export class TemplateFormRoutingModule {}
