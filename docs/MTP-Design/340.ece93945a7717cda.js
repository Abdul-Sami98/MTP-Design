"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[340],{9340:(Q,h,c)=>{c.r(h),c.d(h,{LocalizationModule:()=>G});var _=c(6733),o=c(3226),A=c(2939),p=c(1273),u=c(8933),Z=c(3018),x=c(6208),f=c(1206);const g=[{id:1,currencyName:"European Union",usd:"1.064427",type:"Euro (\u20ac)",exchangeRate:"0.00136"},{id:2,currencyName:"Renminbi (Yuan)",usd:"0.14",type:"Yuan (\xa5)",exchangeRate:"0.00011"},{id:3,currencyName:"Afghan Afghani",usd:"0.011",type:"AFN (\u060b)",exchangeRate:"0.00012"},{id:4,currencyName:"Canadian Dollar",usd:"0.735505",type:"CAD ($)",exchangeRate:"0.00214"},{id:5,currencyName:"Danish Kroner",usd:"0.14",type:"DKK (Kr)",exchangeRate:"0.0026"},{id:6,currencyName:"Egyptian Pound",usd:"0.040",type:"EGP (E\xa3)",exchangeRate:"0.00054"},{id:7,currencyName:"Kenyan Shilling",usd:"0.0081",type:"KES (K)",exchangeRate:"0.0000321"},{id:8,currencyName:"United Kingdom",usd:"1.20",type:"GBP (\xa3)",exchangeRate:"0.0374"},{id:9,currencyName:"European Union",usd:"1.064427",type:"Euro (\u20ac)",exchangeRate:"0.00136"},{id:10,currencyName:"Colombian Peso",usd:"1542.32",type:"COP ($)",exchangeRate:"0.00524355"},{id:11,currencyName:"Kenyan Shilling",usd:"0.0081",type:"KES (K)",exchangeRate:"0.0000321"}];var e=c(8316),b=c(6924),y=c(4237);function q(n,l){1&n&&(e.TgZ(0,"tr")(1,"th",20),e._uU(2,"Currency Name"),e._UZ(3,"p-sortIcon",21),e.qZA(),e.TgZ(4,"th",22),e._uU(5,"USD "),e._UZ(6,"p-sortIcon",23),e.qZA(),e.TgZ(7,"th",24),e._uU(8,"Type "),e._UZ(9,"p-sortIcon",25),e.qZA(),e.TgZ(10,"th",26),e._uU(11," Exchange Rate (USD)"),e._UZ(12,"p-sortIcon",27),e.qZA(),e.TgZ(13,"th",28),e._uU(14,"Action"),e._UZ(15,"p-sortIcon",29),e.qZA()())}function C(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",30)(2,"a",31),e._uU(3,"#TB01"),e.qZA()(),e.TgZ(4,"td",32),e._uU(5),e.qZA(),e.TgZ(6,"td",33),e._uU(7),e.qZA(),e.TgZ(8,"td",34),e._uU(9),e.qZA(),e.TgZ(10,"td",35)(11,"span",36),e._uU(12),e.qZA()(),e.TgZ(13,"td")(14,"ul",37)(15,"li")(16,"a",38),e.NdJ("click",function(){const r=e.CHM(t).rowIndex,s=e.oxw();return e.KtG(s.editProduct(r))}),e._UZ(17,"i",39),e.qZA()(),e.TgZ(18,"li")(19,"a",40),e.NdJ("click",function(){const r=e.CHM(t).rowIndex,s=e.oxw();return e.KtG(s.showPosition(r))}),e._UZ(20,"i",41),e.qZA()()()()()}if(2&n){const t=l.$implicit;e.xp6(5),e.Oqu(t.currencyName),e.xp6(2),e.Oqu(t.usd),e.xp6(2),e.Oqu(t.type),e.xp6(3),e.Oqu(t.exchangeRate)}}function U(n,l){if(1&n&&e._uU(0),2&n){const t=e.oxw();e.lnq(" Showing ",t.first," - ",t.endIndex," of ",t.products.length," results ")}}function I(n,l){1&n&&(e.TgZ(0,"h5",42),e._uU(1,"Add New Currency"),e.qZA())}function D(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"form",43),e.NdJ("ngSubmit",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.saveCoupen())}),e.TgZ(1,"div",44),e._UZ(2,"div",45)(3,"input",46),e.TgZ(4,"div",2)(5,"div",47)(6,"label",48),e._uU(7,"Exchange Rate (USD)"),e.qZA(),e._UZ(8,"input",49),e.qZA()(),e.TgZ(9,"div",50)(10,"div",47)(11,"label",51),e._uU(12,"Currency Name"),e.qZA(),e._UZ(13,"input",52),e.qZA()(),e.TgZ(14,"div",50)(15,"div",47)(16,"label",53),e._uU(17,"Type"),e.qZA(),e.TgZ(18,"div")(19,"select",54)(20,"option",55),e._uU(21,"Type"),e.qZA(),e.TgZ(22,"option",56),e._uU(23,"Euro (\u20ac)"),e.qZA(),e.TgZ(24,"option",57),e._uU(25,"Yuan (\xa5)"),e.qZA(),e.TgZ(26,"option",58),e._uU(27,"AFN (\u060b)"),e.qZA(),e.TgZ(28,"option",59),e._uU(29,"CAD ($)"),e.qZA(),e.TgZ(30,"option",60),e._uU(31,"DKK (Kr)"),e.qZA(),e.TgZ(32,"option",61),e._uU(33,"EGP (E\xa3)"),e.qZA(),e.TgZ(34,"option",62),e._uU(35,"KES (K)"),e.qZA(),e.TgZ(36,"option",63),e._uU(37,"GBP (\xa3)"),e.qZA(),e.TgZ(38,"option",64),e._uU(39,"COP ($)"),e.qZA()()()()(),e.TgZ(40,"div",2)(41,"div",47)(42,"label",65),e._uU(43,"Currency Amount (USD)"),e.qZA(),e._UZ(44,"input",66),e.qZA()(),e.TgZ(45,"div",67)(46,"div",68)(47,"button",69),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.editableModel=!1)}),e._UZ(48,"i",70),e._uU(49," Close"),e.qZA(),e.TgZ(50,"button",71),e._uU(51,"Add Currency"),e.qZA()()()()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.coupenForm)}}function N(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",72)(1,"div",73),e._UZ(2,"i",74),e.qZA(),e.TgZ(3,"div",75)(4,"h4",76),e._uU(5,"Are you sure ?"),e.qZA(),e.TgZ(6,"p",77),e._uU(7,"Are you sure you want to remove this currency ?"),e.qZA()()(),e.TgZ(8,"div",78)(9,"button",79),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.deleteModel=!1)}),e._uU(10,"Close"),e.qZA(),e.TgZ(11,"button",80),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.deleteRecord())}),e._uU(12,"Yes, Delete It!"),e.qZA()()}}const M=function(){return["title","rating","discount","price,status","type"]},w=function(){return{width:"800px"}},E=function(){return{width:"498px"}};let S=(()=>{class n{constructor(t){this.formBuilder=t,this.first=1,this.endIndex=10}ngOnInit(){this.breadCrumbItems=[{label:"Toner"},{label:"Currency Rates",active:!0}],this.products=g,this.coupenForm=this.formBuilder.group({_id:[""],currencyName:["",[o.kI.required]],usd:["",[o.kI.required]],type:["",[o.kI.required]],exchangeRate:["",[o.kI.required]]})}showPositionDialog(){this.editableModel=!0}showPosition(t){this.removeIds=t,this.deleteModel=!0}onPageChange(t){this.first=t.first+1,this.products.length>0&&(this.endIndex=this.first+t.rows<=this.products.length?t.first+t.rows:this.products.length),this.customerService.getCustomersLarge().then(a=>{this.customers=a,this.loading=!1,this.customers.forEach(r=>r.date=new Date(r.date))})}deleteRecord(){this.products.splice(this.removeIds,1),this.deleteModel=!1}editProduct(i){this.editableModel=!0,setTimeout(()=>{document.querySelector(".modal-title").innerHTML="Edit Currancy",document.getElementById("add-btn").innerHTML="Update Currancy"},0),this.coupenForm.controls._id.setValue((i=this.products[i]).id),this.coupenForm.controls.currencyName.setValue(i.currencyName),this.coupenForm.controls.usd.setValue(i.usd),this.coupenForm.controls.type.setValue(i.type),this.coupenForm.controls.exchangeRate.setValue(i.exchangeRate)}get form(){return this.coupenForm.controls}saveCoupen(){if(this.coupenForm.valid)if(this.coupenForm.get("_id")?.value)this.products=g.map(t=>t.id===this.coupenForm.get("_id")?.value?{...t,...this.coupenForm.value}:t),this.editableModel=!1;else{const t=this.coupenForm.get("currencyName")?.value,i=this.coupenForm.get("usd")?.value,a=this.coupenForm.get("type")?.value,r=this.coupenForm.get("exchangeRate")?.value;g.push({id:this.products.length+1,currencyName:t,usd:i,type:a,exchangeRate:r}),this.editableModel=!1}else this.submitted=!0,document.getElementById("alert-error-msg")?.classList.remove("d-none"),this.formvalidation()}formvalidation(){return""==this.coupenForm.get("title").value?(document.getElementById("alert-error-msg").innerHTML="Please enter a coupon title",!1):""==this.coupenForm.get("code").value?(document.getElementById("alert-error-msg").innerHTML="Please enter a coupon code",!1):""==this.coupenForm.get("type").value?(document.getElementById("alert-error-msg").innerHTML="Please enter a product type",!1):""==this.coupenForm.get("startDate").value?(document.getElementById("alert-error-msg").innerHTML="Please enter a  startDate",!1):""==this.coupenForm.get("endDate").value?(document.getElementById("alert-error-msg").innerHTML="Please enter a  endDate",!1):""==this.coupenForm.get("discount").value?(document.getElementById("alert-error-msg").innerHTML="Please enter a  discount",!1):""!=this.coupenForm.get("status").value||(document.getElementById("alert-error-msg").innerHTML="Please enter a  status",!1)}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(o.QS))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-currancy-rates"]],decls:24,vars:16,consts:[["title","Currency rates",3,"breadcrumbItems"],["id","currencyRatesList",1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header","d-flex","align-items-center"],[1,"flex-grow-1"],[1,"card-title","mb-0"],[1,"flex-shrink-0"],["data-bs-target","javascript:void(0);","data-bs-toggle","modal",1,"btn","btn-primary","add-btn",3,"click"],[1,"bi","bi-plus-circle","me-1","align-middle"],[1,"card-body"],[1,"table-responsive","table-card"],[3,"value","paginator","globalFilterFields","rows","onPage"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],["header","Header",1,"modal-dialog","modal-dialog-centered",3,"modal","visible","visibleChange"],["pTemplate","content"],[1,"modal-dialog","modal-dialog-centered",3,"modal","visible","visibleChange"],["pSortableColumn","currencyName","data-sort","currencyName","scope","col",1,"sort","desc"],["field","currencyName"],["pSortableColumn","usd","data-sort","usd","scope","col",1,"sort"],["field","usd"],["pSortableColumn","type","data-sort","type","scope","col",1,"sort"],["field","type"],["pSortableColumn","exchangeRate","data-sort","exchangeRate","scope","col",1,"sort"],["field","exchangeRate"],["pSortableColumn","code","scope","col"],["field","code"],[1,"id",2,"display","none"],["href","javascript:void(0);",1,"fw-medium","link-primary"],[1,"currencyName"],[1,"usd"],[1,"type"],[1,"exchangeRate"],[1,"fw-medium"],[1,"list-unstyled","hstack","gap-2","mb-0"],["href","javascript:void(0);","data-bs-toggle","modal",1,"btn","btn-sm","btn-icon","btn-soft-secondary","edit-item-btn",3,"click"],[1,"ph-pencil"],["href","javascript:void(0);","data-bs-toggle","modal",1,"btn","btn-sm","btn-icon","btn-soft-danger","remove-item-btn",3,"click"],[1,"ph-trash"],["id","exampleModalLabel",1,"modal-title","fs-18"],["novalidate","","autocomplete","off",1,"tablelist-form",3,"formGroup","ngSubmit"],[1,"row"],["id","alert-error-msg",1,"d-none","alert","alert-danger","py-2"],["type","hidden","id","id-field"],[1,"mb-3"],["for","exchangeRate",1,"form-label"],["type","text","id","exchangeRate-field","placeholder","Enter exchange rate","formControlName","exchangeRate",1,"form-control"],[1,"col-lg-6"],["for","currencyName",1,"form-label"],["type","text","id","currencyName-field","placeholder","Currency name","required","","formControlName","currencyName",1,"form-control"],["for","typeInput",1,"form-label"],["data-choices","","data-choices-search-false","","id","type-field","required","","formControlName","type",1,"form-control"],["value",""],["value","Euro (\u20ac)"],["value","Yuan (\xa5)"],["value","AFN (\u060b)"],["value","CAD ($)"],["value","DKK (Kr)"],["value","EGP (E\xa3)"],["value","KES (K)"],["value","GBP (\xa3)"],["value","COP ($)"],["for","currencyAmount",1,"form-label"],["type","text","id","currencyAmount-field","placeholder","Currency amount (USD)","formControlName","usd","required","",1,"form-control"],[1,"col-lg-12","modal-footer"],[1,"hstack","gap-2","justify-content-end"],["type","button","data-bs-dismiss","modal",1,"btn","btn-ghost-danger",3,"click"],[1,"ri-close-line","align-bottom","me-1"],["type","submit","id","add-btn",1,"btn","btn-primary"],[1,"text-center"],[1,"text-danger"],[1,"bi","bi-trash","display-4"],[1,"mt-4","fs-15"],[1,"mb-1"],[1,"text-muted","mx-4","mb-0"],[1,"d-flex","gap-2","justify-content-center","mt-4","mb-2"],["type","button","id","deleteRecord-close","data-bs-dismiss","modal",1,"btn","w-sm","btn-light","btn-hover",3,"click"],["type","button","id","delete-record",1,"btn","w-sm","btn-danger","btn-hover",3,"click"]],template:function(i,a){1&i&&(e._UZ(0,"app-breadcrumbs",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),e._uU(7,"Currency Rates"),e.qZA()(),e.TgZ(8,"div",7)(9,"button",8),e.NdJ("click",function(){return a.showPositionDialog()}),e._UZ(10,"i",9),e._uU(11," Add Currency"),e.qZA()()(),e.TgZ(12,"div",10)(13,"div",11)(14,"p-table",12,13),e.NdJ("onPage",function(s){return a.onPageChange(s)}),e.YNc(16,q,16,0,"ng-template",14),e.YNc(17,C,21,4,"ng-template",15),e.YNc(18,U,1,3,"ng-template",16),e.qZA()()()()()(),e.TgZ(19,"p-dialog",17),e.NdJ("visibleChange",function(s){return a.editableModel=s}),e.YNc(20,I,2,0,"ng-template",14),e.YNc(21,D,52,1,"ng-template",18),e.qZA(),e.TgZ(22,"p-dialog",19),e.NdJ("visibleChange",function(s){return a.deleteModel=s}),e.YNc(23,N,13,0,"ng-template",18),e.qZA()),2&i&&(e.Q6J("breadcrumbItems",a.breadCrumbItems),e.xp6(14),e.Q6J("value",a.products)("paginator",!0)("globalFilterFields",e.DdM(13,M))("rows",10),e.xp6(5),e.Akn(e.DdM(14,w)),e.Q6J("modal",!0)("visible",a.editableModel),e.xp6(3),e.Akn(e.DdM(15,E)),e.Q6J("modal",!0)("visible",a.deleteModel))},dependencies:[u.iA,b.jx,u.lQ,u.fz,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,y.n,p.V,o.sg,o.u]})}return n})();const v=[{id:1,type:"down",transactionID:"#TBSC320002830",amount:"$253.32",img:"assets/images/ecommerce/payment/american-express.png",paymentMethod:"American Express",transactionDate:"15 Jan, 2023",status:"Successful",clientName:"Diana Nichols",clientEmail:"diana@toner.com",vatId:"TB211145424",icon:"bx-trending-down",color:"danger"},{id:2,type:"up",transactionID:"#TBSC320002836",amount:"$745.00",img:"assets/images/ecommerce/payment/paypal.png",paymentMethod:"PayPal",transactionDate:"19 Jan, 2023",status:"Denied",clientName:"Valentine Morin",clientEmail:"euismod.enim@outlook.net",vatId:"TB211145425",icon:"bx-trending-up",color:"success"},{id:3,type:"down",transactionID:"#TBSC320002645",amount:"$2,145.87",img:"assets/images/ecommerce/payment/discover.png",paymentMethod:"Discover",transactionDate:"01 Nov, 2022",status:"Successful",clientName:"Brody Holman",clientEmail:"metus@protonmail.org",vatId:"TB211155424",icon:"bx-trending-up",color:"success"},{id:4,type:"up",transactionID:"#TBSC320002930",amount:"$985.00",img:"assets/images/ecommerce/payment/paypal.png",paymentMethod:"PayPal",transactionDate:"20 Jan, 2023",status:"Pending",clientName:"Jolie Hood",clientEmail:"nunc.nulla@yahoo.edu",vatId:"TB211145524",icon:"bx-trending-down",color:"danger"},{id:5,type:"up",transactionID:"#TBSC320002987",amount:"$3654.32",img:"assets/images/ecommerce/payment/american-express.png",paymentMethod:"American Express",transactionDate:"29 Feb, 2023",status:"Successful",clientName:"Buckminster Wong",clientEmail:"dictum.phasellus.in@hotmail.org",vatId:"TB211545424",icon:"bx-trending-down",color:"danger"},{id:6,type:"down",transactionID:"#TBSC320003001",amount:"$654.02",img:"assets/images/ecommerce/payment/visa.png",paymentMethod:"Visa Credit/Debit",transactionDate:"24 Mar, 2023",status:"Denied",clientName:"Howard Lyons",clientEmail:"neque.sed.dictum@icloud.org",vatId:"TB251145424",icon:"bx-trending-down",color:"danger"},{id:7,type:"down",transactionID:"#TBSC320003203",amount:"$745.02",img:"assets/images/ecommerce/payment/discover.png",paymentMethod:"Discover",transactionDate:"07 Jan, 2023",status:"Pending",clientName:"Howard Oneal",clientEmail:"porttitor.tellus.non@yahoo.net",vatId:"TB211146424",icon:"bx-trending-up",color:"success"},{id:8,type:"down",transactionID:"#TBSC320002830",amount:"$3654.19",img:"assets/images/ecommerce/payment/american-express.png",paymentMethod:"American Express",transactionDate:"09 May, 2022",status:"Denied",clientName:"Jena Hall",clientEmail:"lectus.sit.amet@protonmail.edu",vatId:"TB211165424",icon:"bx-trending-down",color:"danger"},{id:9,type:"up",transactionID:"#TBSC320003319",amount:"$874.31",img:"assets/images/ecommerce/payment/american-express.png",paymentMethod:"American Express",transactionDate:"17 Sep,, 2022",status:"Successful",clientName:"Paki Edwards",clientEmail:"edwards.phasellus.in@hotmail.org",vatId:"TB211145467"},{id:10,type:"up",transactionID:"#TBSC320003369",amount:"$261.00",img:"assets/images/ecommerce/payment/paypal.png",paymentMethod:"PayPal",transactionDate:"15 Jan, 2023",status:"Successful",clientName:"Nell Potter",clientEmail:"nella@toner.com",vatId:"TB211145123",icon:"bx-trending-up",color:"success"},{id:11,type:"down",transactionID:"#TBSC320003203",amount:"$745.02",img:"assets/images/ecommerce/payment/discover.png",paymentMethod:"Discover",transactionDate:"07 Jan, 2023",status:"Pending",clientName:"Howard Oneal",clientEmail:"porttitor.tellus.non@yahoo.net",vatId:"TB211146424",icon:"bx-trending-up",color:"success"}];function F(n,l){1&n&&(e.TgZ(0,"tr")(1,"th",73),e._uU(2,"Type"),e.qZA(),e.TgZ(3,"th",74),e._uU(4,"Transaction ID"),e.qZA(),e.TgZ(5,"th",74),e._uU(6,"Amount"),e.qZA(),e.TgZ(7,"th",74),e._uU(8,"Payment Method"),e.qZA(),e.TgZ(9,"th",74),e._uU(10,"Date"),e.qZA(),e.TgZ(11,"th",74),e._uU(12,"Status"),e.qZA(),e.TgZ(13,"th",74),e._uU(14,"Action"),e.qZA()())}const T=function(n,l,t){return{"bg-success-subtle text-success":n,"bg-danger-subtle text-danger":l,"bg-warning-subtle text-warning":t}};function R(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",75)(2,"a",76),e._uU(3,"#TB01"),e.qZA()(),e.TgZ(4,"td",77),e._uU(5),e.qZA(),e.TgZ(6,"td",78),e._uU(7),e.qZA(),e.TgZ(8,"td",79),e._uU(9),e.qZA(),e.TgZ(10,"td",80),e._UZ(11,"i"),e.qZA(),e.TgZ(12,"td",81)(13,"a",82),e._uU(14),e.qZA()(),e.TgZ(15,"td",83)(16,"span",84),e._uU(17,"$253.32"),e.qZA()(),e.TgZ(18,"td",85)(19,"div",47)(20,"div",41),e._UZ(21,"img",48),e.qZA(),e.TgZ(22,"div",49)(23,"h6",50),e._uU(24),e.qZA()()()(),e.TgZ(25,"td",86),e._uU(26),e.qZA(),e.TgZ(27,"td",87)(28,"span",51),e._uU(29),e.qZA()(),e.TgZ(30,"td")(31,"a",88),e.NdJ("click",function(){const r=e.CHM(t).rowIndex,s=e.oxw();return e.KtG(s.viewDetail(r))}),e._uU(32,"View Details"),e.qZA()()()}if(2&n){const t=l.$implicit;e.xp6(5),e.Oqu(t.transactionID),e.xp6(2),e.Oqu(t.clientName),e.xp6(2),e.Oqu(t.clientEmail),e.xp6(2),e.MT6("bx ",t.icon," align-middle text-",t.color,""),e.xp6(3),e.Oqu(t.transactionID),e.xp6(7),e.s9C("src",t.img,e.LSH),e.xp6(3),e.Oqu(t.paymentMethod),e.xp6(2),e.Oqu(t.transactionDate),e.xp6(2),e.Q6J("ngClass",e.kEZ(13,T,"Successful"===t.status,"Denied"===t.status,"Pending"===t.status)),e.xp6(1),e.Oqu(t.status)}}function k(n,l){if(1&n&&e._uU(0),2&n){const t=e.oxw();e.lnq(" Showing ",t.first," - ",t.endIndex," of ",t.products.length," results ")}}function P(n,l){1&n&&(e.TgZ(0,"tr",89)(1,"td",90)(2,"div",91)(3,"div",34),e._UZ(4,"i",35),e.qZA()(),e.TgZ(5,"h5",92),e._uU(6,"Sorry! No Result Found"),e.qZA(),e.TgZ(7,"p",93),e._uU(8,"We've searched more than 150+ shipment orders We did not find any shipment orders for you search."),e.qZA()()())}function B(n,l){1&n&&(e.TgZ(0,"h5",94),e._uU(1,"Add Transactions"),e.qZA())}function J(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"form",95),e.NdJ("ngSubmit",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.saveCoupen())}),e.TgZ(1,"div",1),e._UZ(2,"div",96)(3,"input",97),e.TgZ(4,"div",98)(5,"div",99)(6,"label",100),e._uU(7,"Client Name"),e.qZA(),e._UZ(8,"input",101),e.qZA()(),e.TgZ(9,"div",102)(10,"div",99)(11,"label",103),e._uU(12,"Email"),e.qZA(),e._UZ(13,"input",104),e.qZA()(),e.TgZ(14,"div",102)(15,"div",99)(16,"label",105),e._uU(17,"Type"),e.qZA(),e.TgZ(18,"select",106)(19,"option",14),e._uU(20,"type"),e.qZA(),e.TgZ(21,"option",107),e._uU(22,"Up"),e.qZA(),e.TgZ(23,"option",108),e._uU(24,"Down"),e.qZA()()()(),e.TgZ(25,"div",102)(26,"div",99)(27,"label",109),e._uU(28,"Transaction ID"),e.qZA(),e._UZ(29,"input",110),e.qZA()(),e.TgZ(30,"div",102)(31,"div",99)(32,"label",111),e._uU(33,"Vat ID"),e.qZA(),e._UZ(34,"input",112),e.qZA()(),e.TgZ(35,"div",102)(36,"div",99)(37,"label",113),e._uU(38,"Amount"),e.qZA(),e._UZ(39,"input",114),e.qZA()(),e.TgZ(40,"div",102)(41,"div",99)(42,"label",115),e._uU(43,"Payment Method"),e.qZA(),e.TgZ(44,"select",116),e._UZ(45,"option",14),e.qZA()()(),e.TgZ(46,"div",102)(47,"div",99)(48,"label",117),e._uU(49,"Transaction Date"),e.qZA(),e._UZ(50,"input",118),e.qZA()(),e.TgZ(51,"div",102)(52,"div",99)(53,"label",119),e._uU(54,"Status"),e.qZA(),e.TgZ(55,"select",120)(56,"option",14),e._uU(57,"Status"),e.qZA(),e.TgZ(58,"option",15),e._uU(59,"Successful"),e.qZA(),e.TgZ(60,"option",17),e._uU(61,"Denied"),e.qZA(),e.TgZ(62,"option",16),e._uU(63,"Pending"),e.qZA()()()(),e.TgZ(64,"div",98)(65,"div",121)(66,"button",122),e._UZ(67,"i",123),e._uU(68," Close"),e.qZA(),e.TgZ(69,"button",124),e._uU(70,"Add Transaction"),e.qZA()()()()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.coupenForm)}}const K=function(){return["clientName","clientEmail","transactionID","paymentMethod","status"]},H=function(){return{width:"800px"}},O=[{path:"transaction",component:(()=>{class n{constructor(t){this.formBuilder=t,this.first=1,this.endIndex=10}ngOnInit(){this.breadCrumbItems=[{label:"Toner"},{label:"Transactions",active:!0}],this.products=v,this.transactions=this.products[0]}viewDetail(t){this.transactions=this.products[t],this.coupenForm=this.formBuilder.group({_id:[""],type:["",[o.kI.required]],transactionID:["",[o.kI.required]],amount:["",[o.kI.required]],img:["",[o.kI.required]],paymentMethod:["",[o.kI.required]],transactionDate:["",[o.kI.required]],status:["",[o.kI.required]],clientName:["",[o.kI.required]],clientEmail:["",[o.kI.required]],vatId:["",[o.kI.required]]})}onPageChange(t){this.first=t.first+1,this.products.length>0&&(this.endIndex=this.first+t.rows<=this.products.length?t.first+t.rows:this.products.length),this.customerService.getCustomersLarge().then(a=>{this.customers=a,this.loading=!1,this.customers.forEach(r=>r.date=new Date(r.date))})}transaction(){this.editableModel=!0}saveCoupen(){if(this.coupenForm.valid){const t=this.coupenForm.get("type")?.value,i=this.coupenForm.get("transactionID")?.value,a=this.coupenForm.get("amount")?.value,r=this.coupenForm.get("img")?.value,s=this.coupenForm.get("paymentMethod")?.value,d=this.coupenForm.get("transactionDate")?.value,m=this.coupenForm.get("status")?.value,L=this.coupenForm.get("clientName")?.value,$=this.coupenForm.get("clientEmail")?.value,j=this.coupenForm.get("vatId")?.value;v.push({id:this.products.length+1,type:t,transactionID:i,amount:a,img:r,paymentMethod:s,transactionDate:d,status:m,clientName:L,clientEmail:$,vatId:j})}this.editableModel=!1}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(o.QS))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-transaction"]],decls:147,vars:24,consts:[["title","Transactions",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-12"],[1,"card"],[1,"card-body"],[1,"row","gy-3"],[1,"col-xxl-4","col-md-6"],[1,"search-box"],["type","text","placeholder","Search Transactions...",1,"form-control","search",3,"input"],[1,"ri-search-line","search-icon"],[1,"col-md-3","col-sm-6"],["placeholder","Select date","selectionMode","range"],[1,"col-xxl-2","col-lg-12"],["data-choices","","data-choices-search-false","","name","choices-single-default","id","idStatus",1,"form-control",3,"input"],["value",""],["value","Successful"],["value","Pending"],["value","Denied"],[1,"col-xxl-3"],[1,"hstack","gap-2"],["type","button","onclick","filterData();",1,"btn","btn-soft-success","w-100"],["data-bs-target","#showModal","data-bs-toggle","modal",1,"btn","btn-primary","w-100",3,"click"],[1,"bi","bi-plus-circle","me-1","align-middle"],[1,"col-lg-9"],[1,"table-responsive","table-card"],[3,"value","paginator","globalFilterFields","rows","onPage"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],["pTemplate","emptymessage"],[1,"noresult",2,"display","none"],[1,"text-center","py-4"],[1,"avatar-md","mx-auto","mb-4"],[1,"avatar-title","bg-primary-subtle","text-primary","rounded-circle","fs-24"],[1,"bi","bi-search"],[1,"mt-2"],[1,"text-muted","mb-0"],[1,"col-lg-3"],[1,"card-header","d-flex"],[1,"card-title","flex-grow-1","mb-0"],[1,"flex-shrink-0"],["type","button","aria-label","Close",1,"btn-close"],["id","transactionDetails",1,"card-body"],[1,"table","table-borderless","align-middle"],[1,"text-muted","text-uppercase"],[1,"fw-semibold"],[1,"d-flex","align-items-center","gap-2"],["alt","",1,"avatar-xs","object-fit-cover",3,"src"],[1,"flex-grow-1"],[1,"mb-0"],[1,"badge","bg-success-subtle","text-success",3,"ngClass"],[1,"mt-3","hstack","gap-2"],["type","button",1,"btn","btn-soft-danger","w-100"],["type","button",1,"btn","btn-soft-secondary","w-100"],["header","Header",1,"modal-dialog","modal-dialog-centered",3,"modal","visible","visibleChange"],["pTemplate","header","class","modal-header px-4 pt-4"],["pTemplate","content"],["id","deleteModal","tabindex","-1","aria-hidden","true",1,"modal","fade","zoomIn"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","p-md-5"],[1,"text-center"],[1,"text-danger"],[1,"bi","bi-trash","display-4"],[1,"mt-4","fs-15"],[1,"mb-1"],[1,"text-muted","mx-4","mb-0"],[1,"d-flex","gap-2","justify-content-center","mt-4","mb-2"],["type","button","data-bs-dismiss","modal",1,"btn","w-sm","btn-light","btn-hover"],["type","button","id","delete-notification",1,"btn","w-sm","btn-danger","btn-hover"],["scope","col",2,"width","50px"],["scope","col"],[1,"id",2,"display","none"],["href","javascript:void(0);",1,"fw-medium","link-primary"],[1,"vatId",2,"display","none"],[1,"clientName",2,"display","none"],[1,"cleintEmail",2,"display","none"],[1,"type"],[1,"transactionID"],["href","javascript:void(0);",1,"fw-medium"],[1,"amount"],[1,"fw-medium"],[1,"paymentMethod"],[1,"transactionDate"],[1,"status"],["href","javascript:void(0);",1,"link-dark","text-decoration-underline","view-item-btn",3,"click"],[1,"py-4"],["colspan","9",1,""],[1,"avatar-md","mb-4","mx-auto"],[1,"mt-2","d-flex","justify-content-center"],[1,"text-muted","mb-0","d-flex","justify-content-center"],[1,"modal-title","fs-18"],["novalidate","","autocomplete","off",1,"tablelist-form",3,"formGroup","ngSubmit"],["id","alert-error-msg",1,"d-none","alert","alert-danger","py-2"],["type","hidden","id","id-field"],[1,"col-lg-12"],[1,"mb-3"],["for","clientName-field",1,"form-label"],["type","text","formControlName","","id","clientName-field","placeholder","","required","",1,"form-control"],[1,"col-lg-6"],["for","cleintEmail-field",1,"form-label"],["type","email","formControlName","","id","cleintEmail-field","placeholder","Enter Email","required","",1,"form-control"],["for","typeSelect",1,"form-label"],["formControlName","type","name","choices-single-default","id","type-field",1,"form-control"],["value","up"],["value","down"],["for","transactionID-field",1,"form-label"],["type","text","formControlName","transactionID","id","transactionID-field","placeholder","#TBSC320003205","required","",1,"form-control"],["for","vatID-field",1,"form-label"],["type","text","formControlName","vatId","id","vatID-field","placeholder","#TBSC320003205","required","",1,"form-control"],["for","amount-field",1,"form-label"],["type","text","formControlName","amount","id","amount-field","placeholder","$4564","required","",1,"form-control"],["for","paymentMethod-field",1,"form-label"],["id","paymentMethod-field","formControlName","paymentMethod","name","choices-single-default",1,"form-control"],["for","transactionDate-field",1,"form-label"],["type","text","formControlName","transactionID","id","transactionDate-field","data-provider","flatpickr","data-date-format","d M, Y","placeholder","Select date","required","",1,"form-control"],["for","statusSelect",1,"form-label"],["formControlName","status","name","choices-single-default","id","statusSelect",1,"form-control"],[1,"hstack","gap-2","justify-content-end"],["type","button","data-bs-dismiss","modal",1,"btn","btn-ghost-danger"],[1,"ri-close-line","align-bottom","me-1"],["type","submit",1,"btn","btn-primary"]],template:function(i,a){if(1&i){const r=e.EpF();e._UZ(0,"app-breadcrumbs",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"input",8),e.NdJ("input",function(d){e.CHM(r);const m=e.MAs(35);return e.KtG(m.filterGlobal(d.target.value,"contains"))}),e.qZA(),e._UZ(9,"i",9),e.qZA()(),e.TgZ(10,"div",10),e._UZ(11,"p-calendar",11),e.qZA(),e.TgZ(12,"div",12)(13,"select",13),e.NdJ("input",function(d){e.CHM(r);const m=e.MAs(35);return e.KtG(m.filterGlobal(d.target.value,"contains"))}),e.TgZ(14,"option",14),e._uU(15,"All"),e.qZA(),e.TgZ(16,"option",15),e._uU(17,"Successful"),e.qZA(),e.TgZ(18,"option",16),e._uU(19,"Pending"),e.qZA(),e.TgZ(20,"option",17),e._uU(21,"Denied"),e.qZA()()(),e.TgZ(22,"div",18)(23,"div",19)(24,"button",20),e._uU(25,"Filters"),e.qZA(),e.TgZ(26,"button",21),e.NdJ("click",function(){return a.transaction()}),e._UZ(27,"i",22),e._uU(28," Add Transaction"),e.qZA()()()()()()()(),e.TgZ(29,"div",1)(30,"div",23)(31,"div",3)(32,"div",4)(33,"div",24)(34,"p-table",25,26),e.NdJ("onPage",function(d){return a.onPageChange(d)}),e.YNc(36,F,15,0,"ng-template",27),e.YNc(37,R,33,17,"ng-template",28),e.YNc(38,k,1,3,"ng-template",29),e.YNc(39,P,9,0,"ng-template",30),e.qZA(),e.TgZ(40,"div",31)(41,"div",32)(42,"div",33)(43,"div",34),e._UZ(44,"i",35),e.qZA()(),e.TgZ(45,"h5",36),e._uU(46,"Sorry! No Result Found"),e.qZA(),e.TgZ(47,"p",37),e._uU(48,"We've searched more than 150+ transactions We did not find any transactions for you search."),e.qZA()()()()()()(),e.TgZ(49,"div",38)(50,"div",3)(51,"div",39)(52,"h5",40),e._uU(53,"Payment Details"),e.qZA(),e.TgZ(54,"div",41),e._UZ(55,"button",42),e.qZA()(),e.TgZ(56,"div",43)(57,"div",24)(58,"table",44)(59,"tbody")(60,"tr")(61,"td")(62,"span",45),e._uU(63,"Transaction ID"),e.qZA()(),e.TgZ(64,"td")(65,"span",46),e._uU(66),e.qZA()()(),e.TgZ(67,"tr")(68,"td")(69,"span",45),e._uU(70,"Date"),e.qZA()(),e.TgZ(71,"td")(72,"span",46),e._uU(73),e.qZA()()(),e.TgZ(74,"tr")(75,"td")(76,"span",45),e._uU(77,"VAT ID:"),e.qZA()(),e.TgZ(78,"td")(79,"span",46),e._uU(80),e.qZA()()(),e.TgZ(81,"tr")(82,"td")(83,"span",45),e._uU(84,"Client Name"),e.qZA()(),e.TgZ(85,"td")(86,"span",46),e._uU(87),e.qZA()()(),e.TgZ(88,"tr")(89,"td")(90,"span",45),e._uU(91,"Email ID"),e.qZA()(),e.TgZ(92,"td")(93,"span",46),e._uU(94),e.qZA()()(),e.TgZ(95,"tr")(96,"td")(97,"span",45),e._uU(98,"Amount"),e.qZA()(),e.TgZ(99,"td")(100,"span",46),e._uU(101),e.qZA()()(),e.TgZ(102,"tr")(103,"td")(104,"span",45),e._uU(105,"Payment Method"),e.qZA()(),e.TgZ(106,"td")(107,"div",47)(108,"div",41),e._UZ(109,"img",48),e.qZA(),e.TgZ(110,"div",49)(111,"h6",50),e._uU(112,"American Express"),e.qZA()()()()(),e.TgZ(113,"tr")(114,"td")(115,"span",45),e._uU(116,"Status"),e.qZA()(),e.TgZ(117,"td")(118,"span",51),e._uU(119),e.qZA()()()()()(),e.TgZ(120,"div",52)(121,"button",53),e._uU(122,"Download Receipt"),e.qZA(),e.TgZ(123,"button",54),e._uU(124,"All Statement"),e.qZA()()()()()(),e.TgZ(125,"p-dialog",55),e.NdJ("visibleChange",function(d){return a.editableModel=d}),e.YNc(126,B,2,0,"ng-template",56),e.YNc(127,J,71,1,"ng-template",57),e.qZA(),e.TgZ(128,"div",58)(129,"div",59)(130,"div",60)(131,"div",61),e._UZ(132,"button",62),e.qZA(),e.TgZ(133,"div",63)(134,"div",64)(135,"div",65),e._UZ(136,"i",66),e.qZA(),e.TgZ(137,"div",67)(138,"h4",68),e._uU(139,"Are you sure ?"),e.qZA(),e.TgZ(140,"p",69),e._uU(141,"Are you sure you want to remove this Transaction ?"),e.qZA()()(),e.TgZ(142,"div",70)(143,"button",71),e._uU(144,"Close"),e.qZA(),e.TgZ(145,"button",72),e._uU(146,"Yes, Delete It!"),e.qZA()()()()()()}2&i&&(e.Q6J("breadcrumbItems",a.breadCrumbItems),e.xp6(34),e.Q6J("value",a.products)("paginator",!0)("globalFilterFields",e.DdM(18,K))("rows",10),e.xp6(32),e.Oqu(a.transactions.transactionID),e.xp6(7),e.Oqu(a.transactions.transactionDate),e.xp6(7),e.Oqu(a.transactions.vatId),e.xp6(7),e.Oqu(a.transactions.clientName),e.xp6(7),e.Oqu(a.transactions.clientEmail),e.xp6(7),e.Oqu(a.transactions.transactionID),e.xp6(8),e.s9C("src",a.transactions.img,e.LSH),e.xp6(9),e.Q6J("ngClass",e.kEZ(19,T,"Successful"===a.transactions.status,"Denied"===a.transactions.status,"Pending"===a.transactions.status)),e.xp6(1),e.Oqu(a.transactions.status),e.xp6(6),e.Akn(e.DdM(23,H)),e.Q6J("modal",!0)("visible",a.editableModel))},dependencies:[_.mk,u.iA,b.jx,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,y.n,p.V,o.sg,o.u,Z.f]})}return n})()},{path:"currancy-rates",component:S}];let Y=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[f.Bz.forChild(O),f.Bz]})}return n})(),G=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[_.ez,Y,u.U$,o.u5,A.JF,x.m,p.S,o.UX,Z._8]})}return n})()}}]);