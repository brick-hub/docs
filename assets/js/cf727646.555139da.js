"use strict";(self.webpackChunkbrickhub_docs=self.webpackChunkbrickhub_docs||[]).push([[865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={slug:"/mason-list",description:"Learn how to list the bricks you have installed.",sidebar_position:4},l="\ud83d\udcdd Listing all Installed Bricks",o={unversionedId:"getting_started/mason_list",id:"getting_started/mason_list",title:"\ud83d\udcdd Listing all Installed Bricks",description:"Learn how to list the bricks you have installed.",source:"@site/docs/getting_started/mason_list.md",sourceDirName:"getting_started",slug:"/mason-list",permalink:"/mason-list",draft:!1,editUrl:"https://github.com/brick-hub/docs.brickhub.dev/tree/main/docs/getting_started/mason_list.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/mason-list",description:"Learn how to list the bricks you have installed.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddf1 Installing Bricks",permalink:"/mason-get"},next:{title:"\ud83d\udc77 Using Bricks",permalink:"/mason-make"}},s={},c=[{value:"\ud83d\ude80 Overview",id:"-overview",level:2},{value:"\ud83d\uddc2 Local Bricks",id:"-local-bricks",level:2},{value:"\ud83c\udf0e Global Bricks",id:"-global-bricks",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-listing-all-installed-bricks"},"\ud83d\udcdd Listing all Installed Bricks"),(0,a.kt)("h2",{id:"-overview"},"\ud83d\ude80 Overview"),(0,a.kt)("p",null,"We can list all installed bricks using the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," (",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," for short) command."),(0,a.kt)("h2",{id:"-local-bricks"},"\ud83d\uddc2 Local Bricks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mason list\n/me/mason_playground\n\u2514\u2500\u2500 hello 0.1.0+1 -> registry.brickhub.dev\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," command lists locally installed bricks.")),(0,a.kt)("p",null,"If we change to a directory outside of the current workspace and list installed bricks we will no longer see the previous bricks because they are scoped to that workspace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Change to a directory outside the workspace\ncd /me/dart_playground\n\n# List available bricks\nmason ls\n/me/dart_playground\n\u2514\u2500\u2500 (empty)\n")),(0,a.kt)("h2",{id:"-global-bricks"},"\ud83c\udf0e Global Bricks"),(0,a.kt)("p",null,"We can list globally installed bricks by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--global")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-g")," for short) flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mason ls -g\n/me/.mason-cache/global\n\u2514\u2500\u2500 hello 0.1.0+1 -> registry.brickhub.dev\n")))}d.isMDXComponent=!0}}]);