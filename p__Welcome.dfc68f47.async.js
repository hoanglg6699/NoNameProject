(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+QRC":function(_,D,a){"use strict";var d=a("E9nw"),g={"text/plain":"Text","text/html":"Url",default:"Text"},t="Copy to clipboard: #{key}, Enter";function Q(A){var O=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return A.replace(/#{\s*key\s*}/g,O)}function I(A,O){var T,ee,oe,Z,K,j,U=!1;O||(O={}),T=O.debug||!1;try{oe=d(),Z=document.createRange(),K=document.getSelection(),j=document.createElement("span"),j.textContent=A,j.style.all="unset",j.style.position="fixed",j.style.top=0,j.style.clip="rect(0, 0, 0, 0)",j.style.whiteSpace="pre",j.style.webkitUserSelect="text",j.style.MozUserSelect="text",j.style.msUserSelect="text",j.style.userSelect="text",j.addEventListener("copy",function(b){if(b.stopPropagation(),O.format)if(b.preventDefault(),typeof b.clipboardData=="undefined"){T&&console.warn("unable to use e.clipboardData"),T&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ae=g[O.format]||g.default;window.clipboardData.setData(ae,A)}else b.clipboardData.clearData(),b.clipboardData.setData(O.format,A);O.onCopy&&(b.preventDefault(),O.onCopy(b.clipboardData))}),document.body.appendChild(j),Z.selectNodeContents(j),K.addRange(Z);var H=document.execCommand("copy");if(!H)throw new Error("copy command was unsuccessful");U=!0}catch(b){T&&console.error("unable to copy using execCommand: ",b),T&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(O.format||"text",A),O.onCopy&&O.onCopy(window.clipboardData),U=!0}catch(ae){T&&console.error("unable to copy using clipboardData: ",ae),T&&console.error("falling back to prompt"),ee=Q("message"in O?O.message:t),window.prompt(ee,A)}}finally{K&&(typeof K.removeRange=="function"?K.removeRange(Z):K.removeAllRanges()),j&&document.body.removeChild(j),oe()}return U}_.exports=I},"/qDX":function(_,D,a){},"14J3":function(_,D,a){"use strict";var d=a("cIOH"),g=a.n(d),t=a("1GLa")},BMrR:function(_,D,a){"use strict";var d=a("qrJ5");D.a=d.a},E9nw:function(_,D){_.exports=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var d=document.activeElement,g=[],t=0;t<a.rangeCount;t++)g.push(a.getRangeAt(t));switch(d.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":d.blur();break;default:d=null;break}return a.removeAllRanges(),function(){a.type==="Caret"&&a.removeAllRanges(),a.rangeCount||g.forEach(function(Q){a.addRange(Q)}),d&&d.focus()}}},G3dp:function(_,D,a){"use strict";var d=a("q1tI"),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},t=g,Q=a("6VBw"),I=function(T,ee){return d.createElement(Q.a,Object.assign({},T,{ref:ee,icon:t}))};I.displayName="EditOutlined";var A=D.a=d.forwardRef(I)},IzEo:function(_,D,a){"use strict";var d=a("cIOH"),g=a.n(d),t=a("lnY3"),Q=a.n(t),I=a("Znn+"),A=a("14J3"),O=a("jCWc")},Ur6u:function(_,D,a){_.exports={pre:"pre___3fTUI"}},bx4M:function(_,D,a){"use strict";var d=a("rePB"),g=a("wx14"),t=a("q1tI"),Q=a("TSYQ"),I=a.n(Q),A=a("bT9E"),O=a("H84U"),T=function(y,u){var C={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(C[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(C[s[m]]=y[s[m]]);return C},ee=function(u){var C=u.prefixCls,s=u.className,m=u.hoverable,pe=m===void 0?!0:m,se=T(u,["prefixCls","className","hoverable"]);return t.createElement(O.a,null,function(ce){var ne=ce.getPrefixCls,te=ne("card",C),X=I()("".concat(te,"-grid"),s,Object(d.a)({},"".concat(te,"-grid-hoverable"),pe));return t.createElement("div",Object(g.a)({},se,{className:X}))})},oe=ee,Z=function(y,u){var C={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(C[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(C[s[m]]=y[s[m]]);return C},K=function(u){return t.createElement(O.a,null,function(C){var s=C.getPrefixCls,m=u.prefixCls,pe=u.className,se=u.avatar,ce=u.title,ne=u.description,te=Z(u,["prefixCls","className","avatar","title","description"]),X=s("card",m),fe=I()("".concat(X,"-meta"),pe),ve=se?t.createElement("div",{className:"".concat(X,"-meta-avatar")},se):null,de=ce?t.createElement("div",{className:"".concat(X,"-meta-title")},ce):null,Oe=ne?t.createElement("div",{className:"".concat(X,"-meta-description")},ne):null,be=de||Oe?t.createElement("div",{className:"".concat(X,"-meta-detail")},de,Oe):null;return t.createElement("div",Object(g.a)({},te,{className:fe}),ve,be)})},j=K,U=a("ZTPi"),H=a("BMrR"),b=a("kPKH"),ae=a("3Nzz"),Te=function(y,u){var C={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&u.indexOf(s)<0&&(C[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)u.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(C[s[m]]=y[s[m]]);return C};function we(y){var u=y.map(function(C,s){return t.createElement("li",{style:{width:"".concat(100/y.length,"%")},key:"action-".concat(s)},t.createElement("span",null,C))});return u}var De=function(u){var C,s,m=t.useContext(O.b),pe=m.getPrefixCls,se=m.direction,ce=t.useContext(ae.b),ne=function(je){var re;(re=u.onTabChange)===null||re===void 0||re.call(u,je)},te=function(){var je;return t.Children.forEach(u.children,function(re){re&&re.type&&re.type===oe&&(je=!0)}),je},X=u.prefixCls,fe=u.className,ve=u.extra,de=u.headStyle,Oe=de===void 0?{}:de,be=u.bodyStyle,Me=be===void 0?{}:be,xe=u.title,Re=u.loading,Ie=u.bordered,ze=Ie===void 0?!0:Ie,$e=u.size,Ce=u.type,Ae=u.cover,Se=u.actions,ye=u.tabList,h=u.children,Pe=u.activeTabKey,Ne=u.defaultActiveTabKey,He=u.tabBarExtraContent,Fe=u.hoverable,Ke=u.tabProps,Ge=Ke===void 0?{}:Ke,Je=Te(u,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),M=pe("card",X),ke=Me.padding===0||Me.padding==="0px"?{padding:24}:void 0,F=t.createElement("div",{className:"".concat(M,"-loading-block")}),_e=t.createElement("div",{className:"".concat(M,"-loading-content"),style:ke},t.createElement(H.a,{gutter:8},t.createElement(b.a,{span:22},F)),t.createElement(H.a,{gutter:8},t.createElement(b.a,{span:8},F),t.createElement(b.a,{span:15},F)),t.createElement(H.a,{gutter:8},t.createElement(b.a,{span:6},F),t.createElement(b.a,{span:18},F)),t.createElement(H.a,{gutter:8},t.createElement(b.a,{span:13},F),t.createElement(b.a,{span:9},F)),t.createElement(H.a,{gutter:8},t.createElement(b.a,{span:4},F),t.createElement(b.a,{span:3},F),t.createElement(b.a,{span:16},F))),me=Pe!==void 0,Qe=Object(g.a)(Object(g.a)({},Ge),(C={},Object(d.a)(C,me?"activeKey":"defaultActiveKey",me?Pe:Ne),Object(d.a)(C,"tabBarExtraContent",He),C)),Be,Ue=ye&&ye.length?t.createElement(U.a,Object(g.a)({size:"large"},Qe,{className:"".concat(M,"-head-tabs"),onChange:ne}),ye.map(function(Ee){return t.createElement(U.a.TabPane,{tab:Ee.tab,disabled:Ee.disabled,key:Ee.key})})):null;(xe||ve||Ue)&&(Be=t.createElement("div",{className:"".concat(M,"-head"),style:Oe},t.createElement("div",{className:"".concat(M,"-head-wrapper")},xe&&t.createElement("div",{className:"".concat(M,"-head-title")},xe),ve&&t.createElement("div",{className:"".concat(M,"-extra")},ve)),Ue));var Xe=Ae?t.createElement("div",{className:"".concat(M,"-cover")},Ae):null,Ye=t.createElement("div",{className:"".concat(M,"-body"),style:Me},Re?_e:h),Ve=Se&&Se.length?t.createElement("ul",{className:"".concat(M,"-actions")},we(Se)):null,Ze=Object(A.a)(Je,["onTabChange"]),We=$e||ce,qe=I()(M,(s={},Object(d.a)(s,"".concat(M,"-loading"),Re),Object(d.a)(s,"".concat(M,"-bordered"),ze),Object(d.a)(s,"".concat(M,"-hoverable"),Fe),Object(d.a)(s,"".concat(M,"-contain-grid"),te()),Object(d.a)(s,"".concat(M,"-contain-tabs"),ye&&ye.length),Object(d.a)(s,"".concat(M,"-").concat(We),We),Object(d.a)(s,"".concat(M,"-type-").concat(Ce),!!Ce),Object(d.a)(s,"".concat(M,"-rtl"),se==="rtl"),s),fe);return t.createElement("div",Object(g.a)({},Ze,{className:qe}),Be,Xe,Ye,Ve)};De.Grid=oe,De.Meta=j;var he=D.a=De},jCWc:function(_,D,a){"use strict";var d=a("cIOH"),g=a.n(d),t=a("1GLa")},kPKH:function(_,D,a){"use strict";var d=a("/kpp");D.a=d.a},lnY3:function(_,D,a){},paSq:function(_,D,a){"use strict";a.r(D);var d=a("IzEo"),g=a("bx4M"),t=a("nKUr"),Q=a.n(t),I=a("fOrg"),A=a("+KLJ"),O=a("tU7J"),T=a("wFql"),ee=a("q1tI"),oe=a.n(ee),Z=a("tMyG"),K=a("9kvl"),j=a("Ur6u"),U=a.n(j),H=function(ae){var Te=ae.children;return Object(t.jsx)("pre",{className:U.a.pre,children:Object(t.jsx)("code",{children:Object(t.jsx)(T.a.Text,{copyable:!0,children:Te})})})};D.default=function(){var b=Object(K.f)();return Object(t.jsx)(Z.a,{children:Object(t.jsxs)(g.a,{children:[Object(t.jsx)(A.a,{message:b.formatMessage({id:"pages.welcome.alertMessage",defaultMessage:"\u66F4\u5FEB\u66F4\u5F3A\u7684\u91CD\u578B\u7EC4\u4EF6\uFF0C\u5DF2\u7ECF\u53D1\u5E03\u3002"}),type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),Object(t.jsxs)(T.a.Text,{strong:!0,children:[Object(t.jsx)(K.a,{id:"pages.welcome.advancedComponent",defaultMessage:"\u9AD8\u7EA7\u8868\u683C"})," ",Object(t.jsx)("a",{href:"https://procomponents.ant.design/components/table",rel:"noopener noreferrer",target:"__blank",children:Object(t.jsx)(K.a,{id:"pages.welcome.link",defaultMessage:"\u6B22\u8FCE\u4F7F\u7528"})})]}),Object(t.jsx)(H,{children:"yarn add @ant-design/pro-table"}),Object(t.jsxs)(T.a.Text,{strong:!0,style:{marginBottom:12},children:[Object(t.jsx)(K.a,{id:"pages.welcome.advancedLayout",defaultMessage:"\u9AD8\u7EA7\u5E03\u5C40"})," ",Object(t.jsx)("a",{href:"https://procomponents.ant.design/components/layout",rel:"noopener noreferrer",target:"__blank",children:Object(t.jsx)(K.a,{id:"pages.welcome.link",defaultMessage:"\u6B22\u8FCE\u4F7F\u7528"})})]}),Object(t.jsx)(H,{children:"yarn add @ant-design/pro-layout"})]})})}},tU7J:function(_,D,a){"use strict";var d=a("cIOH"),g=a.n(d),t=a("/qDX"),Q=a.n(t),I=a("5Dmo"),A=a("5NDa")},wFql:function(_,D,a){"use strict";var d=a("wx14"),g=a("rePB"),t=a("q1tI"),Q=a("TSYQ"),I=a.n(Q),A=a("c+Xe"),O=a("H84U"),T=a("uaoM"),ee=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(i);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(i,e[n])&&(l[e[n]]=i[e[n]]);return l},oe=function(r,l){var e=r.prefixCls,n=r.component,o=n===void 0?"article":n,c=r.className,f=r["aria-label"],p=r.setContentRef,v=r.children,S=ee(r,["prefixCls","component","className","aria-label","setContentRef","children"]),E=l;return p&&(Object(T.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),E=Object(A.a)(l,p)),t.createElement(O.a,null,function(z){var N=z.getPrefixCls,Y=z.direction,q=o,W=N("typography",e),G=I()(W,Object(g.a)({},"".concat(W,"-rtl"),Y==="rtl"),c);return t.createElement(q,Object(d.a)({className:G,"aria-label":f,ref:E},S),v)})},Z=t.forwardRef(oe);Z.displayName="Typography";var K=Z,j=K,U=a("U8pU"),H=a("bT9E"),b=a("KQm4"),ae=a("1OyB"),Te=a("vuIU"),we=a("Ji7U"),De=a("LK+K"),he=a("Zm9Q"),y=a("+QRC"),u=a.n(y),C=a("G3dp"),s=a("bRQS"),m=a("lfch"),pe=a("6ner"),se=a("wEI+"),ce=a("YMnH"),ne=a("gDlH"),te=a("oHiP"),X=a("R3zJ"),fe=a("3S7+"),ve=a("ODXe"),de=a("4IlW"),Oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},be=Oe,Me=a("6VBw"),xe=function(r,l){return t.createElement(Me.a,Object.assign({},r,{ref:l,icon:be}))};xe.displayName="EnterOutlined";var Re=t.forwardRef(xe),Ie=a("whJP"),ze=function(r){var l=r.prefixCls,e=r["aria-label"],n=r.className,o=r.style,c=r.direction,f=r.maxLength,p=r.autoSize,v=p===void 0?!0:p,S=r.value,E=r.onSave,z=r.onCancel,N=t.useRef(),Y=t.useRef(!1),q=t.useRef(),W=t.useState(S),G=Object(ve.a)(W,2),ie=G[0],J=G[1];t.useEffect(function(){J(S)},[S]),t.useEffect(function(){if(N.current&&N.current.resizableTextArea){var w=N.current.resizableTextArea.textArea;w.focus();var P=w.value.length;w.setSelectionRange(P,P)}},[]);var ue=function(P){var B=P.target;J(B.value.replace(/[\n\r]/g,""))},ge=function(){Y.current=!0},x=function(){Y.current=!1},L=function(P){var B=P.keyCode;Y.current||(q.current=B)},R=function(){E(ie.trim())},k=function(P){var B=P.keyCode,le=P.ctrlKey,et=P.altKey,tt=P.metaKey,at=P.shiftKey;q.current===B&&!Y.current&&!le&&!et&&!tt&&!at&&(B===de.a.ENTER?R():B===de.a.ESC&&z())},V=function(){R()},$=I()(l,"".concat(l,"-edit-content"),Object(g.a)({},"".concat(l,"-rtl"),c==="rtl"),n);return t.createElement("div",{className:$,style:o},t.createElement(Ie.a,{ref:N,maxLength:f,value:ie,onChange:ue,onKeyDown:L,onKeyUp:k,onCompositionStart:ge,onCompositionEnd:x,onBlur:V,"aria-label":e,autoSize:v}),t.createElement(Re,{className:"".concat(l,"-edit-content-confirm")}))},$e=ze,Ce=a("i8i4"),Ae=1,Se=3,ye=8,h,Pe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Ne(i){if(!i)return 0;var r=i.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function He(i){var r=Array.prototype.slice.apply(i);return r.map(function(l){return"".concat(l,": ").concat(i.getPropertyValue(l),";")}).join("")}function Fe(i){var r=[];return i.forEach(function(l){var e=r[r.length-1];typeof l=="string"&&typeof e=="string"?r[r.length-1]+=l:r.push(l)}),r}var Ke=function(i,r,l,e,n){h||(h=document.createElement("div"),h.setAttribute("aria-hidden","true"),document.body.appendChild(h));var o=r.rows,c=r.suffix,f=c===void 0?"":c,p=window.getComputedStyle(i),v=He(p),S=Ne(p.lineHeight),E=Math.round(S*(o+1)+Ne(p.paddingTop)+Ne(p.paddingBottom));h.setAttribute("style",v),h.style.position="fixed",h.style.left="0",h.style.height="auto",h.style.minHeight="auto",h.style.maxHeight="auto",h.style.top="-999999px",h.style.zIndex="-1000",h.style.textOverflow="clip",h.style.whiteSpace="normal",h.style.webkitLineClamp="none";var z=Fe(Object(he.a)(l));Object(Ce.render)(t.createElement("div",{style:Pe},t.createElement("span",{style:Pe},z,f),t.createElement("span",{style:Pe},e)),h);function N(){return h.offsetHeight<E}if(N())return Object(Ce.unmountComponentAtNode)(h),{content:l,text:h.innerHTML,ellipsis:!1};var Y=Array.prototype.slice.apply(h.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(x){var L=x.nodeType;return L!==ye}),q=Array.prototype.slice.apply(h.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(Ce.unmountComponentAtNode)(h);var W=[];h.innerHTML="";var G=document.createElement("span");h.appendChild(G);var ie=document.createTextNode(n+f);G.appendChild(ie),q.forEach(function(x){h.appendChild(x)});function J(x){G.insertBefore(x,ie)}function ue(x,L){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:L.length,V=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,$=Math.floor((R+k)/2),w=L.slice(0,$);if(x.textContent=w,R>=k-1)for(var P=k;P>=R;P-=1){var B=L.slice(0,P);if(x.textContent=B,N()||!B)return P===L.length?{finished:!1,reactNode:L}:{finished:!0,reactNode:B}}return N()?ue(x,L,$,k,$):ue(x,L,R,$,V)}function ge(x,L){var R=x.nodeType;if(R===Ae)return J(x),N()?{finished:!1,reactNode:z[L]}:(G.removeChild(x),{finished:!0,reactNode:null});if(R===Se){var k=x.textContent||"",V=document.createTextNode(k);return J(V),ue(V,k)}return{finished:!1,reactNode:null}}return Y.some(function(x,L){var R=ge(x,L),k=R.finished,V=R.reactNode;return V&&W.push(V),k}),{content:W,text:h.innerHTML,ellipsis:!0}},Ge=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(i);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(i,e[n])&&(l[e[n]]=i[e[n]]);return l},Je=Object(X.c)("webkitLineClamp"),M=Object(X.c)("textOverflow");function ke(i,r){var l=i.mark,e=i.code,n=i.underline,o=i.delete,c=i.strong,f=i.keyboard,p=r;function v(S,E){!S||(p=t.createElement(E,{},p))}return v(c,"strong"),v(n,"u"),v(o,"del"),v(e,"code"),v(l,"mark"),v(f,"kbd"),p}var F="...",_e=function(i){Object(we.a)(l,i);var r=Object(De.a)(l);function l(){var e;return Object(ae.a)(this,l),e=r.apply(this,arguments),e.contentRef=t.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var n=e.props.prefixCls,o=e.context.getPrefixCls;return o("typography",n)},e.onExpandClick=function(n){var o,c=e.getEllipsis(),f=c.onExpand;e.setState({expanded:!0}),(o=f)===null||o===void 0||o(n)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(n){var o=e.getEditable(),c=o.onChange;c==null||c(n),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(n){n.preventDefault();var o=e.props,c=o.children,f=o.copyable,p=Object(d.a)({},Object(U.a)(f)==="object"?f:null);p.text===void 0&&(p.text=String(c)),u()(p.text||""),e.setState({copied:!0},function(){p.onCopy&&p.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(n){e.editIcon=n},e.triggerEdit=function(n){var o=e.getEditable(),c=o.onStart;n&&c&&c(),e.setState({edit:n},function(){!n&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){te.a.cancel(e.rafId),e.rafId=Object(te.a)(function(){e.syncEllipsis()})},e}return Object(Te.a)(l,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(n){var o=this.props.children,c=this.getEllipsis(),f=this.getEllipsis(n);(o!==n.children||c.rows!==f.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),te.a.cancel(this.rafId)}},{key:"getEditable",value:function(n){var o=this.state.edit,c=n||this.props,f=c.editable;return f?Object(d.a)({editing:o},Object(U.a)(f)==="object"?f:null):{editing:o}}},{key:"getEllipsis",value:function(n){var o=n||this.props,c=o.ellipsis;return c?Object(d.a)({rows:1,expandable:!1},Object(U.a)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var n=this.state.clientRendered,o=this.props,c=o.editable,f=o.copyable,p=this.getEllipsis(),v=p.rows,S=p.expandable,E=p.suffix,z=p.onEllipsis,N=p.tooltip;return E||N||c||f||S||!n||z?!1:v===1?M:Je}},{key:"syncEllipsis",value:function(){var n=this.state,o=n.ellipsisText,c=n.isEllipsis,f=n.expanded,p=this.getEllipsis(),v=p.rows,S=p.suffix,E=p.onEllipsis,z=this.props.children;if(!(!v||v<0||!this.contentRef.current||f)&&!this.canUseCSSEllipsis()){Object(T.a)(Object(he.a)(z).every(function(G){return typeof G=="string"}),"Typography","`ellipsis` should use string as children only.");var N=Ke(this.contentRef.current,{rows:v,suffix:S},z,this.renderOperations(!0),F),Y=N.content,q=N.text,W=N.ellipsis;(o!==q||c!==W)&&(this.setState({ellipsisText:q,ellipsisContent:Y,isEllipsis:W}),c!==W&&E&&E(W))}}},{key:"renderExpand",value:function(n){var o=this.getEllipsis(),c=o.expandable,f=o.symbol,p=this.state,v=p.expanded,S=p.isEllipsis;if(!c||!n&&(v||!S))return null;var E;return f?E=f:E=this.expandStr,t.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},E)}},{key:"renderEdit",value:function(){var n=this.props.editable;if(!!n){var o=n.icon,c=n.tooltip,f=Object(he.a)(c)[0]||this.editStr,p=typeof f=="string"?f:"";return t.createElement(fe.a,{key:"edit",title:c===!1?"":f},t.createElement(ne.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":p},o||t.createElement(C.a,{role:"button"})))}}},{key:"renderCopy",value:function(){var n=this.state.copied,o=this.props.copyable;if(!!o){var c=this.getPrefixCls(),f=o.tooltips,p=Object(he.a)(f);p.length===0&&(p=[this.copyStr,this.copiedStr]);var v=n?p[1]:p[0],S=typeof v=="string"?v:"",E=Object(he.a)(o.icon);return t.createElement(fe.a,{key:"copy",title:f===!1?"":v},t.createElement(ne.a,{className:I()("".concat(c,"-copy"),n&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":S},n?E[1]||t.createElement(s.a,null):E[0]||t.createElement(m.a,null)))}}},{key:"renderEditInput",value:function(){var n=this.props,o=n.children,c=n.className,f=n.style,p=this.context.direction,v=this.getEditable(),S=v.maxLength,E=v.autoSize;return t.createElement($e,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:c,style:f,direction:p,maxLength:S,autoSize:E})}},{key:"renderOperations",value:function(n){return[this.renderExpand(n),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var n=this,o=this.state,c=o.ellipsisContent,f=o.isEllipsis,p=o.expanded,v=this.props,S=v.component,E=v.children,z=v.className,N=v.type,Y=v.disabled,q=v.style,W=Ge(v,["component","children","className","type","disabled","style"]),G=this.context.direction,ie=this.getEllipsis(),J=ie.rows,ue=ie.suffix,ge=ie.tooltip,x=this.getPrefixCls(),L=Object(H.a)(W,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Object(b.a)(se.a))),R=this.canUseCSSEllipsis(),k=J===1&&R,V=J&&J>1&&R,$=E;if(J&&f&&!p&&!R){var w=W.title,P=w||"";!w&&(typeof E=="string"||typeof E=="number")&&(P=String(E)),P=P==null?void 0:P.slice(String(c||"").length),$=t.createElement(t.Fragment,null,c,t.createElement("span",{title:P,"aria-hidden":"true"},F),ue),ge&&($=t.createElement(fe.a,{title:ge===!0?E:ge},t.createElement("span",null,$)))}else $=t.createElement(t.Fragment,null,E,ue);return $=ke(this.props,$),t.createElement(ce.a,{componentName:"Text"},function(B){var le,et=B.edit,tt=B.copy,at=B.copied,rt=B.expand;return n.editStr=et,n.copyStr=tt,n.copiedStr=at,n.expandStr=rt,t.createElement(pe.a,{onResize:n.resizeOnNextFrame,disabled:!J},t.createElement(j,Object(d.a)({className:I()((le={},Object(g.a)(le,"".concat(x,"-").concat(N),N),Object(g.a)(le,"".concat(x,"-disabled"),Y),Object(g.a)(le,"".concat(x,"-ellipsis"),J),Object(g.a)(le,"".concat(x,"-ellipsis-single-line"),k),Object(g.a)(le,"".concat(x,"-ellipsis-multiple-line"),V),le),z),style:Object(d.a)(Object(d.a)({},q),{WebkitLineClamp:V?J:void 0}),component:S,ref:n.contentRef,direction:G},L),$,n.renderOperations()))})}},{key:"render",value:function(){var n=this.getEditable(),o=n.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(n){var o=n.children,c=n.editable;return Object(T.a)(!c||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),l}(t.Component);_e.contextType=O.b,_e.defaultProps={children:""};var me=_e,Qe=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(i);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(i,e[n])&&(l[e[n]]=i[e[n]]);return l},Be=function(r){var l=r.ellipsis,e=Qe(r,["ellipsis"]),n=t.useMemo(function(){return l&&Object(U.a)(l)==="object"?Object(H.a)(l,["expandable","rows"]):l},[l]);return Object(T.a)(Object(U.a)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),t.createElement(me,Object(d.a)({},e,{ellipsis:n,component:"span"}))},Ue=Be,Xe=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(i);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(i,e[n])&&(l[e[n]]=i[e[n]]);return l},Ye=function(r,l){var e=r.ellipsis,n=r.rel,o=Xe(r,["ellipsis","rel"]);Object(T.a)(Object(U.a)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=t.useRef(null);t.useImperativeHandle(l,function(){var p;return(p=c.current)===null||p===void 0?void 0:p.contentRef.current});var f=Object(d.a)(Object(d.a)({},o),{rel:n===void 0&&o.target==="_blank"?"noopener noreferrer":n});return delete f.navigate,t.createElement(me,Object(d.a)({},f,{ref:c,ellipsis:!!e,component:"a"}))},Ve=t.forwardRef(Ye),Ze=a("CWQg"),We=function(i,r){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&r.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(i);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(i,e[n])&&(l[e[n]]=i[e[n]]);return l},qe=Object(Ze.b)(1,2,3,4,5),Ee=function(r){var l=r.level,e=l===void 0?1:l,n=We(r,["level"]),o;return qe.indexOf(e)!==-1?o="h".concat(e):(Object(T.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),t.createElement(me,Object(d.a)({},n,{component:o}))},je=Ee,re=function(r){return t.createElement(me,Object(d.a)({},r,{component:"div"}))},nt=re,Le=j;Le.Text=Ue,Le.Link=Ve,Le.Title=je,Le.Paragraph=nt;var it=D.a=Le}}]);