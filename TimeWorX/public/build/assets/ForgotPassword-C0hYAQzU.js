import{W as n,j as e,Y as d}from"./app-KkF2e1gM.js";import{G as c}from"./GuestLayout-C6gRb865.js";import{T as u,I as x}from"./TextInput-fqHNyYQ-.js";import{P as p}from"./PrimaryButton-BR3LgAzc.js";function f({status:a}){const{data:o,setData:t,post:l,processing:r,errors:i}=n({email:""}),m=s=>{s.preventDefault(),l(route("password.email"))};return e.jsxs(c,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("section",{id:"login",className:"forgot-password",children:e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"block-text",children:e.jsx("p",{children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."})}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:a}),e.jsxs("form",{onSubmit:m,children:[e.jsx("div",{className:`block-element ${o.email?"focused":""}`,"data-label":"Email",children:e.jsx(u,{id:"email",type:"email",name:"email",value:o.email,className:"input",isFocused:!0,onChange:s=>t("email",s.target.value)})}),e.jsx(x,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"block-button",children:e.jsx(p,{className:"button",disabled:r,children:"Email Password Reset Link"})})]})]})})]})}export{f as default};
