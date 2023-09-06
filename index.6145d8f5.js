let e,t,i,n,r,o,s,a,l;var c,h,u,f,d,p,g,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var v={},w={},b=m.parcelRequired7c6;null==b&&((b=function(e){if(e in v)return v[e].exports;if(e in w){var t=w[e];delete w[e];var i={id:e,exports:{}};return v[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},m.parcelRequired7c6=b),b("7Y9D8"),b("5Szup");const E={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};E.addEventListener();var I={};function _(e,t){return function(){return e.apply(t,arguments)}}oh=void 0!==m?m:"undefined"!=typeof window?window:I,ou=function(e){// COMMON: SSR check: begin
if(void 0===e&&void 0===e.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var t,i={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},n={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},o=function(t){return t||(t="head"),null!==e.document[t]||(r('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},s=function(t,i){// check doc head
if(!o("head"))return!1;// internal css
if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}},a=function(){// variables
var e={},t=!1,i=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);i<arguments.length;i++)!function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=a(e[n],i[n]):e[n]=i[n])}(arguments[i]);return e},l=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},c=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,u=function(r,s,c,u){// check doc body
if(!o("body"))return!1;t||f.Notify.init({});// create a backup for new settings
var d=a(!0,t,{});// check callbackOrOptions and options: begin
if("object"==typeof c&&!Array.isArray(c)||"object"==typeof u&&!Array.isArray(u)){// new options
var p={};"object"==typeof c?p=c:"object"==typeof u&&(p=u),// extend new settings with the new options
t=a(!0,t,p)}// check callbackOrOptions and options: end
// notify type
var g=t[r.toLocaleLowerCase("en")];// notify counter
h++,"string"!=typeof s&&(s="Notiflix "+r),t.plainText&&(s=l(s)),!t.plainText&&s.length>t.messageMaxLength&&(// extend settings for error massege
t=a(!0,t,{closeButton:!0,messageMaxLength:150}),// error message
s='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),s.length>t.messageMaxLength&&(s=s.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(g.fontAwesomeIconColor=g.background),t.cssAnimation||(t.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var m=e.document.getElementById(n.wrapID)||e.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(m.id=n.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var y=e.document.getElementById(n.overlayID)||e.document.createElement("div");y.id=n.overlayID,y.style.width="100%",y.style.height="100%",y.style.position="fixed",y.style.zIndex=t.zindex-1,y.style.left=0,y.style.top=0,y.style.right=0,y.style.bottom=0,y.style.background=g.backOverlayColor||t.backOverlayColor,y.className=t.cssAnimation?"nx-with-animation":"",y.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(n.overlayID)||e.document.body.appendChild(y)}e.document.getElementById(n.wrapID)||e.document.body.appendChild(m);// notify wrap: end
// notify content: begin
var v=e.document.createElement("div");v.id=t.ID+"-"+h,v.className=t.className+" "+g.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof c?"nx-with-close-button":"")+" "+("function"==typeof c?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=t.fontSize,v.style.color=g.textColor,v.style.background=g.background,v.style.borderRadius=t.borderRadius,v.style.pointerEvents="all",t.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
v.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(v.style.animationDuration=t.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var w="";// close buttpon element: end
// use icon: begin
if(t.closeButton&&"function"!=typeof c&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+g.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon){// use font awesome
if(t.useFontAwesome)v.innerHTML='<i style="color:'+g.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+g.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+s+"</span>"+(t.closeButton?w:"");else{var b="";r===i.Success?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===i.Failure?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===i.Warning?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===i.Info&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=b+'<span class="nx-message nx-with-icon">'+s+"</span>"+(t.closeButton?w:"")}}else v.innerHTML='<span class="nx-message">'+s+"</span>"+(t.closeButton?w:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(n.wrapID);E.insertBefore(v,E.firstChild)}else e.document.getElementById(n.wrapID).appendChild(v);// notify append or prepend: end
// remove by timeout or click: begin
var I=e.document.getElementById(v.id);if(I){// hide notify elm and hide overlay: begin
var _,T,S=function(){I.classList.add("nx-remove");var t=e.document.getElementById(n.overlayID);t&&m.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(_)},k=function(){if(I&&null!==I.parentNode&&I.parentNode.removeChild(I),m.childElementCount<=0&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(n.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(T)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(t.closeButton&&"function"!=typeof c&&e.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",function(){S();var e=setTimeout(function(){k(),clearTimeout(e)},t.cssAnimationDuration)}),("function"==typeof c||t.clickToClose)&&I.addEventListener("click",function(){"function"==typeof c&&c(),S();var e=setTimeout(function(){k(),clearTimeout(e)},t.cssAnimationDuration)}),!t.closeButton&&"function"!=typeof c){// auto remove: begin
var A=function(){_=setTimeout(function(){S()},t.timeout),T=setTimeout(function(){k()},t.timeout+t.cssAnimationDuration)};A(),t.pauseOnHover&&(I.addEventListener("mouseenter",function(){I.classList.add("nx-paused"),clearTimeout(_),clearTimeout(T)}),I.addEventListener("mouseleave",function(){I.classList.remove("nx-paused"),A()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(t.showOnlyTheLastOne&&h>0)for(var C=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),N=0;N<C.length;N++){var R=C[N];null!==R.parentNode&&R.parentNode.removeChild(R)}// notify - show only the last one: end
// extend new settings with the backup settings
t=a(!0,t,d)},f={Notify:{// Init
init:function(e){// extend options
t=a(!0,n,e),// internal css if exist
s(c,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(e){// if initialized already
if(!t)return r("You have to initialize the Notify module before call Merge function."),!1;t=a(!0,t,e)},// Success
success:function(e,t,n){u(i.Success,e,t,n)},// Failure
failure:function(e,t,n){u(i.Failure,e,t,n)},// Warning
warning:function(e,t,n){u(i.Warning,e,t,n)},// Info
info:function(e,t,n){u(i.Info,e,t,n)}}};return"object"==typeof e.Notiflix?a(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],function(){return ou(oh)}):"object"==typeof I?I=ou(oh):oh.Notiflix=ou(oh);// utils is a library of generic helper functions non-specific to axios
const{toString:T}=Object.prototype,{getPrototypeOf:S}=Object,k=(of=Object.create(null),e=>{let t=T.call(e);return of[t]||(of[t]=t.slice(8,-1).toLowerCase())}),A=e=>(e=e.toLowerCase(),t=>k(t)===e),C=e=>t=>typeof t===e,{isArray:N}=Array,R=C("undefined"),O=A("ArrayBuffer"),x=C("string"),P=C("function"),L=C("number"),D=e=>null!==e&&"object"==typeof e,M=e=>{if("object"!==k(e))return!1;let t=S(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},U=A("Date"),B=A("File"),j=A("Blob"),F=A("FileList"),$=A("URLSearchParams");/**
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
 */function z(e,t,{allOwnKeys:i=!1}={}){let n,r;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),N(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{let r;// Iterate over object keys
let o=i?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;for(n=0;n<s;n++)r=o[n],t.call(null,e[r],r,e)}}}function V(e,t){let i;t=t.toLowerCase();let n=Object.keys(e),r=n.length;for(;r-- >0;)if(t===(i=n[r]).toLowerCase())return i;return null}const H=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:m,q=e=>!R(e)&&e!==H,W=(od="undefined"!=typeof Uint8Array&&S(Uint8Array),e=>od&&e instanceof od),K=A("HTMLFormElement"),G=(({hasOwnProperty:e})=>(t,i)=>e.call(t,i))(Object.prototype),J=A("RegExp"),X=(e,t)=>{let i=Object.getOwnPropertyDescriptors(e),n={};z(i,(i,r)=>{let o;!1!==(o=t(i,r,e))&&(n[r]=o||i)}),Object.defineProperties(e,n)},Y="abcdefghijklmnopqrstuvwxyz",Q="0123456789",Z={DIGIT:Q,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+Q},ee=A("AsyncFunction");var et={isArray:N,isArrayBuffer:O,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!R(e)&&null!==e.constructor&&!R(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||P(e.append)&&("formdata"===(t=k(e))||// detect form-data instance
"object"===t&&P(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&O(e.buffer)},isString:x,isNumber:L,isBoolean:e=>!0===e||!1===e,isObject:D,isPlainObject:M,isUndefined:R,isDate:U,isFile:B,isBlob:j,isRegExp:J,isFunction:P,isStream:e=>D(e)&&P(e.pipe),isURLSearchParams:$,isTypedArray:W,isFileList:F,forEach:z,merge:/**
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
 */function e(){let{caseless:t}=q(this)&&this||{},i={},n=(n,r)=>{let o=t&&V(i,r)||r;M(i[o])&&M(n)?i[o]=e(i[o],n):M(n)?i[o]=e({},n):N(n)?i[o]=n.slice():i[o]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&z(arguments[e],n);return i},extend:(e,t,i,{allOwnKeys:n}={})=>(z(t,(t,n)=>{i&&P(t)?e[n]=_(t,i):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,i,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),i&&Object.assign(e.prototype,i)},toFlatObject:(e,t,i,n)=>{let r,o,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s=r[o],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=!1!==i&&S(e)}while(e&&(!i||i(e,t))&&e!==Object.prototype)return t},kindOf:k,kindOfTest:A,endsWith:(e,t,i)=>{e=String(e),(void 0===i||i>e.length)&&(i=e.length),i-=t.length;let n=e.indexOf(t,i);return -1!==n&&n===i},toArray:e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!L(t))return null;let i=Array(t);for(;t-- >0;)i[t]=e[t];return i},forEachEntry:(e,t)=>{let i;let n=e&&e[Symbol.iterator],r=n.call(e);for(;(i=r.next())&&!i.done;){let n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let i;let n=[];for(;null!==(i=e.exec(t));)n.push(i);return n},isHTMLForm:K,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:X,freezeMethods:e=>{X(e,(t,i)=>{// skip restricted props in strict mode
if(P(e)&&-1!==["arguments","caller","callee"].indexOf(i))return!1;let n=e[i];if(P(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},toObjectSet:(e,t)=>{let i={};return(e=>{e.forEach(e=>{i[e]=!0})})(N(e)?e:String(e).split(t)),i},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,i){return t.toUpperCase()+i}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:V,global:H,isContextDefined:q,ALPHABET:Z,generateString:(e=16,t=Z.ALPHA_DIGIT)=>{let i="",{length:n}=t;for(;e--;)i+=t[Math.random()*n|0];return i},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&P(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),i=(e,n)=>{if(D(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let r=N(e)?[]:{};return z(e,(e,t)=>{let o=i(e,n+1);R(o)||(r[t]=o)}),t[n]=void 0,r}}return e};return i(e,0)},isAsyncFn:ee,isThenable:e=>e&&(D(e)||P(e))&&P(e.then)&&P(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function ei(e,t,i,n,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),i&&(this.config=i),n&&(this.request=n),r&&(this.response=r)}et.inherits(ei,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:et.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const en=ei.prototype,er={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{er[e]={value:e}}),Object.defineProperties(ei,er),Object.defineProperty(en,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
ei.from=(e,t,i,n,r,o)=>{let s=Object.create(en);return et.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),ei.call(s,e.message,t,i,n,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s},og=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,i=e.length,n=i%3// if we have 1 byte left, pad 2 bytes
,r=[],o=0,s=i-n;o<s;o+=16383// must be multiple of 3
)r.push(function(e,t,i){for(var n,r=[],o=t;o<i;o+=3)r.push(eo[(n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+eo[n>>12&63]+eo[n>>6&63]+eo[63&n]);return r.join("")}(e,o,o+16383>s?s:o+16383));return 1===n?r.push(eo[(t=e[i-1])>>2]+eo[t<<4&63]+"=="):2===n&&r.push(eo[(t=(e[i-2]<<8)+e[i-1])>>10]+eo[t>>4&63]+eo[t<<2&63]+"="),r.join("")};for(var eo=[],es=[],ea="undefined"!=typeof Uint8Array?Uint8Array:Array,el="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ec=0,eh=el.length;ec<eh;++ec)eo[ec]=el[ec],es[el.charCodeAt(ec)]=ec;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
es["-".charCodeAt(0)]=62,es["_".charCodeAt(0)]=63,om=function(e,t,i,n,r){var o,s,a=8*r-n-1,l=(1<<a)-1,c=l>>1,h=-7,u=i?r-1:0,f=i?-1:1,d=e[t+u];for(u+=f,o=d&(1<<-h)-1,d>>=-h,h+=a;h>0;o=256*o+e[t+u],u+=f,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+e[t+u],u+=f,h-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:(d?-1:1)*(1/0);s+=Math.pow(2,n),o-=c}return(d?-1:1)*s*Math.pow(2,o-n)},oy=function(e,t,i,n,r,o){var s,a,l,c=8*o-r-1,h=(1<<c)-1,u=h>>1,f=23===r?5960464477539062e-23:0,d=n?0:o-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=h):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+u>=1?t+=f/l:t+=f*Math.pow(2,1-u),t*l>=2&&(s++,l/=2),s+u>=h?(a=0,s=h):s+u>=1?(a=(t*l-1)*Math.pow(2,r),s+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,r),s=0));r>=8;e[i+d]=255&a,d+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;e[i+d]=255&s,d+=p,s/=256,c-=8);e[i+d-p]|=128*g};const eu="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function ef(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,ed.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function ed(e,t,i){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return em(e)}return ep(e,t,i)}function ep(e,t,i){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ed.isEncoding(t))throw TypeError("Unknown encoding: "+t);let i=0|eb(e,t),n=ef(i),r=n.write(e,t);return r!==i&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,r)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(eV(e,Uint8Array)){let t=new Uint8Array(e);return ev(t.buffer,t.byteOffset,t.byteLength)}return ey(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(eV(e,ArrayBuffer)||e&&eV(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(eV(e,SharedArrayBuffer)||e&&eV(e.buffer,SharedArrayBuffer)))return ev(e,t,i);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return ed.from(n,t,i);let r=function(e){var t;if(ed.isBuffer(e)){let t=0|ew(e.length),i=ef(t);return 0===i.length||e.copy(i,0,0,t),i}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?ef(0):ey(e):"Buffer"===e.type&&Array.isArray(e.data)?ey(e.data):void 0}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ed.from(e[Symbol.toPrimitive]("string"),t,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function eg(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function em(e){return eg(e),ef(e<0?0:0|ew(e))}function ey(e){let t=e.length<0?0:0|ew(e.length),i=ef(t);for(let n=0;n<t;n+=1)i[n]=255&e[n];return i}function ev(e,t,i){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(i||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===i?new Uint8Array(e):void 0===i?new Uint8Array(e,t):new Uint8Array(e,t,i),ed.prototype),n)}function ew(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function eb(e,t){if(ed.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||eV(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let i=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===i)return 0;// Use a for loop to avoid recursion
let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return eF(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return e$(e).length;default:if(r)return n?-1:eF(e).length// assume utf8
;t=(""+t).toLowerCase(),r=!0}}function eE(e,t,i){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(i>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,i){let n=e.length;(!t||t<0)&&(t=0),(!i||i<0||i>n)&&(i=n);let r="";for(let n=t;n<i;++n)r+=eH[e[n]];return r}(this,t,i);case"utf8":case"utf-8":return eS(this,t,i);case"ascii":return function(e,t,i){let n="";i=Math.min(e.length,i);for(let r=t;r<i;++r)n+=String.fromCharCode(127&e[r]);return n}(this,t,i);case"latin1":case"binary":return function(e,t,i){let n="";i=Math.min(e.length,i);for(let r=t;r<i;++r)n+=String.fromCharCode(e[r]);return n}(this,t,i);case"base64":var r,o;return r=t,o=i,0===r&&o===this.length?og(this):og(this.slice(r,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,i){let n=e.slice(t,i),r="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<n.length-1;e+=2)r+=String.fromCharCode(n[e]+256*n[e+1]);return r}(this,t,i);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function eI(e,t,i){let n=e[t];e[t]=e[i],e[i]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function e_(e,t,i,n,r){var o;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof i?(n=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),(o=i=+i// Coerce to Number.
)!=o&&(i=r?0:e.length-1),i<0&&(i=e.length+i),i>=e.length){if(r)return -1;i=e.length-1}else if(i<0){if(!r)return -1;i=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=ed.from(t,n)),ed.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:eT(e,t,i,n,r));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(e,t,i):Uint8Array.prototype.lastIndexOf.call(e,t,i):eT(e,[t],i,n,r);throw TypeError("val must be string, number or Buffer")}function eT(e,t,i,n,r){let o,s=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,l/=2,i/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let n=-1;for(o=i;o<a;o++)if(c(e,o)===c(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===l)return n*s}else -1!==n&&(o-=o-n),n=-1}else for(i+l>a&&(i=a-l),o=i;o>=0;o--){let i=!0;for(let n=0;n<l;n++)if(c(e,o+n)!==c(t,n)){i=!1;break}if(i)return o}return -1}function eS(e,t,i){i=Math.min(e.length,i);let n=[],r=t;for(;r<i;){let t=e[r],o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=i){let i,n,a,l;switch(s){case 1:t<128&&(o=t);break;case 2:(192&(i=e[r+1]))==128&&(l=(31&t)<<6|63&i)>127&&(o=l);break;case 3:i=e[r+1],n=e[r+2],(192&i)==128&&(192&n)==128&&(l=(15&t)<<12|(63&i)<<6|63&n)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:i=e[r+1],n=e[r+2],a=e[r+3],(192&i)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&i)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(o=l)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,s=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),r+=s}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let i="",n=0;for(;n<t;)i+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return i}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function ek(e,t,i){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>i)throw RangeError("Trying to access beyond buffer length")}function eA(e,t,i,n,r,o){if(!ed.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw RangeError('"value" argument is out of bounds');if(i+n>e.length)throw RangeError("Index out of range")}function eC(e,t,i,n,r){eM(t,n,r,e,i,7);let o=Number(t&BigInt(4294967295));e[i++]=o,o>>=8,e[i++]=o,o>>=8,e[i++]=o,o>>=8,e[i++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[i++]=s,s>>=8,e[i++]=s,s>>=8,e[i++]=s,s>>=8,e[i++]=s,i}function eN(e,t,i,n,r){eM(t,n,r,e,i,7);let o=Number(t&BigInt(4294967295));e[i+7]=o,o>>=8,e[i+6]=o,o>>=8,e[i+5]=o,o>>=8,e[i+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[i+3]=s,s>>=8,e[i+2]=s,s>>=8,e[i+1]=s,s>>=8,e[i]=s,i+8}function eR(e,t,i,n,r,o){if(i+n>e.length||i<0)throw RangeError("Index out of range")}function eO(e,t,i,n,r){return t=+t,i>>>=0,r||eR(e,t,i,4,34028234663852886e22,-34028234663852886e22),oy(e,t,i,n,23,4),i+4}function ex(e,t,i,n,r){return t=+t,i>>>=0,r||eR(e,t,i,8,17976931348623157e292,-17976931348623157e292),oy(e,t,i,n,52,8),i+8}/**
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
 */ed.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ed.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ed.prototype,"parent",{enumerable:!0,get:function(){if(ed.isBuffer(this))return this.buffer}}),Object.defineProperty(ed.prototype,"offset",{enumerable:!0,get:function(){if(ed.isBuffer(this))return this.byteOffset}}),ed.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ed.from=function(e,t,i){return ep(e,t,i)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(ed.prototype,Uint8Array.prototype),Object.setPrototypeOf(ed,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ed.alloc=function(e,t,i){return(eg(e),e<=0)?ef(e):void 0!==t?"string"==typeof i?ef(e).fill(t,i):ef(e).fill(t):ef(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ed.allocUnsafe=function(e){return em(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ed.allocUnsafeSlow=function(e){return em(e)},ed.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ed.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},ed.compare=function(e,t){if(eV(e,Uint8Array)&&(e=ed.from(e,e.offset,e.byteLength)),eV(t,Uint8Array)&&(t=ed.from(t,t.offset,t.byteLength)),!ed.isBuffer(e)||!ed.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let r=0,o=Math.min(i,n);r<o;++r)if(e[r]!==t[r]){i=e[r],n=t[r];break}return i<n?-1:n<i?1:0},ed.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ed.concat=function(e,t){let i;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ed.alloc(0);if(void 0===t)for(i=0,t=0;i<e.length;++i)t+=e[i].length;let n=ed.allocUnsafe(t),r=0;for(i=0;i<e.length;++i){let t=e[i];if(eV(t,Uint8Array))r+t.length>n.length?(ed.isBuffer(t)||(t=ed.from(t)),t.copy(n,r)):Uint8Array.prototype.set.call(n,t,r);else if(ed.isBuffer(t))t.copy(n,r);else throw TypeError('"list" argument must be an Array of Buffers');r+=t.length}return n},ed.byteLength=eb,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
ed.prototype._isBuffer=!0,ed.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)eI(this,t,t+1);return this},ed.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)eI(this,t,t+3),eI(this,t+1,t+2);return this},ed.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)eI(this,t,t+7),eI(this,t+1,t+6),eI(this,t+2,t+5),eI(this,t+3,t+4);return this},ed.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?eS(this,0,e):eE.apply(this,arguments)},ed.prototype.toLocaleString=ed.prototype.toString,ed.prototype.equals=function(e){if(!ed.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ed.compare(this,e)},ed.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},eu&&(ed.prototype[eu]=ed.prototype.inspect),ed.prototype.compare=function(e,t,i,n,r){if(eV(e,Uint8Array)&&(e=ed.from(e,e.offset,e.byteLength)),!ed.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===i&&(i=e?e.length:0),void 0===n&&(n=0),void 0===r&&(r=this.length),t<0||i>e.length||n<0||r>this.length)throw RangeError("out of range index");if(n>=r&&t>=i)return 0;if(n>=r)return -1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,r>>>=0,this===e)return 0;let o=r-n,s=i-t,a=Math.min(o,s),l=this.slice(n,r),c=e.slice(t,i);for(let e=0;e<a;++e)if(l[e]!==c[e]){o=l[e],s=c[e];break}return o<s?-1:s<o?1:0},ed.prototype.includes=function(e,t,i){return -1!==this.indexOf(e,t,i)},ed.prototype.indexOf=function(e,t,i){return e_(this,e,t,i,!0)},ed.prototype.lastIndexOf=function(e,t,i){return e_(this,e,t,i,!1)},ed.prototype.write=function(e,t,i,n){var r,o,s,a,l,c,h,u;// Buffer#write(string)
if(void 0===t)n="utf8",i=this.length,t=0;else if(void 0===i&&"string"==typeof t)n=t,i=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(i)?(i>>>=0,void 0===n&&(n="utf8")):(n=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===i||i>f)&&(i=f),e.length>0&&(i<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let d=!1;for(;;)switch(n){case"hex":return function(e,t,i,n){let r;i=Number(i)||0;let o=e.length-i;n?(n=Number(n))>o&&(n=o):n=o;let s=t.length;for(n>s/2&&(n=s/2),r=0;r<n;++r){let n=parseInt(t.substr(2*r,2),16);if(n!=n)break;e[i+r]=n}return r}(this,e,t,i);case"utf8":case"utf-8":return r=t,o=i,ez(eF(e,this.length-r),this,r,o);case"ascii":case"latin1":case"binary":return s=t,a=i,ez(function(e){let t=[];for(let i=0;i<e.length;++i)t.push(255&e.charCodeAt(i));return t}(e),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,c=i,ez(e$(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,u=i,ez(function(e,t){let i,n;let r=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=(i=e.charCodeAt(o))>>8,r.push(i%256),r.push(n);return r}(e,this.length-h),this,h,u);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},ed.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ed.prototype.slice=function(e,t){let i=this.length;e=~~e,t=void 0===t?i:~~t,e<0?(e+=i)<0&&(e=0):e>i&&(e=i),t<0?(t+=i)<0&&(t=0):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,ed.prototype),n)},ed.prototype.readUintLE=ed.prototype.readUIntLE=function(e,t,i){e>>>=0,t>>>=0,i||ek(e,t,this.length);let n=this[e],r=1,o=0;for(;++o<t&&(r*=256);)n+=this[e+o]*r;return n},ed.prototype.readUintBE=ed.prototype.readUIntBE=function(e,t,i){e>>>=0,t>>>=0,i||ek(e,t,this.length);let n=this[e+--t],r=1;for(;t>0&&(r*=256);)n+=this[e+--t]*r;return n},ed.prototype.readUint8=ed.prototype.readUInt8=function(e,t){return e>>>=0,t||ek(e,1,this.length),this[e]},ed.prototype.readUint16LE=ed.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ek(e,2,this.length),this[e]|this[e+1]<<8},ed.prototype.readUint16BE=ed.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ek(e,2,this.length),this[e]<<8|this[e+1]},ed.prototype.readUint32LE=ed.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ek(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ed.prototype.readUint32BE=ed.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ek(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ed.prototype.readBigUInt64LE=eq(function(e){eU(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eB(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],r=this[++e]+256*this[++e]+65536*this[++e]+16777216*i;return BigInt(n)+(BigInt(r)<<BigInt(32))}),ed.prototype.readBigUInt64BE=eq(function(e){eU(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eB(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],r=16777216*this[++e]+65536*this[++e]+256*this[++e]+i;return(BigInt(n)<<BigInt(32))+BigInt(r)}),ed.prototype.readIntLE=function(e,t,i){e>>>=0,t>>>=0,i||ek(e,t,this.length);let n=this[e],r=1,o=0;for(;++o<t&&(r*=256);)n+=this[e+o]*r;return n>=(r*=128)&&(n-=Math.pow(2,8*t)),n},ed.prototype.readIntBE=function(e,t,i){e>>>=0,t>>>=0,i||ek(e,t,this.length);let n=t,r=1,o=this[e+--n];for(;n>0&&(r*=256);)o+=this[e+--n]*r;return o>=(r*=128)&&(o-=Math.pow(2,8*t)),o},ed.prototype.readInt8=function(e,t){return(e>>>=0,t||ek(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ed.prototype.readInt16LE=function(e,t){e>>>=0,t||ek(e,2,this.length);let i=this[e]|this[e+1]<<8;return 32768&i?4294901760|i:i},ed.prototype.readInt16BE=function(e,t){e>>>=0,t||ek(e,2,this.length);let i=this[e+1]|this[e]<<8;return 32768&i?4294901760|i:i},ed.prototype.readInt32LE=function(e,t){return e>>>=0,t||ek(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ed.prototype.readInt32BE=function(e,t){return e>>>=0,t||ek(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ed.prototype.readBigInt64LE=eq(function(e){eU(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eB(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(i<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),ed.prototype.readBigInt64BE=eq(function(e){eU(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eB(e,this.length-8);let n=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+i)}),ed.prototype.readFloatLE=function(e,t){return e>>>=0,t||ek(e,4,this.length),om(this,e,!0,23,4)},ed.prototype.readFloatBE=function(e,t){return e>>>=0,t||ek(e,4,this.length),om(this,e,!1,23,4)},ed.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ek(e,8,this.length),om(this,e,!0,52,8)},ed.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ek(e,8,this.length),om(this,e,!1,52,8)},ed.prototype.writeUintLE=ed.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t>>>=0,i>>>=0,!n){let n=Math.pow(2,8*i)-1;eA(this,e,t,i,n,0)}let r=1,o=0;for(this[t]=255&e;++o<i&&(r*=256);)this[t+o]=e/r&255;return t+i},ed.prototype.writeUintBE=ed.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t>>>=0,i>>>=0,!n){let n=Math.pow(2,8*i)-1;eA(this,e,t,i,n,0)}let r=i-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+i},ed.prototype.writeUint8=ed.prototype.writeUInt8=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,1,255,0),this[t]=255&e,t+1},ed.prototype.writeUint16LE=ed.prototype.writeUInt16LE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ed.prototype.writeUint16BE=ed.prototype.writeUInt16BE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ed.prototype.writeUint32LE=ed.prototype.writeUInt32LE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ed.prototype.writeUint32BE=ed.prototype.writeUInt32BE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ed.prototype.writeBigUInt64LE=eq(function(e,t=0){return eC(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ed.prototype.writeBigUInt64BE=eq(function(e,t=0){return eN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ed.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*i-1);eA(this,e,t,i,n-1,-n)}let r=0,o=1,s=0;for(this[t]=255&e;++r<i&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+i},ed.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*i-1);eA(this,e,t,i,n-1,-n)}let r=i-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+i},ed.prototype.writeInt8=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ed.prototype.writeInt16LE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ed.prototype.writeInt16BE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ed.prototype.writeInt32LE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ed.prototype.writeInt32BE=function(e,t,i){return e=+e,t>>>=0,i||eA(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ed.prototype.writeBigInt64LE=eq(function(e,t=0){return eC(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ed.prototype.writeBigInt64BE=eq(function(e,t=0){return eN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ed.prototype.writeFloatLE=function(e,t,i){return eO(this,e,t,!0,i)},ed.prototype.writeFloatBE=function(e,t,i){return eO(this,e,t,!1,i)},ed.prototype.writeDoubleLE=function(e,t,i){return ex(this,e,t,!0,i)},ed.prototype.writeDoubleBE=function(e,t,i){return ex(this,e,t,!1,i)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
ed.prototype.copy=function(e,t,i,n){if(!ed.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(i||(i=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let r=n-i;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),r},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
ed.prototype.fill=function(e,t,i,n){let r;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,i=this.length):"string"==typeof i&&(n=i,i=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ed.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<i)throw RangeError("Out of range index");if(i<=t)return this;if(t>>>=0,i=void 0===i?this.length:i>>>0,e||(e=0),"number"==typeof e)for(r=t;r<i;++r)this[r]=e;else{let o=ed.isBuffer(e)?e:ed.from(e,n),s=o.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<i-t;++r)this[r+t]=o[r%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const eP={};function eL(e,t,i){eP[e]=class extends i{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function eD(e){let t="",i=e.length,n="-"===e[0]?1:0;for(;i>=n+4;i-=3)t=`_${e.slice(i-3,i)}${t}`;return`${e.slice(0,i)}${t}`}function eM(e,t,i,n,r,o){if(e>i||e<t){let n;let r="bigint"==typeof t?"n":"";throw n=o>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${(o+1)*8}${r}`:`>= -(2${r} ** ${(o+1)*8-1}${r}) and < 2 ** ${(o+1)*8-1}${r}`:`>= ${t}${r} and <= ${i}${r}`,new eP.ERR_OUT_OF_RANGE("value",n,e)}eU(r,"offset"),(void 0===n[r]||void 0===n[r+o])&&eB(r,n.length-(o+1))}function eU(e,t){if("number"!=typeof e)throw new eP.ERR_INVALID_ARG_TYPE(t,"number",e)}function eB(e,t,i){if(Math.floor(e)!==e)throw eU(e,i),new eP.ERR_OUT_OF_RANGE(i||"offset","an integer",e);if(t<0)throw new eP.ERR_BUFFER_OUT_OF_BOUNDS;throw new eP.ERR_OUT_OF_RANGE(i||"offset",`>= ${i?1:0} and <= ${t}`,e)}eL("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),eL("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),eL("ERR_OUT_OF_RANGE",function(e,t,i){let n=`The value of "${e}" is out of range.`,r=i;return Number.isInteger(i)&&Math.abs(i)>4294967296?r=eD(String(i)):"bigint"==typeof i&&(r=String(i),(i>BigInt(2)**BigInt(32)||i<-(BigInt(2)**BigInt(32)))&&(r=eD(r)),r+="n"),n+=` It must be ${t}. Received ${r}`},RangeError);// HELPER FUNCTIONS
// ================
const ej=/[^+/0-9A-Za-z-_]/g;function eF(e,t){let i;t=t||1/0;let n=e.length,r=null,o=[];for(let s=0;s<n;++s){// is surrogate component
if((i=e.charCodeAt(s))>55295&&i<57344){// last char was a lead
if(!r){// no lead yet
if(i>56319||s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}// valid lead
r=i;continue}// 2 leads in a row
if(i<56320){(t-=3)>-1&&o.push(239,191,189),r=i;continue}// valid surrogate pair
i=(r-55296<<10|i-56320)+65536}else r&&(t-=3)>-1&&o.push(239,191,189);// encode utf8
if(r=null,i<128){if((t-=1)<0)break;o.push(i)}else if(i<2048){if((t-=2)<0)break;o.push(i>>6|192,63&i|128)}else if(i<65536){if((t-=3)<0)break;o.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((t-=4)<0)break;o.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return o}function e$(e){return function(e){var t,i,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var i=e.indexOf("=");-1===i&&(i=t);var n=i===t?0:4-i%4;return[i,n]}(e),r=n[0],o=n[1],s=new ea((r+o)*3/4-o),a=0,l=o>0?r-4:r;for(i=0;i<l;i+=4)t=es[e.charCodeAt(i)]<<18|es[e.charCodeAt(i+1)]<<12|es[e.charCodeAt(i+2)]<<6|es[e.charCodeAt(i+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===o&&(t=es[e.charCodeAt(i)]<<2|es[e.charCodeAt(i+1)]>>4,s[a++]=255&t),1===o&&(t=es[e.charCodeAt(i)]<<10|es[e.charCodeAt(i+1)]<<4|es[e.charCodeAt(i+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(ej,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function ez(e,t,i,n){let r;for(r=0;r<n&&!(r+i>=t.length)&&!(r>=e.length);++r)t[r+i]=e[r];return r}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function eV(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const eH=function(){let e="0123456789abcdef",t=Array(256);for(let i=0;i<16;++i){let n=16*i;for(let r=0;r<16;++r)t[n+r]=e[i]+e[r]}return t}();// Return not function with Error if BigInt not supported
function eq(e){return"undefined"==typeof BigInt?eW:e}function eW(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function eK(e){return et.isPlainObject(e)||et.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function eG(e){return et.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function eJ(e,t,i){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=eG(e),!i&&t?"["+e+"]":e)}).join(i?".":""):t}const eX=et.toFlatObject(et,{},null,function(e){return/^is[A-Z]/.test(e)});var eY=/**
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
 */function(e,t,i){if(!et.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
i=et.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!et.isUndefined(t[e])});let n=i.metaTokens,r=i.visitor||h,o=i.dots,s=i.indexes,a=i.Blob||"undefined"!=typeof Blob&&Blob,l=a&&et.isSpecCompliantForm(t);if(!et.isFunction(r))throw TypeError("visitor must be a function");function c(e){if(null===e)return"";if(et.isDate(e))return e.toISOString();if(!l&&et.isBlob(e))throw new ei("Blob is not supported. Use a Buffer instead.");return et.isArrayBuffer(e)||et.isTypedArray(e)?l&&"function"==typeof Blob?new Blob([e]):ed.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function h(e,i,r){let a=e;if(e&&!r&&"object"==typeof e){if(et.endsWith(i,"{}"))// eslint-disable-next-line no-param-reassign
i=n?i:i.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var l;if(et.isArray(e)&&(l=e,et.isArray(l)&&!l.some(eK))||(et.isFileList(e)||et.endsWith(i,"[]"))&&(a=et.toArray(e)))return(// eslint-disable-next-line no-param-reassign
i=eG(i),a.forEach(function(e,n){et.isUndefined(e)||null===e||t.append(!0===s?eJ([i],n,o):null===s?i:i+"[]",c(e))}),!1)}}return!!eK(e)||(t.append(eJ(r,i,o),c(e)),!1)}let u=[],f=Object.assign(eX,{defaultVisitor:h,convertValue:c,isVisitable:eK});if(!et.isObject(e))throw TypeError("data must be an object");return!function e(i,n){if(!et.isUndefined(i)){if(-1!==u.indexOf(i))throw Error("Circular reference detected in "+n.join("."));u.push(i),et.forEach(i,function(i,o){let s=!(et.isUndefined(i)||null===i)&&r.call(t,i,et.isString(o)?o.trim():o,n,f);!0===s&&e(i,n?n.concat(o):[o])}),u.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function eQ(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function eZ(e,t){this._pairs=[],e&&eY(e,this,t)}const e0=eZ.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function e1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function e2(e,t,i){let n;/*eslint no-param-reassign:0*/if(!t)return e;let r=i&&i.encode||e1,o=i&&i.serialize;if(n=o?o(t,i):et.isURLSearchParams(t)?t.toString():new eZ(t,i).toString(r)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}e0.append=function(e,t){this._pairs.push([e,t])},e0.toString=function(e){let t=e?function(t){return e.call(this,t,eQ)}:eQ;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var e9=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!i&&i.synchronous,runWhen:i?i.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}/**
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
   */forEach(e){et.forEach(this.handlers,function(t){null!==t&&e(t)})}},e4={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},e5="undefined"!=typeof URLSearchParams?URLSearchParams:eZ,e6="undefined"!=typeof FormData?FormData:null,e3="undefined"!=typeof Blob?Blob:null;/**
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
 */const e8=("undefined"==typeof navigator||"ReactNative"!==(l=navigator.product)&&"NativeScript"!==l&&"NS"!==l)&&"undefined"!=typeof window&&"undefined"!=typeof document,e7="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var te={classes:{URLSearchParams:e5,FormData:e6,Blob:e3},isStandardBrowserEnv:e8,isStandardBrowserWebWorkerEnv:e7,protocols:["http","https","file","blob","url","data"]},tt=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(et.isFormData(e)&&et.isFunction(e.entries)){let t={};return et.forEachEntry(e,(e,i)=>{!function e(t,i,n,r){let o=t[r++],s=Number.isFinite(+o),a=r>=t.length;if(o=!o&&et.isArray(n)?n.length:o,a)return et.hasOwnProp(n,o)?n[o]=[n[o],i]:n[o]=i,!s;n[o]&&et.isObject(n[o])||(n[o]=[]);let l=e(t,i,n[o],r);return l&&et.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,i;let n={},r=Object.keys(e),o=r.length;for(t=0;t<o;t++)n[i=r[t]]=e[i];return n}(n[o])),!s}(et.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),i,t,0)}),t}return null};const ti={transitional:e4,adapter:te.isNode?"http":"xhr",transformRequest:[function(e,t){let i;let n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=et.isObject(e);o&&et.isHTMLForm(e)&&(e=new FormData(e));let s=et.isFormData(e);if(s)return r&&r?JSON.stringify(tt(e)):e;if(et.isArrayBuffer(e)||et.isBuffer(e)||et.isStream(e)||et.isFile(e)||et.isBlob(e))return e;if(et.isArrayBufferView(e))return e.buffer;if(et.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,l;return(a=e,l=this.formSerializer,eY(a,new te.classes.URLSearchParams,Object.assign({visitor:function(e,t,i,n){return te.isNode&&et.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},l))).toString()}if((i=et.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return eY(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,i){if(et.isString(e))try{return(0,JSON.parse)(e),et.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||ti.transitional,i=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&et.isString(e)&&(i&&!this.responseType||n)){let i=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!i&&n){if("SyntaxError"===e.name)throw ei.from(e,ei.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:te.classes.FormData,Blob:te.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};et.forEach(["delete","get","head","post","put","patch"],e=>{ti.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const tn=et.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */tr=e=>{let t,i,n;let r={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),i=e.substring(n+1).trim(),!t||r[t]&&tn[t]||("set-cookie"===t?r[t]?r[t].push(i):r[t]=[i]:r[t]=r[t]?r[t]+", "+i:i)}),r};const to=Symbol("internals");function ts(e){return e&&String(e).trim().toLowerCase()}function ta(e){return!1===e||null==e?e:et.isArray(e)?e.map(ta):String(e)}const tl=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tc(e,t,i,n,r){if(et.isFunction(n))return n.call(this,t,i);if(r&&(t=i),et.isString(t)){if(et.isString(n))return -1!==t.indexOf(n);if(et.isRegExp(n))return n.test(t)}}class th{constructor(e){e&&this.set(e)}set(e,t,i){let n=this;function r(e,t,i){let r=ts(t);if(!r)throw Error("header name must be a non-empty string");let o=et.findKey(n,r);o&&void 0!==n[o]&&!0!==i&&(void 0!==i||!1===n[o])||(n[o||t]=ta(e))}let o=(e,t)=>et.forEach(e,(e,i)=>r(e,i,t));return et.isPlainObject(e)||e instanceof this.constructor?o(e,t):et.isString(e)&&(e=e.trim())&&!tl(e)?o(tr(e),t):null!=e&&r(t,e,i),this}get(e,t){if(e=ts(e)){let i=et.findKey(this,e);if(i){let e=this[i];if(!t)return e;if(!0===t)return function(e){let t;let i=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)i[t[1]]=t[2];return i}(e);if(et.isFunction(t))return t.call(this,e,i);if(et.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ts(e)){let i=et.findKey(this,e);return!!(i&&void 0!==this[i]&&(!t||tc(this,this[i],i,t)))}return!1}delete(e,t){let i=this,n=!1;function r(e){if(e=ts(e)){let r=et.findKey(i,e);r&&(!t||tc(i,i[r],r,t))&&(delete i[r],n=!0)}}return et.isArray(e)?e.forEach(r):r(e),n}clear(e){let t=Object.keys(this),i=t.length,n=!1;for(;i--;){let r=t[i];(!e||tc(this,this[r],r,e,!0))&&(delete this[r],n=!0)}return n}normalize(e){let t=this,i={};return et.forEach(this,(n,r)=>{let o=et.findKey(i,r);if(o){t[o]=ta(n),delete t[r];return}let s=e?r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i):String(r).trim();s!==r&&delete t[r],t[s]=ta(n),i[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return et.forEach(this,(i,n)=>{null!=i&&!1!==i&&(t[n]=e&&et.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let i=new this(e);return t.forEach(e=>i.set(e)),i}static accessor(e){let t=this[to]=this[to]={accessors:{}},i=t.accessors,n=this.prototype;function r(e){let t=ts(e);i[t]||(!function(e,t){let i=et.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+i,{value:function(e,i,r){return this[n].call(this,t,e,i,r)},configurable:!0})})}(n,e),i[t]=!0)}return et.isArray(e)?e.forEach(r):r(e),this}}function tu(e,t){let i=this||ti,n=t||i,r=th.from(n.headers),o=n.data;return et.forEach(e,function(e){o=e.call(i,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function tf(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function td(e,t,i){ei.call(this,null==e?"canceled":e,ei.ERR_CANCELED,t,i),this.name="CanceledError"}th.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),et.reduceDescriptors(th.prototype,({value:e},t)=>{let i=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[i]=e}}}),et.freezeMethods(th),et.inherits(td,ei,{__CANCEL__:!0});var tp=te.isStandardBrowserEnv?{write:function(e,t,i,n,r,o){let s=[];s.push(e+"="+encodeURIComponent(t)),et.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),et.isString(n)&&s.push("path="+n),et.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function tg(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var tm=te.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(e){let n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
i.setAttribute("href",n),n=i.href),i.setAttribute("href",n),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=n(window.location.href),function(t){let i=et.isString(t)?n(t):t;return i.protocol===e.protocol&&i.host===e.host}}():function(){return!0},ty=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let i;e=e||10;let n=Array(e),r=Array(e),o=0,s=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),c=r[s];i||(i=l),n[o]=a,r[o]=l;let h=s,u=0;for(;h!==o;)u+=n[h++],h%=e;if((o=(o+1)%e)===s&&(s=(s+1)%e),l-i<t)return;let f=c&&l-c;return f?Math.round(1e3*u/f):void 0}};function tv(e,t){let i=0,n=ty(50,250);return r=>{let o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-i,l=n(a),c=o<=s;i=o;let h={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-o)/l:void 0,event:r};h[t?"download":"upload"]=!0,e(h)}}const tw="undefined"!=typeof XMLHttpRequest;var tb=tw&&function(e){return new Promise(function(t,i){let n,r=e.data,o=th.from(e.headers).normalize(),s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}et.isFormData(r)&&(te.isStandardBrowserEnv||te.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+i))}let c=tg(e.baseURL,e.url);function h(){if(!l)return;// Prepare the response
let n=th.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),r=s&&"text"!==s&&"json"!==s?l.response:l.responseText,o={data:r,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};!function(e,t,i){let n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new ei("Request failed with status code "+i.status,[ei.ERR_BAD_REQUEST,ei.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}(function(e){t(e),a()},function(e){i(e),a()},o),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(e.method.toUpperCase(),e2(c,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=e.timeout,"onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(h)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(i(new ei("Request aborted",ei.ECONNABORTED,e,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
i(new ei("Network Error",ei.ERR_NETWORK,e,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||e4;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),i(new ei(t,n.clarifyTimeoutError?ei.ETIMEDOUT:ei.ECONNABORTED,e,l)),// Clean up request
l=null},te.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||tm(c))&&e.xsrfCookieName&&tp.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===r&&o.setContentType(null),"setRequestHeader"in l&&et.forEach(o.toJSON(),function(e,t){l.setRequestHeader(t,e)}),et.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",tv(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",tv(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{l&&(i(!t||t.type?new td(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let u=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(c);if(u&&-1===te.protocols.indexOf(u)){i(new ei("Unsupported protocol "+u+":",ei.ERR_BAD_REQUEST,e));return}// Send the request
l.send(r||null)})};const tE={http:null,xhr:tb};et.forEach(tE,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});var tI={getAdapter:e=>{let t,i;e=et.isArray(e)?e:[e];let{length:n}=e;for(let r=0;r<n&&(t=e[r],!(i=et.isString(t)?tE[t.toLowerCase()]:t));r++);if(!i){if(!1===i)throw new ei(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(et.hasOwnProp(tE,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`)}if(!et.isFunction(i))throw TypeError("adapter is not a function");return i},adapters:tE};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function t_(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new td(null,e)}function tT(e){t_(e),e.headers=th.from(e.headers),// Transform request data
e.data=tu.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=tI.getAdapter(e.adapter||ti.adapter);return t(e).then(function(t){return t_(e),// Transform response data
t.data=tu.call(e,e.transformResponse,t),t.headers=th.from(t.headers),t},function(t){return!tf(t)&&(t_(e),t&&t.response&&(t.response.data=tu.call(e,e.transformResponse,t.response),t.response.headers=th.from(t.response.headers))),Promise.reject(t)})}const tS=e=>e instanceof th?e.toJSON():e;function tk(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let i={};function n(e,t,i){return et.isPlainObject(e)&&et.isPlainObject(t)?et.merge.call({caseless:i},e,t):et.isPlainObject(t)?et.merge({},t):et.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function r(e,t,i){return et.isUndefined(t)?et.isUndefined(e)?void 0:n(void 0,e,i):n(e,t,i)}// eslint-disable-next-line consistent-return
function o(e,t){if(!et.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function s(e,t){return et.isUndefined(t)?et.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function a(i,r,o){return o in t?n(i,r):o in e?n(void 0,i):void 0}let l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(tS(e),tS(t),!0)};return et.forEach(Object.keys(Object.assign({},e,t)),function(n){let o=l[n]||r,s=o(e[n],t[n],n);et.isUndefined(s)&&o!==a||(i[n]=s)}),i}const tA="1.5.0",tC={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tC[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const tN={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */tC.transitional=function(e,t,i){function n(e,t){return"[Axios v"+tA+"] Transitional option '"+e+"'"+t+(i?". "+i:"")}// eslint-disable-next-line func-names
return(i,r,o)=>{if(!1===e)throw new ei(n(r," has been removed"+(t?" in "+t:"")),ei.ERR_DEPRECATED);return t&&!tN[r]&&(tN[r]=!0,// eslint-disable-next-line no-console
console.warn(n(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(i,r,o)}};var tR={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,i){if("object"!=typeof e)throw new ei("options must be an object",ei.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),r=n.length;for(;r-- >0;){let o=n[r],s=t[o];if(s){let t=e[o],i=void 0===t||s(t,o,e);if(!0!==i)throw new ei("option "+o+" must be "+i,ei.ERR_BAD_OPTION_VALUE);continue}if(!0!==i)throw new ei("Unknown option "+o,ei.ERR_BAD_OPTION)}},validators:tC};const tO=tR.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class tx{constructor(e){this.defaults=e,this.interceptors={request:new e9,response:new e9}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let i,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=tk(this.defaults,t);let{transitional:r,paramsSerializer:o,headers:s}=t;void 0!==r&&tR.assertOptions(r,{silentJSONParsing:tO.transitional(tO.boolean),forcedJSONParsing:tO.transitional(tO.boolean),clarifyTimeoutError:tO.transitional(tO.boolean)},!1),null!=o&&(et.isFunction(o)?t.paramsSerializer={serialize:o}:tR.assertOptions(o,{encode:tO.function,serialize:tO.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&et.merge(s.common,s[t.method]);s&&et.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=th.concat(a,s);// filter out skipped interceptors
let l=[],c=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(c=c&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let h=[];this.interceptors.response.forEach(function(e){h.push(e.fulfilled,e.rejected)});let u=0;if(!c){let e=[tT.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,h),n=e.length,i=Promise.resolve(t);u<n;)i=i.then(e[u++],e[u++]);return i}n=l.length;let f=t;for(u=0;u<n;){let e=l[u++],t=l[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{i=tT.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,n=h.length;u<n;)i=i.then(h[u++],h[u++]);return i}getUri(e){e=tk(this.defaults,e);let t=tg(e.baseURL,e.url);return e2(t,e.params,e.paramsSerializer)}}et.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/tx.prototype[e]=function(t,i){return this.request(tk(i||{},{method:e,url:t,data:(i||{}).data}))}}),et.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(i,n,r){return this.request(tk(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:i,data:n}))}}tx.prototype[e]=t(),tx.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class tP{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let i=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!i._listeners)return;let t=i._listeners.length;for(;t-- >0;)i._listeners[t](e);i._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{i.subscribe(e),t=e}).then(e);return n.cancel=function(){i.unsubscribe(t)},n},e(function(e,n,r){i.reason||(i.reason=new td(e,n,r),t(i.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new tP(function(t){e=t});return{token:t,cancel:e}}}const tL={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tL).forEach(([e,t])=>{tL[t]=e});// Create the default instance to be exported
const tD=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let i=new tx(t),n=_(tx.prototype.request,i);return et.extend(n,tx.prototype,i,{allOwnKeys:!0}),et.extend(n,i,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(i){return e(tk(t,i))},n}(ti);// Expose Axios class to allow class inheritance
tD.Axios=tx,// Expose Cancel & CancelToken
tD.CanceledError=td,tD.CancelToken=tP,tD.isCancel=tf,tD.VERSION=tA,tD.toFormData=eY,// Expose AxiosError class
tD.AxiosError=ei,// alias for CanceledError for backward compatibility
tD.Cancel=tD.CanceledError,// Expose all/spread
tD.all=function(e){return Promise.all(e)},tD.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
tD.isAxiosError=function(e){return et.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
tD.mergeConfig=tk,tD.AxiosHeaders=th,tD.formToJSON=e=>tt(et.isHTMLForm(e)?new FormData(e):e),tD.getAdapter=tI.getAdapter,tD.HttpStatusCode=tL,tD.default=tD;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:tM,AxiosError:tU,CanceledError:tB,isCancel:tj,CancelToken:tF,VERSION:t$,all:tz,Cancel:tV,isAxiosError:tH,spread:tq,toFormData:tW,AxiosHeaders:tK,HttpStatusCode:tG,formToJSON:tJ,getAdapter:tX,mergeConfig:tY}=tD;async function tQ(e){try{let t=await tD.get("https://books-backend.p.goit.global/books/"+e);return t.data}catch(e){console.error("An error occurred while fetching data:",e)}}async function tZ(){let{data:e}=await tD.get("https://books-backend.p.goit.global/books/category-list");return e}const t0=document.querySelector(".categories-list");(async function e(){try{let e=await tZ();if(!e.length){(0,I.Notify).failure("Oops something going wrong.");return}t0.insertAdjacentHTML("beforeend",e.map(({list_name:e})=>`
    <li class="categories-list-item">
      <a href="#" class="categories-link">${e}</a>
    </li>
  `).join(""))}catch(e){console.log("TRY-CATCH:",e),(0,I.Notify).failure("Oops something going wrong.")}})(),t0.addEventListener("click",e=>{e.preventDefault()}),b("fewGv");var t1=b("7Y9D8");const t2=(e,t)=>{try{let i=JSON.stringify(t);localStorage.setItem(e,i)}catch(e){(0,t1.Notify).error("Set state error: ",e.message)}},t9=e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){(0,t1.Notify).error("Get state error: ",e.message)}};var t1=b("7Y9D8");!function(){let e=document.querySelector(".loader");e.style.display="block"}();const t4=document.querySelector(".common-list"),t5=document.querySelector(".main-title"),t6=document.querySelector(".categories-list");let t3=window.innerWidth<767?1:window.innerWidth<1439?3:5;function t8(e){let t=function(e){let t=[...e];for(let e=t.length-1;e>0;e--){let i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}(e);!function(){let e=document.querySelector(".loader");e.style.display="none"}();let i="";for(let e of(t5.textContent="Best Sellers",t5.insertAdjacentHTML("beforeend",'&nbsp;<span class="main-title main-title-wrapper">Books</span>'),t)){let{books:t,list_name:n}=e;i+=` 
        <li class="common-item">
        <h2 class="common-title">${n}</h2>
        <ul class="book-list">
            ${function(e,t){let i="";for(let n=0;n<t;n+=1){let{book_image:t,title:r,author:o,_id:s}=e[n];i+=`
              <li class="book-item" data-id="${s}" tabindex="0">
              <div class="thumb" data-id="${s}">
              <img src="${t||"../images/default_image.png"}" alt="${r}" class="book-img" data-id="${s}">
              <p class="notifications" data-id="${s}">quick view</p>
              </div> 
              <h3 class="book-title" data-id="${s}">${r}</h3>
              <p class="book-author" data-id="${s}">${o}</p>
              </li>
            `}return i}(t,t3)}
        </ul>
        <button type="button" class="showMore-btn" name="${n}">see more</button>
    </li>`}t4.innerHTML=i}t6.firstElementChild.addEventListener("click",function(){let e=t9("data");t8(e)}),window.addEventListener("resize",function(){let e=window.innerWidth<767?1:window.innerWidth<1439?3:5;if(e!=t3){t3=e;let t=t9("data");t8(t)}}),tQ("top-books").then(e=>{t2("data",e),t8(e)}).catch(e=>(0,t1.Notify).failure(e));var t1=b("7Y9D8");const t7={categories:document.querySelector(".categories-list"),title:document.querySelector(".main-title"),list:document.querySelector(".common-list")},ie="Sorry, there are no books matching the selected category. Please select something else.",it="Sorry, something went wrong. Try again!";t7.categories.addEventListener("click",function(e){"categories-link"===e.target.className&&(ih(e.target),ii=e.target.textContent.replaceAll(" ","%20"),e.target!==t7.categories.firstElementChild.firstElementChild&&is(ii).then(e=>{if(0===e.data.length)throw Error((0,t1.Notify).info(ie));let t=e.data[0].list_name;t7.title.textContent=il(t),t7.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${ic(t)}</span>`),t7.list.innerHTML=ia(e.data)}).catch(function(e){e.response?(0,t1.Notify).failure(it):e.request&&(0,t1.Notify).failure(it)}))}),t7.list.addEventListener("click",function(e){if("showMore-btn"!==e.target.className)return;ir=e.target.name.replaceAll(" ","%20");let t=Array.from(t7.categories.children);t.forEach(e=>{let t=e.firstElementChild.textContent.replaceAll(" ","%20");t===ir&&ih(e)}),is(ir).then(e=>{if(0===e.data.length)throw Error((0,t1.Notify).info(ie));let t=e.data[0].list_name;t7.title.textContent=il(t),t7.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${ic(t)}</span>`),t7.list.innerHTML=ia(e.data)}).catch(function(e){e.response?(0,t1.Notify).failure(it):e.request&&(0,t1.Notify).failure(it)})});let ii="",ir="",io=t7.categories.firstElementChild.firstElementChild;async function is(e){let t=`https://books-backend.p.goit.global/books/category?category=${e}`,i=await tD.get(t);return i}function ia(e){return e.map(({book_image:e,author:t,title:i,_id:n})=>{let r=`<li class="book-item" data-id="${n}" tabindex="0">
              <div class="thumb" data-id="${n}">
              <img src="${e||"../images/default_image.png"}" alt="${i}" class="book-img" data-id="${n}">
              <p class="notifications" data-id="${n}">quick view</p>
              </div> 
              <h3 class="book-title" data-id="${n}">${i}</h3>
              <p class="book-author" data-id="${n}">${t}</p>
              </li>`;return r}).join("")}function il(e){let t=e.split(" ");return t.splice(0,t.length-1).join(" ")}function ic(e){let t=e.split(" ");return t[t.length-1]}function ih(e){io&&io.classList.remove("category-active"),e.classList.add("category-active"),io=e}ih(io);var iu={};iu=new URL(b("kyEFX").resolve("8XY7q"),import.meta.url).toString();var id={};id=new URL(b("kyEFX").resolve("3WxNb"),import.meta.url).toString();var ip={};ip=new URL(b("kyEFX").resolve("lJIFT"),import.meta.url).toString();//!------------------------------------------
const ig=document.querySelector(".common-list"),im=document.querySelector(".modal__content"),iy=document.querySelector("#book-modal"),iv=document.getElementById("book-modal"),iw=document.querySelector(".modal__close-btn"),ib=document.querySelector(".add-bookBtn");document.querySelector(".addNotification"),document.querySelector(".removeNotification");const iE=document.querySelector(".notification");document.querySelector(".remove-book");const iI=document.querySelector(".modal");ig.addEventListener("click",function(e){e.target.closest(".book-item")&&iT(e.target.dataset.id).then(e=>{let{author:t,title:i,description:n,book_image:r,buy_links:o,list_name:s,_id:a}=e.data;i_={author:t,title:i,description:n,book_image:r,buy_links:o,list_name:s,id:a},//!--------------------
im.innerHTML="",im.insertAdjacentHTML("afterbegin",function({author:e,title:t,description:i,book_image:n,buy_links:r}){let o=`<div class="modal__img-container"> 
        <img src="${n}" alt="${t}" class="modal__img"> 
      </div> 
      <div class="modal__desc"> 
        <h2 class="modal__title">${t}</h2> 
        <p class="modal__author">${e}</p> 
        <p class="modal__book-desc">${i}</p>
        <ul class="modal-book-image-list">
        <li>
        <a class="modal-book-shop" href=${iS(r,"Amazon")} target= _blank><img src="${/*@__PURE__*/y(iu)}" alt="Amazon"></a>
          
        </li>
        <li>
        <a class="modal-book-shop" href=${iS(r,"Apple Books")} target= _blank><img src="${/*@__PURE__*/y(id)}" alt="Apple-Books"></a>
          

        </li>
        <li>
        <a class="modal-book-shop" href=${iS(r,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/y(ip)}" alt="Book-Shop"></a>
         
       
        </li>
      </ul> 
</div>`;return o}(e.data)),document.body.style.overflow="hidden",iy.classList.remove("is-hidden"),ib.textContent=`${iA(e.data._id)}`,"Remove from the shopping list"===ib.textContent?iE.classList.remove("hidden"):"Add to shopping list"===ib.textContent&&iE.classList.add("hidden")})});let i_={};async function iT(e){let t=`https://books-backend.p.goit.global/books/${e}`,i=await tD.get(t);return i}function iS(e,t){for(let{name:i,url:n}of e)if(i===t)return n}document.addEventListener("DOMContentLoaded",function(){function e(){im.innerHTML="",document.body.style.overflow="auto",iv.classList.add("is-hidden")}iw.addEventListener("click",e),document.addEventListener("keydown",function(t){"Escape"===t.key&&e()}),iv.addEventListener("click",function(t){t.target===iv&&e()}),im.addEventListener("click",function(e){e.stopPropagation()})});//!--------------------------------
const ik="bookArr";//!--------------------------------
//! Check if the book has alredy been in LS
//!-------------------------------------------------------
function iA(e){let t=JSON.parse(localStorage.getItem(ik));if(!t)return"Add to shopping list";let i=t.findIndex(t=>t.id===e);return -1===i?"Add to shopping list":"Remove from the shopping list"}//!--------------------------------------------------------
function iC(e){let t=JSON.parse(localStorage.getItem(ik));if(!t)return;let i=t.findIndex(t=>t.id===e);-1!==i?iE.classList.remove("hidden"):iE.classList.add("hidden")}iI.addEventListener("click",function(e){"Add to shopping list"===e.target.textContent?function(e){let t=JSON.parse(localStorage.getItem(ik))??[];if(0===t.length)t.push(e);else if(t.length>0){let i=e.id;JSON.parse(localStorage.getItem(ik));let n=t.findIndex(({id:e})=>e===i);-1===n&&t.push(e)}localStorage.setItem(ik,JSON.stringify(t)),ib.textContent=`${iA(e.id)}`,iC(e.id)}(i_):"Remove from the shopping list"===e.target.textContent&&function({id:e}){let t=JSON.parse(localStorage.getItem(ik));t.find(t=>t.id===e);let i=t.findIndex(t=>t.id===e);t.splice(i,1),localStorage.setItem(ik,JSON.stringify(t)),ib.textContent=`${iA(e)}`,iC(e)}(i_)});/**
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
 */var iN={},iR=iN={};function iO(){throw Error("setTimeout has not been defined")}function ix(){throw Error("clearTimeout has not been defined")}function iP(e){if(ov===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((ov===iO||!ov)&&setTimeout)return ov=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return ov(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return ov.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return ov.call(this,e,0)}}}!function(){try{ov="function"==typeof setTimeout?setTimeout:iO}catch(e){ov=iO}try{ow="function"==typeof clearTimeout?clearTimeout:ix}catch(e){ow=ix}}();var iL=[],iD=!1,iM=-1;function iU(){iD&&ob&&(iD=!1,ob.length?iL=ob.concat(iL):iM=-1,iL.length&&iB())}function iB(){if(!iD){var e=iP(iU);iD=!0;for(var t=iL.length;t;){for(ob=iL,iL=[];++iM<t;)ob&&ob[iM].run();iM=-1,t=iL.length}ob=null,iD=!1,function(e){if(ow===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((ow===ix||!ow)&&clearTimeout)return ow=clearTimeout,clearTimeout(e);try{ow(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return ow.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return ow.call(this,e)}}}(e)}}// v8 likes predictible objects
function ij(e,t){this.fun=e,this.array=t}function iF(){}iR.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];iL.push(new ij(e,t)),1!==iL.length||iD||iP(iB)},ij.prototype.run=function(){this.fun.apply(null,this.array)},iR.title="browser",iR.browser=!0,iR.env={},iR.argv=[],iR.version="",iR.versions={},iR.on=iF,iR.addListener=iF,iR.once=iF,iR.off=iF,iR.removeListener=iF,iR.removeAllListeners=iF,iR.emit=iF,iR.prependListener=iF,iR.prependOnceListener=iF,iR.listeners=function(e){return[]},iR.binding=function(e){throw Error("process.binding is not supported")},iR.cwd=function(){return"/"},iR.chdir=function(e){throw Error("process.chdir is not supported")},iR.umask=function(){return 0};/**
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
 */const i$=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},iz=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let o=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){// Surrogate Pair
let o=e[i++],s=e[i++],a=e[i++],l=((7&r)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let o=e[i++],s=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")},iV={/**
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
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|s>>4,u=(15&s)<<2|l>>6,f=63&l;a||(f=64,o||(u=64)),n.push(i[c],i[h],i[u],i[f])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i$(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):iz(this.decodeStringToByteArray(e,t)))},/**
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
     */decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],o=t<e.length,s=o?i[e.charAt(t)]:0;++t;let a=t<e.length,l=a?i[e.charAt(t)]:64;++t;let c=t<e.length,h=c?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==l||null==h)throw new iH;let u=r<<2|s>>4;if(n.push(u),64!==l){let e=s<<4&240|l>>2;if(n.push(e),64!==h){let e=l<<6&192|h;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class iH extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const iq=function(e){let t=i$(e);return iV.encodeByteArray(t,!0)},iW=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return iq(e).replace(/\./g,"")},iK=function(e){try{return iV.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},iG=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==m)return m;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,iJ=()=>{if(void 0===iN||void 0===iN.env)return;let e=void 0;if(e)return JSON.parse(e)},iX=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&iK(e[1]);return t&&JSON.parse(t)},iY=()=>{try{return iG()||iJ()||iX()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iQ=e=>{var t,i;return null===(i=null===(t=iY())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},iZ=e=>{let t=iQ(e);if(!t)return;let i=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(i<=0||i+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]},i0=()=>{var e;return null===(e=iY())||void 0===e?void 0:e.config},i1=e=>{var t;return null===(t=iY())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class i2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
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
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function i9(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function i4(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function i5(){try{return"object"==typeof indexedDB}catch(e){return!1}}/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */function i6(){return new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class i3 extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */i){super(t),this.code=e,this.customData=i,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,i3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,i8.prototype.create)}}class i8{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],o=r?r.replace(i7,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${o} (${n}).`,a=new i3(n,s,i);return a}}const i7=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function ne(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);for(let r of i){if(!n.includes(r))return!1;let i=e[r],o=t[r];if(nt(i)&&nt(o)){if(!ne(i,o))return!1}else if(i!==o)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}function nt(e){return null!==e&&"object"==typeof e}/**
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
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function ni(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function nn(e){let t={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function nr(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class no{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(n=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=ns),void 0===n.error&&(n.error=ns),void 0===n.complete&&(n.complete=ns);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){// nothing
}}),this.observers.push(n),r}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ns(){// do nothing
}/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */function na(e,t=1e3,i=2){// Calculates an exponentially increasing value.
// Deviation: calculates value from count and a constant interval, so we only need to save value
// and count to restore state.
let n=t*Math.pow(i,e);// Limits backoff to max to avoid effectively permanent backoff.
return Math.min(144e5,n+Math.round(// Deviation: changes multiplication order to improve readability.
.5*n*// A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
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
 */function nl(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class nc{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nh="[DEFAULT]";/**
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
 */class nu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new i2;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:nh})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=nh){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=nh){return this.instances.has(e)}getOptions(e=nh){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);i===r&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let o=this.instances.get(n);return o&&e(o,n),()=>{r.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===nh?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return i||null}normalizeInstanceIdentifier(e=nh){return this.component?this.component.multipleInstances?e:nh:e// assume multiple instances are supported before the component is provided.
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
 */class nf{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new nu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const nd=[];(op=oE||(oE={}))[op.DEBUG=0]="DEBUG",op[op.VERBOSE=1]="VERBOSE",op[op.INFO=2]="INFO",op[op.WARN=3]="WARN",op[op.ERROR=4]="ERROR",op[op.SILENT=5]="SILENT";const np={debug:oE.DEBUG,verbose:oE.VERBOSE,info:oE.INFO,warn:oE.WARN,error:oE.ERROR,silent:oE.SILENT},ng=oE.INFO,nm={[oE.DEBUG]:"log",[oE.VERBOSE]:"log",[oE.INFO]:"info",[oE.WARN]:"warn",[oE.ERROR]:"error"},ny=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=nm[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nv{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=ng,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=ny,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */nd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oE))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,oE.DEBUG,...e),this._logHandler(this,oE.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oE.VERBOSE,...e),this._logHandler(this,oE.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oE.INFO,...e),this._logHandler(this,oE.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oE.WARN,...e),this._logHandler(this,oE.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oE.ERROR,...e),this._logHandler(this,oE.ERROR,...e)}}const nw=(e,t)=>t.some(t=>e instanceof t),nb=new WeakMap,nE=new WeakMap,nI=new WeakMap,n_=new WeakMap,nT=new WeakMap;let nS={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return nE.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||nI.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return nk(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function nk(i){var n;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(i instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(nk(e.result)),n()},o=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&nb.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
nT.set(t,e),t}(i);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(n_.has(i))return n_.get(i);let r="function"==typeof(n=i)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
n.apply(nA(this),e),nk(nb.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return nk(n.apply(nA(this),e))}:function(e,...t){let i=n.call(nA(this),e,...t);return nI.set(i,e.sort?e.sort():[e]),nk(i)}:(n instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(nE.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),n()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});// Cache it for later retrieval.
nE.set(e,t)}(n),nw(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,nS):n;return r!==i&&(n_.set(i,r),nT.set(r,i)),r}const nA=e=>nT.get(e),nC=["get","getKey","getAll","getAllKeys","count"],nN=["put","add","delete","clear"],nR=new Map;function nO(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(nR.get(t))return nR.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=nN.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||nC.includes(i)))return;let o=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let o=this.transaction(e,r?"readwrite":"readonly"),s=o.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),r&&o.done]))[0]};return nR.set(t,o),o}nS={...ol=nS,get:(e,t,i)=>nO(e,t)||ol.get(e,t,i),has:(e,t)=>!!nO(e,t)||ol.has(e,t)};/**
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
 */class nx{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const nP="@firebase/app",nL="0.9.18",nD=new nv("@firebase/app"),nM="[DEFAULT]",nU={[nP]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},nB=new Map,nj=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function nF(e){let t=e.name;if(nj.has(t))return nD.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let i of(nj.set(t,e),nB.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(i){nD.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function n$(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}const nz=new i8("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class nV{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nc("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw nz.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
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
 * The current SDK version.
 *
 * @public
 */const nH="10.3.1";function nq(e,t={}){let i=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:nM,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw nz.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(r)});if(i||(i=i0()),!i)throw nz.create("no-options"/* AppError.NO_OPTIONS */);let o=nB.get(r);if(o){// return the existing app if options and config deep equal the ones in the existing app.
if(ne(i,o.options)&&ne(n,o.config))return o;throw nz.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:r})}let s=new nf(r);for(let e of nj.values())s.addComponent(e);let a=new nV(i,n,s);return nB.set(r,a),a}/**
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
 */function nW(e=nM){let t=nB.get(e);if(!t&&e===nM&&i0())return nq();if(!t)throw nz.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function nK(e,t,i){var n;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let r=null!==(n=nU[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let e=[`Unable to register library "${r}" with version "${t}":`];o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nD.warn(e.join(" "));return}nF(new nc(`${r}-version`,()=>({library:r,version:t}),"VERSION"/* ComponentType.VERSION */))}const nG="firebase-heartbeat-store";let nJ=null;function nX(){return nJ||(nJ=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:o}={}){let s=indexedDB.open(e,1),a=nk(s);return n&&s.addEventListener("upgradeneeded",e=>{n(nk(s.result),e.oldVersion,e.newVersion,nk(s.transaction),e)}),i&&s.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),a.then(e=>{o&&e.addEventListener("close",()=>o()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(nG)}}).catch(e=>{throw nz.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),nJ}async function nY(e){try{let t=await nX(),i=await t.transaction(nG).objectStore(nG).get(nZ(e));return i}catch(e){if(e instanceof i3)nD.warn(e.message);else{let t=nz.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});nD.warn(t.message)}}}async function nQ(e,t){try{let i=await nX(),n=i.transaction(nG,"readwrite"),r=n.objectStore(nG);await r.put(t,nZ(e)),await n.done}catch(e){if(e instanceof i3)nD.warn(e.message);else{let t=nz.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});nD.warn(t.message)}}}function nZ(e){return`${e.name}!${e.options.appId}`}class n0{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new n2(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=n1();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=n1(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let i=[],n=e.slice();for(let r of e){// Look for an existing entry with the same user agent.
let e=i.find(e=>e.agent===r.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(r.date),n9(i)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
i.push({agent:r.agent,dates:[r.date]}),n9(i)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
i.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=iW(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=i,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n)}}function n1(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class n2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!i5()&&i6().then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await nY(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return nQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return nQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function n9(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return iW(JSON.stringify({version:2,heartbeats:e})).length}nF(new nc("platform-logger",e=>new nx(e),"PRIVATE"/* ComponentType.PRIVATE */)),nF(new nc("heartbeat",e=>new n0(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
nK(nP,nL,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
nK(nP,nL,"esm2017"),// Register platform SDK identifier (no version).
nK("fire-js",""),nK("firebase","10.3.1","app");const n4=(e,t)=>t.some(t=>e instanceof t),n5=new WeakMap,n6=new WeakMap,n3=new WeakMap,n8=new WeakMap,n7=new WeakMap;let re={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return n6.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||n3.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return rt(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function rt(e){var t;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(rt(e.result)),n()},o=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&n5.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
n7.set(t,e),t}(e);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(n8.has(e))return n8.get(e);let r="function"==typeof(t=e)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
t.apply(ri(this),e),rt(n5.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return rt(t.apply(ri(this),e))}:function(e,...i){let n=t.call(ri(this),e,...i);return n3.set(n,e.sort?e.sort():[e]),rt(n)}:(t instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(n6.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),n()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});// Cache it for later retrieval.
n6.set(e,t)}(t),n4(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,re):t;return r!==e&&(n8.set(e,r),n7.set(r,e)),r}const ri=e=>n7.get(e),rn=["get","getKey","getAll","getAllKeys","count"],rr=["put","add","delete","clear"],ro=new Map;function rs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ro.get(t))return ro.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=rr.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||rn.includes(i)))return;let o=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let o=this.transaction(e,r?"readwrite":"readonly"),s=o.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),r&&o.done]))[0]};return ro.set(t,o),o}re={...oc=re,get:(e,t,i)=>rs(e,t)||oc.get(e,t,i),has:(e,t)=>!!rs(e,t)||oc.has(e,t)};const ra="@firebase/installations",rl="0.6.4",rc=`w:${rl}`,rh="FIS_v2",ru=new i8("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});/** Returns true if error is a FirebaseError that is based on an error from the server. */function rf(e){return e instanceof i3&&e.code.includes("request-failed"/* ErrorCode.REQUEST_FAILED */)}/**
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
 */function rd({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function rp(e){return{token:e.token,requestStatus:2/* RequestStatus.COMPLETED */,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function rg(e,t){let i=await t.json(),n=i.error;return ru.create("request-failed"/* ErrorCode.REQUEST_FAILED */,{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function rm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */async function ry(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function rv({appConfig:e,heartbeatServiceProvider:t},{fid:i}){let n=rd(e),r=rm(e),o=t.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let s={fid:i,authVersion:rh,appId:e.appId,sdkVersion:rc},a={method:"POST",headers:r,body:JSON.stringify(s)},l=await ry(()=>fetch(n,a));if(l.ok){let e=await l.json(),t={fid:e.fid||i,registrationStatus:2/* RequestStatus.COMPLETED */,refreshToken:e.refreshToken,authToken:rp(e.authToken)};return t}throw await rg("Create Installation",l)}/**
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
 *//** Returns a promise that resolves after given time passes. */function rw(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const rb=/^[cdef][\w-]{21}$/;/**
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
 *//** Returns a string key that can be used to identify the app. */function rE(e){return`${e.appName}!${e.appId}`}/**
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
 */const rI=new Map;/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */function r_(e,t){let i=rE(e);rT(i,t),function(e,t){let i=(!rS&&"BroadcastChannel"in self&&((rS=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{rT(e.data.key,e.data.fid)}),rS);i&&i.postMessage({key:e,fid:t}),0===rI.size&&rS&&(rS.close(),rS=null)}(i,t)}function rT(e,t){let i=rI.get(e);if(i)for(let e of i)e(t)}let rS=null;const rk="firebase-installations-store";let rA=null;function rC(){return rA||(rA=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:o}={}){let s=indexedDB.open(e,1),a=rt(s);return n&&s.addEventListener("upgradeneeded",e=>{n(rt(s.result),e.oldVersion,e.newVersion,rt(s.transaction))}),i&&s.addEventListener("blocked",()=>i()),a.then(e=>{o&&e.addEventListener("close",()=>o()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}("firebase-installations-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(rk)}})),rA}/** Assigns or overwrites the record for the given key with the given value. */async function rN(e,t){let i=rE(e),n=await rC(),r=n.transaction(rk,"readwrite"),o=r.objectStore(rk),s=await o.get(i);return await o.put(t,i),await r.done,s&&s.fid===t.fid||r_(e,t.fid),t}/** Removes record(s) from the objectStore that match the given key. */async function rR(e){let t=rE(e),i=await rC(),n=i.transaction(rk,"readwrite");await n.objectStore(rk).delete(t),await n.done}/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */async function rO(e,t){let i=rE(e),n=await rC(),r=n.transaction(rk,"readwrite"),o=r.objectStore(rk),s=await o.get(i),a=t(s);return void 0===a?await o.delete(i):await o.put(a,i),await r.done,a&&(!s||s.fid!==a.fid)&&r_(e,a.fid),a}/**
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
 */async function rx(e){let t;let i=await rO(e.appConfig,i=>{let n=/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */function(e){let t=e||{fid:/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */function(){try{// A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
// bytes. our implementation generates a 17 byte array instead.
let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),// Replace the first 4 random bits with the constant FID header of 0b0111.
e[0]=112+e[0]%16;let i=/** Converts a FID Uint8Array to a base64 string representation. */function(e){let t=/**
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
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);// Remove the 23rd character that was added because of the extra 4 bits at the
// end of our 17 byte array, and the '=' padding.
return t.substr(0,22)}(e);return rb.test(i)?i:""}catch(e){// FID generation errored
return""}}(),registrationStatus:0/* RequestStatus.NOT_STARTED */};return rM(t)}(i),r=/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */function(e,t){if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){if(!navigator.onLine){// Registration required but app is offline.
let e=Promise.reject(ru.create("app-offline"/* ErrorCode.APP_OFFLINE */));return{installationEntry:t,registrationPromise:e}}// Try registering. Change status to IN_PROGRESS.
let i={fid:t.fid,registrationStatus:1/* RequestStatus.IN_PROGRESS */,registrationTime:Date.now()},n=rP(e,i);return{installationEntry:i,registrationPromise:n}}return 1/* RequestStatus.IN_PROGRESS */===t.registrationStatus?{installationEntry:t,registrationPromise:rL(e)}:{installationEntry:t}}(e,n);return t=r.registrationPromise,r.installationEntry});return""===i.fid?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}/** This will be executed only once for each new Firebase Installation. */async function rP(e,t){try{let i=await rv(e,t);return rN(e.appConfig,i)}catch(i){throw rf(i)&&409===i.customData.serverCode?// Generate a new ID next time.
await rR(e.appConfig):await rN(e.appConfig,{fid:t.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}),i}}/** Call if FID registration is pending in another request. */async function rL(e){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let t=await rD(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===t.registrationStatus;)// createInstallation request still in progress.
await rw(100),t=await rD(e.appConfig);if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){// The request timed out or failed in a different call. Try again.
let{installationEntry:t,registrationPromise:i}=await rx(e);return i||t}return t}/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */function rD(e){return rO(e,e=>{if(!e)throw ru.create("installation-not-found"/* ErrorCode.INSTALLATION_NOT_FOUND */);return rM(e)})}function rM(e){return 1/* RequestStatus.IN_PROGRESS */===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}:e}/**
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
 */async function rU({appConfig:e,heartbeatServiceProvider:t},i){let n=function(e,{fid:t}){return`${rd(e)}/${t}/authTokens:generate`}(e,i),r=function(e,{refreshToken:t}){let i=rm(e);return i.append("Authorization",`${rh} ${t}`),i}(e,i),o=t.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let s={installation:{sdkVersion:rc,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(s)},l=await ry(()=>fetch(n,a));if(l.ok){let e=await l.json(),t=rp(e);return t}throw await rg("Generate Auth Token",l)}/**
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
 */async function rB(e,t=!1){let i;let n=await rO(e.appConfig,n=>{var r;if(!rz(n))throw ru.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let o=n.authToken;if(!t&&2/* RequestStatus.COMPLETED */===(r=o).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(r))return n;if(1/* RequestStatus.IN_PROGRESS */===o.requestStatus)return(// There already is a token request in progress.
i=rj(e,t),n);{// No token or token expired.
if(!navigator.onLine)throw ru.create("app-offline"/* ErrorCode.APP_OFFLINE */);let t=/** Returns an updated InstallationEntry with an InProgressAuthToken. */function(e){let t={requestStatus:1/* RequestStatus.IN_PROGRESS */,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return i=r$(e,t),t}}),r=i?await i:n.authToken;return r}/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */async function rj(e,t){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let i=await rF(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===i.authToken.requestStatus;)// generateAuthToken still in progress.
await rw(100),i=await rF(e.appConfig);let n=i.authToken;return 0/* RequestStatus.NOT_STARTED */===n.requestStatus?rB(e,t):n}/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */function rF(e){return rO(e,e=>{if(!rz(e))throw ru.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let t=e.authToken;return 1/* RequestStatus.IN_PROGRESS */===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}}):e})}async function r$(e,t){try{let i=await rU(e,t),n=Object.assign(Object.assign({},t),{authToken:i});return await rN(e.appConfig,n),i}catch(i){if(rf(i)&&(401===i.customData.serverCode||404===i.customData.serverCode))// Generate a new ID next time.
await rR(e.appConfig);else{let i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}});await rN(e.appConfig,i)}throw i}}function rz(e){return void 0!==e&&2/* RequestStatus.COMPLETED */===e.registrationStatus}/**
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
 */async function rV(e){let{installationEntry:t,registrationPromise:i}=await rx(e);return i?i.catch(console.error):// token if needed.
rB(e).catch(console.error),t.fid}/**
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
 */async function rH(e,t=!1){await rq(e);// At this point we either have a Registered Installation in the DB, or we've
// already thrown an error.
let i=await rB(e,t);return i.token}async function rq(e){let{registrationPromise:t}=await rx(e);t&&await t}function rW(e){return ru.create("missing-app-config-values"/* ErrorCode.MISSING_APP_CONFIG_VALUES */,{valueName:e})}/**
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
 */const rK="installations";nF(new nc(rK,e=>{let t=e.getProvider("app").getImmediate(),i=/**
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
 */function(e){if(!e||!e.options)throw rW("App Configuration");if(!e.name)throw rW("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw rW(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=n$(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC"/* ComponentType.PUBLIC */)),nF(new nc("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),i=n$(t,rK).getImmediate();return{getId:()=>rV(i),getToken:e=>rH(i,e)}},"PRIVATE"/* ComponentType.PRIVATE */)),nK(ra,rl),nK(ra,rl,"esm2017");/**
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
 */const rG="analytics",rJ="https://www.googletagmanager.com/gtag/js",rX=new nv("@firebase/analytics"),rY=new i8("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
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
 */function rQ(e){if(!e.startsWith(rJ)){let t=rY.create("invalid-gtag-resource"/* AnalyticsError.INVALID_GTAG_RESOURCE */,{gtagURL:e});return rX.warn(t.message),""}return e}/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */function rZ(e){return Promise.all(e.map(e=>e.catch(e=>e)))}/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */async function r0(e,t,i,n,r,o){// If config is already fetched, we know the appId and can use it to look up what FID promise we
/// are waiting for, and wait only on that one.
let s=n[r];try{if(s)await t[s];else{// If config is not fetched yet, wait for all configs (we don't know which one we need) and
// find the appId (if any) corresponding to this measurementId. If there is one, wait on
// that appId's initialization promise. If there is none, promise resolves and gtag
// call goes through.
let e=await rZ(i),n=e.find(e=>e.measurementId===r);n&&await t[n.appId]}}catch(e){rX.error(e)}e("config"/* GtagCommand.CONFIG */,r,o)}/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */async function r1(e,t,i,n,r){try{let o=[];// If there's a 'send_to' param, check if any ID specified matches
// an initializeIds() promise we are waiting for.
if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);// Checking 'send_to' fields requires having all measurement ID results back from
// the dynamic config fetch.
let n=await rZ(i);for(let i of e){// Any fetched dynamic measurement ID that matches this 'send_to' ID
let e=n.find(e=>e.measurementId===i),r=e&&t[e.appId];if(r)o.push(r);else{// Found an item in 'send_to' that is not associated
// directly with an FID, possibly a group.  Empty this array,
// exit the loop early, and let it get populated below.
o=[];break}}}0===o.length&&(o=Object.values(t)),// Run core gtag function with args after all relevant initialization
// promises have been resolved.
await Promise.all(o),// Workaround for http://b/141370449 - third argument cannot be undefined.
e("event"/* GtagCommand.EVENT */,n,r||{})}catch(e){rX.error(e)}}const r2=new /**
 * Stubbable retry data storage class.
 */class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */async function r9(e){var t;let{appId:i,apiKey:n}=e,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":n})},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",i),s=await fetch(o,r);if(200!==s.status&&304!==s.status){let e="";try{// Try to get any error message text from server response.
let i=await s.json();(null===(t=i.error)||void 0===t?void 0:t.message)&&(e=i.error.message)}catch(e){}throw rY.create("config-fetch-failed"/* AnalyticsError.CONFIG_FETCH_FAILED */,{httpStatus:s.status,responseMessage:e})}return s.json()}/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */async function r4(e,t=r2,i){let{appId:n,apiKey:r,measurementId:o}=e.options;if(!n)throw rY.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!r){if(o)return{measurementId:o,appId:n};throw rY.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}let s=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new r6;return setTimeout(async()=>{// Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
a.abort()},void 0!==i?i:6e4),r5({appId:n,apiKey:r,measurementId:o},s,a,t)}/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */async function r5(e,{throttleEndTimeMillis:t,backoffCount:i},n,r=r2// for testing
){var o;let{appId:s,measurementId:a}=e;// Starts with a (potentially zero) timeout to support resumption from stored state.
// Ensures the throttle end time is honored if the last attempt timed out.
// Note the SDK will never make a request if the fetch timeout expires at this point.
try{await new Promise((e,i)=>{// Derives backoff from given end time, normalizing negative numbers to zero.
let r=Math.max(t-Date.now(),0),o=setTimeout(e,r);// Adds listener, rather than sets onabort, because signal is a shared object.
n.addEventListener(()=>{clearTimeout(o),// If the request completes before this timeout, the rejection has no effect.
i(rY.create("fetch-throttle"/* AnalyticsError.FETCH_THROTTLE */,{throttleEndTimeMillis:t}))})})}catch(e){if(a)return rX.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:a};throw e}try{let t=await r9(e);return(// Note the SDK only clears throttle state if response is success or non-retriable.
r.deleteThrottleMetadata(s),t)}catch(c){if(!/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */function(e){if(!(e instanceof i3)||!e.customData)return!1;// Uses string index defined by ErrorData, which FirebaseError implements.
let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(r.deleteThrottleMetadata(s),a)return rX.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:s,measurementId:a};throw c}let t=503===Number(null===(o=null==c?void 0:c.customData)||void 0===o?void 0:o.httpStatus)?na(i,r.intervalMillis,30):na(i,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:i+1};return(// Persists state.
r.setThrottleMetadata(s,l),rX.debug(`Calling attemptFetch again in ${t} millis`),r5(e,l,n,r))}}/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */class r6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */async function r3(e,t,i,n,r){if(r&&r.global){e("event"/* GtagCommand.EVENT */,i,n);return}{let r=await t,o=Object.assign(Object.assign({},n),{send_to:r});e("event"/* GtagCommand.EVENT */,i,o)}}/**
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
 */async function r8(){if(!i5())return rX.warn(rY.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await i6()}catch(e){return rX.warn(rY.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}/**
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
 */async function r7(e,t,i,n,s,a,l){var c;let h=r4(e);// Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
h.then(t=>{i[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&rX.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>rX.error(e)),// Add to list to track state of all dynamic config promises.
t.push(h);let u=r8().then(e=>e?n.getId():void 0),[f,d]=await Promise.all([h,u]);!/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */function(e){let t=window.document.getElementsByTagName("script");for(let i of Object.values(t))if(i.src&&i.src.includes(rJ)&&i.src.includes(e))return i;return null}(a)&&/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */function(e,t){let i;let n=(window.trustedTypes&&(i=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:rQ})),i),r=document.createElement("script"),o=`${rJ}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}(a,f.measurementId),o&&(s("consent"/* GtagCommand.CONSENT */,"default",o),o=void 0),// This command initializes gtag.js and only needs to be called once for the entire web app,
// but since it is idempotent, we can call it multiple times.
// We keep it together with other initialization logic for better code structure.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
s("js",new Date);// User config added first. We don't want users to accidentally overwrite
// base Firebase config properties.
let p=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return(// guard against developers accidentally setting properties with prefix `firebase_`
p.origin="firebase",p.update=!0,null!=d&&(p.firebase_id=d),// It should be the first config command called on this GA-ID
// Initialize this GA-ID and set FID on it using the gtag config API.
// Note: This will trigger a page_view event unless 'send_page_view' is set to false in
// `configProperties`.
s("config"/* GtagCommand.CONFIG */,f.measurementId,p),r&&(s("set"/* GtagCommand.SET */,r),r=void 0),f.measurementId)}/**
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
 */class oe{constructor(e){this.app=e}_delete(){return delete ot[this.app.options.appId],Promise.resolve()}}/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */let ot={},oi=[];/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */const on={};/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */let or="dataLayer",oo=!1;const os="@firebase/analytics",oa="0.10.0";nF(new nc(rG,(e,{options:t})=>{// getImmediate for FirebaseApp will always succeed
let i=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return(/**
 * Analytics instance factory.
 * @internal
 */function(e,t,i){!/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */function(){let e=[];if(i4()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),i=rY.create("invalid-analytics-context"/* AnalyticsError.INVALID_ANALYTICS_CONTEXT */,{errorInfo:t});rX.warn(i.message)}}();let n=e.options.appId;if(!n)throw rY.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!e.options.apiKey){if(e.options.measurementId)rX.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rY.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}if(null!=ot[n])throw rY.create("already-exists"/* AnalyticsError.ALREADY_EXISTS */,{id:n});if(!oo){var r,o;let e,t;e=[],Array.isArray(window[or])?e=window[or]:window[or]=e;let{wrappedGtag:i,gtagCore:n}=(r="gtag",t=function(...e){// Must push IArguments object, not an array.
window[or].push(arguments)},window[r]&&"function"==typeof window[r]&&(t=window[r]),window[r]=(o=t,/**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */async function(e,...t){try{// If event, check that relevant initialization promises have completed.
if("event"/* GtagCommand.EVENT */===e){let[e,i]=t;// If EVENT, second arg must be measurementId.
await r1(o,ot,oi,e,i)}else if("config"/* GtagCommand.CONFIG */===e){let[e,i]=t;// If CONFIG, second arg must be measurementId.
await r0(o,ot,oi,on,e,i)}else if("consent"/* GtagCommand.CONSENT */===e){let[e]=t;o("consent"/* GtagCommand.CONSENT */,"update",e)}else if("get"/* GtagCommand.GET */===e){let[e,i,n]=t;o("get"/* GtagCommand.GET */,e,i,n)}else if("set"/* GtagCommand.SET */===e){let[e]=t;// If SET, second arg must be params.
o("set"/* GtagCommand.SET */,e)}else o(e,...t)}catch(e){rX.error(e)}}),{gtagCore:t,wrappedGtag:window[r]});a=i,s=n,oo=!0}// Async but non-blocking.
// This map reflects the completion state of all promises for each appId.
ot[n]=r7(e,oi,on,t,s,or,i);let l=new oe(e);return l}(i,n,t))},"PUBLIC"/* ComponentType.PUBLIC */)),nF(new nc("analytics-internal",function(e){try{let t=e.getProvider(rG).getImmediate();return{logEvent:(e,i,n)=>{var r;return r=t,void(r=nl(r),r3(a,ot[r.app.options.appId],e,i,n).catch(e=>rX.error(e)))}}}catch(e){throw rY.create("interop-component-reg-failed"/* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */,{reason:e})}},"PRIVATE"/* ComponentType.PRIVATE */)),nK(os,oa),nK(os,oa,"esm2017"),b("7Y9D8");var ol,oc,oh,ou,of,od,op,og,om,oy,ov,ow,ob,oE,oI,o_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==m?m:"undefined"!=typeof self?self:{},oT={},oS=oS||{},ok=o_||self;function oA(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function oC(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function oN(e,t,i){return e.call.apply(e.bind,arguments)}function oR(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function oO(e,t,i){return(oO=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oN:oR).apply(null,arguments)}function ox(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function oP(e,t){function i(){}i.prototype=t.prototype,e.$=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.ac=function(e,i,n){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return t.prototype[i].apply(e,r)}}function oL(){this.s=this.s,this.o=this.o}oL.prototype.s=!1,oL.prototype.sa=function(){this.s||(this.s=!0,this.N())},oL.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oD=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function oM(e){let t=e.length;if(0<t){let i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function oU(e,t){for(let t=1;t<arguments.length;t++){let i=arguments[t];if(oA(i)){let t=e.length||0,n=i.length||0;e.length=t+n;for(let r=0;r<n;r++)e[t+r]=i[r]}else e.push(i)}}function oB(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}oB.prototype.h=function(){this.defaultPrevented=!0};var oj=function(){if(!ok.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ok.addEventListener("test",()=>{},t),ok.removeEventListener("test",()=>{},t)}catch(e){}return e}();function oF(e){return/^[\s\xa0]*$/.test(e)}function o$(){var e=ok.navigator;return e&&(e=e.userAgent)?e:""}function oz(e){return -1!=o$().indexOf(e)}function oV(e){return oV[" "](e),e}oV[" "]=function(){};var oH=oz("Opera"),oq=oz("Trident")||oz("MSIE"),oW=oz("Edge"),oK=oW||oq,oG=oz("Gecko")&&!(-1!=o$().toLowerCase().indexOf("webkit")&&!oz("Edge"))&&!(oz("Trident")||oz("MSIE"))&&!oz("Edge"),oJ=-1!=o$().toLowerCase().indexOf("webkit")&&!oz("Edge");function oX(){var e=ok.document;return e?e.documentMode:void 0}e:{var oY,oQ="",oZ=(oY=o$(),oG?/rv:([^\);]+)(\)|;)/.exec(oY):oW?/Edge\/([\d\.]+)/.exec(oY):oq?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(oY):oJ?/WebKit\/(\S+)/.exec(oY):oH?/(?:Version)[ \/]?(\S+)/.exec(oY):void 0);if(oZ&&(oQ=oZ?oZ[1]:""),oq){var o0=oX();if(null!=o0&&o0>parseFloat(oQ)){u=String(o0);break e}}u=oQ}var o1=ok.document&&oq&&(oX()||parseInt(u,10))||void 0;function o2(e,t){if(oB.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(oG){e:{try{oV(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:o9[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&o2.$.h.call(this)}}oP(o2,oB);var o9={2:"touch",3:"pen",4:"mouse"};o2.prototype.h=function(){o2.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var o4="closure_listenable_"+(1e6*Math.random()|0),o5=0;function o6(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.la=r,this.key=++o5,this.fa=this.ia=!1}function o3(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function o8(e,t,i){for(let n in e)t.call(i,e[n],n,e)}function o7(e){let t={};for(let i in e)t[i]=e[i];return t}const se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function st(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<se.length;t++)i=se[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function si(e){this.src=e,this.g={},this.h=0}function sn(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],o=oD(r,t);(n=0<=o)&&Array.prototype.splice.call(r,o,1),n&&(o3(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function sr(e,t,i,n){for(var r=0;r<e.length;++r){var o=e[r];if(!o.fa&&o.listener==t&&!!i==o.capture&&o.la==n)return r}return -1}si.prototype.add=function(e,t,i,n,r){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=sr(e,t,n,r);return -1<s?(t=e[s],i||(t.ia=!1)):((t=new o6(t,this.src,o,!!n,r)).ia=i,e.push(t)),t};var so="closure_lm_"+(1e6*Math.random()|0),ss={};function sa(e,t,i,n,r,o){if(!t)throw Error("Invalid event type");var s=oC(r)?!!r.capture:!!r,a=su(e);if(a||(e[so]=a=new si(e)),(i=a.add(t,i,n,s,o)).proxy)return i;if(n=function e(t){return sh.call(e.src,e.listener,t)},i.proxy=n,n.src=e,n.listener=i,e.addEventListener)oj||(r=s),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(sc(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return i}function sl(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[o4])sn(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(sc(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=su(t))?(sn(i,e),0==i.h&&(i.src=null,t[so]=null)):o3(e)}}}function sc(e){return e in ss?ss[e]:ss[e]="on"+e}function sh(e,t){if(e.fa)e=!0;else{t=new o2(t,this);var i=e.listener,n=e.la||e.src;e.ia&&sl(e),e=i.call(n,t)}return e}function su(e){return(e=e[so])instanceof si?e:null}var sf="__closure_events_fn_"+(1e9*Math.random()>>>0);function sd(e){return"function"==typeof e?e:(e[sf]||(e[sf]=function(t){return e.handleEvent(t)}),e[sf])}function sp(){oL.call(this),this.i=new si(this),this.S=this,this.J=null}function sg(e,t){var i,n=e.J;if(n)for(i=[];n;n=n.J)i.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new oB(t,e);else if(t instanceof oB)t.target=t.target||e;else{var r=t;st(t=new oB(n,e),r)}if(r=!0,i)for(var o=i.length-1;0<=o;o--){var s=t.g=i[o];r=sm(s,n,!0,t)&&r}if(r=sm(s=t.g=e,n,!0,t)&&r,r=sm(s,n,!1,t)&&r,i)for(o=0;o<i.length;o++)r=sm(s=t.g=i[o],n,!1,t)&&r}function sm(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==i){var a=s.listener,l=s.la||s.src;s.ia&&sn(e.i,s),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}oP(sp,oL),sp.prototype[o4]=!0,sp.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,o){if(Array.isArray(i))for(var s=0;s<i.length;s++)e(t,i[s],n,r,o);else(r=oC(r)?!!r.capture:!!r,n=sd(n),t&&t[o4])?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=sr(s=t.g[i],n,r,o))&&(o3(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[i],t.h--))):t&&(t=su(t))&&(i=t.g[i.toString()],t=-1,i&&(t=sr(i,n,r,o)),(n=-1<t?i[t]:null)&&sl(n))}(this,e,t,i,n)},sp.prototype.N=function(){if(sp.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)o3(i[n]);delete t.g[e],t.h--}}this.J=null},sp.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},sp.prototype.P=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var sy=ok.JSON.stringify,sv=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new sw,e=>e.reset());class sw{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let sb,sE=!1,sI=new class{constructor(){this.h=this.g=null}add(e,t){let i=sv.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}},s_=()=>{let e=ok.Promise.resolve(void 0);sb=()=>{e.then(sT)}};var sT=()=>{let e;for(var t;e=null,sI.g&&(e=sI.g,sI.g=sI.g.next,sI.g||(sI.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){ok.setTimeout(()=>{throw e},0)}(e)}sv.j(t),100>sv.h&&(sv.h++,t.next=sv.g,sv.g=t)}sE=!1};function sS(e,t){sp.call(this),this.h=e||1,this.g=t||ok,this.j=oO(this.qb,this),this.l=Date.now()}function sk(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function sA(e,t,i){if("function"==typeof e)i&&(e=oO(e,i));else if(e&&"function"==typeof e.handleEvent)e=oO(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:ok.setTimeout(e,t||0)}oP(sS,sp),(oI=sS.prototype).ga=!1,oI.T=null,oI.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),sg(this,"tick"),this.ga&&(sk(this),this.start()))}},oI.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},oI.N=function(){sS.$.N.call(this),sk(this),delete this.g};class sC extends oL{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=sA(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}N(){super.N(),this.g&&(ok.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sN(e){oL.call(this),this.h=e,this.g={}}oP(sN,oL);var sR=[];function sO(e,t,i,n){Array.isArray(i)||(i&&(sR[0]=i.toString()),i=sR);for(var r=0;r<i.length;r++){var o=function e(t,i,n,r,o){if(r&&r.once)return function e(t,i,n,r,o){if(Array.isArray(i)){for(var s=0;s<i.length;s++)e(t,i[s],n,r,o);return null}return n=sd(n),t&&t[o4]?t.P(i,n,oC(r)?!!r.capture:!!r,o):sa(t,i,n,!0,r,o)}(t,i,n,r,o);if(Array.isArray(i)){for(var s=0;s<i.length;s++)e(t,i[s],n,r,o);return null}return n=sd(n),t&&t[o4]?t.O(i,n,oC(r)?!!r.capture:!!r,o):sa(t,i,n,!1,r,o)}(t,i[r],n||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function sx(e){o8(e.g,function(e,t){this.g.hasOwnProperty(t)&&sl(e)},e),e.g={}}function sP(){this.g=!0}function sL(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<r.length;s++)r[s]=""}}}}return sy(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}sN.prototype.N=function(){sN.$.N.call(this),sx(this)},sN.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},sP.prototype.Ea=function(){this.g=!1},sP.prototype.info=function(){};var sD={},sM=null;function sU(){return sM=sM||new sp}function sB(e){oB.call(this,sD.Ta,e)}function sj(e){let t=sU();sg(t,new sB(t))}function sF(e,t){oB.call(this,sD.STAT_EVENT,e),this.stat=t}function s$(e){let t=sU();sg(t,new sF(t,e))}function sz(e,t){oB.call(this,sD.Ua,e),this.size=t}function sV(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ok.setTimeout(function(){e()},t)}sD.Ta="serverreachability",oP(sB,oB),sD.STAT_EVENT="statevent",oP(sF,oB),sD.Ua="timingevent",oP(sz,oB);var sH={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sq={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sW(){}function sK(e){return e.h||(e.h=e.i())}function sG(){}sW.prototype.h=null;var sJ={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sX(){oB.call(this,"d")}function sY(){oB.call(this,"c")}function sQ(){}function sZ(e,t,i,n){this.l=e,this.j=t,this.m=i,this.W=n||1,this.U=new sN(this),this.P=s1,e=oK?125:void 0,this.V=new sS(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new s0}function s0(){this.i=null,this.g="",this.h=!1}oP(sX,oB),oP(sY,oB),oP(sQ,sW),sQ.prototype.g=function(){return new XMLHttpRequest},sQ.prototype.i=function(){return{}},d=new sQ;var s1=45e3,s2={},s9={};function s4(e,t,i){e.L=1,e.v=af(aa(t)),e.s=i,e.S=!0,s5(e,null)}function s5(e,t){e.G=Date.now(),s8(e),e.A=aa(e.v);var i=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),aS(i.i,"t",n),e.C=0,i=e.l.J,e.h=new s0,e.g=lp(e.l,i?t:null,!e.s),0<e.O&&(e.M=new sC(oO(e.Pa,e,e.g),e.O)),sO(e.U,e.g,"readystatechange",e.nb),t=e.I?o7(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),sj(),function(e,t,i,n,r,o){e.info(function(){if(e.g){if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");s=2<=u.length&&"type"==u[1]?s+(h+"=")+c+"&":s+(h+"=redacted&")}}else s=null}else s=o;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+s})}(e.j,e.u,e.A,e.m,e.W,e.s)}function s6(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function s3(e,t,i){let n=!0,r;for(;!e.J&&e.C<i.length;)if((r=function(e,t){var i=e.C,n=t.indexOf("\n",i);return -1==n?s9:isNaN(i=Number(t.substring(i,n)))?s2:(n+=1)+i>t.length?s9:(t=t.slice(n,n+i),e.C=n+i,t)}(e,i))==s9){4==t&&(e.o=4,s$(14),n=!1),sL(e.j,e.m,null,"[Incomplete Response]");break}else if(r==s2){e.o=4,s$(15),sL(e.j,e.m,i,"[Invalid Chunk]"),n=!1;break}else sL(e.j,e.m,r,null),an(e,r);s6(e)&&r!=s9&&r!=s2&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,s$(16),n=!1),e.i=e.i&&n,n?0<i.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),ls(t),t.M=!0,s$(11))):(sL(e.j,e.m,i,"[Invalid Chunked Response]"),ai(e),at(e))}function s8(e){e.Y=Date.now()+e.P,s7(e,e.P)}function s7(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=sV(oO(e.lb,e),t)}function ae(e){e.B&&(ok.clearTimeout(e.B),e.B=null)}function at(e){0==e.l.H||e.J||lc(e.l,e)}function ai(e){ae(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,sk(e.V),sx(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function an(e,t){try{var i=e.l;if(0!=i.H&&(i.g==e||ax(i.i,e))){if(!e.K&&ax(i.i,e)&&3==i.H){try{var n=i.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(i.g.G+3e3<e.G)ll(i),a8(i);else break e}lo(i),s$(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=sV(oO(i.ib,i),6e3));if(1>=aO(i.i)&&i.oa){try{i.oa()}catch(e){}i.oa=void 0}}else lu(i,11)}else if((e.K||i.g==e)&&ll(i),!oF(t))for(r=i.Ja.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(i.V=a[0],a=a[1],2==i.H){if("c"==a[0]){i.K=a[1],i.pa=a[2];let t=a[3];null!=t&&(i.ra=t,i.l.info("VER="+i.ra));let r=a[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;let c=e.g;if(c){let e=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=n.i;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(aP(o,o.h),o.h=null))}if(n.F){let e=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,au(n.I,n.F,e))}}if(i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-e.G,i.l.info("Handshake RTT: "+i.S+"ms")),(n=i).wa=ld(n,n.J?n.pa:null,n.Y),e.K){aL(n.i,e);var s=n.L;s&&e.setTimeout(s),e.B&&(ae(e),s8(e)),n.g=e}else lr(n);0<i.j.length&&le(i)}else"stop"!=a[0]&&"close"!=a[0]||lu(i,7)}else 3==i.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?lu(i,7):a3(i):"noop"!=a[0]&&i.h&&i.h.Aa(a),i.A=0)}}sj(4)}catch(e){}}function ar(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(oA(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(oA(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let n in t=[],i=0,e)t[i++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(oA(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length,o=0;o<r;o++)t.call(void 0,n[o],i&&i[o],e)}(oI=sZ.prototype).setTimeout=function(e){this.P=e},oI.nb=function(e){e=e.target;let t=this.M;t&&3==a1(e)?t.l():this.Pa(e)},oI.Pa=function(e){try{if(e==this.g)e:{let h=a1(this.g);var t=this.g.Ia();let u=this.g.da();if(!(3>h)&&(3!=h||oK||this.g&&(this.h.h||this.g.ja()||a2(this.g)))){this.J||4!=h||7==t||(8==t||0>=u?sj(3):sj(2)),ae(this);var i=this.g.da();this.ca=i;t:if(s6(this)){var n=a2(this.g);e="";var r=n.length,o=4==a1(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ai(this),at(this);var s="";break t}this.h.i=new ok.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:o&&t==r-1});n.splice(0,r),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==i,function(e,t,i,n,r,o,s){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+o+" "+s})}(this.j,this.u,this.A,this.m,this.W,h,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oF(a)){var c=a;break t}}c=null}if(i=c)sL(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,an(this,i);else{this.i=!1,this.o=3,s$(12),ai(this),at(this);break e}}this.S?(s3(this,h,s),oK&&this.i&&3==h&&(sO(this.U,this.V,"tick",this.mb),this.V.start())):(sL(this.j,this.m,s,null),an(this,s)),4==h&&ai(this),this.i&&!this.J&&(4==h?lc(this.l,this):(this.i=!1,s8(this)))}else(function(e){let t={};e=(e.g&&2<=a1(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(oF(e[n]))continue;var i=function(e){var t=1;e=e.split(":");let i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}(e[n]);let r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();let o=t[r]||[];t[r]=o,o.push(i)}!function(e,t){for(let i in e)t.call(void 0,e[i],i,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<s.indexOf("Unknown SID")?(this.o=3,s$(12)):(this.o=0,s$(13)),ai(this),at(this)}}}catch(e){}finally{}},oI.mb=function(){if(this.g){var e=a1(this.g),t=this.g.ja();this.C<t.length&&(ae(this),s3(this,e,t),this.i&&4!=e&&s8(this))}},oI.cancel=function(){this.J=!0,ai(this)},oI.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(sj(),s$(17)),ai(this),this.o=2,at(this)):s7(this,this.Y-e)};var ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function as(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof as){this.h=e.h,al(this,e.j),this.s=e.s,this.g=e.g,ac(this,e.m),this.l=e.l;var t=e.i,i=new aE;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),ah(this,i),this.o=e.o}else e&&(t=String(e).match(ao))?(this.h=!1,al(this,t[1]||"",!0),this.s=ad(t[2]||""),this.g=ad(t[3]||"",!0),ac(this,t[4]),this.l=ad(t[5]||"",!0),ah(this,t[6]||"",!0),this.o=ad(t[7]||"")):(this.h=!1,this.i=new aE(null,this.h))}function aa(e){return new as(e)}function al(e,t,i){e.j=i?ad(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ac(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ah(e,t,i){var n,r;t instanceof aE?(e.i=t,n=e.i,(r=e.h)&&!n.j&&(aI(n),n.i=null,n.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(a_(this,t),aS(this,i,e))},n)),n.j=r):(i||(t=ap(t,aw)),e.i=new aE(t,e.h))}function au(e,t,i){e.i.set(t,i)}function af(e){return au(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ad(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ap(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,ag),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ag(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}as.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ap(t,am,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ap(t,am,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(ap(i,"/"==i.charAt(0)?av:ay,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",ap(i,ab)),e.join("")};var am=/[#\/\?@]/g,ay=/[#\?:]/g,av=/[#\?]/g,aw=/[#\?@]/g,ab=/#/g;function aE(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function aI(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var o=e[i].substring(0,n);r=e[i].substring(n+1)}else o=e[i];t(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function a_(e,t){aI(e),t=ak(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function aT(e,t){return aI(e),t=ak(e,t),e.g.has(t)}function aS(e,t,i){a_(e,t),0<i.length&&(e.i=null,e.g.set(ak(e,t),oM(i)),e.h+=i.length)}function ak(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(oI=aE.prototype).add=function(e,t){aI(this),this.i=null,e=ak(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},oI.forEach=function(e,t){aI(this),this.g.forEach(function(i,n){i.forEach(function(i){e.call(t,i,n,this)},this)},this)},oI.ta=function(){aI(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let n=0;n<t.length;n++){let r=e[n];for(let e=0;e<r.length;e++)i.push(t[n])}return i},oI.Z=function(e){aI(this);let t=[];if("string"==typeof e)aT(this,e)&&(t=t.concat(this.g.get(ak(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},oI.set=function(e,t){return aI(this),this.i=null,aT(this,e=ak(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},oI.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},oI.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var n=t[i];let o=encodeURIComponent(String(n)),s=this.Z(n);for(n=0;n<s.length;n++){var r=o;""!==s[n]&&(r+="="+encodeURIComponent(String(s[n]))),e.push(r)}}return this.i=e.join("&")};var aA=class{constructor(e,t){this.g=e,this.map=t}};function aC(e){this.l=e||aN,e=ok.PerformanceNavigationTiming?0<(e=ok.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(ok.g&&ok.g.Ka&&ok.g.Ka()&&ok.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aN=10;function aR(e){return!!e.h||!!e.g&&e.g.size>=e.j}function aO(e){return e.h?1:e.g?e.g.size:0}function ax(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function aP(e,t){e.g?e.g.add(t):e.h=t}function aL(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function aD(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.F);return t}return oM(e.i)}aC.prototype.cancel=function(){if(this.i=aD(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var aM=class{stringify(e){return ok.JSON.stringify(e,void 0)}parse(e){return ok.JSON.parse(e,void 0)}};function aU(){this.g=new aM}function aB(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function aj(e){this.l=e.fc||null,this.j=e.ob||!1}function aF(e,t){sp.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=a$,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oP(aj,sW),aj.prototype.g=function(){return new aF(this.l,this.j)},aj.prototype.i=(c={},function(){return c}),oP(aF,sp);var a$=0;function az(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function aV(e){e.readyState=4,e.l=null,e.j=null,e.A=null,aH(e)}function aH(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(oI=aF.prototype).open=function(e,t){if(this.readyState!=a$)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,aH(this)},oI.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||ok).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},oI.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,aV(this)),this.readyState=a$},oI.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,aH(this)),this.g&&(this.readyState=3,aH(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==ok.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;az(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},oI.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?aV(this):aH(this),3==this.readyState&&az(this)}},oI.Za=function(e){this.g&&(this.response=this.responseText=e,aV(this))},oI.Ya=function(e){this.g&&(this.response=e,aV(this))},oI.ka=function(){this.g&&aV(this)},oI.setRequestHeader=function(e,t){this.v.append(e,t)},oI.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},oI.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(aF.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var aq=ok.JSON.parse;function aW(e){sp.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=aK,this.L=this.M=!1}oP(aW,sp);var aK="",aG=/^https?$/i,aJ=["POST","PUT"];function aX(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,aY(e),aZ(e)}function aY(e){e.F||(e.F=!0,sg(e,"complete"),sg(e,"error"))}function aQ(e){if(e.h&&void 0!==oS&&(!e.C[1]||4!=a1(e)||2!=e.da())){if(e.v&&4==a1(e))sA(e.La,0,e);else if(sg(e,"readystatechange"),4==a1(e)){e.h=!1;try{let s=e.da();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,i,n=!0;break;default:n=!1}if(!(t=n)){if(i=0===s){var r=String(e.I).match(ao)[1]||null;!r&&ok.self&&ok.self.location&&(r=ok.self.location.protocol.slice(0,-1)),i=!aG.test(r?r.toLowerCase():"")}t=i}if(t)sg(e,"complete"),sg(e,"success");else{e.m=6;try{var o=2<a1(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",aY(e)}}finally{aZ(e)}}}}function aZ(e,t){if(e.g){a0(e);let i=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||sg(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function a0(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(ok.clearTimeout(e.A),e.A=null)}function a1(e){return e.g?e.g.readyState:0}function a2(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case aK:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function a9(e){let t="";return o8(e,function(e,i){t+=i+":"+e+"\r\n"}),t}function a4(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=a9(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):au(e,t,i))}function a5(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function a6(e){this.Ga=0,this.j=[],this.l=new sP,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=a5("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=a5("baseRetryDelayMs",5e3,e),this.hb=a5("retryDelaySeedMs",1e4,e),this.eb=a5("forwardChannelMaxRetries",2,e),this.xa=a5("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new aC(e&&e.concurrentRequestLimit),this.Ja=new aU,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function a3(e){if(a7(e),3==e.H){var t=e.W++,i=aa(e.I);if(au(i,"SID",e.K),au(i,"RID",t),au(i,"TYPE","terminate"),li(e,i),(t=new sZ(e,e.l,t)).L=2,t.v=af(aa(i)),i=!1,ok.navigator&&ok.navigator.sendBeacon)try{i=ok.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!i&&ok.Image&&((new Image).src=t.v,i=!0),i||(t.g=lp(t.l,null),t.g.ha(t.v)),t.G=Date.now(),s8(t)}lf(e)}function a8(e){e.g&&(ls(e),e.g.cancel(),e.g=null)}function a7(e){a8(e),e.u&&(ok.clearTimeout(e.u),e.u=null),ll(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ok.clearTimeout(e.m),e.m=null)}function le(e){if(!aR(e.i)&&!e.m){e.m=!0;var t=e.Na;sb||s_(),sE||(sb(),sE=!0),sI.add(t,e),e.C=0}}function lt(e,t){var i;i=t?t.m:e.W++;let n=aa(e.I);au(n,"SID",e.K),au(n,"RID",i),au(n,"AID",e.V),li(e,n),e.o&&e.s&&a4(n,e.o,e.s),i=new sZ(e,e.l,i,e.C+1),null===e.o&&(i.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ln(e,i,1e3),i.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),aP(e.i,i),s4(i,n,t)}function li(e,t){e.na&&o8(e.na,function(e,i){au(t,i,e)}),e.h&&ar({},function(e,i){au(t,i,e)})}function ln(e,t,i){i=Math.min(e.j.length,i);var n=e.h?oO(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+i];-1==t?0<i?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<i;s++){let i=r[s].g,a=r[s].map;if(0>(i-=t))t=Math.max(0,r[s].g-100),o=!1;else try{!function(e,t,i){let n=i||"";try{ar(e,function(e,i){let r=e;oC(e)&&(r=sy(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(o){n=e.join("&");break e}}}return e=e.j.splice(0,i),t.F=e,n}function lr(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;sb||s_(),sE||(sb(),sE=!0),sI.add(t,e),e.A=0}}function lo(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=sV(oO(e.Ma,e),lh(e,e.A)),e.A++,!0)}function ls(e){null!=e.B&&(ok.clearTimeout(e.B),e.B=null)}function la(e){e.g=new sZ(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=aa(e.wa);au(t,"RID","rpc"),au(t,"SID",e.K),au(t,"AID",e.V),au(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&au(t,"TO",e.qa),au(t,"TYPE","xmlhttp"),li(e,t),e.o&&e.s&&a4(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var i=e.g;e=e.pa,i.L=1,i.v=af(aa(t)),i.s=null,i.S=!0,s5(i,e)}function ll(e){null!=e.v&&(ok.clearTimeout(e.v),e.v=null)}function lc(e,t){var i=null;if(e.g==t){ll(e),ls(e),e.g=null;var n=2}else{if(!ax(e.i,t))return;i=t.F,aL(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){i=t.s?t.s.length:0,t=Date.now()-t.G;var r,o=e.C;sg(n=sU(),new sz(n,i)),le(e)}else lr(e)}else if(3==(o=t.o)||0==o&&0<t.ca||!(1==n&&(r=t,!(aO(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=sV(oO(e.Na,e,r),lh(e,e.C)),e.C++,!0)))||2==n&&lo(e)))switch(i&&0<i.length&&((t=e.i).i=t.i.concat(i)),o){case 1:lu(e,5);break;case 4:lu(e,10);break;case 3:lu(e,6);break;default:lu(e,2)}}}function lh(e,t){let i=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(i*=2),i*t}function lu(e,t){if(e.l.info("Error code "+t),2==t){var i=null;e.h&&(i=null);var n=oO(e.pb,e);i||(i=new as("//www.google.com/images/cleardot.gif"),ok.location&&"http"==ok.location.protocol||al(i,"https"),af(i)),function(e,t){let i=new sP;if(ok.Image){let n=new Image;n.onload=ox(aB,i,n,"TestLoadImage: loaded",!0,t),n.onerror=ox(aB,i,n,"TestLoadImage: error",!1,t),n.onabort=ox(aB,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=ox(aB,i,n,"TestLoadImage: timeout",!1,t),ok.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else s$(2);e.H=0,e.h&&e.h.za(t),lf(e),a7(e)}function lf(e){if(e.H=0,e.ma=[],e.h){let t=aD(e.i);(0!=t.length||0!=e.j.length)&&(oU(e.ma,t),oU(e.ma,e.j),e.i.i.length=0,oM(e.j),e.j.length=0),e.h.ya()}}function ld(e,t,i){var n=i instanceof as?aa(i):new as(i);if(""!=n.g)t&&(n.g=t+"."+n.g),ac(n,n.m);else{var r=ok.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var o=new as(null);n&&al(o,n),t&&(o.g=t),r&&ac(o,r),i&&(o.l=i),n=o}return i=e.F,t=e.Da,i&&t&&au(n,i,t),au(n,"VER",e.ra),li(e,n),n}function lp(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new aW(i&&e.Ha&&!e.va?new aj({ob:!0}):e.va)).Oa(e.J),t}function lg(){}function lm(){if(oq&&!(10<=Number(o1)))throw Error("Environmental error: no available transport.")}function ly(e,t){sp.call(this),this.g=new a6(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!oF(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!oF(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new lb(this)}function lv(e){sX.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function lw(){sY.call(this),this.status=1}function lb(e){this.g=e}function lE(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function lI(e,t,i){i||(i=0);var n=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)n[r]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],r=e.g[2];var o=e.g[3],s=t+(o^i&(r^o))+n[0]+3614090360&4294967295;s=o+(r^(t=i+(s<<7&4294967295|s>>>25))&(i^r))+n[1]+3905402710&4294967295,s=r+(i^(o=t+(s<<12&4294967295|s>>>20))&(t^i))+n[2]+606105819&4294967295,s=i+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+n[3]+3250441966&4294967295,s=t+(o^(i=r+(s<<22&4294967295|s>>>10))&(r^o))+n[4]+4118548399&4294967295,s=o+(r^(t=i+(s<<7&4294967295|s>>>25))&(i^r))+n[5]+1200080426&4294967295,s=r+(i^(o=t+(s<<12&4294967295|s>>>20))&(t^i))+n[6]+2821735955&4294967295,s=i+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+n[7]+4249261313&4294967295,s=t+(o^(i=r+(s<<22&4294967295|s>>>10))&(r^o))+n[8]+1770035416&4294967295,s=o+(r^(t=i+(s<<7&4294967295|s>>>25))&(i^r))+n[9]+2336552879&4294967295,s=r+(i^(o=t+(s<<12&4294967295|s>>>20))&(t^i))+n[10]+4294925233&4294967295,s=i+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+n[11]+2304563134&4294967295,s=t+(o^(i=r+(s<<22&4294967295|s>>>10))&(r^o))+n[12]+1804603682&4294967295,s=o+(r^(t=i+(s<<7&4294967295|s>>>25))&(i^r))+n[13]+4254626195&4294967295,s=r+(i^(o=t+(s<<12&4294967295|s>>>20))&(t^i))+n[14]+2792965006&4294967295,s=i+(t^(r=o+(s<<17&4294967295|s>>>15))&(o^t))+n[15]+1236535329&4294967295,i=r+(s<<22&4294967295|s>>>10),s=t+(r^o&(i^r))+n[1]+4129170786&4294967295,t=i+(s<<5&4294967295|s>>>27),s=o+(i^r&(t^i))+n[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^i&(o^t))+n[11]+643717713&4294967295,r=o+(s<<14&4294967295|s>>>18),s=i+(o^t&(r^o))+n[0]+3921069994&4294967295,i=r+(s<<20&4294967295|s>>>12),s=t+(r^o&(i^r))+n[5]+3593408605&4294967295,t=i+(s<<5&4294967295|s>>>27),s=o+(i^r&(t^i))+n[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^i&(o^t))+n[15]+3634488961&4294967295,r=o+(s<<14&4294967295|s>>>18),s=i+(o^t&(r^o))+n[4]+3889429448&4294967295,i=r+(s<<20&4294967295|s>>>12),s=t+(r^o&(i^r))+n[9]+568446438&4294967295,t=i+(s<<5&4294967295|s>>>27),s=o+(i^r&(t^i))+n[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^i&(o^t))+n[3]+4107603335&4294967295,r=o+(s<<14&4294967295|s>>>18),s=i+(o^t&(r^o))+n[8]+1163531501&4294967295,i=r+(s<<20&4294967295|s>>>12),s=t+(r^o&(i^r))+n[13]+2850285829&4294967295,t=i+(s<<5&4294967295|s>>>27),s=o+(i^r&(t^i))+n[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=r+(t^i&(o^t))+n[7]+1735328473&4294967295,r=o+(s<<14&4294967295|s>>>18),s=i+(o^t&(r^o))+n[12]+2368359562&4294967295,s=t+((i=r+(s<<20&4294967295|s>>>12))^r^o)+n[5]+4294588738&4294967295,s=o+((t=i+(s<<4&4294967295|s>>>28))^i^r)+n[8]+2272392833&4294967295,s=r+((o=t+(s<<11&4294967295|s>>>21))^t^i)+n[11]+1839030562&4294967295,s=i+((r=o+(s<<16&4294967295|s>>>16))^o^t)+n[14]+4259657740&4294967295,s=t+((i=r+(s<<23&4294967295|s>>>9))^r^o)+n[1]+2763975236&4294967295,s=o+((t=i+(s<<4&4294967295|s>>>28))^i^r)+n[4]+1272893353&4294967295,s=r+((o=t+(s<<11&4294967295|s>>>21))^t^i)+n[7]+4139469664&4294967295,s=i+((r=o+(s<<16&4294967295|s>>>16))^o^t)+n[10]+3200236656&4294967295,s=t+((i=r+(s<<23&4294967295|s>>>9))^r^o)+n[13]+681279174&4294967295,s=o+((t=i+(s<<4&4294967295|s>>>28))^i^r)+n[0]+3936430074&4294967295,s=r+((o=t+(s<<11&4294967295|s>>>21))^t^i)+n[3]+3572445317&4294967295,s=i+((r=o+(s<<16&4294967295|s>>>16))^o^t)+n[6]+76029189&4294967295,s=t+((i=r+(s<<23&4294967295|s>>>9))^r^o)+n[9]+3654602809&4294967295,s=o+((t=i+(s<<4&4294967295|s>>>28))^i^r)+n[12]+3873151461&4294967295,s=r+((o=t+(s<<11&4294967295|s>>>21))^t^i)+n[15]+530742520&4294967295,s=i+((r=o+(s<<16&4294967295|s>>>16))^o^t)+n[2]+3299628645&4294967295,i=r+(s<<23&4294967295|s>>>9),s=t+(r^(i|~o))+n[0]+4096336452&4294967295,t=i+(s<<6&4294967295|s>>>26),s=o+(i^(t|~r))+n[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~i))+n[14]+2878612391&4294967295,r=o+(s<<15&4294967295|s>>>17),s=i+(o^(r|~t))+n[5]+4237533241&4294967295,i=r+(s<<21&4294967295|s>>>11),s=t+(r^(i|~o))+n[12]+1700485571&4294967295,t=i+(s<<6&4294967295|s>>>26),s=o+(i^(t|~r))+n[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~i))+n[10]+4293915773&4294967295,r=o+(s<<15&4294967295|s>>>17),s=i+(o^(r|~t))+n[1]+2240044497&4294967295,i=r+(s<<21&4294967295|s>>>11),s=t+(r^(i|~o))+n[8]+1873313359&4294967295,t=i+(s<<6&4294967295|s>>>26),s=o+(i^(t|~r))+n[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~i))+n[6]+2734768916&4294967295,r=o+(s<<15&4294967295|s>>>17),s=i+(o^(r|~t))+n[13]+1309151649&4294967295,i=r+(s<<21&4294967295|s>>>11),s=t+(r^(i|~o))+n[4]+4149444226&4294967295,t=i+(s<<6&4294967295|s>>>26),s=o+(i^(t|~r))+n[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=r+(t^(o|~i))+n[2]+718787259&4294967295,r=o+(s<<15&4294967295|s>>>17),s=i+(o^(r|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+o&4294967295}function l_(e,t){this.h=t;for(var i=[],n=!0,r=e.length-1;0<=r;r--){var o=0|e[r];n&&o==t||(i[r]=o,n=!1)}this.g=i}(oI=aW.prototype).Oa=function(e){this.M=e},oI.ha=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():d.g(),this.C=this.u?sK(this.u):sK(d),this.g.onreadystatechange=oO(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){aX(this,e);return}if(e=i||"",i=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())i.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[o,s]of(n=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),r=ok.FormData&&e instanceof ok.FormData,!(0<=oD(aJ,t))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var o;a0(this),0<this.B&&((this.L=(o=this.g,oq&&"number"==typeof o.timeout&&void 0!==o.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=oO(this.ua,this)):this.A=sA(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){aX(this,e)}},oI.ua=function(){void 0!==oS&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,sg(this,"timeout"),this.abort(8))},oI.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,sg(this,"complete"),sg(this,"abort"),aZ(this))},oI.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aZ(this,!0)),aW.$.N.call(this)},oI.La=function(){this.s||(this.G||this.v||this.l?aQ(this):this.kb())},oI.kb=function(){aQ(this)},oI.isActive=function(){return!!this.g},oI.da=function(){try{return 2<a1(this)?this.g.status:-1}catch(e){return -1}},oI.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},oI.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),aq(t)}},oI.Ia=function(){return this.m},oI.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(oI=a6.prototype).ra=8,oI.H=1,oI.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new sZ(this,this.l,e),o=this.s;if(this.U&&(o?st(o=o7(o),this.U):o=this.U),null!==this.o||this.O||(r.I=o,o=null),this.P)e:{for(var t=0,i=0;i<this.j.length;i++){t:{var n=this.j[i];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.j.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=ln(this,r,t),au(i=aa(this.I),"RID",e),au(i,"CVER",22),this.F&&au(i,"X-HTTP-Session-Id",this.F),li(this,i),o&&(this.O?t="headers="+encodeURIComponent(String(a9(o)))+"&"+t:this.o&&a4(i,this.o,o)),aP(this.i,r),this.bb&&au(i,"TYPE","init"),this.P?(au(i,"$req",t),au(i,"SID","null"),r.aa=!0,s4(r,i,null)):s4(r,i,t),this.H=2}}else 3==this.H&&(e?lt(this,e):0==this.j.length||aR(this.i)||lt(this))}},oI.Ma=function(){if(this.u=null,la(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=sV(oO(this.jb,this),e)}},oI.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,s$(10),a8(this),la(this))},oI.ib=function(){null!=this.v&&(this.v=null,a8(this),lo(this),s$(19))},oI.pb=function(e){e?(this.l.info("Successfully pinged google.com"),s$(2)):(this.l.info("Failed to ping google.com"),s$(1))},oI.isActive=function(){return!!this.h&&this.h.isActive(this)},(oI=lg.prototype).Ba=function(){},oI.Aa=function(){},oI.za=function(){},oI.ya=function(){},oI.isActive=function(){return!0},oI.Va=function(){},lm.prototype.g=function(e,t){return new ly(e,t)},oP(ly,sp),ly.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,i=this.h||void 0;s$(0),e.Y=t,e.na=i||{},e.G=e.aa,e.I=ld(e,null,e.Y),le(e)},ly.prototype.close=function(){a3(this.g)},ly.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=sy(e),e=i);t.j.push(new aA(t.fb++,e)),3==t.H&&le(t)},ly.prototype.N=function(){this.g.h=null,delete this.j,a3(this.g),delete this.g,ly.$.N.call(this)},oP(lv,sX),oP(lw,sY),oP(lb,lg),lb.prototype.Ba=function(){sg(this.g,"a")},lb.prototype.Aa=function(e){sg(this.g,new lv(e))},lb.prototype.za=function(e){sg(this.g,new lw)},lb.prototype.ya=function(){sg(this.g,"b")},oP(lE,function(){this.blockSize=-1}),lE.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},lE.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,n=this.m,r=this.h,o=0;o<t;){if(0==r)for(;o<=i;)lI(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(n[r++]=e.charCodeAt(o++),r==this.blockSize){lI(this,n),r=0;break}}else for(;o<t;)if(n[r++]=e[o++],r==this.blockSize){lI(this,n),r=0;break}}this.h=r,this.i+=t},lE.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.j(e),e=Array(16),t=i=0;4>t;++t)for(var n=0;32>n;n+=8)e[i++]=this.g[t]>>>n&255;return e};var lT={};function lS(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(lT,e)?lT[e]:lT[e]=new l_([0|e],0>e?-1:0):new l_([0|e],0>e?-1:0)}function lk(e){if(isNaN(e)||!isFinite(e))return lC;if(0>e)return lP(lk(-e));for(var t=[],i=1,n=0;e>=i;n++)t[n]=e/i|0,i*=lA;return new l_(t,0)}var lA=4294967296,lC=lS(0),lN=lS(1),lR=lS(16777216);function lO(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function lx(e){return -1==e.h}function lP(e){for(var t=e.g.length,i=[],n=0;n<t;n++)i[n]=~e.g[n];return new l_(i,~e.h).add(lN)}function lL(e,t){return e.add(lP(t))}function lD(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function lM(e,t){this.g=e,this.h=t}function lU(e,t){if(lO(t))throw Error("division by zero");if(lO(e))return new lM(lC,lC);if(lx(e))return t=lU(lP(e),t),new lM(lP(t.g),lP(t.h));if(lx(t))return t=lU(e,lP(t)),new lM(lP(t.g),t.h);if(30<e.g.length){if(lx(e)||lx(t))throw Error("slowDivide_ only works with positive integers.");for(var i=lN,n=t;0>=n.X(e);)i=lB(i),n=lB(n);var r=lj(i,1),o=lj(n,1);for(n=lj(n,2),i=lj(i,2);!lO(n);){var s=o.add(n);0>=s.X(e)&&(r=r.add(i),o=s),n=lj(n,1),i=lj(i,1)}return t=lL(e,r.R(t)),new lM(r,t)}for(r=lC;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(i=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),s=(o=lk(i)).R(t);lx(s)||0<s.X(e);)i-=n,s=(o=lk(i)).R(t);lO(o)&&(o=lN),r=r.add(o),e=lL(e,s)}return new lM(r,e)}function lB(e){for(var t=e.g.length+1,i=[],n=0;n<t;n++)i[n]=e.D(n)<<1|e.D(n-1)>>>31;return new l_(i,e.h)}function lj(e,t){var i=t>>5;t%=32;for(var n=e.g.length-i,r=[],o=0;o<n;o++)r[o]=0<t?e.D(o+i)>>>t|e.D(o+i+1)<<32-t:e.D(o+i);return new l_(r,e.h)}(oI=l_.prototype).ea=function(){if(lx(this))return-lP(this).ea();for(var e=0,t=1,i=0;i<this.g.length;i++){var n=this.D(i);e+=(0<=n?n:lA+n)*t,t*=lA}return e},oI.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(lO(this))return"0";if(lx(this))return"-"+lP(this).toString(e);for(var t=lk(Math.pow(e,6)),i=this,n="";;){var r=lU(i,t).g,o=((0<(i=lL(i,r.R(t))).g.length?i.g[0]:i.h)>>>0).toString(e);if(lO(i=r))return o+n;for(;6>o.length;)o="0"+o;n=o+n}},oI.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},oI.X=function(e){return lx(e=lL(this,e))?-1:lO(e)?0:1},oI.abs=function(){return lx(this)?lP(this):this},oI.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0,r=0;r<=t;r++){var o=n+(65535&this.D(r))+(65535&e.D(r)),s=(o>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);n=s>>>16,o&=65535,s&=65535,i[r]=s<<16|o}return new l_(i,-2147483648&i[i.length-1]?-1:0)},oI.R=function(e){if(lO(this)||lO(e))return lC;if(lx(this))return lx(e)?lP(this).R(lP(e)):lP(lP(this).R(e));if(lx(e))return lP(this.R(lP(e)));if(0>this.X(lR)&&0>e.X(lR))return lk(this.ea()*e.ea());for(var t=this.g.length+e.g.length,i=[],n=0;n<2*t;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<e.g.length;r++){var o=this.D(n)>>>16,s=65535&this.D(n),a=e.D(r)>>>16,l=65535&e.D(r);i[2*n+2*r]+=s*l,lD(i,2*n+2*r),i[2*n+2*r+1]+=o*l,lD(i,2*n+2*r+1),i[2*n+2*r+1]+=s*a,lD(i,2*n+2*r+1),i[2*n+2*r+2]+=o*a,lD(i,2*n+2*r+2)}for(n=0;n<t;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=t;n<2*t;n++)i[n]=0;return new l_(i,0)},oI.gb=function(e){return lU(this,e).h},oI.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)&e.D(n);return new l_(i,this.h&e.h)},oI.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)|e.D(n);return new l_(i,this.h|e.h)},oI.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)^e.D(n);return new l_(i,this.h^e.h)},lm.prototype.createWebChannel=lm.prototype.g,ly.prototype.send=ly.prototype.u,ly.prototype.open=ly.prototype.m,ly.prototype.close=ly.prototype.close,sH.NO_ERROR=0,sH.TIMEOUT=8,sH.HTTP_ERROR=6,sq.COMPLETE="complete",sG.EventType=sJ,sJ.OPEN="a",sJ.CLOSE="b",sJ.ERROR="c",sJ.MESSAGE="d",sp.prototype.listen=sp.prototype.O,aW.prototype.listenOnce=aW.prototype.P,aW.prototype.getLastError=aW.prototype.Sa,aW.prototype.getLastErrorCode=aW.prototype.Ia,aW.prototype.getStatus=aW.prototype.da,aW.prototype.getResponseJson=aW.prototype.Wa,aW.prototype.getResponseText=aW.prototype.ja,aW.prototype.send=aW.prototype.ha,aW.prototype.setWithCredentials=aW.prototype.Oa,lE.prototype.digest=lE.prototype.l,lE.prototype.reset=lE.prototype.reset,lE.prototype.update=lE.prototype.j,l_.prototype.add=l_.prototype.add,l_.prototype.multiply=l_.prototype.R,l_.prototype.modulo=l_.prototype.gb,l_.prototype.compare=l_.prototype.X,l_.prototype.toNumber=l_.prototype.ea,l_.prototype.toString=l_.prototype.toString,l_.prototype.getBits=l_.prototype.D,l_.fromNumber=lk,l_.fromString=function e(t,i){if(0==t.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==t.charAt(0))return lP(e(t.substring(1),i));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lk(Math.pow(i,8)),r=lC,o=0;o<t.length;o+=8){var s=Math.min(8,t.length-o),a=parseInt(t.substring(o,o+s),i);8>s?(s=lk(Math.pow(i,s)),r=r.R(s).add(lk(a))):r=(r=r.R(n)).add(lk(a))}return r},oT.createWebChannelTransport=function(){return new lm},oT.getStatEventTarget=function(){return sU()},oT.ErrorCode=sH,oT.EventType=sq,oT.Event=sD,oT.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},oT.FetchXmlHttpFactory=aj,oT.WebChannel=sG,oT.XhrIo=aW,oT.Md5=lE;var lF=oT.Integer=l_;const l$="@firebase/firestore";/**
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
 */class lz{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}/** A user with a null UID. */lz.UNAUTHENTICATED=new lz(null),// non-FirebaseAuth providers.
lz.GOOGLE_CREDENTIALS=new lz("google-credentials-uid"),lz.FIRST_PARTY=new lz("first-party-uid"),lz.MOCK_USER=new lz("mock-user");/**
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
 */let lV="10.3.1";/**
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
 */const lH=new nv("@firebase/firestore");function lq(e,...t){if(lH.logLevel<=oE.DEBUG){let i=t.map(lK);lH.debug(`Firestore (${lV}): ${e}`,...i)}}function lW(e,...t){if(lH.logLevel<=oE.ERROR){let i=t.map(lK);lH.error(`Firestore (${lV}): ${e}`,...i)}}/**
 * Converts an additional log parameter to a string representation.
 */function lK(e){if("string"==typeof e)return e;try{/**
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
 *//** Formats an object as a JSON string, suitable for logging. */return JSON.stringify(e)}catch(t){// Converting to JSON failed, just log the object directly
return e}}/**
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
 */function lG(e="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t=`FIRESTORE (${lV}) INTERNAL ASSERTION FAILED: `+e;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw lW(t),Error(t)}/**
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
 */const lJ={/** The operation was cancelled (typically by the caller). */CANCELLED:"cancelled",/**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */INVALID_ARGUMENT:"invalid-argument",/**
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
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */UNAVAILABLE:"unavailable"};/** An error returned by a Firestore operation. */class lX extends i3{/** @hideconstructor */constructor(/**
     * The backend error code associated with this error.
     */e,/**
     * A custom error description.
     */t){super(e,t),this.code=e,this.message=t,// class and so inheritance does not work correctly. We could alternatively
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
 */class lY{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class lQ{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class lZ{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){// Fire with initial user.
e.enqueueRetryable(()=>t(lz.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class l0{constructor(e){this.token=e,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class l1{constructor(e){this.t=e,/** Tracks the current User. */this.currentUser=lz.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),r=new lY;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new lY,e.enqueueRetryable(()=>n(this.currentUser))};let o=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},s=e=>{lq("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(e=>s(e)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?s(e):(lq("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new lY)}},0),o()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==e?(lq("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||lG(),new lQ(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||lG(),new lz(e)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class l2{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=lz.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class l9{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new l2(this.l,this.h,this.P))}start(e,t){// Fire with initial uid.
e.enqueueRetryable(()=>t(lz.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l5{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let i=e=>{null!=e.error&&lq("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.R;return this.R=e.token,lq("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let n=e=>{lq("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):lq("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||lG(),this.R=e.token,new l4(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class l6{static V(){// Alphanumeric characters
let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let n=/**
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
 */function(e){// Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}(40);for(let r=0;r<n.length;++r)// be evenly mapped to indices of `chars` via a modulo operation.
i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function l3(e,t){return e<t?-1:e>t?1:0}/**
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
 */class l8{constructor(e,t,i){void 0===t?t=0:t>e.length&&lG(),void 0===i?i=e.length-t:i>e.length-t&&lG(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===l8.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof l8?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let n=0;n<i;n++){let i=e.get(n),r=t.get(n);if(i<r)return -1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class l7 extends l8{construct(e,t,i){return new l7(e,t,i)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...e){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new lX(lJ.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);// Strip leading and traling slashed.
t.push(...i.split("/").filter(e=>e.length>0))}return new l7(t)}static emptyPath(){return new l7([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(l7.fromString(e))}static fromName(e){return new ce(l7.fromString(e).popFirst(5))}static empty(){return new ce(l7.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===l7.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return l7.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(e){return new ce(new l7(e.slice()))}}/** Verifies whether `e` is an IndexedDbTransactionError. */function ct(e){// Use name equality, as instanceof checks on errors don't work with errors
// that wrap other errors.
return"IndexedDbTransactionError"===e.name}/**
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
class ci{constructor(e,t){this.comparator=e,this.root=t||cr.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(e,t){return new ci(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,cr.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(e){return new ci(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cr.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(e){// Number of nodes that were pruned when descending right
let t=0,i=this.root;for(;!i.isEmpty();){let n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.root.reverseTraversal(e)}// Returns an iterator over the SortedMap.
getIterator(){return new cn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cn(this.root,e,this.comparator,!1)}getReverseIterator(){return new cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cn(this.root,e,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class cn{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(e);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class cr{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:cr.RED,this.left=null!=n?n:cr.EMPTY,this.right=null!=r?r:cr.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(e,t,i,n,r){return new cr(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
// for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}// Traverses the tree in reverse key order and calls the specified action
// function for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}// Returns the minimum node in the tree.
min(){return this.left.isEmpty()?this:this.left.min()}// Returns the maximum key in the tree.
minKey(){return this.min().key}// Returns the maximum key in the tree.
maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}// Returns new tree, with the key/value added.
insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return cr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(e,t){let i,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return cr.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,cr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,cr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}// For testing.
checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw lG();let e=this.left.check();if(e!==this.right.check())throw lG();return e+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
cr.EMPTY=null,cr.RED=!0,cr.BLACK=!1,// end LLRBEmptyNode
cr.EMPTY=new class{constructor(){this.size=0}get key(){throw lG()}get value(){throw lG()}get color(){throw lG()}get left(){throw lG()}get right(){throw lG()}// Returns a copy of the current node.
copy(e,t,i,n,r){return this}// Returns a copy of the tree, with the specified key/value added.
insert(e,t,i){return new cr(e,t)}// Returns a copy of the tree, with the specified key removed.
remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}// For testing.
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
 */class co{constructor(e){this.comparator=e,this.data=new ci(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}/** Iterates elements in order defined by "comparator" */forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cs(this.data.getIterator())}getIteratorFrom(e){return new cs(this.data.getIteratorFrom(e))}/** Inserts or updates an element */add(e){return this.copy(this.data.remove(e).insert(e,!0))}/** Deletes an element */delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;// Make sure `result` always refers to the larger one of the two sets.
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new co(this.comparator);return t.data=e,t}}class cs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class cl{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ca("Invalid base64 string: "+e):e}}(e);return new cl(t)}static fromUint8Array(e){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let t=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new cl(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return l3(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function cc(e){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof e?e:"string"==typeof e?Number(e):0}cl.EMPTY_BYTE_STRING=new cl(""),new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
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
 */class ch{/**
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
     */constructor(e,t,i,n,r,o,s,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class cu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cu("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof cu&&e.projectId===this.projectId&&e.database===this.database}}new ci(ce.comparator),new ci(ce.comparator),new ci(ce.comparator),new co(ce.comparator),new co(l3),/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(g=p||(p={}))[g.OK=0]="OK",g[g.CANCELLED=1]="CANCELLED",g[g.UNKNOWN=2]="UNKNOWN",g[g.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",g[g.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",g[g.NOT_FOUND=5]="NOT_FOUND",g[g.ALREADY_EXISTS=6]="ALREADY_EXISTS",g[g.PERMISSION_DENIED=7]="PERMISSION_DENIED",g[g.UNAUTHENTICATED=16]="UNAUTHENTICATED",g[g.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",g[g.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",g[g.ABORTED=10]="ABORTED",g[g.OUT_OF_RANGE=11]="OUT_OF_RANGE",g[g.UNIMPLEMENTED=12]="UNIMPLEMENTED",g[g.INTERNAL=13]="INTERNAL",g[g.UNAVAILABLE=14]="UNAVAILABLE",g[g.DATA_LOSS=15]="DATA_LOSS",new lF([4294967295,4294967295],0);/**
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
/** Firestore index value writer.  */class cf{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */dt(e,t){this.Tt(e,t),// (see go/firestore-storage-format#encodings).
t.Et()}Tt(e,t){var i;if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(cc(e.integerValue));else if("doubleValue"in e){let i=cc(e.doubleValue);isNaN(i)?this.At(t,13):(this.At(t,15),0===i&&1/i==-1/0?t.Rt(0):t.Rt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.At(t,20),"string"==typeof i?t.Vt(i):(t.Vt(`${i.seconds||""}`),t.Rt(i.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt("string"==typeof(i=e.bytesValue)?cl.fromBase64String(i):cl.fromUint8Array(i)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.At(t,45),t.Rt(i.latitude||0),t.Rt(i.longitude||0)}else"mapValue"in e?"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):lG()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let i=e.fields||{};for(let e of(this.At(t,55),Object.keys(i)))this.ft(e,t),this.Tt(i[e],t)}bt(e,t){let i=e.values||[];for(let e of(this.At(t,50),i))this.Tt(e,t)}wt(e,t){this.At(t,37),ce.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
e.Rt(2)}}cf.Ct=new cf,new Uint8Array(0);class cd{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
e,t,// us from collecting a huge number of sequence numbers if the cache has grown very large.
i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new cd(e,cd.DEFAULT_COLLECTION_PERCENTILE,cd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/** The Platform's 'document' implementation or null if not available. */function cp(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
// eslint-disable-next-line no-restricted-globals
return"undefined"!=typeof document?document:null}/**
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
 *//** A mutation queue for a specific user, backed by IndexedDB. */cd.DEFAULT_COLLECTION_PERCENTILE=10,cd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cd.DEFAULT=new cd(41943040,cd.DEFAULT_COLLECTION_PERCENTILE,cd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cd.DISABLED=new cd(-1,0,0);/**
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
 */class cg{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */e,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */t,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */i=1e3,n=1.5,r=6e4){this._i=e,this.timerId=t,this.xo=i,this.Oo=n,this.No=r,this.Bo=0,this.Lo=null,/** The last backoff attempt, as epoch milliseconds. */this.ko=Date.now(),this.reset()}/**
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
     */Qo(e){// Cancel any pending backoff operation.
this.cancel();// First schedule using the current base (which may be 0 and should be
// honored as such).
let t=Math.floor(this.Bo+this.Ko()),i=Math.max(0,Date.now()-this.ko),n=Math.max(0,t-i);// Guard against lastAttemptTime being in the future due to a clock change.
n>0&&lq("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,()=>(this.ko=Date.now(),e())),// bounds.
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
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */class cm{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new lY,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
// 'UnhandledPromiseRejectionWarning' log spam.
this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}/**
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
     */static createAndSchedule(e,t,i,n,r){let o=Date.now()+i,s=new cm(e,t,o,n,r);return s.start(i),s}/**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}/**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */skipDelay(){return this.handleDelayElapsed()}/**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new lX(lJ.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class cy{constructor(e,t,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=lz.UNAUTHENTICATED,this.clientId=l6.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{lq("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(lq("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lX(lJ.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new lY;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function(e,t){if(lW("AsyncQueue",`${t}: ${e}`),ct(e))return new lX(lJ.UNAVAILABLE,`${t}: ${e}`);throw e}(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}/**
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
 */function cv(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const cw=new Map;/**
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
 */class cb{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new lX(lJ.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new lX(lJ.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(e,t,i,n){if(!0===t&&!0===n)throw new lX(lJ.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cv(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new lX(lJ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new lX(lJ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new lX(lJ.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,i;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cE{/** @hideconstructor */constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cb({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new lX(lJ.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new lX(lJ.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cb(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new lZ;switch(e.type){case"firstParty":return new l9(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new lX(lJ.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(e){let t=cw.get(e);t&&(lq("ComponentProvider","Removing Datastore"),cw.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class cI{constructor(){// The last promise in the queue.
this.Za=Promise.resolve(),// retried with backoff.
this.Xa=[],// be changed again.
this.eu=!1,// automatically removed after they are run or canceled.
this.tu=[],this.nu=null,// assertion sanity-checks.
this.ru=!1,this.iu=!1,this.su=[],this.Ho=new cg(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.ou=()=>{let e=cp();e&&lq("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=cp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(e){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=cp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let t=new lY;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ct(e))throw e;// Failure will be handled by AsyncQueue
lq("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let i=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw lW("INTERNAL UNHANDLED ERROR: ",i),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,i){this._u(),this.su.indexOf(e)>-1&&(t=0);let n=cm.createAndSchedule(this,e,t,i,e=>this.cu(e));return this.tu.push(n),n}_u(){this.nu&&lG()}verifyOperationInProgress(){}/**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */async lu(){// Operations in the queue prior to draining may have enqueued additional
// operations. Keep draining the queue until the tail is no longer advanced,
// which indicates that no more new operations were enqueued and that all
// operations were executed.
let e;do e=this.Za,await e;while(e!==this.Za)}/**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}/**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */Pu(e){// Note that draining may generate more delayed ops, so we do that first.
return this.lu().then(()=>{for(let t of(// Run ops in the same order they'd run if they ran naturally.
this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"/* TimerId.All */!==e&&t.timerId===e)break;return this.lu()})}/**
     * For Tests: Skip all subsequent delays for a timer id.
     */Iu(e){this.su.push(e)}/** Called once a DelayedOperation is run or canceled. */cu(e){// NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
let t=this.tu.indexOf(e);this.tu.splice(t,1)}}/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */class c_ extends cE{/** @hideconstructor */constructor(e,t,i,n){super(e,t,i,n),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new cI,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
function(e){var t,i,n,r,o,s;let a=e._freezeSettings(),l=(r=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new ch(r,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,cv(a.experimentalLongPollingOptions),a.useFetchStreams));e._firestoreClient=new cy(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(i=a.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=a.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}(this),this._firestoreClient.terminate()}}function cT(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function cS(e){return void 0!==e&&void 0!==e.enterprise}RegExp("[~\\*/\\[\\]]"),new WeakMap,function(e=!0){lV=nH,nF(new nc("firestore",(t,{instanceIdentifier:i,options:n})=>{let r=t.getProvider("app").getImmediate(),o=new c_(new l1(t.getProvider("auth-internal")),new l5(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new lX(lJ.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cu(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),o._setSettings(n),o},"PUBLIC").setMultipleInstances(!0)),nK(l$,"4.1.3",void 0),nK(l$,"4.1.3","esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;class ck{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function cA(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cC=new i8("auth","Firebase",cA()),cN=new nv("@firebase/auth");function cR(e,...t){cN.logLevel<=oE.ERROR&&cN.error(`Auth (${nH}): ${e}`,...t)}/**
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
 */function cO(e,...t){throw cP(e,...t)}function cx(e,...t){return cP(e,...t)}function cP(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return cC.create(e,...t)}function cL(e,t,...i){if(!e)throw cP(t,...i)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function cD(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw cR(t),Error(t)}/**
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
 */function cM(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function cU(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class cB{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||cD("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(i9())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===cU()||"https:"===cU()||i4()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
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
 */function cj(e,t){e.emulator||cD("Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class cF{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void cD("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void cD("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void cD("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 * Map from errors returned by the server to errors to developer visible errors
 */const c$={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},cz=new cB(3e4,6e4);function cV(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function cH(e,t,i,n,r={}){return cq(e,r,async()=>{let r={},o={};n&&("GET"/* HttpMethod.GET */===t?o=n:r={body:JSON.stringify(n)});let s=ni(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(a["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),cF.fetch()(cK(e,e.config.apiHost,i,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function cq(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},c$),t);try{let t=new cG(e),r=await Promise.race([i(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let o=await r.json();if("needConfirmation"in o)throw cJ(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,o);if(r.ok&&!("errorMessage"in o))return o;{let t=r.ok?o.errorMessage:o.error.message,[i,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===i)throw cJ(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,o);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===i)throw cJ(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,o);if("USER_DISABLED"/* ServerError.USER_DISABLED */===i)throw cJ(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,o);let a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw function(e,t,i){let n=Object.assign(Object.assign({},cA()),{[t]:i}),r=new i8("auth","Firebase",n);return r.create(t,{appName:e.name})}(e,a,s);cO(e,a)}}catch(t){if(t instanceof i3)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
cO(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function cW(e,t,i,n,r={}){let o=await cH(e,t,i,n,r);return"mfaPendingCredential"in o&&cO(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:o}),o}function cK(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?cj(e.config,r):`${e.config.apiScheme}://${r}`}class cG{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(cx(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),cz.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cJ(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=cx(e,t,n);return(// We know customData is defined on error because errorParams is defined
r.customData._tokenResponse=i,r)}async function cX(e,t){return cH(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,cV(e,t))}/**
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
 */async function cY(e,t){return cH(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function cQ(e,t){return cH(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
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
 */function cZ(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function c0(e,t=!1){let i=nl(e),n=await i.getIdToken(t),r=c2(n);cL(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:n,authTime:cZ(c1(r.auth_time)),issuedAtTime:cZ(c1(r.iat)),expirationTime:cZ(c1(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function c1(e){return 1e3*Number(e)}function c2(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return cR("JWT malformed, contained fewer than 3 sections"),null;try{let e=iK(i);if(!e)return cR("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return cR("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */async function c9(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof i3&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */class c4{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
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
 */class c5{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cZ(this.lastLoginAt),this.creationTime=cZ(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function c6(e){var t;let i=e.auth,n=await e.getIdToken(),r=await c9(e,cQ(i,{idToken:n}));cL(null==r?void 0:r.users.length,i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o=r.users[0];e._notifyReloadListener(o);let s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,i=cT(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],a=function(e,t){let i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,s),l=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null==a?void 0:a.length),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new c5(o.createdAt,o.lastLoginAt),isAnonymous:!!l&&c};Object.assign(e,h)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function c3(e){let t=nl(e);await c6(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
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
 */async function c8(e,t){let i=await cq(e,{},async()=>{let i=ni({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,o=cK(e,n,"/v1/token"/* Endpoint.TOKEN */,`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",cF.fetch()(o,{method:"POST"/* HttpMethod.POST */,headers:s,body:i})});// The response comes back in snake_case. Convert to camel:
return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}/**
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
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class c7{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){cL(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cL(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cL(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=c2(e);return cL(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cL(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cL(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(cL(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await c8(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,o=new c7;return i&&(cL("string"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),o.refreshToken=i),n&&(cL("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),o.accessToken=n),r&&(cL("number"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new c7,this.toJSON())}_performRefresh(){return cD("not implemented")}}/**
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
 */function he(e,t){cL("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class ht{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=cT(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new c4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new c5(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await c9(this,this.stsTokenManager.getToken(this.auth,e));return cL(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return c0(this,e)}reload(){return c3(this)}_assign(e){this!==e&&(cL(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
cL(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await c6(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await c9(this,cY(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,o,s,a,l,c;let h=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,f=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,d=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:I}=t;cL(v&&I,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let _=c7.fromJSON(this.name,I);cL("string"==typeof v,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),he(h,e.name),he(u,e.name),cL("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),cL("boolean"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),he(f,e.name),he(d,e.name),he(p,e.name),he(g,e.name),he(m,e.name),he(y,e.name);let T=new ht({uid:v,auth:e,email:u,emailVerified:w,displayName:h,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,i=!1){let n=new c7;n.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let r=new ht({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return(// Updates the user info and data and resolves with a user instance.
await c6(r),r)}}/**
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
 */const hi=new Map;function hn(e){e instanceof Function||cD("Expected a class definition");let t=hi.get(e);return t?t instanceof e||cD("Instance stored in cache mismatched with class"):(t=new e,hi.set(e,t)),t}/**
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
 */class hr{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function ho(e,t,i){return`firebase:${e}:${t}:${i}`}hr.type="NONE";class hs{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=ho(this.userKey,n.apiKey,r),this.fullPersistenceKey=ho("persistence"/* KeyName.PERSISTENCE_USER */,n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new hs(hn(hr),e,i);// Eliminate any persistences that are not available
let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||hn(hr),o=ho(i,e.config.apiKey,e.name),s=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let i of t)try{let t=await i._get(o);if(t){let n=ht._fromJSON(e,t);// throws for unparsable blob (wrong format)
i!==r&&(s=n),r=i;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],s&&// we'll just let it bubble to surface the error.
await r._set(o,s.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new hs(r,e,i)}}/**
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
 * Determine the browser for the purposes of reporting usage to the API
 */function ha(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(hu(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(hl(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(hd(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(hp(t))return"Webos"/* BrowserName.WEBOS */;if(hc(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||hh(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(hf(t))return"Android"/* BrowserName.ANDROID */;let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"/* BrowserName.OTHER */}function hl(e=i9()){return/firefox\//i.test(e)}function hc(e=i9()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hh(e=i9()){return/crios\//i.test(e)}function hu(e=i9()){return/iemobile/i.test(e)}function hf(e=i9()){return/android/i.test(e)}function hd(e=i9()){return/blackberry/i.test(e)}function hp(e=i9()){return/webos/i.test(e)}function hg(e=i9()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function hm(e=i9()){// TODO: implement getBrowserName equivalent for OS.
return hg(e)||hf(e)||hp(e)||hd(e)||/windows phone/i.test(e)||hu(e)}/**
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
 *//*
 * Determine the SDK version string
 */function hy(e,t=[]){let i;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
i=ha(i9());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
i=`${ha(i9())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${i}/JsCore/${nH}/${n}`}/**
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
 */class hv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let i=t=>new Promise((i,n)=>{try{let n=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    i(n)}catch(e){// Sync callback throws.
    n(e)}});// Attach the onAbort if present
i.onAbort=t,this.queue.push(i);let n=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
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
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function hw(e,t={}){return cH(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,cV(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class hb{constructor(e){var t,i,n,r;// Only include custom strength options defined in the response.
let o=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,o,s;let a={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),// Combine the status into single isValid property.
a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let i;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */i>="a"&&i<="z",/* containsUppercaseCharacter= */i>="A"&&i<="Z",/* containsNumericCharacter= */i>="0"&&i<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(i))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,i,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class hE{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hI(this),this.idTokenSubscription=new hI(this),this.beforeStateQueue=new hv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hn(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);(!i||i===o)&&(null==s?void 0:s.user)&&(n=s.user,r=!0)}// If no user in persistence, there is no current user. Set to null.
if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(cL(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await c6(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?nl(e):null;return t&&cL(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&cL(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await hw(this),t=new hb(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i8("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&hn(e)||this._popupRedirectResolver;cL(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await hs.create(this,[hn(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),o=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(cL(s,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
s.then(()=>{o||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,i,n);return()=>{o=!0,r()}}{let i=e.addObserver(t);return()=>{o=!0,i()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return cL(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=i);// If the App Check service exists, add the App Check token in the headers
let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){cN.logLevel<=oE.WARN&&cN.warn(`Auth (${nH}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class hI{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let i=new no(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return cL(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function h_(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,i)=>{var n,r;let o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=e=>{let t=cx("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,i(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(o)})}function hT(e){return`__${e}${Math.floor(1e6*Math.random())}`}class hS{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=nl(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{cX(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new ck(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;cS(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&cS(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}h_("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function hk(e,t,i,n=!1){let r;let o=new hS(e);try{r=await o.verify(i)}catch(e){r=await o.verify(i,!0)}let s=Object.assign({},t);return n?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),s}function hA(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function hC(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class hN{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return cD("not implemented")}/** @internal */_getIdTokenResponse(e){return cD("not implemented")}/** @internal */_linkToIdToken(e,t){return cD("not implemented")}/** @internal */_getReauthenticationResolver(e){return cD("not implemented")}}async function hR(e,t){return cH(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
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
 */async function hO(e,t){return cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,cV(e,t))}/**
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
 */async function hx(e,t){return cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,cV(e,t))}async function hP(e,t){return cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,cV(e,t))}/**
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
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class hL extends hN{/** @internal */constructor(/** @internal */e,/** @internal */t,i,/** @internal */n=null){super("password"/* ProviderId.PASSWORD */,i),this._email=e,this._password=t,this._tenantId=n}/** @internal */static _fromEmailAndPassword(e,t){return new hL(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,i=null){return new hL(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,i)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return hO(e,i).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await hk(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return hO(e,t)}});{let t=await hk(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return hO(e,t)}case"emailLink"/* SignInMethod.EMAIL_LINK */:return hx(e,{email:this._email,oobCode:this._password});default:cO(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return hR(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return hP(e,{idToken:t,email:this._email,oobCode:this._password});default:cO(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hD(e,t){return cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,cV(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class hM extends hN{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new hM(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cO("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=cT(t,["providerId","signInMethod"]);if(!i||!n)return null;let o=new hM(i,n);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return hD(e,t)}/** @internal */_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,hD(e,i)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,hD(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ni(t)}return e}}/**
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
 */async function hU(e,t){return cH(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,cV(e,t))}async function hB(e,t){return cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,cV(e,t))}async function hj(e,t){let i=await cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,cV(e,t));if(i.temporaryProof)throw cJ(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,i);return i}const hF={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function h$(e,t){let i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,cV(e,i),hF)}/**
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
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class hz extends hN{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new hz({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new hz({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return hB(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return hj(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return h$(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new hz({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class hV{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,i,n,r,o,s;let a=nn(nr(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(i=a.oobCode)&&void 0!==i?i:null,h=/**
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
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);// Validate API key, code and mode.
cL(l&&c&&h,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=nn(nr(e)).link,i=t?nn(nr(t)).deep_link_id:null,n=nn(nr(e)).deep_link_id,r=n?nn(nr(n)).link:null;return r||n||i||t||e}(e);try{return new hV(t)}catch(e){return null}}}/**
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
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class hH{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=hH.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return hL._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let i=hV.parseLink(t);return cL(i,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),hL._fromEmailAndCode(e,i.code,i.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */hH.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */hH.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */hH.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
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
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class hq{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
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
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class hW extends hq{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
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
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class hK extends hW{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return hM._fromParams({providerId:hK.PROVIDER_ID,signInMethod:hK.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return hK.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return hK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hK.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */hK.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */hK.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
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
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class hG extends hW{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return hM._fromParams({providerId:hG.PROVIDER_ID,signInMethod:hG.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return hG.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return hG.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return hG.credential(t,i)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */hG.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */hG.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
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
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class hJ extends hW{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return hM._fromParams({providerId:hJ.PROVIDER_ID,signInMethod:hJ.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return hJ.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return hJ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hJ.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */hJ.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */hJ.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
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
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class hX extends hW{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return hM._fromParams({providerId:hX.PROVIDER_ID,signInMethod:hX.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return hX.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return hX.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return hX.credential(t,i)}catch(e){return null}}}/**
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
 */async function hY(e,t){return cW(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,cV(e,t))}/** Always set to {@link SignInMethod}.TWITTER. */hX.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */hX.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
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
 */class hQ{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){let r=await ht._fromIdTokenResponse(e,i,n),o=hZ(i),s=new hQ({user:r,providerId:o,_tokenResponse:i,operationType:t});return s}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,/* reload */!0);let n=hZ(i);return new hQ({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function hZ(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
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
 */class h0 extends i3{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,h0.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new h0(e,t,i,n)}}function h1(e,t,i,n){let r="reauthenticate"/* OperationType.REAUTHENTICATE */===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return r.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw h0._fromErrorAndOperation(e,i,t,n);throw i})}async function h2(e,t,i=!1){let n=await c9(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return hQ._forOperation(e,"link"/* OperationType.LINK */,n)}/**
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
 */async function h9(e,t,i=!1){let{auth:n}=e,r="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let o=await c9(e,h1(n,r,t,e),i);cL(o.idToken,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let s=c2(o.idToken);cL(s,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:a}=s;return cL(e.uid===a,n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),hQ._forOperation(e,r,o)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&cO(n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
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
 */async function h4(e,t,i=!1){let n="signIn"/* OperationType.SIGN_IN */,r=await h1(e,n,t),o=await hQ._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(o.user),o}/**
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
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */async function h5(e){let t=nl(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */async function h6(e,t,i){var n;let r;let o=nl(e),s={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(n=o._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){let e=await hk(o,s,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);r=hY(o,e)}else r=hY(o,s).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await hk(o,s,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);return hY(o,e)}throw e});let a=await r.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&h5(e),t}),l=await hQ._fromIdTokenResponse(o,"signIn"/* OperationType.SIGN_IN */,a);return await o._updateCurrentUser(l.user),l}new WeakMap;const h3="__sak";/**
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
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class h8{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(h3,"1"),this.storage.removeItem(h3),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class h7 extends h8{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
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
 */function(){let e=i9();return hc(e)||hg(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let n=this.storage.getItem(i);// Value not synchronized, synchronize manually.
if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);/** Detects Internet Explorer. */(function(){let e=i9();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}h7.type="LOCAL";/**
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
 */class ue extends h8{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}ue.type="SESSION";/**
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
 * Interface class for receiving messages.
 *
 */class ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new ut(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:i});let o=Array.from(r).map(async t=>t(e.origin,n)),s=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:i,response:s})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */function ui(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}ut.receivers=[];/**
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
 * Interface for sending messages and waiting for a completion response.
 *
 */class un{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,i=50/* _TimeoutDuration.ACK */){let n,r;let o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((s,a)=>{let l=ui("",20);o.port1.start();let c=setTimeout(()=>{a(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},i);r={messageChannel:o,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(c),n=setTimeout(()=>{a(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(n),s(e.data.response);break;default:clearTimeout(c),clearTimeout(n),a(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(r),o.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[o.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
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
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function ur(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function uo(){return void 0!==ur().WorkerGlobalScope&&"function"==typeof ur().importScripts}async function us(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
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
 */const ua="firebaseLocalStorageDb",ul="firebaseLocalStorage",uc="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class uh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uu(e,t){return e.transaction([ul],t?"readwrite":"readonly").objectStore(ul)}function uf(){let e=indexedDB.open(ua,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(ul,{keyPath:uc})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(ul)?t(i):(// Need to close the database or else you get a `blocked` event
i.close(),await function(){let e=indexedDB.deleteDatabase(ua);return new uh(e).toPromise()}(),t(await uf()))})})}async function ud(e,t,i){let n=uu(e,!0).put({[uc]:t,value:i});return new uh(n).toPromise()}async function up(e,t){let i=uu(e,!1).get(t),n=await new uh(i).toPromise();return void 0===n?null:n.value}function ug(e,t){let i=uu(e,!0).delete(t);return new uh(i).toPromise()}class um{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await uf()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return uo()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=ut._getInstance(uo()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let i=await this._poll();return{keyProcessed:i.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await us(),!this.activeServiceWorker)return;this.sender=new un(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let i=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await uf();return await ud(e,h3,"1"),await ug(e,h3),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ud(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>up(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ug(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=uu(e,!1).getAll();return new uh(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function uy(e,t,i){var n,r,o;let s=await i.verify();try{let a;if(cL("string"==typeof s,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),cL("recaptcha"===i.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){cL("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:s}},cH(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,cV(e,r)));return i.phoneSessionInfo.sessionInfo}{cL("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;cL(i,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let r=await (o={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:s}},cH(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,cV(e,o)));return r.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await hU(e,{phoneNumber:a.phoneNumber,recaptchaToken:s});return t}}finally{i._reset()}}um.type="LOCAL",hT("rcb"),new cB(3e4,6e4);/**
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
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class uv{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=uv.PROVIDER_ID,this.auth=nl(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return uy(this.auth,e,nl(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return hz._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return uv.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return uv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?hz._fromTokenResponse(t,i):null}}/** Always set to {@link ProviderId}.PHONE. */uv.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */uv.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
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
 */class uw extends hN{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return hD(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hD(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hD(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ub(e){return h4(e.auth,new uw(e),e.bypassAuthState)}function uE(e){let{auth:t,user:i}=e;return cL(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),h9(i,new uw(e),e.bypassAuthState)}async function uI(e){let{auth:t,user:i}=e;return cL(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),h2(i,new uw(e),e.bypassAuthState)}/**
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
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class u_{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:o,type:s}=e;if(o){this.reject(o);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return ub;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return uI;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return uE;default:cO(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||cD("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||cD("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uT=new cB(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class uS extends u_{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,uS.currentPopupAction&&uS.currentPopupAction.cancel(),uS.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return cL(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||cD("Popup operations only handle one event");let e=ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(cx(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(cx(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uS.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cx(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,uT.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
uS.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const uk=new Map;class uA extends u_{constructor(e,t,i=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,i),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=uk.get(this.auth._key());if(!e){try{let t=await uC(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}uk.set(this.auth._key(),e)}return this.bypassAuthState||uk.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uC(e,t){let i=ho("pendingRedirect",t.config.apiKey,t.name),n=hn(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function uN(e,t){uk.set(e._key(),t)}async function uR(e,t,i=!1){let n=nl(e),r=t?hn(t):(cL(n._popupRedirectResolver,n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),n._popupRedirectResolver),o=new uA(n,r,i),s=await o.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}class uO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return uP(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!uP(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(cx(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ux(e))}saveEventToCache(e){this.cachedEventUids.add(ux(e)),this.lastProcessedEventTime=Date.now()}}function ux(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function uP({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function uL(e,t={}){return cH(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
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
 */const uD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uM=/^https?/;async function uU(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await uL(e);for(let e of t)try{if(function(e){let t=cM(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!uM.test(i))return!1;if(uD.test(e))// only contain the IP, no extra character.
return n===e;// Dots in pattern should be escaped.
let r=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+r+"|"+r+")$","i");return o.test(n)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
cO(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const uB=new cB(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function uj(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=ur().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let uF=null;/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const u$=new cB(5e3,15e3),uz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uV=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function uH(e){let t=await (uF=uF||new Promise((t,i)=>{var n,r,o;// Function to run when gapi.load is ready.
function s(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
uj(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
uj(),i(cx(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:uB.get()})}if(null===(r=null===(n=ur().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(o=ur().gapi)||void 0===o?void 0:o.load)s();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=hT("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
ur()[t]=()=>{gapi.load?s():i(cx(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},h_(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
uF=null,e)})),i=ur().gapi;return cL(i,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;cL(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let i=t.emulator?cj(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:nH},r=uV.get(e.config.apiHost);r&&(n.eid=r);let o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${i}?${ni(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uz,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let r=cx(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),o=ur().setTimeout(()=>{n(r)},u$.get());// Clear timer and resolve pending iframe ready promise.
    function s(){ur().clearTimeout(o),i(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(s).then(s,()=>{n(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const uq={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class uW{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const uK=encodeURIComponent("fac");async function uG(e,t,i,n,r,o){cL(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),cL(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let s={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:nH,eventId:r};if(t instanceof hq)// TODO set additionalParams from the provider as well?
for(let[i,n]of(t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(s.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))s[i]=n;if(t instanceof hW){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}for(let t of(e.tenantId&&(s.tid=e.tenantId),Object.keys(s)))void 0===s[t]&&delete s[t];// Sets the App Check token to pass to the widget
let a=await e._getAppCheckToken(),l=a?`#${uK}=${encodeURIComponent(a)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?cj(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${ni(s).slice(1)}${l}`}/**
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
 * The special web storage event
 *
 */const uJ="webStorageSupport",uX=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ue,this._completeRedirectFn=uR,this._overrideRedirectResult=uN}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,i,n){var r;(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager)||cD("_initialize() not called before _openPopup()");let o=await uG(e,t,i,cM(),n);return function(e,t,i,n=500,r=600){let o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},uq),{width:n.toString(),height:r.toString(),top:o,left:s}),c=i9().toLowerCase();i&&(a=hh(c)?"_blank":i),hl(c)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let h=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=i9()){var t;return hg(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",a),new uW(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let u=window.open(t||"",a,h);cL(u,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{u.focus()}catch(e){}return new uW(u)}(e,o,ui())}async _openRedirect(e,t,i,n){await this._originValidation(e);let r=await uG(e,t,i,cM(),n);return ur().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||cD("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await uH(e),i=new uO(e);return t.register("authEvent",t=>{cL(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let n=i.onEvent(t.authEvent);return{status:n?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){let i=this.iframes[e._key()];i.send(uJ,{type:uJ},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[uJ];void 0!==r&&t(!!r),cO(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uU(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return hm()||hc()||hg()}};class uY{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,i);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return cD("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class uQ extends uY{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new uQ(e)}/** @internal */_finalizeEnroll(e,t,i){return cH(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,cV(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return cH(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,cV(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class uZ extends uY{constructor(e,t,i){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=i}/** @internal */static _fromSecret(e,t){return new uZ(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new uZ(t,e)}/** @internal */async _finalizeEnroll(e,t,i){return cL(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),cH(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,cV(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){cL(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let i={verificationCode:this.otp};return cH(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,cV(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class u0{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,i,n,r,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new u0(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var i;let n=!1;return(u1(e)||u1(t))&&(n=!0),n&&(u1(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),u1(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function u1(e){return void 0===e||(null==e?void 0:e.length)===0}var u2="@firebase/auth",u9="1.3.0";/**
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
 */class u4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){cL(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const u5=i1("authIdTokenMaxAge")||300;let u6=null;const u3=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>u5)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let r=null==i?void 0:i.token;u6!==r&&(u6=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};h="Browser"/* ClientPlatform.BROWSER */,nF(new nc("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=i.options;cL(o&&!o.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:i.name});let a={apiKey:o,authDomain:s,clientPlatform:h,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:hy(h)},l=new hE(i,n,r,a);return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(hn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,i)=>{let n=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);n.initialize()})),nF(new nc("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=nl(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new u4(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),nK(u2,u9,/**
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
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(h)),nK(u2,u9,"esm2017");// Ініціалізація Firebase
const u8=nq({apiKey:"AIzaSyAt0t0gqY2cwwnnmHCmmlq6c2d_Q7sG2wI",authDomain:"boocks-f43bd.firebaseapp.com",projectId:"boocks-f43bd",storageBucket:"boocks-f43bd.appspot.com",messagingSenderId:"679284035166",appId:"1:679284035166:web:7c3e330ead5760e6196ecf",measurementId:"G-MRP841QGMJ"});!/* eslint-disable @typescript-eslint/no-explicit-any *//**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e=nW()){e=nl(e);// Dependencies
let t=n$(e,rG);t.isInitialized()?t.getImmediate():/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e,t={}){// Dependencies
let i=n$(e,rG);if(i.isInitialized()){let e=i.getImmediate();if(ne(t,i.getOptions()))return e;throw rY.create("already-initialized"/* AnalyticsError.ALREADY_INITIALIZED */)}let n=i.initialize({options:t});return n}(e)}(u8),function(e,t){let i="object"==typeof e?e:nW(),n=n$(i,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=iZ("firestore");e&&/**
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
 */function(e,t,i,n={}){var r;let o=(e=function(e,t){if("_delegate"in e&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lX(lJ.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let i=/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let i=(t=e).constructor?t.constructor.name:null;return i?`a custom ${i} object`:"an object"}}return"function"==typeof e?"a function":lG()}(e);throw new lX(lJ.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return e}(e,cE))._getSettings(),s=`${t}:${i}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&/**
 * @internal
 */function(e){if(lH.logLevel<=oE.WARN){let t=[].map(lK);lH.warn(`Firestore (${lV}): ${e}`,...t)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),n.mockUserToken){let t,i;if("string"==typeof n.mockUserToken)t=n.mockUserToken,i=lz.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
// invalid field "uid" and missing field "sub" / "user_id".)
t=/**
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[iW(JSON.stringify({alg:"none",type:"JWT"})),iW(JSON.stringify(o)),""].join(".")}(n.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let o=n.mockUserToken.sub||n.mockUserToken.user_id;if(!o)throw new lX(lJ.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new lz(o)}e._authCredentials=new l0(new lQ(t,i))}}(n,...e)}}(u8);const u7=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=nW()){let t=n$(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
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
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let i=n$(e,"auth");if(i.isInitialized()){let e=i.getImmediate(),n=i.getOptions();if(ne(n,null!=t?t:{}))return e;cO(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let n=i.initialize({options:t});return n}(e,{popupRedirectResolver:uX,persistence:[um,h7,ue]}),n=i1("authTokenSyncURL");if(n){let e=u3(n);nl(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),nl(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let r=iQ("auth");return r&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,i){let n=nl(e);cL(n._canInitEmulator,n,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),cL(/^https?:\/\//.test(t),n,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let r=!!(null==i?void 0:i.disableWarnings),o=hA(t),{host:s,port:a}=function(e){let t=hA(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);// Strip out "username:password@".
if(r){let e=r[1];return{host:e,port:hC(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:hC(t)}}}(t),l=null===a?"":`:${a}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
n.config.emulator={url:`${o}//${s}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${r}`),i}();document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("[data-auth-open]"),t=document.querySelector(".auth-btn-close"),i=document.querySelector(".auth-backdrop"),n=document.querySelector(".auth-form"),r=document.querySelector(".auth-button-signup"),o=n.querySelector('input[name="user_name"]'),s=n.querySelector('input[name="user_email"]'),a=n.querySelector('input[name="user_password"]');e.addEventListener("click",// Відкриття/закриття вікна
function(){i.style.display="block",document.querySelector(".auth").style.visibility="visible",o.value="",s.value="",a.value=""}),t.addEventListener("click",function(){i.style.display="none"}),// Реєстрація користувача при натисканні кнопки SIGN UP
r.addEventListener("click",async e=>{e.preventDefault(),o.value;let t=s.value,i=a.value,n={userEmail:t,userPassword:i};h6(u7,n.userEmail,n.userPassword).then(e=>{e.user;// ...
}).catch(e=>{e.code,e.message;// ..
});// async function addUserToFirebase(userData) {
//   const usersCol = collection(db, 'user_data');
//   try {
//     await addDoc(usersCol, userData);
//     console.log('Дані користувача успішно додано в базу даних');
//     updateUI(userData.userName, userData.userEmail, userData.userPassword);
//     closeModal();
//   } catch (error) {
//     console.error('Помилка при додаванні даних користувача:', error);
//     Notiflix.Notify.Failure('Помилка при реєстрації');
//   }
// }
// await addUserToFirebase(userData, analytics);
})});// Кнопка "SIGN IN"
var fe=document.querySelector(".auth-button-in"),ft=document.querySelector(".auth-input");fe.addEventListener("click",function(){ft&&ft.remove()}),b("dGLOO");//# sourceMappingURL=index.6145d8f5.js.map

//# sourceMappingURL=index.6145d8f5.js.map
