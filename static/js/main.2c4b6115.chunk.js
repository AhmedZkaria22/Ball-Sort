(this["webpackJsonpball-sort"]=this["webpackJsonpball-sort"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(10),l=n.n(o),r=(n(27),n(9)),s=(n(28),n(37)),i=n(38),u=n(18),b=n(19),h=n(7),j=n(17),O=n(2);var d=function(e){var t=Object(h.b)();return Object(O.jsxs)("div",{className:"ballsContainer__ballCards__item",children:[Object(O.jsx)(u.a,{onClick:function(){return n=e.ballIndx,void t({type:"REMOVE_ITEM",payload:n});var n}}),e.ballWeight>=0&&e.ballWeight<=99?Object(O.jsx)(j.b,{}):e.ballWeight>=100&&e.ballWeight<=999?Object(O.jsx)(b.a,{}):e.ballWeight>=1e3&&Object(O.jsx)(j.a,{}),e.ballWeight?Object(O.jsxs)("p",{children:[" ",e.ballWeight," Kg "]}):Object(O.jsx)("p",{children:"500 kg"})]})},g=n(20),p=n(21);n(34);var f=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useRef)(null),l=Object(h.b)(),u=Object(h.c)((function(e){return e.balls})),b=Object(c.useState)(""),j=Object(r.a)(b,2),f=j[0],I=j[1],y=function(e){for(var t=e.target.parentElement,n=0;n<t.children.length-1;n++)t.children[n]===e.target?(t.children[n].style.color="#5779be",t.children[n].style.backgroundColor="white"):(t.children[n].style.color="white",t.children[n].style.backgroundColor="#1890FF")},S=function(e){l({type:"BUBBLE_SORT_ITEM",payload:u}),document.querySelector("h3").textContent="Big o notation : O(n^2)",y(e)},x=function(e){l({type:"SELECTION_SORT_ITEM",payload:u}),document.querySelector("h3").textContent="Big o notation : O(n^2)",y(e)},_=function(e){l({type:"MERGE_SORT_ITEM",payload:u}),document.querySelector("h3").textContent="Big o notation : O(n log n)",y(e)},v=function(e){l({type:"QUICK_SORT_ITEM",payload:u}),document.querySelector("h3").textContent="Big o notation : O(n)",y(e)},m=function(e){l({type:"INSERTION_SORT_ITEM",payload:u}),document.querySelector("h3").textContent="Big o notation : O(n ^ 2)",y(e)},T=function(e){l({type:"COUNTING_SORT_ITEM",payload:u}),document.querySelector("h3").textContent="Big o notation O(n) + O(n^2)",y(e)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"text-center",children:"Ball App"}),Object(O.jsx)("div",{className:"ballInsert",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l({type:"ADD_ITEM",payload:{weight:n}}),a(0),o.current.value="",console.log(n)},children:[Object(O.jsx)("input",{type:"text",placeholder:"Type Ball Weight",ref:o,onChange:function(){a(parseInt(o.current.value))}}),Object(O.jsx)("button",{type:"submit",children:"Insert"})]})}),Object(O.jsxs)(s.a,{className:"ballsContainer",children:[Object(O.jsxs)(i.a,{children:[Object(O.jsx)("div",{className:"ballsContainer__ballCards col-8 col-xl-9 col-lg-9 col-md-7 col-sm-8 col-xs-8",children:u.map((function(e,t){return Object(O.jsx)(d,{ballWeight:e.weight,ballIndx:t},t)}))}),Object(O.jsx)("div",{className:" col-4 col-xl-3 col-lg-3 col-md-5 col-sm-4 col-xs-4",children:Object(O.jsxs)("div",{className:"ballsContainer__sortWrapper",children:[Object(O.jsx)("p",{onClick:function(e){S(e),I("Bubble")},children:" Bubble "}),Object(O.jsx)("p",{onClick:function(e){x(e),I("Selection")},children:" Selection "}),Object(O.jsx)("p",{onClick:function(e){_(e),I("Merge")},children:" Merge "}),Object(O.jsx)("p",{onClick:function(e){v(e),I("Quick")},children:" Quick "}),Object(O.jsx)("p",{onClick:function(e){m(e),I("Insertion")},children:" Insertion "}),Object(O.jsx)("p",{onClick:function(e){T(e),I("Counting")},children:" Counting "}),Object(O.jsxs)("div",{className:"ballsContainer__sortWrapper__btns",children:[Object(O.jsx)(g.a,{id:"descSort",className:"".concat(f),onClick:function(){document.getElementById("descSort").classList.contains("Bubble")||document.getElementById("descSort").classList.contains("Selection")||document.getElementById("descSort").classList.contains("Merge")||document.getElementById("descSort").classList.contains("Quick")||document.getElementById("descSort").classList.contains("Insertion")||document.getElementById("descSort").classList.contains("Counting")?(l({type:"Desc_SORT_ITEM",payload:u}),document.querySelector("h3").textContent="Descending Order"):console.log("no class yet")}}),Object(O.jsx)(p.a,{onClick:function(){l({type:"UN_SORT",payload:u}),document.querySelector("h3").textContent="Shuffle Mode";for(var e=document.querySelectorAll(".ballsContainer__sortWrapper p"),t=0;t<e.length;t++)e[t].style.color="white",e[t].style.backgroundColor="#1890FF"}})]})]})})]}),Object(O.jsx)(i.a,{children:Object(O.jsx)("h3",{children:"Big o notation type"})})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),o(e),l(e)}))},y=n(22),S=n(5),x=n(3),_=function(e){for(var t,n=e.length;0!=n;){t=Math.floor(Math.random()*n),n--;var c=[e[t],e[n]];e[n]=c[0],e[t]=c[1]}return e},v=function(e){for(var t=0;t<e.length-1;t++)for(var n=0;n<e.length-1-t;n++)if(parseInt(e[n].weight)>parseInt(e[n+1].weight)){var c=[e[n+1],e[n]];e[n]=c[0],e[n+1]=c[1]}return console.log("Bubble Sort Done"),e},m=function(e){for(var t=0;t<e.length-1;t++){for(var n=t,c=t+1;c<e.length;c++)parseInt(e[c].weight)<parseInt(e[n].weight)&&(n=c);var a=e[t];e[t]=e[n],e[n]=a}return console.log("Selection Sort Done"),e},T=function e(t){if(t.length<=1)return t;var n=Math.floor(t.length/2),c=t.slice(0,n),a=t.slice(n);return console.log("Merge Sort Done"),function(e,t){for(var n=[],c=0,a=0;c<e.length&&a<t.length;){var o=e[c],l=t[a];parseInt(o.weight)<parseInt(l.weight)?(n.push(o),c++):(n.push(l),a++)}return[].concat(n,Object(S.a)(e.slice(c)),Object(S.a)(t.slice(a)))}(e(c),e(a))},C=function e(t){var n=Object(S.a)(t);if(n.length<2)return n;var c=Math.floor(t.length/2),a=parseInt(n[c].weight),o=n.reduce((function(e,t,n){return parseInt(t.weight)<a||parseInt(t.weight)===a&&n!=c?e[0].push(t):parseInt(t.weight)>a&&e[1].push(t),e}),[[],[]]),l=Object(r.a)(o,2),s=l[0],i=l[1];return console.log("Quick Sort Done"),[].concat(Object(S.a)(e(s)),[n[c]],Object(S.a)(e(i)))},E=function(e){if(1===e.length)return e;for(var t=1;t<e.length;t++)for(var n=t;n>0&&parseInt(e[n].weight)<parseInt(e[n-1].weight);n--){var c=[e[n],e[n-1]];e[n-1]=c[0],e[n]=c[1]}return console.log("Insertion Sort Done"),e},w=function(e){for(var t=parseInt(e[0].weight),n=parseInt(e[0].weight),c=1;c<e.length;c++)parseInt(e[c].weight)>n?n=parseInt(e[c].weight):parseInt(e[c].weight)<t&&(t=parseInt(e[c].weight));for(var a={},o=t;o<n+1;o++){a["".concat(o)]=0;for(var l=0;l<e.length;l++)o===parseInt(e[l].weight)&&(a["".concat(o)]+=1)}var r=[],s=[];for(var i in a)a[i]>0&&(r.push(a[i]),s.push(parseInt(i)));for(var u=[],b=0;b<s.length;b++)for(var h=0;h<e.length;h++)parseInt(e[h].weight)===s[b]&&u.push(e[h]);return console.log("Counting Sort Done"),console.log("Range ".concat(t," : ").concat(n)),u},M=function(e){return e=e.reverse()},B={balls:[{weight:500},{weight:300},{weight:200},{weight:800},{weight:600},{weight:100}]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:[].concat(Object(S.a)(e.balls),[t.payload])});case"REMOVE_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(e.balls.filter((function(e,n){return n!==t.payload})))});case"BUBBLE_SORT_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(v(t.payload))});case"SELECTION_SORT_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(m(t.payload))});case"MERGE_SORT_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(T(t.payload))});case"QUICK_SORT_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(C(t.payload))});case"INSERTION_SORT_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(E(t.payload))});case"COUNTING_SORT_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(w(t.payload))});case"Desc_SORT_ITEM":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(M(t.payload))});case"UN_SORT":return Object(x.a)(Object(x.a)({},e),{},{balls:Object(S.a)(_(t.payload))});default:return e}},N=Object(y.a)(R);l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(h.a,{store:N,children:Object(O.jsx)(f,{})})}),document.getElementById("root")),I()}},[[35,1,2]]]);
//# sourceMappingURL=main.2c4b6115.chunk.js.map