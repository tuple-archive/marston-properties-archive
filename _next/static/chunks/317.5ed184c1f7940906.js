"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{7238:function(e,t,a){var l=a(1527),s=a(959),r=a(5515);let n={outline:"btn-outline",solid:"btn-solid",hero:"btn-hero"},i={small:"btn-sm"},o=(0,s.forwardRef)(function(e,t){let{as:a="button",variant:s="outline",size:o,className:c,...d}=e;return(0,l.jsx)(a,{ref:t,className:(0,r.m6)("btn",n[s],i[o],c),...d})});t.Z=o},4582:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(1527);let s={sm:480,md:640,lg:768,xl:960,xxl:1280};Object.entries(s).reduce((e,t)=>{let[a,l]=t;return{...e,[a]:"".concat(l,"px")}},{});var r=a(7932),n=a(5515);function i(e){let{asset:t,sizes:a,className:i,style:o,...c}=e,{url:d,title:u,width:m,height:b,focalPoint:h=[.5,.5]}=t;if(d.includes("/assets/graphics")){let[e,t]=d.split("/assets/graphics");d="/_graphics/".concat(t)}return(0,l.jsx)(r.Z,{src:d,width:m,height:b,alt:u,sizes:function(e){if(!e)return null;if("string"==typeof e)return e;let t=Array.isArray(e)?e:Object.entries(s).reduce((t,a)=>{let[l]=a;return e[l]&&t.push(e[l]),t},e.base?[e.base]:[]),a=t.pop();return t.map((e,t)=>{let a=Object.keys(s)[t];return e&&a?"(max-width: ".concat(s[a],"px) ").concat(e):null}).concat([a]).filter(Boolean).join(", ")}(a),quality:100,className:(0,n.m6)("object-cover w-full h-full",i),style:{objectPosition:h.map(e=>100*e+"%").join(" "),...o},...c})}},8178:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(1527),s=a(6704),r=a.n(s),n=a(7238);function i(e){let{link:t,...a}=e,{element:s,text:i,url:o}=t;if(!s&&!o)return null;let c=(null==s?void 0:s.uri)?"/".concat(s.uri):o,d=c.startsWith("http");return(0,l.jsx)("div",{className:"sm:justify-start",children:(0,l.jsx)(n.Z,{as:r(),href:c,target:d?"_blank":void 0,rel:d?"noreferrer noopener":void 0,...a,children:i})})}},7317:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(1527),s=a(4063),r=a.n(s),n=a(5515);let i=r()(()=>a.e(318).then(a.bind(a,9318)),{loadableGenerated:{webpack:()=>[9318]}}),o=r()(()=>a.e(735).then(a.bind(a,6735)),{loadableGenerated:{webpack:()=>[6735]}}),c=r()(()=>a.e(553).then(a.bind(a,2553)),{loadableGenerated:{webpack:()=>[2553]}}),d=[i,o,c,r()(()=>a.e(797).then(a.bind(a,1797)),{loadableGenerated:{webpack:()=>[1797]}}),r()(()=>a.e(180).then(a.bind(a,5180)),{loadableGenerated:{webpack:()=>[5180]}}),r()(()=>a.e(569).then(a.bind(a,2569)),{loadableGenerated:{webpack:()=>[2569]}})];function u(e){let{variant:t,className:a,...s}=e,r=d[t];return r?(0,l.jsxs)("div",{className:(0,n.m6)("absolute inset-0 text-white",a),...s,children:[(0,l.jsx)(r,{className:"absolute top-0 left-0"}),(0,l.jsx)(r,{className:"absolute top-0 right-0",style:{transform:"rotate(90deg)"}}),(0,l.jsx)(r,{className:"absolute bottom-0 left-0",style:{transform:"rotate(270deg)"}}),(0,l.jsx)(r,{className:"absolute bottom-0 right-0",style:{transform:"rotate(180deg)"}})]}):null}var m=a(4582),b=a(2196),h=a(8178),f=a(4814);function p(e){var t;let{block:a}=e,{text:s,primaryAction:r,secondaryAction:i}=a,o=null===(t=a.image)||void 0===t?void 0:t[0];return(0,l.jsxs)("div",{className:(0,n.m6)("grid relative min-h-[25rem] md:min-h-[34.125rem]",!o&&"bg-red-850"),children:[o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.Z,{asset:o,priority:!0,className:"absolute top-0 left-0 w-full h-full"}),(0,l.jsx)("div",{className:"absolute inset-0 bg-black/30"})]}),(0,l.jsx)("div",{className:"container-outer relative w-full h-full",children:(0,l.jsxs)("div",{className:"grid md:grid-cols-12 gap-gutter items-center h-full py-6 md:py-24 xl:py-32 relative",children:[(0,l.jsx)(u,{variant:a.id%6,className:"hidden md:block top-12 bottom-12 xl:top-16 xl:bottom-16"}),(0,l.jsxs)("div",{className:"grid gap-gutter justify-items-center relative md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 xxl:col-start-4 xxl:col-span-6",children:[(0,l.jsx)("div",{className:"type-heading1 text-center text-white",children:(0,l.jsx)(b.Z,{html:s,className:o?"drop-shadow-hero":"",stripClasses:!0})}),(r.url||i.url)&&(0,l.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,l.jsx)(h.Z,{link:r,variant:"hero","data-overlay":(0,f.Z)(!!o)}),(0,l.jsx)(h.Z,{link:i,variant:"hero","data-overlay":(0,f.Z)(!!o)})]})]})]})})]})}}}]);