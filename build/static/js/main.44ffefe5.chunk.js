(this["webpackJsonppuzzle-tile"]=this["webpackJsonppuzzle-tile"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(5),o=t.n(c),i=(t(12),t(6)),l=t(3),u=function(e){var n=e.el,t=e.index,a=e.ind,c=e.size;return r.a.createElement("span",{className:n===c*c?"rmv":"",onClick:function(){return e.handleClick(n,t,a)}},n===c*c?"":n)};t(13);var s=function(){var e=Object(a.useState)(3),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(new Array(t)),s=Object(l.a)(o,2),f=s[0],m=s[1],d=function(){for(var e=[],n=1;n<=t*t;n++)e.push(n);v(e)},v=function(e){for(var n=e.sort((function(){return Math.random()-.5})),a=0,r=new Array(t),c=0;c<t;c++){r[c]=new Array(t);for(var o=0;o<t;o++)r[c][o]=n[a],a++}m([].concat(r))},p=function(e,n,a){if(e!==t*t){var r=f;if(a-1!==-1&&r[n][a-1]===t*t)r[n][a]=t*t,r[n][a-1]=e;else if(a+1!==t&&r[n][a+1]===t*t)r[n][a]=t*t,r[n][a+1]=e;else if(n-1!==-1&&r[n-1][a]===t*t)r[n][a]=t*t,r[n-1][a]=e;else{if(n+1===t||r[n+1][a]!==t*t)return;r[n][a]=t*t,r[n+1][a]=e}m(Object(i.a)(r))}};return Object(a.useEffect)(d,[t]),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",null,r.a.createElement("label",null,"# of tiles per row and column: "),r.a.createElement("input",{type:"number",min:3,max:9,value:t,onChange:function(e){var n=parseInt(e.target.value);!isNaN(n)&&n>2&&n<10&&c(n)}})),r.a.createElement("button",{onClick:function(){return d()}},"Shuffle"),r.a.createElement("br",null),r.a.createElement("br",null),f.map((function(e,n){return r.a.createElement("div",{key:n,className:"row"},e.map((function(e,a){return r.a.createElement(u,{key:a,handleClick:p,index:n,el:e,ind:a,size:t})})))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.44ffefe5.chunk.js.map