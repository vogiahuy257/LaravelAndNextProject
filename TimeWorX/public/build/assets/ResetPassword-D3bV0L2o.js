import{W as g,r as d,j as s,Y as N}from"./app-KkF2e1gM.js";import{G as v}from"./GuestLayout-C6gRb865.js";import{T as n,I as l}from"./TextInput-fqHNyYQ-.js";import{P}from"./PrimaryButton-BR3LgAzc.js";function S({token:m,email:c}){const{data:e,setData:o,post:p,processing:w,errors:t,reset:u}=g({token:m,email:c,password:"",password_confirmation:""}),f=a=>{a.preventDefault(),p(route("password.store"),{onFinish:()=>u("password","password_confirmation")})},[i,x]=d.useState(!1),[r,j]=d.useState(!1),h=()=>{x(!i)},b=()=>{j(!r)};return s.jsxs(v,{children:[s.jsx(N,{title:"Reset Password"}),s.jsx("section",{id:"login",className:"reset-password",children:s.jsx("div",{className:"block",children:s.jsxs("form",{onSubmit:f,children:[s.jsxs("div",{className:`block-element ${e.email?"focused":""}`,"data-label":"Email",children:[s.jsx(n,{id:"email",type:"email",name:"email",value:e.email,className:"input",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s.jsx(l,{message:t.email,className:"mt-2"})]}),s.jsxs("div",{className:`block-element ${e.password?"focused":""}`,"data-label":"Password",children:[s.jsx(n,{id:"password",type:i?"text":"password",name:"password",value:e.password,className:"input",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx("span",{className:"toggle-password",onClick:h,children:s.jsx("i",{className:"material-icons",children:i?"visibility_off":"visibility"})}),s.jsx(l,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{className:`block-element ${e.password_confirmation?"focused":""}`,"data-label":"password confirmation",children:[s.jsx(n,{id:"password_confirmation",type:r?"text":"password",name:"password_confirmation",value:e.password_confirmation,className:"input",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value),required:!0}),s.jsx("span",{className:"toggle-password",onClick:b,children:s.jsx("i",{className:"material-icons",children:r?"visibility_off":"visibility"})}),s.jsx(l,{message:t.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"block-button",children:s.jsx(P,{className:"button",disabled:w,children:"Reset Password"})})]})})})]})}export{S as default};
