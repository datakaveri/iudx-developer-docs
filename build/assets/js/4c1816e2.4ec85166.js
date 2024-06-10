"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[7859],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55720:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:7},c="Data Access through File Server",l={unversionedId:"Consumer/consumer_data_access_file_server",id:"Consumer/consumer_data_access_file_server",isDocsHomePage:!1,title:"Data Access through File Server",description:"After discovering resources and obtaining appropriate access tokens, a consumer can use the File Access APIs to query a resource using temporal, spatial and attribute queries. It is to be noted that all the APIs are accessible only through a valid resource id and an appropriate Open or Secure access token.",source:"@site/docs/Consumer/consumer_data_access_file_server.md",sourceDirName:"Consumer",slug:"/Consumer/consumer_data_access_file_server",permalink:"/docs/next/Consumer/consumer_data_access_file_server",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/docs/Consumer/consumer_data_access_file_server.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Data Access through Async APIs",permalink:"/docs/next/Consumer/consumer_data_access_async"},next:{title:"Introduction",permalink:"/docs/next/Provider/provider"}},u=[{value:"List, Search and download files",id:"list-search-and-download-files",children:[],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-access-through-file-server"},"Data Access through File Server"),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Consumer/consumer_data_discovery"},"discovering")," resources and obtaining appropriate ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/Consumer/consumer_obtaining_access_token"},"access tokens"),", a consumer can use the ",(0,o.kt)("a",{parentName:"p",href:"https://file.iudx.org.in/apis"},"File Access APIs")," to query a resource using ",(0,o.kt)("inlineCode",{parentName:"p"},"temporal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spatial")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"attribute")," queries. It is to be noted that all the APIs are accessible only through a valid resource ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and an appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"Open")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure")," access ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),". "),(0,o.kt)("h2",{id:"list-search-and-download-files"},"List, Search and download files"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"consumer")," can access the list of all the files available for a resource using the ",(0,o.kt)("a",{parentName:"p",href:"https://file.iudx.org.in/apis#operation/list-metadata"},"list all files API"),". File server also provides a ",(0,o.kt)("a",{parentName:"p",href:"https://file.iudx.org.in/apis#operation/search-file"},"Temporal API")," which one can use to query and get the list of files between a time range. The ",(0,o.kt)("a",{parentName:"p",href:"https://file.iudx.org.in/apis#operation/search-file"},"Temporal API")," can also be used to perform a complex query using spatial parameters."),(0,o.kt)("p",null,"On obtaining the fileId, the ",(0,o.kt)("inlineCode",{parentName:"p"},"consumer")," can use the ",(0,o.kt)("a",{parentName:"p",href:"https://file.iudx.org.in/apis#operation/download-file"},"Download API")," to download the file from the file server."))}d.isMDXComponent=!0}}]);