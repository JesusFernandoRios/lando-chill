(this["webpackJsonplando-chill"]=this["webpackJsonplando-chill"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(1),i=n.n(a),s=n(47),o=n.n(s),r=(n(61),n(8)),j=n(20),h=n(12);n(62);function l(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("h1",{children:"Lando Chill"})}),Object(c.jsxs)("div",{className:"nav__items",children:[Object(c.jsx)("h3",{className:"menu__item",children:"Button"}),Object(c.jsx)("h3",{className:"menu__item",children:"Button"}),Object(c.jsx)("h3",{className:"menu__item",children:"Button"}),Object(c.jsx)("h3",{className:"menu__item",children:"Button"})]})]})}var b=n(27),u=n(43),d=n(52),m=n(51),O=(n(63),function(){Object(a.useRef)();var e=Object(b.e)(),t=e.size,n=e.viewport,i=t.width/n.width,s=Object(u.useSpring)((function(){return{scale:[1,1,1],position:[0,0,0],rotation:[0,0,0],config:{mass:3,friction:40,tension:800}}})),o=Object(h.a)(s,2),l=o[0],O=l.rotation,x=Object(j.a)(l,["rotation"]),f=o[1],p=Object(m.a)({onDrag:function(e){var t=Object(h.a)(e.offset,2),n=t[0],c=t[1];f({position:[n/i,-c/i,0],rotation:[c/i,n/i,0]})},onHover:function(e){var t=e.hovering;return f({scale:t?[1.2,1.2,1.2]:[1,1,1]})}});return Object(c.jsxs)(d.a.mesh,Object(r.a)(Object(r.a)(Object(r.a)({rotation:O},x),p()),{},{children:[Object(c.jsx)("dodecahedronBufferGeometry",{attach:"geometry"}),Object(c.jsx)("meshLambertMaterial",{attach:"material",emissive:"gray"})]}))});var x=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsxs)(b.a,{camera:{position:[0,0,7.5]},children:[Object(c.jsx)("spotLight",{intensity:1.2,position:[30,30,50],angle:.2,penumbra:1,castShadow:!0}),Object(c.jsx)(O,{})]})]})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.dff26f75.chunk.js.map