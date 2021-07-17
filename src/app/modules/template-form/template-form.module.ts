import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { TemplateFormRoutingModule } from './template-form-routing.module';
import { FormDebugModule } from '../../shared/form-debug/form-debug.module';
import { SeoModule } from '../../shared/seo/seo.module';



@NgModule({
  declarations: [TemplateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    TemplateFormRoutingModule,
    FormDebugModule,
    SeoModule
  ],
  exports: [TemplateFormComponent]
})
export class TemplateFormModule { }
