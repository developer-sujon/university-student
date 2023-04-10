"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[414],{916:function(e,t,n){n.d(t,{op:function(){return i},sW:function(){return l},tb:function(){return d},wS:function(){return o}});var a=n(4165),r=n(5861),s=n(7218),u=s.E.injectEndpoints({endpoints:function(e){return{leaveList:e.query({query:function(){return{url:"leave/leaveList",method:"GET"}}}),leaveCreate:e.mutation({query:function(e){return{url:"leave/leaveCreate",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,r.Z)((0,a.Z)().mark((function e(){var n,r,u,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,r=t.queryFulfilled,e.prev=1,e.next=4,r;case 4:u=e.sent,i=u.data,n(s.E.util.updateQueryData("leaveList",void 0,(function(e){e.data.push(i.data)}))),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}),leaveUpdate:e.mutation({query:function(e){var t=e.id,n=e.postBody;return{url:"leave/leaveUpdate/".concat(t),method:"PATCH",body:n}},onQueryStarted:function(e,t){return(0,r.Z)((0,a.Z)().mark((function n(){var r,u,i,o,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,u=e.postBody,i=t.dispatch,o=t.queryFulfilled,d=i(s.E.util.updateQueryData("leaveList",void 0,(function(e){var t=e.data.findIndex((function(e){return e.id===r}));e.data[t].title=u.title,e.data[t].status=u.status,e.data[t].dueDate=u.dueDate,e.data[t].descriptions=u.descriptions}))),n.prev=3,n.next=6,o;case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(3),d.undo();case 11:case"end":return n.stop()}}),n,null,[[3,8]])})))()}}),leaveDelete:e.mutation({query:function(e){return{url:"leave/leaveDelete/".concat(e),method:"DELETE"}},onQueryStarted:function(e,t){return(0,r.Z)((0,a.Z)().mark((function n(){var r,u,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.dispatch,u=t.queryFulfilled,i=r(s.E.util.updateQueryData("leaveList",void 0,(function(t){t.data=t.data.filter((function(t){return t.id!==e}))}))),n.prev=2,n.next=5,u;case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),i.undo();case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()}})}}}),i=u.useLeaveCreateMutation,o=u.useLeaveListQuery,d=u.useLeaveUpdateMutation,l=u.useLeaveDeleteMutation},7414:function(e,t,n){n.r(t);var a=n(9439),r=n(2791),s=n(7689),u=n(7022),i=n(9140),o=n(9743),d=n(2677),l=n(3855),c=n(3360),f=n(4849),h=n(9230),v=n(1134),x=n(4695),m=n(8007),j=n(9826),p=n(916),Z=n(1239),b=n(184);t.default=function(){var e=(0,r.useState)(null),t=(0,a.Z)(e,2),n=t[0],D=t[1],g=(0,r.useState)({startDate:(0,Z.p6)(new Date),endDate:(0,Z.p6)((new Date).setDate((new Date).getDate()+1)),duration:1,subject:"",reason:""}),y=(0,a.Z)(g,2),C=y[0],L=y[1],w=(0,h.$G)().t,q=(0,s.s0)(),S=(0,p.wS)().data,E=(0,p.op)(),I=(0,a.Z)(E,2),N=I[0],Q=I[1],T=Q.isLoading,k=Q.isSuccess,B=(0,p.tb)(),z=(0,a.Z)(B,2),G=z[0],M=z[1],V=M.isLoading,F=M.isSuccess;(0,r.useEffect)((function(){var e,t=new URLSearchParams(window.location.search).get("id");(null!==t&&D(t),n&&S)&&L(null===S||void 0===S||null===(e=S.data)||void 0===e?void 0:e.find((function(e){return e.id===n})))}),[n,S]);var Y=(0,v.cI)({mode:"onChange",defaultValues:C,resolver:(0,x.X)(m.Ry({startDate:m.hT().required(w("start date is required")),endDate:m.hT().required(w("end date is required")).min(m.iH("startDate"),w("end date can't be before start date")),duration:m.Rx().required(w("duration date is required")).min(1,w("duration min 1")),subject:m.Z_().required(w("subject is required")),reason:m.Z_().required(w("reason is required"))}))}),P=Y.control,R=Y.handleSubmit,U=Y.reset,_=(Y.watch,Y.setValue,Y.formState.errors);(0,r.useEffect)((function(){C&&U(C)}),[C]);return(0,r.useEffect)((function(){(k||F)&&q("/leave")}),[k,F]),(0,b.jsx)(j.Z,{children:(0,b.jsx)(u.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(i.Z.Body,{children:(0,b.jsxs)(o.Z,{children:[(0,b.jsx)("h5",{children:w("".concat(n?"update leave":"save leave"))}),(0,b.jsx)("hr",{className:"bg-light"}),(0,b.jsx)(d.Z,{children:(0,b.jsxs)(l.Z,{onSubmit:R((function(e){var t={startDate:e.startDate,endDate:e.endDate,duration:e.duration,subject:e.subject,reason:e.reason};n?G({id:n,postBody:t}):N(t)})),onReset:U,children:[(0,b.jsxs)(o.Z,{class:!0,children:[(0,b.jsx)(d.Z,{sm:4,children:(0,b.jsxs)(l.Z.Group,{className:"mb-3",controlId:"startDate",children:[(0,b.jsx)(l.Z.Label,{children:w("start date")}),(0,b.jsx)(v.Qr,{control:P,name:"startDate",render:function(e){var t=e.field,n=t.onChange,a=(t.onBlur,t.value),r=t.ref;return(0,b.jsx)(l.Z.Control,{onChange:n,defaultValue:a,ref:r,isInvalid:_.startDate,type:"date",size:"sm"})}}),_.startDate&&(0,b.jsx)(l.Z.Text,{className:"text-danger",children:_.startDate.message})]})}),(0,b.jsx)(d.Z,{sm:4,children:(0,b.jsxs)(l.Z.Group,{className:"mb-3",controlId:"endDate",children:[(0,b.jsx)(l.Z.Label,{children:w("end date")}),(0,b.jsx)(v.Qr,{control:P,name:"endDate",render:function(e){var t=e.field,n=t.onChange,a=(t.onBlur,t.value),r=t.ref;return(0,b.jsx)(l.Z.Control,{onChange:n,defaultValue:a,ref:r,isInvalid:_.endDate,type:"date",size:"sm"})}}),_.endDate&&(0,b.jsx)(l.Z.Text,{className:"text-danger",children:_.endDate.message})]})}),(0,b.jsx)(d.Z,{sm:4,children:(0,b.jsxs)(l.Z.Group,{className:"mb-3",controlId:"duration",children:[(0,b.jsx)(l.Z.Label,{children:w("duration")}),(0,b.jsx)(v.Qr,{control:P,name:"duration",render:function(e){var t=e.field,n=t.onChange,a=(t.onBlur,t.value),r=t.ref;return(0,b.jsx)(l.Z.Control,{onChange:n,defaultValue:a,ref:r,isInvalid:_.duration,placeholder:w("duration of the Leave"),type:"number",min:"1",size:"sm"})}}),_.duration&&(0,b.jsx)(l.Z.Text,{className:"text-danger",children:_.duration.message})]})}),(0,b.jsx)(d.Z,{sm:12,children:(0,b.jsxs)(l.Z.Group,{className:"mb-3",controlId:"subject",children:[(0,b.jsx)(l.Z.Label,{children:w("subject")}),(0,b.jsx)(v.Qr,{control:P,name:"subject",render:function(e){var t=e.field,n=t.onChange,a=(t.onBlur,t.value),r=t.ref;return(0,b.jsx)(l.Z.Control,{onChange:n,defaultValue:a,ref:r,isInvalid:_.subject,placeholder:w("subject of the leave"),type:"text",size:"sm"})}}),_.subject&&(0,b.jsx)(l.Z.Text,{className:"text-danger",children:_.subject.message})]})}),(0,b.jsx)(d.Z,{sm:12,children:(0,b.jsxs)(l.Z.Group,{className:"mb-3",controlId:"reason",children:[(0,b.jsx)(l.Z.Label,{children:w("reason")}),(0,b.jsx)(v.Qr,{control:P,name:"reason",render:function(e){var t=e.field,n=t.onChange,a=(t.onBlur,t.value),r=t.ref;return(0,b.jsx)(l.Z.Control,{onChange:n,defaultValue:a,ref:r,isInvalid:_.reason,placeholder:w("reason of the leave"),type:"text",size:"sm",as:"textarea"})}}),_.reason&&(0,b.jsx)(l.Z.Text,{className:"text-danger",children:_.reason.message})]})})]}),(0,b.jsx)(o.Z,{children:(0,b.jsx)(d.Z,{sm:4,children:(0,b.jsx)(c.Z,{size:"sm",className:"mt-2",type:"submit",children:T||V?(0,b.jsx)(f.Z,{size:"sm",color:"light"}):w("save change")})})})]})})]})})})})})}},1239:function(e,t,n){n.d(t,{p6:function(){return u}});n(2791);var a=n(6431),r=n.n(a),s=n(184);function u(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[r,n,a].join("-")}t.ZP=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{format:"D MMM YYYY",withTitle:!0,children:e})," ",(0,s.jsx)("br",{})]})}}}]);
//# sourceMappingURL=414.fbddc410.chunk.js.map