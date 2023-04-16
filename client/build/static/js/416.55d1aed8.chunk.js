"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[416],{5940:function(e,s,r){r.d(s,{EL:function(){return o},JS:function(){return l},_j:function(){return u},bt:function(){return c}});var t=r(4165),n=r(5861),a=r(7218),i=a.E.injectEndpoints({endpoints:function(e){return{scholarshipList:e.query({query:function(){return{url:"scholarship/scholarshipList",method:"GET"}}}),scholarshipCreate:e.mutation({query:function(e){return{url:"scholarship/scholarshipCreate",method:"POST",body:e}},onQueryStarted:function(e,s){return(0,n.Z)((0,t.Z)().mark((function e(){var r,n,i,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.dispatch,n=s.queryFulfilled,e.prev=1,e.next=4,n;case 4:i=e.sent,c=i.data,r(a.E.util.updateQueryData("scholarshipList",void 0,(function(e){e.data.push(c.data)}))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),scholarshipUpdate:e.mutation({query:function(e){var s=e.id,r=e.postBody;return{url:"scholarship/scholarshipUpdate/".concat(s),method:"PATCH",body:r}},onQueryStarted:function(e,s){return(0,n.Z)((0,t.Z)().mark((function r(){var n,i,c,o,u,l;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.id,i=e.postBody,c=s.dispatch,o=s.queryFulfilled,r.prev=2,r.next=5,o;case 5:u=r.sent,l=u.data,c(a.E.util.updateQueryData("scholarshipList",void 0,(function(e){var s,r=e.data.findIndex((function(e){return e.id===n}));e.data[r].description=i.description,e.data[r].scholarshipType=i.scholarshipType,e.data[r].status=null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.status,e.data[r].studentID=i.studentID,e.data[r].subject=i.subject}))),r.next=12;break;case 10:r.prev=10,r.t0=r.catch(2);case 12:case"end":return r.stop()}}),r,null,[[2,10]])})))()}}),scholarshipDelete:e.mutation({query:function(e){return{url:"scholarship/scholarshipDelete/".concat(e),method:"DELETE"}},onQueryStarted:function(e,s){return(0,n.Z)((0,t.Z)().mark((function r(){var n,i,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=s.dispatch,i=s.queryFulfilled,c=n(a.E.util.updateQueryData("scholarshipList",void 0,(function(s){s.data=s.data.filter((function(s){return s.id!==e}))}))),r.prev=2,r.next=5,i;case 5:r.next=10;break;case 7:r.prev=7,r.t0=r.catch(2),c.undo();case 10:case"end":return r.stop()}}),r,null,[[2,7]])})))()}})}}}),c=i.useScholarshipCreateMutation,o=i.useScholarshipListQuery,u=i.useScholarshipUpdateMutation,l=i.useScholarshipDeleteMutation},3416:function(e,s,r){r.r(s);var t=r(9439),n=r(2791),a=r(7689),i=r(7022),c=r(9140),o=r(9743),u=r(2677),l=r(5630),h=r(3360),d=r(4849),p=r(9230),f=r(1134),x=r(4695),j=r(8007),v=r(1724),m=r(5940),Z=r(184);s.default=function(){var e=(0,n.useState)(null),s=(0,t.Z)(e,2),r=s[0],y=s[1],b=(0,n.useState)({subject:"",scholarshipType:"",description:""}),S=(0,t.Z)(b,2),g=S[0],T=S[1],C=(0,p.$G)().t,E=(0,a.s0)(),L=(0,m.EL)().data,q=(0,m.bt)(),w=(0,t.Z)(q,2),k=w[0],I=w[1],Q=I.isLoading,D=I.isSuccess,N=(0,m._j)(),B=(0,t.Z)(N,2),_=B[0],z=B[1],F=z.isLoading,G=z.isSuccess;(0,n.useEffect)((function(){var e,s=new URLSearchParams(window.location.search).get("id");(null!==s&&y(s),r&&L)&&T(null===L||void 0===L||null===(e=L.data)||void 0===e?void 0:e.find((function(e){return e.id===r})))}),[r,L]);var R=(0,f.cI)({mode:"onChange",defaultValues:g,resolver:(0,x.X)(j.Ry({subject:j.Z_().required(C("subject is required")),scholarshipType:j.Z_().required(C("scholarship type is required")),description:j.Z_().required(C("description is required"))}))}),U=R.control,A=R.handleSubmit,H=R.reset,M=R.formState.errors;(0,n.useEffect)((function(){g&&H(g)}),[g]);return(0,n.useEffect)((function(){(D||G)&&E("/scholarship")}),[D,G]),(0,Z.jsx)(v.Z,{children:(0,Z.jsx)(i.Z,{children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(c.Z.Body,{children:(0,Z.jsxs)(o.Z,{children:[(0,Z.jsx)("h5",{children:C("".concat(r?"update scholarship":"save scholarship"))}),(0,Z.jsx)("hr",{className:"bg-light"}),(0,Z.jsx)(u.Z,{children:(0,Z.jsxs)(l.Z,{onSubmit:A((function(e){var s={subject:e.subject,scholarshipType:e.scholarshipType,description:e.description};r?_({id:r,postBody:s}):k(s)})),onReset:H,children:[(0,Z.jsxs)(o.Z,{class:!0,children:[(0,Z.jsx)(u.Z,{sm:6,children:(0,Z.jsxs)(l.Z.Group,{className:"mb-3",controlId:"subject",children:[(0,Z.jsx)(l.Z.Label,{children:C("subject")}),(0,Z.jsx)(f.Qr,{control:U,name:"subject",render:function(e){var s=e.field,r=s.onChange,t=(s.onBlur,s.value),n=s.ref;return(0,Z.jsx)(l.Z.Control,{onChange:r,defaultValue:t,ref:n,isInvalid:M.subject,placeholder:C("subject of the scholarship"),type:"text",size:"sm"})}}),M.subject&&(0,Z.jsx)(l.Z.Text,{className:"text-danger",children:M.subject.message})]})}),(0,Z.jsx)(u.Z,{sm:6,children:(0,Z.jsxs)(l.Z.Group,{className:"mb-3",controlId:"scholarshipType",children:[(0,Z.jsx)(l.Z.Label,{children:C("scholarship type")}),(0,Z.jsx)(f.Qr,{control:U,name:"scholarshipType",render:function(e){var s=e.field,r=s.onChange,t=(s.onBlur,s.value),n=s.ref;return(0,Z.jsxs)(l.Z.Select,{onChange:r,value:t,ref:n,isInvalid:M.status,placeholder:C("scholarship type of the scholarship"),type:"text",size:"sm",children:[(0,Z.jsx)("option",{value:"",children:C("choice scholarship")}),(0,Z.jsx)("option",{value:"FACS",children:C("FACS")}),(0,Z.jsx)("option",{value:"OTHERS",children:C("OTHERS")})]})}}),M.scholarshipType&&(0,Z.jsx)(l.Z.Text,{className:"text-danger",children:M.scholarshipType.message})]})}),(0,Z.jsx)(u.Z,{sm:12,children:(0,Z.jsxs)(l.Z.Group,{className:"mb-3",controlId:"description",children:[(0,Z.jsx)(l.Z.Label,{children:C("description")}),(0,Z.jsx)(f.Qr,{control:U,name:"description",render:function(e){var s=e.field,r=s.onChange,t=(s.onBlur,s.value),n=s.ref;return(0,Z.jsx)(l.Z.Control,{onChange:r,defaultValue:t,ref:n,isInvalid:M.description,placeholder:C("description registration of the scholarship"),as:"textarea",size:"sm"})}}),M.description&&(0,Z.jsx)(l.Z.Text,{className:"text-danger",children:M.description.message})]})})]}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(u.Z,{sm:4,children:(0,Z.jsx)(h.Z,{size:"sm",className:"mt-2",type:"submit",children:Q||F?(0,Z.jsx)(d.Z,{size:"sm",color:"light"}):C("save change")})})})]})})]})})})})})}}}]);
//# sourceMappingURL=416.55d1aed8.chunk.js.map