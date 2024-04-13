/*! For license information please see 683.aca187fe.chunk.js.LICENSE.txt */
(self.webpackChunkidelek_react=self.webpackChunkidelek_react||[]).push([[683],{6683:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(5043),o=r(3216),i=r(5173),a=r.n(i),s=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}var p=function(e){var t,r;function o(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(l(t)),t.handleErrored=t.handleErrored.bind(l(t)),t.handleChange=t.handleChange.bind(l(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(l(t)),t}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,d(t,r);var i=o.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()}))},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated,function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,s));return n.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},o}(n.Component);p.displayName="ReCAPTCHA",p.propTypes={sitekey:a().string.isRequired,onChange:a().func,grecaptcha:a().object,theme:a().oneOf(["dark","light"]),type:a().oneOf(["image","audio"]),tabindex:a().number,onExpired:a().func,onErrored:a().func,size:a().oneOf(["compact","normal","invisible"]),stoken:a().string,hl:a().string,badge:a().oneOf(["bottomright","bottomleft","inline"]),isolated:a().bool},p.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var u=r(219),h=r.n(u);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}var f={},y=0;var b="onloadcallback";function x(){return"undefined"!==typeof window&&window.recaptchaOptions||{}}const g=(v=function(){var e=x(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+b+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+b+"&render=explicit"},j=(j={callbackName:b,globalName:"grecaptcha",attributes:x().nonce?{nonce:x().nonce}:{}})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,o;function i(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}o=t,(r=i).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+y++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof v?v():v,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=f[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[j.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=j,o=n.globalName,i=n.callbackName,a=n.scriptId;if(o&&"undefined"!==typeof window[o]&&(f[t]={loaded:!0,observers:{}}),f[t]){var s=f[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},f[t]={loaded:!1,observers:c};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,j.attributes)l.setAttribute(d,j.attributes[d]);a&&(l.id=a);var p=function(e){if(f[t]){var r=f[t].observers;for(var n in r)e(r[n])&&delete r[n]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=f[t];e&&(e.loaded=!0,p((function(t){return!i&&(t(e),!0)})))},l.onerror=function(){var e=f[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(l)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===j.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=f[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===j.removeOnUnmount&&delete f[e])},a.render=function(){var t=j.globalName,r=this.props,o=(r.asyncScriptOnLoad,r.forwardedRef),i=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=o,(0,n.createElement)(e,i)},i}(n.Component),o=(0,n.forwardRef)((function(e,t){return(0,n.createElement)(r,m({},e,{forwardedRef:t}))}));return o.displayName="AsyncScriptLoader("+t+")",o.propTypes={asyncScriptOnLoad:a().func},h()(o,e)})(p);var v,j;const N=g;var w=r(579);const S=()=>{const[e,t]=(0,n.useState)(null),r=(0,o.Zp)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("main",{className:"container pag",children:(0,w.jsx)("article",{className:"form",children:(0,w.jsx)("div",{className:"fondoForm",children:(0,w.jsxs)("div",{className:"row",children:[(0,w.jsxs)("div",{className:"col",style:{minWidth:"300px"},children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{className:"text-white",children:"Cont\xe1ctenos"}),(0,w.jsx)("p",{className:"text-white",children:"\xbfComo le podemos ayudar?"})]}),(0,w.jsx)("div",{className:"map",children:(0,w.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9628.02876167981!2d-64.14512187454255!3d-31.441055402663952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bd464c1cb11f%3A0x7be951ace254581f!2sIdelek%20S.A.S%20-%20Electr%C3%B3nica%20y%20electricidad%20industrial!5e0!3m2!1ses!2sar!4v1708106535024!5m2!1ses!2sar",style:{height:"100%",width:"100%"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Ubicaci\xf3n Idelek"})}),(0,w.jsxs)("div",{className:"links",children:[(0,w.jsx)("p",{children:(0,w.jsxs)("a",{className:"",href:"https://maps.app.goo.gl/qtHc1mjJZHagBLH39",children:[(0,w.jsx)("i",{style:{padding:"6px"},className:"bi bi-geo-alt-fill"}),"Alonso de Reinoso 3449 - C\xf3rdoba capital, C\xf3rdoba, Argentina."]})}),(0,w.jsx)("p",{children:(0,w.jsxs)("a",{className:"",href:"mailto:info@idelek.com.ar",children:[(0,w.jsx)("i",{style:{padding:"6px"},className:"bi bi-envelope-at-fill"}),"info@idelek.com.ar"]})}),(0,w.jsx)("p",{children:(0,w.jsxs)("a",{className:"",href:"tel:+5493515165848",children:[(0,w.jsx)("i",{style:{padding:"6px"},className:"bi bi-telephone-fill"}),"351-5165848"]})})]})]}),(0,w.jsx)("div",{className:"col",children:(0,w.jsxs)("form",{className:"msg-form",method:"post",action:"mail.php",encType:"multipart/form-data",onSubmit:t=>{t.preventDefault(),e?(r("/"),console.log("Formulario enviado")):console.log("Por favor, completa el captcha")},children:[(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("label",{htmlFor:"name",className:"h6",children:"Empresa"}),(0,w.jsxs)("div",{className:"input-group border rounded",children:[(0,w.jsx)("div",{className:"input-group-addon px-2 pt-1 iconosForm",children:(0,w.jsx)("i",{className:"bi bi-building"})}),(0,w.jsx)("input",{type:"text",name:"nombreEmpresa",className:"form-control border-0",placeholder:"Nombre de la empresa",required:!0})]})]}),(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("label",{htmlFor:"name",className:"h6",children:"Nombre"}),(0,w.jsxs)("div",{className:"input-group border rounded",children:[(0,w.jsx)("div",{className:"input-group-addon px-2 pt-1 iconosForm",children:(0,w.jsx)("i",{className:"bi bi-person-fill"})}),(0,w.jsx)("input",{type:"text",name:"name",className:"form-control border-0",placeholder:"Su nombre",required:!0})]})]}),(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("label",{htmlFor:"exampleInputEmail1",className:"h6",children:"Email"}),(0,w.jsxs)("div",{className:"input-group border rounded",children:[(0,w.jsx)("div",{className:"input-group-addon px-2 pt-1 iconosForm",children:(0,w.jsx)("i",{className:"bi bi-envelope-fill"})}),(0,w.jsx)("input",{type:"email",name:"email",className:"form-control border-0",placeholder:"ejemplo@email.com",required:!0})]})]}),(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:"col",style:{minWidth:"200px"},children:(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("label",{htmlFor:"",className:"h6",children:"Tel\xe9fono"}),(0,w.jsxs)("div",{className:"input-group border rounded",children:[(0,w.jsx)("div",{className:"input-group-addon px-2 pt-1 iconosForm",children:(0,w.jsx)("i",{className:"bi bi-telephone-fill"})}),(0,w.jsx)("input",{type:"tel",name:"phone",className:"form-control border-0",placeholder:"N\xfamero celular"})]})]})}),(0,w.jsx)("div",{className:"col",style:{minWidth:"200px"},children:(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("label",{htmlFor:"",className:"h6",children:"Ciudad"}),(0,w.jsxs)("div",{className:"input-group border rounded",children:[(0,w.jsx)("div",{className:"input-group-addon px-2 pt-1 iconosForm",children:(0,w.jsx)("i",{className:"bi bi-pin-map-fill"})}),(0,w.jsx)("input",{type:"location",name:"location",className:"form-control border-0",placeholder:"Localidad"})]})]})})]}),(0,w.jsxs)("div",{className:"form-group",children:[(0,w.jsx)("label",{htmlFor:"msg",className:"h6",children:"Mensaje"}),(0,w.jsx)("textarea",{name:"message",cols:10,rows:5,className:"form-control bg-light",placeholder:"Necesitamos sus implementaciones en...",defaultValue:"",required:!0})]}),(0,w.jsxs)("div",{className:"reCaptcha",children:[(0,w.jsx)(N,{sitekey:"6LcA134pAAAAAOPRTALhOmGSkRVjtTTJBJhowa8o",onChange:e=>{t(e)}}),","]}),(0,w.jsx)("div",{className:" d-flex justify-content-center align-items",children:(0,w.jsx)("input",{type:"submit",className:"btn form-button",defaultValue:"",disabled:!e})})]})})]})})})})})}},219:(e,t,r)=>{"use strict";var n=r(3763),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var l=Object.defineProperty,d=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=h(r);o&&o!==m&&e(t,o,n)}var a=d(r);p&&(a=a.concat(p(r)));for(var s=c(t),f=c(r),y=0;y<a.length;++y){var b=a[y];if(!i[b]&&(!n||!n[b])&&(!f||!f[b])&&(!s||!s[b])){var x=u(r,b);try{l(t,b,x)}catch(g){}}}}return t}},4983:(e,t)=>{"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,f=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case p:case i:case s:case a:case h:return e;default:switch(e=e&&e.$$typeof){case l:case u:case y:case f:case c:return e;default:return t}}case o:return t}}}function N(e){return j(e)===p}t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=u,t.Fragment=i,t.Lazy=y,t.Memo=f,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=h,t.isAsyncMode=function(e){return N(e)||j(e)===d},t.isConcurrentMode=N,t.isContextConsumer=function(e){return j(e)===l},t.isContextProvider=function(e){return j(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return j(e)===u},t.isFragment=function(e){return j(e)===i},t.isLazy=function(e){return j(e)===y},t.isMemo=function(e){return j(e)===f},t.isPortal=function(e){return j(e)===o},t.isProfiler=function(e){return j(e)===s},t.isStrictMode=function(e){return j(e)===a},t.isSuspense=function(e){return j(e)===h},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===p||e===s||e===a||e===h||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===f||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===x||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b)},t.typeOf=j},3763:(e,t,r)=>{"use strict";e.exports=r(4983)},1497:(e,t,r)=>{"use strict";var n=r(3218);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=683.aca187fe.chunk.js.map