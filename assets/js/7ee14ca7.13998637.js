"use strict";(self.webpackChunkbrickhub_docs=self.webpackChunkbrickhub_docs||[]).push([[875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={slug:"/mason-init",description:"Learn how to initialize mason in your current workspace.",sidebar_position:2},o="\ud83d\udcc1 Initializing Mason CLI",l={unversionedId:"getting_started/mason_init",id:"getting_started/mason_init",title:"\ud83d\udcc1 Initializing Mason CLI",description:"Learn how to initialize mason in your current workspace.",source:"@site/docs/getting_started/mason_init.md",sourceDirName:"getting_started",slug:"/mason-init",permalink:"/mason-init",draft:!1,editUrl:"https://github.com/brick-hub/docs.brickhub.dev/tree/main/docs/getting_started/mason_init.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/mason-init",description:"Learn how to initialize mason in your current workspace.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd1\u200d\ud83d\udcbb Installing Mason CLI",permalink:"/installing"},next:{title:"\ud83e\uddf1 Installing Bricks",permalink:"/mason-get"}},s={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-initializing-mason-cli"},"\ud83d\udcc1 Initializing Mason CLI"),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"mason_cli")," is installed, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command to initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"mason")," in the current directory. This will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"mason.yaml")," and allow ",(0,i.kt)("inlineCode",{parentName:"p"},"mason")," to work with bricks scoped locally within the workspace."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"mason")," will always use the nearest parent ",(0,i.kt)("inlineCode",{parentName:"p"},"mason.yaml"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mason init\n")),(0,i.kt)("p",null,"Once we run, ",(0,i.kt)("inlineCode",{parentName:"p"},"mason init"),", we should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"mason.yaml")," that looks something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Register bricks which can be consumed via the Mason CLI.\n# Run "mason get" to install all registered bricks.\n# To learn more, visit https://docs.brickhub.dev.\nbricks:\n  # Bricks can be imported via version constraint from a registry.\n  # Uncomment the following line to import the "hello" brick from BrickHub.\n  # hello: 0.1.0+1\n  # Bricks can also be imported via remote git url.\n  # Uncomment the following lines to import the "widget" brick from git.\n  # widget:\n  #   git:\n  #     url: https://github.com/felangel/mason.git\n  #     path: bricks/widget\n')))}m.isMDXComponent=!0}}]);