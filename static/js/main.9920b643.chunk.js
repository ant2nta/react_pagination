(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(7),n=t.n(c),r=t(5),i=t(1),l=t.n(i),s=(t(13),t(8)),o=t(4),j=t.n(o),u=t(0),d=l.a.memo((function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=Math.ceil(a/t);return Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:j()("page-item",{disabled:1===c}),children:Object(u.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:function(){return n(c-1)},children:"\xab"})}),Object(s.a)(new Array(r)).map((function(e,a){return Object(u.jsx)("li",{className:j()("page-item",{active:c===a+1}),children:Object(u.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#1",onClick:function(){return n(a+1)},children:a+1})},Math.random())})),Object(u.jsx)("li",{className:j()("page-item",{disabled:c===r}),children:Object(u.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:function(){return n(c+1)},children:"\xbb"})})]})}));var b=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),h=b.slice(0,5),p=function(){var e=Object(i.useState)(5),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],o=l[1],j=Object(i.useState)(h),p=Object(r.a)(j,2),m=p[0],O=p[1];Object(i.useEffect)((function(){for(var e=[],a=t*s,c=a-t;c<a;c+=1)e.push(b[c]);O(e)}),[s]);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Items with Pagination"}),Object(u.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items 1 - ").concat(t," of 42)")}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(u.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){var a=e.target.value;+a!==t&&(c(+a),o(1))},children:[Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"5",children:"5"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"20",children:"20"})]})}),Object(u.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(u.jsx)(d,{total:b.length,perPage:t,currentPage:s,onPageChange:function(e){e!==s&&o(e)}}),Object(u.jsx)("ul",{children:m.map((function(e){return e&&Object(u.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9920b643.chunk.js.map