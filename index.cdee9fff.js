let t,e,n,i,r,s,o,a,l;var u,c,h,f,d,p,g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function m(t){return t&&t.__esModule?t.default:t}var y={},v={},w=g.parcelRequired7c6;null==w&&((w=function(t){if(t in y)return y[t].exports;if(t in v){var e=v[t];delete v[t];var n={id:t,exports:{}};return y[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){v[t]=e},g.parcelRequired7c6=w),w("7Y9D8"),w("5Szup");const b={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{let t=window.scrollY||document.documentElement.scrollTop;t>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};b.addEventListener();var E={};function T(t,e){return function(){return t.apply(e,arguments)}}r6=void 0!==g?g:"undefined"!=typeof window?window:E,r3=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var e,n={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},i={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},s=function(e){return e||(e="head"),null!==t.document[e]||(r('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},o=function(e,n){// check doc head
if(!s("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},a=function(){// variables
var t={},e=!1,n=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);n<arguments.length;n++)!function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=a(t[i],n[i]):t[i]=n[i])}(arguments[n]);return t},l=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},c=0,h=function(r,o,u,h){// check doc body
if(!s("body"))return!1;e||f.Notify.init({});// create a backup for new settings
var d=a(!0,e,{});// check callbackOrOptions and options: begin
if("object"==typeof u&&!Array.isArray(u)||"object"==typeof h&&!Array.isArray(h)){// new options
var p={};"object"==typeof u?p=u:"object"==typeof h&&(p=h),// extend new settings with the new options
e=a(!0,e,p)}// check callbackOrOptions and options: end
// notify type
var g=e[r.toLocaleLowerCase("en")];// notify counter
c++,"string"!=typeof o&&(o="Notiflix "+r),e.plainText&&(o=l(o)),!e.plainText&&o.length>e.messageMaxLength&&(// extend settings for error massege
e=a(!0,e,{closeButton:!0,messageMaxLength:150}),// error message
o='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),o.length>e.messageMaxLength&&(o=o.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(g.fontAwesomeIconColor=g.background),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var m=t.document.getElementById(i.wrapID)||t.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(m.id=i.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var y=t.document.getElementById(i.overlayID)||t.document.createElement("div");y.id=i.overlayID,y.style.width="100%",y.style.height="100%",y.style.position="fixed",y.style.zIndex=e.zindex-1,y.style.left=0,y.style.top=0,y.style.right=0,y.style.bottom=0,y.style.background=g.backOverlayColor||e.backOverlayColor,y.className=e.cssAnimation?"nx-with-animation":"",y.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(i.overlayID)||t.document.body.appendChild(y)}t.document.getElementById(i.wrapID)||t.document.body.appendChild(m);// notify wrap: end
// notify content: begin
var v=t.document.createElement("div");v.id=e.ID+"-"+c,v.className=e.className+" "+g.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof u?"nx-with-close-button":"")+" "+("function"==typeof u?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=e.fontSize,v.style.color=g.textColor,v.style.background=g.background,v.style.borderRadius=e.borderRadius,v.style.pointerEvents="all",e.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
v.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(v.style.animationDuration=e.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var w="";// close buttpon element: end
// use icon: begin
if(e.closeButton&&"function"!=typeof u&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+g.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon){// use font awesome
if(e.useFontAwesome)v.innerHTML='<i style="color:'+g.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+g.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+o+"</span>"+(e.closeButton?w:"");else{var b="";r===n.Success?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===n.Failure?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===n.Warning?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===n.Info&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=b+'<span class="nx-message nx-with-icon">'+o+"</span>"+(e.closeButton?w:"")}}else v.innerHTML='<span class="nx-message">'+o+"</span>"+(e.closeButton?w:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===e.position||"right-bottom"===e.position){var E=t.document.getElementById(i.wrapID);E.insertBefore(v,E.firstChild)}else t.document.getElementById(i.wrapID).appendChild(v);// notify append or prepend: end
// remove by timeout or click: begin
var T=t.document.getElementById(v.id);if(T){// hide notify elm and hide overlay: begin
var I,S,A=function(){T.classList.add("nx-remove");var e=t.document.getElementById(i.overlayID);e&&m.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(I)},x=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),m.childElementCount<=0&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(i.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(e.closeButton&&"function"!=typeof u&&t.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",function(){A();var t=setTimeout(function(){x(),clearTimeout(t)},e.cssAnimationDuration)}),("function"==typeof u||e.clickToClose)&&T.addEventListener("click",function(){"function"==typeof u&&u(),A();var t=setTimeout(function(){x(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof u){// auto remove: begin
var C=function(){I=setTimeout(function(){A()},e.timeout),S=setTimeout(function(){x()},e.timeout+e.cssAnimationDuration)};C(),e.pauseOnHover&&(T.addEventListener("mouseenter",function(){T.classList.add("nx-paused"),clearTimeout(I),clearTimeout(S)}),T.addEventListener("mouseleave",function(){T.classList.remove("nx-paused"),C()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(e.showOnlyTheLastOne&&c>0)for(var _=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+c+"])"),k=0;k<_.length;k++){var N=_[k];null!==N.parentNode&&N.parentNode.removeChild(N)}// notify - show only the last one: end
// extend new settings with the backup settings
e=a(!0,e,d)},f={Notify:{// Init
init:function(t){// extend options
e=a(!0,i,t),// internal css if exist
o(u,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return r("You have to initialize the Notify module before call Merge function."),!1;e=a(!0,e,t)},// Success
success:function(t,e,i){h(n.Success,t,e,i)},// Failure
failure:function(t,e,i){h(n.Failure,t,e,i)},// Warning
warning:function(t,e,i){h(n.Warning,t,e,i)},// Info
info:function(t,e,i){h(n.Info,t,e,i)}}};return"object"==typeof t.Notiflix?a(!0,t.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],function(){return r3(r6)}):"object"==typeof E?E=r3(r6):r6.Notiflix=r3(r6);// utils is a library of generic helper functions non-specific to axios
const{toString:I}=Object.prototype,{getPrototypeOf:S}=Object,A=(r8=Object.create(null),t=>{let e=I.call(t);return r8[e]||(r8[e]=e.slice(8,-1).toLowerCase())}),x=t=>(t=t.toLowerCase(),e=>A(e)===t),C=t=>e=>typeof e===t,{isArray:_}=Array,k=C("undefined"),N=x("ArrayBuffer"),D=C("string"),O=C("function"),R=C("number"),L=t=>null!==t&&"object"==typeof t,P=t=>{if("object"!==A(t))return!1;let e=S(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},M=x("Date"),B=x("File"),F=x("Blob"),U=x("FileList"),j=x("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function V(t,e,{allOwnKeys:n=!1}={}){let i,r;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),_(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{let r;// Iterate over object keys
let s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;for(i=0;i<o;i++)r=s[i],e.call(null,t[r],r,t)}}}function $(t,e){let n;e=e.toLowerCase();let i=Object.keys(t),r=i.length;for(;r-- >0;)if(e===(n=i[r]).toLowerCase())return n;return null}const z=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:g,q=t=>!k(t)&&t!==z,H=(r7="undefined"!=typeof Uint8Array&&S(Uint8Array),t=>r7&&t instanceof r7),K=x("HTMLFormElement"),G=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),W=x("RegExp"),Q=(t,e)=>{let n=Object.getOwnPropertyDescriptors(t),i={};V(n,(n,r)=>{let s;!1!==(s=e(n,r,t))&&(i[r]=s||n)}),Object.defineProperties(t,i)},X="abcdefghijklmnopqrstuvwxyz",J="0123456789",Y={DIGIT:J,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+J},Z=x("AsyncFunction");var tt={isArray:_,isArrayBuffer:N,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!k(t)&&null!==t.constructor&&!k(t.constructor)&&O(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||O(t.append)&&("formdata"===(e=A(t))||// detect form-data instance
"object"===e&&O(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&N(t.buffer)},isString:D,isNumber:R,isBoolean:t=>!0===t||!1===t,isObject:L,isPlainObject:P,isUndefined:k,isDate:M,isFile:B,isBlob:F,isRegExp:W,isFunction:O,isStream:t=>L(t)&&O(t.pipe),isURLSearchParams:j,isTypedArray:H,isFileList:U,forEach:V,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:e}=q(this)&&this||{},n={},i=(i,r)=>{let s=e&&$(n,r)||r;P(n[s])&&P(i)?n[s]=t(n[s],i):P(i)?n[s]=t({},i):_(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&V(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(V(e,(e,i)=>{n&&O(e)?t[i]=T(e,n):t[i]=e},{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,s,o;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(s=(r=Object.getOwnPropertyNames(t)).length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=!1!==n&&S(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype)return e},kindOf:A,kindOfTest:x,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;let i=t.indexOf(e,n);return -1!==i&&i===n},toArray:t=>{if(!t)return null;if(_(t))return t;let e=t.length;if(!R(e))return null;let n=Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{let n;let i=t&&t[Symbol.iterator],r=i.call(t);for(;(n=r.next())&&!n.done;){let i=n.value;e.call(t,i[0],i[1])}},matchAll:(t,e)=>{let n;let i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:K,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:Q,freezeMethods:t=>{Q(t,(e,n)=>{// skip restricted props in strict mode
if(O(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;let i=t[n];if(O(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},toObjectSet:(t,e)=>{let n={};return(t=>{t.forEach(t=>{n[t]=!0})})(_(t)?t:String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,n){return e.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:$,global:z,isContextDefined:q,ALPHABET:Y,generateString:(t=16,e=Y.ALPHA_DIGIT)=>{let n="",{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&O(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),n=(t,i)=>{if(L(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;let r=_(t)?[]:{};return V(t,(t,e)=>{let s=n(t,i+1);k(s)||(r[e]=s)}),e[i]=void 0,r}}return t};return n(t,0)},isAsyncFn:Z,isThenable:t=>t&&(L(t)||O(t))&&O(t.then)&&O(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function te(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}tt.inherits(te,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:tt.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const tn=te.prototype,ti={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ti[t]={value:t}}),Object.defineProperties(te,ti),Object.defineProperty(tn,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
te.from=(t,e,n,i,r,s)=>{let o=Object.create(tn);return tt.toFlatObject(t,o,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),te.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o},se=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,n=t.length,i=n%3// if we have 1 byte left, pad 2 bytes
,r=[],s=0,o=n-i;s<o;s+=16383// must be multiple of 3
)r.push(function(t,e,n){for(var i,r=[],s=e;s<n;s+=3)r.push(tr[(i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]))>>18&63]+tr[i>>12&63]+tr[i>>6&63]+tr[63&i]);return r.join("")}(t,s,s+16383>o?o:s+16383));return 1===i?r.push(tr[(e=t[n-1])>>2]+tr[e<<4&63]+"=="):2===i&&r.push(tr[(e=(t[n-2]<<8)+t[n-1])>>10]+tr[e>>4&63]+tr[e<<2&63]+"="),r.join("")};for(var tr=[],ts=[],to="undefined"!=typeof Uint8Array?Uint8Array:Array,ta="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tl=0,tu=ta.length;tl<tu;++tl)tr[tl]=ta[tl],ts[ta.charCodeAt(tl)]=tl;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
ts["-".charCodeAt(0)]=62,ts["_".charCodeAt(0)]=63,sn=function(t,e,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,u=l>>1,c=-7,h=n?r-1:0,f=n?-1:1,d=t[e+h];for(h+=f,s=d&(1<<-c)-1,d>>=-c,c+=a;c>0;s=256*s+t[e+h],h+=f,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=i;c>0;o=256*o+t[e+h],h+=f,c-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:(d?-1:1)*(1/0);o+=Math.pow(2,i),s-=u}return(d?-1:1)*o*Math.pow(2,s-i)},si=function(t,e,n,i,r,s){var o,a,l,u=8*s-r-1,c=(1<<u)-1,h=c>>1,f=23===r?5960464477539062e-23:0,d=i?0:s-1,p=i?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,o=c):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?e+=f/l:e+=f*Math.pow(2,1-h),e*l>=2&&(o++,l/=2),o+h>=c?(a=0,o=c):o+h>=1?(a=(e*l-1)*Math.pow(2,r),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;t[n+d]=255&a,d+=p,a/=256,r-=8);for(o=o<<r|a,u+=r;u>0;t[n+d]=255&o,d+=p,o/=256,u-=8);t[n+d-p]|=128*g};const tc="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function th(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,tf.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function tf(t,e,n){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return tg(t)}return td(t,e,n)}function td(t,e,n){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!tf.isEncoding(e))throw TypeError("Unknown encoding: "+e);let n=0|tw(t,e),i=th(n),r=i.write(t,e);return r!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(i=i.slice(0,r)),i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(t$(t,Uint8Array)){let e=new Uint8Array(t);return ty(e.buffer,e.byteOffset,e.byteLength)}return tm(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t$(t,ArrayBuffer)||t&&t$(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(t$(t,SharedArrayBuffer)||t&&t$(t.buffer,SharedArrayBuffer)))return ty(t,e,n);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return tf.from(i,e,n);let r=function(t){var e;if(tf.isBuffer(t)){let e=0|tv(t.length),n=th(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?th(0):tm(t):"Buffer"===t.type&&Array.isArray(t.data)?tm(t.data):void 0}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return tf.from(t[Symbol.toPrimitive]("string"),e,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tp(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function tg(t){return tp(t),th(t<0?0:0|tv(t))}function tm(t){let e=t.length<0?0:0|tv(t.length),n=th(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function ty(t,e,n){let i;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),tf.prototype),i)}function tv(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tw(t,e){if(tf.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t$(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;// Use a for loop to avoid recursion
let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return tU(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return tj(t).length;default:if(r)return i?-1:tU(t).length// assume utf8
;e=(""+e).toLowerCase(),r=!0}}function tb(t,e,n){let i=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,n){let i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=tz[t[i]];return r}(this,e,n);case"utf8":case"utf-8":return tS(this,e,n);case"ascii":return function(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}(this,e,n);case"latin1":case"binary":return function(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}(this,e,n);case"base64":var r,s;return r=e,s=n,0===r&&s===this.length?se(this):se(this.slice(r,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,n){let i=t.slice(e,n),r="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}(this,e,n);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function tE(t,e,n){let i=t[e];t[e]=t[n],t[n]=i}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tT(t,e,n,i,r){var s;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(s=n=+n// Coerce to Number.
)!=s&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return -1;n=t.length-1}else if(n<0){if(!r)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=tf.from(e,i)),tf.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tI(t,e,n,i,r));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):tI(t,[e],n,i,r);throw TypeError("val must be string, number or Buffer")}function tI(t,e,n,i,r){let s,o=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return -1;o=2,a/=2,l/=2,n/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(u(t,s)===u(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else -1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(u(t,s+i)!==u(e,i)){n=!1;break}if(n)return s}return -1}function tS(t,e,n){n=Math.min(t.length,n);let i=[],r=e;for(;r<n;){let e=t[r],s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:e<128&&(s=e);break;case 2:(192&(n=t[r+1]))==128&&(l=(31&e)<<6|63&n)>127&&(s=l);break;case 3:n=t[r+1],i=t[r+2],(192&n)==128&&(192&i)==128&&(l=(15&e)<<12|(63&n)<<6|63&i)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],(192&n)==128&&(192&i)==128&&(192&a)==128&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
s=65533,o=1):s>65535&&(// encode to utf16 (surrogate pair dance)
s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tA(t,e,n){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>n)throw RangeError("Trying to access beyond buffer length")}function tx(t,e,n,i,r,s){if(!tf.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw RangeError('"value" argument is out of bounds');if(n+i>t.length)throw RangeError("Index out of range")}function tC(t,e,n,i,r){tP(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function t_(t,e,n,i,r){tP(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function tk(t,e,n,i,r,s){if(n+i>t.length||n<0)throw RangeError("Index out of range")}function tN(t,e,n,i,r){return e=+e,n>>>=0,r||tk(t,e,n,4,34028234663852886e22,-34028234663852886e22),si(t,e,n,i,23,4),n+4}function tD(t,e,n,i,r){return e=+e,n>>>=0,r||tk(t,e,n,8,17976931348623157e292,-17976931348623157e292),si(t,e,n,i,52,8),n+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */tf.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),tf.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tf.prototype,"parent",{enumerable:!0,get:function(){if(tf.isBuffer(this))return this.buffer}}),Object.defineProperty(tf.prototype,"offset",{enumerable:!0,get:function(){if(tf.isBuffer(this))return this.byteOffset}}),tf.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/tf.from=function(t,e,n){return td(t,e,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(tf.prototype,Uint8Array.prototype),Object.setPrototypeOf(tf,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/tf.alloc=function(t,e,n){return(tp(t),t<=0)?th(t):void 0!==e?"string"==typeof n?th(t).fill(e,n):th(t).fill(e):th(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */tf.allocUnsafe=function(t){return tg(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */tf.allocUnsafeSlow=function(t){return tg(t)},tf.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==tf.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},tf.compare=function(t,e){if(t$(t,Uint8Array)&&(t=tf.from(t,t.offset,t.byteLength)),t$(e,Uint8Array)&&(e=tf.from(e,e.offset,e.byteLength)),!tf.isBuffer(t)||!tf.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},tf.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tf.concat=function(t,e){let n;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return tf.alloc(0);if(void 0===e)for(n=0,e=0;n<t.length;++n)e+=t[n].length;let i=tf.allocUnsafe(e),r=0;for(n=0;n<t.length;++n){let e=t[n];if(t$(e,Uint8Array))r+e.length>i.length?(tf.isBuffer(e)||(e=tf.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else if(tf.isBuffer(e))e.copy(i,r);else throw TypeError('"list" argument must be an Array of Buffers');r+=e.length}return i},tf.byteLength=tw,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
tf.prototype._isBuffer=!0,tf.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)tE(this,e,e+1);return this},tf.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)tE(this,e,e+3),tE(this,e+1,e+2);return this},tf.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)tE(this,e,e+7),tE(this,e+1,e+6),tE(this,e+2,e+5),tE(this,e+3,e+4);return this},tf.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?tS(this,0,t):tb.apply(this,arguments)},tf.prototype.toLocaleString=tf.prototype.toString,tf.prototype.equals=function(t){if(!tf.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===tf.compare(this,t)},tf.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},tc&&(tf.prototype[tc]=tf.prototype.inspect),tf.prototype.compare=function(t,e,n,i,r){if(t$(t,Uint8Array)&&(t=tf.from(t,t.offset,t.byteLength)),!tf.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return -1;if(e>=n)return 1;if(e>>>=0,n>>>=0,i>>>=0,r>>>=0,this===t)return 0;let s=r-i,o=n-e,a=Math.min(s,o),l=this.slice(i,r),u=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==u[t]){s=l[t],o=u[t];break}return s<o?-1:o<s?1:0},tf.prototype.includes=function(t,e,n){return -1!==this.indexOf(t,e,n)},tf.prototype.indexOf=function(t,e,n){return tT(this,t,e,n,!0)},tf.prototype.lastIndexOf=function(t,e,n){return tT(this,t,e,n,!1)},tf.prototype.write=function(t,e,n,i){var r,s,o,a,l,u,c,h;// Buffer#write(string)
if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-e;if((void 0===n||n>f)&&(n=f),t.length>0&&(n<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let d=!1;for(;;)switch(i){case"hex":return function(t,e,n,i){let r;n=Number(n)||0;let s=t.length-n;i?(i=Number(i))>s&&(i=s):i=s;let o=e.length;for(i>o/2&&(i=o/2),r=0;r<i;++r){let i=parseInt(e.substr(2*r,2),16);if(i!=i)break;t[n+r]=i}return r}(this,t,e,n);case"utf8":case"utf-8":return r=e,s=n,tV(tU(t,this.length-r),this,r,s);case"ascii":case"latin1":case"binary":return o=e,a=n,tV(function(t){let e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(t),this,o,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,u=n,tV(tj(t),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,h=n,tV(function(t,e){let n,i;let r=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)i=(n=t.charCodeAt(s))>>8,r.push(n%256),r.push(i);return r}(t,this.length-c),this,c,h);default:if(d)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),d=!0}},tf.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tf.prototype.slice=function(t,e){let n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);let i=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(i,tf.prototype),i)},tf.prototype.readUintLE=tf.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tA(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},tf.prototype.readUintBE=tf.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tA(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},tf.prototype.readUint8=tf.prototype.readUInt8=function(t,e){return t>>>=0,e||tA(t,1,this.length),this[t]},tf.prototype.readUint16LE=tf.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tA(t,2,this.length),this[t]|this[t+1]<<8},tf.prototype.readUint16BE=tf.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tA(t,2,this.length),this[t]<<8|this[t+1]},tf.prototype.readUint32LE=tf.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tA(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},tf.prototype.readUint32BE=tf.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tA(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},tf.prototype.readBigUInt64LE=tq(function(t){tM(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tB(t,this.length-8);let i=e+256*this[++t]+65536*this[++t]+16777216*this[++t],r=this[++t]+256*this[++t]+65536*this[++t]+16777216*n;return BigInt(i)+(BigInt(r)<<BigInt(32))}),tf.prototype.readBigUInt64BE=tq(function(t){tM(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tB(t,this.length-8);let i=16777216*e+65536*this[++t]+256*this[++t]+this[++t],r=16777216*this[++t]+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)}),tf.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tA(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*e)),i},tf.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tA(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return s>=(r*=128)&&(s-=Math.pow(2,8*e)),s},tf.prototype.readInt8=function(t,e){return(t>>>=0,e||tA(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},tf.prototype.readInt16LE=function(t,e){t>>>=0,e||tA(t,2,this.length);let n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},tf.prototype.readInt16BE=function(t,e){t>>>=0,e||tA(t,2,this.length);let n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},tf.prototype.readInt32LE=function(t,e){return t>>>=0,e||tA(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},tf.prototype.readInt32BE=function(t,e){return t>>>=0,e||tA(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},tf.prototype.readBigInt64LE=tq(function(t){tM(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tB(t,this.length-8);let i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24// Overflow
);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),tf.prototype.readBigInt64BE=tq(function(t){tM(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tB(t,this.length-8);let i=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+n)}),tf.prototype.readFloatLE=function(t,e){return t>>>=0,e||tA(t,4,this.length),sn(this,t,!0,23,4)},tf.prototype.readFloatBE=function(t,e){return t>>>=0,e||tA(t,4,this.length),sn(this,t,!1,23,4)},tf.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tA(t,8,this.length),sn(this,t,!0,52,8)},tf.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tA(t,8,this.length),sn(this,t,!1,52,8)},tf.prototype.writeUintLE=tf.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;tx(this,t,e,n,i,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},tf.prototype.writeUintBE=tf.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){let i=Math.pow(2,8*n)-1;tx(this,t,e,n,i,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},tf.prototype.writeUint8=tf.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,1,255,0),this[e]=255&t,e+1},tf.prototype.writeUint16LE=tf.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},tf.prototype.writeUint16BE=tf.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},tf.prototype.writeUint32LE=tf.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},tf.prototype.writeUint32BE=tf.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tf.prototype.writeBigUInt64LE=tq(function(t,e=0){return tC(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tf.prototype.writeBigUInt64BE=tq(function(t,e=0){return t_(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tf.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){let i=Math.pow(2,8*n-1);tx(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},tf.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){let i=Math.pow(2,8*n-1);tx(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},tf.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},tf.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},tf.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},tf.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},tf.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||tx(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tf.prototype.writeBigInt64LE=tq(function(t,e=0){return tC(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tf.prototype.writeBigInt64BE=tq(function(t,e=0){return t_(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tf.prototype.writeFloatLE=function(t,e,n){return tN(this,t,e,!0,n)},tf.prototype.writeFloatBE=function(t,e,n){return tN(this,t,e,!1,n)},tf.prototype.writeDoubleLE=function(t,e,n){return tD(this,t,e,!0,n)},tf.prototype.writeDoubleBE=function(t,e,n){return tD(this,t,e,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
tf.prototype.copy=function(t,e,n,i){if(!tf.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);let r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
tf.prototype.fill=function(t,e,n,i){let r;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!tf.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===t.length){let e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<n)throw RangeError("Out of range index");if(n<=e)return this;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{let s=tf.isBuffer(t)?t:tf.from(t,i),o=s.length;if(0===o)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const tO={};function tR(t,e,n){tO[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tL(t){let e="",n=t.length,i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function tP(t,e,n,i,r,s){if(t>n||t<e){let i;let r="bigint"==typeof e?"n":"";throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${(s+1)*8}${r}`:`>= -(2${r} ** ${(s+1)*8-1}${r}) and < 2 ** ${(s+1)*8-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new tO.ERR_OUT_OF_RANGE("value",i,t)}tM(r,"offset"),(void 0===i[r]||void 0===i[r+s])&&tB(r,i.length-(s+1))}function tM(t,e){if("number"!=typeof t)throw new tO.ERR_INVALID_ARG_TYPE(e,"number",t)}function tB(t,e,n){if(Math.floor(t)!==t)throw tM(t,n),new tO.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new tO.ERR_BUFFER_OUT_OF_BOUNDS;throw new tO.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}tR("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tR("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tR("ERR_OUT_OF_RANGE",function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?r=tL(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=tL(r)),r+="n"),i+=` It must be ${e}. Received ${r}`},RangeError);// HELPER FUNCTIONS
// ================
const tF=/[^+/0-9A-Za-z-_]/g;function tU(t,e){let n;e=e||1/0;let i=t.length,r=null,s=[];for(let o=0;o<i;++o){// is surrogate component
if((n=t.charCodeAt(o))>55295&&n<57344){// last char was a lead
if(!r){// no lead yet
if(n>56319||o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}// valid lead
r=n;continue}// 2 leads in a row
if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}// valid surrogate pair
n=(r-55296<<10|n-56320)+65536}else r&&(e-=3)>-1&&s.push(239,191,189);// encode utf8
if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function tj(t){return function(t){var e,n,i=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=t.indexOf("=");-1===n&&(n=e);var i=n===e?0:4-n%4;return[n,i]}(t),r=i[0],s=i[1],o=new to((r+s)*3/4-s),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)e=ts[t.charCodeAt(n)]<<18|ts[t.charCodeAt(n+1)]<<12|ts[t.charCodeAt(n+2)]<<6|ts[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;return 2===s&&(e=ts[t.charCodeAt(n)]<<2|ts[t.charCodeAt(n+1)]>>4,o[a++]=255&e),1===s&&(e=ts[t.charCodeAt(n)]<<10|ts[t.charCodeAt(n+1)]<<4|ts[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e),o}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tF,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tV(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length)&&!(r>=t.length);++r)e[r+n]=t[r];return r}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function t$(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const tz=function(){let t="0123456789abcdef",e=Array(256);for(let n=0;n<16;++n){let i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();// Return not function with Error if BigInt not supported
function tq(t){return"undefined"==typeof BigInt?tH:t}function tH(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tK(t){return tt.isPlainObject(t)||tt.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tG(t){return tt.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tW(t,e,n){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tG(t),!n&&e?"["+t+"]":t)}).join(n?".":""):e}const tQ=tt.toFlatObject(tt,{},null,function(t){return/^is[A-Z]/.test(t)});var tX=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,n){if(!tt.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
n=tt.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!tt.isUndefined(e[t])});let i=n.metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!=typeof Blob&&Blob,l=a&&tt.isSpecCompliantForm(e);if(!tt.isFunction(r))throw TypeError("visitor must be a function");function u(t){if(null===t)return"";if(tt.isDate(t))return t.toISOString();if(!l&&tt.isBlob(t))throw new te("Blob is not supported. Use a Buffer instead.");return tt.isArrayBuffer(t)||tt.isTypedArray(t)?l&&"function"==typeof Blob?new Blob([t]):tf.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(t,n,r){let a=t;if(t&&!r&&"object"==typeof t){if(tt.endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=i?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var l;if(tt.isArray(t)&&(l=t,tt.isArray(l)&&!l.some(tK))||(tt.isFileList(t)||tt.endsWith(n,"[]"))&&(a=tt.toArray(t)))return(// eslint-disable-next-line no-param-reassign
n=tG(n),a.forEach(function(t,i){tt.isUndefined(t)||null===t||e.append(!0===o?tW([n],i,s):null===o?n:n+"[]",u(t))}),!1)}}return!!tK(t)||(e.append(tW(r,n,s),u(t)),!1)}let h=[],f=Object.assign(tQ,{defaultVisitor:c,convertValue:u,isVisitable:tK});if(!tt.isObject(t))throw TypeError("data must be an object");return!function t(n,i){if(!tt.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),tt.forEach(n,function(n,s){let o=!(tt.isUndefined(n)||null===n)&&r.call(e,n,tt.isString(s)?s.trim():s,i,f);!0===o&&t(n,i?i.concat(s):[s])}),h.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tJ(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tY(t,e){this._pairs=[],t&&tX(t,this,e)}const tZ=tY.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function t0(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function t1(t,e,n){let i;/*eslint no-param-reassign:0*/if(!e)return t;let r=n&&n.encode||t0,s=n&&n.serialize;if(i=s?s(e,n):tt.isURLSearchParams(e)?e.toString():new tY(e,n).toString(r)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}tZ.append=function(t,e){this._pairs.push([t,e])},tZ.toString=function(t){let e=t?function(e){return t.call(this,e,tJ)}:tJ;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var t2=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){tt.forEach(this.handlers,function(e){null!==e&&t(e)})}},t9={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t4="undefined"!=typeof URLSearchParams?URLSearchParams:tY,t5="undefined"!=typeof FormData?FormData:null,t6="undefined"!=typeof Blob?Blob:null;/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const t3=("undefined"==typeof navigator||"ReactNative"!==(l=navigator.product)&&"NativeScript"!==l&&"NS"!==l)&&"undefined"!=typeof window&&"undefined"!=typeof document,t8="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t7={classes:{URLSearchParams:t4,FormData:t5,Blob:t6},isStandardBrowserEnv:t3,isStandardBrowserWebWorkerEnv:t8,protocols:["http","https","file","blob","url","data"]},et=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(tt.isFormData(t)&&tt.isFunction(t.entries)){let e={};return tt.forEachEntry(t,(t,n)=>{!function t(e,n,i,r){let s=e[r++],o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&tt.isArray(i)?i.length:s,a)return tt.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&tt.isObject(i[s])||(i[s]=[]);let l=t(e,n,i[s],r);return l&&tt.isArray(i[s])&&(i[s]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,n;let i={},r=Object.keys(t),s=r.length;for(e=0;e<s;e++)i[n=r[e]]=t[n];return i}(i[s])),!o}(tt.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),n,e,0)}),e}return null};const ee={transitional:t9,adapter:t7.isNode?"http":"xhr",transformRequest:[function(t,e){let n;let i=e.getContentType()||"",r=i.indexOf("application/json")>-1,s=tt.isObject(t);s&&tt.isHTMLForm(t)&&(t=new FormData(t));let o=tt.isFormData(t);if(o)return r&&r?JSON.stringify(et(t)):t;if(tt.isArrayBuffer(t)||tt.isBuffer(t)||tt.isStream(t)||tt.isFile(t)||tt.isBlob(t))return t;if(tt.isArrayBufferView(t))return t.buffer;if(tt.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1){var a,l;return(a=t,l=this.formSerializer,tX(a,new t7.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return t7.isNode&&tt.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},l))).toString()}if((n=tt.isFileList(t))||i.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tX(n?{"files[]":t}:t,e&&new e,this.formSerializer)}}return s||r?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,n){if(tt.isString(t))try{return(0,JSON.parse)(t),tt.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||ee.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&tt.isString(t)&&(n&&!this.responseType||i)){let n=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!n&&i){if("SyntaxError"===t.name)throw te.from(t,te.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t7.classes.FormData,Blob:t7.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};tt.forEach(["delete","get","head","post","put","patch"],t=>{ee.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const en=tt.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ei=t=>{let e,n,i;let r={};return t&&t.split("\n").forEach(function(t){i=t.indexOf(":"),e=t.substring(0,i).trim().toLowerCase(),n=t.substring(i+1).trim(),!e||r[e]&&en[e]||("set-cookie"===e?r[e]?r[e].push(n):r[e]=[n]:r[e]=r[e]?r[e]+", "+n:n)}),r};const er=Symbol("internals");function es(t){return t&&String(t).trim().toLowerCase()}function eo(t){return!1===t||null==t?t:tt.isArray(t)?t.map(eo):String(t)}const ea=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function el(t,e,n,i,r){if(tt.isFunction(i))return i.call(this,e,n);if(r&&(e=n),tt.isString(e)){if(tt.isString(i))return -1!==e.indexOf(i);if(tt.isRegExp(i))return i.test(e)}}class eu{constructor(t){t&&this.set(t)}set(t,e,n){let i=this;function r(t,e,n){let r=es(e);if(!r)throw Error("header name must be a non-empty string");let s=tt.findKey(i,r);s&&void 0!==i[s]&&!0!==n&&(void 0!==n||!1===i[s])||(i[s||e]=eo(t))}let s=(t,e)=>tt.forEach(t,(t,n)=>r(t,n,e));return tt.isPlainObject(t)||t instanceof this.constructor?s(t,e):tt.isString(t)&&(t=t.trim())&&!ea(t)?s(ei(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=es(t)){let n=tt.findKey(this,t);if(n){let t=this[n];if(!e)return t;if(!0===e)return function(t){let e;let n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=i.exec(t);)n[e[1]]=e[2];return n}(t);if(tt.isFunction(e))return e.call(this,t,n);if(tt.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=es(t)){let n=tt.findKey(this,t);return!!(n&&void 0!==this[n]&&(!e||el(this,this[n],n,e)))}return!1}delete(t,e){let n=this,i=!1;function r(t){if(t=es(t)){let r=tt.findKey(n,t);r&&(!e||el(n,n[r],r,e))&&(delete n[r],i=!0)}}return tt.isArray(t)?t.forEach(r):r(t),i}clear(t){let e=Object.keys(this),n=e.length,i=!1;for(;n--;){let r=e[n];(!t||el(this,this[r],r,t,!0))&&(delete this[r],i=!0)}return i}normalize(t){let e=this,n={};return tt.forEach(this,(i,r)=>{let s=tt.findKey(n,r);if(s){e[s]=eo(i),delete e[r];return}let o=t?r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n):String(r).trim();o!==r&&delete e[r],e[o]=eo(i),n[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return tt.forEach(this,(n,i)=>{null!=n&&!1!==n&&(e[i]=t&&tt.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let n=new this(t);return e.forEach(t=>n.set(t)),n}static accessor(t){let e=this[er]=this[er]={accessors:{}},n=e.accessors,i=this.prototype;function r(t){let e=es(t);n[e]||(!function(t,e){let n=tt.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})})}(i,t),n[e]=!0)}return tt.isArray(t)?t.forEach(r):r(t),this}}function ec(t,e){let n=this||ee,i=e||n,r=eu.from(i.headers),s=i.data;return tt.forEach(t,function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function eh(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function ef(t,e,n){te.call(this,null==t?"canceled":t,te.ERR_CANCELED,e,n),this.name="CanceledError"}eu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),tt.reduceDescriptors(eu.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[n]=t}}}),tt.freezeMethods(eu),tt.inherits(ef,te,{__CANCEL__:!0});var ed=t7.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){let o=[];o.push(t+"="+encodeURIComponent(e)),tt.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),tt.isString(i)&&o.push("path="+i),tt.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ep(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var eg=t7.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function i(t){let i=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=i(window.location.href),function(e){let n=tt.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},em=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let n;t=t||10;let i=Array(t),r=Array(t),s=0,o=0;return e=void 0!==e?e:1e3,function(a){let l=Date.now(),u=r[o];n||(n=l),i[s]=a,r[s]=l;let c=o,h=0;for(;c!==s;)h+=i[c++],c%=t;if((s=(s+1)%t)===o&&(o=(o+1)%t),l-n<e)return;let f=u&&l-u;return f?Math.round(1e3*h/f):void 0}};function ey(t,e){let n=0,i=em(50,250);return r=>{let s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a),u=s<=o;n=s;let c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const ev="undefined"!=typeof XMLHttpRequest;var ew=ev&&function(t){return new Promise(function(e,n){let i,r=t.data,s=eu.from(t.headers).normalize(),o=t.responseType;function a(){t.cancelToken&&t.cancelToken.unsubscribe(i),t.signal&&t.signal.removeEventListener("abort",i)}tt.isFormData(r)&&(t7.isStandardBrowserEnv||t7.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+n))}let u=ep(t.baseURL,t.url);function c(){if(!l)return;// Prepare the response
let i=eu.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),r=o&&"text"!==o&&"json"!==o?l.response:l.responseText,s={data:r,status:l.status,statusText:l.statusText,headers:i,config:t,request:l};!function(t,e,n){let i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}(function(t){e(t),a()},function(t){n(t),a()},s),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(t.method.toUpperCase(),t1(u,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=t.timeout,"onloadend"in l?l.onloadend=c:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(n(new te("Request aborted",te.ECONNABORTED,t,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new te("Network Error",te.ERR_NETWORK,t,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",i=t.transitional||t9;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new te(e,i.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,t,l)),// Clean up request
l=null},t7.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||eg(u))&&t.xsrfCookieName&&ed.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===r&&s.setContentType(null),"setRequestHeader"in l&&tt.forEach(s.toJSON(),function(t,e){l.setRequestHeader(e,t)}),tt.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&"json"!==o&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",ey(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",ey(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
i=e=>{l&&(n(!e||e.type?new ef(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(i),t.signal&&(t.signal.aborted?i():t.signal.addEventListener("abort",i)));let h=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(u);if(h&&-1===t7.protocols.indexOf(h)){n(new te("Unsupported protocol "+h+":",te.ERR_BAD_REQUEST,t));return}// Send the request
l.send(r||null)})};const eb={http:null,xhr:ew};tt.forEach(eb,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var eE={getAdapter:t=>{let e,n;t=tt.isArray(t)?t:[t];let{length:i}=t;for(let r=0;r<i&&(e=t[r],!(n=tt.isString(e)?eb[e.toLowerCase()]:e));r++);if(!n){if(!1===n)throw new te(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(tt.hasOwnProp(eb,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!tt.isFunction(n))throw TypeError("adapter is not a function");return n},adapters:eb};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eT(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ef(null,t)}function eI(t){eT(t),t.headers=eu.from(t.headers),// Transform request data
t.data=ec.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=eE.getAdapter(t.adapter||ee.adapter);return e(t).then(function(e){return eT(t),// Transform response data
e.data=ec.call(t,t.transformResponse,e),e.headers=eu.from(e.headers),e},function(e){return!eh(e)&&(eT(t),e&&e.response&&(e.response.data=ec.call(t,t.transformResponse,e.response),e.response.headers=eu.from(e.response.headers))),Promise.reject(e)})}const eS=t=>t instanceof eu?t.toJSON():t;function eA(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let n={};function i(t,e,n){return tt.isPlainObject(t)&&tt.isPlainObject(e)?tt.merge.call({caseless:n},t,e):tt.isPlainObject(e)?tt.merge({},e):tt.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function r(t,e,n){return tt.isUndefined(e)?tt.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}// eslint-disable-next-line consistent-return
function s(t,e){if(!tt.isUndefined(e))return i(void 0,e)}// eslint-disable-next-line consistent-return
function o(t,e){return tt.isUndefined(e)?tt.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}// eslint-disable-next-line consistent-return
function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}let l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(eS(t),eS(e),!0)};return tt.forEach(Object.keys(Object.assign({},t,e)),function(i){let s=l[i]||r,o=s(t[i],e[i],i);tt.isUndefined(o)&&s!==a||(n[i]=o)}),n}const ex="1.5.0",eC={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eC[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const e_={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */eC.transitional=function(t,e,n){function i(t,e){return"[Axios v"+ex+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}// eslint-disable-next-line func-names
return(n,r,s)=>{if(!1===t)throw new te(i(r," has been removed"+(e?" in "+e:"")),te.ERR_DEPRECATED);return e&&!e_[r]&&(e_[r]=!0,// eslint-disable-next-line no-console
console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var ek={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,n){if("object"!=typeof t)throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);let i=Object.keys(t),r=i.length;for(;r-- >0;){let s=i[r],o=e[s];if(o){let e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new te("option "+s+" must be "+n,te.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}},validators:eC};const eN=ek.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eD{constructor(t){this.defaults=t,this.interceptors={request:new t2,response:new t2}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let n,i;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=eA(this.defaults,e);let{transitional:r,paramsSerializer:s,headers:o}=e;void 0!==r&&ek.assertOptions(r,{silentJSONParsing:eN.transitional(eN.boolean),forcedJSONParsing:eN.transitional(eN.boolean),clarifyTimeoutError:eN.transitional(eN.boolean)},!1),null!=s&&(tt.isFunction(s)?e.paramsSerializer={serialize:s}:ek.assertOptions(s,{encode:eN.function,serialize:eN.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=o&&tt.merge(o.common,o[e.method]);o&&tt.forEach(["delete","get","head","post","put","patch","common"],t=>{delete o[t]}),e.headers=eu.concat(a,o);// filter out skipped interceptors
let l=[],u=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(u=u&&t.synchronous,l.unshift(t.fulfilled,t.rejected))});let c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let h=0;if(!u){let t=[eI.bind(this),void 0];for(t.unshift.apply(t,l),t.push.apply(t,c),i=t.length,n=Promise.resolve(e);h<i;)n=n.then(t[h++],t[h++]);return n}i=l.length;let f=e;for(h=0;h<i;){let t=l[h++],e=l[h++];try{f=t(f)}catch(t){e.call(this,t);break}}try{n=eI.call(this,f)}catch(t){return Promise.reject(t)}for(h=0,i=c.length;h<i;)n=n.then(c[h++],c[h++]);return n}getUri(t){t=eA(this.defaults,t);let e=ep(t.baseURL,t.url);return t1(e,t.params,t.paramsSerializer)}}tt.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eD.prototype[t]=function(e,n){return this.request(eA(n||{},{method:t,url:e,data:(n||{}).data}))}}),tt.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(n,i,r){return this.request(eA(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}eD.prototype[t]=e(),eD.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eO{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let n=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let i=new Promise(t=>{n.subscribe(t),e=t}).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t(function(t,i,r){n.reason||(n.reason=new ef(t,i,r),e(n.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eO(function(e){t=e});return{token:e,cancel:t}}}const eR={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eR).forEach(([t,e])=>{eR[e]=t});// Create the default instance to be exported
const eL=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let n=new eD(e),i=T(eD.prototype.request,n);return tt.extend(i,eD.prototype,n,{allOwnKeys:!0}),tt.extend(i,n,null,{allOwnKeys:!0}),// Factory for creating new instances
i.create=function(n){return t(eA(e,n))},i}(ee);// Expose Axios class to allow class inheritance
eL.Axios=eD,// Expose Cancel & CancelToken
eL.CanceledError=ef,eL.CancelToken=eO,eL.isCancel=eh,eL.VERSION=ex,eL.toFormData=tX,// Expose AxiosError class
eL.AxiosError=te,// alias for CanceledError for backward compatibility
eL.Cancel=eL.CanceledError,// Expose all/spread
eL.all=function(t){return Promise.all(t)},eL.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eL.isAxiosError=function(t){return tt.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eL.mergeConfig=eA,eL.AxiosHeaders=eu,eL.formToJSON=t=>et(tt.isHTMLForm(t)?new FormData(t):t),eL.getAdapter=eE.getAdapter,eL.HttpStatusCode=eR,eL.default=eL;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:eP,AxiosError:eM,CanceledError:eB,isCancel:eF,CancelToken:eU,VERSION:ej,all:eV,Cancel:e$,isAxiosError:ez,spread:eq,toFormData:eH,AxiosHeaders:eK,HttpStatusCode:eG,formToJSON:eW,getAdapter:eQ,mergeConfig:eX}=eL;async function eJ(t){try{let e=await eL.get("https://books-backend.p.goit.global/books/"+t);return e.data}catch(t){console.error("An error occurred while fetching data:",t)}}async function eY(){let{data:t}=await eL.get("https://books-backend.p.goit.global/books/category-list");return t}const eZ=document.querySelector(".categories-list");(async function t(){try{let t=await eY();if(!t.length){(0,E.Notify).failure("Oops something going wrong.");return}eZ.insertAdjacentHTML("beforeend",t.map(({list_name:t})=>`
    <li class="categories-list-item">
      <a href="#" class="categories-link">${t}</a>
    </li>
  `).join(""))}catch(t){console.log("TRY-CATCH:",t),(0,E.Notify).failure("Oops something going wrong.")}})(),eZ.addEventListener("click",t=>{t.preventDefault()}),w("fewGv");const e0=(t,e)=>{try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},e1=t=>{try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}};!function(){let t=document.querySelector(".loader");t.style.display="block"}();const e2=document.querySelector(".common-list");document.querySelector(".main-title");const e9=document.querySelector(".categories-list");let e4=window.innerWidth<767?1:window.innerWidth<1439?3:5;function e5(t){!function(){let t=document.querySelector(".loader");t.style.display="none"}();let e="";for(let n of t){let{books:t,list_name:i}=n;e+=` 
        <li class="common-item">
        <h2 class="common-title">${i}</h2>
        <ul class="book-list">
            ${function(t,e){let n="";for(let i=0;i<e;i+=1){let{book_image:e,title:r,author:s,_id:o}=t[i];n+=`
              <li class="book-item" data-id="${o}">
             
              <a href="#" class="book-link"> 
              <div class="thumb">
              <img src="${e||"../images/default_image.jpg"}" alt="${r}" class="book-img" data-id="${o}">
              <p class="notifications">quick view</p>
              </div> 
              <h3 class="book-title">${r}</h3>
              <p class="book-author">${s}</p>
              </a>
              </li>
            `}return n}(t,e4)}
        </ul>
        <button type="button" class="showMore-btn" name="${i}">see more</button>
    </li>`}e2.innerHTML=e}e9.firstElementChild.addEventListener("click",function(){let t=e1("data");console.log(t),e5(t)}),window.addEventListener("resize",function(){let t=window.innerWidth<767?1:window.innerWidth<1439?3:5;if(t!=e4){e4=t;let e=e1("data");e5(e)}}),eJ("top-books").then(t=>{e0("data",t),e5(t)}).catch(t=>console.log(t));var e6=w("7Y9D8");const e3={categories:document.querySelector(".categories-list"),title:document.querySelector(".main-title"),list:document.querySelector(".common-list")},e8="Sorry, there are no books matching the selected category. Please select something else.",e7="Sorry, something went wrong. Try again!";e3.categories.addEventListener("click",function(t){"categories-link"===t.target.className&&(no(t.target),nt=t.target.textContent.replaceAll(" ","%20"),t.target!==e3.categories.firstElementChild.firstElementChild&&nn(nt).then(t=>{if(0===t.data.length)throw Error((0,e6.Notify).info(e8));let e=t.data[0].list_name;e3.title.textContent=nr(e),e3.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${ns(e)}</span>`),e3.list.innerHTML=ni(t.data)}).catch(function(t){t.response?(0,e6.Notify).failure(e7):t.request&&(0,e6.Notify).failure(e7)}))}),e3.list.addEventListener("click",function(t){"showMore-btn"===t.target.className&&(console.log(t.target),nn(t.target.name.replaceAll(" ","%20")).then(t=>{if(0===t.data.length)throw Error((0,e6.Notify).info(e8));let e=t.data[0].list_name;e3.title.textContent=nr(e),e3.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${ns(e)}</span>`),e3.list.innerHTML=ni(t.data)}).catch(function(t){t.response?(0,e6.Notify).failure(e7):t.request&&(0,e6.Notify).failure(e7)}))});let nt="",ne=e3.categories.firstElementChild.firstElementChild;async function nn(t){let e=`https://books-backend.p.goit.global/books/category?category=${t}`,n=await eL.get(e);return n}function ni(t){return t.map(({book_image:t,author:e,title:n,_id:i})=>{let r=`<li class="book-item" data-id="${i}">
            <a href="#" class="book-link">
                <img class="book-img" src="${t||"../images/default_image.jpg"}" data-id="${i}" alt="${n}"> 
                <h3 class="book-title">${n}</h3>
                <p class="book-author">${e}</p>
            </a>
        </li>`;return r}).join("")}function nr(t){let e=t.split(" ");return e.splice(0,e.length-1).join(" ")}function ns(t){let e=t.split(" ");return e[e.length-1]}function no(t){ne&&ne.classList.remove("category-active"),t.classList.add("category-active"),ne=t}no(ne);var na={};na=new URL(w("kyEFX").resolve("8XY7q"),import.meta.url).toString();var nl={};nl=new URL(w("kyEFX").resolve("3WxNb"),import.meta.url).toString();var nu={};nu=new URL(w("kyEFX").resolve("lJIFT"),import.meta.url).toString();const nc=document.querySelector(".common-list"),nh=document.querySelector(".modal__content"),nf=document.querySelector("#book-modal"),nd=document.getElementById("book-modal"),np=document.querySelector(".modal__close-btn"),ng=document.querySelector(".add-bookBtn");document.querySelector(".addNotification");const nm=document.querySelector(".removeNotification"),ny=document.querySelector(".notification");nc.addEventListener("click",//!------------------
function(t){"book-img"===t.target.className&&(document.body.style.overflow="hidden",nf.classList.remove("is-hidden"),nw(t.target.dataset.id).then(t=>{//!-------
let{author:e,title:n,description:i,book_image:r,buy_links:s,list_name:o,_id:a}=t.data;nv={author:e,title:n,description:i,book_image:r,buy_links:s,list_name:o,id:a},// console.log(book);
//!--------------------
nh.innerHTML="",nh.insertAdjacentHTML("afterbegin",function({author:t,title:e,description:n,book_image:i,buy_links:r}){let s=`<div class="modal__img-container"> 
        <img src="${i}" alt="${e}" class="modal__img"> 
      </div> 
      <div class="modal__desc"> 
        <h2 class="modal__title">${e}</h2> 
        <p class="modal__author">${t}</p> 
        <p class="modal__book-desc">${n}</p>
        <ul class="modal-book-image-list">
        <li>
        <a href=${nb(r,"Amazon")} target= _blank><img src="${/*@__PURE__*/m(na)}" alt="Amazon"></a>
          
        </li>
        <li>
        <a href=${nb(r,"Apple Books")} target= _blank><img src="${/*@__PURE__*/m(nl)}" alt="Apple-Books"></a>
          

        </li>
        <li>
        <a href=${nb(r,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/m(nu)}" alt="Book-Shop"></a>
         

        </li>
      </ul> 
</div>`;return s}(t.data))}))});// console.log(commonListRef);
//!----------
let nv={};async function nw(t){let e=`https://books-backend.p.goit.global/books/${t}`,n=await eL.get(e);return n}function nb(t,e){for(let{name:n,url:i}of t)if(n===e)return i}document.addEventListener("DOMContentLoaded",function(){function t(){document.body.style.overflow="auto",nd.classList.add("is-hidden")}np.addEventListener("click",t),document.addEventListener("keydown",function(e){"Escape"===e.key&&t()}),nd.addEventListener("click",function(e){e.target===nd&&t()}),nh.addEventListener("click",function(t){t.stopPropagation()})}),document.addEventListener("DOMContentLoaded",function(){ng.addEventListener("click",function(){"Add to shopping list"===ng.textContent?(ng.textContent="Remove from the shopping list",nm.classList.remove("hidden"),ny.classList.remove("hidden")):(ng.textContent="Add to shopping list",nm.classList.add("hidden"),ny.classList.add("hidden"))})});//!--------------------------------
const nE="bookArr";ng.addEventListener("click",function(t){!function(t){let e=JSON.parse(localStorage.getItem(nE))??[];if(0===e.length)e.push(t);else if(e.length>0){let n=t.id;JSON.parse(localStorage.getItem(nE));let i=e.findIndex(({id:t})=>t===n);-1===i&&(e.push(t),console.log(e))}localStorage.setItem(nE,JSON.stringify(e))}//!--------------------------------
(nv)});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var nT={},nI=nT={};function nS(){throw Error("setTimeout has not been defined")}function nA(){throw Error("clearTimeout has not been defined")}function nx(t){if(sr===setTimeout)return setTimeout(t,0);// if setTimeout wasn't available but was latter defined
if((sr===nS||!sr)&&setTimeout)return sr=setTimeout,setTimeout(t,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return sr(t,0)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return sr.call(null,t,0)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return sr.call(this,t,0)}}}!function(){try{sr="function"==typeof setTimeout?setTimeout:nS}catch(t){sr=nS}try{ss="function"==typeof clearTimeout?clearTimeout:nA}catch(t){ss=nA}}();var nC=[],n_=!1,nk=-1;function nN(){n_&&so&&(n_=!1,so.length?nC=so.concat(nC):nk=-1,nC.length&&nD())}function nD(){if(!n_){var t=nx(nN);n_=!0;for(var e=nC.length;e;){for(so=nC,nC=[];++nk<e;)so&&so[nk].run();nk=-1,e=nC.length}so=null,n_=!1,function(t){if(ss===clearTimeout)return clearTimeout(t);// if clearTimeout wasn't available but was latter defined
if((ss===nA||!ss)&&clearTimeout)return ss=clearTimeout,clearTimeout(t);try{ss(t)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return ss.call(null,t)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return ss.call(this,t)}}}(t)}}// v8 likes predictible objects
function nO(t,e){this.fun=t,this.array=e}function nR(){}nI.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];nC.push(new nO(t,e)),1!==nC.length||n_||nx(nD)},nO.prototype.run=function(){this.fun.apply(null,this.array)},nI.title="browser",nI.browser=!0,nI.env={},nI.argv=[],nI.version="",nI.versions={},nI.on=nR,nI.addListener=nR,nI.once=nR,nI.off=nR,nI.removeListener=nR,nI.removeAllListeners=nR,nI.emit=nR,nI.prependListener=nR,nI.prependOnceListener=nR,nI.listeners=function(t){return[]},nI.binding=function(t){throw Error("process.binding is not supported")},nI.cwd=function(){return"/"},nI.chdir=function(t){throw Error("process.chdir is not supported")},nI.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=function(t){// TODO(user): Use native implementations if/when available
let e=[],n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:(r<2048?e[n++]=r>>6|192:((64512&r)==55296&&i+1<t.length&&(64512&t.charCodeAt(i+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128):e[n++]=r>>12|224,e[n++]=r>>6&63|128),e[n++]=63&r|128)}return e},nP=function(t){// TODO(user): Use native implementations if/when available
let e=[],n=0,i=0;for(;n<t.length;){let r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){// Surrogate Pair
let s=t[n++],o=t[n++],a=t[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{let s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},nM={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){let r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,u=r>>2,c=(3&r)<<4|o>>4,h=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(h=64)),i.push(n[u],n[c],n[h],n[f])}return i.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(t,e){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nL(t),e))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(t,e){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!e?atob(t):nP(this.decodeStringToByteArray(t,e)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){let r=n[t.charAt(e++)],s=e<t.length,o=s?n[t.charAt(e)]:0;++e;let a=e<t.length,l=a?n[t.charAt(e)]:64;++e;let u=e<t.length,c=u?n[t.charAt(e)]:64;if(++e,null==r||null==o||null==l||null==c)throw new nB;let h=r<<2|o>>4;if(i.push(h),64!==l){let t=o<<4&240|l>>2;if(i.push(t),64!==c){let t=l<<6&192|c;i.push(t)}}}return i},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};/**
 * An error encountered while decoding base64 string.
 */class nB extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const nF=function(t){let e=nL(t);return nM.encodeByteArray(e,!0)},nU=function(t){// Use base64url encoding and remove padding in the end (dot characters).
return nF(t).replace(/\./g,"")},nj=function(t){try{return nM.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},nV=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==g)return g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,n$=()=>{if(void 0===nT||void 0===nT.env)return;let t=void 0;if(t)return JSON.parse(t)},nz=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let e=t&&nj(t[1]);return e&&JSON.parse(e)},nq=()=>{try{return nV()||n$()||nz()}catch(t){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nH=t=>{var e,n;return null===(n=null===(e=nq())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},nK=t=>{let e=nH(t);if(!e)return;let n=e.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(n<=0||n+1===e.length)throw Error(`Invalid host ${e} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},nG=()=>{var t;return null===(t=nq())||void 0===t?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function nQ(){try{return"object"==typeof indexedDB}catch(t){return!1}}/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */function nX(){return new Promise((t,e)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class nJ extends Error{constructor(/** The error code for this error. */t,e,/** Custom data for this error. */n){super(e),this.code=t,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,nJ.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nY.prototype.create)}}class nY{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){let n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?r.replace(nZ,(t,e)=>{let i=n[e];return null!=i?String(i):`<${e}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new nJ(i,o,n);return a}}const nZ=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function n0(t,e){if(t===e)return!0;let n=Object.keys(t),i=Object.keys(e);for(let r of n){if(!i.includes(r))return!1;let n=t[r],s=e[r];if(n1(n)&&n1(s)){if(!n0(n,s))return!1}else if(n!==s)return!1}for(let t of i)if(!n.includes(t))return!1;return!0}function n1(t){return null!==t&&"object"==typeof t}/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */function n2(t,e=1e3,n=2){// Calculates an exponentially increasing value.
// Deviation: calculates value from count and a constant interval, so we only need to save value
// and count to restore state.
let i=e*Math.pow(n,t);// Limits backoff to max to avoid effectively permanent backoff.
return Math.min(144e5,i+Math.round(// Deviation: changes multiplication order to improve readability.
.5*i*// A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
// if we add or subtract.
(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n9(t){return t&&t._delegate?t._delegate:t}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class n4{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class n6{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(t){// if multipleInstances is not supported, use the default name
let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let t=new nW;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=t,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:n5})}catch(t){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[t,e]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(t);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(t=n5){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=n5){return this.instances.has(t)}getOptions(t=n5){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:e});// resolve any pending promise waiting for the service instance
for(let[t,e]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);n===r&&e.resolve(i)}return i}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(t,e){var n;let i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(t,e){let n=this.onInitCallbacks.get(e);if(n)for(let i of n)try{i(t,e)}catch(t){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===n5?void 0:t,options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(t=n5){return this.component?this.component.multipleInstances?t:n5:t// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class n3{constructor(t){this.name=t,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){let e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(t){if(this.providers.has(t))return this.providers.get(t);// create a Provider for a service that hasn't registered with Firebase
let e=new n6(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */const n8=[];(st=sa||(sa={}))[st.DEBUG=0]="DEBUG",st[st.VERBOSE=1]="VERBOSE",st[st.INFO=2]="INFO",st[st.WARN=3]="WARN",st[st.ERROR=4]="ERROR",st[st.SILENT=5]="SILENT";const n7={debug:sa.DEBUG,verbose:sa.VERBOSE,info:sa.INFO,warn:sa.WARN,error:sa.ERROR,silent:sa.SILENT},it=sa.INFO,ie={[sa.DEBUG]:"log",[sa.VERBOSE]:"log",[sa.INFO]:"info",[sa.WARN]:"warn",[sa.ERROR]:"error"},ii=(t,e,...n)=>{if(e<t.logLevel)return;let i=new Date().toISOString(),r=ie[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ir{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(t){this.name=t,/**
         * The log level of the given Logger instance.
         */this._logLevel=it,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=ii,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */n8.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in sa))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}// Workaround for setter/getter having to be the same type.
setLogLevel(t){this._logLevel="string"==typeof t?n7[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}/**
     * The functions below are all based on the `console` interface
     */debug(...t){this._userLogHandler&&this._userLogHandler(this,sa.DEBUG,...t),this._logHandler(this,sa.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,sa.VERBOSE,...t),this._logHandler(this,sa.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,sa.INFO,...t),this._logHandler(this,sa.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,sa.WARN,...t),this._logHandler(this,sa.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,sa.ERROR,...t),this._logHandler(this,sa.ERROR,...t)}}const is=(t,e)=>e.some(e=>t instanceof e),io=new WeakMap,ia=new WeakMap,il=new WeakMap,iu=new WeakMap,ic=new WeakMap;let ih={get(t,e,n){if(t instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===e)return ia.get(t);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===e)return t.objectStoreNames||il.get(t);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return id(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function id(n){var i;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(n instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(id(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&io.set(e,t);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
ic.set(e,t),e}(n);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(iu.has(n))return iu.get(n);let r="function"==typeof(i=n)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(e||(e=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...t){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
i.apply(ip(this),t),id(io.get(this)))}:function(...t){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return id(i.apply(ip(this),t))}:function(t,...e){let n=i.call(ip(this),t,...e);return il.set(n,t.sort?t.sort():[t]),id(n)}:(i instanceof IDBTransaction&&function(t){// Early bail if we've already created a done promise for this transaction.
if(ia.has(t))return;let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});// Cache it for later retrieval.
ia.set(t,e)}(i),is(i,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,ih):i;return r!==n&&(iu.set(n,r),ic.set(r,n)),r}const ip=t=>ic.get(t),ig=["get","getKey","getAll","getAllKeys","count"],im=["put","add","delete","clear"],iy=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(iy.get(e))return iy.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,r=im.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ig.includes(n)))return;let s=async function(t,...e){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(t,r?"readwrite":"readonly"),o=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return iy.set(e,s),s}ih={...r4=ih,get:(t,e,n)=>iv(t,e)||r4.get(t,e,n),has:(t,e)=>!!iv(t,e)||r4.has(t,e)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(t){this.container=t}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let t=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return t.map(t=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(t){let e=t.getComponent();return(null==e?void 0:e.type)==="VERSION"/* ComponentType.VERSION */}(t))return null;{let e=t.getImmediate();return`${e.library}/${e.version}`}}).filter(t=>t).join(" ")}}const ib="@firebase/app",iE="0.9.18",iT=new ir("@firebase/app"),iI="[DEFAULT]",iS={[ib]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},iA=new Map,ix=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function iC(t){let e=t.name;if(ix.has(e))return iT.debug(`There were multiple attempts to register component ${e}.`),!1;// add the component to existing app instances
for(let n of(ix.set(e,t),iA.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(t,e){try{t.container.addComponent(e)}catch(n){iT.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}(n,t);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function i_(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}const ik=new nY("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new n4("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw ik.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}function iD(t,e={}){let n=t;if("object"!=typeof e){let t=e;e={name:t}}let i=Object.assign({name:iI,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw ik.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(r)});if(n||(n=nG()),!n)throw ik.create("no-options"/* AppError.NO_OPTIONS */);let s=iA.get(r);if(s){// return the existing app if options and config deep equal the ones in the existing app.
if(n0(n,s.options)&&n0(i,s.config))return s;throw ik.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:r})}let o=new n3(r);for(let t of ix.values())o.addComponent(t);let a=new iN(n,i,o);return iA.set(r,a),a}/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function iO(t=iI){let e=iA.get(t);if(!e&&t===iI&&nG())return iD();if(!e)throw ik.create("no-app"/* AppError.NO_APP */,{appName:t});return e}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function iR(t,e,n){var i;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let r=null!==(i=iS[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let t=[`Unable to register library "${r}" with version "${e}":`];s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),iT.warn(t.join(" "));return}iC(new n4(`${r}-version`,()=>({library:r,version:e}),"VERSION"/* ComponentType.VERSION */))}const iL="firebase-heartbeat-store";let iP=null;function iM(){return iP||(iP=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(t,1),a=id(o);return i&&o.addEventListener("upgradeneeded",t=>{i(id(o.result),t.oldVersion,t.newVersion,id(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",t=>r(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(t,e)=>{0===e&&t.createObjectStore(iL)}}).catch(t=>{throw ik.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:t.message})})),iP}async function iB(t){try{let e=await iM(),n=await e.transaction(iL).objectStore(iL).get(iU(t));return n}catch(t){if(t instanceof nJ)iT.warn(t.message);else{let e=ik.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==t?void 0:t.message});iT.warn(e.message)}}}async function iF(t,e){try{let n=await iM(),i=n.transaction(iL,"readwrite"),r=i.objectStore(iL);await r.put(e,iU(t)),await i.done}catch(t){if(t instanceof nJ)iT.warn(t.message);else{let e=ik.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==t?void 0:t.message});iT.warn(e.message)}}}function iU(t){return`${t.name}!${t.options.appId}`}class ij{constructor(t){this.container=t,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new i$(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=iV();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let e=new Date(t.date).valueOf(),n=Date.now();return n-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let t=iV(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],i=t.slice();for(let r of t){// Look for an existing entry with the same user agent.
let t=n.find(t=>t.agent===r.agent);if(t)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(t.dates.push(r.date),iz(n)>e){t.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:r.agent,dates:[r.date]}),iz(n)>e){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=nU(JSON.stringify({version:2,heartbeats:e}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=n,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i)}}function iV(){let t=new Date;// Returns date format 'YYYY-MM-DD'
return t.toISOString().substring(0,10)}class i${constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!nQ()&&nX().then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let t=await this._canUseIndexedDBPromise;if(!t)return{heartbeats:[]};{let t=await iB(this.app);return t||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return iF(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}// add heartbeats
async add(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return iF(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function iz(t){// base64 has a restricted set of characters, all of which should be 1 byte.
return nU(JSON.stringify({version:2,heartbeats:t})).length}iC(new n4("platform-logger",t=>new iw(t),"PRIVATE"/* ComponentType.PRIVATE */)),iC(new n4("heartbeat",t=>new ij(t),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
iR(ib,iE,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
iR(ib,iE,"esm2017"),// Register platform SDK identifier (no version).
iR("fire-js",""),iR("firebase","10.3.1","app");const iq=(t,e)=>e.some(e=>t instanceof e),iH=new WeakMap,iK=new WeakMap,iG=new WeakMap,iW=new WeakMap,iQ=new WeakMap;let iX={get(t,e,n){if(t instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===e)return iK.get(t);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===e)return t.objectStoreNames||iG.get(t);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return iJ(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function iJ(t){var e;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(t instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(iJ(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&iH.set(e,t);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
iQ.set(e,t),e}(t);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(iW.has(t))return iW.get(t);let r="function"==typeof(e=t)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
e.apply(iY(this),t),iJ(iH.get(this)))}:function(...t){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return iJ(e.apply(iY(this),t))}:function(t,...n){let i=e.call(iY(this),t,...n);return iG.set(i,t.sort?t.sort():[t]),iJ(i)}:(e instanceof IDBTransaction&&function(t){// Early bail if we've already created a done promise for this transaction.
if(iK.has(t))return;let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});// Cache it for later retrieval.
iK.set(t,e)}(e),iq(e,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,iX):e;return r!==t&&(iW.set(t,r),iQ.set(r,t)),r}const iY=t=>iQ.get(t),iZ=["get","getKey","getAll","getAllKeys","count"],i0=["put","add","delete","clear"],i1=new Map;function i2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(i1.get(e))return i1.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,r=i0.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||iZ.includes(n)))return;let s=async function(t,...e){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(t,r?"readwrite":"readonly"),o=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return i1.set(e,s),s}iX={...r5=iX,get:(t,e,n)=>i2(t,e)||r5.get(t,e,n),has:(t,e)=>!!i2(t,e)||r5.has(t,e)};const i9="@firebase/installations",i4="0.6.4",i5=`w:${i4}`,i6="FIS_v2",i3=new nY("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});/** Returns true if error is a FirebaseError that is based on an error from the server. */function i8(t){return t instanceof nJ&&t.code.includes("request-failed"/* ErrorCode.REQUEST_FAILED */)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function rt(t){return{token:t.token,requestStatus:2/* RequestStatus.COMPLETED */,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function re(t,e){let n=await e.json(),i=n.error;return i3.create("request-failed"/* ErrorCode.REQUEST_FAILED */,{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function rn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */async function ri(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let i=i7(t),r=rn(t),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let o={fid:n,authVersion:i6,appId:t.appId,sdkVersion:i5},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await ri(()=>fetch(i,a));if(l.ok){let t=await l.json(),e={fid:t.fid||n,registrationStatus:2/* RequestStatus.COMPLETED */,refreshToken:t.refreshToken,authToken:rt(t.authToken)};return e}throw await re("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Returns a promise that resolves after given time passes. */function rs(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Returns a string key that can be used to identify the app. */function ra(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Map;/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */function ru(t,e){let n=ra(t);rc(n,e),function(t,e){let n=(!rh&&"BroadcastChannel"in self&&((rh=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{rc(t.data.key,t.data.fid)}),rh);n&&n.postMessage({key:t,fid:e}),0===rl.size&&rh&&(rh.close(),rh=null)}(n,e)}function rc(t,e){let n=rl.get(t);if(n)for(let t of n)t(e)}let rh=null;const rf="firebase-installations-store";let rd=null;function rp(){return rd||(rd=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(t,1),a=iJ(o);return i&&o.addEventListener("upgradeneeded",t=>{i(iJ(o.result),t.oldVersion,t.newVersion,iJ(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}("firebase-installations-database",0,{upgrade:(t,e)=>{0===e&&t.createObjectStore(rf)}})),rd}/** Assigns or overwrites the record for the given key with the given value. */async function rg(t,e){let n=ra(t),i=await rp(),r=i.transaction(rf,"readwrite"),s=r.objectStore(rf),o=await s.get(n);return await s.put(e,n),await r.done,o&&o.fid===e.fid||ru(t,e.fid),e}/** Removes record(s) from the objectStore that match the given key. */async function rm(t){let e=ra(t),n=await rp(),i=n.transaction(rf,"readwrite");await i.objectStore(rf).delete(e),await i.done}/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */async function ry(t,e){let n=ra(t),i=await rp(),r=i.transaction(rf,"readwrite"),s=r.objectStore(rf),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&ru(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */async function rv(t){let e;let n=await ry(t.appConfig,n=>{let i=/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */function(t){let e=t||{fid:/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */function(){try{// A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
// bytes. our implementation generates a 17 byte array instead.
let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),// Replace the first 4 random bits with the constant FID header of 0b0111.
t[0]=112+t[0]%16;let n=/** Converts a FID Uint8Array to a base64 string representation. */function(t){let e=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);// Remove the 23rd character that was added because of the extra 4 bits at the
// end of our 17 byte array, and the '=' padding.
return e.substr(0,22)}(t);return ro.test(n)?n:""}catch(t){// FID generation errored
return""}}(),registrationStatus:0/* RequestStatus.NOT_STARTED */};return rT(e)}(n),r=/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */function(t,e){if(0/* RequestStatus.NOT_STARTED */===e.registrationStatus){if(!navigator.onLine){// Registration required but app is offline.
let t=Promise.reject(i3.create("app-offline"/* ErrorCode.APP_OFFLINE */));return{installationEntry:e,registrationPromise:t}}// Try registering. Change status to IN_PROGRESS.
let n={fid:e.fid,registrationStatus:1/* RequestStatus.IN_PROGRESS */,registrationTime:Date.now()},i=rw(t,n);return{installationEntry:n,registrationPromise:i}}return 1/* RequestStatus.IN_PROGRESS */===e.registrationStatus?{installationEntry:e,registrationPromise:rb(t)}:{installationEntry:e}}(t,i);return e=r.registrationPromise,r.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}/** This will be executed only once for each new Firebase Installation. */async function rw(t,e){try{let n=await rr(t,e);return rg(t.appConfig,n)}catch(n){throw i8(n)&&409===n.customData.serverCode?// Generate a new ID next time.
await rm(t.appConfig):await rg(t.appConfig,{fid:e.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}),n}}/** Call if FID registration is pending in another request. */async function rb(t){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let e=await rE(t.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===e.registrationStatus;)// createInstallation request still in progress.
await rs(100),e=await rE(t.appConfig);if(0/* RequestStatus.NOT_STARTED */===e.registrationStatus){// The request timed out or failed in a different call. Try again.
let{installationEntry:e,registrationPromise:n}=await rv(t);return n||e}return e}/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */function rE(t){return ry(t,t=>{if(!t)throw i3.create("installation-not-found"/* ErrorCode.INSTALLATION_NOT_FOUND */);return rT(t)})}function rT(t){return 1/* RequestStatus.IN_PROGRESS */===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}:t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI({appConfig:t,heartbeatServiceProvider:e},n){let i=function(t,{fid:e}){return`${i7(t)}/${e}/authTokens:generate`}(t,n),r=function(t,{refreshToken:e}){let n=rn(t);return n.append("Authorization",`${i6} ${e}`),n}(t,n),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}let o={installation:{sdkVersion:i5,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await ri(()=>fetch(i,a));if(l.ok){let t=await l.json(),e=rt(t);return e}throw await re("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */async function rS(t,e=!1){let n;let i=await ry(t.appConfig,i=>{var r;if(!r_(i))throw i3.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let s=i.authToken;if(!e&&2/* RequestStatus.COMPLETED */===(r=s).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(r))return i;if(1/* RequestStatus.IN_PROGRESS */===s.requestStatus)return(// There already is a token request in progress.
n=rA(t,e),i);{// No token or token expired.
if(!navigator.onLine)throw i3.create("app-offline"/* ErrorCode.APP_OFFLINE */);let e=/** Returns an updated InstallationEntry with an InProgressAuthToken. */function(t){let e={requestStatus:1/* RequestStatus.IN_PROGRESS */,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(i);return n=rC(t,e),e}}),r=n?await n:i.authToken;return r}/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */async function rA(t,e){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let n=await rx(t.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===n.authToken.requestStatus;)// generateAuthToken still in progress.
await rs(100),n=await rx(t.appConfig);let i=n.authToken;return 0/* RequestStatus.NOT_STARTED */===i.requestStatus?rS(t,e):i}/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */function rx(t){return ry(t,t=>{if(!r_(t))throw i3.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let e=t.authToken;return 1/* RequestStatus.IN_PROGRESS */===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}}):t})}async function rC(t,e){try{let n=await rI(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await rg(t.appConfig,i),n}catch(n){if(i8(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))// Generate a new ID next time.
await rm(t.appConfig);else{let n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}});await rg(t.appConfig,n)}throw n}}function r_(t){return void 0!==t&&2/* RequestStatus.COMPLETED */===t.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */async function rk(t){let{installationEntry:e,registrationPromise:n}=await rv(t);return n?n.catch(console.error):// token if needed.
rS(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function rN(t,e=!1){await rD(t);// At this point we either have a Registered Installation in the DB, or we've
// already thrown an error.
let n=await rS(t,e);return n.token}async function rD(t){let{registrationPromise:e}=await rv(t);e&&await e}function rO(t){return i3.create("missing-app-config-values"/* ErrorCode.MISSING_APP_CONFIG_VALUES */,{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="installations";iC(new n4(rR,t=>{let e=t.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(!t||!t.options)throw rO("App Configuration");if(!t.name)throw rO("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw rO(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),i=i_(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},"PUBLIC"/* ComponentType.PUBLIC */)),iC(new n4("installations-internal",t=>{let e=t.getProvider("app").getImmediate(),n=i_(e,rR).getImmediate();return{getId:()=>rk(n),getToken:t=>rN(n,t)}},"PRIVATE"/* ComponentType.PRIVATE */)),iR(i9,i4),iR(i9,i4,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Type constant for Firebase Analytics.
 */const rL="analytics",rP="https://www.googletagmanager.com/gtag/js",rM=new ir("@firebase/analytics"),rB=new nY("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Verifies and creates a TrustedScriptURL.
 */function rF(t){if(!t.startsWith(rP)){let e=rB.create("invalid-gtag-resource"/* AnalyticsError.INVALID_GTAG_RESOURCE */,{gtagURL:t});return rM.warn(e.message),""}return t}/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */function rU(t){return Promise.all(t.map(t=>t.catch(t=>t)))}/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */async function rj(t,e,n,i,r,s){// If config is already fetched, we know the appId and can use it to look up what FID promise we
/// are waiting for, and wait only on that one.
let o=i[r];try{if(o)await e[o];else{// If config is not fetched yet, wait for all configs (we don't know which one we need) and
// find the appId (if any) corresponding to this measurementId. If there is one, wait on
// that appId's initialization promise. If there is none, promise resolves and gtag
// call goes through.
let t=await rU(n),i=t.find(t=>t.measurementId===r);i&&await e[i.appId]}}catch(t){rM.error(t)}t("config"/* GtagCommand.CONFIG */,r,s)}/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */async function rV(t,e,n,i,r){try{let s=[];// If there's a 'send_to' param, check if any ID specified matches
// an initializeIds() promise we are waiting for.
if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);// Checking 'send_to' fields requires having all measurement ID results back from
// the dynamic config fetch.
let i=await rU(n);for(let n of t){// Any fetched dynamic measurement ID that matches this 'send_to' ID
let t=i.find(t=>t.measurementId===n),r=t&&e[t.appId];if(r)s.push(r);else{// Found an item in 'send_to' that is not associated
// directly with an FID, possibly a group.  Empty this array,
// exit the loop early, and let it get populated below.
s=[];break}}}0===s.length&&(s=Object.values(e)),// Run core gtag function with args after all relevant initialization
// promises have been resolved.
await Promise.all(s),// Workaround for http://b/141370449 - third argument cannot be undefined.
t("event"/* GtagCommand.EVENT */,i,r||{})}catch(t){rM.error(t)}}const r$=new /**
 * Stubbable retry data storage class.
 */class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */async function rz(t){var e;let{appId:n,apiKey:i}=t,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":i})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let t="";try{// Try to get any error message text from server response.
let n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw rB.create("config-fetch-failed"/* AnalyticsError.CONFIG_FETCH_FAILED */,{httpStatus:o.status,responseMessage:t})}return o.json()}/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */async function rq(t,e=r$,n){let{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw rB.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!r){if(s)return{measurementId:s,appId:i};throw rB.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}let o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rK;return setTimeout(async()=>{// Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
a.abort()},void 0!==n?n:6e4),rH({appId:i,apiKey:r,measurementId:s},o,a,e)}/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */async function rH(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=r$// for testing
){var s;let{appId:o,measurementId:a}=t;// Starts with a (potentially zero) timeout to support resumption from stored state.
// Ensures the throttle end time is honored if the last attempt timed out.
// Note the SDK will never make a request if the fetch timeout expires at this point.
try{await new Promise((t,n)=>{// Derives backoff from given end time, normalizing negative numbers to zero.
let r=Math.max(e-Date.now(),0),s=setTimeout(t,r);// Adds listener, rather than sets onabort, because signal is a shared object.
i.addEventListener(()=>{clearTimeout(s),// If the request completes before this timeout, the rejection has no effect.
n(rB.create("fetch-throttle"/* AnalyticsError.FETCH_THROTTLE */,{throttleEndTimeMillis:e}))})})}catch(t){if(a)return rM.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw t}try{let e=await rz(t);return(// Note the SDK only clears throttle state if response is success or non-retriable.
r.deleteThrottleMetadata(o),e)}catch(u){if(!/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */function(t){if(!(t instanceof nJ)||!t.customData)return!1;// Uses string index defined by ErrorData, which FirebaseError implements.
let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(u)){if(r.deleteThrottleMetadata(o),a)return rM.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:o,measurementId:a};throw u}let e=503===Number(null===(s=null==u?void 0:u.customData)||void 0===s?void 0:s.httpStatus)?n2(n,r.intervalMillis,30):n2(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+e,backoffCount:n+1};return(// Persists state.
r.setThrottleMetadata(o,l),rM.debug(`Calling attemptFetch again in ${e} millis`),rH(t,l,i,r))}}/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */class rK{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */async function rG(t,e,n,i,r){if(r&&r.global){t("event"/* GtagCommand.EVENT */,n,i);return}{let r=await e,s=Object.assign(Object.assign({},i),{send_to:r});t("event"/* GtagCommand.EVENT */,n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rW(){if(!nQ())return rM.warn(rB.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await nX()}catch(t){return rM.warn(rB.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */async function rQ(t,e,n,i,o,a,l){var u;let c=rq(t);// Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&rM.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>rM.error(t)),// Add to list to track state of all dynamic config promises.
e.push(c);let h=rW().then(t=>t?i.getId():void 0),[f,d]=await Promise.all([c,h]);!/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */function(t){let e=window.document.getElementsByTagName("script");for(let n of Object.values(e))if(n.src&&n.src.includes(rP)&&n.src.includes(t))return n;return null}(a)&&/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */function(t,e){let n;let i=(window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:rF})),n),r=document.createElement("script"),s=`${rP}?l=${t}&id=${e}`;r.src=i?null==i?void 0:i.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}(a,f.measurementId),s&&(o("consent"/* GtagCommand.CONSENT */,"default",s),s=void 0),// This command initializes gtag.js and only needs to be called once for the entire web app,
// but since it is idempotent, we can call it multiple times.
// We keep it together with other initialization logic for better code structure.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o("js",new Date);// User config added first. We don't want users to accidentally overwrite
// base Firebase config properties.
let p=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return(// guard against developers accidentally setting properties with prefix `firebase_`
p.origin="firebase",p.update=!0,null!=d&&(p.firebase_id=d),// It should be the first config command called on this GA-ID
// Initialize this GA-ID and set FID on it using the gtag config API.
// Note: This will trigger a page_view event unless 'send_page_view' is set to false in
// `configProperties`.
o("config"/* GtagCommand.CONFIG */,f.measurementId,p),r&&(o("set"/* GtagCommand.SET */,r),r=void 0),f.measurementId)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Analytics Service class.
 */class rX{constructor(t){this.app=t}_delete(){return delete rJ[this.app.options.appId],Promise.resolve()}}/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */let rJ={},rY=[];/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */const rZ={};/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */let r0="dataLayer",r1=!1;const r2="@firebase/analytics",r9="0.10.0";iC(new n4(rL,(t,{options:e})=>{// getImmediate for FirebaseApp will always succeed
let n=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return(/**
 * Analytics instance factory.
 * @internal
 */function(t,e,n){!/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */function(){let t=[];if(function(){let t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){let e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=rB.create("invalid-analytics-context"/* AnalyticsError.INVALID_ANALYTICS_CONTEXT */,{errorInfo:e});rM.warn(n.message)}}();let i=t.options.appId;if(!i)throw rB.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!t.options.apiKey){if(t.options.measurementId)rM.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rB.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}if(null!=rJ[i])throw rB.create("already-exists"/* AnalyticsError.ALREADY_EXISTS */,{id:i});if(!r1){var r,s;let t,e;t=[],Array.isArray(window[r0])?t=window[r0]:window[r0]=t;let{wrappedGtag:n,gtagCore:i}=(r="gtag",e=function(...t){// Must push IArguments object, not an array.
window[r0].push(arguments)},window[r]&&"function"==typeof window[r]&&(e=window[r]),window[r]=(s=e,/**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */async function(t,...e){try{// If event, check that relevant initialization promises have completed.
if("event"/* GtagCommand.EVENT */===t){let[t,n]=e;// If EVENT, second arg must be measurementId.
await rV(s,rJ,rY,t,n)}else if("config"/* GtagCommand.CONFIG */===t){let[t,n]=e;// If CONFIG, second arg must be measurementId.
await rj(s,rJ,rY,rZ,t,n)}else if("consent"/* GtagCommand.CONSENT */===t){let[t]=e;s("consent"/* GtagCommand.CONSENT */,"update",t)}else if("get"/* GtagCommand.GET */===t){let[t,n,i]=e;s("get"/* GtagCommand.GET */,t,n,i)}else if("set"/* GtagCommand.SET */===t){let[t]=e;// If SET, second arg must be params.
s("set"/* GtagCommand.SET */,t)}else s(t,...e)}catch(t){rM.error(t)}}),{gtagCore:e,wrappedGtag:window[r]});a=n,o=i,r1=!0}// Async but non-blocking.
// This map reflects the completion state of all promises for each appId.
rJ[i]=rQ(t,rY,rZ,e,o,r0,n);let l=new rX(t);return l}(n,i,e))},"PUBLIC"/* ComponentType.PUBLIC */)),iC(new n4("analytics-internal",function(t){try{let e=t.getProvider(rL).getImmediate();return{logEvent:(t,n,i)=>{var r;return r=e,void(r=n9(r),rG(a,rJ[r.app.options.appId],t,n,i).catch(t=>rM.error(t)))}}}catch(t){throw rB.create("interop-component-reg-failed"/* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */,{reason:t})}},"PRIVATE"/* ComponentType.PRIVATE */)),iR(r2,r9),iR(r2,r9,"esm2017"),w("7Y9D8");var r4,r5,r6,r3,r8,r7,st,se,sn,si,sr,ss,so,sa,sl,su="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==g?g:"undefined"!=typeof self?self:{},sc={},sh=sh||{},sf=su||self;function sd(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function sp(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function sg(t,e,n){return t.call.apply(t.bind,arguments)}function sm(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function sy(t,e,n){return(sy=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?sg:sm).apply(null,arguments)}function sv(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function sw(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function sb(){this.s=this.s,this.o=this.o}sb.prototype.s=!1,sb.prototype.sa=function(){this.s||(this.s=!0,this.N())},sb.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1};function sT(t){let e=t.length;if(0<e){let n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function sI(t,e){for(let e=1;e<arguments.length;e++){let n=arguments[e];if(sd(n)){let e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function sS(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}sS.prototype.h=function(){this.defaultPrevented=!0};var sA=function(){if(!sf.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{sf.addEventListener("test",()=>{},e),sf.removeEventListener("test",()=>{},e)}catch(t){}return t}();function sx(t){return/^[\s\xa0]*$/.test(t)}function sC(){var t=sf.navigator;return t&&(t=t.userAgent)?t:""}function s_(t){return -1!=sC().indexOf(t)}function sk(t){return sk[" "](t),t}sk[" "]=function(){};var sN=s_("Opera"),sD=s_("Trident")||s_("MSIE"),sO=s_("Edge"),sR=sO||sD,sL=s_("Gecko")&&!(-1!=sC().toLowerCase().indexOf("webkit")&&!s_("Edge"))&&!(s_("Trident")||s_("MSIE"))&&!s_("Edge"),sP=-1!=sC().toLowerCase().indexOf("webkit")&&!s_("Edge");function sM(){var t=sf.document;return t?t.documentMode:void 0}t:{var sB,sF="",sU=(sB=sC(),sL?/rv:([^\);]+)(\)|;)/.exec(sB):sO?/Edge\/([\d\.]+)/.exec(sB):sD?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(sB):sP?/WebKit\/(\S+)/.exec(sB):sN?/(?:Version)[ \/]?(\S+)/.exec(sB):void 0);if(sU&&(sF=sU?sU[1]:""),sD){var sj=sM();if(null!=sj&&sj>parseFloat(sF)){c=String(sj);break t}}c=sF}var sV=sf.document&&sD&&(sM()||parseInt(c,10))||void 0;function s$(t,e){if(sS.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sL){t:{try{sk(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:sz[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&s$.$.h.call(this)}}sw(s$,sS);var sz={2:"touch",3:"pen",4:"mouse"};s$.prototype.h=function(){s$.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var sq="closure_listenable_"+(1e6*Math.random()|0),sH=0;function sK(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++sH,this.fa=this.ia=!1}function sG(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sW(t,e,n){for(let i in t)e.call(n,t[i],i,t)}function sQ(t){let e={};for(let n in t)e[n]=t[n];return e}const sX="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sJ(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e])t[n]=i[n];for(let e=0;e<sX.length;e++)n=sX[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function sY(t){this.src=t,this.g={},this.h=0}function sZ(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=sE(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(sG(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function s0(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&!!n==s.capture&&s.la==i)return r}return -1}sY.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=s0(t,e,i,r);return -1<o?(e=t[o],n||(e.ia=!1)):((e=new sK(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var s1="closure_lm_"+(1e6*Math.random()|0),s2={};function s9(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=sp(r)?!!r.capture:!!r,a=s3(t);if(a||(t[s1]=a=new sY(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function t(e){return s6.call(t.src,t.listener,e)},n.proxy=i,i.src=t,i.listener=n,t.addEventListener)sA||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(s5(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function s4(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[sq])sZ(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(s5(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=s3(e))?(sZ(n,t),0==n.h&&(n.src=null,e[s1]=null)):sG(t)}}}function s5(t){return t in s2?s2[t]:s2[t]="on"+t}function s6(t,e){if(t.fa)t=!0;else{e=new s$(e,this);var n=t.listener,i=t.la||t.src;t.ia&&s4(t),t=n.call(i,e)}return t}function s3(t){return(t=t[s1])instanceof sY?t:null}var s8="__closure_events_fn_"+(1e9*Math.random()>>>0);function s7(t){return"function"==typeof t?t:(t[s8]||(t[s8]=function(e){return t.handleEvent(e)}),t[s8])}function ot(){sb.call(this),this.i=new sY(this),this.S=this,this.J=null}function oe(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new sS(e,t);else if(e instanceof sS)e.target=e.target||t;else{var r=e;sJ(e=new sS(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=on(o,i,!0,e)&&r}if(r=on(o=e.g=t,i,!0,e)&&r,r=on(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=on(o=e.g=n[s],i,!1,e)&&r}function on(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&sZ(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}sw(ot,sb),ot.prototype[sq]=!0,ot.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,r,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],i,r,s);else(r=sp(r)?!!r.capture:!!r,i=s7(i),e&&e[sq])?(e=e.i,(n=String(n).toString())in e.g&&-1<(i=s0(o=e.g[n],i,r,s))&&(sG(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete e.g[n],e.h--))):e&&(e=s3(e))&&(n=e.g[n.toString()],e=-1,n&&(e=s0(n,i,r,s)),(i=-1<e?n[e]:null)&&s4(i))}(this,t,e,n,i)},ot.prototype.N=function(){if(ot.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)sG(n[i]);delete e.g[t],e.h--}}this.J=null},ot.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ot.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var oi=sf.JSON.stringify,or=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new os,t=>t.reset());class os{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let oo,oa=!1,ol=new class{constructor(){this.h=this.g=null}add(t,e){let n=or.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},ou=()=>{let t=sf.Promise.resolve(void 0);oo=()=>{t.then(oc)}};var oc=()=>{let t;for(var e;t=null,ol.g&&(t=ol.g,ol.g=ol.g.next,ol.g||(ol.h=null),t.next=null),e=t;){try{e.h.call(e.g)}catch(t){!function(t){sf.setTimeout(()=>{throw t},0)}(t)}or.j(e),100>or.h&&(or.h++,e.next=or.g,or.g=e)}oa=!1};function oh(t,e){ot.call(this),this.h=t||1,this.g=e||sf,this.j=sy(this.qb,this),this.l=Date.now()}function of(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function od(t,e,n){if("function"==typeof t)n&&(t=sy(t,n));else if(t&&"function"==typeof t.handleEvent)t=sy(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:sf.setTimeout(t,e||0)}sw(oh,ot),(sl=oh.prototype).ga=!1,sl.T=null,sl.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),oe(this,"tick"),this.ga&&(of(this),this.start()))}},sl.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},sl.N=function(){oh.$.N.call(this),of(this),delete this.g};class op extends sb{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=od(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);let n=e.h;e.h=null,e.m.apply(null,n)}(this)}N(){super.N(),this.g&&(sf.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function og(t){sb.call(this),this.h=t,this.g={}}sw(og,sb);var om=[];function oy(t,e,n,i){Array.isArray(n)||(n&&(om[0]=n.toString()),n=om);for(var r=0;r<n.length;r++){var s=function t(e,n,i,r,s){if(r&&r.once)return function t(e,n,i,r,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],i,r,s);return null}return i=s7(i),e&&e[sq]?e.P(n,i,sp(r)?!!r.capture:!!r,s):s9(e,n,i,!0,r,s)}(e,n,i,r,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],i,r,s);return null}return i=s7(i),e&&e[sq]?e.O(n,i,sp(r)?!!r.capture:!!r,s):s9(e,n,i,!1,r,s)}(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ov(t){sW(t.g,function(t,e){this.g.hasOwnProperty(e)&&s4(t)},t),t.g={}}function ow(){this.g=!0}function ob(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return oi(n)}catch(t){return e}}(t,n)+(i?" "+i:"")})}og.prototype.N=function(){og.$.N.call(this),ov(this)},og.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ow.prototype.Ea=function(){this.g=!1},ow.prototype.info=function(){};var oE={},oT=null;function oI(){return oT=oT||new ot}function oS(t){sS.call(this,oE.Ta,t)}function oA(t){let e=oI();oe(e,new oS(e))}function ox(t,e){sS.call(this,oE.STAT_EVENT,t),this.stat=e}function oC(t){let e=oI();oe(e,new ox(e,t))}function o_(t,e){sS.call(this,oE.Ua,t),this.size=e}function ok(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return sf.setTimeout(function(){t()},e)}oE.Ta="serverreachability",sw(oS,sS),oE.STAT_EVENT="statevent",sw(ox,sS),oE.Ua="timingevent",sw(o_,sS);var oN={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oD={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function oO(){}function oR(t){return t.h||(t.h=t.i())}function oL(){}oO.prototype.h=null;var oP={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oM(){sS.call(this,"d")}function oB(){sS.call(this,"c")}function oF(){}function oU(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new og(this),this.P=oV,t=sR?125:void 0,this.V=new oh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new oj}function oj(){this.i=null,this.g="",this.h=!1}sw(oM,sS),sw(oB,sS),sw(oF,oO),oF.prototype.g=function(){return new XMLHttpRequest},oF.prototype.i=function(){return{}},f=new oF;var oV=45e3,o$={},oz={};function oq(t,e,n){t.L=1,t.v=o8(o9(e)),t.s=n,t.S=!0,oH(t,null)}function oH(t,e){t.G=Date.now(),oW(t),t.A=o9(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),ah(n.i,"t",i),t.C=0,n=t.l.J,t.h=new oj,t.g=lt(t.l,n?e:null,!t.s),0<t.O&&(t.M=new op(sy(t.Pa,t,t.g),t.O)),oy(t.U,t.g,"readystatechange",t.nb),e=t.I?sQ(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oA(),function(t,e,n,i,r,s){t.info(function(){if(t.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o})}(t.j,t.u,t.A,t.m,t.W,t.s)}function oK(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.l.Ha}function oG(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if((r=function(t,e){var n=t.C,i=e.indexOf("\n",n);return -1==i?oz:isNaN(n=Number(e.substring(n,i)))?o$:(i+=1)+n>e.length?oz:(e=e.slice(i,i+n),t.C=i+n,e)}(t,n))==oz){4==e&&(t.o=4,oC(14),i=!1),ob(t.j,t.m,null,"[Incomplete Response]");break}else if(r==o$){t.o=4,oC(15),ob(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ob(t.j,t.m,r,null),oZ(t,r);oK(t)&&r!=oz&&r!=o$&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,oC(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),a2(e),e.M=!0,oC(11))):(ob(t.j,t.m,n,"[Invalid Chunked Response]"),oY(t),oJ(t))}function oW(t){t.Y=Date.now()+t.P,oQ(t,t.P)}function oQ(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ok(sy(t.lb,t),e)}function oX(t){t.B&&(sf.clearTimeout(t.B),t.B=null)}function oJ(t){0==t.l.H||t.J||a5(t.l,t)}function oY(t){oX(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,of(t.V),ov(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function oZ(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||av(n.i,t))){if(!t.K&&av(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(n.g.G+3e3<t.G)a4(n),aW(n);else break t}a1(n),oC(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=ok(sy(n.ib,n),6e3));if(1>=ay(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else a3(n,11)}else if((t.K||n.g==t)&&a4(n),!sx(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let a=r[e];if(n.V=a[0],a=a[1],2==n.H){if("c"==a[0]){n.K=a[1],n.pa=a[2];let e=a[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));let r=a[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;let u=t.g;if(u){let t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(aw(s,s.h),s.h=null))}if(i.F){let t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,o3(i.I,i.F,t))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),(i=n).wa=a7(i,i.J?i.pa:null,i.Y),t.K){ab(i.i,t);var o=i.L;o&&t.setTimeout(o),t.B&&(oX(t),oW(t)),i.g=t}else a0(i);0<n.j.length&&aX(n)}else"stop"!=a[0]&&"close"!=a[0]||a3(n,7)}else 3==n.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?a3(n,7):aG(n):"noop"!=a[0]&&n.h&&n.h.Aa(a),n.A=0)}}oA(4)}catch(t){}}function o0(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(sd(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(sd(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(let i in e=[],n=0,t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(sd(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(sl=oU.prototype).setTimeout=function(t){this.P=t},sl.nb=function(t){t=t.target;let e=this.M;e&&3==aV(t)?e.l():this.Pa(t)},sl.Pa=function(t){try{if(t==this.g)t:{let c=aV(this.g);var e=this.g.Ia();let h=this.g.da();if(!(3>c)&&(3!=c||sR||this.g&&(this.h.h||this.g.ja()||a$(this.g)))){this.J||4!=c||7==e||(8==e||0>=h?oA(3):oA(2)),oX(this);var n=this.g.da();this.ca=n;e:if(oK(this)){var i=a$(this.g);t="";var r=i.length,s=4==aV(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){oY(this),oJ(this);var o="";break e}this.h.i=new sf.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sx(a)){var u=a;break e}}u=null}if(n=u)ob(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oZ(this,n);else{this.i=!1,this.o=3,oC(12),oY(this),oJ(this);break t}}this.S?(oG(this,c,o),sR&&this.i&&3==c&&(oy(this.U,this.V,"tick",this.mb),this.V.start())):(ob(this.j,this.m,o,null),oZ(this,o)),4==c&&oY(this),this.i&&!this.J&&(4==c?a5(this.l,this):(this.i=!1,oW(this)))}else(function(t){let e={};t=(t.g&&2<=aV(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(sx(t[i]))continue;var n=function(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}(t[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(let n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,oC(12)):(this.o=0,oC(13)),oY(this),oJ(this)}}}catch(t){}finally{}},sl.mb=function(){if(this.g){var t=aV(this.g),e=this.g.ja();this.C<e.length&&(oX(this),oG(this,t,e),this.i&&4!=t&&oW(this))}},sl.cancel=function(){this.J=!0,oY(this)},sl.lb=function(){this.B=null;let t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.L&&(oA(),oC(17)),oY(this),this.o=2,oJ(this)):oQ(this,this.Y-t)};var o1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o2(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof o2){this.h=t.h,o4(this,t.j),this.s=t.s,this.g=t.g,o5(this,t.m),this.l=t.l;var e=t.i,n=new aa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),o6(this,n),this.o=t.o}else t&&(e=String(t).match(o1))?(this.h=!1,o4(this,e[1]||"",!0),this.s=o7(e[2]||""),this.g=o7(e[3]||"",!0),o5(this,e[4]),this.l=o7(e[5]||"",!0),o6(this,e[6]||"",!0),this.o=o7(e[7]||"")):(this.h=!1,this.i=new aa(null,this.h))}function o9(t){return new o2(t)}function o4(t,e,n){t.j=n?o7(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function o5(t,e){if(e){if(isNaN(e=Number(e))||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function o6(t,e,n){var i,r;e instanceof aa?(t.i=e,i=t.i,(r=t.h)&&!i.j&&(al(i),i.i=null,i.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(au(this,e),ah(this,n,t))},i)),i.j=r):(n||(e=at(e,as)),t.i=new aa(e,t.h))}function o3(t,e,n){t.i.set(e,n)}function o8(t){return o3(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function o7(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function at(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ae),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ae(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}o2.prototype.toString=function(){var t=[],e=this.j;e&&t.push(at(e,an,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(at(e,an,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(at(n,"/"==n.charAt(0)?ar:ai,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",at(n,ao)),t.join("")};var an=/[#\/\?@]/g,ai=/[#\?:]/g,ar=/[#\?]/g,as=/[#\?@]/g,ao=/#/g;function aa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function al(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function au(t,e){al(t),e=af(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ac(t,e){return al(t),e=af(t,e),t.g.has(e)}function ah(t,e,n){au(t,e),0<n.length&&(t.i=null,t.g.set(af(t,e),sT(n)),t.h+=n.length)}function af(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(sl=aa.prototype).add=function(t,e){al(this),this.i=null,t=af(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},sl.forEach=function(t,e){al(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},sl.ta=function(){al(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){let r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},sl.Z=function(t){al(this);let e=[];if("string"==typeof t)ac(this,t)&&(e=e.concat(this.g.get(af(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},sl.set=function(t,e){return al(this),this.i=null,ac(this,t=af(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},sl.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},sl.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];let s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var ad=class{constructor(t,e){this.g=t,this.map=e}};function ap(t){this.l=t||ag,t=sf.PerformanceNavigationTiming?0<(t=sf.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(sf.g&&sf.g.Ka&&sf.g.Ka()&&sf.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ag=10;function am(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ay(t){return t.h?1:t.g?t.g.size:0}function av(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function aw(t,e){t.g?t.g.add(e):t.h=e}function ab(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function aE(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return sT(t.i)}ap.prototype.cancel=function(){if(this.i=aE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}};var aT=class{stringify(t){return sf.JSON.stringify(t,void 0)}parse(t){return sf.JSON.parse(t,void 0)}};function aI(){this.g=new aT}function aS(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function aA(t){this.l=t.fc||null,this.j=t.ob||!1}function ax(t,e){ot.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=aC,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sw(aA,oO),aA.prototype.g=function(){return new ax(this.l,this.j)},aA.prototype.i=(u={},function(){return u}),sw(ax,ot);var aC=0;function a_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function ak(t){t.readyState=4,t.l=null,t.j=null,t.A=null,aN(t)}function aN(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(sl=ax.prototype).open=function(t,e){if(this.readyState!=aC)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,aN(this)},sl.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||sf).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},sl.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ak(this)),this.readyState=aC},sl.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,aN(this)),this.g&&(this.readyState=3,aN(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==sf.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;a_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))}},sl.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ak(this):aN(this),3==this.readyState&&a_(this)}},sl.Za=function(t){this.g&&(this.response=this.responseText=t,ak(this))},sl.Ya=function(t){this.g&&(this.response=t,ak(this))},sl.ka=function(){this.g&&ak(this)},sl.setRequestHeader=function(t,e){this.v.append(t,e)},sl.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},sl.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)t.push((n=n.value)[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ax.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var aD=sf.JSON.parse;function aO(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=aR,this.L=this.M=!1}sw(aO,ot);var aR="",aL=/^https?$/i,aP=["POST","PUT"];function aM(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,aB(t),aU(t)}function aB(t){t.F||(t.F=!0,oe(t,"complete"),oe(t,"error"))}function aF(t){if(t.h&&void 0!==sh&&(!t.C[1]||4!=aV(t)||2!=t.da())){if(t.v&&4==aV(t))od(t.La,0,t);else if(oe(t,"readystatechange"),4==aV(t)){t.h=!1;try{let o=t.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e,n,i=!0;break;default:i=!1}if(!(e=i)){if(n=0===o){var r=String(t.I).match(o1)[1]||null;!r&&sf.self&&sf.self.location&&(r=sf.self.location.protocol.slice(0,-1)),n=!aL.test(r?r.toLowerCase():"")}e=n}if(e)oe(t,"complete"),oe(t,"success");else{t.m=6;try{var s=2<aV(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",aB(t)}}finally{aU(t)}}}}function aU(t,e){if(t.g){aj(t);let n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||oe(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function aj(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(sf.clearTimeout(t.A),t.A=null)}function aV(t){return t.g?t.g.readyState:0}function a$(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case aR:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function az(t){let e="";return sW(t,function(t,n){e+=n+":"+t+"\r\n"}),e}function aq(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=az(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):o3(t,e,n))}function aH(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function aK(t){this.Ga=0,this.j=[],this.l=new ow,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=aH("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=aH("baseRetryDelayMs",5e3,t),this.hb=aH("retryDelaySeedMs",1e4,t),this.eb=aH("forwardChannelMaxRetries",2,t),this.xa=aH("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ap(t&&t.concurrentRequestLimit),this.Ja=new aI,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function aG(t){if(aQ(t),3==t.H){var e=t.W++,n=o9(t.I);if(o3(n,"SID",t.K),o3(n,"RID",e),o3(n,"TYPE","terminate"),aY(t,n),(e=new oU(t,t.l,e)).L=2,e.v=o8(o9(n)),n=!1,sf.navigator&&sf.navigator.sendBeacon)try{n=sf.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&sf.Image&&((new Image).src=e.v,n=!0),n||(e.g=lt(e.l,null),e.g.ha(e.v)),e.G=Date.now(),oW(e)}a8(t)}function aW(t){t.g&&(a2(t),t.g.cancel(),t.g=null)}function aQ(t){aW(t),t.u&&(sf.clearTimeout(t.u),t.u=null),a4(t),t.i.cancel(),t.m&&("number"==typeof t.m&&sf.clearTimeout(t.m),t.m=null)}function aX(t){if(!am(t.i)&&!t.m){t.m=!0;var e=t.Na;oo||ou(),oa||(oo(),oa=!0),ol.add(e,t),t.C=0}}function aJ(t,e){var n;n=e?e.m:t.W++;let i=o9(t.I);o3(i,"SID",t.K),o3(i,"RID",n),o3(i,"AID",t.V),aY(t,i),t.o&&t.s&&aq(i,t.o,t.s),n=new oU(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=aZ(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),aw(t.i,n),oq(n,i,e)}function aY(t,e){t.na&&sW(t.na,function(t,n){o3(e,n,t)}),t.h&&o0({},function(t,n){o3(e,n,t)})}function aZ(t,e,n){n=Math.min(t.j.length,n);var i=t.h?sy(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){let t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g,a=r[o].map;if(0>(n-=e))e=Math.max(0,r[o].g-100),s=!1;else try{!function(t,e,n){let i=n||"";try{o0(t,function(t,n){let r=t;sp(t)&&(r=oi(t)),e.push(i+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function a0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;oo||ou(),oa||(oo(),oa=!0),ol.add(e,t),t.A=0}}function a1(t){return!t.g&&!t.u&&!(3<=t.A)&&(t.ba++,t.u=ok(sy(t.Ma,t),a6(t,t.A)),t.A++,!0)}function a2(t){null!=t.B&&(sf.clearTimeout(t.B),t.B=null)}function a9(t){t.g=new oU(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=o9(t.wa);o3(e,"RID","rpc"),o3(e,"SID",t.K),o3(e,"AID",t.V),o3(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&o3(e,"TO",t.qa),o3(e,"TYPE","xmlhttp"),aY(t,e),t.o&&t.s&&aq(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=o8(o9(e)),n.s=null,n.S=!0,oH(n,t)}function a4(t){null!=t.v&&(sf.clearTimeout(t.v),t.v=null)}function a5(t,e){var n=null;if(t.g==e){a4(t),a2(t),t.g=null;var i=2}else{if(!av(t.i,e))return;n=e.F,ab(t.i,e),i=1}if(0!=t.H){if(e.i){if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r,s=t.C;oe(i=oI(),new o_(i,n)),aX(t)}else a0(t)}else if(3==(s=e.o)||0==s&&0<e.ca||!(1==i&&(r=e,!(ay(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=r.F.concat(t.j),!0):1!=t.H&&2!=t.H&&!(t.C>=(t.cb?0:t.eb))&&(t.m=ok(sy(t.Na,t,r),a6(t,t.C)),t.C++,!0)))||2==i&&a1(t)))switch(n&&0<n.length&&((e=t.i).i=e.i.concat(n)),s){case 1:a3(t,5);break;case 4:a3(t,10);break;case 3:a3(t,6);break;default:a3(t,2)}}}function a6(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function a3(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=sy(t.pb,t);n||(n=new o2("//www.google.com/images/cleardot.gif"),sf.location&&"http"==sf.location.protocol||o4(n,"https"),o8(n)),function(t,e){let n=new ow;if(sf.Image){let i=new Image;i.onload=sv(aS,n,i,"TestLoadImage: loaded",!0,e),i.onerror=sv(aS,n,i,"TestLoadImage: error",!1,e),i.onabort=sv(aS,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=sv(aS,n,i,"TestLoadImage: timeout",!1,e),sf.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(n.toString(),i)}else oC(2);t.H=0,t.h&&t.h.za(e),a8(t),aQ(t)}function a8(t){if(t.H=0,t.ma=[],t.h){let e=aE(t.i);(0!=e.length||0!=t.j.length)&&(sI(t.ma,e),sI(t.ma,t.j),t.i.i.length=0,sT(t.j),t.j.length=0),t.h.ya()}}function a7(t,e,n){var i=n instanceof o2?o9(n):new o2(n);if(""!=i.g)e&&(i.g=e+"."+i.g),o5(i,i.m);else{var r=sf.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new o2(null);i&&o4(s,i),e&&(s.g=e),r&&o5(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&o3(i,n,e),o3(i,"VER",t.ra),aY(t,i),i}function lt(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new aO(n&&t.Ha&&!t.va?new aA({ob:!0}):t.va)).Oa(t.J),e}function le(){}function ln(){if(sD&&!(10<=Number(sV)))throw Error("Environmental error: no available transport.")}function li(t,e){ot.call(this),this.g=new aK(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!sx(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sx(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new lo(this)}function lr(t){oM.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(let n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ls(){oB.call(this),this.status=1}function lo(t){this.g=t}function la(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ll(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=s+(r^(e=n+(o<<7&4294967295|o>>>25))&(n^r))+i[1]+3905402710&4294967295,o=r+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+i[2]+606105819&4294967295,o=n+(e^(r=s+(o<<17&4294967295|o>>>15))&(s^e))+i[3]+3250441966&4294967295,o=e+(s^(n=r+(o<<22&4294967295|o>>>10))&(r^s))+i[4]+4118548399&4294967295,o=s+(r^(e=n+(o<<7&4294967295|o>>>25))&(n^r))+i[5]+1200080426&4294967295,o=r+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+i[6]+2821735955&4294967295,o=n+(e^(r=s+(o<<17&4294967295|o>>>15))&(s^e))+i[7]+4249261313&4294967295,o=e+(s^(n=r+(o<<22&4294967295|o>>>10))&(r^s))+i[8]+1770035416&4294967295,o=s+(r^(e=n+(o<<7&4294967295|o>>>25))&(n^r))+i[9]+2336552879&4294967295,o=r+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+i[10]+4294925233&4294967295,o=n+(e^(r=s+(o<<17&4294967295|o>>>15))&(s^e))+i[11]+2304563134&4294967295,o=e+(s^(n=r+(o<<22&4294967295|o>>>10))&(r^s))+i[12]+1804603682&4294967295,o=s+(r^(e=n+(o<<7&4294967295|o>>>25))&(n^r))+i[13]+4254626195&4294967295,o=r+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+i[14]+2792965006&4294967295,o=n+(e^(r=s+(o<<17&4294967295|o>>>15))&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,o=e+((n=r+(o<<20&4294967295|o>>>12))^r^s)+i[5]+4294588738&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^r)+i[8]+2272392833&4294967295,o=r+((s=e+(o<<11&4294967295|o>>>21))^e^n)+i[11]+1839030562&4294967295,o=n+((r=s+(o<<16&4294967295|o>>>16))^s^e)+i[14]+4259657740&4294967295,o=e+((n=r+(o<<23&4294967295|o>>>9))^r^s)+i[1]+2763975236&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^r)+i[4]+1272893353&4294967295,o=r+((s=e+(o<<11&4294967295|o>>>21))^e^n)+i[7]+4139469664&4294967295,o=n+((r=s+(o<<16&4294967295|o>>>16))^s^e)+i[10]+3200236656&4294967295,o=e+((n=r+(o<<23&4294967295|o>>>9))^r^s)+i[13]+681279174&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^r)+i[0]+3936430074&4294967295,o=r+((s=e+(o<<11&4294967295|o>>>21))^e^n)+i[3]+3572445317&4294967295,o=n+((r=s+(o<<16&4294967295|o>>>16))^s^e)+i[6]+76029189&4294967295,o=e+((n=r+(o<<23&4294967295|o>>>9))^r^s)+i[9]+3654602809&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^r)+i[12]+3873151461&4294967295,o=r+((s=e+(o<<11&4294967295|o>>>21))^e^n)+i[15]+530742520&4294967295,o=n+((r=s+(o<<16&4294967295|o>>>16))^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function lu(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(sl=aO.prototype).Oa=function(t){this.M=t},sl.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():f.g(),this.C=this.u?oR(this.u):oR(f),this.g.onreadystatechange=sy(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){aM(this,t);return}if(t=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let t of i.keys())n.set(t,i.get(t));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,o]of(i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=sf.FormData&&t instanceof sf.FormData,!(0<=sE(aP,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;aj(this),0<this.B&&((this.L=(s=this.g,sD&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=sy(this.ua,this)):this.A=od(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){aM(this,t)}},sl.ua=function(){void 0!==sh&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,oe(this,"timeout"),this.abort(8))},sl.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,oe(this,"complete"),oe(this,"abort"),aU(this))},sl.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aU(this,!0)),aO.$.N.call(this)},sl.La=function(){this.s||(this.G||this.v||this.l?aF(this):this.kb())},sl.kb=function(){aF(this)},sl.isActive=function(){return!!this.g},sl.da=function(){try{return 2<aV(this)?this.g.status:-1}catch(t){return -1}},sl.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},sl.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),aD(e)}},sl.Ia=function(){return this.m},sl.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(sl=aK.prototype).ra=8,sl.H=1,sl.Na=function(t){if(this.m){if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let r=new oU(this,this.l,t),s=this.s;if(this.U&&(s?sJ(s=sQ(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break e}i=void 0}if(void 0===i)break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=aZ(this,r,e),o3(n=o9(this.I),"RID",t),o3(n,"CVER",22),this.F&&o3(n,"X-HTTP-Session-Id",this.F),aY(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(az(s)))+"&"+e:this.o&&aq(n,this.o,s)),aw(this.i,r),this.bb&&o3(n,"TYPE","init"),this.P?(o3(n,"$req",e),o3(n,"SID","null"),r.aa=!0,oq(r,n,null)):oq(r,n,e),this.H=2}}else 3==this.H&&(t?aJ(this,t):0==this.j.length||am(this.i)||aJ(this))}},sl.Ma=function(){if(this.u=null,a9(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ok(sy(this.jb,this),t)}},sl.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,oC(10),aW(this),a9(this))},sl.ib=function(){null!=this.v&&(this.v=null,aW(this),a1(this),oC(19))},sl.pb=function(t){t?(this.l.info("Successfully pinged google.com"),oC(2)):(this.l.info("Failed to ping google.com"),oC(1))},sl.isActive=function(){return!!this.h&&this.h.isActive(this)},(sl=le.prototype).Ba=function(){},sl.Aa=function(){},sl.za=function(){},sl.ya=function(){},sl.isActive=function(){return!0},sl.Va=function(){},ln.prototype.g=function(t,e){return new li(t,e)},sw(li,ot),li.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;oC(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=a7(t,null,t.Y),aX(t)},li.prototype.close=function(){aG(this.g)},li.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=oi(t),t=n);e.j.push(new ad(e.fb++,t)),3==e.H&&aX(e)},li.prototype.N=function(){this.g.h=null,delete this.j,aG(this.g),delete this.g,li.$.N.call(this)},sw(lr,oM),sw(ls,oB),sw(lo,le),lo.prototype.Ba=function(){oe(this.g,"a")},lo.prototype.Aa=function(t){oe(this.g,new lr(t))},lo.prototype.za=function(t){oe(this.g,new ls)},lo.prototype.ya=function(){oe(this.g,"b")},sw(la,function(){this.blockSize=-1}),la.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},la.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)ll(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){ll(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){ll(this,i),r=0;break}}this.h=r,this.i+=e},la.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var lc={};function lh(t){return -128<=t&&128>t?Object.prototype.hasOwnProperty.call(lc,t)?lc[t]:lc[t]=new lu([0|t],0>t?-1:0):new lu([0|t],0>t?-1:0)}function lf(t){if(isNaN(t)||!isFinite(t))return lp;if(0>t)return lw(lf(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ld;return new lu(e,0)}var ld=4294967296,lp=lh(0),lg=lh(1),lm=lh(16777216);function ly(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function lv(t){return -1==t.h}function lw(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new lu(n,~t.h).add(lg)}function lb(t,e){return t.add(lw(e))}function lE(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function lT(t,e){this.g=t,this.h=e}function lI(t,e){if(ly(e))throw Error("division by zero");if(ly(t))return new lT(lp,lp);if(lv(t))return e=lI(lw(t),e),new lT(lw(e.g),lw(e.h));if(lv(e))return e=lI(t,lw(e)),new lT(lw(e.g),e.h);if(30<t.g.length){if(lv(t)||lv(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lg,i=e;0>=i.X(t);)n=lS(n),i=lS(i);var r=lA(n,1),s=lA(i,1);for(i=lA(i,2),n=lA(n,2);!ly(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=lA(i,1),n=lA(n,1)}return e=lb(t,r.R(e)),new lT(r,e)}for(r=lp;0<=t.X(e);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(t.ea()/e.ea())))/Math.LN2))?1:Math.pow(2,i-48),o=(s=lf(n)).R(e);lv(o)||0<o.X(t);)n-=i,o=(s=lf(n)).R(e);ly(s)&&(s=lg),r=r.add(s),t=lb(t,o)}return new lT(r,t)}function lS(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new lu(n,t.h)}function lA(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new lu(r,t.h)}(sl=lu.prototype).ea=function(){if(lv(this))return-lw(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ld+i)*e,e*=ld}return t},sl.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(ly(this))return"0";if(lv(this))return"-"+lw(this).toString(t);for(var e=lf(Math.pow(t,6)),n=this,i="";;){var r=lI(n,e).g,s=((0<(n=lb(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(ly(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},sl.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},sl.X=function(t){return lv(t=lb(this,t))?-1:ly(t)?0:1},sl.abs=function(){return lv(this)?lw(this):this},sl.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new lu(n,-2147483648&n[n.length-1]?-1:0)},sl.R=function(t){if(ly(this)||ly(t))return lp;if(lv(this))return lv(t)?lw(this).R(lw(t)):lw(lw(this).R(t));if(lv(t))return lw(this.R(lw(t)));if(0>this.X(lm)&&0>t.X(lm))return lf(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=o*l,lE(n,2*i+2*r),n[2*i+2*r+1]+=s*l,lE(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,lE(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,lE(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new lu(n,0)},sl.gb=function(t){return lI(this,t).h},sl.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new lu(n,this.h&t.h)},sl.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new lu(n,this.h|t.h)},sl.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new lu(n,this.h^t.h)},ln.prototype.createWebChannel=ln.prototype.g,li.prototype.send=li.prototype.u,li.prototype.open=li.prototype.m,li.prototype.close=li.prototype.close,oN.NO_ERROR=0,oN.TIMEOUT=8,oN.HTTP_ERROR=6,oD.COMPLETE="complete",oL.EventType=oP,oP.OPEN="a",oP.CLOSE="b",oP.ERROR="c",oP.MESSAGE="d",ot.prototype.listen=ot.prototype.O,aO.prototype.listenOnce=aO.prototype.P,aO.prototype.getLastError=aO.prototype.Sa,aO.prototype.getLastErrorCode=aO.prototype.Ia,aO.prototype.getStatus=aO.prototype.da,aO.prototype.getResponseJson=aO.prototype.Wa,aO.prototype.getResponseText=aO.prototype.ja,aO.prototype.send=aO.prototype.ha,aO.prototype.setWithCredentials=aO.prototype.Oa,la.prototype.digest=la.prototype.l,la.prototype.reset=la.prototype.reset,la.prototype.update=la.prototype.j,lu.prototype.add=lu.prototype.add,lu.prototype.multiply=lu.prototype.R,lu.prototype.modulo=lu.prototype.gb,lu.prototype.compare=lu.prototype.X,lu.prototype.toNumber=lu.prototype.ea,lu.prototype.toString=lu.prototype.toString,lu.prototype.getBits=lu.prototype.D,lu.fromNumber=lf,lu.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return lw(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=lf(Math.pow(n,8)),r=lp,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=lf(Math.pow(n,o)),r=r.R(o).add(lf(a))):r=(r=r.R(i)).add(lf(a))}return r};var lx=sc.createWebChannelTransport=function(){return new ln},lC=sc.getStatEventTarget=function(){return oI()},l_=sc.ErrorCode=oN,lk=sc.EventType=oD,lN=sc.Event=oE,lD=sc.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};sc.FetchXmlHttpFactory=aA;var lO=sc.WebChannel=oL,lR=sc.XhrIo=aO;sc.Md5=la;var lL=sc.Integer=lu;const lP="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */class lM{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}/** A user with a null UID. */lM.UNAUTHENTICATED=new lM(null),// non-FirebaseAuth providers.
lM.GOOGLE_CREDENTIALS=new lM("google-credentials-uid"),lM.FIRST_PARTY=new lM("first-party-uid"),lM.MOCK_USER=new lM("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lB="10.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF=new ir("@firebase/firestore");// Helper methods are needed because variables can't be exported as read/write
function lU(){return lF.logLevel}function lj(t,...e){if(lF.logLevel<=sa.DEBUG){let n=e.map(lz);lF.debug(`Firestore (${lB}): ${t}`,...n)}}function lV(t,...e){if(lF.logLevel<=sa.ERROR){let n=e.map(lz);lF.error(`Firestore (${lB}): ${t}`,...n)}}/**
 * @internal
 */function l$(t,...e){if(lF.logLevel<=sa.WARN){let n=e.map(lz);lF.warn(`Firestore (${lB}): ${t}`,...n)}}/**
 * Converts an additional log parameter to a string representation.
 */function lz(t){if("string"==typeof t)return t;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Formats an object as a JSON string, suitable for logging. */return JSON.stringify(t)}catch(e){// Converting to JSON failed, just log the object directly
return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */function lq(t="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let e=`FIRESTORE (${lB}) INTERNAL ASSERTION FAILED: `+t;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw lV(e),Error(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lH={// Causes are copied from:
// https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
/** Not an error; returned on success. */OK:"ok",/** The operation was cancelled (typically by the caller). */CANCELLED:"cancelled",/** Unknown error or an error from a different error domain. */UNKNOWN:"unknown",/**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */INVALID_ARGUMENT:"invalid-argument",/**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */DEADLINE_EXCEEDED:"deadline-exceeded",/** Some requested entity (e.g., file or directory) was not found. */NOT_FOUND:"not-found",/**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */ALREADY_EXISTS:"already-exists",/**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */PERMISSION_DENIED:"permission-denied",/**
     * The request does not have valid authentication credentials for the
     * operation.
     */UNAUTHENTICATED:"unauthenticated",/**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */RESOURCE_EXHAUSTED:"resource-exhausted",/**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */FAILED_PRECONDITION:"failed-precondition",/**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */ABORTED:"aborted",/**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */OUT_OF_RANGE:"out-of-range",/** Operation is not implemented or not supported/enabled in this service. */UNIMPLEMENTED:"unimplemented",/**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */INTERNAL:"internal",/**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */UNAVAILABLE:"unavailable",/** Unrecoverable data loss or corruption. */DATA_LOSS:"data-loss"};/** An error returned by a Firestore operation. */class lK extends nJ{/** @hideconstructor */constructor(/**
     * The backend error code associated with this error.
     */t,/**
     * A custom error description.
     */e){super(t,e),this.code=t,this.message=e,// class and so inheritance does not work correctly. We could alternatively
// do the same "back-door inheritance" trick that FirebaseError does.
this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lG{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lW{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class lQ{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){// Fire with initial user.
t.enqueueRetryable(()=>e(lM.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class lX{constructor(t){this.token=t,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class lJ{constructor(t){this.t=t,/** Tracks the current User. */this.currentUser=lM.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i,i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve(),r=new lG;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new lG,t.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{lj("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let t=this.t.getImmediate({optional:!0});t?o(t):(lj("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new lG)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==t?(lj("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?("string"==typeof e.accessToken||lq(),new lW(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let t=this.auth&&this.auth.getUid();return null===t||"string"==typeof t||lq(),new lM(t)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class lY{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=lM.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class lZ{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new lY(this.l,this.h,this.P))}start(t,e){// Fire with initial uid.
t.enqueueRetryable(()=>e(lM.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l1{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){let n=t=>{null!=t.error&&lj("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);let n=t.token!==this.R;return this.R=t.token,lj("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};let i=t=>{lj("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit(t=>i(t)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let t=this.A.getImmediate({optional:!0});t?i(t):lj("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?("string"==typeof t.token||lq(),this.R=t.token,new l0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{static V(){// Alphanumeric characters
let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";for(;n.length<20;){let i=/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */function(t){// Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
let e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<i.length;++r)// be evenly mapped to indices of `chars` via a modulo operation.
n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function l9(t,e){return t<e?-1:t>e?1:0}/** Helper to compare arrays using isEqual(). */function l4(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */class l5{/**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */constructor(/**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */t,/**
     * The fractions of a second at nanosecond resolution.*
     */e){if(this.seconds=t,this.nanoseconds=e,e<0||e>=1e9)throw new lK(lH.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800||t>=253402300800)throw new lK(lH.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}/**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */static now(){return l5.fromMillis(Date.now())}/**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */static fromDate(t){return l5.fromMillis(t.getTime())}/**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */static fromMillis(t){let e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new l5(e,n)}/**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */toDate(){return new Date(this.toMillis())}/**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?l9(this.nanoseconds,t.nanoseconds):l9(this.seconds,t.seconds)}/**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}/** Returns a textual representation of this `Timestamp`. */toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}/** Returns a JSON-serializable representation of this `Timestamp`. */toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}/**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */valueOf(){// This method returns a string of the form <seconds>.<nanoseconds> where
// <seconds> is translated to have a non-negative value and both <seconds>
// and <nanoseconds> are left-padded with zeroes to be a consistent length.
// Strings with this format then have a lexiographical ordering that matches
// the expected ordering. The <seconds> translation is done to avoid having
// a leading negative sign (i.e. a leading '-' character) in its string
// representation, which would affect its lexiographical ordering.
let t=this.seconds- -62135596800;// Note: Up to 12 decimal digits are required to represent all valid
// 'seconds' values.
return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */class l6{constructor(t){this.timestamp=t}static fromTimestamp(t){return new l6(t)}static min(){return new l6(new l5(0,0))}static max(){return new l6(new l5(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}/** Returns a number representation of the version for use in spec tests. */toMicroseconds(){// Convert to microseconds.
return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Path represents an ordered sequence of string segments.
 */class l3{constructor(t,e,n){void 0===e?e=0:e>t.length&&lq(),void 0===n?n=t.length-e:n>t.length-e&&lq(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===l3.comparator(this,t)}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof l3?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let n=Math.min(t.length,e.length);for(let i=0;i<n;i++){let n=t.get(i),r=e.get(i);if(n<r)return -1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class l8 extends l3{construct(t,e,n){return new l8(t,e,n)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...t){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let e=[];for(let n of t){if(n.indexOf("//")>=0)throw new lK(lH.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);// Strip leading and traling slashed.
e.push(...n.split("/").filter(t=>t.length>0))}return new l8(e)}static emptyPath(){return new l8([])}}const l7=/^[_a-zA-Z][_a-zA-Z0-9]*$/;/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */class ut extends l3{construct(t,e,n){return new ut(t,e,n)}/**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */static isValidIdentifier(t){return l7.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}/**
     * Returns true if this field references the key of a document.
     */isKeyField(){return 1===this.length&&"__name__"===this.get(0)}/**
     * The field designating the key of a document.
     */static keyField(){return new ut(["__name__"])}/**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */static fromServerFormat(t){let e=[],n="",i=0,r=()=>{if(0===n.length)throw new lK(lH.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""},s=!1;for(;i<t.length;){let e=t[i];if("\\"===e){if(i+1===t.length)throw new lK(lH.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new lK(lH.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?s=!s:"."!==e||s?n+=e:r(),i++}if(r(),s)throw new lK(lH.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @internal
 */class ue{constructor(t){this.path=t}static fromPath(t){return new ue(l8.fromString(t))}static fromName(t){return new ue(l8.fromString(t).popFirst(5))}static empty(){return new ue(l8.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===l8.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return l8.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(t){return new ue(new l8(t.slice()))}}/**
 * Stores the latest read time, document and batch ID that were processed for an
 * index.
 */class un{constructor(/**
     * The latest read time version that has been indexed by Firestore for this
     * field index.
     */t,/**
     * The key of the last document that was indexed for this query. Use
     * `DocumentKey.empty()` if no document has been indexed.
     */e,/*
     * The largest mutation batch id that's been processed by Firestore.
     */n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}/** Returns an offset that sorts before all regular offsets. */static min(){return new un(l6.min(),ue.empty(),-1)}/** Returns an offset that sorts after all regular offsets. */static max(){return new un(l6.max(),ue.empty(),-1)}}/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */class ui{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */async function ur(t){if(t.code!==lH.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;lj("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */class us{constructor(t){// NOTE: next/catchCallback will always point to our own wrapper functions,
// not the user's raw next() or catch() callbacks.
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,// chaining.
this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&// value should be defined unless T is Void, but we can't express
// that in the type system.
this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&lq(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new us((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{let e=t();return e instanceof us?e:us.resolve(e)}catch(t){return us.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):us.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):us.reject(e)}static resolve(t){return new us((e,n)=>{e(t)})}static reject(t){return new us((e,n)=>{n(t)})}static waitFor(// eslint-disable-next-line @typescript-eslint/no-explicit-any
t){return new us((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}/**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */static or(t){let e=us.resolve(!1);for(let n of t)e=e.next(t=>t?us.resolve(t):n());return e}static forEach(t,e){let n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}/**
     * Concurrently map all array elements through asynchronous function.
     */static mapArray(t,e){return new us((n,i)=>{let r=t.length,s=Array(r),o=0;for(let a=0;a<r;a++){let l=a;e(t[l]).next(t=>{s[l]=t,++o===r&&n(s)},t=>i(t))}})}/**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */static doWhile(t,e){return new us((n,i)=>{let r=()=>{!0===t()?e().next(()=>{r()},i):n()};r()})}}/** Verifies whether `e` is an IndexedDbTransactionError. */function uo(t){// Use name equality, as instanceof checks on errors don't work with errors
// that wrap other errors.
return"IndexedDbTransactionError"===t.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */class ua{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this._e&&this._e(t),t}}/** Returns whether the value represents -0. */function ul(t){// Detect if the value is -0.0. Based on polyfill from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
return 0===t&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function uc(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uh(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}ua.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class uf{constructor(t,e){this.comparator=t,this.root=e||up.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(t,e){return new uf(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,up.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(t){return new uf(this.comparator,this.root.remove(t,this.comparator).copy(null,null,up.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(t){let e=this.root;for(;!e.isEmpty();){let n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(t){// Number of nodes that were pruned when descending right
let e=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){let t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(t){return this.root.reverseTraversal(t)}// Returns an iterator over the SortedMap.
getIterator(){return new ud(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ud(this.root,t,this.comparator,!1)}getReverseIterator(){return new ud(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ud(this.root,t,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class ud{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(t);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class up{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:up.RED,this.left=null!=i?i:up.EMPTY,this.right=null!=r?r:up.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(t,e,n,i,r){return new up(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
// for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}// Traverses the tree in reverse key order and calls the specified action
// function for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}// Returns the minimum node in the tree.
min(){return this.left.isEmpty()?this:this.left.min()}// Returns the maximum key in the tree.
minKey(){return this.min().key}// Returns the maximum key in the tree.
maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}// Returns new tree, with the key/value added.
insert(t,e,n){let i=this,r=n(t,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return up.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(t,e){let n,i=this;if(0>e(t,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return up.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,up.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,up.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}// For testing.
checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw lq();let t=this.left.check();if(t!==this.right.check())throw lq();return t+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
up.EMPTY=null,up.RED=!0,up.BLACK=!1,// end LLRBEmptyNode
up.EMPTY=new class{constructor(){this.size=0}get key(){throw lq()}get value(){throw lq()}get color(){throw lq()}get left(){throw lq()}get right(){throw lq()}// Returns a copy of the current node.
copy(t,e,n,i,r){return this}// Returns a copy of the tree, with the specified key/value added.
insert(t,e,n){return new up(t,e)}// Returns a copy of the tree, with the specified key removed.
remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}// For testing.
checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */class ug{constructor(t){this.comparator=t,this.data=new uf(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}/** Iterates elements in order defined by "comparator" */forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(t,e){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new um(this.data.getIterator())}getIteratorFrom(t){return new um(this.data.getIteratorFrom(t))}/** Inserts or updates an element */add(t){return this.copy(this.data.remove(t).insert(t,!0))}/** Deletes an element */delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;// Make sure `result` always refers to the larger one of the two sets.
return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof ug)||this.size!==t.size)return!1;let e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){let t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new ug(this.comparator);return e.data=t,e}}class um{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */class uy{constructor(t){this.fields=t,// Sort the field mask to support `FieldMask.isEqual()` and assert below.
t.sort(ut.comparator)}static empty(){return new uy([])}/**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */unionWith(t){let e=new ug(ut.comparator);for(let t of this.fields)e=e.add(t);for(let n of t)e=e.add(n);return new uy(e.toArray())}/**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */covers(t){for(let e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return l4(this.fields,t.fields,(t,e)=>t.isEqual(e))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An error encountered while decoding base64 string.
 */class uv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */class uw{constructor(t){this.binaryString=t}static fromBase64String(t){let e=function(t){try{return atob(t)}catch(t){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&t instanceof DOMException?new uv("Invalid base64 string: "+t):t}}(t);return new uw(e)}static fromUint8Array(t){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let e=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new uw(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return l9(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}uw.EMPTY_BYTE_STRING=new uw("");const ub=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */function uE(t){// The json interface (for the browser) will return an iso timestamp string,
// while the proto js library (for node) will return a
// google.protobuf.Timestamp instance.
if(t||lq(),"string"==typeof t){// The date string can have higher precision (nanos) than the Date class
// (millis), so we do some custom parsing here.
// Parse the nanos right out of the string.
let e=0,n=ub.exec(t);if(n||lq(),n[1]){// Pad the fraction out to 9 digits (nanos).
let t=n[1];e=Number(t=(t+"000000000").substr(0,9))}// Parse the date to get the seconds.
let i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:uT(t.seconds),nanos:uT(t.nanos)}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function uT(t){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof t?t:"string"==typeof t?Number(t):0}/** Converts the possible Proto types for Blobs into a ByteString. */function uI(t){return"string"==typeof t?uw.fromBase64String(t):uw.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */function uS(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}/**
 * Returns the local time at which this timestamp was first set.
 */function uA(t){let e=uE(t.mapValue.fields.__local_write_time__.timestampValue);return new l5(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param longPollingOptions Options that configure long-polling.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */constructor(t,e,n,i,r,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class uC{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new uC("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof uC&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};/** Extracts the backend's type order for the provided value. */function uk(t){return"nullValue"in t?0/* TypeOrder.NullValue */:"booleanValue"in t?1/* TypeOrder.BooleanValue */:"integerValue"in t||"doubleValue"in t?2/* TypeOrder.NumberValue */:"timestampValue"in t?3/* TypeOrder.TimestampValue */:"stringValue"in t?5/* TypeOrder.StringValue */:"bytesValue"in t?6/* TypeOrder.BlobValue */:"referenceValue"in t?7/* TypeOrder.RefValue */:"geoPointValue"in t?8/* TypeOrder.GeoPointValue */:"arrayValue"in t?9/* TypeOrder.ArrayValue */:"mapValue"in t?uS(t)?4/* TypeOrder.ServerTimestampValue */:uU(t)?9007199254740991/* TypeOrder.MaxValue */:10/* TypeOrder.ObjectValue */:lq()}/** Tests `left` and `right` for equality based on the backend semantics. */function uN(t,e){if(t===e)return!0;let n=uk(t);if(n!==uk(e))return!1;switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return!0;case 1/* TypeOrder.BooleanValue */:return t.booleanValue===e.booleanValue;case 4/* TypeOrder.ServerTimestampValue */:return uA(t).isEqual(uA(e));case 3/* TypeOrder.TimestampValue */:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;let n=uE(t.timestampValue),i=uE(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5/* TypeOrder.StringValue */:return t.stringValue===e.stringValue;case 6/* TypeOrder.BlobValue */:return uI(t.bytesValue).isEqual(uI(e.bytesValue));case 7/* TypeOrder.RefValue */:return t.referenceValue===e.referenceValue;case 8/* TypeOrder.GeoPointValue */:return uT(t.geoPointValue.latitude)===uT(e.geoPointValue.latitude)&&uT(t.geoPointValue.longitude)===uT(e.geoPointValue.longitude);case 2/* TypeOrder.NumberValue */:return function(t,e){if("integerValue"in t&&"integerValue"in e)return uT(t.integerValue)===uT(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){let n=uT(t.doubleValue),i=uT(e.doubleValue);return n===i?ul(n)===ul(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9/* TypeOrder.ArrayValue */:return l4(t.arrayValue.values||[],e.arrayValue.values||[],uN);case 10/* TypeOrder.ObjectValue */:return function(t,e){let n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(uu(n)!==uu(i))return!1;for(let t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!uN(n[t],i[t])))return!1;return!0}(t,e);default:return lq()}}function uD(t,e){return void 0!==(t.values||[]).find(t=>uN(t,e))}function uO(t,e){if(t===e)return 0;let n=uk(t),i=uk(e);if(n!==i)return l9(n,i);switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return 0;case 1/* TypeOrder.BooleanValue */:return l9(t.booleanValue,e.booleanValue);case 2/* TypeOrder.NumberValue */:return function(t,e){let n=uT(t.integerValue||t.doubleValue),i=uT(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3/* TypeOrder.TimestampValue */:return uR(t.timestampValue,e.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return uR(uA(t),uA(e));case 5/* TypeOrder.StringValue */:return l9(t.stringValue,e.stringValue);case 6/* TypeOrder.BlobValue */:return function(t,e){let n=uI(t),i=uI(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7/* TypeOrder.RefValue */:return function(t,e){let n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){let e=l9(n[t],i[t]);if(0!==e)return e}return l9(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8/* TypeOrder.GeoPointValue */:return function(t,e){let n=l9(uT(t.latitude),uT(e.latitude));return 0!==n?n:l9(uT(t.longitude),uT(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9/* TypeOrder.ArrayValue */:return function(t,e){let n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){let e=uO(n[t],i[t]);if(e)return e}return l9(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10/* TypeOrder.ObjectValue */:return function(t,e){if(t===u_.mapValue&&e===u_.mapValue)return 0;if(t===u_.mapValue)return 1;if(e===u_.mapValue)return -1;let n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);// Even though MapValues are likely sorted correctly based on their insertion
// order (e.g. when received from the backend), local modifications can bring
// elements out of order. We need to re-sort the elements to ensure that
// canonical IDs are independent of insertion order.
i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){let e=l9(i[t],s[t]);if(0!==e)return e;let o=uO(n[i[t]],r[s[t]]);if(0!==o)return o}return l9(i.length,s.length)}(t.mapValue,e.mapValue);default:throw lq()}}function uR(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return l9(t,e);let n=uE(t),i=uE(e),r=l9(n.seconds,i.seconds);return 0!==r?r:l9(n.nanos,i.nanos)}function uL(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){let e=uE(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?uI(t.bytesValue).toBase64():"referenceValue"in t?(e=t.referenceValue,ue.fromName(e).toString()):"geoPointValue"in t?(n=t.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in t?function(t){let e="[",n=!0;for(let i of t.values||[])n?n=!1:e+=",",e+=uL(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){// Iteration order in JavaScript is not guaranteed. To ensure that we generate
// matching canonical IDs for identical maps, we need to sort the keys.
let e=Object.keys(t.fields||{}).sort(),n="{",i=!0;for(let r of e)i?i=!1:n+=",",n+=`${r}:${uL(t.fields[r])}`;return n+"}"}(t.mapValue):lq()}/** Returns true if `value` is an IntegerValue . */function uP(t){return!!t&&"integerValue"in t}/** Returns true if `value` is a DoubleValue. *//** Returns true if `value` is an ArrayValue. */function uM(t){return!!t&&"arrayValue"in t}/** Returns true if `value` is a MapValue. */function uB(t){return!!t&&"mapValue"in t}/** Creates a deep copy of `source`. */function uF(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return uc(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=uF(n)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uF(t.arrayValue.values[n]);return e}return Object.assign({},t)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */function uU(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */class uj{constructor(t){this.value=t}static empty(){return new uj({mapValue:{}})}/**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!uB(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}/**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=uF(e)}/**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */setAll(t){let e=ut.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){// Insert the accumulated changes at this parent location
let t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=uF(t):i.push(r.lastSegment())});let r=this.getFieldsMap(e);this.applyChanges(r,n,i)}/**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */delete(t){let e=this.field(t.popLast());uB(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return uN(this.value,t.value)}/**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];uB(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}/**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */applyChanges(t,e,n){for(let i of(uc(e,(e,n)=>t[e]=n),n))delete t[i]}clone(){return new uj(uF(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */class uV{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}/**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */static newInvalidDocument(t){return new uV(t,0/* DocumentType.INVALID */,/* version */l6.min(),/* readTime */l6.min(),/* createTime */l6.min(),uj.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */static newFoundDocument(t,e,n,i){return new uV(t,1/* DocumentType.FOUND_DOCUMENT */,/* version */e,/* readTime */l6.min(),/* createTime */n,i,0/* DocumentState.SYNCED */)}/** Creates a new document that is known to not exist at the given version. */static newNoDocument(t,e){return new uV(t,2/* DocumentType.NO_DOCUMENT */,/* version */e,/* readTime */l6.min(),/* createTime */l6.min(),uj.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */static newUnknownDocument(t,e){return new uV(t,3/* DocumentType.UNKNOWN_DOCUMENT */,/* version */e,/* readTime */l6.min(),/* createTime */l6.min(),uj.empty(),2/* DocumentState.HAS_COMMITTED_MUTATIONS */)}/**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */convertToFoundDocument(t,e){// If a document is switching state from being an invalid or deleted
// document to a valid (FOUND_DOCUMENT) document, either due to receiving an
// update from Watch or due to applying a local set mutation on top
// of a deleted document, our best guess about its createTime would be the
// version at which the document transitioned to a FOUND_DOCUMENT.
return this.createTime.isEqual(l6.min())&&(2/* DocumentType.NO_DOCUMENT */===this.documentType||0/* DocumentType.INVALID */===this.documentType)&&(this.createTime=t),this.version=t,this.documentType=1/* DocumentType.FOUND_DOCUMENT */,this.data=e,this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */convertToNoDocument(t){return this.version=t,this.documentType=2/* DocumentType.NO_DOCUMENT */,this.data=uj.empty(),this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */convertToUnknownDocument(t){return this.version=t,this.documentType=3/* DocumentType.UNKNOWN_DOCUMENT */,this.data=uj.empty(),this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasCommittedMutations(){return this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasLocalMutations(){return this.documentState=1/* DocumentState.HAS_LOCAL_MUTATIONS */,this.version=l6.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1/* DocumentState.HAS_LOCAL_MUTATIONS */===this.documentState}get hasCommittedMutations(){return 2/* DocumentState.HAS_COMMITTED_MUTATIONS */===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0/* DocumentType.INVALID */!==this.documentType}isFoundDocument(){return 1/* DocumentType.FOUND_DOCUMENT */===this.documentType}isNoDocument(){return 2/* DocumentType.NO_DOCUMENT */===this.documentType}isUnknownDocument(){return 3/* DocumentType.UNKNOWN_DOCUMENT */===this.documentType}isEqual(t){return t instanceof uV&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new uV(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */class u${constructor(t,e){this.position=t,this.inclusive=e}}function uz(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){let s=e[r],o=t.position[r];if(i=s.field.isKeyField()?ue.comparator(ue.fromName(o.referenceValue),n.key):uO(o,n.data.field(s.field)),"desc"/* Direction.DESCENDING */===s.dir&&(i*=-1),0!==i)break}return i}/**
 * Returns true if a document sorts after a bound using the provided sort
 * order.
 */function uq(t,e){if(null===t)return null===e;if(null===e||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!uN(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */class uH{constructor(t,e="asc"/* Direction.ASCENDING */){this.field=t,this.dir=e}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uK{}class uG extends uK{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}/**
     * Creates a filter based on the provided arguments.
     */static create(t,e,n){return t.isKeyField()?"in"/* Operator.IN */===e||"not-in"/* Operator.NOT_IN */===e?this.createKeyFieldInFilter(t,e,n):new uJ(t,e,n):"array-contains"/* Operator.ARRAY_CONTAINS */===e?new u1(t,n):"in"/* Operator.IN */===e?new u2(t,n):"not-in"/* Operator.NOT_IN */===e?new u9(t,n):"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===e?new u4(t,n):new uG(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"/* Operator.IN */===e?new uY(t,n):new uZ(t,n)}matches(t){let e=t.data.field(this.field);// Types do not have to match in NOT_EQUAL filters.
return"!="/* Operator.NOT_EQUAL */===this.op?null!==e&&this.matchesComparison(uO(e,this.value)):null!==e&&uk(this.value)===uk(e)&&this.matchesComparison(uO(e,this.value));// Only compare types with matching backend order (such as double and int).
}matchesComparison(t){switch(this.op){case"<"/* Operator.LESS_THAN */:return t<0;case"<="/* Operator.LESS_THAN_OR_EQUAL */:return t<=0;case"=="/* Operator.EQUAL */:return 0===t;case"!="/* Operator.NOT_EQUAL */:return 0!==t;case">"/* Operator.GREATER_THAN */:return t>0;case">="/* Operator.GREATER_THAN_OR_EQUAL */:return t>=0;default:return lq()}}isInequality(){return["<"/* Operator.LESS_THAN */,"<="/* Operator.LESS_THAN_OR_EQUAL */,">"/* Operator.GREATER_THAN */,">="/* Operator.GREATER_THAN_OR_EQUAL */,"!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class uW extends uK{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}/**
     * Creates a filter based on the provided arguments.
     */static create(t,e){return new uW(t,e)}matches(t){return uQ(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}// Returns a mutable copy of `this.filters`
getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let t=this.le(t=>t.isInequality());return null!==t?t.field:null}// Performs a depth-first search to find and return the first FieldFilter in the composite filter
// that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
// predicate.
le(t){for(let e of this.getFlattenedFilters())if(t(e))return e;return null}}function uQ(t){return"and"/* CompositeOperator.AND */===t.op}/**
 * Returns true if this filter does not contain any composite filters. Returns false otherwise.
 */function uX(t){for(let e of t.filters)if(e instanceof uW)return!1;return!0}class uJ extends uG{constructor(t,e,n){super(t,e,n),this.key=ue.fromName(n.referenceValue)}matches(t){let e=ue.comparator(t.key,this.key);return this.matchesComparison(e)}}/** Filter that matches on key fields within an array. */class uY extends uG{constructor(t,e){super(t,"in"/* Operator.IN */,e),this.keys=u0("in"/* Operator.IN */,e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}/** Filter that matches on key fields not present within an array. */class uZ extends uG{constructor(t,e){super(t,"not-in"/* Operator.NOT_IN */,e),this.keys=u0("not-in"/* Operator.NOT_IN */,e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function u0(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>ue.fromName(t.referenceValue))}/** A Filter that implements the array-contains operator. */class u1 extends uG{constructor(t,e){super(t,"array-contains"/* Operator.ARRAY_CONTAINS */,e)}matches(t){let e=t.data.field(this.field);return uM(e)&&uD(e.arrayValue,this.value)}}/** A Filter that implements the IN operator. */class u2 extends uG{constructor(t,e){super(t,"in"/* Operator.IN */,e)}matches(t){let e=t.data.field(this.field);return null!==e&&uD(this.value.arrayValue,e)}}/** A Filter that implements the not-in operator. */class u9 extends uG{constructor(t,e){super(t,"not-in"/* Operator.NOT_IN */,e)}matches(t){if(uD(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let e=t.data.field(this.field);return null!==e&&!uD(this.value.arrayValue,e)}}/** A Filter that implements the array-contains-any operator. */class u4 extends uG{constructor(t,e){super(t,"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,e)}matches(t){let e=t.data.field(this.field);return!(!uM(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>uD(this.value.arrayValue,t))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Visible for testing
class u5{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.he=null}}/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */function u6(t,e=null,n=[],i=[],r=null,s=null,o=null){return new u5(t,e,n,i,r,s,o)}function u3(t){if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(t=>(function t(e){if(e instanceof uG)// the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return e.field.canonicalString()+e.op.toString()+uL(e.value);if(uX(e)&&uQ(e))// In the new SDK versions, the developer may use an explicit AND filter.
    // To stay consistent with the old usages, we add a special case to ensure
    // the canonical ID for these two are the same. For example:
    // `col.whereEquals("a", 1).whereEquals("b", 2)` should have the same
    // canonical ID as `col.where(and(equals("a",1), equals("b",2)))`.
    return e.filters.map(e=>t(e)).join(",");{// filter instanceof CompositeFilter
    let n=e.filters.map(e=>t(e)).join(",");return`${e.op}(${n})`}})(t)).join(",")+"|ob:"+t.orderBy.map(t=>t.field.canonicalString()+t.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(t=>uL(t)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(t=>uL(t)).join(",")),t.he=e}return t.he}function u8(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++){var n,i;if(n=t.orderBy[r],i=e.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!function t(e,n){return e instanceof uG?n instanceof uG&&e.op===n.op&&e.field.isEqual(n.field)&&uN(e.value,n.value):e instanceof uW?n instanceof uW&&e.op===n.op&&e.filters.length===n.filters.length&&e.filters.reduce((e,i,r)=>e&&t(i,n.filters[r]),!0):void lq()}(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uq(t.startAt,e.startAt)&&uq(t.endAt,e.endAt)}/** Returns the number of segments of a perfect index for this target. *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */class u7{/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */constructor(t,e=null,n=[],i=[],r=null,s="F"/* LimitType.First */,o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,// non-aggregate queries.
this.Ie=null,// aggregate queries. Unlike targets for non-aggregate queries,
// aggregate query targets do not contain normalized order-bys, they only
// contain explicit order-bys.
this.de=null,this.startAt,this.endAt}}/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 *//**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */function ct(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}/**
 * Returns the normalized order-by constraint that is used to execute the Query,
 * which can be different from the order-by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`). The normalized order-by
 * includes implicit order-bys in addition to the explicit user provided
 * order-bys.
 */function ce(t){if(null===t.Pe){t.Pe=[];let e=function(t){for(let e of t.filters){let t=e.getFirstInequalityField();if(null!==t)return t}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)// inequality filter field for it to be a valid query.
// Note that the default inequality field and key ordering is ascending.
e.isKeyField()||t.Pe.push(new uH(e)),t.Pe.push(new uH(ut.keyField(),"asc"/* Direction.ASCENDING */));else{let e=!1;for(let n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){// The order of the implicit key ordering always matches the last
// explicit order-by
let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc"/* Direction.ASCENDING */;t.Pe.push(new uH(ut.keyField(),e))}}}return t.Pe}/**
 * Converts this `Query` instance to its corresponding `Target` representation.
 */function cn(t){return t.Ie||(t.Ie=/**
 * Converts this `Query` instance to its corresponding `Target` representation,
 * for use within an aggregate query. Unlike targets for non-aggregate queries,
 * aggregate query targets do not contain normalized order-bys, they only
 * contain explicit order-bys.
 */function(t,e){if("F"/* LimitType.First */===t.limitType)return u6(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{// Flip the orderBy directions since we want the last results
e=e.map(t=>{let e="desc"/* Direction.DESCENDING */===t.dir?"asc"/* Direction.ASCENDING */:"desc"/* Direction.DESCENDING */;return new uH(t.field,e)});// We need to swap the cursors to match the now-flipped query ordering.
let n=t.endAt?new u$(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new u$(t.startAt.position,t.startAt.inclusive):null;// Now return as a LimitType.First query.
return u6(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(t,ce(t))),t.Ie}function ci(t,e,n){return new u7(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cr(t,e){return u8(cn(t),cn(e))&&t.limitType===e.limitType}// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function cs(t){return`${u3(cn(t))}|lt:${t.limitType}`}function co(t){var e;let n;return`Query(target=${n=(e=cn(t)).path.canonicalString(),null!==e.collectionGroup&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(t=>/** Returns a debug description for `filter`. */(function t(e){return e instanceof uG?`${e.field.canonicalString()} ${e.op} ${uL(e.value)}`:e instanceof uW?e.op.toString()+" {"+e.getFilters().map(t).join(" ,")+"}":"Filter"})(t)).join(", ")}]`),null==e.limit||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(t=>`${t.field.canonicalString()} (${t.dir})`).join(", ")}]`),e.startAt&&(n+=", startAt: "+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(t=>uL(t)).join(",")),e.endAt&&(n+=", endAt: "+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(t=>uL(t)).join(",")),`Target(${n})`}; limitType=${t.limitType})`}/** Returns whether `doc` matches the constraints of `query`. */function ca(t,e){return e.isFoundDocument()&&function(t,e){let n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ue.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){// We must use `queryNormalizedOrderBy()` to get the list of all orderBys (both implicit and explicit).
// Note that for OR queries, orderBy applies to all disjunction terms and implicit orderBys must
// be taken into account. For example, the query "a > 1 || b==1" has an implicit "orderBy a" due
// to the inequality, and is evaluated as "a > 1 orderBy a || b==1 orderBy a".
// A document with content of {b:1} matches the filters, but does not match the orderBy because
// it's missing the field 'a'.
for(let n of ce(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(let n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(!t.startAt||!!/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */function(t,e,n){let i=uz(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,ce(t),e))&&(!t.endAt||!!function(t,e,n){let i=uz(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,ce(t),e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */class cl{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,/**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */this.inner={},/** The number of entries stored in the map */this.innerSize=0}/** Get a value for this key, or undefined if it does not exist. */get(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n){for(let[e,i]of n)if(this.equalsFn(e,t))return i}}has(t){return void 0!==this.get(t)}/** Put this key and value in the map. */set(t,e){let n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}/**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */delete(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){uc(this.inner,(e,n)=>{for(let[e,i]of n)t(e,i)})}isEmpty(){return uh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new uf(ue.comparator),cc=new uf(ue.comparator);function ch(...t){let e=cc;for(let n of t)e=e.insert(n.key,n);return e}function cf(t){let e=cc;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function cd(){return new cl(t=>t.toString(),(t,e)=>t.isEqual(e))}const cp=new uf(ue.comparator),cg=new ug(ue.comparator);function cm(...t){let e=cg;for(let n of t)e=e.add(n);return e}const cy=new ug(l9);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */function cv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}/**
 * Returns an IntegerValue for `value`.
 */function cw(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Used to represent a field transform on a mutation. */class cb{constructor(){// Make sure that the structural type of `TransformOperation` is unique.
// See https://github.com/microsoft/TypeScript/issues/5451
this._=void 0}}/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */function cE(t,e){return t instanceof cC?/** Returns true if `value` is either an IntegerValue or a DoubleValue. */uP(e)||e&&"doubleValue"in e?e:{integerValue:0}:null}/** Transforms a value into a server-generated timestamp. */class cT extends cb{}/** Transforms an array value via a union operation. */class cI extends cb{constructor(t){super(),this.elements=t}}function cS(t,e){let n=ck(e);for(let e of t.elements)n.some(t=>uN(t,e))||n.push(e);return{arrayValue:{values:n}}}/** Transforms an array value via a remove operation. */class cA extends cb{constructor(t){super(),this.elements=t}}function cx(t,e){let n=ck(e);for(let e of t.elements)n=n.filter(t=>!uN(t,e));return{arrayValue:{values:n}}}/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */class cC extends cb{constructor(t,e){super(),this.serializer=t,this.Te=e}}function c_(t){return uT(t.integerValue||t.doubleValue)}function ck(t){return uM(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/** The result of successfully applying a mutation to the backend. */class cN{constructor(/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */t,/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */e){this.version=t,this.transformResults=e}}/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */class cD{constructor(t,e){this.updateTime=t,this.exists=e}/** Creates a new empty Precondition. */static none(){return new cD}/** Creates a new Precondition with an exists flag. */static exists(t){return new cD(void 0,t)}/** Creates a new Precondition based on a version a document exists at. */static updateTime(t){return new cD(t)}/** Returns whether this Precondition is empty. */get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}/** Returns true if the preconditions is valid for the given document. */function cO(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */class cR{}/**
 * A utility method to calculate a `Mutation` representing the overlay from the
 * final state of the document, and a `FieldMask` representing the fields that
 * are mutated by the local mutations.
 */function cL(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;// mask is null when sets or deletes are applied to the current document.
if(null===e)return t.isNoDocument()?new c$(t.key,cD.none()):new cB(t.key,t.data,cD.none());{let n=t.data,i=uj.empty(),r=new ug(ut.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);// If we are deleting a nested field, we take the immediate parent as
// the mask used to construct the resulting mutation.
// Justification: Nested fields can create parent fields implicitly. If
// only a leaf entry is deleted in later mutations, the parent field
// should still remain, but we may have lost this information.
// Consider mutation (foo.bar 1), then mutation (foo.bar delete()).
// This leaves the final result (foo, {}). Despite the fact that `doc`
// has the correct result, `foo` is not in `mask`, and the resulting
// mutation would miss `foo`.
null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new cF(t.key,i,new uy(r.toArray()),cD.none())}}/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param previousMask - The fields that have been updated before applying this mutation.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns A `FieldMask` representing the fields that are changed by applying this mutation.
 */function cP(t,e,n,i){return t instanceof cB?function(t,e,n,i){if(!cO(t.precondition,e))// caused a name collision).
return n;let r=t.value.clone(),s=cV(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null;// SetMutation overwrites all fields.
}(t,e,n,i):t instanceof cF?function(t,e,n,i){if(!cO(t.precondition,e))return n;let r=cV(t.fieldTransforms,i,e),s=e.data;return(s.setAll(cU(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,i):cO(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}function cM(t,e){var n,i;return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&l4(n,i,(t,e)=>{var n,i;return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof cI&&i instanceof cI||n instanceof cA&&i instanceof cA?l4(n.elements,i.elements,uN):n instanceof cC&&i instanceof cC?uN(n.Te,i.Te):n instanceof cT&&i instanceof cT)})))&&(0/* MutationType.Set */===t.type?t.value.isEqual(e.value):1/* MutationType.Patch */!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */class cB extends cR{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0/* MutationType.Set */}getFieldMask(){return null}}class cF extends cR{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1/* MutationType.Patch */}getFieldMask(){return this.fieldMask}}function cU(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=t.data.field(n);e.set(n,i)}}),e}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */function cj(t,e,n){var i;let r=new Map;t.length===n.length||lq();for(let s=0;s<n.length;s++){let o=t[s],a=o.transform,l=e.data.field(o.field);r.set(o.field,(i=n[s],a instanceof cI?cS(a,l):a instanceof cA?cx(a,l):i))}return r}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The document to apply transforms on.
 * @returns The transform results list.
 */function cV(t,e,n){let i=new Map;for(let r of t){let t=r.transform,s=n.data.field(r.field);i.set(r.field,t instanceof cT?function(t,e){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};// We should avoid storing deeply nested server timestamp map values
// because we never use the intermediate "previous values".
// For example:
// previous: 42L, add: t1, result: t1 -> 42L
// previous: t1,  add: t2, result: t2 -> 42L (NOT t2 -> t1 -> 42L)
// previous: t2,  add: t3, result: t3 -> 42L (NOT t3 -> t2 -> t1 -> 42L)
// `getPreviousValue` recursively traverses server timestamps to find the
// least recent Value.
return e&&uS(e)&&(e=/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 *//**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */function t(e){let n=e.mapValue.fields.__previous_value__;return uS(n)?t(n):n}(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(e,s):t instanceof cI?cS(t,s):t instanceof cA?cx(t,s):function(t,e){// PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
// precision and resolves overflows by reducing precision, we do not
// manually cap overflows at 2^63.
let n=cE(t,e),i=c_(n)+c_(t.Te);return uP(n)&&uP(t.Te)?cw(i):cv(t.serializer,i)}(t,s))}return i}/** A mutation that deletes the document at the given key. */class c$ extends cR{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2/* MutationType.Delete */,this.fieldTransforms=[]}getFieldMask(){return null}}class cz extends cR{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3/* MutationType.Verify */,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A batch of mutations that will be sent as one unit to the backend.
 */class cq{/**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}/**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */applyToRemoteDocument(t,e){let n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){let r=this.mutations[e];if(r.key.isEqual(t.key)){var i;i=n[e],r instanceof cB?function(t,e,n){// Unlike setMutationApplyToLocalView, if we're applying a mutation to a
// remote document the server has accepted the mutation so the precondition
// must have held.
let i=t.value.clone(),r=cj(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,t,i):r instanceof cF?function(t,e,n){if(!cO(t.precondition,e))// matched on the backend. We therefore must not have the expected version
// of the document in our cache and convert to an UnknownDocument with a
// known updateTime.
return void e.convertToUnknownDocument(n.version);let i=cj(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(cU(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,t,i):function(t,e,n){// Unlike applyToLocalView, if we're applying a mutation to a remote
// document the server has accepted the mutation so the precondition must
// have held.
e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,i)}}}/**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */applyToLocalView(t,e){// First, apply the base state. This allows us to apply non-idempotent
// transform against a consistent set of values.
for(let n of this.baseMutations)n.key.isEqual(t.key)&&(e=cP(n,t,e,this.localWriteTime));// Second, apply all user-provided mutations.
for(let n of this.mutations)n.key.isEqual(t.key)&&(e=cP(n,t,e,this.localWriteTime));return e}/**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */applyToLocalDocumentSet(t,e){// TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
// directly (as done in `applyToLocalView()`), we can reduce the complexity
// to O(n).
let n=cd();return this.mutations.forEach(i=>{let r=t.get(i.key),s=r.overlayedDocument,o=this.applyToLocalView(s,r.mutatedFields);// Set mutatedFields to null if the document is only from local mutations.
// This creates a Set or Delete mutation, instead of trying to create a
// patch mutation as the overlay.
o=e.has(i.key)?null:o;let a=cL(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(l6.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),cm())}isEqual(t){return this.batchId===t.batchId&&l4(this.mutations,t.mutations,(t,e)=>cM(t,e))&&l4(this.baseMutations,t.baseMutations,(t,e)=>cM(t,e))}}/** The result of applying a mutation batch to the backend. */class cH{constructor(t,e,n,/**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}/**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */static from(t,e,n){t.mutations.length===n.length||lq();let i=cp,r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new cH(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */class cK{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(p=d||(d={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS",new lL([4294967295,4294967295],0);/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */class cG{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}/**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 *//**
 * Returns a value for a Date that's appropriate to put into a proto.
 */function cW(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cQ(t){return t||lq(),l6.fromTimestamp(function(t){let e=uE(t);return new l5(e.seconds,e.nanos)}(t))}function cX(t,e){return new l8(["projects",t.projectId,"databases",t.database]).child("documents").child(e).canonicalString()}function cJ(t,e){return cX(t.databaseId,e.path)}/** Creates a Document proto from key and fields (but no create/update time) */function cY(t,e,n){return{name:cJ(t,e),fields:n.value.mapValue.fields}}function cZ(t){return ut.fromServerFormat(t.fieldPath)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Serializer for values stored in the LocalStore. */class c0{constructor(t){this.ht=t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */class c1{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */dt(t,e){this.Tt(t,e),// (see go/firestore-storage-format#encodings).
e.Et()}Tt(t,e){if("nullValue"in t)this.At(e,5);else if("booleanValue"in t)this.At(e,10),e.Rt(t.booleanValue?1:0);else if("integerValue"in t)this.At(e,15),e.Rt(uT(t.integerValue));else if("doubleValue"in t){let n=uT(t.doubleValue);isNaN(n)?this.At(e,13):(this.At(e,15),ul(n)?e.Rt(0):e.Rt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.At(e,20),"string"==typeof n?e.Vt(n):(e.Vt(`${n.seconds||""}`),e.Rt(n.nanos||0))}else if("stringValue"in t)this.ft(t.stringValue,e),this.gt(e);else if("bytesValue"in t)this.At(e,30),e.yt(uI(t.bytesValue)),this.gt(e);else if("referenceValue"in t)this.wt(t.referenceValue,e);else if("geoPointValue"in t){let n=t.geoPointValue;this.At(e,45),e.Rt(n.latitude||0),e.Rt(n.longitude||0)}else"mapValue"in t?uU(t)?this.At(e,Number.MAX_SAFE_INTEGER):(this.St(t.mapValue,e),this.gt(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.gt(e)):lq()}ft(t,e){this.At(e,25),this.Dt(t,e)}Dt(t,e){e.Vt(t)}St(t,e){let n=t.fields||{};for(let t of(this.At(e,55),Object.keys(n)))this.ft(t,e),this.Tt(n[t],e)}bt(t,e){let n=t.values||[];for(let t of(this.At(e,50),n))this.Tt(t,e)}wt(t,e){this.At(e,37),ue.fromName(t).path.forEach(t=>{this.At(e,60),this.Dt(t,e)})}At(t,e){t.Rt(e)}gt(t){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
t.Rt(2)}}c1.Ct=new c1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of IndexManager.
 */class c2{constructor(){this.an=new c9}addToCollectionParentIndex(t,e){return this.an.add(e),us.resolve()}getCollectionParents(t,e){return us.resolve(this.an.getEntries(e))}addFieldIndex(t,e){// Field indices are not supported with memory persistence.
return us.resolve()}deleteFieldIndex(t,e){// Field indices are not supported with memory persistence.
return us.resolve()}deleteAllFieldIndexes(t){// Field indices are not supported with memory persistence.
return us.resolve()}createTargetIndexes(t,e){// Field indices are not supported with memory persistence.
return us.resolve()}getDocumentsMatchingTarget(t,e){// Field indices are not supported with memory persistence.
return us.resolve(null)}getIndexType(t,e){// Field indices are not supported with memory persistence.
return us.resolve(0/* IndexType.NONE */)}getFieldIndexes(t,e){// Field indices are not supported with memory persistence.
return us.resolve([])}getNextCollectionGroupToUpdate(t){// Field indices are not supported with memory persistence.
return us.resolve(null)}getMinOffset(t,e){return us.resolve(un.min())}getMinOffsetFromCollectionGroup(t,e){return us.resolve(un.min())}updateCollectionGroup(t,e,n){// Field indices are not supported with memory persistence.
return us.resolve()}updateIndexEntries(t,e){// Field indices are not supported with memory persistence.
return us.resolve()}}/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */class c9{constructor(){this.index={}}// Returns false if the entry already existed.
add(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ug(l8.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ug(l8.comparator)).toArray()}}new Uint8Array(0);class c4{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
t,e,// us from collecting a huge number of sequence numbers if the cache has grown very large.
n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new c4(t,c4.DEFAULT_COLLECTION_PERCENTILE,c4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** A mutation queue for a specific user, backed by IndexedDB. */c4.DEFAULT_COLLECTION_PERCENTILE=10,c4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,c4.DEFAULT=new c4(41943040,c4.DEFAULT_COLLECTION_PERCENTILE,c4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),c4.DISABLED=new c4(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Offset to ensure non-overlapping target ids. *//**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */class c5{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){// The target cache generator must return '2' in its first call to `next()`
// as there is no differentiation in the protocol layer between an unset
// number and the number '0'. If we were to sent a target with target ID
// '0', the backend would consider it unset and replace it with its own ID.
return new c5(0)}static Ln(){// Sync engine assigns target IDs for limbo document detection.
return new c5(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */class c6{constructor(){// A mapping of document key to the new cache entry that should be written.
this.changes=new cl(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}/**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}/**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,uV.newInvalidDocument(t).setReadTime(e))}/**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */getEntry(t,e){this.assertNotApplied();let n=this.changes.get(e);return void 0!==n?us.resolve(n):this.getFromCache(t,e)}/**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */getEntries(t,e){return this.getAllFromCache(t,e)}/**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}/** Helper to assert this.changes is not null  */assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */class c3{constructor(t,/**
     * The fields that are locally mutated by patch mutations.
     *
     * If the overlayed	document is from set or delete mutations, this is `null`.
     * If there is no overlay (mutation) for the document, this is an empty `FieldMask`.
     */e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */class c8{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}/**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&cP(n.mutation,t,uy.empty(),l5.now()),t))}/**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,cm()).next(()=>e))}/**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */getLocalViewOfDocuments(t,e,n=cm()){let i=cd();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(t=>{let e=ch();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}/**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */getOverlayedDocuments(t,e){let n=cd();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,cm()))}/**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */populateOverlays(t,e,n){let i=[];return n.forEach(t=>{e.has(t)||i.push(t)}),this.documentOverlayCache.getOverlays(t,i).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}/**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */computeViews(t,e,n,i){let r=cu,s=cd(),o=cd();return e.forEach((t,e)=>{let o=n.get(e.key);// Recalculate an overlay if the document's existence state changed due to
// a remote event *and* the overlay is a PatchMutation. This is because
// document existence state can change if some patch mutation's
// preconditions are met.
// NOTE: we recalculate when `overlay` is undefined as well, because there
// might be a patch mutation whose precondition does not match before the
// change (hence overlay is undefined), but would now match.
i.has(e.key)&&(void 0===o||o.mutation instanceof cF)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),cP(o.mutation,e,o.mutation.getFieldMask(),l5.now())):// Using EMPTY to indicate there is no overlay for the document.
s.set(e.key,uy.empty())}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new c3(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){let n=cd(),i=new uf((t,e)=>t-e),r=cm();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(let r of t)r.keys().forEach(t=>{let s=e.get(t);if(null===s)return;let o=n.get(t)||uy.empty();o=r.applyToLocalView(s,o),n.set(t,o);let a=(i.get(r.batchId)||cm()).add(t);i=i.insert(r.batchId,a)})}).next(()=>{let s=[],o=i.getReverseIterator();// Iterate in descending order of batch IDs, and skip documents that are
// already saved.
for(;o.hasNext();){let i=o.getNext(),a=i.key,l=i.value,u=cd();l.forEach(t=>{if(!r.has(t)){let i=cL(e.get(t),n.get(t));null!==i&&u.set(t,i),r=r.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return us.waitFor(s)}).next(()=>n)}/**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}/**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     * @param context - A optional tracker to keep a record of important details
     *   during database local query execution.
     */getDocumentsMatchingQuery(t,e,n,i){/**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */return ue.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):null!==e.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}/**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):us.resolve(cd()),o=-1,a=r;return s.next(e=>us.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?us.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,a,e,cm())).next(t=>({batchId:o,changes:cf(t)})))})}getDocumentsMatchingDocumentQuery(t,e){// Just do a simple document lookup.
return this.getDocument(t,new ue(e)).next(t=>{let e=ch();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){let r=e.collectionGroup,s=ch();return this.indexManager.getCollectionParents(t,r).next(o=>us.forEach(o,o=>{var a;let l=(a=o.child(r),new u7(a,/*collectionGroup=*/null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt));return this.getDocumentsMatchingCollectionQuery(t,l,n,i).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n,i){// Query the remote documents and overlay mutations.
let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i))).next(t=>{// As documents might match the query because of their overlay we need to
// include documents for all overlays in the initial document set.
r.forEach((e,n)=>{let i=n.getKey();null===t.get(i)&&(t=t.insert(i,uV.newInvalidDocument(i)))});// Apply the overlays and match against the query.
let n=ch();return t.forEach((t,i)=>{let s=r.get(t);void 0!==s&&cP(s.mutation,i,uy.empty(),l5.now()),ca(e,i)&&(n=n.insert(t,i))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c7{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return us.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,{id:e.id,version:e.version,createTime:cQ(e.createTime)}),us.resolve()}getNamedQuery(t,e){return us.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,{name:e.name,query:/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */function(t){let e=function(t){var e,n,i,r,s,o,a,l;let u,c=function(t){let e=function(t){let e=l8.fromString(t);return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)||lq(),e}(t);// In v1beta1 queries for collections at the root did not have a trailing
// "/documents". In v1 all resource paths contain "/documents". Preserve the
// ability to read the v1beta1 form for compatibility with queries persisted
// in the local target cache.
return 4===e.length?l8.emptyPath():(e.length>4&&"documents"===e.get(4)||lq(),e.popFirst(5))}(t.parent),h=t.structuredQuery,f=h.from?h.from.length:0,d=null;if(f>0){1===f||lq();let t=h.from[0];t.allDescendants?d=t.collectionId:c=c.child(t.collectionId)}let p=[];h.where&&(p=function(t){var e;let n=function t(e){return void 0!==e.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":let e=cZ(t.unaryFilter.field);return uG.create(e,"=="/* Operator.EQUAL */,{doubleValue:NaN});case"IS_NULL":let n=cZ(t.unaryFilter.field);return uG.create(n,"=="/* Operator.EQUAL */,{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=cZ(t.unaryFilter.field);return uG.create(i,"!="/* Operator.NOT_EQUAL */,{doubleValue:NaN});case"IS_NOT_NULL":let r=cZ(t.unaryFilter.field);return uG.create(r,"!="/* Operator.NOT_EQUAL */,{nullValue:"NULL_VALUE"});default:return lq()}}(e):void 0!==e.fieldFilter?uG.create(cZ(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"=="/* Operator.EQUAL */;case"NOT_EQUAL":return"!="/* Operator.NOT_EQUAL */;case"GREATER_THAN":return">"/* Operator.GREATER_THAN */;case"GREATER_THAN_OR_EQUAL":return">="/* Operator.GREATER_THAN_OR_EQUAL */;case"LESS_THAN":return"<"/* Operator.LESS_THAN */;case"LESS_THAN_OR_EQUAL":return"<="/* Operator.LESS_THAN_OR_EQUAL */;case"ARRAY_CONTAINS":return"array-contains"/* Operator.ARRAY_CONTAINS */;case"IN":return"in"/* Operator.IN */;case"NOT_IN":return"not-in"/* Operator.NOT_IN */;case"ARRAY_CONTAINS_ANY":return"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */;default:return lq()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?uW.create(e.compositeFilter.filters.map(e=>t(e)),function(t){switch(t){case"AND":return"and"/* CompositeOperator.AND */;case"OR":return"or"/* CompositeOperator.OR */;default:return lq()}}(e.compositeFilter.op)):lq()}(t);return n instanceof uW&&uX(e=n)&&uQ(e)?n.getFilters():[n]}(h.where));let g=[];h.orderBy&&(g=h.orderBy.map(t=>new uH(cZ(t.field),function(t){switch(t){case"ASCENDING":return"asc"/* Direction.ASCENDING */;case"DESCENDING":return"desc"/* Direction.DESCENDING */;default:return}}(t.direction))));let m=null;h.limit&&(m=null==(u="object"==typeof(e=h.limit)?e.value:e)?null:u);let y=null;h.startAt&&(y=function(t){let e=!!t.before,n=t.values||[];return new u$(n,e)}(h.startAt));let v=null;return h.endAt&&(v=function(t){let e=!t.before,n=t.values||[];return new u$(n,e)}(h.endAt)),n=c,i=d,r=g,s=p,o=m,a=y,l=v,new u7(n,i,r,s,o,"F"/* LimitType.First */,a,l)}({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ci(e,e.limit,"L"/* LimitType.Last */):e}(e.bundledQuery),readTime:cQ(e.readTime)}),us.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of DocumentOverlayCache.
 */class ht{constructor(){// A map sorted by DocumentKey, whose value is a pair of the largest batch id
// for the overlay and the overlay itself.
this.overlays=new uf(ue.comparator),this.Pr=new Map}getOverlay(t,e){return us.resolve(this.overlays.get(e))}getOverlays(t,e){let n=cd();return us.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,i)=>{this.It(t,e,i)}),us.resolve()}removeOverlaysForBatchId(t,e,n){let i=this.Pr.get(n);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.Pr.delete(n)),us.resolve()}getOverlaysForCollection(t,e,n){let i=cd(),r=e.length+1,s=new ue(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;// Documents from sub-collections
s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return us.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new uf((t,e)=>t-e),s=this.overlays.getIterator();for(;s.hasNext();){let t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=cd(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}let o=cd(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=i)););return us.resolve(o)}It(t,e,n){// Remove the association of the overlay to its batch id.
let i=this.overlays.get(n.key);if(null!==i){let t=this.Pr.get(i.largestBatchId).delete(n.key);this.Pr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new cK(e,n));// Create the association of this overlay to the given largestBatchId.
let r=this.Pr.get(e);void 0===r&&(r=cm(),this.Pr.set(e,r)),this.Pr.set(e,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */class he{constructor(){// A set of outstanding references to a document sorted by key.
this.Ir=new ug(hn.dr),this.Tr=new ug(hn.Er)}/** Returns true if the reference set contains no references. */isEmpty(){return this.Ir.isEmpty()}/** Adds a reference to the given document key for the given ID. */addReference(t,e){let n=new hn(t,e);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}/** Add references to the given document keys for the given ID. */Ar(t,e){t.forEach(t=>this.addReference(t,e))}/**
     * Removes a reference to the given document key for the given
     * ID.
     */removeReference(t,e){this.Rr(new hn(t,e))}Vr(t,e){t.forEach(t=>this.removeReference(t,e))}/**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */mr(t){let e=new ue(new l8([])),n=new hn(e,t),i=new hn(e,t+1),r=[];return this.Tr.forEachInRange([n,i],t=>{this.Rr(t),r.push(t.key)}),r}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){let e=new ue(new l8([])),n=new hn(e,t),i=new hn(e,t+1),r=cm();return this.Tr.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){let e=new hn(t,0),n=this.Ir.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class hn{constructor(t,e){this.key=t,this.yr=e}/** Compare by key then by ID */static dr(t,e){return ue.comparator(t.key,e.key)||l9(t.yr,e.yr)}/** Compare by ID then by key */static Er(t,e){return l9(t.yr,e.yr)||ue.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,/**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */this.mutationQueue=[],/** Next value to use when assigning sequential IDs to each mutation batch. */this.wr=1,/** An ordered mapping between documents and the mutations batch IDs. */this.Sr=new ug(hn.dr)}checkEmpty(t){return us.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){let r=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new cq(r,e,n,i);// Track references by document key and index collection parents.
for(let e of(this.mutationQueue.push(s),i))this.Sr=this.Sr.add(new hn(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return us.resolve(s)}lookupMutationBatch(t,e){return us.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){let n=this.Dr(e+1),i=n<0?0:n;// The requested batchId may still be out of range so normalize it to the
// start of the queue.
return us.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return us.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(t){return us.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){let n=new hn(e,0),i=new hn(e,Number.POSITIVE_INFINITY),r=[];return this.Sr.forEachInRange([n,i],t=>{let e=this.br(t.yr);r.push(e)}),us.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ug(l9);return e.forEach(t=>{let e=new hn(t,0),i=new hn(t,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([e,i],t=>{n=n.add(t.yr)})}),us.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){// Use the query path as a prefix for testing if a document matches the
// query.
let n=e.path,i=n.length+1,r=n;ue.isDocumentKey(r)||(r=r.child(""));let s=new hn(new ue(r),0),o=new ug(l9);return this.Sr.forEachWhile(t=>{let e=t.key.path;return!!n.isPrefixOf(e)&&// Rows with document keys more than one segment longer than the query
// path can't be matches. For example, a query on 'rooms' can't match
// the document /rooms/abc/messages/xyx.
// TODO(mcg): we'll need a different scanner when we implement
// ancestor queries.
(e.length===i&&(o=o.add(t.yr)),!0)},s),us.resolve(this.Cr(o))}Cr(t){// Construct an array of matching batches, sorted by batchID to ensure that
// multiple mutations affecting the same document key are applied in order.
let e=[];return t.forEach(t=>{let n=this.br(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){0===this.vr(e.batchId,"removed")||lq(),this.mutationQueue.shift();let n=this.Sr;return us.forEach(e.mutations,i=>{let r=new hn(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Sr=n})}xn(t){// No-op since the memory mutation queue does not maintain a separate cache.
}containsKey(t,e){let n=new hn(e,0),i=this.Sr.firstAfterOrEqual(n);return us.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,us.resolve()}/**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */vr(t,e){return this.Dr(t)}/**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */Dr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}/**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */br(t){let e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */class hr{/**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */constructor(t){this.Fr=t,/** Underlying cache of documents and their read times. */this.docs=new uf(ue.comparator),/** Size of all cached documents. */this.size=0}setIndexManager(t){this.indexManager=t}/**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */addEntry(t,e){let n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}/**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */removeEntry(t){let e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){let n=this.docs.get(e);return us.resolve(n?n.document.mutableCopy():uV.newInvalidDocument(e))}getEntries(t,e){let n=cu;return e.forEach(t=>{let e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():uV.newInvalidDocument(t))}),us.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=cu,s=e.path,o=new ue(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||0>=function(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:0!==(n=ue.comparator(t.documentKey,e.documentKey))?n:l9(t.largestBatchId,e.largestBatchId)}(new un(o.readTime,o.key,-1),n)||(i.has(o.key)||ca(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return us.resolve(r)}getAllFromCollectionGroup(t,e,n,i){// This method should only be called from the IndexBackfiller if persistence
// is enabled.
lq()}Mr(t,e){return us.forEach(this.docs,t=>e(t))}newChangeBuffer(t){// `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
// a separate changelog and does not need special handling for removals.
return new hs(this)}getSize(t){return us.resolve(this.size)}}/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 *//**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */class hs extends c6{constructor(t){super(),this.ur=t}applyChanges(t){let e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.ur.addEntry(t,i)):this.ur.removeEntry(n)}),us.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t){this.persistence=t,/**
         * Maps a target to the data about that target
         */this.Or=new cl(t=>u3(t),u8),/** The last received snapshot version. */this.lastRemoteSnapshotVersion=l6.min(),/** The highest numbered target ID encountered. */this.highestTargetId=0,/** The highest sequence number encountered. */this.Nr=0,/**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */this.Br=new he,this.targetCount=0,this.Lr=c5.Bn()}forEachTarget(t,e){return this.Or.forEach((t,n)=>e(n)),us.resolve()}getLastRemoteSnapshotVersion(t){return us.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return us.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),us.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),us.resolve()}Qn(t){this.Or.set(t.target,t);let e=t.targetId;e>this.highestTargetId&&(this.Lr=new c5(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,us.resolve()}updateTargetData(t,e){return this.Qn(e),us.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Br.mr(e.targetId),this.targetCount-=1,us.resolve()}removeTargets(t,e,n){let i=0,r=[];return this.Or.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Or.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),us.waitFor(r).next(()=>i)}getTargetCount(t){return us.resolve(this.targetCount)}getTargetData(t,e){let n=this.Or.get(e)||null;return us.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Ar(e,n),us.resolve()}removeMatchingKeys(t,e,n){this.Br.Vr(e,n);let i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),us.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.mr(e),us.resolve()}getMatchingKeysForTargetId(t,e){let n=this.Br.pr(e);return us.resolve(n)}containsKey(t,e){return us.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */class ha{/**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */constructor(t,e){this.kr={},this.overlays={},this.qr=new ua(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new ho(this),this.indexManager=new c2,this.remoteDocumentCache=new hr(t=>this.referenceDelegate.$r(t)),this.serializer=new c0(e),this.Ur=new c7(this.serializer)}start(){return Promise.resolve()}shutdown(){// No durable state to ensure is closed on shutdown.
return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){// No op.
}setNetworkEnabled(){// No op.
}getIndexManager(t){// We do not currently support indices for memory persistence, so we can
// return the same shared instance of the memory index manager.
return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ht,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new hi(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,e,n){lj("MemoryPersistence","Starting transaction:",t);let i=new hl(this.qr.next());return this.referenceDelegate.Wr(),n(i).next(t=>this.referenceDelegate.Gr(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}zr(t,e){return us.or(Object.values(this.kr).map(n=>()=>n.containsKey(t,e)))}}/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */class hl extends ui{constructor(t){super(),this.currentSequenceNumber=t}}class hu{constructor(t){this.persistence=t,/** Tracks all documents that are active in Query views. */this.jr=new he,/** The list of documents that are potentially GCed after each transaction. */this.Hr=null}static Jr(t){return new hu(t)}get Yr(){if(this.Hr)return this.Hr;throw lq()}addReference(t,e,n){return this.jr.addReference(n,e),this.Yr.delete(n.toString()),us.resolve()}removeReference(t,e,n){return this.jr.removeReference(n,e),this.Yr.add(n.toString()),us.resolve()}markPotentiallyOrphaned(t,e){return this.Yr.add(e.toString()),us.resolve()}removeTarget(t,e){this.jr.mr(e.targetId).forEach(t=>this.Yr.add(t.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Yr.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Wr(){this.Hr=new Set}Gr(t){// Remove newly orphaned documents.
let e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return us.forEach(this.Yr,n=>{let i=ue.fromPath(n);return this.Zr(t,i).next(t=>{t||e.removeEntry(i,l6.min())})}).next(()=>(this.Hr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Zr(t,e).next(t=>{t?this.Yr.delete(e.toString()):this.Yr.add(e.toString())})}$r(t){// For eager GC, we don't care about the document size, there are no size thresholds.
return 0}Zr(t,e){return us.or([()=>us.resolve(this.jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */class hc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Qi=n,this.Ki=i}static $i(t,e){let n=cm(),i=cm();for(let t of e.docChanges)switch(t.type){case 0/* ChangeType.Added */:n=n.add(t.doc.key);break;case 1/* ChangeType.Removed */:i=i.add(t.doc.key)}return new hc(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A tracker to keep a record of important details during database local query
 * execution.
 */class hh{constructor(){/**
         * Counts the number of documents passed through during local query execution.
         */this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */class hf{constructor(){this.Ui=!1,this.Wi=!1,/**
         * SDK only decides whether it should create index when collection size is
         * larger than this.
         */this.Gi=100,this.zi=2}/** Sets the document view to query against. */initialize(t,e){this.ji=t,this.indexManager=e,this.Ui=!0}/** Returns all local documents matching the specified query. */getDocumentsMatchingQuery(t,e,n,i){// Stores the result from executing the query; using this object is more
// convenient than passing the result between steps of the persistence
// transaction and improves readability comparatively.
let r={result:null};return this.Hi(t,e).next(t=>{r.result=t}).next(()=>{if(!r.result)return this.Ji(t,e,i,n).next(t=>{r.result=t})}).next(()=>{if(r.result)return;let n=new hh;return this.Yi(t,e,n).next(i=>{if(r.result=i,this.Wi)return this.Zi(t,e,n,i.size)})}).next(()=>r.result)}Zi(t,e,n,i){return n.documentReadCount<this.Gi?(lU()<=sa.DEBUG&&lj("QueryEngine","SDK will not create cache indexes for query:",co(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),us.resolve()):(lU()<=sa.DEBUG&&lj("QueryEngine","Query:",co(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.zi*i?(lU()<=sa.DEBUG&&lj("QueryEngine","The SDK decides to create cache indexes for query:",co(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,cn(e))):us.resolve())}/**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */Hi(t,e){if(ct(e))// key-based lookups. It is more efficient to scan all documents in a
// collection, rather than to perform individual lookups.
return us.resolve(null);let n=cn(e);return this.indexManager.getIndexType(t,n).next(i=>0/* IndexType.NONE */===i?null:(null!==e.limit&&1/* IndexType.PARTIAL */===i&&(n=cn(// We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    e=ci(e,null,"F"/* LimitType.First */))),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{let r=cm(...i);return this.ji.getDocuments(t,r).next(i=>this.indexManager.getMinOffset(t,n).next(n=>{let s=this.Xi(e,i);return this.es(e,s,r,n.readTime)?this.Hi(t,ci(e,null,"F"/* LimitType.First */)):this.ts(t,s,e,n)}))})))}/**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */Ji(t,e,n,i){return ct(e)||i.isEqual(l6.min())?us.resolve(null):this.ji.getDocuments(t,n).next(r=>{let s=this.Xi(e,r);return this.es(e,s,n,i)?us.resolve(null):(lU()<=sa.DEBUG&&lj("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),co(e)),this.ts(t,s,e,/**
 * Creates an offset that matches all documents with a read time higher than
 * `readTime`.
 */function(t,e){// We want to create an offset that matches all documents with a read time
// greater than the provided read time. To do so, we technically need to
// create an offset for `(readTime, MAX_DOCUMENT_KEY)`. While we could use
// Unicode codepoints to generate MAX_DOCUMENT_KEY, it is much easier to use
// `(readTime + 1, DocumentKey.empty())` since `> DocumentKey.empty()` matches
// all valid document IDs.
let n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=l6.fromTimestamp(1e9===i?new l5(n+1,0):new l5(n,i));return new un(r,ue.empty(),-1)}(i,0)).next(t=>t))});// Queries that have never seen a snapshot without limbo free documents
// should also be run as a full collection scan.
}/** Applies the query filter and sorting to the provided documents.  */Xi(t,e){// Sort the documents and re-apply the query filter since previously
// matching documents do not necessarily still match the query.
let n=new ug((e,n)=>{let i=!1;for(let r of ce(t)){let t=function(t,e,n){let i=t.field.isKeyField()?ue.comparator(e.key,n.key):function(t,e,n){let i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?uO(i,r):lq()}(t.field,e,n);switch(t.dir){case"asc"/* Direction.ASCENDING */:return i;case"desc"/* Direction.DESCENDING */:return -1*i;default:return lq()}}(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0});return e.forEach((e,i)=>{ca(t,i)&&(n=n.add(i))}),n}/**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param query - The query.
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */es(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)// longer matches.
return!0;// Limit queries are not eligible for index-free query execution if there is
// a potential that an older document from cache now sorts before a document
// that was previously part of the limit. This, however, can only happen if
// the document at the edge of the limit goes out of limit.
// If a document that is not the limit boundary sorts differently,
// the boundary of the limit itself did not change and documents from cache
// will continue to be "rejected" by this boundary. Therefore, we can ignore
// any modifications that don't affect the last document.
let r="F"/* LimitType.First */===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Yi(t,e,n){return lU()<=sa.DEBUG&&lj("QueryEngine","Using full collection scan to execute query:",co(e)),this.ji.getDocumentsMatchingQuery(t,e,un.min(),n)}/**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */ts(t,e,n,i){// Retrieve all results for documents that were updated since the offset.
return this.ji.getDocumentsMatchingQuery(t,n,i).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class hd{constructor(/** Manages our in-memory or durable persistence. */t,e,n,i){this.persistence=t,this.ns=e,this.serializer=i,/**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */this.rs=new uf(l9),/** Maps a target to its targetID. */this.ss=new cl(t=>u3(t),u8),/**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(n)}us(t){// TODO(indexing): Add spec tests that test these components change after a
// user change
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new c8(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.rs))}}/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function hp(t,e){return await t.persistence.runTransaction("Handle user change","readonly",n=>{// Swap out the mutation queue, grabbing the pending mutation batches
// before and after.
let i;return t.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,t.us(e),t.mutationQueue.getAllMutationBatches(n))).next(e=>{let r=[],s=[],o=cm();for(let t of i)for(let e of(r.push(t.batchId),t.mutations))o=o.add(e.key);for(let t of e)for(let e of(s.push(t.batchId),t.mutations))o=o.add(e.key);// Return the set of all (potentially) changed documents and the list
// of mutation batch IDs that were affected by change.
return t.localDocuments.getDocuments(n,o).next(t=>({cs:t,removedBatchIds:r,addedBatchIds:s}))})})}/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */// Visible for testing.
class hg{constructor(){this.activeTargetIds=cy}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}/**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */As(){let t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hm{constructor(){this.ro=new hg,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){// No op.
}updateMutationState(t,e,n){// No op.
}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,e,n){this.io[t]=e}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new hg,Promise.resolve()}handleUserChange(t,e,n){// No op.
}setOnlineState(t){// No op.
}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){// No op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{so(t){// No-op.
}shutdown(){// No-op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals *//**
 * Browser implementation of ConnectivityMonitor.
 */class hv{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let t of(lj("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))t(0/* NetworkStatus.AVAILABLE */)}uo(){for(let t of(lj("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))t(1/* NetworkStatus.UNAVAILABLE */)}// TODO(chenbrian): Consider passing in window either into this component or
// here for testing via FakeWindow.
/** Checks that all used attributes of window are available. */static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The value returned from the most recent invocation of
 * `generateUniqueDebugId()`, or null if it has never been invoked.
 */let hw=null;/**
 * Generates and returns an initial value for `lastUniqueDebugId`.
 *
 * The returned value is randomly selected from a range of integers that are
 * represented as 8 hexadecimal digits. This means that (within reason) any
 * numbers generated by incrementing the returned number by 1 will also be
 * represented by 8 hexadecimal digits. This leads to all "IDs" having the same
 * length when converted to a hexadecimal string, making reading logs containing
 * these IDs easier to follow. And since the return value is randomly selected
 * it will help to differentiate between logs from different executions.
 *//**
 * Generates and returns a unique ID as a hexadecimal string.
 *
 * The returned ID is intended to be used in debug logging messages to help
 * correlate log messages that may be spatially separated in the logs, but
 * logically related. For example, a network connection could include the same
 * "debug ID" string in all of its log messages to help trace a specific
 * connection over time.
 *
 * @return the 10-character generated ID (e.g. "0xa1b2c3d4").
 */function hb(){return null===hw?hw=268435456+Math.round(2147483648*Math.random()):hw++,"0x"+hw.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */class hT{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="WebChannelConnection";class hS extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get So(){// Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
// where to run the query, and expect the `request` to NOT specify the "path".
return!1}bo(t,e,n,i,r){let s=hb(),o=this.Do(t,e);lj("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);let a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,i,r),this.vo(t,o,a,n).then(e=>(lj("RestConnection",`Received RPC '${t}' ${s}: `,e),e),e=>{throw l$("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}Fo(t,e,n,i,r,s){// The REST API automatically aggregates all of the streamed results, so we
// can just use the normal invoke() method.
return this.bo(t,e,n,i,r)}/**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */Co(t,e,n){t["X-Goog-Api-Client"]=// so we need to get its value when we need it in a function.
function(){return"gl-js/ fire/"+lB}(),// mess with CORS and redirects by proxies. If we add custom headers
// we will need to change this code to potentially use the $httpOverwrite
// parameter supported by ESF to avoid triggering preflight requests.
t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Do(t,e){let n=hE[t];return`${this.po}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){let r=hb();return new Promise((s,o)=>{let a=new lR;a.setWithCredentials(!0),a.listenOnce(lk.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case l_.NO_ERROR:let e=a.getResponseJson();lj(hI,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case l_.TIMEOUT:lj(hI,`RPC '${t}' ${r} timed out`),o(new lK(lH.DEADLINE_EXCEEDED,"Request time out"));break;case l_.HTTP_ERROR:let n=a.getStatus();if(lj(hI,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);let e=null==t?void 0:t.error;if(e&&e.status&&e.message){let t=function(t){let e=t.toLowerCase().replace(/_/g,"-");return Object.values(lH).indexOf(e)>=0?e:lH.UNKNOWN}(e.status);o(new lK(t,e.message))}else o(new lK(lH.UNKNOWN,"Server responded with status "+a.getStatus()))}else // it's most probably a connection issue
o(new lK(lH.UNAVAILABLE,"Connection failed."));break;default:lq()}}finally{lj(hI,`RPC '${t}' ${r} completed.`)}});let l=JSON.stringify(i);lj(hI,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)})}Mo(t,e,n){let i=hb(),r=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=lx(),o=lC(),a={// Required for backend stickiness, routing behavior is based on this
// parameter.
httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{// This param is used to improve routing and project isolation by the
// backend and must be included in every request.
database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{// Override the default timeout (randomized between 10-20 seconds) since
// a large write batch on a slow internet connection may take a long
// time to send to the backend. Rather than have WebChannel impose a
// tight timeout which could lead to infinite timeouts and retries, we
// set it very large (5-10 minutes) and rely on the browser's builtin
// timeouts to kick in if the request isn't working.
forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Co(a.initMessageHeaders,e,n),// (Authorization, etc.) will trigger the browser to make a CORS preflight
// request because the XHR will no longer meet the criteria for a "simple"
// CORS request:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
// Therefore to avoid the CORS preflight request (an extra network
// roundtrip), we use the encodeInitMessageHeaders option to specify that
// the headers should instead be encoded in the request's POST payload,
// which is recognized by the webchannel backend.
a.encodeInitMessageHeaders=!0;let u=r.join("");lj(hI,`Creating RPC '${t}' stream ${i}: ${u}`,a);let c=s.createWebChannel(u,a),h=!1,f=!1,p=new hT({ho:e=>{f?lj(hI,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(lj(hI,`Opening RPC '${t}' stream ${i} transport.`),c.open(),h=!0),lj(hI,`RPC '${t}' stream ${i} sending:`,e),c.send(e))},Po:()=>c.close()}),g=(t,e,n)=>{// TODO(dimond): closure typing seems broken because WebChannel does
// not implement goog.events.Listenable
t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};// Closure events are guarded and exceptions are swallowed, so catch any
// exception and rethrow using a setTimeout so they become visible again.
// Note that eventually this function could go away if we are confident
// enough the code is exception free.
return g(c,lO.EventType.OPEN,()=>{f||lj(hI,`RPC '${t}' stream ${i} transport opened.`)}),g(c,lO.EventType.CLOSE,()=>{f||(f=!0,lj(hI,`RPC '${t}' stream ${i} transport closed`),p.mo())}),g(c,lO.EventType.ERROR,e=>{f||(f=!0,l$(hI,`RPC '${t}' stream ${i} transport errored:`,e),p.mo(new lK(lH.UNAVAILABLE,"The operation could not be completed")))}),g(c,lO.EventType.MESSAGE,e=>{var n;if(!f){let r=e.data[0];r||lq();// TODO(b/35143891): There is a bug in One Platform that caused errors
// (and only errors) to be wrapped in an extra array. To be forward
// compatible with the bug we need to check either condition. The latter
// can be removed once the fix has been rolled out.
// Use any because msgData.error is not typed.
let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){lj(hI,`RPC '${t}' stream ${i} received error:`,s);// error.status will be a string like 'OK' or 'NOT_FOUND'.
let e=s.status,n=/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */function(t){// lookup by string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let e=d[t];if(void 0!==e)return(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 *//**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */function(t){if(void 0===t)// to send invalid proto messages) we may get an error with no GRPC code.
return lV("GRPC error has no .code"),lH.UNKNOWN;switch(t){case d.OK:return lH.OK;case d.CANCELLED:return lH.CANCELLED;case d.UNKNOWN:return lH.UNKNOWN;case d.DEADLINE_EXCEEDED:return lH.DEADLINE_EXCEEDED;case d.RESOURCE_EXHAUSTED:return lH.RESOURCE_EXHAUSTED;case d.INTERNAL:return lH.INTERNAL;case d.UNAVAILABLE:return lH.UNAVAILABLE;case d.UNAUTHENTICATED:return lH.UNAUTHENTICATED;case d.INVALID_ARGUMENT:return lH.INVALID_ARGUMENT;case d.NOT_FOUND:return lH.NOT_FOUND;case d.ALREADY_EXISTS:return lH.ALREADY_EXISTS;case d.PERMISSION_DENIED:return lH.PERMISSION_DENIED;case d.FAILED_PRECONDITION:return lH.FAILED_PRECONDITION;case d.ABORTED:return lH.ABORTED;case d.OUT_OF_RANGE:return lH.OUT_OF_RANGE;case d.UNIMPLEMENTED:return lH.UNIMPLEMENTED;case d.DATA_LOSS:return lH.DATA_LOSS;default:return lq()}}(e))}(e),r=s.message;void 0===n&&(n=lH.INTERNAL,r="Unknown error status: "+e+" with message "+s.message),f=!0,p.mo(new lK(n,r)),c.close()}else lj(hI,`RPC '${t}' stream ${i} received:`,r),p.fo(r)}}),g(o,lN.STAT_EVENT,e=>{e.stat===lD.PROXY?lj(hI,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===lD.NOPROXY&&lj(hI,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{// Technically we could/should wait for the WebChannel opened event,
// but because we want to send the first message with the WebChannel
// handshake we pretend the channel opened here (asynchronously), and
// then delay the actual open until the first message is sent.
p.Vo()},0),p}}/** The Platform's 'document' implementation or null if not available. */function hA(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
// eslint-disable-next-line no-restricted-globals
return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){return new cG(t,/* useProto3Json= */!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */class hC{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */t,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */e,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */n=1e3,i=1.5,r=6e4){this._i=t,this.timerId=e,this.xo=n,this.Oo=i,this.No=r,this.Bo=0,this.Lo=null,/** The last backoff attempt, as epoch milliseconds. */this.ko=Date.now(),this.reset()}/**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */reset(){this.Bo=0}/**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */qo(){this.Bo=this.No}/**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */Qo(t){// Cancel any pending backoff operation.
this.cancel();// First schedule using the current base (which may be 0 and should be
// honored as such).
let e=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),i=Math.max(0,e-n);// Guard against lastAttemptTime being in the future due to a clock change.
i>0&&lj("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),// bounds.
this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}/** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */class h_{constructor(t,e,n,i,r,s,o,a){this._i=t,this.Uo=n,this.Wo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0/* PersistentStreamState.Initial */,/**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new hC(t,e)}/**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */Jo(){return 1/* PersistentStreamState.Starting */===this.state||5/* PersistentStreamState.Backoff */===this.state||this.Yo()}/**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */Yo(){return 2/* PersistentStreamState.Open */===this.state||3/* PersistentStreamState.Healthy */===this.state}/**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */start(){4/* PersistentStreamState.Error */!==this.state?this.auth():this.Zo()}/**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */async stop(){this.Jo()&&await this.close(0/* PersistentStreamState.Initial */)}/**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */Xo(){this.state=0/* PersistentStreamState.Initial */,this.Ho.reset()}/**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */e_(){// Starts the idle time if we are in state 'Open' and are not yet already
// running a timer (in which case the previous idle timeout still applies).
this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}/** Sends a message to the underlying stream. */n_(t){this.r_(),this.stream.send(t)}/** Called by the idle timer when the stream should close due to inactivity. */async t_(){if(this.Yo())// it restarts so set the stream state to Initial instead of Error.
return this.close(0/* PersistentStreamState.Initial */)}/** Marks the stream as active again. */r_(){this.zo&&(this.zo.cancel(),this.zo=null)}/** Cancels the health check delayed operation. */i_(){this.jo&&(this.jo.cancel(),this.jo=null)}/**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */async close(t,e){// Cancel any outstanding timers (they're guaranteed not to execute).
this.r_(),this.i_(),this.Ho.cancel(),// underlying stream), guaranteeing they won't execute.
this.Go++,4/* PersistentStreamState.Error */!==t?this.Ho.reset():e&&e.code===lH.RESOURCE_EXHAUSTED?(lV(e.toString()),lV("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):e&&e.code===lH.UNAUTHENTICATED&&3/* PersistentStreamState.Healthy */!==this.state&&// "unauthenticated" error means the token was rejected. This should rarely
// happen since both Auth and AppCheck ensure a sufficient TTL when we
// request a token. If a user manually resets their system clock this can
// fail, however. In this case, we should get a Code.UNAUTHENTICATED error
// before we received the first message and we need to invalidate the token
// to ensure that we fetch a new token.
(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),// inhibit backoff or otherwise manipulate the state in its non-started state.
this.state=t,await this.listener.Eo(e)}/**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */s_(){}auth(){this.state=1/* PersistentStreamState.Starting */;let t=this.o_(this.Go),e=this.Go;// TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{// Stream can be stopped while waiting for authentication.
// TODO(mikelehen): We really should just use dispatchIfNotClosed
// and let this dispatch onto the queue, but that opened a spec test can
// of worms that I don't want to deal with in this PR.
this.Go===e&&// Normally we'd have to schedule the callback on the AsyncQueue.
// However, the following calls are safe to be called outside the
// AsyncQueue since they don't chain asynchronous calls
this.__(t,n)},e=>{t(()=>{let t=new lK(lH.UNKNOWN,"Fetching auth token failed: "+e.message);return this.a_(t)})})}__(t,e){let n=this.o_(this.Go);this.stream=this.u_(t,e),this.stream.Io(()=>{n(()=>(this.state=2/* PersistentStreamState.Open */,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3/* PersistentStreamState.Healthy */),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(t=>{n(()=>this.a_(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Zo(){this.state=5/* PersistentStreamState.Backoff */,this.Ho.Qo(async()=>{this.state=0/* PersistentStreamState.Initial */,this.start()})}// Visible for tests
a_(t){// In theory the stream could close cleanly, however, in our current model
// we never expect this to happen because if we stop a stream ourselves,
// this callback will never be called. To prevent cases where we retry
// without a backoff accidentally, we set the stream to error in all cases.
return lj("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4/* PersistentStreamState.Error */,t)}/**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */o_(t){return e=>{this._i.enqueueAndForget(()=>this.Go===t?e():(lj("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */class hk extends h_{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff"/* TimerId.WriteStreamConnectionBackoff */,"write_stream_idle"/* TimerId.WriteStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,e,n,i,s),this.serializer=r,this.P_=!1}/**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */get I_(){return this.P_}// Override of PersistentStream.start
start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,e){return this.connection.Mo("Write",t,e)}onMessage(t){var e,n;if(t.streamToken||lq(),this.lastStreamToken=t.streamToken,this.P_){// A successful first write response means the stream is healthy,
// Note, that we could consider a successful handshake healthy, however,
// the write itself might be causing an error we want to back off from.
this.Ho.reset();let i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(void 0!==n||lq(),e.map(t=>{let e;return(e=t.updateTime?cQ(t.updateTime):cQ(n)).isEqual(l6.min())&&// The Firestore Emulator currently returns an update time of 0 for
// deletes of non-existing documents (rather than null). This breaks the
// test "get deleted doc while offline with source=cache" as NoDocuments
// with version 0 are filtered by IndexedDb's RemoteDocumentCache.
// TODO(#2149): Remove this when Emulator is fixed
(e=cQ(n)),new cN(e,t.transformResults||[])})):[]),r=cQ(t.commitTime);return this.listener.T_(r,i)}// The first response is always the handshake response
return t.writeResults&&0!==t.writeResults.length&&lq(),this.P_=!0,this.listener.E_()}/**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */A_(){var t;// TODO(dimond): Support stream resumption. We intentionally do not set the
// stream token on the handshake, ignoring any stream token we might have.
let e={};e.database=(t=this.serializer,new l8(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()),this.n_(e)}/** Sends a group of mutations to the Firestore backend to apply. */d_(t){let e={streamToken:this.lastStreamToken,writes:t.map(t=>(function(t,e){var n;let i;if(e instanceof cB)i={update:cY(t,e.key,e.value)};else if(e instanceof c$)i={delete:cJ(t,e.key)};else if(e instanceof cF)i={update:cY(t,e.key,e.data),updateMask:function(t){let e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof cz))return lq();i={verify:cJ(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){let n=e.transform;if(n instanceof cT)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof cI)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof cA)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof cC)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw lq()})(0,t))),e.precondition.isNone||(i.currentDocument=void 0!==(n=e.precondition).updateTime?{updateTime:cW(t,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:lq()),i})(this.serializer,t))};this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 *//**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */class hN extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new lK(lH.FAILED_PRECONDITION,"The client has already been terminated.")}/** Invokes the provided RPC with auth and AppCheck tokens. */bo(t,e,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.bo(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===lH.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new lK(lH.UNKNOWN,t.toString())})}/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */Fo(t,e,n,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Fo(t,e,n,r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===lH.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new lK(lH.UNKNOWN,t.toString())})}terminate(){this.R_=!0}}/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */class hD{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,/** The current OnlineState. */this.state="Unknown"/* OnlineState.Unknown */,/**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */this.f_=0,/**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */this.g_=null,/**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */this.p_=!0}/**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */y_(){0===this.f_&&(this.w_("Unknown"/* OnlineState.Unknown */),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout"/* TimerId.OnlineStateTimeout */,1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"/* OnlineState.Offline */),Promise.resolve())))}/**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */b_(t){"Online"/* OnlineState.Online */===this.state?this.w_("Unknown"/* OnlineState.Unknown */):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline"/* OnlineState.Offline */)))}/**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */set(t){this.D_(),this.f_=0,"Online"/* OnlineState.Online */===t&&// We've connected to watch at least once. Don't warn the developer
// about being offline going forward.
(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){let e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(lV(e),this.p_=!1):lj("OnlineStateTracker",e)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */t,/** The client-side proxy for interacting with the backend. */e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},/**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */this.C_=[],/**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */this.v_=new Map,/**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */this.F_=new Set,/**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */this.M_=[],this.x_=r,this.x_.so(t=>{n.enqueueAndForget(async()=>{// Porting Note: Unlike iOS, `restartNetwork()` is called even when the
// network becomes unreachable as we don't have any other way to tear
// down our streams.
hP(this)&&(lj("RemoteStore","Restarting streams for network reachability change."),await async function(t){t.F_.add(4/* OfflineCause.ConnectivityChange */),await hL(t),t.O_.set("Unknown"/* OnlineState.Unknown */),t.F_.delete(4/* OfflineCause.ConnectivityChange */),await hR(t)}(this))})}),this.O_=new hD(n,i)}}async function hR(t){if(hP(t))for(let e of t.M_)await e(/* enabled= */!0)}/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */async function hL(t){for(let e of t.M_)await e(/* enabled= */!1)}function hP(t){return 0===t.F_.size}/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */async function hM(t,e,n){if(!uo(e))throw e;t.F_.add(1/* OfflineCause.IndexedDbFailed */),await hL(t),t.O_.set("Offline"/* OnlineState.Offline */),n||// Use a simple read operation to determine if IndexedDB recovered.
// Ideally, we would expose a health check directly on SimpleDb, but
// RemoteStore only has access to persistence through LocalStore.
(n=()=>{var e;return(e=t.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}),t.asyncQueue.enqueueRetryable(async()=>{lj("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1/* OfflineCause.IndexedDbFailed */),await hR(t)})}/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */function hB(t,e){return e().catch(n=>hM(t,n,e))}async function hF(t){let e=hG(t),n=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;hP(t)&&t.C_.length<10;)try{let i=await /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */function(t,e){return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===e&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}(t.localStore,n);if(null===i){0===t.C_.length&&e.e_();break}n=i.batchId,/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */function(t,e){t.C_.push(e);let n=hG(t);n.Yo()&&n.I_&&n.d_(e.mutations)}(t,i)}catch(e){await hM(t,e)}hU(t)&&hj(t)}function hU(t){return hP(t)&&!hG(t).Jo()&&t.C_.length>0}function hj(t){hG(t).start()}async function hV(t){hG(t).A_()}async function h$(t){let e=hG(t);// Send the write pipeline now that the stream is established.
for(let n of t.C_)e.d_(n.mutations)}async function hz(t,e,n){let i=t.C_.shift(),r=cH.from(i,e,n);await hB(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),// slot has freed up.
await hF(t)}async function hq(t,e){// If the write stream closed after the write handshake completes, a write
// operation failed and we fail the pending operation.
e&&hG(t).I_&&// This error affects the actual write.
await async function(t,e){var n;// Only handle permanent errors here. If it's transient, just let the retry
// logic kick in.
if(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */function(t){switch(t){default:return lq();case lH.CANCELLED:case lH.UNKNOWN:case lH.DEADLINE_EXCEEDED:case lH.RESOURCE_EXHAUSTED:case lH.INTERNAL:case lH.UNAVAILABLE:// Unauthenticated means something went wrong with our token and we need
// to retry with new credentials which will happen automatically.
case lH.UNAUTHENTICATED:return!1;case lH.INVALID_ARGUMENT:case lH.NOT_FOUND:case lH.ALREADY_EXISTS:case lH.PERMISSION_DENIED:case lH.FAILED_PRECONDITION:// Aborted might be retried in some scenarios, but that is dependant on
// the context and should handled individually by the calling code.
// See https://cloud.google.com/apis/design/errors.
case lH.ABORTED:case lH.OUT_OF_RANGE:case lH.UNIMPLEMENTED:case lH.DATA_LOSS:return!0}}(n=e.code)&&n!==lH.ABORTED){// This was a permanent error, the request itself was the problem
// so it's not going to succeed if we resend it.
let n=t.C_.shift();// In this case it's also unlikely that the server itself is melting
// down -- this was just a bad request so inhibit backoff on the next
// restart.
hG(t).Xo(),await hB(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),// another slot has freed up.
await hF(t)}}(t,e),// pipeline for failed writes
hU(t)&&hj(t)}async function hH(t,e){t.asyncQueue.verifyOperationInProgress(),lj("RemoteStore","RemoteStore received new credentials");let n=hP(t);// Tear down and re-create our network streams. This will ensure we get a
// fresh auth token for the new user and re-fill the write pipeline with
// new mutations from the LocalStore (since mutations are per-user).
t.F_.add(3/* OfflineCause.CredentialChange */),await hL(t),n&&// Don't set the network status to Unknown if we are offline.
t.O_.set("Unknown"/* OnlineState.Unknown */),await t.remoteSyncer.handleCredentialChange(e),t.F_.delete(3/* OfflineCause.CredentialChange */),await hR(t)}/**
 * Toggles the network state when the client gains or loses its primary lease.
 */async function hK(t,e){e?(t.F_.delete(2/* OfflineCause.IsSecondary */),await hR(t)):e||(t.F_.add(2/* OfflineCause.IsSecondary */),await hL(t),t.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function hG(t){var e,n,i;return t.L_||// Create stream (but note that it is not started yet).
(t.L_=(e=t.datastore,n=t.asyncQueue,i={Io:hV.bind(null,t),Eo:hq.bind(null,t),E_:h$.bind(null,t),T_:hz.bind(null,t)},e.V_(),new hk(n,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,i)),t.M_.push(async e=>{e?(t.L_.Xo(),await hF(t)):(await t.L_.stop(),t.C_.length>0&&(lj("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */class hW{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new lG,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
// 'UnhandledPromiseRejectionWarning' log spam.
this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}/**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */static createAndSchedule(t,e,n,i,r){let s=Date.now()+n,o=new hW(t,e,s,i,r);return o.start(n),o}/**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}/**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */skipDelay(){return this.handleDelayElapsed()}/**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new lK(lH.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function hQ(t,e){if(lV("AsyncQueue",`${e}: ${t}`),uo(t))return new lK(lH.UNAVAILABLE,`${e}: ${t}`);throw t}class hX{constructor(){this.queries=new cl(t=>cs(t),cr),this.onlineState="Unknown"/* OnlineState.Unknown */,this.K_=new Set}}/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class hJ{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new cl(t=>cs(t),cr),this.pa=new Map,/**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */this.ya=new Set,/**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */this.wa=new uf(ue.comparator),/**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */this.Sa=new Map,this.ba=new he,/** Stores user completion handlers, indexed by User and BatchId. */this.Da={},/** Stores user callbacks waiting for all pending writes to be acknowledged. */this.Ca=new Map,this.va=c5.Ln(),this.onlineState="Unknown"/* OnlineState.Unknown */,// startup. In the interim, a client should only be considered primary if
// `isPrimary` is true.
this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */async function hY(t,e,n){var i;let r=(t.remoteStore.remoteSyncer.applySuccessfulWrite=h0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=h1.bind(null,t),t);try{let t;let s=await function(t,e){let n,i;let r=l5.now(),s=e.reduce((t,e)=>t.add(e.key),cm());return t.persistence.runTransaction("Locally write mutations","readwrite",o=>{// Figure out which keys do not have a remote version in the cache, this
// is needed to create the right overlay mutation: if no remote version
// presents, we do not need to create overlays as patch mutations.
// TODO(Overlay): Is there a better way to determine this? Using the
//  document version does not work because local mutations set them back
//  to 0.
let a=cu,l=cm();return t._s.getEntries(o,s).next(t=>{(a=t).forEach((t,e)=>{e.isValidDocument()||(l=l.add(t))})}).next(()=>t.localDocuments.getOverlayedDocuments(o,a)).next(i=>{n=i;// For non-idempotent mutations (such as `FieldValue.increment()`),
// we record the base state in a separate patch mutation. This is
// later used to guarantee consistent values and prevents flicker
// even if the backend sends us an update that already includes our
// transform.
let s=[];for(let t of e){let e=/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */function(t,e){let n=null;for(let i of t.fieldTransforms){let t=e.data.field(i.field),r=cE(i.transform,t||null);null!=r&&(null===n&&(n=uj.empty()),n.set(i.field,r))}return n||null}(t,n.get(t.key).overlayedDocument);null!=e&&// NOTE: The base state should only be applied if there's some
// existing document to override, so use a Precondition of
// exists=true
s.push(new cF(t.key,e,/**
 * Returns a FieldMask built from all fields in a MapValue.
 */function t(e){let n=[];return uc(e.fields,(e,i)=>{let r=new ut([e]);if(uB(i)){let e=t(i.mapValue).fields;if(0===e.length)n.push(r);else // leaf nodes.
for(let t of e)n.push(r.child(t))}else // nodes.
n.push(r)}),new uy(n)}(e.value.mapValue),cD.exists(!0)))}return t.mutationQueue.addMutationBatch(o,r,s,e)}).next(e=>{i=e;let r=e.applyToLocalDocumentSet(n,l);return t.documentOverlayCache.saveOverlays(o,e.batchId,r)})}).then(()=>({batchId:i.batchId,changes:cf(n)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(t=r.Da[r.currentUser.toKey()])||(t=new uf(l9)),t=t.insert(i,n),r.Da[r.currentUser.toKey()]=t,await h4(r,s.changes),await hF(r.remoteStore)}catch(e){// If we can't persist the mutation, we reject the user callback and
// don't send the mutation. The user can then retry the write.
let t=hQ(e,"Failed to persist write");n.reject(t)}}/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */function hZ(t,e,n){var i;// If we are the secondary client, we explicitly ignore the remote store's
// online state (the local client may go offline, even though the primary
// tab remains online) and only apply the primary tab's online state from
// SharedClientState.
if(t.isPrimaryClient&&0/* OnlineStateSource.RemoteStore */===n||!t.isPrimaryClient&&1/* OnlineStateSource.SharedClientState */===n){let n;let r=[];t.ga.forEach((t,n)=>{let i=n.view.U_(e);i.snapshot&&r.push(i.snapshot)}),(i=t.eventManager).onlineState=e,n=!1,i.queries.forEach((t,i)=>{for(let t of i.listeners)t.U_(e)&&(n=!0)}),n&&// Call all global snapshot listeners that have been set.
function(t){t.K_.forEach(t=>{t.next()})}(i),r.length&&t.fa.c_(r),t.onlineState=e,t.isPrimaryClient&&t.sharedClientState.setOnlineState(e)}}async function h0(t,e){var n;let i=e.batch.batchId;try{let r=await (n=t.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{let i=e.batch.keys(),r=n._s.newChangeBuffer({trackRemovals:!0});return(function(t,e,n,i){let r=n.batch,s=r.keys(),o=us.resolve();return s.forEach(t=>{o=o.next(()=>i.getEntry(e,t)).next(e=>{let s=n.docVersions.get(t);null!==s||lq(),0>e.version.compareTo(s)&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&// We use the commitVersion as the readTime rather than the
// document's updateTime since the updateTime is not advanced
// for updates that do not modify the underlying document.
(e.setReadTime(n.commitVersion),i.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,r))})(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=cm();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,i))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught
// up), so we raise user callbacks first so that they consistently happen
// before listen events.
h9(t,i,/*error=*/null),h2(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await h4(t,r)}catch(t){await ur(t)}}async function h1(t,e,n){var i;try{let r=await (i=t.localStore).persistence.runTransaction("Reject batch","readwrite-primary",t=>{let n;return i.mutationQueue.lookupMutationBatch(t,e).next(e=>(null!==e||lq(),n=e.keys(),i.mutationQueue.removeMutationBatch(t,e))).next(()=>i.mutationQueue.performConsistencyCheck(t)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(t,n,e)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,n)).next(()=>i.localDocuments.getDocuments(t,n))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught up),
// so we raise user callbacks first so that they consistently happen before
// listen events.
h9(t,e,n),h2(t,e),t.sharedClientState.updateMutationState(e,"rejected",n),await h4(t,r)}catch(t){await ur(t)}}/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */function h2(t,e){(t.Ca.get(e)||[]).forEach(t=>{t.resolve()}),t.Ca.delete(e)}/** Reject all outstanding callbacks waiting for pending writes to complete. */function h9(t,e,n){let i=t.Da[t.currentUser.toKey()];// NOTE: Mutations restored from persistence won't have callbacks, so it's
// okay for there to be no callback for this ID.
if(i){let r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),t.Da[t.currentUser.toKey()]=i}}async function h4(t,e,n){let i=[],r=[],s=[];t.ga.isEmpty()||(t.ga.forEach((o,a)=>{s.push(t.Ma(a,e,n).then(e=>{// Update views if there are actual changes.
if(// secondary clients to update query state.
(e||n)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);let t=hc.$i(a.targetId,e);r.push(t)}}))}),await Promise.all(s),t.fa.c_(i),await async function(t,e){try{await t.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>us.forEach(e,e=>us.forEach(e.Qi,i=>t.persistence.referenceDelegate.addReference(n,e.targetId,i)).next(()=>us.forEach(e.Ki,i=>t.persistence.referenceDelegate.removeReference(n,e.targetId,i)))))}catch(t){if(!uo(t))throw t;// If `notifyLocalViewChanges` fails, we did not advance the sequence
// number for the documents that were included in this transaction.
// This might trigger them to be deleted earlier than they otherwise
// would have, but it should not invalidate the integrity of the data.
lj("LocalStore","Failed to update sequence numbers: "+t)}for(let n of e){let e=n.targetId;if(!n.fromCache){let n=t.rs.get(e),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);// Advance the last limbo free snapshot version
t.rs=t.rs.insert(e,r)}}}(t.localStore,r))}async function h5(t,e){if(!t.currentUser.isEqual(e)){lj("SyncEngine","User change. New user:",e.toKey());let n=await hp(t.localStore,e);t.currentUser=e,t.Ca.forEach(t=>{t.forEach(t=>{t.reject(new lK(lH.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.Ca.clear(),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await h4(t,n.cs)}}class h6{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=hx(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){var /** Manages our in-memory or durable persistence. */e,n,i,r;return e=this.persistence,n=new hf,i=t.initialUser,r=this.serializer,new hd(e,n,i,r)}createPersistence(t){return new ha(hu.Jr,this.serializer)}createSharedClientState(t){return new hm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */class h3{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,/* startAsPrimary=*/!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>hZ(this.syncEngine,t,1/* OnlineStateSource.SharedClientState */),this.remoteStore.remoteSyncer.handleCredentialChange=h5.bind(null,this.syncEngine),await hK(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new hX}createDatastore(t){var e,n,i;let r=hx(t.databaseInfo.databaseId),s=(e=t.databaseInfo,new hS(e));return n=t.authCredentials,i=t.appCheckCredentials,new hN(n,i,s,r)}createRemoteStore(t){var e,n,i,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=hv.C()?new hv:new hy,new hO(e,n,i,t=>hZ(this.syncEngine,t,0/* OnlineStateSource.RemoteStore */),r)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){let a=new hJ(t,e,n,i,r,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){lj("RemoteStore","RemoteStore shutting down."),t.F_.add(5/* OfflineCause.Shutdown */),await hL(t),t.x_.shutdown(),// triggering spurious listener events with cached data, etc.
t.O_.set("Unknown"/* OnlineState.Unknown */)}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * FirestoreClient is a top-level class that constructs and owns all of the //
 * pieces of the client SDK architecture. It is responsible for creating the //
 * async queue that is shared by all of the other components in the system. //
 */class h8{constructor(t,e,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=lM.UNAUTHENTICATED,this.clientId=l2.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{lj("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(lj("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lK(lH.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new lG;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){let e=hQ(n,"Failed to shutdown persistence");t.reject(e)}}),t.promise}}async function h7(t,e){t.asyncQueue.verifyOperationInProgress(),lj("FirestoreClient","Initializing OfflineComponentProvider");let n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await hp(e.localStore,t),i=t)}),// need to be terminated to allow the delete to succeed.
e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ft(t,e){t.asyncQueue.verifyOperationInProgress();let n=await fe(t);lj("FirestoreClient","Initializing OnlineComponentProvider");let i=await t.getConfiguration();await e.initialize(n,i),// precedence over the offline component provider.
t.setCredentialChangeListener(t=>hH(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>hH(e.remoteStore,n)),t._onlineComponents=e}async function fe(t){if(!t._offlineComponents){if(t._uninitializedComponentsProvider){lj("FirestoreClient","Using user provided OfflineComponentProvider");try{await h7(t,t._uninitializedComponentsProvider._offline)}catch(e){if(!("FirebaseError"===e.name?e.code===lH.FAILED_PRECONDITION||e.code===lH.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||// When the browser is out of quota we could get either quota exceeded
// or an aborted error depending on whether the error happened during
// schema migration.
22===e.code||20===e.code||// Firefox Private Browsing mode disables IndexedDb and returns
// INVALID_STATE for any usage.
11===e.code))throw e;l$("Error using user provided cache. Falling back to memory cache: "+e),await h7(t,new h6)}}else lj("FirestoreClient","Using default OfflineComponentProvider"),await h7(t,new h6)}return t._offlineComponents}async function fn(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(lj("FirestoreClient","Using user provided OnlineComponentProvider"),await ft(t,t._uninitializedComponentsProvider._online)):(lj("FirestoreClient","Using default OnlineComponentProvider"),await ft(t,new h3))),t._onlineComponents}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Compares two `ExperimentalLongPollingOptions` objects for equality.
 *//**
 * Creates and returns a new `ExperimentalLongPollingOptions` with the same
 * option values as the given instance.
 */function fi(t){let e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t,e,n){if(!n)throw new lK(lH.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */function fo(t){if(!ue.isDocumentKey(t))throw new lK(lH.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */function fa(t){if(ue.isDocumentKey(t))throw new lK(lH.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function fl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var e;let n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof t?"a function":lq()}function fu(t,e){if("_delegate"in t&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new lK(lH.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=fl(t);throw new lK(lH.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */class fc{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new lK(lH.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new lK(lH.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(t,e,n,i){if(!0===e&&!0===i)throw new lK(lH.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fi(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new lK(lH.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new lK(lH.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new lK(lH.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fh{/** @hideconstructor */constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fc({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new lK(lH.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new lK(lH.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new lQ;switch(t.type){case"firstParty":return new lZ(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new lK(lH.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(t){let e=fr.get(t);e&&(lj("ComponentProvider","Removing Datastore"),fr.delete(t),e.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */class ff{// This is the lite version of the Query class in the main SDK.
/** @hideconstructor protected */constructor(t,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */e,n){this.converter=e,this._query=n,/** The type of this Firestore reference. */this.type="query",this.firestore=t}withConverter(t){return new ff(this.firestore,t,this._query)}}/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */class fd{/** @hideconstructor */constructor(t,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */e,n){this.converter=e,this._key=n,/** The type of this Firestore reference. */this.type="document",this.firestore=t}get _path(){return this._key.path}/**
     * The document's identifier within its collection.
     */get id(){return this._key.path.lastSegment()}/**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */get path(){return this._key.path.canonicalString()}/**
     * The collection this `DocumentReference` belongs to.
     */get parent(){return new fp(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fd(this.firestore,t,this._key)}}/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */class fp extends ff{/** @hideconstructor */constructor(t,e,n){super(t,e,new u7(n)),this._path=n,/** The type of this Firestore reference. */this.type="collection"}/** The collection's identifier. */get id(){return this._query.path.lastSegment()}/**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */get path(){return this._query.path.canonicalString()}/**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */get parent(){let t=this._path.popLast();return t.isEmpty()?null:new fd(this.firestore,/* converter= */null,new ue(t))}withConverter(t){return new fp(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){// The last promise in the queue.
this.Za=Promise.resolve(),// retried with backoff.
this.Xa=[],// be changed again.
this.eu=!1,// automatically removed after they are run or canceled.
this.tu=[],this.nu=null,// assertion sanity-checks.
this.ru=!1,this.iu=!1,this.su=[],this.Ho=new hC(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.ou=()=>{let t=hA();t&&lj("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};let t=hA();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(t){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;let e=hA();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let e=new lG;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!uo(t))throw t;// Failure will be handled by AsyncQueue
lj("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.Ho.Qo(()=>this.uu())}}au(t){let e=this.Za.then(()=>(this.ru=!0,t().catch(t=>{let e;this.nu=t,this.ru=!1;let n=(e=t.message||"",t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw lV("INTERNAL UNHANDLED ERROR: ",n),t}).then(t=>(this.ru=!1,t))));return this.Za=e,e}enqueueAfterDelay(t,e,n){this._u(),this.su.indexOf(t)>-1&&(e=0);let i=hW.createAndSchedule(this,t,e,n,t=>this.cu(t));return this.tu.push(i),i}_u(){this.nu&&lq()}verifyOperationInProgress(){}/**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */async lu(){// Operations in the queue prior to draining may have enqueued additional
// operations. Keep draining the queue until the tail is no longer advanced,
// which indicates that no more new operations were enqueued and that all
// operations were executed.
let t;do t=this.Za,await t;while(t!==this.Za)}/**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */hu(t){for(let e of this.tu)if(e.timerId===t)return!0;return!1}/**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */Pu(t){// Note that draining may generate more delayed ops, so we do that first.
return this.lu().then(()=>{for(let e of(// Run ops in the same order they'd run if they ran naturally.
this.tu.sort((t,e)=>t.targetTimeMs-e.targetTimeMs),this.tu))if(e.skipDelay(),"all"/* TimerId.All */!==t&&e.timerId===t)break;return this.lu()})}/**
     * For Tests: Skip all subsequent delays for a timer id.
     */Iu(t){this.su.push(t)}/** Called once a DelayedOperation is run or canceled. */cu(t){// NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
let e=this.tu.indexOf(t);this.tu.splice(e,1)}}/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */class fm extends fh{/** @hideconstructor */constructor(t,e,n,i){super(t,e,n,i),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new fg,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
fy(this),this._firestoreClient.terminate()}}function fy(t){var e,n,i,r,s,o;let a=t._freezeSettings(),l=(r=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new ux(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,fi(a.experimentalLongPollingOptions),a.useFetchStreams));t._firestoreClient=new h8(t._authCredentials,t._appCheckCredentials,t._queue,l),(null===(n=a.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=a.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing an array of bytes.
 */class fv{/** @hideconstructor */constructor(t){this._byteString=t}/**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */static fromBase64String(t){try{return new fv(uw.fromBase64String(t))}catch(t){throw new lK(lH.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}/**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */static fromUint8Array(t){return new fv(uw.fromUint8Array(t))}/**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */toBase64(){return this._byteString.toBase64()}/**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */toUint8Array(){return this._byteString.toUint8Array()}/**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */toString(){return"Bytes(base64: "+this.toBase64()+")"}/**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */class fw{/**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new lK(lH.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}/**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */class fb{/**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */class fE{/**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new lK(lH.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new lK(lH.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}/**
     * The latitude of this `GeoPoint` instance.
     */get latitude(){return this._lat}/**
     * The longitude of this `GeoPoint` instance.
     */get longitude(){return this._long}/**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */isEqual(t){return this._lat===t._lat&&this._long===t._long}/** Returns a JSON-serializable representation of this GeoPoint. */toJSON(){return{latitude:this._lat,longitude:this._long}}/**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */_compareTo(t){return l9(this._lat,t._lat)||l9(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=/^__.*__$/;/** The result of parsing document data (e.g. for a setData call). */class fI{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new cF(t,this.data,this.fieldMask,e,this.fieldTransforms):new cB(t,this.data,e,this.fieldTransforms)}}function fS(t){switch(t){case 0/* UserDataSource.Set */:// fall through
case 2/* UserDataSource.MergeSet */:// fall through
case 1/* UserDataSource.Update */:return!0;case 3/* UserDataSource.Argument */:case 4/* UserDataSource.ArrayArgument */:return!1;default:throw lq()}}/** A "context" object passed around while parsing user data. */class fA{/**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,// external call and we need to validate the entire path.
void 0===r&&this.du(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}/** Returns a new context with the specified settings overwritten. */Eu(t){return new fA(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Ru:!1});return i.Vu(t),i}mu(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Eu({path:n,Ru:!1});return i.du(),i}fu(t){// TODO(b/34871131): We don't support array paths right now; so make path
// undefined.
return this.Eu({path:void 0,Ru:!0})}gu(t){return fN(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}/** Returns 'true' if 'fieldPath' was traversed when creating this context. */contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}du(){// TODO(b/34871131): Remove null check once we have proper paths for fields
// within arrays.
if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(0===t.length)throw this.gu("Document fields must not be empty");if(fS(this.Tu)&&fT.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */class fx{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||hx(t)}/** Creates a new top-level parse context. */wu(t,e,n,i=!1){return new fA({Tu:t,methodName:e,yu:n,path:ut.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fC(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof l5||t instanceof fE||t instanceof fv||t instanceof fd||t instanceof fb)}function f_(t,e,n){if(!fC(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=fl(n);throw"an object"===i?e.gu(t+" a custom object"):e.gu(t+" "+i)}}/**
 * Matches any characters in a field path string that are reserved.
 */const fk=RegExp("[~\\*/\\[\\]]");function fN(t,e,n,i,r){let s=i&&!i.isEmpty(),o=void 0!==r,a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new lK(lH.INVALID_ARGUMENT,a+t+l)}new WeakMap,function(t=!0){lB="10.3.1",iC(new n4("firestore",(e,{instanceIdentifier:n,options:i})=>{let r=e.getProvider("app").getImmediate(),s=new fm(new lJ(e.getProvider("auth-internal")),new l1(e.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new lK(lH.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uC(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),iR(lP,"4.1.3",void 0),iR(lP,"4.1.3","esm2017")}();// Ініціалізація Firebase
const fD=iD({apiKey:"AIzaSyAt0t0gqY2cwwnnmHCmmlq6c2d_Q7sG2wI",authDomain:"boocks-f43bd.firebaseapp.com",projectId:"boocks-f43bd",storageBucket:"boocks-f43bd.appspot.com",messagingSenderId:"679284035166",appId:"1:679284035166:web:7c3e330ead5760e6196ecf",measurementId:"G-MRP841QGMJ"}),fO=/* eslint-disable @typescript-eslint/no-explicit-any *//**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(t=iO()){t=n9(t);// Dependencies
let e=i_(t,rL);return e.isInitialized()?e.getImmediate():/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(t,e={}){// Dependencies
let n=i_(t,rL);if(n.isInitialized()){let t=n.getImmediate();if(n0(e,n.getOptions()))return t;throw rB.create("already-initialized"/* AnalyticsError.ALREADY_INITIALIZED */)}let i=n.initialize({options:e});return i}(t)}(fD),fR=function(t,e){let n="object"==typeof t?t:iO(),i=i_(n,"firestore").getImmediate({identifier:"string"==typeof t?t:"(default)"});if(!i._initialized){let t=nK("firestore");t&&/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */function(t,e,n,i={}){var r;let s=(t=fu(t,fh))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&l$("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=lM.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
// invalid field "uid" and missing field "sub" / "user_id".)
e=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nU(JSON.stringify({alg:"none",type:"JWT"})),nU(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new lK(lH.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new lM(s)}t._authCredentials=new lX(new lW(e,n))}}(i,...t)}return i}(fD);document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector("[data-auth-open]"),e=document.querySelector(".auth-btn-close"),n=document.querySelector(".auth-backdrop"),i=document.querySelector(".auth-form"),r=document.querySelector(".auth-button-signup"),s=i.querySelector('input[name="user_name"]'),o=i.querySelector('input[name="user_email"]'),a=i.querySelector('input[name="user_password"]');// Реєстрація користувача при натисканні кнопки SIGN UP
async function l(t){let e=function(t,e,...n){if(t=n9(t),fs("collection","path",e),t instanceof fh){let i=l8.fromString(e,...n);return fa(i),new fp(t,/* converter= */null,i)}{if(!(t instanceof fd||t instanceof fp))throw new lK(lH.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(l8.fromString(e,...n));return fa(i),new fp(t.firestore,/* converter= */null,i)}}(fR,"user_data");try{await /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */function(t,e){var n,i,r,s;let o=fu(t.firestore,fm),a=function(t,e,...n){if(t=n9(t),// 'undefined' and 'null'.
1==arguments.length&&(e=l2.V()),fs("doc","path",e),t instanceof fh){let i=l8.fromString(e,...n);return fo(i),new fd(t,/* converter= */null,new ue(i))}{if(!(t instanceof fd||t instanceof fp))throw new lK(lH.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(l8.fromString(e,...n));return fo(i),new fd(t.firestore,t instanceof fp?t.converter:null,new ue(i))}}(t),l=(n=t.converter)?i&&(i.merge||i.mergeFields)?n.toFirestore(e,i):n.toFirestore(e):e;return(r=o,s=[/** Parse document data from a set() call. */(function(t,e,n,i,r,s={}){let o,a;let l=t.wu(s.merge||s.mergeFields?2/* UserDataSource.MergeSet */:0/* UserDataSource.Set */,e,n,r);f_("Data must be an object, but it was:",l,i);let u=function t(e,n){let i={};return uh(e)?// mask to ensure that the server creates a map entry.
n.path&&n.path.length>0&&n.fieldMask.push(n.path):uc(e,(e,r)=>{let s=/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */function e(n,i){if(fC(// from firestore-exp.
n=n9(n)))return f_("Unsupported field value:",i,n),t(n,i);if(n instanceof fb)// in which case we do not want to include this field in our parsed data
// (as doing so will overwrite the field directly prior to the transform
// trying to transform it). So we don't add this location to
// context.fieldMask and we return null as our parsing result.
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */return function(t,e){// Sentinels are only supported with writes, and not within arrays.
if(!fS(e.Tu))throw e.gu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.gu(`${t._methodName}() is not currently supported inside arrays`);let n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(n,i),null;if(void 0===n&&i.ignoreUndefinedProperties)// don't handle this below. If `ignoreUndefinedProperties` is false,
// `parseScalarValue` will reject an undefined value.
return null;if(// field mask paths more granular than the top-level array.
i.path&&i.fieldMask.push(i.path),n instanceof Array){// TODO(b/34871131): Include the path containing the array in the error
// message.
// In the case of IN queries, the parsed data is an array (representing
// the set of values to be included for the IN query) that may directly
// contain additional arrays (each representing an individual field
// value), so we disable this validation.
if(i.settings.Ru&&4/* UserDataSource.ArrayArgument */!==i.Tu)throw i.gu("Nested arrays are not supported");return function(t,n){let i=[],r=0;for(let s of t){let t=e(s,n.fu(r));null==t&&// Just include nulls in the array for fields being replaced with a
// sentinel.
(t={nullValue:"NULL_VALUE"}),i.push(t),r++}return{arrayValue:{values:i}}}(n,i)}return function(t,e){var n,i,r,s,o;if(null===(t=n9(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return n=e.serializer,"number"==typeof(r=i=t)&&Number.isInteger(r)&&!ul(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?cw(i):cv(n,i);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){let n=l5.fromDate(t);return{timestampValue:cW(e.serializer,n)}}if(t instanceof l5){// Firestore backend truncates precision down to microseconds. To ensure
// offline mode works the same with regards to truncation, perform the
// truncation immediately without waiting for the backend to do that.
let n=new l5(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:cW(e.serializer,n)}}if(t instanceof fE)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof fv)return{bytesValue:(s=e.serializer,o=t._byteString,s.useProto3Json?o.toBase64():o.toUint8Array())};if(t instanceof fd){let n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.gu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:cX(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.gu(`Unsupported field value: ${fl(t)}`)}(n,i)}(r,n.Au(e));null!=s&&(i[e]=s)}),{mapValue:{fields:i}}}(i,l);if(s.merge)o=new uy(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let t=[];for(let i of s.mergeFields){let r=/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */function(t,e,n){if(// FieldPath.
(e=n9(e))instanceof fw)return e._internalPath;if("string"==typeof e)return(/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */function(t,e,n){if(e.search(fk)>=0)throw fN(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,/* hasConverter= */!1,/* path= */void 0,n);try{return new fw(...e.split("."))._internalPath}catch(i){throw fN(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,/* hasConverter= */!1,/* path= */void 0,n)}}(t,e));throw fN("Field path arguments must be of type string or ",t,/* hasConverter= */!1,/* path= */void 0,n)}(e,i,n);if(!l.contains(r))throw new lK(lH.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */(function(t,e){return t.some(t=>t.isEqual(e))})(t,r)||t.push(r)}o=new uy(t),a=l.fieldTransforms.filter(t=>o.covers(t.field))}else o=null,a=l.fieldTransforms;return new fI(new uj(u),o,a)})(function(t){let e=t._freezeSettings(),n=hx(t._databaseId);return new fx(t._databaseId,!!e.ignoreUndefinedProperties,n)}(t.firestore),"addDoc",a._key,l,null!==t.converter,{}).toMutation(a._key,cD.exists(!1))],function(t,e){let n=new lG;return t.asyncQueue.enqueueAndForget(async()=>hY(await fn(t).then(t=>t.syncEngine),e,n)),n.promise}((r._firestoreClient||fy(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient),s)).then(()=>a)}(e,t),console.log("Данные пользователя успешно добавлены в базу данных"),updateUI(t.userName)}catch(t){console.error("Ошибка при добавлении данных пользователя:",t)}}t.addEventListener("click",// Відкриття/закриття вікна
function(){n.style.display="block",document.querySelector(".auth").style.visibility="visible",s.value="",o.value="",a.value=""}),e.addEventListener("click",function(){n.style.display="none"}),r.addEventListener("click",async t=>{t.preventDefault();let e=s.value,n=o.value,i=a.value;await l({userName:e,userEmail:n,userPassword:i},fO)})});// Кнопка "SIGN IN"
var fL=document.querySelector(".auth-button-in"),fP=document.querySelector(".auth-input");fL.addEventListener("click",function(){fP&&fP.remove()}),w("dGLOO");//# sourceMappingURL=index.cdee9fff.js.map

//# sourceMappingURL=index.cdee9fff.js.map
