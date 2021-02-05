(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{46:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),l=n(30),u=n(18),c=n(20),s=n(19),m=n(21),i=n(22);function f(e){return Object.keys(e).map((function(t){return t+": "+e[t]}))}!function(e){e[e.ERROR=0]="ERROR",e[e.LINK=1]="LINK",e[e.DEFAULT=2]="DEFAULT"}(a||(a={}));var p=function(e){var t=e.result,n=t.command,r=t.type,l=t.result,u=r===a.LINK;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"text-yellow"},"$  "),o.a.createElement("span",{className:"text-terminalText"},n.length<1?"EMPTY":n),l.map((function(e,t){var n=e.value,a=e.link;return o.a.createElement("p",{key:t,className:h(r)+" ml-4",style:{cursor:u&&"pointer",width:"max-content"},onClick:function(){return u&&window.open(a)},onKeyDown:function(){},role:"presentation"},o.a.createElement("span",{className:u&&"hover:underline"},n))})))},d=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],l=0,u=o.length;l<u;l++,r++)a[r]=o[l];return a},b=function(e){e.focus()},h=function(e){switch(e){case a.DEFAULT:return"text-terminalGreen";case a.ERROR:return"text-red";default:return"text-terminalGreen"}},y=function(e,t){switch(e){case"help":return{command:e,type:a.DEFAULT,result:d([{value:"Available commands: "},{value:"clear"},{value:"help"}],t.map((function(e){return{value:e.command}})))};case"clear":return null;case"":return{command:e,type:a.ERROR,result:[{value:'Unknown command "'+e+'" found.'}]};default:var n=t.find((function(t){return t.command===e}));return n?{command:n.command,type:"show --projects"===e?a.LINK:a.DEFAULT,result:"object"===n.type?f(n.result).map((function(e){return{value:e}})):n.result.map((function(t){return"show --projects"===e?{value:t.name,link:t.link}:{value:t}}))}:{command:e,type:a.ERROR,result:[{value:'Unknown command "'+e+'" found.'}]}}},v=function(){return(v=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],l=0,u=o.length;l<u;l++,r++)a[r]=o[l];return a},E=function(e){var t=e.data,n=e.scrollableContainer,a=g(e,["data","scrollableContainer"]),l=null,u=Object(r.useState)(""),c=u[0],s=u[1],m=Object(r.useState)([]),i=m[0],f=m[1];return Object(r.useEffect)((function(){var e;b(l),n&&(e=n).scrollTo(0,e.scrollHeight)})),o.a.createElement("div",v({},a,{role:"presentation","aria-label":"Website Terminal",onClick:function(e){e.preventDefault(),b(l)},onKeyDown:function(){}}),function(e){return e.map((function(e,t){return o.a.createElement(p,{result:e,key:t})}))}(i),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y(c.trim(),t)?f(w(i,[y(c.trim(),t)])):f([]),s("")},autoComplete:"off",className:"flex flex-row pb-5"},o.a.createElement("span",{className:"text-yellow"},"$  "),o.a.createElement("input",{id:"terminal-input",className:"flex-1 outline-none text-terminalText bg-terminalBlack",value:c,onChange:function(e){var t=e.currentTarget.value;s(t)},type:"text",spellCheck:!1,placeholder:"/* use help for your guide */",ref:function(e){l=e}})))},O={fetchLanguagesRequest:u.b,fetchBioRequest:s.b,fetchEmploymentRequest:c.b,fetchToolsRequest:m.b,fetchProjectsRequest:i.b},R=Object(l.b)((function(e){return{languages:e.languages,tools:e.tools,employment:e.employment,bio:e.bio,projects:e.projects}}),O);t.default=R((function(e){var t=Object(r.useRef)(null),n=Object(r.useState)([]),a=n[0],l=n[1];return Object(r.useEffect)((function(){e.fetchLanguagesRequest(),e.fetchBioRequest(),e.fetchEmploymentRequest(),e.fetchToolsRequest(),e.fetchProjectsRequest()}),[]),Object(r.useEffect)((function(){var t=e.languages,n=e.bio,a=e.employment,r=e.tools,o=e.projects;l([{command:"show --languages",result:t.data.map((function(e){return e.name}))},{command:"show --employment",result:a.data.map((function(e){return e.company}))},{command:"show --tools",result:r.data.map((function(e){return e.name}))},{command:"show --projects",result:o.data.map((function(e){return{name:e.name,link:e.link}}))},{command:"show --bio",result:n.data,type:"object"}])}),[e]),o.a.createElement("main",{ref:t,id:"terminalContainer",className:"flex container sm:rounded-none rounded overflow-y-scroll bg-terminalBlack flex-1 p-5 mx-auto md:m-0 my-5"},o.a.createElement(E,{className:"terminal h-full w-full content-start pb-5",data:a,scrollableContainer:t.current}))}))}}]);