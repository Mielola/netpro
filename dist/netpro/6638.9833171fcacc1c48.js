"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[6638],{76638:(Y,g,n)=>{n.r(g),n.d(g,{default:()=>$});var o=n(89417),d=n(88834),f=n(82765),l=n(53719),p=n(99213),h=n(59042),v=n(9183),c=n(11593),x=n(87122),F=n(77028),e=n(54438),y=n(35524);const w=["signInNgForm"],j=()=>["/sign-up"],k=()=>["/forgot-password"];function b(t,m){if(1&t&&(e.j41(0,"fuse-alert",10),e.EFF(1),e.k0s()),2&t){const r=e.XpG();e.Y8G("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),e.R7$(),e.SpI(" ",r.alert.message," ")}}function I(t,m){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Email address is required "),e.k0s())}function C(t,m){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Please enter a valid email address "),e.k0s())}function E(t,m){1&t&&e.nrm(0,"mat-icon",16),2&t&&e.Y8G("svgIcon","heroicons_solid:eye")}function R(t,m){1&t&&e.nrm(0,"mat-icon",16),2&t&&e.Y8G("svgIcon","heroicons_solid:eye-slash")}function S(t,m){1&t&&(e.j41(0,"span"),e.EFF(1," Sign in "),e.k0s())}function G(t,m){1&t&&e.nrm(0,"mat-progress-spinner",21),2&t&&e.Y8G("diameter",24)("mode","indeterminate")}const $=[{path:"",component:(()=>{class t{constructor(r,a,i,s){this._activatedRoute=r,this._authService=a,this._formBuilder=i,this._router=s,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["hughes.brian@company.com",[o.k0.required,o.k0.email]],password:["admin",o.k0.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const r=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(r)},r=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}static{this.\u0275fac=function(a){return new(a||t)(e.rXU(c.nX),e.rXU(y.u),e.rXU(o.ze),e.rXU(c.Ix))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["auth-sign-in"]],viewQuery:function(a,i){if(1&a&&e.GBs(w,5),2&a){let s;e.mGM(s=e.lsd())&&(i.signInNgForm=s.first)}},standalone:!0,features:[e.aNF],decls:82,vars:24,consts:[["signInNgForm","ngForm"],["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","assets/icons/netpro.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","flex","items-baseline","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"mt-1.5","inline-flex","w-full","items-center","justify-between"],[1,"-ml-2",3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full",3,"click","color","disabled"],[3,"diameter","mode"],[1,"mt-8","flex","items-center"],[1,"mt-px","flex-auto","border-t"],[1,"text-secondary","mx-2"],[1,"mt-8","flex","items-center","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","images/avatars/female-18.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/female-11.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-09.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-16.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(a,i){if(1&a){const s=e.RV6();e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),e.nrm(4,"img",6),e.k0s(),e.j41(5,"div",7),e.EFF(6," Sign in "),e.k0s(),e.j41(7,"div",8)(8,"div"),e.EFF(9,"Don't have an account?"),e.k0s(),e.j41(10,"a",9),e.EFF(11,"Sign up "),e.k0s()(),e.j41(12,"fuse-alert",10),e.EFF(13," You are browsing "),e.j41(14,"strong"),e.EFF(15,"Fuse Demo"),e.k0s(),e.EFF(16,'. Click on the "Sign in" button to access the Demo and Documentation. '),e.k0s(),e.DNE(17,b,2,5,"fuse-alert",10),e.j41(18,"form",11,0)(20,"mat-form-field",12)(21,"mat-label"),e.EFF(22,"Email address"),e.k0s(),e.nrm(23,"input",13),e.DNE(24,I,2,0,"mat-error")(25,C,2,0,"mat-error"),e.k0s(),e.j41(26,"mat-form-field",12)(27,"mat-label"),e.EFF(28,"Password"),e.k0s(),e.nrm(29,"input",14,1),e.j41(31,"button",15),e.bIt("click",function(){e.eBV(s);const u=e.sdS(30);return e.Njj(u.type="password"===u.type?"text":"password")}),e.DNE(32,E,1,1,"mat-icon",16)(33,R,1,1,"mat-icon",16),e.k0s(),e.j41(34,"mat-error"),e.EFF(35," Password is required "),e.k0s()(),e.j41(36,"div",17)(37,"mat-checkbox",18),e.EFF(38," Remember me "),e.k0s(),e.j41(39,"a",19),e.EFF(40,"Forgot password? "),e.k0s()(),e.j41(41,"button",20),e.bIt("click",function(){return e.eBV(s),e.Njj(i.signIn())}),e.DNE(42,S,2,0,"span")(43,G,1,2,"mat-progress-spinner",21),e.k0s(),e.j41(44,"div",22),e.nrm(45,"div",23),e.j41(46,"div",24),e.EFF(47,"Or continue with"),e.k0s(),e.nrm(48,"div",23),e.k0s(),e.j41(49,"div",25)(50,"button",26),e.nrm(51,"mat-icon",16),e.k0s(),e.j41(52,"button",26),e.nrm(53,"mat-icon",16),e.k0s(),e.j41(54,"button",26),e.nrm(55,"mat-icon",16),e.k0s()()()()(),e.j41(56,"div",27),e.qSk(),e.j41(57,"svg",28)(58,"g",29),e.nrm(59,"circle",30)(60,"circle",31),e.k0s()(),e.j41(61,"svg",32)(62,"defs")(63,"pattern",33),e.nrm(64,"rect",34),e.k0s()(),e.nrm(65,"rect",35),e.k0s(),e.joV(),e.j41(66,"div",36)(67,"div",37)(68,"div"),e.EFF(69,"Welcome to"),e.k0s(),e.j41(70,"div"),e.EFF(71,"our community"),e.k0s()(),e.j41(72,"div",38),e.EFF(73," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.k0s(),e.j41(74,"div",22)(75,"div",39),e.nrm(76,"img",40)(77,"img",41)(78,"img",42)(79,"img",43),e.k0s(),e.j41(80,"div",44),e.EFF(81," More than 17k people joined us, it's your turn "),e.k0s()()()()()}if(2&a){const s=e.sdS(30);e.R7$(10),e.Y8G("routerLink",e.lJ4(22,j)),e.R7$(2),e.Y8G("appearance","outline")("showIcon",!1)("type","info"),e.R7$(5),e.vxM(i.showAlert?17:-1),e.R7$(),e.Y8G("formGroup",i.signInForm),e.R7$(5),e.Y8G("formControlName","email"),e.R7$(),e.vxM(i.signInForm.get("email").hasError("required")?24:-1),e.R7$(),e.vxM(i.signInForm.get("email").hasError("email")?25:-1),e.R7$(4),e.Y8G("formControlName","password"),e.R7$(3),e.vxM("password"===s.type?32:-1),e.R7$(),e.vxM("text"===s.type?33:-1),e.R7$(4),e.Y8G("color","primary")("formControlName","rememberMe"),e.R7$(2),e.Y8G("routerLink",e.lJ4(23,k)),e.R7$(2),e.Y8G("color","primary")("disabled",i.signInForm.disabled),e.R7$(),e.vxM(i.signInForm.disabled?-1:42),e.R7$(),e.vxM(i.signInForm.disabled?43:-1),e.R7$(8),e.Y8G("svgIcon","feather:facebook"),e.R7$(2),e.Y8G("svgIcon","feather:twitter"),e.R7$(2),e.Y8G("svgIcon","feather:github")}},dependencies:[c.Wk,F.F,o.YN,o.qT,o.me,o.BC,o.cb,o.X1,o.j4,o.JD,l.RG,l.rl,l.nJ,l.TL,l.yw,h.fS,h.fg,d.Hl,d.$z,d.iY,p.m_,p.An,f.g7,f.So,v.D6,v.LG],encapsulation:2,data:{animation:x.X}})}}return t})()}]}}]);