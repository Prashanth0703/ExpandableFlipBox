(this["webpackJsonpexpandable-flip-box"]=this["webpackJsonpexpandable-flip-box"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),o=n(8),r=n.n(o),c=(n(21),n(22),n(23),n(12)),a=(n(24),n(14)),m=n.n(a),d=n(13),l=n(31),u=n(32),p=n(1);var h=function(e){return Object(p.jsxs)(l.a,Object(d.a)(Object(d.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(p.jsx)(l.a.Header,{closeButton:!0,children:Object(p.jsx)(l.a.Title,{id:"contained-modal-title-vcenter",children:"Comments"})}),Object(p.jsx)(l.a.Body,{children:e.comments.map((function(e,t){return Object(p.jsx)("div",{className:"comment-list",children:Object(p.jsxs)("p",{children:[e.comment,Object(p.jsx)("br",{}),"Created by: ",e.created_by]})},e.id)}))}),Object(p.jsx)(l.a.Footer,{children:Object(p.jsx)(u.a,{onClick:e.onHide,children:"Close"})})]}))},b=function(e){var t=Object(s.useState)(!1),n=Object(c.a)(t,2),o=n[0],r=n[1],a=i.a.useState(!1),d=Object(c.a)(a,2),l=d[0],b=d[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(m.a,{isFlipped:o,flipDirection:"horizontal",children:[Object(p.jsx)("div",{className:"front",onMouseOver:function(){return r(!0)},children:Object(p.jsx)("img",{className:"card-image",src:e.value.img})}),Object(p.jsxs)("div",{className:"back",onMouseOut:function(){return r(!1)},children:[Object(p.jsx)("h4",{className:"card-title",children:e.value.title}),Object(p.jsx)("p",{id:"des",children:e.value.des}),Object(p.jsx)("div",{className:"com-btn",children:Object(p.jsx)(u.a,{id:"com-btn",variant:"primary",onClick:function(){return b(!0)},onMouseOver:function(){return r(!0)},children:"Comments"})}),Object(p.jsx)(h,{show:l,onHide:function(){return b(!1)},comments:e.value.comments})]})]})})};var y=function(){var e=[{id:1,title:"Title 1",des:"Description 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:"https://picsum.photos/id/122/200/300",comments:[{id:1,comment:"Comment 1 of card 1",created_by:"user1"},{id:2,comment:"Comment 2 of card 1",created_by:"user2"},{id:3,comment:"Comment 3 of card 1",created_by:"user3"},{id:4,comment:"Comment 4 of card 1",created_by:"user4"}]},{id:2,title:"Title 2",des:"Description 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:"https://picsum.photos/id/29/200/300",comments:[{id:1,comment:"Comment 1 of card 2",created_by:"user1"},{id:2,comment:"Comment 2 of card 2",created_by:"user2"},{id:3,comment:"Comment 3 of card 2",created_by:"user3"},{id:4,comment:"Comment 4 of card 2",created_by:"user4"}]},{id:3,title:"Title 3",des:"Description 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:"https://picsum.photos/id/35/200/300",comments:[{id:1,comment:"Comment 1 of card 3",created_by:"user1"},{id:2,comment:"Comment 2 of card 3",created_by:"user2"},{id:3,comment:"Comment 3 of card 3",created_by:"user3"},{id:4,comment:"Comment 4 of card 3",created_by:"user4"}]},{id:4,title:"Title 4",des:"Description 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:"https://picsum.photos/id/41/200/300",comments:[{id:1,comment:"Comment 1 of card 4",created_by:"user1"},{id:2,comment:"Comment 2 of card 4",created_by:"user2"},{id:3,comment:"Comment 3 of card 4",created_by:"user3"},{id:4,comment:"Comment 4 of card 4",created_by:"user4"}]}];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{class:"row",children:[e.map((function(e,t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 column",children:Object(p.jsx)(b,{value:e},e.id)})})})),e.map((function(e,t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 column",children:Object(p.jsx)(b,{value:e},e.id)})})})),e.map((function(e,t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 column",children:Object(p.jsx)(b,{value:e},e.id)})})}))]})})};var j=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(y,{})})};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5cabe264.chunk.js.map