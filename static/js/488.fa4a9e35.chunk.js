"use strict";(self.webpackChunkbank_of_react=self.webpackChunkbank_of_react||[]).push([[488],{488:(e,n,t)=>{t.r(n),t.d(n,{CLSThresholds:()=>I,FCPThresholds:()=>S,FIDThresholds:()=>N,INPThresholds:()=>G,LCPThresholds:()=>X,TTFBThresholds:()=>$,getCLS:()=>F,getFCP:()=>P,getFID:()=>R,getINP:()=>W,getLCP:()=>Z,getTTFB:()=>ne,onCLS:()=>F,onFCP:()=>P,onFID:()=>R,onINP:()=>W,onLCP:()=>Z,onTTFB:()=>ne});var r,i,o,a,c,u=-1,s=function(e){addEventListener("pageshow",(function(n){n.persisted&&(u=n.timeStamp,e(n))}),!0)},f=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=f();return e&&e.activationStart||0},l=function(e,n){var t=f(),r="navigate";return u>=0?r="back-forward-cache":t&&(document.prerendering||d()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},v=function(e,n,t,r){var i,o;return function(a){n.value>=0&&(a||r)&&((o=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=o,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},m=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},h=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},g=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},T=-1,y=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},C=function(e){"hidden"===document.visibilityState&&T>-1&&(T="visibilitychange"===e.type?e.timeStamp:0,L())},E=function(){addEventListener("visibilitychange",C,!0),addEventListener("prerenderingchange",C,!0)},L=function(){removeEventListener("visibilitychange",C,!0),removeEventListener("prerenderingchange",C,!0)},b=function(){return T<0&&(T=y(),E(),s((function(){setTimeout((function(){T=y(),E()}),0)}))),{get firstHiddenTime(){return T}}},w=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},S=[1800,3e3],P=function(e,n){n=n||{},w((function(){var t,r=b(),i=l("FCP"),o=p("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-d(),0),i.entries.push(e),t(!0)))}))}));o&&(t=v(e,i,S,n.reportAllChanges),s((function(r){i=l("FCP"),t=v(e,i,S,n.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,t(!0)}))})))}))},I=[.1,.25],F=function(e,n){n=n||{},P(g((function(){var t,r=l("CLS",0),i=0,o=[],a=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=o[0],t=o[o.length-1];i&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}})),i>r.value&&(r.value=i,r.entries=o,t())},c=p("layout-shift",a);c&&(t=v(e,r,I,n.reportAllChanges),h((function(){a(c.takeRecords()),t(!0)})),s((function(){i=0,r=l("CLS",0),t=v(e,r,I,n.reportAllChanges),m((function(){return t()}))})),setTimeout(t,0))})))},k={passive:!0,capture:!0},A=new Date,D=function(e,n){r||(r=n,i=e,o=new Date,x(removeEventListener),M())},M=function(){if(i>=0&&i<o-A){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(n){n(e)})),a=[]}},B=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){D(e,n),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,k),removeEventListener("pointercancel",r,k)};addEventListener("pointerup",t,k),addEventListener("pointercancel",r,k)}(n,e):D(n,e)}},x=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,B,k)}))},N=[100,300],R=function(e,n){n=n||{},w((function(){var t,o=b(),c=l("FID"),u=function(e){e.startTime<o.firstHiddenTime&&(c.value=e.processingStart-e.startTime,c.entries.push(e),t(!0))},f=function(e){e.forEach(u)},d=p("first-input",f);t=v(e,c,N,n.reportAllChanges),d&&h(g((function(){f(d.takeRecords()),d.disconnect()}))),d&&s((function(){var o;c=l("FID"),t=v(e,c,N,n.reportAllChanges),a=[],i=-1,r=null,x(addEventListener),o=u,a.push(o),M()}))}))},_=0,H=1/0,O=0,q=function(e){e.forEach((function(e){e.interactionId&&(H=Math.min(H,e.interactionId),O=Math.max(O,e.interactionId),_=O?(O-H)/7+1:0)}))},j=function(){return c?_:performance.interactionCount||0},z=function(){"interactionCount"in performance||c||(c=p("event",q,{type:"event",buffered:!0,durationThreshold:0}))},G=[200,500],J=0,K=function(){return j()-J},Q=[],U={},V=function(e){var n=Q[Q.length-1],t=U[e.interactionId];if(t||Q.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};U[r.id]=r,Q.push(r)}Q.sort((function(e,n){return n.latency-e.latency})),Q.splice(10).forEach((function(e){delete U[e.id]}))}},W=function(e,n){n=n||{},w((function(){var t;z();var r,i=l("INP"),o=function(e){e.forEach((function(e){e.interactionId&&V(e),"first-input"===e.entryType&&!Q.some((function(n){return n.entries.some((function(n){return e.duration===n.duration&&e.startTime===n.startTime}))}))&&V(e)}));var n,t=(n=Math.min(Q.length-1,Math.floor(K()/50)),Q[n]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},a=p("event",o,{durationThreshold:null!==(t=n.durationThreshold)&&void 0!==t?t:40});r=v(e,i,G,n.reportAllChanges),a&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&a.observe({type:"first-input",buffered:!0}),h((function(){o(a.takeRecords()),i.value<0&&K()>0&&(i.value=0,i.entries=[]),r(!0)})),s((function(){Q=[],J=j(),i=l("INP"),r=v(e,i,G,n.reportAllChanges)})))}))},X=[2500,4e3],Y={},Z=function(e,n){n=n||{},w((function(){var t,r=b(),i=l("LCP"),o=function(e){var n=e[e.length-1];n&&n.startTime<r.firstHiddenTime&&(i.value=Math.max(n.startTime-d(),0),i.entries=[n],t())},a=p("largest-contentful-paint",o);if(a){t=v(e,i,X,n.reportAllChanges);var c=g((function(){Y[i.id]||(o(a.takeRecords()),a.disconnect(),Y[i.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(c,0)}),!0)})),h(c),s((function(r){i=l("LCP"),t=v(e,i,X,n.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,Y[i.id]=!0,t(!0)}))}))}}))},$=[800,1800],ee=function e(n){document.prerendering?w((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},ne=function(e,n){n=n||{};var t=l("TTFB"),r=v(e,t,$,n.reportAllChanges);ee((function(){var i=f();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;t.value=Math.max(o-d(),0),t.entries=[i],r(!0),s((function(){t=l("TTFB",0),(r=v(e,t,$,n.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=488.fa4a9e35.chunk.js.map