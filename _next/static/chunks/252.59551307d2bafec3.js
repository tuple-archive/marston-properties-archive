"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{7238:function(e,t,s){var n=s(1527),r=s(959),l=s(5515);let a={outline:"btn-outline",solid:"btn-solid",hero:"btn-hero"},c={small:"btn-sm"},i=(0,r.forwardRef)(function(e,t){let{as:s="button",variant:r="outline",size:i,className:o,...u}=e;return(0,n.jsx)(s,{ref:t,className:(0,l.m6)("btn",a[r],c[i],o),...u})});t.Z=i},4582:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(1527);let r={sm:480,md:640,lg:768,xl:960,xxl:1280};Object.entries(r).reduce((e,t)=>{let[s,n]=t;return{...e,[s]:"".concat(n,"px")}},{});var l=s(7932),a=s(5515);function c(e){let{asset:t,sizes:s,className:c,style:i,...o}=e,{url:u,title:d,width:x,height:m,focalPoint:p=[.5,.5]}=t;if(u.includes("/assets/graphics")){let[e,t]=u.split("/assets/graphics");u="/_graphics/".concat(t)}return(0,n.jsx)(l.Z,{src:u,width:x,height:m,alt:d,sizes:function(e){if(!e)return null;if("string"==typeof e)return e;let t=Array.isArray(e)?e:Object.entries(r).reduce((t,s)=>{let[n]=s;return e[n]&&t.push(e[n]),t},e.base?[e.base]:[]),s=t.pop();return t.map((e,t)=>{let s=Object.keys(r)[t];return e&&s?"(max-width: ".concat(r[s],"px) ").concat(e):null}).concat([s]).filter(Boolean).join(", ")}(s),quality:100,className:(0,a.m6)("object-cover w-full h-full",c),style:{objectPosition:p.map(e=>100*e+"%").join(" "),...i},...o})}},8178:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(1527),r=s(6704),l=s.n(r),a=s(7238);function c(e){let{link:t,...s}=e,{element:r,text:c,url:i}=t;if(!r&&!i)return null;let o=(null==r?void 0:r.uri)?"/".concat(r.uri):i,u=o.startsWith("http");return(0,n.jsx)("div",{className:"sm:justify-start",children:(0,n.jsx)(a.Z,{as:l(),href:o,target:u?"_blank":void 0,rel:u?"noreferrer noopener":void 0,...s,children:c})})}},252:function(e,t,s){s.r(t),s.d(t,{default:function(){return i}});var n=s(1527),r=s(4582),l=s(2196),a=s(8178),c=s(5515);function i(e){let{image:t,graphic:s,text:i,action:o}=e,u=!!s.length;return(0,n.jsx)("div",{className:"container-outer color-scheme-red",children:(0,n.jsxs)("div",{className:(0,c.m6)("grid md:grid-cols-12 gap-x-gutter",u?"gap-y-gutter":"gap-y-block","items-center"),children:[(0,n.jsx)("div",{className:"md:col-span-12 lg:col-span-12 xl:col-span-7 xxl:col-span-8",children:(0,n.jsx)(r.Z,{asset:t[0],sizes:{base:"100vw",md:"864px"},className:"aspect-[4/3] rounded-xs"})}),(0,n.jsx)("div",{className:(0,c.m6)("md:col-span-10 lg:col-span-8 xl:col-span-5 xxl:col-span-4","md:col-start-2 lg:col-start-3 xl:col-start-auto"),children:(0,n.jsxs)("div",{className:"grid gap-text",children:[u&&(0,n.jsx)("div",{className:"max-w-[50%] text-[0px]",children:(0,n.jsx)(r.Z,{asset:s[0]})}),(0,n.jsx)(l.Z,{html:i}),(0,n.jsx)(a.Z,{link:o,colorScheme:"red"})]})})]})})}}}]);