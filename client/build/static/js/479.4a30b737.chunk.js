"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[479],{295:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(2932),s=n(7022),a=n(8820),o=n(1087),i=n(4427),l=n(184),c=function(e){var r=e.title;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:r}),(0,l.jsx)(t.Z,{className:"fixed-top px-0 shadow-sm ",children:(0,l.jsx)(s.Z,{fluid:!0,children:(0,l.jsxs)(t.Z.Brand,{children:[(0,l.jsx)("button",{className:"icon-nav m-0 h5 btn btn-link",children:(0,l.jsx)(a.n5H,{})}),(0,l.jsx)(o.rU,{to:"/",children:(0,l.jsx)("img",{className:"nav-logo mx-2",src:i,alt:"logo"})})]})})})]})},u=function(e){var r=e.children,n=e.title;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{title:n}),r]})}},2654:function(e,r,n){n.d(r,{YA:function(){return l},gL:function(){return m},l4:function(){return c},qQ:function(){return d},zN:function(){return u}});var t=n(4165),s=n(5861),a=n(4948),o=n(6789),i=n(7218).E.injectEndpoints({endpoints:function(e){return{register:e.mutation({query:function(e){return{url:"auth/register",method:"POST",body:e}}}),login:e.mutation({query:function(e){return{url:"auth/login",method:"POST",body:e}},onQueryStarted:function(e,r){return(0,s.Z)((0,t.Z)().mark((function e(){var n,s,a,i,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.queryFulfilled,s=r.dispatch,e.prev=1,e.next=4,n;case 4:l=e.sent,s((0,o.R9)(null===(a=l.data)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.accessToken)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}),forgotPassword:e.mutation({query:function(e){return{url:"auth/forgotPassword",method:"POST",body:e}}}),verifyEmail:e.mutation({query:function(e){var r=e.email,n=e.otp;return{url:"auth/verifyEmail?otp=".concat(n),method:"POST",body:{email:r}}}}),resetPassword:e.mutation({query:function(e){var r=e.password,n=e.email,t=e.otp;return{url:"auth/resetPassword?otp=".concat(t),method:"POST",body:{password:r,email:n}}},onQueryStarted:function(e,r){return(0,s.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.queryFulfilled,r.dispatch,e.prev=1,e.next=4,n;case 4:e.sent,a.Z.ResetOtp(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}})}}}),l=i.useLoginMutation,c=i.useRegisterMutation,u=i.useForgotPasswordMutation,d=i.useVerifyEmailMutation,m=i.useResetPasswordMutation},5479:function(e,r,n){n.r(r);var t=n(9439),s=n(2791),a=n(9743),o=n(2677),i=n(9140),l=n(3855),c=n(4849),u=n(1134),d=n(4695),m=n(9230),h=n(8007),f=n(7689),p=n(1087),x=n(5048),j=n(2654),g=n(295),v=n(184);r.default=function(){var e=(0,j.YA)(),r=(0,t.Z)(e,2),n=r[0],w=r[1].isLoading,b=(0,m.$G)().t,Z=(0,f.s0)(),y=(0,x.v9)((function(e){return e.authReducer})).accessToken,N=(0,u.cI)({mode:"onChange",defaultValues:{email:"devoloper.sujon@gmail.com",password:"pass1234@"},resolver:(0,d.X)(h.Ry({email:h.Z_().required(b("email number is required")).email(b("invalid email address")),password:h.Z_().required(b("password is required.")).min(8,b("password must be 8 digits long"))}))}),P=N.control,S=N.handleSubmit,k=N.reset,q=N.formState.errors;return(0,s.useEffect)((function(){y&&Z("/")}),[y]),(0,v.jsx)(g.Z,{children:(0,v.jsx)("div",{className:"auth-wrapper mt-5",children:(0,v.jsx)("div",{className:"auth-content",children:(0,v.jsx)("div",{className:"auth-wrapper",children:(0,v.jsx)("div",{className:"auth-content",children:(0,v.jsx)(a.Z,{className:"justify-content-center",children:(0,v.jsx)(o.Z,{xl:8,className:"center-screen",children:(0,v.jsx)(i.Z,{className:"w-100",children:(0,v.jsxs)(i.Z.Body,{children:[(0,v.jsx)("h5",{children:"Sign In"}),(0,v.jsx)("br",{}),(0,v.jsxs)(l.Z,{onSubmit:S((function(e){n(e)})),onReset:k,children:[(0,v.jsxs)(l.Z.Group,{className:"mb-3",controlId:"email",children:[(0,v.jsx)(l.Z.Label,{children:"Email"}),(0,v.jsx)(u.Qr,{control:P,name:"email",render:function(e){var r=e.field,n=r.onChange,t=(r.onBlur,r.value),s=r.ref;return(0,v.jsx)(l.Z.Control,{onChange:n,value:t,ref:s,isInvalid:q.email,placeholder:"Email",type:"email"})}}),q.email&&(0,v.jsx)(l.Z.Text,{className:"text-danger",children:q.email.message})]}),(0,v.jsxs)(l.Z.Group,{className:"mb-3",controlId:"Password",children:[(0,v.jsx)(l.Z.Label,{children:"Password"}),(0,v.jsx)(u.Qr,{control:P,name:"password",render:function(e){var r=e.field,n=r.onChange,t=(r.onBlur,r.value),s=r.ref;return(0,v.jsx)(l.Z.Control,{onChange:n,value:t,ref:s,isInvalid:q.password,placeholder:"Password",type:"password"})}}),q.password&&(0,v.jsx)(l.Z.Text,{className:"text-danger",children:q.password.message})]}),(0,v.jsx)("div",{className:"d-grid",children:(0,v.jsx)("button",{className:"btn btn-primary btn-block login-btn mt-2",type:"submit",children:w?(0,v.jsx)(c.Z,{size:"sm",color:"light"}):b("Sign in")})})]}),(0,v.jsxs)("div",{className:"text-center w-100 mt-3",children:[(0,v.jsx)(p.rU,{className:"text-center animated fadeInUp",to:"/register",children:"Sign Up"}),(0,v.jsx)("br",{}),(0,v.jsx)(p.rU,{className:"text-center animated fadeInUp",to:"/forgot-password",children:"Forget Password"})]})]})})})})})})})})})}},4427:function(e,r,n){e.exports=n.p+"static/media/logo.163d4d7f9d976c3e182c.png"}}]);
//# sourceMappingURL=479.4a30b737.chunk.js.map