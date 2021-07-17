import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { FormDebugModule } from '../../shared/form-debug/form-debug.module';
import { SeoModule } from '../../shared/seo/seo.module';



@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormRoutingModule,
    FormDebugModule,
    SeoModule
  ],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
