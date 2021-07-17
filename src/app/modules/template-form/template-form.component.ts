import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFormData, ISEO } from 'src/app/shared/types';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {

  submitted: Boolean = false;

  formValues: IFormData = {
    firstname: null,
    lastname: null,
    username: null,
    agree: null,
    adress: {
      city: null,
      state: "",
      zip: null,
    }
  }

  statesMock: Array<string> = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm): void {
    this.submitted = true;
  }

}
