(self.webpackChunkmark_lumbao_github_io=self.webpackChunkmark_lumbao_github_io||[]).push([[817],{6156:(e,t,n)=>{"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})},9226:(e,t,n)=>{"use strict";n.d(t,{zt:()=>f,I0:()=>v,v9:()=>y});var r=n(7294),u=(n(5697),r.createContext(null)),i=function(e){e()},s=function(){return i},c={notify:function(){}},o=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=c,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=s(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,u=n={callback:e,next:null,prev:n};return u.prev?u.prev.next=u:t=u,function(){r&&null!==t&&(r=!1,u.next?u.next.prev=u.prev:n=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=c)},e}(),a="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;const f=function(e){var t=e.store,n=e.context,i=e.children,s=(0,r.useMemo)((function(){var e=new o(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=(0,r.useMemo)((function(){return t.getState()}),[t]);a((function(){var e=s.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[s,c]);var f=n||u;return r.createElement(f.Provider,{value:s},i)};function b(){return(0,r.useContext)(u)}function h(e){void 0===e&&(e=u);var t=e===u?b:function(){return(0,r.useContext)(e)};return function(){return t().store}}n(8679),n(9864),n(2122);var l=h();function d(e){void 0===e&&(e=u);var t=e===u?l:h(e);return function(){return t().dispatch}}var v=d(),p=function(e,t){return e===t};function S(e){void 0===e&&(e=u);var t=e===u?b:function(){return(0,r.useContext)(e)};return function(e,n){void 0===n&&(n=p);var u=t(),i=function(e,t,n,u){var i,s=(0,r.useReducer)((function(e){return e+1}),0)[1],c=(0,r.useMemo)((function(){return new o(n,u)}),[n,u]),f=(0,r.useRef)(),b=(0,r.useRef)(),h=(0,r.useRef)(),l=(0,r.useRef)(),d=n.getState();try{if(e!==b.current||d!==h.current||f.current){var v=e(d);i=void 0!==l.current&&t(v,l.current)?l.current:v}else i=l.current}catch(e){throw f.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+f.current.stack+"\n\n"),e}return a((function(){b.current=e,h.current=d,l.current=i,f.current=void 0})),a((function(){function e(){try{var e=n.getState(),r=b.current(e);if(t(r,l.current))return;l.current=r,h.current=e}catch(e){f.current=e}s()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),i}(e,n,u.store,u.subscription);return(0,r.useDebugValue)(i),i}}var g,y=S();g=n(3935).unstable_batchedUpdates,i=g}}]);