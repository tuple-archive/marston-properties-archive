(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{7932:function(e,t,r){"use strict";var i=r(8716),o=r.n(i),n=r(959);let s=e=>{var t;let{filePath:r}=e,i=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",o=r.split(i).shift(),n=r.split(".").pop();return{path:o,filename:i.substring(0,i.lastIndexOf("."))||i,extension:n||""}},l=function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{filename:o,path:n,extension:l}=s({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(l.toUpperCase()))return e;let a=l;["JPG","JPEG","PNG","GIF"].includes(l.toUpperCase())&&(a="WEBP");let u=n;"/"!=(null==u?void 0:u.substr(-1))&&(u+="/");let c=e.includes("_next/static/media");r&&(u=r.endsWith("/")&&u&&u.startsWith("/")?r+u.slice(1):r.endsWith("/")||!u||u.startsWith("/")?r+u:r+"/"+u);let d="".concat(c?r?r+"/":"":u).concat("_images","/").concat(o,"-opt-").concat(t,".").concat(a.toUpperCase());return i||"/"===d.charAt(0)||(d="/"+d),d},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=3735928559^t,i=1103547991^t;for(let t=0,o;t<e.length;t++)r=Math.imul(r^(o=e.charCodeAt(t)),2654435761),i=Math.imul(i^o,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),4294967296*(2097151&(i=Math.imul(i^i>>>16,2246822507)^Math.imul(r^r>>>13,3266489909)))+(r>>>0)},u=e=>{let{src:t,width:r,basePath:i}=e;return l(function(e){try{let t=new URL(e).pathname.split(".").pop();if(t)return a(e).toString().concat(".",t)}catch(t){console.error("Error parsing URL",e,t)}return a(e).toString()}(t),r,i,!0)},c=e=>{let{src:t,width:r,basePath:i}=e,o="object"==typeof t,n=o?t.src:t,s=o&&t.width||void 0;if(o&&s&&r>s){let e=[...[768,1440,3840].map(Number),...[384].map(Number)];(e=e.filter((e,t,r)=>r.indexOf(e)===t)).sort((e,t)=>e-t);let t=null;for(let r=0;r<e.length;r++)Number(e[r])>=s&&(null===t||Number(e[r])<t)&&(t=Number(e[r]));if(null!==t)return l(n,t,i)}return n.startsWith("http")?u({src:n,width:r,basePath:i}):l(n,r,i)},d=e=>{let{src:t}=e,r="object"==typeof t?t.src:t;return r.startsWith("http")||"/"===r.charAt(0)||(r="/"+r),r},f=(0,n.forwardRef)((e,t)=>{let{src:r,priority:i=!1,loading:s,className:a,width:f,height:p,onLoad:g,unoptimized:h,placeholder:m="blur",basePath:b="",alt:v="",blurDataURL:w,style:y,onError:S,overrideSrc:j,...x}=e,[P,_]=(0,n.useState)(!1),C=(0,n.useMemo)(()=>{if(w)return w;let e="object"==typeof r?r.src:r;return!0===h?e:e.startsWith("http")?u({src:e,width:10,basePath:b}):l(e,10,b)},[w,r,h,b]),z="object"==typeof r?r.src.endsWith(".svg"):r.endsWith(".svg"),[E,M]=(0,n.useState)(!1),R="blur"===m&&!z&&C&&C.startsWith("/")&&!E?{backgroundSize:(null==y?void 0:y.objectFit)||"cover",backgroundPosition:(null==y?void 0:y.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("'.concat(C,'")')}:void 0,I="object"==typeof r,O=I?r.src:r;return b&&!I&&O.startsWith("/")&&(O=b+O),!b||I||O.startsWith("/")||(O=b+"/"+O),n.createElement(o(),{ref:t,alt:v,...x,...f&&{width:f},...p&&{height:p},...s&&{loading:s},...a&&{className:a},...g&&{onLoad:g},...j&&{overrideSrc:j},...m&&{placeholder:R||E?"empty":m},...h&&{unoptimized:h},...i&&{priority:i},...z&&{unoptimized:!0},style:{...y,...R},loader:P||!0===h?()=>d({src:j||r}):e=>c({src:r,width:e.width,basePath:b}),blurDataURL:C,onError:e=>{_(!0),M(!0),S&&S(e)},onLoad:e=>{0===e.target.naturalWidth&&_(!0),M(!0),g&&g(e)},src:I?r:O})});f.displayName="ExportedImage",t.Z=f},2162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(2430),o=r(1778),n=r(1527),s=o._(r(959)),l=i._(r(422)),a=i._(r(1829)),u=r(8870),c=r(1114),d=r(7554);r(8278);let f=r(1878),p=i._(r(2607)),g={deviceSizes:[768,1440,3840],imageSizes:[384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,i,o,n,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:l,width:a,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:g,unoptimized:b,fill:v,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:S,setShowAltText:j,sizesInput:x,onLoad:P,onError:_,...C}=e;return(0,n.jsx)("img",{...C,...m(f),loading:g,width:a,height:l,decoding:u,"data-nimg":v?"fill":"1",className:c,style:d,sizes:o,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&h(e,p,w,y,S,b,x))},[r,p,w,y,S,_,b,x,t]),onLoad:e=>{h(e.currentTarget,p,w,y,S,b,x)},onError:e=>{j(!0),"empty"!==p&&S(!0),_&&_(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(d.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=g||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:a}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let m=(0,s.useRef)(a);(0,s.useEffect)(()=>{m.current=a},[a]);let[w,y]=(0,s.useState)(!1),[S,j]=(0,s.useState)(!1),{props:x,meta:P}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:w,showAltText:S});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...x,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),P.priority?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8870:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(8278);let i=r(6301),o=r(1114);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:g,className:h,quality:m,width:b,height:v,fill:w=!1,style:y,overrideSrc:S,onLoad:j,onLoadingComplete:x,placeholder:P="empty",blurDataURL:_,fetchPriority:C,decoding:z="async",layout:E,objectFit:M,objectPosition:R,lazyBoundary:I,lazyRoot:O,...W}=e,{imgConf:N,showAltText:k,blurComplete:G,defaultLoader:A}=t,F=N||o.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=W.loader||A;delete W.loader,delete W.srcSet;let D="__next_img_default"in L;if(D){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!d&&(d=t)}let B="",U=s(b),J=s(v);if("object"==typeof(r=c)&&(n(r)||void 0!==r.src)){let e=n(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,_=_||e.blurDataURL,B=e.src,!w){if(U||J){if(U&&!J){let t=U/e.width;J=Math.round(e.height*t)}else if(!U&&J){let t=J/e.height;U=Math.round(e.width*t)}}else U=e.width,J=e.height}}let V=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,V=!1),l.unoptimized&&(f=!0),D&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let T=s(m),q=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},k?{}:{color:"transparent"},y),Y=G||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:U,heightInt:J,blurWidth:a,blurHeight:u,blurDataURL:_||"",objectFit:q.objectFit})+'")':'url("'+P+'")',H=Y?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},Z=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),c=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:n,width:a[c]})}}({config:l,src:c,unoptimized:f,width:U,quality:T,sizes:d,loader:L});return{props:{...W,loading:V?"lazy":g,fetchPriority:C,width:U,height:J,decoding:z,className:h,style:{...q,...H},sizes:Z.sizes,srcSet:Z.srcSet,src:S||Z.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:w}}}},6301:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:s}=e,l=i?40*i:t,a=o?40*o:r,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2040:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return l}});let i=r(2430),o=r(8870),n=r(2162),s=i._(r(2607));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[768,1440,3840],imageSizes:[384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=n.Image},2607:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},8716:function(e,t,r){e.exports=r(2040)}}]);