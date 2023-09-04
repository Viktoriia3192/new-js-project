let t;var e,n,o,i,r,s,a,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function f(t){return t&&t.__esModule?t.default:t}var c={},u={},p=l.parcelRequired7c6;null==p&&((p=function(t){if(t in c)return c[t].exports;if(t in u){var e=u[t];delete u[t];var n={id:t,exports:{}};return c[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){u[t]=e},l.parcelRequired7c6=p),p("7Y9D8"),p("5Szup");const h={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{let t=window.scrollY||document.documentElement.scrollTop;t>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};h.addEventListener();var d={};function m(t,e){return function(){return t.apply(e,arguments)}}e=void 0!==l?l:"undefined"!=typeof window?window:d,n=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var e,n={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},i=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},r=function(e){return e||(e="head"),null!==t.document[e]||(i('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},s=function(e,n){// check doc head
if(!r("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(n)){var o=t.document.createElement("style");o.id=n,o.innerHTML=e(),t.document.head.appendChild(o)}},a=function(){// variables
var t={},e=!1,n=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);n<arguments.length;n++)!function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e&&"[object Object]"===Object.prototype.toString.call(n[o])?t[o]=a(t[o],n[o]):t[o]=n[o])}(arguments[n]);return t},l=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},c=0,u=function(i,s,f,u){// check doc body
if(!r("body"))return!1;e||p.Notify.init({});// create a backup for new settings
var h=a(!0,e,{});// check callbackOrOptions and options: begin
if("object"==typeof f&&!Array.isArray(f)||"object"==typeof u&&!Array.isArray(u)){// new options
var d={};"object"==typeof f?d=f:"object"==typeof u&&(d=u),// extend new settings with the new options
e=a(!0,e,d)}// check callbackOrOptions and options: end
// notify type
var m=e[i.toLocaleLowerCase("en")];// notify counter
c++,"string"!=typeof s&&(s="Notiflix "+i),e.plainText&&(s=l(s)),!e.plainText&&s.length>e.messageMaxLength&&(// extend settings for error massege
e=a(!0,e,{closeButton:!0,messageMaxLength:150}),// error message
s='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),s.length>e.messageMaxLength&&(s=s.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(m.fontAwesomeIconColor=m.background),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var y=t.document.getElementById(o.wrapID)||t.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(y.id=o.wrapID,y.style.width=e.width,y.style.zIndex=e.zindex,y.style.opacity=e.opacity,"center-center"===e.position?(y.style.left=e.distance,y.style.top=e.distance,y.style.right=e.distance,y.style.bottom=e.distance,y.style.margin="auto",y.classList.add("nx-flex-center-center"),y.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.justifyContent="center",y.style.alignItems="center",y.style.pointerEvents="none"):"center-top"===e.position?(y.style.left=e.distance,y.style.right=e.distance,y.style.top=e.distance,y.style.bottom="auto",y.style.margin="auto"):"center-bottom"===e.position?(y.style.left=e.distance,y.style.right=e.distance,y.style.bottom=e.distance,y.style.top="auto",y.style.margin="auto"):"right-bottom"===e.position?(y.style.right=e.distance,y.style.bottom=e.distance,y.style.top="auto",y.style.left="auto"):"left-top"===e.position?(y.style.left=e.distance,y.style.top=e.distance,y.style.right="auto",y.style.bottom="auto"):"left-bottom"===e.position?(y.style.left=e.distance,y.style.bottom=e.distance,y.style.top="auto",y.style.right="auto"):(y.style.right=e.distance,y.style.top=e.distance,y.style.left="auto",y.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(o.overlayID)||t.document.createElement("div");g.id=o.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=m.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(o.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(o.wrapID)||t.document.body.appendChild(y);// notify wrap: end
// notify content: begin
var b=t.document.createElement("div");b.id=e.ID+"-"+c,b.className=e.className+" "+m.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),b.style.fontSize=e.fontSize,b.style.color=m.textColor,b.style.background=m.background,b.style.borderRadius=e.borderRadius,b.style.pointerEvents="all",e.rtl&&(b.setAttribute("dir","rtl"),b.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
b.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(b.style.animationDuration=e.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var w="";// close buttpon element: end
// use icon: begin
if(e.closeButton&&"function"!=typeof f&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+m.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon){// use font awesome
if(e.useFontAwesome)b.innerHTML='<i style="color:'+m.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+m.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+s+"</span>"+(e.closeButton?w:"");else{var x="";i===n.Success?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===n.Failure?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===n.Warning?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===n.Info&&(x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+m.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),b.innerHTML=x+'<span class="nx-message nx-with-icon">'+s+"</span>"+(e.closeButton?w:"")}}else b.innerHTML='<span class="nx-message">'+s+"</span>"+(e.closeButton?w:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===e.position||"right-bottom"===e.position){var v=t.document.getElementById(o.wrapID);v.insertBefore(b,v.firstChild)}else t.document.getElementById(o.wrapID).appendChild(b);// notify append or prepend: end
// remove by timeout or click: begin
var E=t.document.getElementById(b.id);if(E){// hide notify elm and hide overlay: begin
var k,N,A=function(){E.classList.add("nx-remove");var e=t.document.getElementById(o.overlayID);e&&y.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(k)},O=function(){if(E&&null!==E.parentNode&&E.parentNode.removeChild(E),y.childElementCount<=0&&null!==y.parentNode){y.parentNode.removeChild(y);var e=t.document.getElementById(o.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(N)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(b.id).querySelector("span.nx-close-button").addEventListener("click",function(){A();var t=setTimeout(function(){O(),clearTimeout(t)},e.cssAnimationDuration)}),("function"==typeof f||e.clickToClose)&&E.addEventListener("click",function(){"function"==typeof f&&f(),A();var t=setTimeout(function(){O(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof f){// auto remove: begin
var S=function(){k=setTimeout(function(){A()},e.timeout),N=setTimeout(function(){O()},e.timeout+e.cssAnimationDuration)};S(),e.pauseOnHover&&(E.addEventListener("mouseenter",function(){E.classList.add("nx-paused"),clearTimeout(k),clearTimeout(N)}),E.addEventListener("mouseleave",function(){E.classList.remove("nx-paused"),S()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(e.showOnlyTheLastOne&&c>0)for(var B=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+c+"])"),R=0;R<B.length;R++){var T=B[R];null!==T.parentNode&&T.parentNode.removeChild(T)}// notify - show only the last one: end
// extend new settings with the backup settings
e=a(!0,e,h)},p={Notify:{// Init
init:function(t){// extend options
e=a(!0,o,t),// internal css if exist
s(f,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return i("You have to initialize the Notify module before call Merge function."),!1;e=a(!0,e,t)},// Success
success:function(t,e,o){u(n.Success,t,e,o)},// Failure
failure:function(t,e,o){u(n.Failure,t,e,o)},// Warning
warning:function(t,e,o){u(n.Warning,t,e,o)},// Info
info:function(t,e,o){u(n.Info,t,e,o)}}};return"object"==typeof t.Notiflix?a(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],function(){return n(e)}):"object"==typeof d?d=n(e):e.Notiflix=n(e);// utils is a library of generic helper functions non-specific to axios
const{toString:y}=Object.prototype,{getPrototypeOf:g}=Object,b=(o=Object.create(null),t=>{let e=y.call(t);return o[e]||(o[e]=e.slice(8,-1).toLowerCase())}),w=t=>(t=t.toLowerCase(),e=>b(e)===t),x=t=>e=>typeof e===t,{isArray:v}=Array,E=x("undefined"),k=w("ArrayBuffer"),N=x("string"),A=x("function"),O=x("number"),S=t=>null!==t&&"object"==typeof t,B=t=>{if("object"!==b(t))return!1;let e=g(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},R=w("Date"),T=w("File"),C=w("Blob"),I=w("FileList"),L=w("URLSearchParams");/**
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
 */function U(t,e,{allOwnKeys:n=!1}={}){let o,i;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),v(t))for(o=0,i=t.length;o<i;o++)e.call(null,t[o],o,t);else{let i;// Iterate over object keys
let r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;for(o=0;o<s;o++)i=r[o],e.call(null,t[i],i,t)}}}function _(t,e){let n;e=e.toLowerCase();let o=Object.keys(t),i=o.length;for(;i-- >0;)if(e===(n=o[i]).toLowerCase())return n;return null}const j=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:l,P=t=>!E(t)&&t!==j,D=(i="undefined"!=typeof Uint8Array&&g(Uint8Array),t=>i&&t instanceof i),F=w("HTMLFormElement"),z=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),M=w("RegExp"),$=(t,e)=>{let n=Object.getOwnPropertyDescriptors(t),o={};U(n,(n,i)=>{let r;!1!==(r=e(n,i,t))&&(o[i]=r||n)}),Object.defineProperties(t,o)},W="abcdefghijklmnopqrstuvwxyz",q="0123456789",H={DIGIT:q,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+q},J=w("AsyncFunction");var V={isArray:v,isArrayBuffer:k,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!E(t)&&null!==t.constructor&&!E(t.constructor)&&A(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||A(t.append)&&("formdata"===(e=b(t))||// detect form-data instance
"object"===e&&A(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&k(t.buffer)},isString:N,isNumber:O,isBoolean:t=>!0===t||!1===t,isObject:S,isPlainObject:B,isUndefined:E,isDate:R,isFile:T,isBlob:C,isRegExp:M,isFunction:A,isStream:t=>S(t)&&A(t.pipe),isURLSearchParams:L,isTypedArray:D,isFileList:I,forEach:U,merge:/**
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
 */function t(){let{caseless:e}=P(this)&&this||{},n={},o=(o,i)=>{let r=e&&_(n,i)||i;B(n[r])&&B(o)?n[r]=t(n[r],o):B(o)?n[r]=t({},o):v(o)?n[r]=o.slice():n[r]=o};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&U(arguments[t],o);return n},extend:(t,e,n,{allOwnKeys:o}={})=>(U(e,(e,o)=>{n&&A(e)?t[o]=m(e,n):t[o]=e},{allOwnKeys:o}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,o)=>{t.prototype=Object.create(e.prototype,o),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,o)=>{let i,r,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(r=(i=Object.getOwnPropertyNames(t)).length;r-- >0;)s=i[r],(!o||o(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==n&&g(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype)return e},kindOf:b,kindOfTest:w,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;let o=t.indexOf(e,n);return -1!==o&&o===n},toArray:t=>{if(!t)return null;if(v(t))return t;let e=t.length;if(!O(e))return null;let n=Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{let n;let o=t&&t[Symbol.iterator],i=o.call(t);for(;(n=i.next())&&!n.done;){let o=n.value;e.call(t,o[0],o[1])}},matchAll:(t,e)=>{let n;let o=[];for(;null!==(n=t.exec(e));)o.push(n);return o},isHTMLForm:F,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:$,freezeMethods:t=>{$(t,(e,n)=>{// skip restricted props in strict mode
if(A(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;let o=t[n];if(A(o)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},toObjectSet:(t,e)=>{let n={};return(t=>{t.forEach(t=>{n[t]=!0})})(v(t)?t:String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,n){return e.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:_,global:j,isContextDefined:P,ALPHABET:H,generateString:(t=16,e=H.ALPHA_DIGIT)=>{let n="",{length:o}=e;for(;t--;)n+=e[Math.random()*o|0];return n},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&A(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),n=(t,o)=>{if(S(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[o]=t;let i=v(t)?[]:{};return U(t,(t,e)=>{let r=n(t,o+1);E(r)||(i[e]=r)}),e[o]=void 0,i}}return t};return n(t,0)},isAsyncFn:J,isThenable:t=>t&&(S(t)||A(t))&&A(t.then)&&A(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function G(t,e,n,o,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),o&&(this.request=o),i&&(this.response=i)}V.inherits(G,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const K=G.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Y[t]={value:t}}),Object.defineProperties(G,Y),Object.defineProperty(K,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
G.from=(t,e,n,o,i,r)=>{let s=Object.create(K);return V.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),G.call(s,t.message,e,n,o,i),s.cause=t,s.name=t.name,r&&Object.assign(s,r),s},r=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,n=t.length,o=n%3// if we have 1 byte left, pad 2 bytes
,i=[],r=0,s=n-o;r<s;r+=16383// must be multiple of 3
)i.push(function(t,e,n){for(var o,i=[],r=e;r<n;r+=3)i.push(X[(o=(t[r]<<16&16711680)+(t[r+1]<<8&65280)+(255&t[r+2]))>>18&63]+X[o>>12&63]+X[o>>6&63]+X[63&o]);return i.join("")}(t,r,r+16383>s?s:r+16383));return 1===o?i.push(X[(e=t[n-1])>>2]+X[e<<4&63]+"=="):2===o&&i.push(X[(e=(t[n-2]<<8)+t[n-1])>>10]+X[e>>4&63]+X[e<<2&63]+"="),i.join("")};for(var X=[],Q=[],Z="undefined"!=typeof Uint8Array?Uint8Array:Array,tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",te=0,tn=tt.length;te<tn;++te)X[te]=tt[te],Q[tt.charCodeAt(te)]=te;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
Q["-".charCodeAt(0)]=62,Q["_".charCodeAt(0)]=63,s=function(t,e,n,o,i){var r,s,a=8*i-o-1,l=(1<<a)-1,f=l>>1,c=-7,u=n?i-1:0,p=n?-1:1,h=t[e+u];for(u+=p,r=h&(1<<-c)-1,h>>=-c,c+=a;c>0;r=256*r+t[e+u],u+=p,c-=8);for(s=r&(1<<-c)-1,r>>=-c,c+=o;c>0;s=256*s+t[e+u],u+=p,c-=8);if(0===r)r=1-f;else{if(r===l)return s?NaN:(h?-1:1)*(1/0);s+=Math.pow(2,o),r-=f}return(h?-1:1)*s*Math.pow(2,r-o)},a=function(t,e,n,o,i,r){var s,a,l,f=8*r-i-1,c=(1<<f)-1,u=c>>1,p=23===i?5960464477539062e-23:0,h=o?0:r-1,d=o?1:-1,m=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+u>=1?e+=p/l:e+=p*Math.pow(2,1-u),e*l>=2&&(s++,l/=2),s+u>=c?(a=0,s=c):s+u>=1?(a=(e*l-1)*Math.pow(2,i),s+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,i),s=0));i>=8;t[n+h]=255&a,h+=d,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;t[n+h]=255&s,h+=d,s/=256,f-=8);t[n+h-d]|=128*m};const to="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function ti(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,tr.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function tr(t,e,n){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return tl(t)}return ts(t,e,n)}function ts(t,e,n){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!tr.isEncoding(e))throw TypeError("Unknown encoding: "+e);let n=0|tp(t,e),o=ti(n),i=o.write(t,e);return i!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(o=o.slice(0,i)),o}(t,e);if(ArrayBuffer.isView(t))return function(t){if(t_(t,Uint8Array)){let e=new Uint8Array(t);return tc(e.buffer,e.byteOffset,e.byteLength)}return tf(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t_(t,ArrayBuffer)||t&&t_(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(t_(t,SharedArrayBuffer)||t&&t_(t.buffer,SharedArrayBuffer)))return tc(t,e,n);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let o=t.valueOf&&t.valueOf();if(null!=o&&o!==t)return tr.from(o,e,n);let i=function(t){var e;if(tr.isBuffer(t)){let e=0|tu(t.length),n=ti(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?ti(0):tf(t):"Buffer"===t.type&&Array.isArray(t.data)?tf(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return tr.from(t[Symbol.toPrimitive]("string"),e,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function ta(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function tl(t){return ta(t),ti(t<0?0:0|tu(t))}function tf(t){let e=t.length<0?0:0|tu(t.length),n=ti(e);for(let o=0;o<e;o+=1)n[o]=255&t[o];return n}function tc(t,e,n){let o;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(o=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),tr.prototype),o)}function tu(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tp(t,e){if(tr.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t_(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,o=arguments.length>2&&!0===arguments[2];if(!o&&0===n)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return tI(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return tL(t).length;default:if(i)return o?-1:tI(t).length// assume utf8
;e=(""+e).toLowerCase(),i=!0}}function th(t,e,n){let o=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,n){let o=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>o)&&(n=o);let i="";for(let o=e;o<n;++o)i+=tj[t[o]];return i}(this,e,n);case"utf8":case"utf-8":return tg(this,e,n);case"ascii":return function(t,e,n){let o="";n=Math.min(t.length,n);for(let i=e;i<n;++i)o+=String.fromCharCode(127&t[i]);return o}(this,e,n);case"latin1":case"binary":return function(t,e,n){let o="";n=Math.min(t.length,n);for(let i=e;i<n;++i)o+=String.fromCharCode(t[i]);return o}(this,e,n);case"base64":var i,s;return i=e,s=n,0===i&&s===this.length?r(this):r(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,n){let o=t.slice(e,n),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<o.length-1;t+=2)i+=String.fromCharCode(o[t]+256*o[t+1]);return i}(this,e,n);default:if(o)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}function td(t,e,n){let o=t[e];t[e]=t[n],t[n]=o}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tm(t,e,n,o,i){var r;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof n?(o=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(r=n=+n// Coerce to Number.
)!=r&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return -1;n=t.length-1}else if(n<0){if(!i)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=tr.from(e,o)),tr.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:ty(t,e,n,o,i));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):ty(t,[e],n,o,i);throw TypeError("val must be string, number or Buffer")}function ty(t,e,n,o,i){let r,s=1,a=t.length,l=e.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(t.length<2||e.length<2)return -1;s=2,a/=2,l/=2,n/=2}function f(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let o=-1;for(r=n;r<a;r++)if(f(t,r)===f(e,-1===o?0:r-o)){if(-1===o&&(o=r),r-o+1===l)return o*s}else -1!==o&&(r-=r-o),o=-1}else for(n+l>a&&(n=a-l),r=n;r>=0;r--){let n=!0;for(let o=0;o<l;o++)if(f(t,r+o)!==f(e,o)){n=!1;break}if(n)return r}return -1}function tg(t,e,n){n=Math.min(t.length,n);let o=[],i=e;for(;i<n;){let e=t[i],r=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=n){let n,o,a,l;switch(s){case 1:e<128&&(r=e);break;case 2:(192&(n=t[i+1]))==128&&(l=(31&e)<<6|63&n)>127&&(r=l);break;case 3:n=t[i+1],o=t[i+2],(192&n)==128&&(192&o)==128&&(l=(15&e)<<12|(63&n)<<6|63&o)>2047&&(l<55296||l>57343)&&(r=l);break;case 4:n=t[i+1],o=t[i+2],a=t[i+3],(192&n)==128&&(192&o)==128&&(192&a)==128&&(l=(15&e)<<18|(63&n)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(r=l)}}null===r?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
r=65533,s=1):r>65535&&(// encode to utf16 (surrogate pair dance)
r-=65536,o.push(r>>>10&1023|55296),r=56320|1023&r),o.push(r),i+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",o=0;for(;o<e;)n+=String.fromCharCode.apply(String,t.slice(o,o+=4096));return n}(o)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tb(t,e,n){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>n)throw RangeError("Trying to access beyond buffer length")}function tw(t,e,n,o,i,r){if(!tr.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<r)throw RangeError('"value" argument is out of bounds');if(n+o>t.length)throw RangeError("Index out of range")}function tx(t,e,n,o,i){tB(e,o,i,t,n,7);let r=Number(e&BigInt(4294967295));t[n++]=r,r>>=8,t[n++]=r,r>>=8,t[n++]=r,r>>=8,t[n++]=r;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function tv(t,e,n,o,i){tB(e,o,i,t,n,7);let r=Number(e&BigInt(4294967295));t[n+7]=r,r>>=8,t[n+6]=r,r>>=8,t[n+5]=r,r>>=8,t[n+4]=r;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function tE(t,e,n,o,i,r){if(n+o>t.length||n<0)throw RangeError("Index out of range")}function tk(t,e,n,o,i){return e=+e,n>>>=0,i||tE(t,e,n,4,34028234663852886e22,-34028234663852886e22),a(t,e,n,o,23,4),n+4}function tN(t,e,n,o,i){return e=+e,n>>>=0,i||tE(t,e,n,8,17976931348623157e292,-17976931348623157e292),a(t,e,n,o,52,8),n+8}/**
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
 */tr.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),tr.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tr.prototype,"parent",{enumerable:!0,get:function(){if(tr.isBuffer(this))return this.buffer}}),Object.defineProperty(tr.prototype,"offset",{enumerable:!0,get:function(){if(tr.isBuffer(this))return this.byteOffset}}),tr.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/tr.from=function(t,e,n){return ts(t,e,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(tr.prototype,Uint8Array.prototype),Object.setPrototypeOf(tr,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/tr.alloc=function(t,e,n){return(ta(t),t<=0)?ti(t):void 0!==e?"string"==typeof n?ti(t).fill(e,n):ti(t).fill(e):ti(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */tr.allocUnsafe=function(t){return tl(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */tr.allocUnsafeSlow=function(t){return tl(t)},tr.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==tr.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},tr.compare=function(t,e){if(t_(t,Uint8Array)&&(t=tr.from(t,t.offset,t.byteLength)),t_(e,Uint8Array)&&(e=tr.from(e,e.offset,e.byteLength)),!tr.isBuffer(t)||!tr.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,o=e.length;for(let i=0,r=Math.min(n,o);i<r;++i)if(t[i]!==e[i]){n=t[i],o=e[i];break}return n<o?-1:o<n?1:0},tr.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tr.concat=function(t,e){let n;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return tr.alloc(0);if(void 0===e)for(n=0,e=0;n<t.length;++n)e+=t[n].length;let o=tr.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){let e=t[n];if(t_(e,Uint8Array))i+e.length>o.length?(tr.isBuffer(e)||(e=tr.from(e)),e.copy(o,i)):Uint8Array.prototype.set.call(o,e,i);else if(tr.isBuffer(e))e.copy(o,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return o},tr.byteLength=tp,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
tr.prototype._isBuffer=!0,tr.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)td(this,e,e+1);return this},tr.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)td(this,e,e+3),td(this,e+1,e+2);return this},tr.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)td(this,e,e+7),td(this,e+1,e+6),td(this,e+2,e+5),td(this,e+3,e+4);return this},tr.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?tg(this,0,t):th.apply(this,arguments)},tr.prototype.toLocaleString=tr.prototype.toString,tr.prototype.equals=function(t){if(!tr.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===tr.compare(this,t)},tr.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},to&&(tr.prototype[to]=tr.prototype.inspect),tr.prototype.compare=function(t,e,n,o,i){if(t_(t,Uint8Array)&&(t=tr.from(t,t.offset,t.byteLength)),!tr.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),e<0||n>t.length||o<0||i>this.length)throw RangeError("out of range index");if(o>=i&&e>=n)return 0;if(o>=i)return -1;if(e>=n)return 1;if(e>>>=0,n>>>=0,o>>>=0,i>>>=0,this===t)return 0;let r=i-o,s=n-e,a=Math.min(r,s),l=this.slice(o,i),f=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==f[t]){r=l[t],s=f[t];break}return r<s?-1:s<r?1:0},tr.prototype.includes=function(t,e,n){return -1!==this.indexOf(t,e,n)},tr.prototype.indexOf=function(t,e,n){return tm(this,t,e,n,!0)},tr.prototype.lastIndexOf=function(t,e,n){return tm(this,t,e,n,!1)},tr.prototype.write=function(t,e,n,o){var i,r,s,a,l,f,c,u;// Buffer#write(string)
if(void 0===e)o="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)o=e,n=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(n)?(n>>>=0,void 0===o&&(o="utf8")):(o=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let p=this.length-e;if((void 0===n||n>p)&&(n=p),t.length>0&&(n<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let h=!1;for(;;)switch(o){case"hex":return function(t,e,n,o){let i;n=Number(n)||0;let r=t.length-n;o?(o=Number(o))>r&&(o=r):o=r;let s=e.length;for(o>s/2&&(o=s/2),i=0;i<o;++i){let o=parseInt(e.substr(2*i,2),16);if(o!=o)break;t[n+i]=o}return i}(this,t,e,n);case"utf8":case"utf-8":return i=e,r=n,tU(tI(t,this.length-i),this,i,r);case"ascii":case"latin1":case"binary":return s=e,a=n,tU(function(t){let e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,f=n,tU(tL(t),this,l,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,u=n,tU(function(t,e){let n,o;let i=[];for(let r=0;r<t.length&&!((e-=2)<0);++r)o=(n=t.charCodeAt(r))>>8,i.push(n%256),i.push(o);return i}(t,this.length-c),this,c,u);default:if(h)throw TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),h=!0}},tr.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tr.prototype.slice=function(t,e){let n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);let o=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(o,tr.prototype),o)},tr.prototype.readUintLE=tr.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tb(t,e,this.length);let o=this[t],i=1,r=0;for(;++r<e&&(i*=256);)o+=this[t+r]*i;return o},tr.prototype.readUintBE=tr.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tb(t,e,this.length);let o=this[t+--e],i=1;for(;e>0&&(i*=256);)o+=this[t+--e]*i;return o},tr.prototype.readUint8=tr.prototype.readUInt8=function(t,e){return t>>>=0,e||tb(t,1,this.length),this[t]},tr.prototype.readUint16LE=tr.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tb(t,2,this.length),this[t]|this[t+1]<<8},tr.prototype.readUint16BE=tr.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tb(t,2,this.length),this[t]<<8|this[t+1]},tr.prototype.readUint32LE=tr.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tb(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},tr.prototype.readUint32BE=tr.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tb(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},tr.prototype.readBigUInt64LE=tP(function(t){tR(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tT(t,this.length-8);let o=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*n;return BigInt(o)+(BigInt(i)<<BigInt(32))}),tr.prototype.readBigUInt64BE=tP(function(t){tR(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tT(t,this.length-8);let o=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+n;return(BigInt(o)<<BigInt(32))+BigInt(i)}),tr.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||tb(t,e,this.length);let o=this[t],i=1,r=0;for(;++r<e&&(i*=256);)o+=this[t+r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},tr.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||tb(t,e,this.length);let o=e,i=1,r=this[t+--o];for(;o>0&&(i*=256);)r+=this[t+--o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},tr.prototype.readInt8=function(t,e){return(t>>>=0,e||tb(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},tr.prototype.readInt16LE=function(t,e){t>>>=0,e||tb(t,2,this.length);let n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},tr.prototype.readInt16BE=function(t,e){t>>>=0,e||tb(t,2,this.length);let n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},tr.prototype.readInt32LE=function(t,e){return t>>>=0,e||tb(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},tr.prototype.readInt32BE=function(t,e){return t>>>=0,e||tb(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},tr.prototype.readBigInt64LE=tP(function(t){tR(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tT(t,this.length-8);let o=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24// Overflow
);return(BigInt(o)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),tr.prototype.readBigInt64BE=tP(function(t){tR(t>>>=0,"offset");let e=this[t],n=this[t+7];(void 0===e||void 0===n)&&tT(t,this.length-8);let o=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(o)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+n)}),tr.prototype.readFloatLE=function(t,e){return t>>>=0,e||tb(t,4,this.length),s(this,t,!0,23,4)},tr.prototype.readFloatBE=function(t,e){return t>>>=0,e||tb(t,4,this.length),s(this,t,!1,23,4)},tr.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tb(t,8,this.length),s(this,t,!0,52,8)},tr.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tb(t,8,this.length),s(this,t,!1,52,8)},tr.prototype.writeUintLE=tr.prototype.writeUIntLE=function(t,e,n,o){if(t=+t,e>>>=0,n>>>=0,!o){let o=Math.pow(2,8*n)-1;tw(this,t,e,n,o,0)}let i=1,r=0;for(this[e]=255&t;++r<n&&(i*=256);)this[e+r]=t/i&255;return e+n},tr.prototype.writeUintBE=tr.prototype.writeUIntBE=function(t,e,n,o){if(t=+t,e>>>=0,n>>>=0,!o){let o=Math.pow(2,8*n)-1;tw(this,t,e,n,o,0)}let i=n-1,r=1;for(this[e+i]=255&t;--i>=0&&(r*=256);)this[e+i]=t/r&255;return e+n},tr.prototype.writeUint8=tr.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,1,255,0),this[e]=255&t,e+1},tr.prototype.writeUint16LE=tr.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},tr.prototype.writeUint16BE=tr.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},tr.prototype.writeUint32LE=tr.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},tr.prototype.writeUint32BE=tr.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tr.prototype.writeBigUInt64LE=tP(function(t,e=0){return tx(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tr.prototype.writeBigUInt64BE=tP(function(t,e=0){return tv(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tr.prototype.writeIntLE=function(t,e,n,o){if(t=+t,e>>>=0,!o){let o=Math.pow(2,8*n-1);tw(this,t,e,n,o-1,-o)}let i=0,r=1,s=0;for(this[e]=255&t;++i<n&&(r*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/r>>0)-s&255;return e+n},tr.prototype.writeIntBE=function(t,e,n,o){if(t=+t,e>>>=0,!o){let o=Math.pow(2,8*n-1);tw(this,t,e,n,o-1,-o)}let i=n-1,r=1,s=0;for(this[e+i]=255&t;--i>=0&&(r*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/r>>0)-s&255;return e+n},tr.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},tr.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},tr.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},tr.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},tr.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||tw(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tr.prototype.writeBigInt64LE=tP(function(t,e=0){return tx(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tr.prototype.writeBigInt64BE=tP(function(t,e=0){return tv(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tr.prototype.writeFloatLE=function(t,e,n){return tk(this,t,e,!0,n)},tr.prototype.writeFloatBE=function(t,e,n){return tk(this,t,e,!1,n)},tr.prototype.writeDoubleLE=function(t,e,n){return tN(this,t,e,!0,n)},tr.prototype.writeDoubleBE=function(t,e,n){return tN(this,t,e,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
tr.prototype.copy=function(t,e,n,o){if(!tr.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),o||0===o||(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<n&&(o=n),o===n||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(o<0)throw RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-n&&(o=t.length-e+n);let i=o-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,o):Uint8Array.prototype.set.call(t,this.subarray(n,o),e),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
tr.prototype.fill=function(t,e,n,o){let i;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(o=e,e=0,n=this.length):"string"==typeof n&&(o=n,n=this.length),void 0!==o&&"string"!=typeof o)throw TypeError("encoding must be a string");if("string"==typeof o&&!tr.isEncoding(o))throw TypeError("Unknown encoding: "+o);if(1===t.length){let e=t.charCodeAt(0);("utf8"===o&&e<128||"latin1"===o)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<n)throw RangeError("Out of range index");if(n<=e)return this;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{let r=tr.isBuffer(t)?t:tr.from(t,o),s=r.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=r[i%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const tA={};function tO(t,e,n){tA[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tS(t){let e="",n=t.length,o="-"===t[0]?1:0;for(;n>=o+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function tB(t,e,n,o,i,r){if(t>n||t<e){let o;let i="bigint"==typeof e?"n":"";throw o=r>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(r+1)*8}${i}`:`>= -(2${i} ** ${(r+1)*8-1}${i}) and < 2 ** ${(r+1)*8-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new tA.ERR_OUT_OF_RANGE("value",o,t)}tR(i,"offset"),(void 0===o[i]||void 0===o[i+r])&&tT(i,o.length-(r+1))}function tR(t,e){if("number"!=typeof t)throw new tA.ERR_INVALID_ARG_TYPE(e,"number",t)}function tT(t,e,n){if(Math.floor(t)!==t)throw tR(t,n),new tA.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new tA.ERR_BUFFER_OUT_OF_BOUNDS;throw new tA.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}tO("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tO("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tO("ERR_OUT_OF_RANGE",function(t,e,n){let o=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?i=tS(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=tS(i)),i+="n"),o+=` It must be ${e}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
const tC=/[^+/0-9A-Za-z-_]/g;function tI(t,e){let n;e=e||1/0;let o=t.length,i=null,r=[];for(let s=0;s<o;++s){// is surrogate component
if((n=t.charCodeAt(s))>55295&&n<57344){// last char was a lead
if(!i){// no lead yet
if(n>56319||s+1===o){(e-=3)>-1&&r.push(239,191,189);continue}// valid lead
i=n;continue}// 2 leads in a row
if(n<56320){(e-=3)>-1&&r.push(239,191,189),i=n;continue}// valid surrogate pair
n=(i-55296<<10|n-56320)+65536}else i&&(e-=3)>-1&&r.push(239,191,189);// encode utf8
if(i=null,n<128){if((e-=1)<0)break;r.push(n)}else if(n<2048){if((e-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((e-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return r}function tL(t){return function(t){var e,n,o=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=t.indexOf("=");-1===n&&(n=e);var o=n===e?0:4-n%4;return[n,o]}(t),i=o[0],r=o[1],s=new Z((i+r)*3/4-r),a=0,l=r>0?i-4:i;for(n=0;n<l;n+=4)e=Q[t.charCodeAt(n)]<<18|Q[t.charCodeAt(n+1)]<<12|Q[t.charCodeAt(n+2)]<<6|Q[t.charCodeAt(n+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===r&&(e=Q[t.charCodeAt(n)]<<2|Q[t.charCodeAt(n+1)]>>4,s[a++]=255&e),1===r&&(e=Q[t.charCodeAt(n)]<<10|Q[t.charCodeAt(n+1)]<<4|Q[t.charCodeAt(n+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tC,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tU(t,e,n,o){let i;for(i=0;i<o&&!(i+n>=e.length)&&!(i>=t.length);++i)e[i+n]=t[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function t_(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const tj=function(){let t="0123456789abcdef",e=Array(256);for(let n=0;n<16;++n){let o=16*n;for(let i=0;i<16;++i)e[o+i]=t[n]+t[i]}return e}();// Return not function with Error if BigInt not supported
function tP(t){return"undefined"==typeof BigInt?tD:t}function tD(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tF(t){return V.isPlainObject(t)||V.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tz(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tM(t,e,n){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tz(t),!n&&e?"["+t+"]":t)}).join(n?".":""):e}const t$=V.toFlatObject(V,{},null,function(t){return/^is[A-Z]/.test(t)});var tW=/**
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
 */function(t,e,n){if(!V.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!V.isUndefined(e[t])});let o=n.metaTokens,i=n.visitor||c,r=n.dots,s=n.indexes,a=n.Blob||"undefined"!=typeof Blob&&Blob,l=a&&V.isSpecCompliantForm(e);if(!V.isFunction(i))throw TypeError("visitor must be a function");function f(t){if(null===t)return"";if(V.isDate(t))return t.toISOString();if(!l&&V.isBlob(t))throw new G("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(t)||V.isTypedArray(t)?l&&"function"==typeof Blob?new Blob([t]):tr.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(t,n,i){let a=t;if(t&&!i&&"object"==typeof t){if(V.endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=o?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var l;if(V.isArray(t)&&(l=t,V.isArray(l)&&!l.some(tF))||(V.isFileList(t)||V.endsWith(n,"[]"))&&(a=V.toArray(t)))return(// eslint-disable-next-line no-param-reassign
n=tz(n),a.forEach(function(t,o){V.isUndefined(t)||null===t||e.append(!0===s?tM([n],o,r):null===s?n:n+"[]",f(t))}),!1)}}return!!tF(t)||(e.append(tM(i,n,r),f(t)),!1)}let u=[],p=Object.assign(t$,{defaultVisitor:c,convertValue:f,isVisitable:tF});if(!V.isObject(t))throw TypeError("data must be an object");return!function t(n,o){if(!V.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+o.join("."));u.push(n),V.forEach(n,function(n,r){let s=!(V.isUndefined(n)||null===n)&&i.call(e,n,V.isString(r)?r.trim():r,o,p);!0===s&&t(n,o?o.concat(r):[r])}),u.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tq(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tH(t,e){this._pairs=[],t&&tW(t,this,e)}const tJ=tH.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tV(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tG(t,e,n){let o;/*eslint no-param-reassign:0*/if(!e)return t;let i=n&&n.encode||tV,r=n&&n.serialize;if(o=r?r(e,n):V.isURLSearchParams(e)?e.toString():new tH(e,n).toString(i)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}tJ.append=function(t,e){this._pairs.push([t,e])},tJ.toString=function(t){let e=t?function(e){return t.call(this,e,tq)}:tq;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tK=class{constructor(){this.handlers=[]}/**
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
   */forEach(t){V.forEach(this.handlers,function(e){null!==e&&t(e)})}},tY={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tX="undefined"!=typeof URLSearchParams?URLSearchParams:tH,tQ="undefined"!=typeof FormData?FormData:null,tZ="undefined"!=typeof Blob?Blob:null;/**
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
 */const t0=("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document,t1="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t2={classes:{URLSearchParams:tX,FormData:tQ,Blob:tZ},isStandardBrowserEnv:t0,isStandardBrowserWebWorkerEnv:t1,protocols:["http","https","file","blob","url","data"]},t5=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(V.isFormData(t)&&V.isFunction(t.entries)){let e={};return V.forEachEntry(t,(t,n)=>{!function t(e,n,o,i){let r=e[i++],s=Number.isFinite(+r),a=i>=e.length;if(r=!r&&V.isArray(o)?o.length:r,a)return V.hasOwnProp(o,r)?o[r]=[o[r],n]:o[r]=n,!s;o[r]&&V.isObject(o[r])||(o[r]=[]);let l=t(e,n,o[r],i);return l&&V.isArray(o[r])&&(o[r]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,n;let o={},i=Object.keys(t),r=i.length;for(e=0;e<r;e++)o[n=i[e]]=t[n];return o}(o[r])),!s}(V.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),n,e,0)}),e}return null};const t3={transitional:tY,adapter:t2.isNode?"http":"xhr",transformRequest:[function(t,e){let n;let o=e.getContentType()||"",i=o.indexOf("application/json")>-1,r=V.isObject(t);r&&V.isHTMLForm(t)&&(t=new FormData(t));let s=V.isFormData(t);if(s)return i&&i?JSON.stringify(t5(t)):t;if(V.isArrayBuffer(t)||V.isBuffer(t)||V.isStream(t)||V.isFile(t)||V.isBlob(t))return t;if(V.isArrayBufferView(t))return t.buffer;if(V.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(r){if(o.indexOf("application/x-www-form-urlencoded")>-1){var a,l;return(a=t,l=this.formSerializer,tW(a,new t2.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,o){return t2.isNode&&V.isBuffer(t)?(this.append(e,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},l))).toString()}if((n=V.isFileList(t))||o.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tW(n?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,n){if(V.isString(t))try{return(0,JSON.parse)(t),V.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t3.transitional,n=e&&e.forcedJSONParsing,o="json"===this.responseType;if(t&&V.isString(t)&&(n&&!this.responseType||o)){let n=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!n&&o){if("SyntaxError"===t.name)throw G.from(t,G.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t2.classes.FormData,Blob:t2.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],t=>{t3.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const t8=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */t6=t=>{let e,n,o;let i={};return t&&t.split("\n").forEach(function(t){o=t.indexOf(":"),e=t.substring(0,o).trim().toLowerCase(),n=t.substring(o+1).trim(),!e||i[e]&&t8[e]||("set-cookie"===e?i[e]?i[e].push(n):i[e]=[n]:i[e]=i[e]?i[e]+", "+n:n)}),i};const t4=Symbol("internals");function t9(t){return t&&String(t).trim().toLowerCase()}function t7(t){return!1===t||null==t?t:V.isArray(t)?t.map(t7):String(t)}const et=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ee(t,e,n,o,i){if(V.isFunction(o))return o.call(this,e,n);if(i&&(e=n),V.isString(e)){if(V.isString(o))return -1!==e.indexOf(o);if(V.isRegExp(o))return o.test(e)}}class en{constructor(t){t&&this.set(t)}set(t,e,n){let o=this;function i(t,e,n){let i=t9(e);if(!i)throw Error("header name must be a non-empty string");let r=V.findKey(o,i);r&&void 0!==o[r]&&!0!==n&&(void 0!==n||!1===o[r])||(o[r||e]=t7(t))}let r=(t,e)=>V.forEach(t,(t,n)=>i(t,n,e));return V.isPlainObject(t)||t instanceof this.constructor?r(t,e):V.isString(t)&&(t=t.trim())&&!et(t)?r(t6(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=t9(t)){let n=V.findKey(this,t);if(n){let t=this[n];if(!e)return t;if(!0===e)return function(t){let e;let n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=o.exec(t);)n[e[1]]=e[2];return n}(t);if(V.isFunction(e))return e.call(this,t,n);if(V.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t9(t)){let n=V.findKey(this,t);return!!(n&&void 0!==this[n]&&(!e||ee(this,this[n],n,e)))}return!1}delete(t,e){let n=this,o=!1;function i(t){if(t=t9(t)){let i=V.findKey(n,t);i&&(!e||ee(n,n[i],i,e))&&(delete n[i],o=!0)}}return V.isArray(t)?t.forEach(i):i(t),o}clear(t){let e=Object.keys(this),n=e.length,o=!1;for(;n--;){let i=e[n];(!t||ee(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){let e=this,n={};return V.forEach(this,(o,i)=>{let r=V.findKey(n,i);if(r){e[r]=t7(o),delete e[i];return}let s=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n):String(i).trim();s!==i&&delete e[i],e[s]=t7(o),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return V.forEach(this,(n,o)=>{null!=n&&!1!==n&&(e[o]=t&&V.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let n=new this(t);return e.forEach(t=>n.set(t)),n}static accessor(t){let e=this[t4]=this[t4]={accessors:{}},n=e.accessors,o=this.prototype;function i(t){let e=t9(t);n[e]||(!function(t,e){let n=V.toCamelCase(" "+e);["get","set","has"].forEach(o=>{Object.defineProperty(t,o+n,{value:function(t,n,i){return this[o].call(this,e,t,n,i)},configurable:!0})})}(o,t),n[e]=!0)}return V.isArray(t)?t.forEach(i):i(t),this}}function eo(t,e){let n=this||t3,o=e||n,i=en.from(o.headers),r=o.data;return V.forEach(t,function(t){r=t.call(n,r,i.normalize(),e?e.status:void 0)}),i.normalize(),r}function ei(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function er(t,e,n){G.call(this,null==t?"canceled":t,G.ERR_CANCELED,e,n),this.name="CanceledError"}en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.reduceDescriptors(en.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[n]=t}}}),V.freezeMethods(en),V.inherits(er,G,{__CANCEL__:!0});var es=t2.isStandardBrowserEnv?{write:function(t,e,n,o,i,r){let s=[];s.push(t+"="+encodeURIComponent(e)),V.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),V.isString(o)&&s.push("path="+o),V.isString(i)&&s.push("domain="+i),!0===r&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ea(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var el=t2.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function o(t){let o=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=o(window.location.href),function(e){let n=V.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},ef=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let n;t=t||10;let o=Array(t),i=Array(t),r=0,s=0;return e=void 0!==e?e:1e3,function(a){let l=Date.now(),f=i[s];n||(n=l),o[r]=a,i[r]=l;let c=s,u=0;for(;c!==r;)u+=o[c++],c%=t;if((r=(r+1)%t)===s&&(s=(s+1)%t),l-n<e)return;let p=f&&l-f;return p?Math.round(1e3*u/p):void 0}};function ec(t,e){let n=0,o=ef(50,250);return i=>{let r=i.loaded,s=i.lengthComputable?i.total:void 0,a=r-n,l=o(a),f=r<=s;n=r;let c={loaded:r,total:s,progress:s?r/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&f?(s-r)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const eu="undefined"!=typeof XMLHttpRequest;var ep=eu&&function(t){return new Promise(function(e,n){let o,i=t.data,r=en.from(t.headers).normalize(),s=t.responseType;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}V.isFormData(i)&&(t2.isStandardBrowserEnv||t2.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}let f=ea(t.baseURL,t.url);function c(){if(!l)return;// Prepare the response
let o=en.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?l.response:l.responseText,r={data:i,status:l.status,statusText:l.statusText,headers:o,config:t,request:l};!function(t,e,n){let o=n.config.validateStatus;!n.status||!o||o(n.status)?t(n):e(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}(function(t){e(t),a()},function(t){n(t),a()},r),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(t.method.toUpperCase(),tG(f,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=t.timeout,"onloadend"in l?l.onloadend=c:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(n(new G("Request aborted",G.ECONNABORTED,t,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new G("Network Error",G.ERR_NETWORK,t,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",o=t.transitional||tY;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new G(e,o.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,l)),// Clean up request
l=null},t2.isStandardBrowserEnv){// Add xsrf header
let e=(t.withCredentials||el(f))&&t.xsrfCookieName&&es.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===i&&r.setContentType(null),"setRequestHeader"in l&&V.forEach(r.toJSON(),function(t,e){l.setRequestHeader(e,t)}),V.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),s&&"json"!==s&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",ec(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",ec(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
o=e=>{l&&(n(!e||e.type?new er(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));let u=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(f);if(u&&-1===t2.protocols.indexOf(u)){n(new G("Unsupported protocol "+u+":",G.ERR_BAD_REQUEST,t));return}// Send the request
l.send(i||null)})};const eh={http:null,xhr:ep};V.forEach(eh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var ed={getAdapter:t=>{let e,n;t=V.isArray(t)?t:[t];let{length:o}=t;for(let i=0;i<o&&(e=t[i],!(n=V.isString(e)?eh[e.toLowerCase()]:e));i++);if(!n){if(!1===n)throw new G(`Adapter ${e} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(V.hasOwnProp(eh,e)?`Adapter '${e}' is not available in the build`:`Unknown adapter '${e}'`)}if(!V.isFunction(n))throw TypeError("adapter is not a function");return n},adapters:eh};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function em(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new er(null,t)}function ey(t){em(t),t.headers=en.from(t.headers),// Transform request data
t.data=eo.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=ed.getAdapter(t.adapter||t3.adapter);return e(t).then(function(e){return em(t),// Transform response data
e.data=eo.call(t,t.transformResponse,e),e.headers=en.from(e.headers),e},function(e){return!ei(e)&&(em(t),e&&e.response&&(e.response.data=eo.call(t,t.transformResponse,e.response),e.response.headers=en.from(e.response.headers))),Promise.reject(e)})}const eg=t=>t instanceof en?t.toJSON():t;function eb(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let n={};function o(t,e,n){return V.isPlainObject(t)&&V.isPlainObject(e)?V.merge.call({caseless:n},t,e):V.isPlainObject(e)?V.merge({},e):V.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,n){return V.isUndefined(e)?V.isUndefined(t)?void 0:o(void 0,t,n):o(t,e,n)}// eslint-disable-next-line consistent-return
function r(t,e){if(!V.isUndefined(e))return o(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return V.isUndefined(e)?V.isUndefined(t)?void 0:o(void 0,t):o(void 0,e)}// eslint-disable-next-line consistent-return
function a(n,i,r){return r in e?o(n,i):r in t?o(void 0,n):void 0}let l={url:r,method:r,data:r,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>i(eg(t),eg(e),!0)};return V.forEach(Object.keys(Object.assign({},t,e)),function(o){let r=l[o]||i,s=r(t[o],e[o],o);V.isUndefined(s)&&r!==a||(n[o]=s)}),n}const ew="1.5.0",ex={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ex[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const ev={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ex.transitional=function(t,e,n){function o(t,e){return"[Axios v"+ew+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}// eslint-disable-next-line func-names
return(n,i,r)=>{if(!1===t)throw new G(o(i," has been removed"+(e?" in "+e:"")),G.ERR_DEPRECATED);return e&&!ev[i]&&(ev[i]=!0,// eslint-disable-next-line no-console
console.warn(o(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,r)}};var eE={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,n){if("object"!=typeof t)throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);let o=Object.keys(t),i=o.length;for(;i-- >0;){let r=o[i],s=e[r];if(s){let e=t[r],n=void 0===e||s(e,r,t);if(!0!==n)throw new G("option "+r+" must be "+n,G.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new G("Unknown option "+r,G.ERR_BAD_OPTION)}},validators:ex};const ek=eE.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eN{constructor(t){this.defaults=t,this.interceptors={request:new tK,response:new tK}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let n,o;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=eb(this.defaults,e);let{transitional:i,paramsSerializer:r,headers:s}=e;void 0!==i&&eE.assertOptions(i,{silentJSONParsing:ek.transitional(ek.boolean),forcedJSONParsing:ek.transitional(ek.boolean),clarifyTimeoutError:ek.transitional(ek.boolean)},!1),null!=r&&(V.isFunction(r)?e.paramsSerializer={serialize:r}:eE.assertOptions(r,{encode:ek.function,serialize:ek.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&V.merge(s.common,s[e.method]);s&&V.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=en.concat(a,s);// filter out skipped interceptors
let l=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,l.unshift(t.fulfilled,t.rejected))});let c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let u=0;if(!f){let t=[ey.bind(this),void 0];for(t.unshift.apply(t,l),t.push.apply(t,c),o=t.length,n=Promise.resolve(e);u<o;)n=n.then(t[u++],t[u++]);return n}o=l.length;let p=e;for(u=0;u<o;){let t=l[u++],e=l[u++];try{p=t(p)}catch(t){e.call(this,t);break}}try{n=ey.call(this,p)}catch(t){return Promise.reject(t)}for(u=0,o=c.length;u<o;)n=n.then(c[u++],c[u++]);return n}getUri(t){t=eb(this.defaults,t);let e=ea(t.baseURL,t.url);return tG(e,t.params,t.paramsSerializer)}}V.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eN.prototype[t]=function(e,n){return this.request(eb(n||{},{method:t,url:e,data:(n||{}).data}))}}),V.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(n,o,i){return this.request(eb(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:o}))}}eN.prototype[t]=e(),eN.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eA{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let n=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let o=new Promise(t=>{n.subscribe(t),e=t}).then(t);return o.cancel=function(){n.unsubscribe(e)},o},t(function(t,o,i){n.reason||(n.reason=new er(t,o,i),e(n.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eA(function(e){t=e});return{token:e,cancel:t}}}const eO={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eO).forEach(([t,e])=>{eO[e]=t});// Create the default instance to be exported
const eS=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let n=new eN(e),o=m(eN.prototype.request,n);return V.extend(o,eN.prototype,n,{allOwnKeys:!0}),V.extend(o,n,null,{allOwnKeys:!0}),// Factory for creating new instances
o.create=function(n){return t(eb(e,n))},o}(t3);// Expose Axios class to allow class inheritance
eS.Axios=eN,// Expose Cancel & CancelToken
eS.CanceledError=er,eS.CancelToken=eA,eS.isCancel=ei,eS.VERSION=ew,eS.toFormData=tW,// Expose AxiosError class
eS.AxiosError=G,// alias for CanceledError for backward compatibility
eS.Cancel=eS.CanceledError,// Expose all/spread
eS.all=function(t){return Promise.all(t)},eS.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eS.isAxiosError=function(t){return V.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eS.mergeConfig=eb,eS.AxiosHeaders=en,eS.formToJSON=t=>t5(V.isHTMLForm(t)?new FormData(t):t),eS.getAdapter=ed.getAdapter,eS.HttpStatusCode=eO,eS.default=eS;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:eB,AxiosError:eR,CanceledError:eT,isCancel:eC,CancelToken:eI,VERSION:eL,all:eU,Cancel:e_,isAxiosError:ej,spread:eP,toFormData:eD,AxiosHeaders:eF,HttpStatusCode:ez,formToJSON:eM,getAdapter:e$,mergeConfig:eW}=eS;async function eq(t){try{let e=await eS.get("https://books-backend.p.goit.global/books/"+t);return e.data}catch(t){console.error("An error occurred while fetching data:",t)}}async function eH(){let{data:t}=await eS.get("https://books-backend.p.goit.global/books/category-list");return t}const eJ=document.querySelector(".categories-list");(async function t(){try{let t=await eH();if(!t.length){(0,d.Notify).failure("Oops something going wrong.");return}eJ.insertAdjacentHTML("beforeend",t.map(({list_name:t})=>`
    <li class="categories-list-item">
      <a href="#" class="categories-link">${t}</a>
    </li>
  `).join(""))}catch(t){console.log("TRY-CATCH:",t),(0,d.Notify).failure("Oops something going wrong.")}})(),eJ.addEventListener("click",t=>{t.preventDefault()}),p("fewGv");const eV=(t,e)=>{try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}},eG=t=>{try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}};!function(){let t=document.querySelector(".loader");t.style.display="block"}();const eK=document.querySelector(".common-list");document.querySelector(".main-title");const eY=document.querySelector(".categories-list");let eX=window.innerWidth<767?1:window.innerWidth<1439?3:5;function eQ(t){!function(){let t=document.querySelector(".loader");t.style.display="none"}();let e="";for(let n of t){let{books:t,list_name:o}=n;e+=` 
        <li class="common-item">
        <h2 class="common-title">${o}</h2>
        <ul class="book-list">
            ${function(t,e){let n="";for(let o=0;o<e;o+=1){let{book_image:e,title:i,author:r,_id:s}=t[o];n+=`
              <li class="book-item" data-id="${s}">
             
              <a href="#" class="book-link"> 
              <div class="thumb">
              <img src="${e||"../images/default_image.jpg"}" alt="${i}" class="book-img" data-id="${s}">
              <p class="notifications">quick view</p>
              </div> 
              <h3 class="book-title">${i}</h3>
              <p class="book-author">${r}</p>
              </a>
              </li>
            `}return n}(t,eX)}
        </ul>
        <button type="button" class="showMore-btn" name="${o}">see more</button>
    </li>`}eK.innerHTML=e}eY.firstElementChild.addEventListener("click",function(){let t=eG("data");console.log(t),eQ(t)}),window.addEventListener("resize",function(){let t=window.innerWidth<767?1:window.innerWidth<1439?3:5;if(t!=eX){eX=t;let e=eG("data");eQ(e)}}),eq("top-books").then(t=>{eV("data",t),eQ(t)}).catch(t=>console.log(t));var eZ=p("7Y9D8");const e0={categories:document.querySelector(".categories-list"),title:document.querySelector(".main-title"),list:document.querySelector(".common-list")},e1="Sorry, there are no books matching the selected category. Please select something else.",e2="Sorry, something went wrong. Try again!";e0.categories.addEventListener("click",function(t){"categories-link"===t.target.className&&(e7(t.target),e5=t.target.textContent.replaceAll(" ","%20"),t.target!==e0.categories.firstElementChild.firstElementChild&&e8(e5).then(t=>{if(0===t.data.length)throw Error((0,eZ.Notify).info(e1));let e=t.data[0].list_name;e0.title.textContent=e4(e),e0.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${e9(e)}</span>`),e0.list.innerHTML=e6(t.data)}).catch(function(t){t.response?(0,eZ.Notify).failure(e2):t.request&&(0,eZ.Notify).failure(e2)}))}),e0.list.addEventListener("click",function(t){"showMore-btn"===t.target.className&&(console.log(t.target),e8(t.target.name.replaceAll(" ","%20")).then(t=>{if(0===t.data.length)throw Error((0,eZ.Notify).info(e1));let e=t.data[0].list_name;e0.title.textContent=e4(e),e0.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${e9(e)}</span>`),e0.list.innerHTML=e6(t.data)}).catch(function(t){t.response?(0,eZ.Notify).failure(e2):t.request&&(0,eZ.Notify).failure(e2)}))});let e5="",e3=e0.categories.firstElementChild.firstElementChild;async function e8(t){let e=`https://books-backend.p.goit.global/books/category?category=${t}`,n=await eS.get(e);return n}function e6(t){return t.map(({book_image:t,author:e,title:n,_id:o})=>{let i=`<li class="book-item" data-id="${o}">
            <a href="#" class="book-link">
                <img class="book-img" src="${t||"../images/default_image.jpg"}" data-id="${o}" alt="${n}"> 
                <h3 class="book-title">${n}</h3>
                <p class="book-author">${e}</p>
            </a>
        </li>`;return i}).join("")}function e4(t){let e=t.split(" ");return e.splice(0,e.length-1).join(" ")}function e9(t){let e=t.split(" ");return e[e.length-1]}function e7(t){e3&&e3.classList.remove("category-active"),t.classList.add("category-active"),e3=t}e7(e3);var nt={};nt=new URL(p("kyEFX").resolve("8XY7q"),import.meta.url).toString();var ne={};ne=new URL(p("kyEFX").resolve("3WxNb"),import.meta.url).toString();var nn={};nn=new URL(p("kyEFX").resolve("lJIFT"),import.meta.url).toString();const no=document.querySelector(".common-list"),ni=document.querySelector(".modal__content"),nr=document.querySelector("#book-modal"),ns=document.getElementById("book-modal"),na=document.querySelector(".modal__close-btn"),nl=document.querySelector(".add-bookBtn");document.querySelector(".addNotification");const nf=document.querySelector(".removeNotification"),nc=document.querySelector(".notification");no.addEventListener("click",//!------------------
function(t){"book-img"===t.target.className&&(document.body.style.overflow="hidden",nr.classList.remove("is-hidden"),nu(t.target.dataset.id).then(t=>{//!-------
let{author:e,title:n,description:o,book_image:i,buy_links:r,list_name:s}=t.data;console.log({author:e,title:n,description:o,book_image:i,buy_links:r,list_name:s}),//!--------------------
ni.innerHTML="",ni.insertAdjacentHTML("afterbegin",function({author:t,title:e,description:n,book_image:o,buy_links:i}){let r=`<div class="modal__img-container"> 
        <img src="${o}" alt="${e}" class="modal__img"> 
      </div> 
      <div class="modal__desc"> 
        <h2 class="modal__title">${e}</h2> 
        <p class="modal__author">${t}</p> 
        <p class="modal__book-desc">${n}</p>
        <ul class="modal-book-image-list">
        <li>
        <a href=${np(i,"Amazon")} target= _blank><img src="${/*@__PURE__*/f(nt)}" alt="Amazon"></a>
          
        </li>
        <li>
        <a href=${np(i,"Apple Books")} target= _blank><img src="${/*@__PURE__*/f(ne)}" alt="Apple-Books"></a>
          

        </li>
        <li>
        <a href=${np(i,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/f(nn)}" alt="Book-Shop"></a>
         

        </li>
      </ul> 
</div>`;return r}(t.data))}))});async function nu(t){let e=`https://books-backend.p.goit.global/books/${t}`,n=await eS.get(e);return n}function np(t,e){for(let{name:n,url:o}of t)if(n===e)return o}document.addEventListener("DOMContentLoaded",function(){function t(){document.body.style.overflow="auto",ns.classList.add("is-hidden")}na.addEventListener("click",t),document.addEventListener("keydown",function(e){"Escape"===e.key&&t()}),ns.addEventListener("click",function(e){e.target===ns&&t()}),ni.addEventListener("click",function(t){t.stopPropagation()})}),document.addEventListener("DOMContentLoaded",function(){nl.addEventListener("click",function(){"Add to shopping list"===nl.textContent?(nl.textContent="Remove from the shopping list",nf.classList.remove("hidden"),nc.classList.remove("hidden")):(nl.textContent="Add to shopping list",nf.classList.add("hidden"),nc.classList.add("hidden"))})}),//!--------------------------------
nl.addEventListener("click",function(){}//!--------------------------------
),// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import axios from 'axios';
// import Notiflix from 'notiflix';
//  // Конфігурація Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBbyJ1YQ4-GD4N0lhO_z3BVagmCNn0IKFk",
//   authDomain: "bookshelf-ee661.firebaseapp.com",
//   databaseURL: "https://bookshelf-ee661-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "bookshelf-ee661",
//   storageBucket: "bookshelf-ee661.appspot.com",
//   messagingSenderId: "956258341440",
//   appId: "1:956258341440:web:ca611f9dfc8a224323c5a5",
//   measurementId: "G-WDP0VVBWDK"
// };
// // Ініціалізація Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase();
// const auth = getAuth();
// document.addEventListener('DOMContentLoaded', function () {
//   const openButton = document.querySelector('[data-auth-open]');
//   const closeButton = document.querySelector('.auth-btn-close');
//   const burgerButton = document.querySelector('.js-open-menu');
//   const modal = document.querySelector('.auth-backdrop');
//   const signUpForm = document.querySelector('.auth-form');
//   const signUpButton = document.querySelector('.auth-button-signup');
//   const userNameInput = signUpForm.querySelector('input[name="user_name"]');
//   const userEmailInput = signUpForm.querySelector('input[name="user_email"]');
//   const userPasswordInput = signUpForm.querySelector('input[name="user_password"]');
//   // Відкриття/закриття вікна
//   function openModal() {
//     modal.style.display = 'block';
//     document.querySelector('.auth').style.visibility = 'visible';
//     userNameInput.value = '';
//     userEmailInput.value = '';
//     userPasswordInput.value = '';
//   }
//   function closeModal() {
//     modal.style.display = 'none';
//   }
//   openButton.addEventListener('click', openModal);
//   closeButton.addEventListener('click', closeModal);
//   burgerButton.addEventListener('click', openModal);
//   // Реєстрація користувача при натисканні кнопки SIGN UP
//   signUpButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     const userName = userNameInput.value;
//     const userEmail = userEmailInput.value;
//     const userPassword = userPasswordInput.value;
//     createUserWithEmailAndPassword(auth, userName, userEmail, userPassword)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         // Збереження інформації про користувача в базі даних Firebase
//         const userId = user.uid;
//         const userRef = ref(database, 'users/' + userId);
//         const userData = {
//           name: userName,
//           email: userEmail,
//           password: userPassword,
//         };
//         set(userRef, userData)
//           .then(() => {
//             console.log('User data saved in the database.');
//           })
//           .catch((error) => {
//             console.error('Error saving user data:', error);
//           });
//         // Оновлення інтерфейсу з ім'ям користувача
//         updateUI(userName);
//         closeModal();
//       })
//       // .catch((error) => {
//       //    const errorMessage = error.message;
//       //   console.error('Registration failed:', errorMessage);
//       // });
//   });
//   // Оновлення інтерфейсу з іменем користувача
//   function updateUI(userName) {
//     const signUpButtonUp = document.querySelector('[data-auth-open]');
//     signUpButtonUp.textContent = `Hello, ${userName}`;
//   }
// });
// // кнопка "SIGN IN"
// // Отримуємо кнопку та інпут за допомогою їх класів
// var signInButton = document.querySelector('.auth-button-in');
// var userNameInput = document.querySelector('.auth-input');
// // Додаємо обробник події для кліку на кнопку
// signInButton.addEventListener('click', function() {
//     // Перевіряємо, чи інпут існує перед видаленням
//     if (userNameInput) {
//         // Видаляємо інпут з DOM
//         userNameInput.remove();
//     }
// });
p("dGLOO");//# sourceMappingURL=index.5aa97052.js.map

//# sourceMappingURL=index.5aa97052.js.map
