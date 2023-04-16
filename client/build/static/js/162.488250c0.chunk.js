"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[162],{8462:function(e,s,n){n.d(s,{Hq:function(){return u},T6:function(){return d},TX:function(){return o},Tn:function(){return c}});var t=n(4165),r=n(5861),i=n(7218),a=i.E.injectEndpoints({endpoints:function(e){return{sessionList:e.query({query:function(){return{url:"session/sessionList",method:"GET"}}}),sessionCreate:e.mutation({query:function(e){return{url:"session/sessionCreate",method:"POST",body:e}},onQueryStarted:function(e,s){return(0,r.Z)((0,t.Z)().mark((function e(){var n,r,a,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.dispatch,r=s.queryFulfilled,e.prev=1,e.next=4,r;case 4:a=e.sent,o=a.data,n(i.E.util.updateQueryData("sessionList",void 0,(function(e){e.data.push(o.data)}))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),sessionUpdate:e.mutation({query:function(e){var s=e.id,n=e.postBody;return{url:"session/sessionUpdate/".concat(s),method:"PATCH",body:n}},onQueryStarted:function(e,s){return(0,r.Z)((0,t.Z)().mark((function n(){var r,a,o,u,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,e.postBody,a=s.dispatch,o=s.queryFulfilled,n.prev=2,n.next=5,o;case 5:u=n.sent,c=u.data,a(i.E.util.updateQueryData("sessionList",void 0,(function(e){var s,n,t=e.data.findIndex((function(e){return e.id===r}));e.data[t].sessionName=null===c||void 0===c||null===(s=c.data)||void 0===s?void 0:s.sessionName,e.data[t].sessionYear=null===c||void 0===c||null===(n=c.data)||void 0===n?void 0:n.sessionYear}))),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(2);case 12:case"end":return n.stop()}}),n,null,[[2,10]])})))()}}),sessionDelete:e.mutation({query:function(e){return{url:"session/sessionDelete/".concat(e),method:"DELETE"}},onQueryStarted:function(e,s){return(0,r.Z)((0,t.Z)().mark((function n(){var r,a,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.dispatch,a=s.queryFulfilled,o=r(i.E.util.updateQueryData("sessionList",void 0,(function(s){s.data=s.data.filter((function(s){return s.id!==e}))}))),n.prev=2,n.next=5,a;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),o.undo();case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()}})}}}),o=a.useSessionCreateMutation,u=a.useSessionListQuery,c=a.useSessionUpdateMutation,d=a.useSessionDeleteMutation},2162:function(e,s,n){n.r(s);var t=n(9439),r=n(2791),i=n(7689),a=n(7022),o=n(9140),u=n(9743),c=n(2677),d=n(5630),l=n(3360),f=n(4849),h=n(9230),m=n(1134),p=n(4695),v=n(8007),x=n(1724),Z=n(8462),j=n(1239),y=n(184);s.default=function(){var e=(0,r.useState)(null),s=(0,t.Z)(e,2),n=s[0],g=s[1],N=(0,r.useState)({sessionName:"",sessionYear:(0,j.p6)(new Date)}),b=(0,t.Z)(N,2),S=b[0],Y=b[1],w=(0,h.$G)().t,q=(0,i.s0)(),C=(0,Z.Hq)().data,T=(0,Z.TX)(),E=(0,t.Z)(T,2),L=E[0],D=E[1],k=D.isLoading,Q=D.isSuccess,M=(0,Z.Tn)(),B=(0,t.Z)(M,2),I=B[0],F=B[1],z=F.isLoading,G=F.isSuccess;(0,r.useEffect)((function(){var e,s=new URLSearchParams(window.location.search).get("id");(null!==s&&g(s),n&&C)&&Y(null===C||void 0===C||null===(e=C.data)||void 0===e?void 0:e.find((function(e){return e.id===n})))}),[n,C]);var P=(0,m.cI)({mode:"onChange",defaultValues:S,resolver:(0,p.X)(v.Ry({sessionName:v.Z_().required(w("session name is required")),sessionYear:v.hT().required(w("courses registration deadline is required"))}))}),U=P.control,V=P.handleSubmit,H=P.reset,R=(P.watch,P.setValue,P.formState.errors);(0,r.useEffect)((function(){S&&H(S)}),[S]);return(0,r.useEffect)((function(){(Q||G)&&q("/elective-courses")}),[Q,G]),(0,y.jsx)(x.Z,{children:(0,y.jsx)(a.Z,{children:(0,y.jsx)(o.Z,{children:(0,y.jsx)(o.Z.Body,{children:(0,y.jsxs)(u.Z,{children:[(0,y.jsx)("h5",{children:w("".concat(n?"update session":"save session"))}),(0,y.jsx)("hr",{className:"bg-light"}),(0,y.jsx)(c.Z,{children:(0,y.jsxs)(d.Z,{onSubmit:V((function(e){var s={sessionName:e.sessionName,sessionYear:e.sessionYear};n?I({id:n,postBody:s}):L(s)})),onReset:H,children:[(0,y.jsxs)(u.Z,{class:!0,children:[(0,y.jsx)(c.Z,{sm:4,children:(0,y.jsxs)(d.Z.Group,{className:"mb-3",controlId:"sessionName",children:[(0,y.jsx)(d.Z.Label,{children:w("session name")}),(0,y.jsx)(m.Qr,{control:U,name:"sessionName",render:function(e){var s=e.field,n=s.onChange,t=(s.onBlur,s.value),r=s.ref;return(0,y.jsx)(d.Z.Control,{onChange:n,defaultValue:t,ref:r,isInvalid:R.sessionName,placeholder:w("session name of the session"),type:"text",size:"sm"})}}),R.sessionName&&(0,y.jsx)(d.Z.Text,{className:"text-danger",children:R.sessionName.message})]})}),(0,y.jsx)(c.Z,{sm:4,children:(0,y.jsxs)(d.Z.Group,{className:"mb-3",controlId:"sessionYear",children:[(0,y.jsx)(d.Z.Label,{children:w("session year")}),(0,y.jsx)(m.Qr,{control:U,name:"sessionYear",render:function(e){var s=e.field,n=s.onChange,t=(s.onBlur,s.value),r=s.ref;return(0,y.jsx)(d.Z.Control,{onChange:n,defaultValue:t,ref:r,isInvalid:R.sessionYear,type:"date",size:"sm"})}}),R.sessionYear&&(0,y.jsx)(d.Z.Text,{className:"text-danger",children:R.sessionYear.message})]})})]}),(0,y.jsx)(u.Z,{children:(0,y.jsx)(c.Z,{sm:4,children:(0,y.jsx)(l.Z,{size:"sm",className:"mt-2",type:"submit",children:k||z?(0,y.jsx)(f.Z,{size:"sm",color:"light"}):w("save change")})})})]})})]})})})})})}},1239:function(e,s,n){n.d(s,{p6:function(){return a}});n(2791);var t=n(6431),r=n.n(t),i=n(184);function a(e){var s=new Date(e),n=""+(s.getMonth()+1),t=""+s.getDate(),r=s.getFullYear();return n.length<2&&(n="0"+n),t.length<2&&(t="0"+t),[r,n,t].join("-")}s.ZP=function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{format:"D MMM YYYY",withTitle:!0,children:e})," ",(0,i.jsx)("br",{})]})}}}]);
//# sourceMappingURL=162.488250c0.chunk.js.map