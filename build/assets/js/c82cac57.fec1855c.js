"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[2109],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3420:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={sidebar_position:4},p="Manage Catalogue Items",u={unversionedId:"Provider/provider_register_catalogue_item",id:"Provider/provider_register_catalogue_item",isDocsHomePage:!1,title:"Manage Catalogue Items",description:"Obtain Token to Create Catalogue",source:"@site/docs/Provider/provider_register_catalogue_item.md",sourceDirName:"Provider",slug:"/Provider/provider_register_catalogue_item",permalink:"/docs/next/Provider/provider_register_catalogue_item",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/docs/Provider/provider_register_catalogue_item.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Manage Delegations",permalink:"/docs/next/Provider/provider_manage_delegates"},next:{title:"Manage Data Ingestion",permalink:"/docs/next/Provider/provider_register_resource_server"}},c=[{value:"Obtain Token to Create Catalogue",id:"obtain-token-to-create-catalogue",children:[],level:2},{value:"Upload Catalogue Entries to the Catalogue Server",id:"upload-catalogue-entries-to-the-catalogue-server",children:[],level:2}],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-catalogue-items"},"Manage Catalogue Items"),(0,o.kt)("h2",{id:"obtain-token-to-create-catalogue"},"Obtain Token to Create Catalogue"),(0,o.kt)("p",null,"To create/update/delete a ",(0,o.kt)("inlineCode",{parentName:"p"},"catalogue")," entry in the IUDX Catalogue Server, a provider should obtain a token using IUDX Authorization Servers ",(0,o.kt)("a",{parentName:"p",href:"https://authorization.iudx.org.in/apis#operation/post-auth-v1-token"},"Create Token APIs"),"."),(0,o.kt)("p",null,"To obtain a token, a provider can either specify their ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret")," in the header or specify a token header. The ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret")," are generated for a provider on their ",(0,o.kt)("a",{parentName:"p",href:"https://docs.iudx.org.in/docs/registration#successful-registration-and-client-id-client-secret"},"Successful Registration"),"."),(0,o.kt)("p",null,"A provider can obtain a token using the ",(0,o.kt)("a",{parentName:"p",href:"https://authorization.iudx.org.in/apis#operation/post-auth-v1-token"},"Create Token APIs")," with the following request body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "itemId": "datakaveri.org/04a15c9960ffda227e9546f3f46e629e1fe4132b/catalogue.iudx.org.in/catalogue/crud",\n  "itemType": "resource",\n  "role": "provider"\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"itemId")," here specifies the catalogue instance in the IUDX Catalogue Server in which the provider intends to perform a create/update/delete operation and is represented in the following format:",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"<provider-domain>/<SHA1-of-provider-email>/<catalogue-url>/catalogue/crud")),(0,o.kt)("p",null,"It is to be noted that a provider would be entitled to create/update/delete ",(0,o.kt)("inlineCode",{parentName:"p"},"catalogue")," entries only on their catalogue instances through an explicit policy specified by the IUDX Admin in the IUDX Authorization Server. A provider will not obtain any token to perform create/update/delete operations on the ",(0,o.kt)("inlineCode",{parentName:"p"},"catalogue")," entries for other catalogue instances in the IUDX Catalogue Server."),(0,o.kt)("h2",{id:"upload-catalogue-entries-to-the-catalogue-server"},"Upload Catalogue Entries to the Catalogue Server"),(0,o.kt)("p",null,"On successfully obtaining a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.iudx.org.in/docs/Provider/provider_register_catalogue_item#obtain-token-to-create-catalogue"},"Create Catalogue Token"),", a provider can upload the ",(0,o.kt)("inlineCode",{parentName:"p"},"catalogue")," entries to the IUDX Catalogue Server."),(0,o.kt)("p",null,"Assuming the ",(0,o.kt)("inlineCode",{parentName:"p"},"catalogue")," entries for ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resource_server")," are already uploaded by the IUDX Admin, a provider can know insert the entries for ",(0,o.kt)("inlineCode",{parentName:"p"},"resource_group")," followed by the entries for the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," to the IUDX Catalogue Server."),(0,o.kt)("p",null,"The Python script below shows an example of inserting a ",(0,o.kt)("inlineCode",{parentName:"p"},"catalogue")," entry to the IUDX Catalogue Server using the ",(0,o.kt)("a",{parentName:"p",href:"https://api.catalogue.iudx.org.in/apis#operation/createItem"},"Create Item API"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{ #create_catalogue_example }","{":!0,"#create_catalogue_example":!0,"}":!0},"import json\nimport requests\n\ncatalogue_url = 'api.catalogue.iudx.org.in'\ntoken = '<token_obtained_from_IUDX_Authorization_Servers>'\npath = '<./path_to_the_catalogue_entry_file>'\n\napi = 'https://' + catalogue_url + '/iudx/cat/v1/item'\n\nheaders = {'content-type': 'application/json', 'token': token}\n\nwith open(path, 'r') as catalogue_file:\n    catalogue_item = json.load(catalogue_file)\n\nr = requests.post(api, json.dumps(catalogue_item), headers=headers)\n\nprint r.status_code\nprint r.json()\n")))}d.isMDXComponent=!0}}]);