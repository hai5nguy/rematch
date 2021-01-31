(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,d=m["".concat(c,".").concat(u)]||m[u]||p[u]||l;return a?r.a.createElement(d,b(b({ref:t},o),{},{components:a})):r.a.createElement(d,b({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(118)),c={slug:"welcome",title:"Welcome to Rematch blog",author:"Sergio Moreno",author_title:"Front End Engineer",author_url:"https://github.com/semoal",author_image_url:"https://avatars0.githubusercontent.com/u/22656541?s=460&u=47ba975957ce32b2fccc3690939f2f75c765b263&v=4",tags:["rematch","react","welcome","redux","rematchjs"]},b={permalink:"/blog/welcome",editUrl:"https://github.com/rematch/rematch/edit/main/blog/../blog/2020-02-01-welcome.md",source:"@site/../blog/2020-02-01-welcome.md",description:"I'm super happy to announce that the new website is the continuation of the work that all of us who collaborate in Rematch have done altruistically because we love it.",date:"2020-02-01T00:00:00.000Z",tags:[{label:"rematch",permalink:"/blog/tags/rematch"},{label:"react",permalink:"/blog/tags/react"},{label:"welcome",permalink:"/blog/tags/welcome"},{label:"redux",permalink:"/blog/tags/redux"},{label:"rematchjs",permalink:"/blog/tags/rematchjs"}],title:"Welcome to Rematch blog",readingTime:2.44,truncated:!1},i=[{value:"Bug fixes",id:"bug-fixes",children:[]},{value:"New features",id:"new-features",children:[]},{value:"Chore",id:"chore",children:[]}],o={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"I'm super happy to announce that the new website is the continuation of the work that all of us who collaborate in Rematch have done altruistically because we love it."),Object(l.b)("p",null,"Today we're announcing version 2.0.0 of Rematch. Almost 6 months passed since we opened the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rematch/rematch/issues/792"}),"Roadmap V2 for Rematch"),". Here we are writing this post telling you guys all the incredible improvements and features we introduced to this new version of Rematch."),Object(l.b)("h3",{id:"bug-fixes"},"Bug fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"We're 100% compatible with ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),Object(l.b)("inlineCode",{parentName:"a"},"Typescript")),", YES!! Using ",Object(l.b)("inlineCode",{parentName:"li"},"createModel()")," helper we get autocomplete of effects, reducers, also the state, also we accept if the state is complex (like custom types) with a simple ",Object(l.b)("inlineCode",{parentName:"li"},"as"),". This is thanks to much people but ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tianzhich"}),"Zhi Tian")," worked hard here with d.ts files, he's the type sorcerer.")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"How to easily start with Typescript + Rematch ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/installation"}),"here")))),Object(l.b)("p",null,"And no more bug fixes... because there aren't any. Rematch is consolidated as a stable alternative to Redux and other state-management solutions, it's fast, light, easy, and maintanaible. ",Object(l.b)("em",{parentName:"p"},"What else do we need?")),Object(l.b)("h3",{id:"new-features"},"New features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"We introduced a new method of directories, ",Object(l.b)("inlineCode",{parentName:"li"},"MONOREPO"),". Yes, we are using ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/lerna/lerna"}),Object(l.b)("inlineCode",{parentName:"a"},"lerna"))," to handle all the packages deployment and common dependencies."),Object(l.b)("li",{parentName:"ul"},"We used ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/formium/tsdx"}),Object(l.b)("inlineCode",{parentName:"a"},"tsdx"))," for building our packages to UMD,CJS, and ES. That means we're compatible with all the formats that exists nowadays."),Object(l.b)("li",{parentName:"ul"},"Now we collect all the errors you have on your configuration - ",Object(l.b)("em",{parentName:"li"},"(there's any?)"),". And we throw all of them not just the first one. This avoids doing computation in production build, so we got some speed improvements."),Object(l.b)("li",{parentName:"ul"},"Added new hooks for custom plugins: ",Object(l.b)("inlineCode",{parentName:"li"},"onReducer"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"onRootReducer"),". Super useful if you pretend to migrate some native redux plugin to Rematch.")),Object(l.b)("h3",{id:"chore"},"Chore"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"We refactored the documentation to ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/"}),Object(l.b)("inlineCode",{parentName:"a"},"Docusaurus")),", now it contains a blog ;), also we have warnings if some link is broken, and a super cool landing page."),Object(l.b)("li",{parentName:"ul"},"We worked hard to reduce bundle size a lot but still being compatible with Internet Explorer 11 is a must for us the results are ",Object(l.b)("strong",{parentName:"li"},"incredible"),":")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"package"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"old version"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"latest version"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"diff"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@rematch/core"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/core@1.4.0",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/core@latest",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-106.12%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@rematch/loading"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/loading@1.2.1",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/loading@latest",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-76.36%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@rematch/updated"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/updated@0.1.5",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/updated@latest",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-87.18%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@rematch/select"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/select@2.0.5",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/select@latest",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-24.24%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@rematch/persist"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/persist@1.1.6",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/persist@latest",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-44.33%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@rematch/immer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/immer@1.2.0",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("img",Object(n.a)({parentName:"td"},{src:"https://badgen.net/bundlephobia/min/@rematch/immer@latest",alt:null}))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-189.75%")))),Object(l.b)("p",null,"As you can see, ",Object(l.b)("s",null,"holy moly"),", we reduced the size drastically."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Also we migrated from ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://travis-ci.org/"}),Object(l.b)("inlineCode",{parentName:"a"},"Travis.ci"))," to ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/features/actions"}),Object(l.b)("inlineCode",{parentName:"a"},"Github Actions")),", and we're really happy with the change because we have three workflows:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Size Testing: we avoid regressions of size on each pull-request."),Object(l.b)("li",{parentName:"ul"},"Pull Request title: we're using ",Object(l.b)("inlineCode",{parentName:"li"},"semantic-release")," to generate cool changelogs, we ensure that the title follows the angular convention."),Object(l.b)("li",{parentName:"ul"},"Rematch CI: of course the main workflow that runs all the testing suite (also we test typescript types to avoid regressions).")))),Object(l.b)("p",null,"In 2021 Redux isn't that cool as ",Object(l.b)("inlineCode",{parentName:"p"},"React.useContext, React.useReducer"),", or other alternatives of state-management like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pmndrs/jotai"}),Object(l.b)("inlineCode",{parentName:"a"},"jotai")),", but we keep working hard inside Rematch to keep the essence of simplicity and still be in conjuntion with Redux to provide an easy and a powerful state-management solution to every project."),Object(l.b)("p",null,"Happy new year to everyone!"))}s.isMDXComponent=!0}}]);