import{B as C,b as c,d as f,e as u,f as x,g}from"./chunk-5IPKKSE3.js";import{J as p,O as l,P as s,Qa as m,jb as v,rb as b,tb as d,ub as h,wa as n,xa as t,ya as r}from"./chunk-YZMCDPOE.js";var F=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["auth-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,M){o&1&&(n(0,"div",0)(1,"div",1),r(2,"router-outlet"),t()())},dependencies:[b]});let i=e;return i})();var I=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text.lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-fab","","extended","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(o,M){o&1&&(n(0,"div",0)(1,"span",1),m(2,"Login"),t(),n(3,"mat-form-field")(4,"mat-label"),m(5,"Usuario"),t(),r(6,"input",2),t(),n(7,"mat-form-field")(8,"mat-label"),m(9,"Contrase\xF1a"),t(),r(10,"input",3),t(),n(11,"button",4)(12,"mat-icon"),m(13,"save"),t(),m(14," Ingresar "),t(),n(15,"div",5)(16,"a",6),m(17,"\xBFYa tienes cuenta?"),t()()())},dependencies:[d,c,u,f,x,g]});let i=e;return i})();var S=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-register-page"]],decls:22,vars:0,consts:[[1,"flex","flex-column"],[1,"text.lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","text","matInput","","placeholder","Nombre"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-fab","","extended","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(o,M){o&1&&(n(0,"div",0)(1,"span",1),m(2,"Registro"),t(),n(3,"mat-form-field")(4,"mat-label"),m(5,"Usuario"),t(),r(6,"input",2),t(),n(7,"mat-form-field")(8,"mat-label"),m(9,"Nombre"),t(),r(10,"input",3),t(),n(11,"mat-form-field")(12,"mat-label"),m(13,"Contrase\xF1a"),t(),r(14,"input",4),t(),n(15,"button",5)(16,"mat-icon"),m(17,"save"),t(),m(18," Crear cuenta "),t(),n(19,"div",6)(20,"a",7),m(21,"\xBFNo tienes cuenta?"),t()()())},dependencies:[d,c,u,f,x,g]});let i=e;return i})();var P=[{path:"",component:F,children:[{path:"login",component:I},{path:"new-account",component:S},{path:"**",redirectTo:"login"}]}],L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s({type:e}),e.\u0275inj=p({imports:[h.forChild(P),h]});let i=e;return i})();var Z=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s({type:e}),e.\u0275inj=p({imports:[v,L,C]});let i=e;return i})();export{Z as AuthModule};
