(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},122:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(124),c=n(119),l=n(55),i=n.n(l),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(a.useState)(l),j=O[0],g=O[1],v=a.Children.toArray(e.children);if(null!=d){var y=f[d];null!=y&&y!==j&&p.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=d&&h(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},123:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},124:function(e,t,n){"use strict";var a=n(0),r=n(125);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(122),c=n(123),l=[{label:"JavaScript",value:"js"},{label:"Typescript",value:"ts"}],i=function(e){var t=e.defaultValue,n=void 0===t?"js":t,a=e.values,i=void 0===a?l:a,u=e.children;return r.a.createElement(o.a,{defaultValue:n,values:i},i.map((function(e,t){return r.a.createElement(c.a,{key:e.value,value:e.value},u[t])})))}},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(118)),c=n(122),l=n(123),i=n(129),u={id:"updated",title:"Updated",sidebar_label:"@rematch/updated",slug:"/plugins/updated/"},s={unversionedId:"plugins/updated",id:"plugins/updated",isDocsHomePage:!1,title:"Updated",description:"Rematch plugin for maintaining timestamps when an effect is triggered.",source:"@site/../docs/plugins/updated.md",slug:"/plugins/updated/",permalink:"/docs/plugins/updated/",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/plugins/updated.md",version:"current",sidebar_label:"@rematch/updated",sidebar:"docs",previous:{title:"Loading",permalink:"/docs/plugins/loading/"},next:{title:"Persist",permalink:"/docs/plugins/persist/"}},p=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Install",id:"install",children:[]},{value:"updatedPlugin(config)",id:"updatedpluginconfig",children:[]},{value:"Usage",id:"usage",children:[{value:"Setup the store",id:"setup-the-store",children:[]},{value:"Use in the view",id:"use-in-the-view",children:[]}]}],d={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rematch plugin for maintaining timestamps when an effect is triggered."),Object(o.b)("p",null,"Updated is primarily used for optimizing effects. It can be used to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"prevent expensive fetch requests within a certain time period"),Object(o.b)("li",{parentName:"ul"},"throttle effects")),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("p",null,"Install the correct version of the updated plugin based on the version of the core Rematch library in your project."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"@rematch/core"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"@rematch/updated"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1.x.x"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"1.x.x")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2.x.x"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"2.x.x")))),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)(c.a,{groupId:"npm2yarn",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @rematch/updated\n"))),Object(o.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @rematch/updated\n")))),Object(o.b)("h2",{id:"updatedpluginconfig"},"updatedPlugin(","[config]",")"),Object(o.b)("p",null,"The updated plugin accepts one optional argument - ",Object(o.b)("strong",{parentName:"p"},"config"),", which is an object with the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"name")," (",Object(o.b)("em",{parentName:"p"},"string"),"): the key for the updated state. Default value is ",Object(o.b)("inlineCode",{parentName:"p"},"updated"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"blacklist")," (",Object(o.b)("em",{parentName:"p"},"string[]"),"): list of blacklisted ",Object(o.b)("strong",{parentName:"p"},"model")," names, for which the plugin will not track effects")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"dateCreator")," (",Object(o.b)("em",{parentName:"p"},"() => any"),"): by default it's a function which returns new Date object when an effect is called. However, if you prefer to use moment or any other custom library, you can provide a custom implementation, such as ",Object(o.b)("inlineCode",{parentName:"p"},"() => moment()"),"."))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Let\u2019s say we have a model \u2018count\u2019 in our store which has two effects - ",Object(o.b)("em",{parentName:"p"},"fetchOne")," and ",Object(o.b)("em",{parentName:"p"},"fetchTwo"),". Updated plugin\u2019s state will have the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "count": {\n    "fetchOne": "2020-12-13T20:48:34.935Z", // Date when fetchOne effect was last fetched\n    "fetchTwo": "2020-12-13T20:40:34.935Z" , // Date when fetchTwo effect was last fetched\n  }\n}\n')),Object(o.b)("h3",{id:"setup-the-store"},"Setup the store"),Object(o.b)("p",null,"To use the plugin, start with adding it to your store:"),Object(o.b)(i.a,{mdxType:"MultiLangComponent"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="store.js"',title:'"store.js"'}),"import updatedPlugin from '@rematch/updated'\nimport { init } from '@rematch/core'\nimport * as models from './models'\n\ninit({\n    models,\n    plugins: [updatedPlugin()],\n})\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="store.ts"',title:'"store.ts"'}),"import updatedPlugin, { ExtraModelsFromUpdated } from '@rematch/loading'\nimport { init, RematchDispatch, RematchRootState } from '@rematch/core'\nimport { models, RootModel } from './models'\n\ntype FullModel =  ExtraModelsFromUpdated<RootModel>\n\n// Also you can use loading plugin\n// type FullModel =  ExtraModelsFromLoading<RootModel> & ExtraModelsFromUpdated<RootModel>\n\nexport const store = init<RootModel, FullModel>({\n    models,\n      plugins: [updatedPlugin()],\n})\n\nexport type Store = typeof store\nexport type Dispatch = RematchDispatch<RootModel>\nexport type RootState = RematchRootState<RootModel, FullModel>\n"))),Object(o.b)("h3",{id:"use-in-the-view"},"Use in the view"),Object(o.b)("p",null,"Define a model which uses effects."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="some-model.js"',title:'"some-model.js"'}),"export const count = {\n    ...,\n    effects: {\n      async fetchOne() {},\n      async fetchTwo() {},\n    }\n}\n")),Object(o.b)("p",null,"Use the updated state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="someView.jsx"',title:'"someView.jsx"'}),"const state = store.getState()\n// or just connect() on `react-redux`\n\nconsole.log(state.updated.count.fetchOne)\nconsole.log(state.updated.count.fetchTwo)\n")))}b.isMDXComponent=!0}}]);