(this.webpackJsonpform_validation=this.webpackJsonpform_validation||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(6),l=t.n(n),m=t(1),o=t(2),c=t(3),i=function(e,a){var t=Object(r.useState)({username:"",email:"",password:"",password2:""}),s=Object(m.a)(t,2),n=s[0],l=s[1],i=Object(r.useState)({username:"",email:"",password:"",password2:""}),u=Object(m.a)(i,2),d=u[0],p=u[1],f=Object(r.useState)(!1),E=Object(m.a)(f,2),w=E[0],h=E[1];return Object(r.useEffect)((function(){0===Object.keys(d).length&&w&&a()})),{handleChange:function(e){e.preventDefault();var a=e.target,t=a.name,r=a.value;console.log(t),console.log(r),l(Object(c.a)(Object(c.a)({},n),{},Object(o.a)({},t,r)))},handleSubmit:function(a){a.preventDefault(),p(e(n)),h(!0)},values:n,errors:d}};function u(e){var a={};return e.username.trim()||(a.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.password?e.password.length<8&&(a.password="Password must be longer then 8 charachter"):a.password="Please enter password",e.password2?e.password!==e.password2&&(a.password2="Passwords do not match"):a.password2="Please enter password confirmation",a}t(5);var d=function(e){var a=e.submitForm,t=i(u,a),r=t.handleChange,n=t.handleSubmit,l=t.values,m=t.errors;return s.a.createElement("div",{className:"form-content-right"},s.a.createElement("form",{className:"form",method:"get",action:"validation.php"},s.a.createElement("h1",null,"Get started with us today! Create your account by filling out the information below."),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"username",className:"form-label"},"Username"),s.a.createElement("input",{type:"text",className:"form-input",id:"username",name:"username",placeholder:"Enter your username",value:l.username,onChange:r,required:!0}),m.username&&s.a.createElement("p",null,m.username)),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),s.a.createElement("input",{type:"email",className:"form-input",id:"email",name:"email",placeholder:"Enter your email",value:l.email,onChange:r,required:!0}),m.email&&s.a.createElement("p",null,m.email)),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"password",password:!0,className:"form-label"},"Password"),s.a.createElement("input",{type:"password",className:"form-input",id:"password",name:"password",placeholder:"Enter your password",value:l.password,onChange:r,required:!0}),m.password&&s.a.createElement("p",null,m.password)),s.a.createElement("div",{className:"form-inputs"},s.a.createElement("label",{htmlFor:"password2",className:"form-label"},"Confirm Password"),s.a.createElement("input",{type:"password",className:"form-input",id:"password2",name:"password2",placeholder:"Confirm your password",value:l.password2,onChange:r,required:!0}),m.password2&&s.a.createElement("p",null,m.password2)),s.a.createElement("button",{className:"form-input-btn",type:"submit",onClick:n},"Sign up"),s.a.createElement("p",{className:"form-input-login"},"Already have an account? Login ",s.a.createElement("span",null,s.a.createElement("a",{href:"#"},"here")),"!")))};var p=function(){return s.a.createElement("div",{className:"form-content-right"},s.a.createElement("div",{className:"form-success"},"We have recived your request"),s.a.createElement("img",{src:"img/img-3.svg",alt:"success-image",className:"form-img-2"}))};t(12);var f=function(){var e=Object(r.useState)(!1),a=Object(m.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"form-container"},s.a.createElement("span",{className:"close-btn"}),s.a.createElement("div",{className:"form-content-left"},s.a.createElement("img",{src:"img/img-2.svg",alt:"spaceship",className:"form-img"})),t?s.a.createElement(p,null):s.a.createElement(d,{submitForm:function(){n(!0)}})))};var E=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(f,null))};l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null)),document.getElementById("root"))},5:function(e,a,t){},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.3c7fc3b9.chunk.js.map