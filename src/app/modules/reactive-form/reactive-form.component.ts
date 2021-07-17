import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  submitted: boolean = false;

  profileForm = this.fb.group({
    firstname: [],
    lastname: [],
    username: [],
    agree: [false],
    address: this.fb.group({
      street: [],
      city: [],
      state: [''],
      zip: [],
    }),
  });

  statesMock: Array<string> = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitted = true;
  }

}
