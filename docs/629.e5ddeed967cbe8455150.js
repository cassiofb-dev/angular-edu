(self.webpackChunkangular_edu=self.webpackChunkangular_edu||[]).push([[629],{629:(o,e,t)=>{"use strict";t.r(e),t.d(e,{ReactiveFormModule:()=>g});var a=t(583),r=t(665),i=t(353),n=t(639),s=t(221),l=t(969);function u(o,e){if(1&o&&(n.TgZ(0,"option",30),n._uU(1),n.qZA()),2&o){const o=e.$implicit;n.Q6J("value",o),n.xp6(1),n.Oqu(o)}}const d=function(){return{title:"Angular and Bootstrap | Angular plus Bootstrap Reactive Form",description:"Angular plus Bootstrap 5 Reactive Form with bootstrap css classes validation"}},m=function(o){return{"was-validated":o}},p=[{path:"",component:(()=>{class o{constructor(o){this.fb=o,this.submitted=!1,this.profileForm=this.fb.group({firstname:[],lastname:[],username:[],agree:[!1],address:this.fb.group({street:[],city:[],state:[""],zip:[]})}),this.statesMock=["Acre","Alagoas","Amap\xe1","Amazonas","Bahia","Cear\xe1","Distrito Federal","Esp\xedrito Santo","Goi\xe1s","Maranh\xe3o","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Par\xe1","Para\xedba","Paran\xe1","Pernambuco","Piau\xed","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rond\xf4nia","Roraima","Santa Catarina","S\xe3o Paulo","Sergipe","Tocantins"]}ngOnInit(){}onSubmit(){this.submitted=!0}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(r.qu))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-reactive-form"]],decls:56,vars:8,consts:[[3,"options"],["novalidate","",1,"row","g-3","needs-validation",3,"formGroup","ngClass","ngSubmit"],[1,"col-md-4"],["for","validationCustom01",1,"form-label"],["type","text","id","validationCustom01","value","Mark","required","","formControlName","firstname","placeholder","Your First Name",1,"form-control"],[1,"valid-feedback"],["for","validationCustom02",1,"form-label"],["type","text","id","validationCustom02","value","Otto","required","","formControlName","lastname","placeholder","Your Last Name",1,"form-control"],["for","validationCustomUsername",1,"form-label"],[1,"input-group","has-validation"],["id","inputGroupPrepend",1,"input-group-text"],["type","text","id","validationCustomUsername","aria-describedby","inputGroupPrepend","required","","formControlName","username","placeholder","Your User Name",1,"form-control"],[1,"invalid-feedback"],["formGroupName","address",1,"row","m-0","p-0","mt-2"],[1,"col-md-6"],["for","validationCustom03",1,"form-label"],["type","text","id","validationCustom03","required","","formControlName","city","placeholder","Your City",1,"form-control"],[1,"col-md-3"],["for","validationCustom04",1,"form-label"],["id","validationCustom04","required","","formControlName","state",1,"form-select"],["selected","","disabled","","value",""],[3,"value",4,"ngFor","ngForOf"],["for","validationCustom05",1,"form-label"],["type","text","id","validationCustom05","required","","formControlName","zip","placeholder","Your ZIP code",1,"form-control"],[1,"col-12"],[1,"form-check"],["type","checkbox","value","","id","invalidCheck","required","","formControlName","agree",1,"form-check-input"],["for","invalidCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],[3,"form"],[3,"value"]],template:function(o,e){1&o&&(n._UZ(0,"app-seo",0),n.TgZ(1,"form",1),n.NdJ("ngSubmit",function(){return e.onSubmit()}),n.TgZ(2,"div",2),n.TgZ(3,"label",3),n._uU(4,"First name"),n.qZA(),n._UZ(5,"input",4),n.TgZ(6,"div",5),n._uU(7," Looks good! "),n.qZA(),n.qZA(),n.TgZ(8,"div",2),n.TgZ(9,"label",6),n._uU(10,"Last name"),n.qZA(),n._UZ(11,"input",7),n.TgZ(12,"div",5),n._uU(13," Looks good! "),n.qZA(),n.qZA(),n.TgZ(14,"div",2),n.TgZ(15,"label",8),n._uU(16,"Username"),n.qZA(),n.TgZ(17,"div",9),n.TgZ(18,"span",10),n._uU(19,"@"),n.qZA(),n._UZ(20,"input",11),n.TgZ(21,"div",12),n._uU(22," Please choose a username. "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(23,"div",13),n.TgZ(24,"div",14),n.TgZ(25,"label",15),n._uU(26,"City"),n.qZA(),n._UZ(27,"input",16),n.TgZ(28,"div",12),n._uU(29," Please provide a valid city. "),n.qZA(),n.qZA(),n.TgZ(30,"div",17),n.TgZ(31,"label",18),n._uU(32,"State"),n.qZA(),n.TgZ(33,"select",19),n.TgZ(34,"option",20),n._uU(35,"Choose a state..."),n.qZA(),n.YNc(36,u,2,2,"option",21),n.qZA(),n.TgZ(37,"div",12),n._uU(38," Please select a valid state. "),n.qZA(),n.qZA(),n.TgZ(39,"div",17),n.TgZ(40,"label",22),n._uU(41,"Zip"),n.qZA(),n._UZ(42,"input",23),n.TgZ(43,"div",12),n._uU(44," Please provide a valid zip. "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(45,"div",24),n.TgZ(46,"div",25),n._UZ(47,"input",26),n.TgZ(48,"label",27),n._uU(49," Agree to terms and conditions "),n.qZA(),n.TgZ(50,"div",12),n._uU(51," You must agree before submitting. "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(52,"div",24),n.TgZ(53,"button",28),n._uU(54,"Submit form"),n.qZA(),n.qZA(),n.qZA(),n._UZ(55,"app-form-debug",29)),2&o&&(n.Q6J("options",n.DdM(5,d)),n.xp6(1),n.Q6J("formGroup",e.profileForm)("ngClass",n.VKq(6,m,e.submitted)),n.xp6(35),n.Q6J("ngForOf",e.statesMock),n.xp6(19),n.Q6J("form",e.profileForm))},directives:[s.p,r._Y,r.JL,r.sg,a.mk,r.Fj,r.Q7,r.JJ,r.u,r.x0,r.EJ,r.YN,r.Kr,a.sg,r.Zs,r.Wl,l.J],encapsulation:2}),o})()}];let c=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[i.Bz.forChild(p)],i.Bz]}),o})();var Z=t(786),f=t(395);let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[a.ez,r.UX,c,Z.b,f.m]]}),o})()}}]);