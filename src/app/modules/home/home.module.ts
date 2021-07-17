import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SeoModule } from '../../shared/seo/seo.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SeoModule, HomeRoutingModule],
  exports: [HomeComponent]
})
export class HomeModule { }
