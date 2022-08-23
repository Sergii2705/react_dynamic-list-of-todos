(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(5)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":c===e}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:t}),Object(o.jsx)("td",{className:"is-vcentered",children:n&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:"has-text-".concat(n?"success":"danger"),children:a})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye".concat(c===e?"-slash":"")})})})})]},t)}))})]})},j=function(e){var t=e.filteringBy,c=e.ChangeFiltering,s=e.query,a=e.ChangeQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!s.length&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){var t=e.selectedTodo,c=e.onCloseModal,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],d=a[1],r=t.id,j=t.title,u=t.completed,m=t.userId;return Object(l.useEffect)((function(){(function(e){return h("/users/".concat(e))})(m).then(d)}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(r)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:j}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[u?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(o.jsx)(b,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)("all"),i=Object(n.a)(a,2),d=i[0],m=i[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],N=x[1],p=Object(l.useState)(null),v=Object(n.a)(p,2),y=v[0],g=v[1],C=Object(l.useState)(!1),k=Object(n.a)(C,2),S=k[0],T=k[1];Object(l.useEffect)((function(){T(!0),h("/todos").then(s).finally((function(){return T(!1)}))}),[]);var w=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title,c=e.completed;return!!t.includes(f.toLowerCase())&&("all"===d||c===("completed"===d))}))}),[c,d,f]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{filteringBy:d,ChangeFiltering:m,query:f,ChangeQuery:N})}),Object(o.jsx)("div",{className:"block",children:S?Object(o.jsx)(b,{}):Object(o.jsx)(r,{todos:w,selectedTodo:y,onSelectedTodo:g})})]})})}),y&&Object(o.jsx)(u,{selectedTodo:y,onCloseModal:g})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5272aeb0.chunk.js.map