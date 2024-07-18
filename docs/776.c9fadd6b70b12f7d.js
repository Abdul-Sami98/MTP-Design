"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[776],{5776:(K,v,c)=>{c.r(v),c.d(v,{AuthModule:()=>V});var p=c(6733),o=c(3226),e=c(8316);function Z(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"input",3,4),e.NdJ("paste",function(i){e.CHM(t);const s=e.oxw(2);return e.KtG(s.handlePaste(i))})("keyup",function(i){const l=e.CHM(t).index,d=e.oxw(2);return e.KtG(d.onKeyUp(i,l))})("input",function(i){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onInput(i))})("keydown",function(i){const l=e.CHM(t).index,d=e.oxw(2);return e.KtG(d.onKeyDown(i,l))}),e.qZA()}if(2&n){const t=a.$implicit,r=a.index,i=e.oxw(2);e.Gre("otp-input ",i.config.inputClass,""),e.Q6J("pattern",i.config.allowNumbersOnly?"\\d*":"")("type",i.inputType)("placeholder",(null==i.config?null:i.config.placeholder)||"")("ngStyle",i.config.inputStyles)("formControl",i.otpForm.controls[t])("id",i.getBoxId(r))}}function T(n,a){if(1&n&&(e.TgZ(0,"div",1),e.YNc(1,Z,2,9,"input",2),e.ALo(2,"keys"),e.qZA()),2&n){const t=e.oxw();e.Gre("ng-otp-input-wrapper wrapper ",t.config.containerClass,""),e.MGl("id","c_",t.componentKey,""),e.Q6J("ngStyle",t.config.containerStyles),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,6,null==t.otpForm?null:t.otpForm.controls))}}class m{static ifTab(a){return this.ifKey(a,"Tab")}static ifDelete(a){return this.ifKey(a,"Delete;Del")}static ifBackspace(a){return this.ifKey(a,"Backspace")}static ifRightArrow(a){return this.ifKey(a,"ArrowRight;Right")}static ifLeftArrow(a){return this.ifKey(a,"ArrowLeft;Left")}static ifSpacebar(a){return this.ifKey(a,"Spacebar; ")}static ifKey(a,t){return t.split(";").some(i=>i===a.key)}}let g=(()=>{class n{transform(t){return Object.keys(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"keys",type:n,pure:!0}),n})(),C=(()=>{class n{constructor(t){this.keysPipe=t,this.config={length:4},this.onInputChange=new e.vpe,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)}get inputType(){return this.config?.isPasswordInput?"password":this.config?.allowNumbersOnly?"tel":"text"}ngOnInit(){this.otpForm=new o.cw({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new o.NI);this.otpForm.valueChanges.subscribe(t=>{this.keysPipe.transform(this.otpForm.controls).forEach(r=>{var i=this.otpForm.controls[r].value;i&&i.length>1&&(i.length>=this.config.length?this.setValue(i):this.rebuildValue())})})}ngAfterViewInit(){if(!this.config.disableAutoFocus){const t=document.getElementById(`c_${this.componentKey}`);if(t){const r=t.getElementsByClassName("otp-input")[0];r&&r.focus&&r.focus()}}}getControlName(t){return`ctrl_${t}`}onKeyDown(t,r){const i=this.getBoxId(r-1),s=this.getBoxId(r);return m.ifSpacebar(t)?(t.preventDefault(),!1):m.ifBackspace(t)?(t.target.value?this.clearInput(s,r):(this.clearInput(i,r-1),this.setSelected(i)),void this.rebuildValue()):void 0}onInput(t){if(this.config.allowNumbersOnly&&!this.validateNumber(this.currentVal?`${this.currentVal}${t.target.value}`:t.target.value))return t.target.value="",t.stopPropagation(),void t.preventDefault()}onKeyUp(t,r){m.ifTab(t)&&(r-=1);const i=this.getBoxId(r+1),s=this.getBoxId(r-1),l=this.getBoxId(r);return m.ifRightArrow(t)?(t.preventDefault(),void this.setSelected(i)):m.ifLeftArrow(t)?(t.preventDefault(),void this.setSelected(s)):m.ifDelete(t)?(t.target.value?this.clearInput(l,r):(this.clearInput(s,r-1),this.setSelected(s)),void this.rebuildValue()):void(t.target.value&&(this.ifValidKeyCode(t)&&this.setSelected(i),this.rebuildValue()))}validateNumber(t){return t&&/^\d*\.?\d*$/.test(t)}getBoxId(t){return`otp_${t}_${this.componentKey}`}clearInput(t,r){let i=this.getControlName(r);this.otpForm.controls[i]?.setValue(null);const s=document.getElementById(t);s&&s instanceof HTMLInputElement&&(s.value=null)}setSelected(t){this.focusTo(t);const r=document.getElementById(t);r&&r.setSelectionRange&&setTimeout(()=>{r.setSelectionRange(0,1)},0)}ifValidKeyCode(t){const r=t.key;return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(r)}focusTo(t){const r=document.getElementById(t);r&&r.focus()}setValue(t){if(!this.config.allowNumbersOnly||!isNaN(t)){if(this.otpForm.reset(),!t)return void this.rebuildValue();if(t=t.toString().replace(/\s/g,""),Array.from(t).forEach((i,s)=>{this.otpForm.get(this.getControlName(s))&&this.otpForm.get(this.getControlName(s)).setValue(i)}),!this.config.disableAutoFocus){const i=document.getElementById(`c_${this.componentKey}`);var r=t.length<this.config.length?t.length:this.config.length-1;let s=i.getElementsByClassName("otp-input")[r];s&&s.focus&&s.focus()}this.rebuildValue()}}rebuildValue(){let t="";this.keysPipe.transform(this.otpForm.controls).forEach(r=>{if(this.otpForm.controls[r].value){let i=this.otpForm.controls[r].value,s=i.length>1,l=!this.config.allowNumbersOnly&&this.config.letterCase&&("upper"==this.config.letterCase.toLocaleLowerCase()||"lower"==this.config.letterCase.toLocaleLowerCase());i=i[0];let d=l?"upper"==this.config.letterCase.toLocaleLowerCase()?i.toUpperCase():i.toLowerCase():i;l&&d==i?l=!1:i=d,t+=i,(s||l)&&this.otpForm.controls[r].setValue(i)}}),this.formCtrl?.setValue&&this.formCtrl.setValue(t),this.onInputChange.emit(t),this.currentVal=t}handlePaste(t){let r=t.clipboardData||window.clipboardData;if(r)var i=r.getData("Text");t.stopPropagation(),t.preventDefault(),i&&(!this.config.allowNumbersOnly||this.validateNumber(i))&&this.setValue(i)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-otp-input"]],inputs:{config:"config",formCtrl:"formCtrl"},outputs:{onInputChange:"onInputChange"},decls:1,vars:1,consts:[[3,"class","id","ngStyle",4,"ngIf"],[3,"id","ngStyle"],["autocomplete","one-time-code",3,"pattern","type","placeholder","ngStyle","class","formControl","id","paste","keyup","input","keydown",4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"pattern","type","placeholder","ngStyle","formControl","id","paste","keyup","input","keydown"],["inp",""]],template:function(t,r){1&t&&e.YNc(0,T,3,8,"div",0),2&t&&e.Q6J("ngIf",null==r.otpForm?null:r.otpForm.controls)},dependencies:[p.O5,p.PC,p.sg,o.Fj,o.c5,o.JJ,o.oH,g],styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[g],imports:[[p.ez,o.u5,o.UX]]}),n})();var u=c(1206);const A=function(n,a){return{"mdi-eye-off-outline":n,"mdi-eye-outline":a}};let y=(()=>{class n{constructor(t,r,i){this.formBuilder=t,this.router=r,this.route=i,this.submitted=!1,this.year=(new Date).getFullYear(),this.email="",this.password="",this.role=""}ngOnInit(){localStorage.getItem("currentUser")&&this.router.navigate(["/"]),this.loginForm=this.formBuilder.group({email:["admin@themesbrand.com",[o.kI.required,o.kI.email]],password:["123456",[o.kI.required]]})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.email=this.f.email.value,this.password=this.f.password.value,this.role=this.email.split("@"),this.role=this.role[0],console.log("role",this.role),"admin"==this.role&&(this.router.navigate(["/dashboard"]),localStorage.setItem("currentUserEmail",this.email),localStorage.setItem("currentUserRole",this.role)),"customer"==this.role&&(this.router.navigate(["/customer-dashboard"]),localStorage.setItem("currentUserEmail",this.email),localStorage.setItem("currentUserRole",this.role)),console.log("email :",this.email)}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(o.QS),e.Y36(u.F0),e.Y36(u.gz))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:36,vars:6,consts:[[1,"auth-card","mx-lg-3"],[1,"card","border-0","mb-0"],[1,"card-header","bg-primary","border-0","py-1"],[1,"row"],[1,"col-12","text-center"],[1,"text-white","lh-base","fw-lighter"],[1,"card-body","py-2"],[1,"p-2"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","username",1,"form-label"],["type","email","formControlName","email","id","username","placeholder","Enter Emai",1,"form-control"],[1,"float-end"],["routerLink","/forgot-password",1,"text-muted"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-3"],["type","password","formControlName","password","placeholder","Enter password","id","password-input",1,"form-control","pe-5","password-input",3,"type"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"ri-eye-fill","align-middle",3,"ngClass","click"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check","remember","",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["type","submit",1,"btn","btn-primary","w-100"],[1,"text-center","mt-2"],[1,"mb-2"],["routerLink","/register",1,"fw-semibold","text-primary","text-decoration-underline"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Sign In"),e.qZA()()()(),e.TgZ(7,"div",6)(8,"div",7)(9,"form",8),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(10,"div",9)(11,"label",10),e._uU(12,"email"),e.qZA(),e._UZ(13,"input",11),e.qZA(),e.TgZ(14,"div",9)(15,"div",12)(16,"a",13),e._uU(17,"Forgot password?"),e.qZA()(),e.TgZ(18,"label",14),e._uU(19,"Password"),e.qZA(),e.TgZ(20,"div",15),e._UZ(21,"input",16),e.TgZ(22,"button",17)(23,"i",18),e.NdJ("click",function(){return i.toggleFieldTextType()}),e.qZA()()()(),e.TgZ(24,"div",19),e._UZ(25,"input",20),e.TgZ(26,"label",21),e._uU(27,"Remember me"),e.qZA()(),e.TgZ(28,"div",22)(29,"button",23),e._uU(30,"Sign In"),e.qZA()()(),e.TgZ(31,"div",24)(32,"p",25),e._uU(33,"Don't have an account ? "),e.TgZ(34,"a",26),e._uU(35," Sign Up"),e.qZA()()()()()()()),2&r&&(e.xp6(9),e.Q6J("formGroup",i.loginForm),e.xp6(12),e.Q6J("type",i.fieldTextType?"text":"password"),e.xp6(2),e.Q6J("ngClass",e.WLB(3,A,!i.fieldTextType,i.fieldTextType)))},dependencies:[p.mk,u.rH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]})}return n})();const f=function(n){return{"is-invalid":n}},I=function(n,a){return{"mdi-eye-off-outline":n,"mdi-eye-outline":a}};function q(n,a){1&n&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function k(n,a){if(1&n&&(e.TgZ(0,"div",18),e.YNc(1,q,2,0,"div",19),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.email.errors.required)}}const F=function(n){return{"is-invalid":n}};function S(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"Password is required"),e.qZA())}function B(n,a){if(1&n&&(e.TgZ(0,"div",34),e.YNc(1,S,2,0,"span",35),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.password.errors.required)}}function J(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"Confirm Password is required"),e.qZA())}function E(n,a){if(1&n&&(e.TgZ(0,"div",34),e.YNc(1,J,2,0,"span",35),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.f.cpassword.errors.required)}}const w=function(n){return{"is-invalid":n}},_=function(n,a){return{"mdi-eye-off-outline":n,"mdi-eye-outline":a}},P=[{path:"",children:[{path:"",component:y},{path:"login",component:y},{path:"register",component:(()=>{class n{constructor(t){this.formBuilder=t,this.submitted=!1,this.year=(new Date).getFullYear()}ngOnInit(){this.SignupForm=this.formBuilder.group({email:["",[o.kI.required]],name:["",[o.kI.required]],password:["",o.kI.required]});var t=document.getElementById("password-input"),r=document.getElementById("pass-lower"),i=document.getElementById("pass-upper"),s=document.getElementById("pass-number"),l=document.getElementById("pass-length");t.onfocus=function(){document.getElementById("password-contain").style.display="block"},t.onblur=function(){document.getElementById("password-contain").style.display="none"},t.onkeyup=function(){t.value.match(/[a-z]/g)?(r?.classList.remove("invalid"),r?.classList.add("valid")):(r?.classList.remove("valid"),r?.classList.add("invalid")),t.value.match(/[A-Z]/g)?(i?.classList.remove("invalid"),i?.classList.add("valid")):(i?.classList.remove("valid"),i?.classList.add("invalid")),t.value.match(/[0-9]/g)?(s?.classList.remove("invalid"),s?.classList.add("valid")):(s?.classList.remove("valid"),s?.classList.add("invalid")),t.value.length>=8?(l?.classList.remove("invalid"),l?.classList.add("valid")):(l?.classList.remove("valid"),l?.classList.add("invalid"))}}get f(){return this.SignupForm.controls}onSubmit(){this.submitted=!0}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(o.QS))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-register"]],decls:65,vars:14,consts:[[1,"auth-card","mx-lg-3"],[1,"card","border-0","mb-0"],[1,"card-header","bg-primary","border-0","py-2"],[1,"row"],[1,"col-12","text-center"],[1,"text-white","text-capitalize","lh-base","fw-lighter"],[1,"card-body","py-2"],[1,"p-2"],[1,"needs-validation"],[1,"mb-3"],["for","username",1,"form-label"],[1,"text-danger"],["type","text","id","username","placeholder","Enter username","required","","formControlName","name",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],["for","useremail",1,"form-label"],["type","email","id","useremail","placeholder","Enter email address","required","","formControlName","email",1,"form-control",3,"ngClass"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup"],["onpaste","return false","placeholder","Enter password","id","password-input","aria-describedby","passwordInput","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","required","","formControlName","password",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"ri-eye-fill","align-middle",3,"ngClass","click"],["id","password-contain",1,"p-3","bg-light","mb-2","rounded"],[1,"fs-13"],["id","pass-length",1,"invalid","fs-12","mb-2"],["id","pass-lower",1,"invalid","fs-12","mb-2"],["id","pass-upper",1,"invalid","fs-12","mb-2"],["id","pass-number",1,"invalid","fs-12","mb-0"],[1,"mt-4"],["type","submit",1,"btn","btn-primary","w-100"],[1,"mt-2","text-center"],[1,"mb-2"],["routerLink","/login",1,"fw-semibold","text-primary","text-decoration-underline"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Sign Up"),e.qZA()()()(),e.TgZ(7,"div",6)(8,"div",7)(9,"form",8)(10,"div",9)(11,"label",10),e._uU(12,"Username "),e.TgZ(13,"span",11),e._uU(14,"*"),e.qZA()(),e._UZ(15,"input",12),e.TgZ(16,"div",13),e._uU(17," Please enter username "),e.qZA()(),e.TgZ(18,"div",9)(19,"label",14),e._uU(20,"Email "),e.TgZ(21,"span",11),e._uU(22,"*"),e.qZA()(),e._UZ(23,"input",15),e.TgZ(24,"div",13),e._uU(25," Please enter email "),e.qZA()(),e.TgZ(26,"div",9)(27,"label",16),e._uU(28,"Password"),e.qZA(),e.TgZ(29,"div",17),e._UZ(30,"input",18),e.TgZ(31,"button",19)(32,"i",20),e.NdJ("click",function(){return i.toggleFieldTextType()}),e.qZA()(),e.TgZ(33,"div",13),e._uU(34," Please enter password "),e.qZA()()(),e.TgZ(35,"div",21)(36,"h5",22),e._uU(37,"Password must contain:"),e.qZA(),e.TgZ(38,"p",23),e._uU(39,"Minimum "),e.TgZ(40,"b"),e._uU(41,"8 characters"),e.qZA()(),e.TgZ(42,"p",24),e._uU(43,"At "),e.TgZ(44,"b"),e._uU(45,"lowercase"),e.qZA(),e._uU(46," letter (a-z)"),e.qZA(),e.TgZ(47,"p",25),e._uU(48,"At least "),e.TgZ(49,"b"),e._uU(50,"uppercase"),e.qZA(),e._uU(51," letter (A-Z)"),e.qZA(),e.TgZ(52,"p",26),e._uU(53,"A least "),e.TgZ(54,"b"),e._uU(55,"number"),e.qZA(),e._uU(56," (0-9)"),e.qZA()(),e.TgZ(57,"div",27)(58,"button",28),e._uU(59,"Sign Up"),e.qZA()()()(),e.TgZ(60,"div",29)(61,"p",30),e._uU(62,"Already have an account ? "),e.TgZ(63,"a",31),e._uU(64," Sign In "),e.qZA()()()()()()),2&r&&(e.xp6(15),e.Q6J("ngClass",e.VKq(5,f,i.submitted&&i.f.name.errors)),e.xp6(8),e.Q6J("ngClass",e.VKq(7,f,i.submitted&&i.f.email.errors)),e.xp6(7),e.Q6J("type",i.fieldTextType?"text":"password")("ngClass",e.VKq(9,f,i.submitted&&i.f.password.errors)),e.xp6(2),e.Q6J("ngClass",e.WLB(11,I,!i.fieldTextType,i.fieldTextType)))},dependencies:[p.mk,u.rH,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.c5,o.u,o.F]})}return n})()},{path:"forgot-password",component:(()=>{class n{constructor(t){this.formBuilder=t,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.passresetForm=this.formBuilder.group({email:["",[o.kI.required]]})}get f(){return this.passresetForm.controls}onSubmit(){this.submitted=!0}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(o.QS))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-forgotpassword"]],decls:25,vars:4,consts:[[1,"auth-card","mx-lg-3"],[1,"card","border-0","mb-0"],[1,"card-header","bg-primary","border-0","py-1"],[1,"row"],[1,"col-12","text-center"],[1,"text-white","lh-base","fw-lighter"],[1,"card-body","py-2"],["role","alert",1,"alert","alert-borderless","alert-warning","text-center","mb-2","mx-2","my-2"],[1,"p-2"],[1,"mb-4"],["for","email",1,"form-label"],["type","email","id","email","placeholder","Enter your email or username","formControlName","email","required","",1,"form-control",3,"ngClass"],["class","invalid-feedback","align","left",4,"ngIf"],[1,"text-center","mt-4"],["routerLink","/email-verification","type","submit",1,"btn","btn-primary","w-100"],[1,"mt-2","text-center"],[1,"mb-2"],["routerLink","/login",1,"fw-semibold","text-primary","text-decoration-underline"],["align","left",1,"invalid-feedback"],[4,"ngIf"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Forgot Password?"),e.qZA()()()(),e.TgZ(7,"div",6)(8,"div",7),e._uU(9," Enter your email and instructions will be sent to you! "),e.qZA(),e.TgZ(10,"div",8)(11,"form")(12,"div",9)(13,"label",10),e._uU(14,"Email"),e.qZA(),e._UZ(15,"input",11),e.YNc(16,k,2,1,"div",12),e.qZA(),e.TgZ(17,"div",13)(18,"button",14),e._uU(19,"Send Reset Link"),e.qZA()()()(),e.TgZ(20,"div",15)(21,"p",16),e._uU(22,"Wait, I remember my password... "),e.TgZ(23,"a",17),e._uU(24," Click here"),e.qZA()()()()()()),2&r&&(e.xp6(15),e.Q6J("ngClass",e.VKq(2,F,i.submitted&&i.f.email.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.email.errors))},dependencies:[p.mk,p.O5,u.rH,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.u,o.F]})}return n})()},{path:"email-verification",component:(()=>{class n{constructor(){this.year=(new Date).getFullYear(),this.config={allowNumbersOnly:!0,length:4,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"80px",height:"50px"}}}ngOnInit(){}static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-email-verification"]],decls:24,vars:1,consts:[[1,"auth-card","mx-lg-3"],[1,"card","border-0","mb-0"],[1,"card-header","bg-primary","border-0","py-1"],[1,"row"],[1,"col-12","text-center"],[1,"text-white","lh-base","fw-lighter"],[1,"card-body","text-center"],[1,"text-muted","fs-15"],[1,"fw-semibold"],[1,"p-2"],["autocomplete","off"],[1,"row","otpfields"],[3,"config"],[1,"mt-3"],["routerLink","/change-password","type","button",1,"btn","btn-primary","w-100"],[1,"mt-2","text-center"],[1,"mb-2"],["routerLink","/email-verification",1,"fw-semibold","text-primary","text-decoration-underline"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Verify Your Email"),e.qZA()()()(),e.TgZ(7,"div",6)(8,"p",7),e._uU(9,"Please enter the 4 digit code sent to "),e.TgZ(10,"span",8),e._uU(11,"example@abc.com"),e.qZA()(),e.TgZ(12,"div",9)(13,"form",10)(14,"div",11),e._UZ(15,"ng-otp-input",12),e.qZA()(),e.TgZ(16,"div",13)(17,"button",14),e._uU(18,"Confirm"),e.qZA()()(),e.TgZ(19,"div",15)(20,"p",16),e._uU(21,"Didn't receive a code ? "),e.TgZ(22,"a",17),e._uU(23,"Resend"),e.qZA()()()()()()),2&r&&(e.xp6(15),e.Q6J("config",i.config))},dependencies:[u.rH,o._Y,o.JL,o.F,C]})}return n})()},{path:"change-password",component:(()=>{class n{constructor(t){this.formBuilder=t,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.passresetForm=this.formBuilder.group({password:["",[o.kI.required]],cpassword:["",[o.kI.required]]});var t=document.getElementById("password-input"),r=document.getElementById("pass-lower"),i=document.getElementById("pass-upper"),s=document.getElementById("pass-number"),l=document.getElementById("pass-length");t.onfocus=function(){document.getElementById("password-contain").style.display="block"},t.onblur=function(){document.getElementById("password-contain").style.display="none"},t.onkeyup=function(){t.value.match(/[a-z]/g)?(r?.classList.remove("invalid"),r?.classList.add("valid")):(r?.classList.remove("valid"),r?.classList.add("invalid")),t.value.match(/[A-Z]/g)?(i?.classList.remove("invalid"),i?.classList.add("valid")):(i?.classList.remove("valid"),i?.classList.add("invalid")),t.value.match(/[0-9]/g)?(s?.classList.remove("invalid"),s?.classList.add("valid")):(s?.classList.remove("valid"),s?.classList.add("invalid")),t.value.length>=8?(l?.classList.remove("invalid"),l?.classList.add("valid")):(l?.classList.remove("valid"),l?.classList.add("invalid"))}}get f(){return this.passresetForm.controls}onSubmit(){this.submitted=!0}togglepasswordField(){this.passwordField=!this.passwordField}toggleconfirmField(){this.confirmField=!this.confirmField}static#e=this.\u0275fac=function(r){return new(r||n)(e.Y36(o.QS))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-password-change"]],decls:62,vars:18,consts:[[1,"auth-card","mx-lg-3"],[1,"card","border-0","mb-0"],[1,"card-header","bg-primary","border-0","py-1"],[1,"row"],[1,"col-12","text-center"],[1,"text-white","lh-base","fw-lighter"],[1,"card-body","py-2"],[1,"p-2"],[1,"mb-3"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup"],["formControlName","password","onpaste","return false","placeholder","Enter password","id","password-input","aria-describedby","passwordInput","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","required","",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"ri-eye-fill","align-middle",3,"ngClass","click"],["class","invalid-feedback",4,"ngIf"],["id","passwordInput",1,"form-text"],["for","confirm-password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-3"],["onpaste","return false","placeholder","Confirm password","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","id","confirm-password-input","required","","formControlName","cpassword",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","confirm-password-input",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],["id","password-contain",1,"p-3","bg-light","mb-2","rounded"],[1,"fs-13"],["id","pass-length",1,"invalid","fs-12","mb-2"],["id","pass-lower",1,"invalid","fs-12","mb-2"],["id","pass-upper",1,"invalid","fs-12","mb-2"],["id","pass-number",1,"invalid","fs-12","mb-0"],[1,"form-check","form-check-primary"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["routerLink","/success","type","submit",1,"btn","btn-primary","w-100"],[1,"mt-2","text-center"],[1,"mb-2"],["routerLink","/login",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Create New Password"),e.qZA()()()(),e.TgZ(7,"div",6)(8,"div",7)(9,"form")(10,"div",8)(11,"label",9),e._uU(12,"Password"),e.qZA(),e.TgZ(13,"div",10),e._UZ(14,"input",11),e.TgZ(15,"button",12)(16,"i",13),e.NdJ("click",function(){return i.togglepasswordField()}),e.qZA()(),e.YNc(17,B,2,1,"div",14),e.qZA(),e.TgZ(18,"div",15),e._uU(19,"Your password must be 8-20 characters long."),e.qZA()(),e.TgZ(20,"div",8)(21,"label",16),e._uU(22,"Confirm Password"),e.qZA(),e.TgZ(23,"div",17),e._UZ(24,"input",18),e.TgZ(25,"button",19)(26,"i",13),e.NdJ("click",function(){return i.toggleconfirmField()}),e.qZA()(),e.YNc(27,E,2,1,"div",14),e.qZA()(),e.TgZ(28,"div",20)(29,"h5",21),e._uU(30,"Password must contain:"),e.qZA(),e.TgZ(31,"p",22),e._uU(32,"Minimum "),e.TgZ(33,"b"),e._uU(34,"8 characters"),e.qZA()(),e.TgZ(35,"p",23),e._uU(36,"At "),e.TgZ(37,"b"),e._uU(38,"lowercase"),e.qZA(),e._uU(39," letter (a-z)"),e.qZA(),e.TgZ(40,"p",24),e._uU(41,"At least "),e.TgZ(42,"b"),e._uU(43,"uppercase"),e.qZA(),e._uU(44," letter (A-Z)"),e.qZA(),e.TgZ(45,"p",25),e._uU(46,"A least "),e.TgZ(47,"b"),e._uU(48,"number"),e.qZA(),e._uU(49," (0-9) "),e.qZA()(),e.TgZ(50,"div",26),e._UZ(51,"input",27),e.TgZ(52,"label",28),e._uU(53,"Remember me"),e.qZA()(),e.TgZ(54,"div",29)(55,"button",30),e._uU(56,"Reset Password"),e.qZA()()()(),e.TgZ(57,"div",31)(58,"p",32),e._uU(59,"Wait, I remember my password... "),e.TgZ(60,"a",33),e._uU(61," Click here "),e.qZA()()()()()()),2&r&&(e.xp6(14),e.Q6J("type",i.passwordField?"text":"password")("ngClass",e.VKq(8,w,i.submitted&&i.f.password.errors)),e.xp6(2),e.Q6J("ngClass",e.WLB(10,_,!i.passwordField,i.passwordField)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.password.errors),e.xp6(7),e.Q6J("type",i.confirmField?"text":"password")("ngClass",e.VKq(13,w,i.submitted&&i.f.cpassword.errors)),e.xp6(2),e.Q6J("ngClass",e.WLB(15,_,!i.passwordField,i.passwordField)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.cpassword.errors))},dependencies:[p.mk,p.O5,u.rH,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.c5,o.u,o.F]})}return n})()},{path:"success",component:(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-success"]],decls:16,vars:0,consts:[[1,"auth-card","mx-lg-3"],[1,"card","border-0","mb-0"],[1,"card-header","bg-primary","border-0","py-1"],[1,"row"],[1,"col-12","text-center"],[1,"text-white","lh-base","fw-lighter"],[1,"card-body","text-center","py-2"],[1,"avatar-sm","mx-auto","my-4"],[1,"avatar-title","bg-success-subtle","text-success","fs-20","rounded"],[1,"bi","bi-check2-circle"],[1,"text-muted","fs-15"],["routerLink","/login",1,"btn","btn-primary","w-100"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Well Done!"),e.qZA()()()(),e.TgZ(7,"div",6)(8,"div",7)(9,"div",8),e._UZ(10,"i",9),e.qZA()(),e.TgZ(11,"p",10),e._uU(12,"Your password change was successful."),e.qZA(),e.TgZ(13,"div")(14,"button",11),e._uU(15,"Back to Login"),e.qZA()()()()())},dependencies:[u.rH]})}return n})()}]}];let O=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(P),u.Bz]})}return n})(),V=(()=>{class n{static#e=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=e.oAB({type:n});static#i=this.\u0275inj=e.cJS({imports:[p.ez,O,o.UX,o.u5,x]})}return n})()}}]);