"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[5798],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},23133:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:5},s=void 0,p={unversionedId:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis",id:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis",isDocsHomePage:!1,title:"Redis",description:"Architecture",source:"@site/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis.md",sourceDirName:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation",slug:"/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis",permalink:"/docs/next/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/docs/next/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/PostgreSQL"},next:{title:"Zookeeper",permalink:"/docs/next/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Zookeeper"}},c=[{value:"Installation",id:"installation",children:[],level:3},{value:"Tests",id:"tests",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"img_background"},(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:n(27011).Z})))),"- Redis is used as the latest-data store and will be deployed using Swarm stack YAML files.",(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the below directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd iudx-deployment/Docker-Swarm-deployment/single-node/redis/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign the node label if not assigned during Swarm installation:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker node update --label-add redis-node=true <node_name>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate passwords:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./create-secrets.sh\n")),(0,o.kt)("p",{parentName:"li"},"Secrets directory after generation of passwords:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"secrets/\n\u2514\u2500\u2500 passwords\n    \u2514\u2500\u2500 admin-password\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define Appropriate values of resources in ",(0,o.kt)("inlineCode",{parentName:"p"},"redis-rejson-stack.resources.yml")," as shown in the sample file ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/blob/5.0.0/Docker-Swarm-deployment/single-node/redis/example-redis-rejson-stack.resources.yaml"},"example-redis-rejson-stack.resources.yml")),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CPU requests and limits"),(0,o.kt)("li",{parentName:"ul"},"RAM requests and limits, "),(0,o.kt)("li",{parentName:"ul"},"PID limit "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy Redis stack:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cp example-redis-rejson-stack.resources.yaml redis-rejson-stack.resources.yaml\n\ndocker stack deploy -c redis-rejson-stack.yaml -c redis-rejson-stack.resources.yaml redis\n")))),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login and Execute Commands in Redis"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Exec into the Redis container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker exec -it <redis-container> bash\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to Redis:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"redis-cli -a `cat $REDIS_PASSWORD_FILE`\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute commands"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To list down all keys:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"keys *\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To list down the access control lists (ACL):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"acl list\n")))))))),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To check if the redis stacks are deployed and running: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker stack ps redis"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The docker image 'ghcr.io/datakaveri/redis-rejson' is tagged in accordance with this format: ",(0,o.kt)("inlineCode",{parentName:"p"},"<redis-version>:<rejson-version>"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following users, along with their respective passwords, roles/access, and services, are created using the passwords present at files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets/passwords/")," directory:"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Username"),(0,o.kt)("th",{parentName:"tr",align:null},"Password"),(0,o.kt)("th",{parentName:"tr",align:null},"Role/Access"),(0,o.kt)("th",{parentName:"tr",align:null},"Services"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"default"),(0,o.kt)("td",{parentName:"tr",align:null},"secrets/passwords/admin-password"),(0,o.kt)("td",{parentName:"tr",align:null},"Superuser"),(0,o.kt)("td",{parentName:"tr",align:null},"Used by Resource Server and Latest ingestion pipeline")))),(0,o.kt)("p",null,"For more detailed installation instructions, please refer to the documentation ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/tree/5.0.0/Docker-Swarm-deployment/single-node/redis#introduction"},"here"),".")))}m.isMDXComponent=!0},27011:function(e,t,n){t.Z=n.p+"assets/images/Redis-arch-adcaf074c968da6693116c4620ac41b2.png"}}]);