(this["webpackJsonpgcn-frontend-dev-task"]=this["webpackJsonpgcn-frontend-dev-task"]||[]).push([[0],{20:function(e,n,s){},23:function(e,n,s){},24:function(e,n,s){},28:function(e,n,s){},29:function(e,n,s){},43:function(e,n,s){},44:function(e,n,s){},45:function(e,n,s){"use strict";s.r(n);var t=s(2),c=s.n(t),a=s(11),i=s.n(a),l=(s(20),s(5)),r=s(15),o=s(7),j=(s(23),s(6)),d=(s(24),s(4)),b=s.p+"static/media/GCNLogoTxt.0a94b014.svg",u=s(0);var x=function(e){var n=e.expandNav;return Object(u.jsxs)("section",{className:"header",children:[Object(u.jsxs)("div",{className:"banner",children:[Object(u.jsx)("img",{src:b,className:"banner--logo",alt:"GCN Logo"}),Object(u.jsxs)("ul",{className:"banner--links",children:[Object(u.jsx)("li",{className:"banner--link-item",children:"Events"}),Object(u.jsx)("li",{className:"banner--link-item",children:"Club"}),Object(u.jsx)("li",{className:"banner--link-item",children:"Shop"}),Object(u.jsx)("li",{className:"banner--link-item last-item",children:"YouTube"})]})]}),Object(u.jsxs)("div",{className:"navBar",children:[Object(u.jsx)("button",{className:"navBar--menu",onClick:function(){"function"===typeof n&&n()},children:Object(u.jsx)(d.a,{icon:"bars"})}),Object(u.jsx)("a",{href:"https://www.globalcyclingnetwork.com/",className:"navBar--social",children:Object(u.jsx)(d.a,{icon:["fab","facebook"]})}),Object(u.jsx)("a",{href:"https://www.globalcyclingnetwork.com/",className:"navBar--social",children:Object(u.jsx)(d.a,{icon:["fab","twitter"]})}),Object(u.jsx)("a",{href:"https://www.globalcyclingnetwork.com/",className:"navBar--social last-item",children:Object(u.jsx)(d.a,{icon:["fab","instagram"]})})]})]})},h=s.p+"static/media/add-screenshot.21f84836.png";s(28);var O=function(){return Object(u.jsx)("section",{className:"ad",children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:h,className:"ad--screenshot",alt:"advertisement"})})})};s(29);var m=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Latest videos"}),Object(u.jsxs)("section",{className:"searchBar",children:[Object(u.jsxs)("div",{className:"searchBar--searchBox",children:[Object(u.jsx)("input",{type:"text",placeholder:"Search for videos",className:"searchBar--searchBox--input"}),Object(u.jsx)("button",{className:"searchBar--button",children:Object(u.jsx)(d.a,{icon:"search"})})]}),Object(u.jsxs)("select",{defaultValue:"0",className:"searchBar--dropdown",children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Or browse our videos"}),Object(u.jsx)("option",{children:"GCN Show"}),Object(u.jsx)("option",{children:"How To"}),Object(u.jsx)("option",{children:"Maintenance"}),Object(u.jsx)("option",{children:"Ask GCN"}),Object(u.jsx)("option",{children:"Training"}),Object(u.jsx)("option",{children:"Features"}),Object(u.jsx)("option",{children:"Top 10s"}),Object(u.jsx)("option",{children:"GCN Racing"})]})]})]})},v=s(12);s(43);var p=function(){var e=Object(t.useState)(),n=Object(j.a)(e,2),s=n[0],c=n[1];return Object(t.useEffect)((function(){fetch("./videos.json").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(u.jsx)("section",{className:"video--container",children:Object(u.jsx)("div",{className:"video--thumbnail",children:s?s.map((function(e){return Object(u.jsxs)("div",{className:"video",children:[Object(u.jsx)(v.a,{videoId:e._id}),Object(u.jsx)("p",{className:"video--title",children:e.title})]},e._id)})):"Loading..."})})};s(44);var f=function(e){var n=e.isNavExpanded,s=e.expandVideos,t=e.expandPresenters,c=e.isVideosExpanded,a=e.isPresentersExpanded,i=["GCN Show","How To","Maintenance","Ask GCN","Training","Features","Top 10s","GCN Racing","GCN Tech"].map((function(e){return Object(u.jsx)("li",{className:"nav--list--item expanded",children:e},e)})),l=["Conor Dunne","Danial Lloyd","James Lowsley-Williams","Jon Cannings","Manon Lloyd","Oliver Bridgewood","Simon Richardson","Tom Last"].map((function(e){return Object(u.jsx)("li",{className:"nav--list--item expanded",children:e},e)}));return Object(u.jsx)("nav",{className:"nav",children:Object(u.jsxs)("ul",{className:n?"nav--list--visible":"nav--list",children:[Object(u.jsx)("li",{className:"nav--list--item",children:"Home"}),Object(u.jsxs)("li",{className:"nav--list--item nav--list--item--plus",children:["Videos GCN",Object(u.jsx)("button",{className:"plus-button",onClick:function(){"function"===typeof s&&s()},children:Object(u.jsx)(d.a,{icon:"plus"})})]}),Object(u.jsx)("ul",{className:c?"nav--list--visible":"nav--list",children:i}),Object(u.jsxs)("li",{className:"nav--list--item nav--list--item--plus",children:["Presenters",Object(u.jsx)("button",{className:"plus-button",onClick:function(){"function"===typeof t&&t()},children:Object(u.jsx)(d.a,{icon:"plus"})})]}),Object(u.jsx)("ul",{className:a?"nav--list--visible":"nav--list",children:l})]})})};var N=function(){var e=Object(t.useState)(!1),n=Object(j.a)(e,2),s=n[0],c=n[1],a=Object(t.useState)(!1),i=Object(j.a)(a,2),l=i[0],r=i[1],o=Object(t.useState)(!1),d=Object(j.a)(o,2),b=d[0],h=d[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{expandNav:function(){c(!s)}}),Object(u.jsx)(O,{}),Object(u.jsx)(f,{isNavExpanded:s,isPresentersExpanded:b,isVideosExpanded:l,expandVideos:function(){r(!l)},expandPresenters:function(){h(!b)}}),Object(u.jsx)(m,{}),Object(u.jsx)(p,{})]})};l.b.add(r.a,o.a,o.c,o.b);var g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(N,{})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(n){var s=n.getCLS,t=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;s(e),t(e),c(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),w()}},[[45,1,2]]]);
//# sourceMappingURL=main.34ba2fb1.chunk.js.map