"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[64],{4792:function(n,r,e){e.d(r,{__:function(){return d},im:function(){return c},zx:function(){return s}});var t,i,o,a=e(168),u=e(6444),p=e(4149),c=u.ZP.div(t||(t=(0,a.Z)(["\n  width: 350px;\n"]))),s=u.ZP.button(i||(i=(0,a.Z)(["\n  display: block;\n  padding: 10px 16px;\n  background-color: ",";\n  border-radius: 15px;\n  border: 3px solid transparent;\n  font-size: 18px;\n  font-weight: 500;\n  color: ",";\n  transition: border 250ms linear;\n  margin: 26px auto 0;\n"])),p.z,p.Lr),d=u.ZP.p(o||(o=(0,a.Z)(["\n  margin-bottom: 12px;\n  font-weight: 400;\n  font-size: 18px;\n  color: ",";\n  border-bottom: 1px solid ",";\n"])),p.z,p.z)},4064:function(n,r,e){e.r(r),e.d(r,{default:function(){return tn}});var t,i,o,a,u,p,c,s,d,l,x,h,f,m=e(2791),Z=e(9434),g=e(5440),b=e(1413),w=e(5861),j=e(7757),v=e.n(j),y=e(5705),P={email:{name:"email",type:"text",label:"Email",placeholder:"Type your email"},phone:{name:"phone",type:"text",label:"Phone",placeholder:"Type your phone"}},z={email:"",phone:"+380"},k=e(6727),_=e(2008),S=k.Ry({email:k.Z_().matches(_.LD,"Enter a correct email").trim().required("Please enter your email"),phone:k.Z_().matches(_.Oj,"Enter a phone in a format +380000000000").trim().required("Please enter your phone number")}),q=e(208),D=e(1162),E=e(168),F=e(6444),I=e(4149),L=F.ZP.div(t||(t=(0,E.Z)(["\n  width: 350px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),O=F.ZP.p(i||(i=(0,E.Z)(["\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: ",";\n  margin-bottom: 24px;\n"])),I.z),C=e(4792),T=e(3329),$=function(){var n=(0,Z.I0)(),r=function(){var r=(0,w.Z)(v().mark((function r(e){var t,i,o;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=e.email,i=e.phone,o=i.slice(1),n((0,q.S)({email:t,phone:o}));case 3:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,T.jsxs)(L,{children:[(0,T.jsx)(O,{children:"In order to view the history of your orders, fill out the form."}),(0,T.jsx)(y.J9,{initialValues:(0,b.Z)({},z),validationSchema:S,validateOnBlur:!1,validateOnMount:!1,onSubmit:r,children:function(n){var r=n.errors,e=n.touched;return(0,T.jsxs)(y.l0,{autoComplete:"off",children:[(0,T.jsx)(D.Z,(0,b.Z)({errors:r,touched:e},P.email)),(0,T.jsx)(D.Z,(0,b.Z)({errors:r,touched:e},P.phone)),(0,T.jsx)(C.zx,{type:"submit",children:"Get history"})]})}})]})},B=e(6351),M=e(5629),U=F.ZP.li(o||(o=(0,E.Z)(["\n  width: 93%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 16px 16px 8px;\n  box-shadow: -1px 3px 22px -4px rgba(42, 42, 42, 0.63);\n  border-radius: 20px;\n  margin-bottom: 16px;\n  display: flex;\n"]))),V=F.ZP.div(a||(a=(0,E.Z)(["\n  flex-grow: 1;\n  padding: 5px;\n  max-width: 850px;\n  overflow-x: scroll;\n\n  &::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 3px;\n    height: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.5);\n    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  }\n"]))),A=F.ZP.ul(u||(u=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n\n  gap: 12px;\n"]))),G=F.ZP.li(p||(p=(0,E.Z)(["\n  min-width: 400px;\n  width: 400px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 0px 4px 0px rgba(42, 42, 42, 1);\n  border-radius: 10px;\n  gap: 12px;\n  overflow: hidden;\n"]))),H=F.ZP.div(c||(c=(0,E.Z)(["\n  width: 160px;\n"]))),J=F.ZP.div(s||(s=(0,E.Z)(["\n  width: 240px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),K=F.ZP.p(d||(d=(0,E.Z)(["\n  font-size: 19px;\n"]))),N=F.ZP.span(l||(l=(0,E.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n"]))),Q=F.ZP.p(x||(x=(0,E.Z)(["\n  font-size: 19px;\n  margin-bottom: 12px;\n"]))),R=F.ZP.p(h||(h=(0,E.Z)(["\n  font-size: 17px;\n  margin-bottom: 12px;\n"]))),W=e(1281),Y=function(n){return n.reduce((function(n,r){return r.quantity*r.price+n}),0)},X=function(n){var r=n.item.order;return(0,T.jsxs)(U,{children:[(0,T.jsx)(V,{children:(0,T.jsx)(A,{children:r.map((function(n,r){var e=n.imageUrl,t=n.name,i=n.price,o=n.quantity;return(0,T.jsxs)(G,{children:[(0,T.jsx)("img",{src:e||W,alt:t,width:215}),(0,T.jsxs)(H,{children:[(0,T.jsx)(Q,{children:t}),(0,T.jsxs)(R,{children:["Quantity: ",o]}),(0,T.jsxs)(K,{children:[i*o,"\u20b4"]})]})]},r)}))})}),(0,T.jsx)(J,{children:(0,T.jsxs)(K,{children:["Total price: ",(0,T.jsxs)(N,{children:[Y(r),"\u20b4"]})]})})]})},nn=F.ZP.ul(f||(f=(0,E.Z)(["\n  margin-top: 24px;\n"]))),rn=function(){var n=(0,Z.v9)(B.Du),r=(0,Z.v9)(B.Fp);return(0,T.jsxs)(T.Fragment,{children:[r&&(0,T.jsx)(M.Z,{}),!r&&(0,T.jsx)(nn,{children:n.map((function(n){return(0,T.jsx)(X,{item:n},n._id)}))})]})},en=e(5894),tn=function(){var n=(0,Z.I0)();return(0,m.useEffect)((function(){n((0,g.nU)())}),[n]),(0,T.jsxs)(en.W,{children:[(0,T.jsx)($,{}),(0,T.jsx)(rn,{})]})}},6351:function(n,r,e){e.d(r,{Du:function(){return o},Fp:function(){return a},KY:function(){return i},V:function(){return t}});var t=function(n){return n.currentShopId},i=function(n){return n.cart},o=function(n){return n.history},a=function(n){return n.isHistoryLoading}},1162:function(n,r,e){e.d(r,{Z:function(){return y}});var t,i,o,a,u,p=e(1413),c=e(4925),s=e(2791),d=e(5984),l=e(168),x=e(6444),h=e(5705),f=e(4149),m=x.ZP.label(t||(t=(0,l.Z)(["\n  display: block;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 4px;\n  color: #2a2a2a;\n"]))),Z=(0,x.ZP)(h.gN)(i||(i=(0,l.Z)(["\n  width: 100%;\n  padding-left: 12px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 18px;\n  border: 2px solid\n    ",";\n  border-radius: 20px;\n"])),(function(n){var r=n.name,e=n.errors,t=n.touched;return e[r]&&t[r]?f.S_:f.z})),g=(x.ZP.span(o||(o=(0,l.Z)(["\n  color: ",";\n  font-size: 16px;\n  margin-top: 8px;\n"])),f.S_),x.ZP.div(a||(a=(0,l.Z)(["\n  margin-bottom: 16px;\n"])))),b=x.ZP.p(u||(u=(0,l.Z)(["\n  color: ",";\n  font-size: 16px;\n  margin: 4px 2px 0;\n  width: auto;\n"])),f.S_),w=e(3329),j=function(n){var r=n.name;return(0,w.jsx)(h.Bc,{name:r,render:function(n){return(0,w.jsx)(b,{children:n})}})},v=["errors","touched","label","name"],y=function(n){var r=n.errors,e=n.touched,t=n.label,i=n.name,o=(0,c.Z)(n,v),a=(0,s.useMemo)((function(){return(0,d.x0)()}),[]);return(0,w.jsxs)(g,{children:[(0,w.jsx)(m,{htmlFor:a,children:t}),(0,w.jsx)(Z,(0,p.Z)({errors:r,touched:e,id:a,name:i},o)),(0,w.jsx)(j,{name:i})]})}},2008:function(n,r,e){e.d(r,{LD:function(){return i},Oj:function(){return o},cS:function(){return t}});var t=/^[a-zA-Z ]+$/,i=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,o=/^\+380\d{9}$/},1281:function(n,r,e){n.exports=e.p+"static/media/burger.be7404a69105197d91a1.jpeg"}}]);
//# sourceMappingURL=64.7479fab3.chunk.js.map