!function(){let e,t,i,n,r,s,o,a,l,h,u,c,d,f,p,g,m,y,_,v;var w,b,I,E,T,C,k,S,N,R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function A(e){return e&&e.__esModule?e.default:e}var x={},O={},P=R.parcelRequired7c6;null==P&&((P=function(e){if(e in x)return x[e].exports;if(e in O){var t=O[e];delete O[e];var i={id:e,exports:{}};return x[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){O[e]=t},R.parcelRequired7c6=P),P.register("aNJCr",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:function(){return i},set:function(e){return i=e},enumerable:!0,configurable:!0});var i,n={};i=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),P("6JpON"),P("knWGd");let L={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};L.addEventListener();var D={};function M(e,t){return function(){return e.apply(t,arguments)}}sq=void 0!==R?R:"undefined"!=typeof window?window:D,sz=function(e){// COMMON: SSR check: begin
if(void 0===e&&void 0===e.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var t,i={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},n={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},s=function(t){return t||(t="head"),null!==e.document[t]||(r('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},o=function(t,i){// check doc head
if(!s("head"))return!1;// internal css
if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}},a=function(){// variables
var e={},t=!1,i=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);i<arguments.length;i++)!function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=a(e[n],i[n]):e[n]=i[n])}(arguments[i]);return e},l=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},h=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},u=0,c=function(r,o,h,c){// check doc body
if(!s("body"))return!1;t||d.Notify.init({});// create a backup for new settings
var f=a(!0,t,{});// check callbackOrOptions and options: begin
if("object"==typeof h&&!Array.isArray(h)||"object"==typeof c&&!Array.isArray(c)){// new options
var p={};"object"==typeof h?p=h:"object"==typeof c&&(p=c),// extend new settings with the new options
t=a(!0,t,p)}// check callbackOrOptions and options: end
// notify type
var g=t[r.toLocaleLowerCase("en")];// notify counter
u++,"string"!=typeof o&&(o="Notiflix "+r),t.plainText&&(o=l(o)),!t.plainText&&o.length>t.messageMaxLength&&(// extend settings for error massege
t=a(!0,t,{closeButton:!0,messageMaxLength:150}),// error message
o='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),o.length>t.messageMaxLength&&(o=o.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(g.fontAwesomeIconColor=g.background),t.cssAnimation||(t.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var m=e.document.getElementById(n.wrapID)||e.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(m.id=n.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var y=e.document.getElementById(n.overlayID)||e.document.createElement("div");y.id=n.overlayID,y.style.width="100%",y.style.height="100%",y.style.position="fixed",y.style.zIndex=t.zindex-1,y.style.left=0,y.style.top=0,y.style.right=0,y.style.bottom=0,y.style.background=g.backOverlayColor||t.backOverlayColor,y.className=t.cssAnimation?"nx-with-animation":"",y.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(n.overlayID)||e.document.body.appendChild(y)}e.document.getElementById(n.wrapID)||e.document.body.appendChild(m);// notify wrap: end
// notify content: begin
var _=e.document.createElement("div");_.id=t.ID+"-"+u,_.className=t.className+" "+g.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),_.style.fontSize=t.fontSize,_.style.color=g.textColor,_.style.background=g.background,_.style.borderRadius=t.borderRadius,_.style.pointerEvents="all",t.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
_.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(_.style.animationDuration=t.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var v="";// close buttpon element: end
// use icon: begin
if(t.closeButton&&"function"!=typeof h&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+g.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon){// use font awesome
if(t.useFontAwesome)_.innerHTML='<i style="color:'+g.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+g.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+o+"</span>"+(t.closeButton?v:"");else{var w="";r===i.Success?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===i.Failure?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===i.Warning?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===i.Info&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+g.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),_.innerHTML=w+'<span class="nx-message nx-with-icon">'+o+"</span>"+(t.closeButton?v:"")}}else _.innerHTML='<span class="nx-message">'+o+"</span>"+(t.closeButton?v:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(n.wrapID);b.insertBefore(_,b.firstChild)}else e.document.getElementById(n.wrapID).appendChild(_);// notify append or prepend: end
// remove by timeout or click: begin
var I=e.document.getElementById(_.id);if(I){// hide notify elm and hide overlay: begin
var E,T,C=function(){I.classList.add("nx-remove");var t=e.document.getElementById(n.overlayID);t&&m.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(E)},k=function(){if(I&&null!==I.parentNode&&I.parentNode.removeChild(I),m.childElementCount<=0&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(n.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(T)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(_.id).querySelector("span.nx-close-button").addEventListener("click",function(){C();var e=setTimeout(function(){k(),clearTimeout(e)},t.cssAnimationDuration)}),("function"==typeof h||t.clickToClose)&&I.addEventListener("click",function(){"function"==typeof h&&h(),C();var e=setTimeout(function(){k(),clearTimeout(e)},t.cssAnimationDuration)}),!t.closeButton&&"function"!=typeof h){// auto remove: begin
var S=function(){E=setTimeout(function(){C()},t.timeout),T=setTimeout(function(){k()},t.timeout+t.cssAnimationDuration)};S(),t.pauseOnHover&&(I.addEventListener("mouseenter",function(){I.classList.add("nx-paused"),clearTimeout(E),clearTimeout(T)}),I.addEventListener("mouseleave",function(){I.classList.remove("nx-paused"),S()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(t.showOnlyTheLastOne&&u>0)for(var N=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+u+"])"),R=0;R<N.length;R++){var A=N[R];null!==A.parentNode&&A.parentNode.removeChild(A)}// notify - show only the last one: end
// extend new settings with the backup settings
t=a(!0,t,f)},d={Notify:{// Init
init:function(e){// extend options
t=a(!0,n,e),// internal css if exist
o(h,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(e){// if initialized already
if(!t)return r("You have to initialize the Notify module before call Merge function."),!1;t=a(!0,t,e)},// Success
success:function(e,t,n){c(i.Success,e,t,n)},// Failure
failure:function(e,t,n){c(i.Failure,e,t,n)},// Warning
warning:function(e,t,n){c(i.Warning,e,t,n)},// Info
info:function(e,t,n){c(i.Info,e,t,n)}}};return"object"==typeof e.Notiflix?a(!0,e.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],function(){return sz(sq)}):"object"==typeof D?D=sz(sq):sq.Notiflix=sz(sq);// utils is a library of generic helper functions non-specific to axios
let{toString:U}=Object.prototype,{getPrototypeOf:F}=Object,j=(sW=Object.create(null),e=>{let t=U.call(e);return sW[t]||(sW[t]=t.slice(8,-1).toLowerCase())}),B=e=>(e=e.toLowerCase(),t=>j(t)===e),q=e=>t=>typeof t===e,{isArray:z}=Array,W=q("undefined"),H=B("ArrayBuffer"),$=q("string"),V=q("function"),K=q("number"),G=e=>null!==e&&"object"==typeof e,J=e=>{if("object"!==j(e))return!1;let t=F(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Y=B("Date"),X=B("File"),Q=B("Blob"),Z=B("FileList"),ee=B("URLSearchParams");/**
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
 */function et(e,t,{allOwnKeys:i=!1}={}){let n,r;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),z(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{let r;// Iterate over object keys
let s=i?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;for(n=0;n<o;n++)r=s[n],t.call(null,e[r],r,e)}}}function ei(e,t){let i;t=t.toLowerCase();let n=Object.keys(e),r=n.length;for(;r-- >0;)if(t===(i=n[r]).toLowerCase())return i;return null}let en=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:R,er=e=>!W(e)&&e!==en,es=(sH="undefined"!=typeof Uint8Array&&F(Uint8Array),e=>sH&&e instanceof sH),eo=B("HTMLFormElement"),ea=(({hasOwnProperty:e})=>(t,i)=>e.call(t,i))(Object.prototype),el=B("RegExp"),eh=(e,t)=>{let i=Object.getOwnPropertyDescriptors(e),n={};et(i,(i,r)=>{let s;!1!==(s=t(i,r,e))&&(n[r]=s||i)}),Object.defineProperties(e,n)},eu="abcdefghijklmnopqrstuvwxyz",ec="0123456789",ed={DIGIT:ec,ALPHA:eu,ALPHA_DIGIT:eu+eu.toUpperCase()+ec},ef=B("AsyncFunction");var ep={isArray:z,isArrayBuffer:H,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!W(e)&&null!==e.constructor&&!W(e.constructor)&&V(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||V(e.append)&&("formdata"===(t=j(e))||// detect form-data instance
"object"===t&&V(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&H(e.buffer)},isString:$,isNumber:K,isBoolean:e=>!0===e||!1===e,isObject:G,isPlainObject:J,isUndefined:W,isDate:Y,isFile:X,isBlob:Q,isRegExp:el,isFunction:V,isStream:e=>G(e)&&V(e.pipe),isURLSearchParams:ee,isTypedArray:es,isFileList:Z,forEach:et,merge:/**
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
 */function e(){let{caseless:t}=er(this)&&this||{},i={},n=(n,r)=>{let s=t&&ei(i,r)||r;J(i[s])&&J(n)?i[s]=e(i[s],n):J(n)?i[s]=e({},n):z(n)?i[s]=n.slice():i[s]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&et(arguments[e],n);return i},extend:(e,t,i,{allOwnKeys:n}={})=>(et(t,(t,n)=>{i&&V(t)?e[n]=M(t,i):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,i,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),i&&Object.assign(e.prototype,i)},toFlatObject:(e,t,i,n)=>{let r,s,o;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(s=(r=Object.getOwnPropertyNames(e)).length;s-- >0;)o=r[s],(!n||n(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=!1!==i&&F(e)}while(e&&(!i||i(e,t))&&e!==Object.prototype)return t},kindOf:j,kindOfTest:B,endsWith:(e,t,i)=>{e=String(e),(void 0===i||i>e.length)&&(i=e.length),i-=t.length;let n=e.indexOf(t,i);return -1!==n&&n===i},toArray:e=>{if(!e)return null;if(z(e))return e;let t=e.length;if(!K(t))return null;let i=Array(t);for(;t-- >0;)i[t]=e[t];return i},forEachEntry:(e,t)=>{let i;let n=e&&e[Symbol.iterator],r=n.call(e);for(;(i=r.next())&&!i.done;){let n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let i;let n=[];for(;null!==(i=e.exec(t));)n.push(i);return n},isHTMLForm:eo,hasOwnProperty:ea,hasOwnProp:ea,reduceDescriptors:eh,freezeMethods:e=>{eh(e,(t,i)=>{// skip restricted props in strict mode
if(V(e)&&-1!==["arguments","caller","callee"].indexOf(i))return!1;let n=e[i];if(V(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},toObjectSet:(e,t)=>{let i={};return(e=>{e.forEach(e=>{i[e]=!0})})(z(e)?e:String(e).split(t)),i},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,i){return t.toUpperCase()+i}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:ei,global:en,isContextDefined:er,ALPHABET:ed,generateString:(e=16,t=ed.ALPHA_DIGIT)=>{let i="",{length:n}=t;for(;e--;)i+=t[Math.random()*n|0];return i},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&V(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),i=(e,n)=>{if(G(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let r=z(e)?[]:{};return et(e,(e,t)=>{let s=i(e,n+1);W(s)||(r[t]=s)}),t[n]=void 0,r}}return e};return i(e,0)},isAsyncFn:ef,isThenable:e=>e&&(G(e)||V(e))&&V(e.then)&&V(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function eg(e,t,i,n,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),i&&(this.config=i),n&&(this.request=n),r&&(this.response=r)}ep.inherits(eg,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:ep.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let em=eg.prototype,ey={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ey[e]={value:e}}),Object.defineProperties(eg,ey),Object.defineProperty(em,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
eg.from=(e,t,i,n,r,s)=>{let o=Object.create(em);return ep.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),eg.call(o,e.message,t,i,n,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o},sV=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,i=e.length,n=i%3// if we have 1 byte left, pad 2 bytes
,r=[],s=0,o=i-n;s<o;s+=16383// must be multiple of 3
)r.push(function(e,t,i){for(var n,r=[],s=t;s<i;s+=3)r.push(e_[(n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+e_[n>>12&63]+e_[n>>6&63]+e_[63&n]);return r.join("")}(e,s,s+16383>o?o:s+16383));return 1===n?r.push(e_[(t=e[i-1])>>2]+e_[t<<4&63]+"=="):2===n&&r.push(e_[(t=(e[i-2]<<8)+e[i-1])>>10]+e_[t>>4&63]+e_[t<<2&63]+"="),r.join("")};for(var e_=[],ev=[],ew="undefined"!=typeof Uint8Array?Uint8Array:Array,eb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",eI=0,eE=eb.length;eI<eE;++eI)e_[eI]=eb[eI],ev[eb.charCodeAt(eI)]=eI;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
ev["-".charCodeAt(0)]=62,ev["_".charCodeAt(0)]=63,sK=function(e,t,i,n,r){var s,o,a=8*r-n-1,l=(1<<a)-1,h=l>>1,u=-7,c=i?r-1:0,d=i?-1:1,f=e[t+c];for(c+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+c],c+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+c],c+=d,u-=8);if(0===s)s=1-h;else{if(s===l)return o?NaN:(f?-1:1)*(1/0);o+=Math.pow(2,n),s-=h}return(f?-1:1)*o*Math.pow(2,s-n)},sG=function(e,t,i,n,r,s){var o,a,l,h=8*s-r-1,u=(1<<h)-1,c=u>>1,d=23===r?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=d/l:t+=d*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=u?(a=0,o=u):o+c>=1?(a=(t*l-1)*Math.pow(2,r),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,r),o=0));r>=8;e[i+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,h+=r;h>0;e[i+f]=255&o,f+=p,o/=256,h-=8);e[i+f-p]|=128*g};let eT="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function eC(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,ek.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function ek(e,t,i){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return eR(e)}return eS(e,t,i)}function eS(e,t,i){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ek.isEncoding(t))throw TypeError("Unknown encoding: "+t);let i=0|eP(e,t),n=eC(i),r=n.write(e,t);return r!==i&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,r)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(e2(e,Uint8Array)){let t=new Uint8Array(e);return ex(t.buffer,t.byteOffset,t.byteLength)}return eA(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(e2(e,ArrayBuffer)||e&&e2(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(e2(e,SharedArrayBuffer)||e&&e2(e.buffer,SharedArrayBuffer)))return ex(e,t,i);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return ek.from(n,t,i);let r=function(e){var t;if(ek.isBuffer(e)){let t=0|eO(e.length),i=eC(t);return 0===i.length||e.copy(i,0,0,t),i}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?eC(0):eA(e):"Buffer"===e.type&&Array.isArray(e.data)?eA(e.data):void 0}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ek.from(e[Symbol.toPrimitive]("string"),t,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function eN(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function eR(e){return eN(e),eC(e<0?0:0|eO(e))}function eA(e){let t=e.length<0?0:0|eO(e.length),i=eC(t);for(let n=0;n<t;n+=1)i[n]=255&e[n];return i}function ex(e,t,i){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(i||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===i?new Uint8Array(e):void 0===i?new Uint8Array(e,t):new Uint8Array(e,t,i),ek.prototype),n)}function eO(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function eP(e,t){if(ek.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||e2(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let i=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===i)return 0;// Use a for loop to avoid recursion
let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return eZ(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return e0(e).length;default:if(r)return n?-1:eZ(e).length// assume utf8
;t=(""+t).toLowerCase(),r=!0}}function eL(e,t,i){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(i>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,i){let n=e.length;(!t||t<0)&&(t=0),(!i||i<0||i>n)&&(i=n);let r="";for(let n=t;n<i;++n)r+=e4[e[n]];return r}(this,t,i);case"utf8":case"utf-8":return eF(this,t,i);case"ascii":return function(e,t,i){let n="";i=Math.min(e.length,i);for(let r=t;r<i;++r)n+=String.fromCharCode(127&e[r]);return n}(this,t,i);case"latin1":case"binary":return function(e,t,i){let n="";i=Math.min(e.length,i);for(let r=t;r<i;++r)n+=String.fromCharCode(e[r]);return n}(this,t,i);case"base64":var r,s;return r=t,s=i,0===r&&s===this.length?sV(this):sV(this.slice(r,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,i){let n=e.slice(t,i),r="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<n.length-1;e+=2)r+=String.fromCharCode(n[e]+256*n[e+1]);return r}(this,t,i);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function eD(e,t,i){let n=e[t];e[t]=e[i],e[i]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function eM(e,t,i,n,r){var s;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof i?(n=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),(s=i=+i// Coerce to Number.
)!=s&&(i=r?0:e.length-1),i<0&&(i=e.length+i),i>=e.length){if(r)return -1;i=e.length-1}else if(i<0){if(!r)return -1;i=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=ek.from(t,n)),ek.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:eU(e,t,i,n,r));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(e,t,i):Uint8Array.prototype.lastIndexOf.call(e,t,i):eU(e,[t],i,n,r);throw TypeError("val must be string, number or Buffer")}function eU(e,t,i,n,r){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,i/=2}function h(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let n=-1;for(s=i;s<a;s++)if(h(e,s)===h(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(i+l>a&&(i=a-l),s=i;s>=0;s--){let i=!0;for(let n=0;n<l;n++)if(h(e,s+n)!==h(t,n)){i=!1;break}if(i)return s}return -1}function eF(e,t,i){i=Math.min(e.length,i);let n=[],r=t;for(;r<i;){let t=e[r],s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=i){let i,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(i=e[r+1]))==128&&(l=(31&t)<<6|63&i)>127&&(s=l);break;case 3:i=e[r+1],n=e[r+2],(192&i)==128&&(192&n)==128&&(l=(15&t)<<12|(63&i)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:i=e[r+1],n=e[r+2],a=e[r+3],(192&i)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&i)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
s=65533,o=1):s>65535&&(// encode to utf16 (surrogate pair dance)
s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),r+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let i="",n=0;for(;n<t;)i+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return i}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function ej(e,t,i){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>i)throw RangeError("Trying to access beyond buffer length")}function eB(e,t,i,n,r,s){if(!ek.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw RangeError('"value" argument is out of bounds');if(i+n>e.length)throw RangeError("Index out of range")}function eq(e,t,i,n,r){eJ(t,n,r,e,i,7);let s=Number(t&BigInt(4294967295));e[i++]=s,s>>=8,e[i++]=s,s>>=8,e[i++]=s,s>>=8,e[i++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[i++]=o,o>>=8,e[i++]=o,o>>=8,e[i++]=o,o>>=8,e[i++]=o,i}function ez(e,t,i,n,r){eJ(t,n,r,e,i,7);let s=Number(t&BigInt(4294967295));e[i+7]=s,s>>=8,e[i+6]=s,s>>=8,e[i+5]=s,s>>=8,e[i+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[i+3]=o,o>>=8,e[i+2]=o,o>>=8,e[i+1]=o,o>>=8,e[i]=o,i+8}function eW(e,t,i,n,r,s){if(i+n>e.length||i<0)throw RangeError("Index out of range")}function eH(e,t,i,n,r){return t=+t,i>>>=0,r||eW(e,t,i,4,34028234663852886e22,-34028234663852886e22),sG(e,t,i,n,23,4),i+4}function e$(e,t,i,n,r){return t=+t,i>>>=0,r||eW(e,t,i,8,17976931348623157e292,-17976931348623157e292),sG(e,t,i,n,52,8),i+8}/**
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
 */ek.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ek.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ek.prototype,"parent",{enumerable:!0,get:function(){if(ek.isBuffer(this))return this.buffer}}),Object.defineProperty(ek.prototype,"offset",{enumerable:!0,get:function(){if(ek.isBuffer(this))return this.byteOffset}}),ek.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ek.from=function(e,t,i){return eS(e,t,i)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(ek.prototype,Uint8Array.prototype),Object.setPrototypeOf(ek,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ek.alloc=function(e,t,i){return(eN(e),e<=0)?eC(e):void 0!==t?"string"==typeof i?eC(e).fill(t,i):eC(e).fill(t):eC(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ek.allocUnsafe=function(e){return eR(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ek.allocUnsafeSlow=function(e){return eR(e)},ek.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ek.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},ek.compare=function(e,t){if(e2(e,Uint8Array)&&(e=ek.from(e,e.offset,e.byteLength)),e2(t,Uint8Array)&&(t=ek.from(t,t.offset,t.byteLength)),!ek.isBuffer(e)||!ek.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let r=0,s=Math.min(i,n);r<s;++r)if(e[r]!==t[r]){i=e[r],n=t[r];break}return i<n?-1:n<i?1:0},ek.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ek.concat=function(e,t){let i;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ek.alloc(0);if(void 0===t)for(i=0,t=0;i<e.length;++i)t+=e[i].length;let n=ek.allocUnsafe(t),r=0;for(i=0;i<e.length;++i){let t=e[i];if(e2(t,Uint8Array))r+t.length>n.length?(ek.isBuffer(t)||(t=ek.from(t)),t.copy(n,r)):Uint8Array.prototype.set.call(n,t,r);else if(ek.isBuffer(t))t.copy(n,r);else throw TypeError('"list" argument must be an Array of Buffers');r+=t.length}return n},ek.byteLength=eP,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
ek.prototype._isBuffer=!0,ek.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)eD(this,t,t+1);return this},ek.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)eD(this,t,t+3),eD(this,t+1,t+2);return this},ek.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)eD(this,t,t+7),eD(this,t+1,t+6),eD(this,t+2,t+5),eD(this,t+3,t+4);return this},ek.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?eF(this,0,e):eL.apply(this,arguments)},ek.prototype.toLocaleString=ek.prototype.toString,ek.prototype.equals=function(e){if(!ek.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ek.compare(this,e)},ek.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},eT&&(ek.prototype[eT]=ek.prototype.inspect),ek.prototype.compare=function(e,t,i,n,r){if(e2(e,Uint8Array)&&(e=ek.from(e,e.offset,e.byteLength)),!ek.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===i&&(i=e?e.length:0),void 0===n&&(n=0),void 0===r&&(r=this.length),t<0||i>e.length||n<0||r>this.length)throw RangeError("out of range index");if(n>=r&&t>=i)return 0;if(n>=r)return -1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,r>>>=0,this===e)return 0;let s=r-n,o=i-t,a=Math.min(s,o),l=this.slice(n,r),h=e.slice(t,i);for(let e=0;e<a;++e)if(l[e]!==h[e]){s=l[e],o=h[e];break}return s<o?-1:o<s?1:0},ek.prototype.includes=function(e,t,i){return -1!==this.indexOf(e,t,i)},ek.prototype.indexOf=function(e,t,i){return eM(this,e,t,i,!0)},ek.prototype.lastIndexOf=function(e,t,i){return eM(this,e,t,i,!1)},ek.prototype.write=function(e,t,i,n){var r,s,o,a,l,h,u,c;// Buffer#write(string)
if(void 0===t)n="utf8",i=this.length,t=0;else if(void 0===i&&"string"==typeof t)n=t,i=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(i)?(i>>>=0,void 0===n&&(n="utf8")):(n=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===i||i>d)&&(i=d),e.length>0&&(i<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,i,n){let r;i=Number(i)||0;let s=e.length-i;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),r=0;r<n;++r){let n=parseInt(t.substr(2*r,2),16);if(n!=n)break;e[i+r]=n}return r}(this,e,t,i);case"utf8":case"utf-8":return r=t,s=i,e1(eZ(e,this.length-r),this,r,s);case"ascii":case"latin1":case"binary":return o=t,a=i,e1(function(e){let t=[];for(let i=0;i<e.length;++i)t.push(255&e.charCodeAt(i));return t}(e),this,o,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,h=i,e1(e0(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=i,e1(function(e,t){let i,n;let r=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(i=e.charCodeAt(s))>>8,r.push(i%256),r.push(n);return r}(e,this.length-u),this,u,c);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},ek.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ek.prototype.slice=function(e,t){let i=this.length;e=~~e,t=void 0===t?i:~~t,e<0?(e+=i)<0&&(e=0):e>i&&(e=i),t<0?(t+=i)<0&&(t=0):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,ek.prototype),n)},ek.prototype.readUintLE=ek.prototype.readUIntLE=function(e,t,i){e>>>=0,t>>>=0,i||ej(e,t,this.length);let n=this[e],r=1,s=0;for(;++s<t&&(r*=256);)n+=this[e+s]*r;return n},ek.prototype.readUintBE=ek.prototype.readUIntBE=function(e,t,i){e>>>=0,t>>>=0,i||ej(e,t,this.length);let n=this[e+--t],r=1;for(;t>0&&(r*=256);)n+=this[e+--t]*r;return n},ek.prototype.readUint8=ek.prototype.readUInt8=function(e,t){return e>>>=0,t||ej(e,1,this.length),this[e]},ek.prototype.readUint16LE=ek.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ej(e,2,this.length),this[e]|this[e+1]<<8},ek.prototype.readUint16BE=ek.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ej(e,2,this.length),this[e]<<8|this[e+1]},ek.prototype.readUint32LE=ek.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ej(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ek.prototype.readUint32BE=ek.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ej(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ek.prototype.readBigUInt64LE=e9(function(e){eY(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eX(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],r=this[++e]+256*this[++e]+65536*this[++e]+16777216*i;return BigInt(n)+(BigInt(r)<<BigInt(32))}),ek.prototype.readBigUInt64BE=e9(function(e){eY(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eX(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],r=16777216*this[++e]+65536*this[++e]+256*this[++e]+i;return(BigInt(n)<<BigInt(32))+BigInt(r)}),ek.prototype.readIntLE=function(e,t,i){e>>>=0,t>>>=0,i||ej(e,t,this.length);let n=this[e],r=1,s=0;for(;++s<t&&(r*=256);)n+=this[e+s]*r;return n>=(r*=128)&&(n-=Math.pow(2,8*t)),n},ek.prototype.readIntBE=function(e,t,i){e>>>=0,t>>>=0,i||ej(e,t,this.length);let n=t,r=1,s=this[e+--n];for(;n>0&&(r*=256);)s+=this[e+--n]*r;return s>=(r*=128)&&(s-=Math.pow(2,8*t)),s},ek.prototype.readInt8=function(e,t){return(e>>>=0,t||ej(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ek.prototype.readInt16LE=function(e,t){e>>>=0,t||ej(e,2,this.length);let i=this[e]|this[e+1]<<8;return 32768&i?4294901760|i:i},ek.prototype.readInt16BE=function(e,t){e>>>=0,t||ej(e,2,this.length);let i=this[e+1]|this[e]<<8;return 32768&i?4294901760|i:i},ek.prototype.readInt32LE=function(e,t){return e>>>=0,t||ej(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ek.prototype.readInt32BE=function(e,t){return e>>>=0,t||ej(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ek.prototype.readBigInt64LE=e9(function(e){eY(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eX(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(i<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),ek.prototype.readBigInt64BE=e9(function(e){eY(e>>>=0,"offset");let t=this[e],i=this[e+7];(void 0===t||void 0===i)&&eX(e,this.length-8);let n=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+i)}),ek.prototype.readFloatLE=function(e,t){return e>>>=0,t||ej(e,4,this.length),sK(this,e,!0,23,4)},ek.prototype.readFloatBE=function(e,t){return e>>>=0,t||ej(e,4,this.length),sK(this,e,!1,23,4)},ek.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ej(e,8,this.length),sK(this,e,!0,52,8)},ek.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ej(e,8,this.length),sK(this,e,!1,52,8)},ek.prototype.writeUintLE=ek.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t>>>=0,i>>>=0,!n){let n=Math.pow(2,8*i)-1;eB(this,e,t,i,n,0)}let r=1,s=0;for(this[t]=255&e;++s<i&&(r*=256);)this[t+s]=e/r&255;return t+i},ek.prototype.writeUintBE=ek.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t>>>=0,i>>>=0,!n){let n=Math.pow(2,8*i)-1;eB(this,e,t,i,n,0)}let r=i-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+i},ek.prototype.writeUint8=ek.prototype.writeUInt8=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,1,255,0),this[t]=255&e,t+1},ek.prototype.writeUint16LE=ek.prototype.writeUInt16LE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ek.prototype.writeUint16BE=ek.prototype.writeUInt16BE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ek.prototype.writeUint32LE=ek.prototype.writeUInt32LE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ek.prototype.writeUint32BE=ek.prototype.writeUInt32BE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ek.prototype.writeBigUInt64LE=e9(function(e,t=0){return eq(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ek.prototype.writeBigUInt64BE=e9(function(e,t=0){return ez(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ek.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*i-1);eB(this,e,t,i,n-1,-n)}let r=0,s=1,o=0;for(this[t]=255&e;++r<i&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+i},ek.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*i-1);eB(this,e,t,i,n-1,-n)}let r=i-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+i},ek.prototype.writeInt8=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ek.prototype.writeInt16LE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ek.prototype.writeInt16BE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ek.prototype.writeInt32LE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ek.prototype.writeInt32BE=function(e,t,i){return e=+e,t>>>=0,i||eB(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ek.prototype.writeBigInt64LE=e9(function(e,t=0){return eq(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ek.prototype.writeBigInt64BE=e9(function(e,t=0){return ez(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ek.prototype.writeFloatLE=function(e,t,i){return eH(this,e,t,!0,i)},ek.prototype.writeFloatBE=function(e,t,i){return eH(this,e,t,!1,i)},ek.prototype.writeDoubleLE=function(e,t,i){return e$(this,e,t,!0,i)},ek.prototype.writeDoubleBE=function(e,t,i){return e$(this,e,t,!1,i)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
ek.prototype.copy=function(e,t,i,n){if(!ek.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(i||(i=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let r=n-i;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),r},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
ek.prototype.fill=function(e,t,i,n){let r;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,i=this.length):"string"==typeof i&&(n=i,i=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ek.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<i)throw RangeError("Out of range index");if(i<=t)return this;if(t>>>=0,i=void 0===i?this.length:i>>>0,e||(e=0),"number"==typeof e)for(r=t;r<i;++r)this[r]=e;else{let s=ek.isBuffer(e)?e:ek.from(e,n),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<i-t;++r)this[r+t]=s[r%o]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let eV={};function eK(e,t,i){eV[e]=class extends i{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function eG(e){let t="",i=e.length,n="-"===e[0]?1:0;for(;i>=n+4;i-=3)t=`_${e.slice(i-3,i)}${t}`;return`${e.slice(0,i)}${t}`}function eJ(e,t,i,n,r,s){if(e>i||e<t){let n;let r="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${(s+1)*8}${r}`:`>= -(2${r} ** ${(s+1)*8-1}${r}) and < 2 ** ${(s+1)*8-1}${r}`:`>= ${t}${r} and <= ${i}${r}`,new eV.ERR_OUT_OF_RANGE("value",n,e)}eY(r,"offset"),(void 0===n[r]||void 0===n[r+s])&&eX(r,n.length-(s+1))}function eY(e,t){if("number"!=typeof e)throw new eV.ERR_INVALID_ARG_TYPE(t,"number",e)}function eX(e,t,i){if(Math.floor(e)!==e)throw eY(e,i),new eV.ERR_OUT_OF_RANGE(i||"offset","an integer",e);if(t<0)throw new eV.ERR_BUFFER_OUT_OF_BOUNDS;throw new eV.ERR_OUT_OF_RANGE(i||"offset",`>= ${i?1:0} and <= ${t}`,e)}eK("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),eK("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),eK("ERR_OUT_OF_RANGE",function(e,t,i){let n=`The value of "${e}" is out of range.`,r=i;return Number.isInteger(i)&&Math.abs(i)>4294967296?r=eG(String(i)):"bigint"==typeof i&&(r=String(i),(i>BigInt(2)**BigInt(32)||i<-(BigInt(2)**BigInt(32)))&&(r=eG(r)),r+="n"),n+=` It must be ${t}. Received ${r}`},RangeError);// HELPER FUNCTIONS
// ================
let eQ=/[^+/0-9A-Za-z-_]/g;function eZ(e,t){let i;t=t||1/0;let n=e.length,r=null,s=[];for(let o=0;o<n;++o){// is surrogate component
if((i=e.charCodeAt(o))>55295&&i<57344){// last char was a lead
if(!r){// no lead yet
if(i>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}// valid lead
r=i;continue}// 2 leads in a row
if(i<56320){(t-=3)>-1&&s.push(239,191,189),r=i;continue}// valid surrogate pair
i=(r-55296<<10|i-56320)+65536}else r&&(t-=3)>-1&&s.push(239,191,189);// encode utf8
if(r=null,i<128){if((t-=1)<0)break;s.push(i)}else if(i<2048){if((t-=2)<0)break;s.push(i>>6|192,63&i|128)}else if(i<65536){if((t-=3)<0)break;s.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((t-=4)<0)break;s.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return s}function e0(e){return function(e){var t,i,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var i=e.indexOf("=");-1===i&&(i=t);var n=i===t?0:4-i%4;return[i,n]}(e),r=n[0],s=n[1],o=new ew((r+s)*3/4-s),a=0,l=s>0?r-4:r;for(i=0;i<l;i+=4)t=ev[e.charCodeAt(i)]<<18|ev[e.charCodeAt(i+1)]<<12|ev[e.charCodeAt(i+2)]<<6|ev[e.charCodeAt(i+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=ev[e.charCodeAt(i)]<<2|ev[e.charCodeAt(i+1)]>>4,o[a++]=255&t),1===s&&(t=ev[e.charCodeAt(i)]<<10|ev[e.charCodeAt(i+1)]<<4|ev[e.charCodeAt(i+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(eQ,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function e1(e,t,i,n){let r;for(r=0;r<n&&!(r+i>=t.length)&&!(r>=e.length);++r)t[r+i]=e[r];return r}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function e2(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let e4=function(){let e="0123456789abcdef",t=Array(256);for(let i=0;i<16;++i){let n=16*i;for(let r=0;r<16;++r)t[n+r]=e[i]+e[r]}return t}();// Return not function with Error if BigInt not supported
function e9(e){return"undefined"==typeof BigInt?e5:e}function e5(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function e6(e){return ep.isPlainObject(e)||ep.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function e3(e){return ep.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function e8(e,t,i){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=e3(e),!i&&t?"["+e+"]":e)}).join(i?".":""):t}let e7=ep.toFlatObject(ep,{},null,function(e){return/^is[A-Z]/.test(e)});var te=/**
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
 */function(e,t,i){if(!ep.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
i=ep.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!ep.isUndefined(t[e])});let n=i.metaTokens,r=i.visitor||u,s=i.dots,o=i.indexes,a=i.Blob||"undefined"!=typeof Blob&&Blob,l=a&&ep.isSpecCompliantForm(t);if(!ep.isFunction(r))throw TypeError("visitor must be a function");function h(e){if(null===e)return"";if(ep.isDate(e))return e.toISOString();if(!l&&ep.isBlob(e))throw new eg("Blob is not supported. Use a Buffer instead.");return ep.isArrayBuffer(e)||ep.isTypedArray(e)?l&&"function"==typeof Blob?new Blob([e]):ek.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function u(e,i,r){let a=e;if(e&&!r&&"object"==typeof e){if(ep.endsWith(i,"{}"))// eslint-disable-next-line no-param-reassign
i=n?i:i.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var l;if(ep.isArray(e)&&(l=e,ep.isArray(l)&&!l.some(e6))||(ep.isFileList(e)||ep.endsWith(i,"[]"))&&(a=ep.toArray(e)))return(// eslint-disable-next-line no-param-reassign
i=e3(i),a.forEach(function(e,n){ep.isUndefined(e)||null===e||t.append(!0===o?e8([i],n,s):null===o?i:i+"[]",h(e))}),!1)}}return!!e6(e)||(t.append(e8(r,i,s),h(e)),!1)}let c=[],d=Object.assign(e7,{defaultVisitor:u,convertValue:h,isVisitable:e6});if(!ep.isObject(e))throw TypeError("data must be an object");return!function e(i,n){if(!ep.isUndefined(i)){if(-1!==c.indexOf(i))throw Error("Circular reference detected in "+n.join("."));c.push(i),ep.forEach(i,function(i,s){let o=!(ep.isUndefined(i)||null===i)&&r.call(t,i,ep.isString(s)?s.trim():s,n,d);!0===o&&e(i,n?n.concat(s):[s])}),c.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tt(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function ti(e,t){this._pairs=[],e&&te(e,this,t)}let tn=ti.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ts(e,t,i){let n;/*eslint no-param-reassign:0*/if(!t)return e;let r=i&&i.encode||tr,s=i&&i.serialize;if(n=s?s(t,i):ep.isURLSearchParams(t)?t.toString():new ti(t,i).toString(r)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}tn.append=function(e,t){this._pairs.push([e,t])},tn.toString=function(e){let t=e?function(t){return e.call(this,t,tt)}:tt;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var to=class{constructor(){this.handlers=[]}/**
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
   */forEach(e){ep.forEach(this.handlers,function(t){null!==t&&e(t)})}},ta={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tl="undefined"!=typeof URLSearchParams?URLSearchParams:ti,th="undefined"!=typeof FormData?FormData:null,tu="undefined"!=typeof Blob?Blob:null;/**
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
 */let tc=("undefined"==typeof navigator||"ReactNative"!==(_=navigator.product)&&"NativeScript"!==_&&"NS"!==_)&&"undefined"!=typeof window&&"undefined"!=typeof document,td="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tf={classes:{URLSearchParams:tl,FormData:th,Blob:tu},isStandardBrowserEnv:tc,isStandardBrowserWebWorkerEnv:td,protocols:["http","https","file","blob","url","data"]},tp=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(ep.isFormData(e)&&ep.isFunction(e.entries)){let t={};return ep.forEachEntry(e,(e,i)=>{!function e(t,i,n,r){let s=t[r++],o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&ep.isArray(n)?n.length:s,a)return ep.hasOwnProp(n,s)?n[s]=[n[s],i]:n[s]=i,!o;n[s]&&ep.isObject(n[s])||(n[s]=[]);let l=e(t,i,n[s],r);return l&&ep.isArray(n[s])&&(n[s]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,i;let n={},r=Object.keys(e),s=r.length;for(t=0;t<s;t++)n[i=r[t]]=e[i];return n}(n[s])),!o}(ep.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),i,t,0)}),t}return null};let tg={transitional:ta,adapter:tf.isNode?"http":"xhr",transformRequest:[function(e,t){let i;let n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=ep.isObject(e);s&&ep.isHTMLForm(e)&&(e=new FormData(e));let o=ep.isFormData(e);if(o)return r&&r?JSON.stringify(tp(e)):e;if(ep.isArrayBuffer(e)||ep.isBuffer(e)||ep.isStream(e)||ep.isFile(e)||ep.isBlob(e))return e;if(ep.isArrayBufferView(e))return e.buffer;if(ep.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,l;return(a=e,l=this.formSerializer,te(a,new tf.classes.URLSearchParams,Object.assign({visitor:function(e,t,i,n){return tf.isNode&&ep.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},l))).toString()}if((i=ep.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return te(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,i){if(ep.isString(e))try{return(0,JSON.parse)(e),ep.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||tg.transitional,i=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&ep.isString(e)&&(i&&!this.responseType||n)){let i=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!i&&n){if("SyntaxError"===e.name)throw eg.from(e,eg.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tf.classes.FormData,Blob:tf.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ep.forEach(["delete","get","head","post","put","patch"],e=>{tg.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let tm=ep.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */ty=e=>{let t,i,n;let r={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),i=e.substring(n+1).trim(),!t||r[t]&&tm[t]||("set-cookie"===t?r[t]?r[t].push(i):r[t]=[i]:r[t]=r[t]?r[t]+", "+i:i)}),r};let t_=Symbol("internals");function tv(e){return e&&String(e).trim().toLowerCase()}function tw(e){return!1===e||null==e?e:ep.isArray(e)?e.map(tw):String(e)}let tb=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tI(e,t,i,n,r){if(ep.isFunction(n))return n.call(this,t,i);if(r&&(t=i),ep.isString(t)){if(ep.isString(n))return -1!==t.indexOf(n);if(ep.isRegExp(n))return n.test(t)}}class tE{constructor(e){e&&this.set(e)}set(e,t,i){let n=this;function r(e,t,i){let r=tv(t);if(!r)throw Error("header name must be a non-empty string");let s=ep.findKey(n,r);s&&void 0!==n[s]&&!0!==i&&(void 0!==i||!1===n[s])||(n[s||t]=tw(e))}let s=(e,t)=>ep.forEach(e,(e,i)=>r(e,i,t));return ep.isPlainObject(e)||e instanceof this.constructor?s(e,t):ep.isString(e)&&(e=e.trim())&&!tb(e)?s(ty(e),t):null!=e&&r(t,e,i),this}get(e,t){if(e=tv(e)){let i=ep.findKey(this,e);if(i){let e=this[i];if(!t)return e;if(!0===t)return function(e){let t;let i=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)i[t[1]]=t[2];return i}(e);if(ep.isFunction(t))return t.call(this,e,i);if(ep.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tv(e)){let i=ep.findKey(this,e);return!!(i&&void 0!==this[i]&&(!t||tI(this,this[i],i,t)))}return!1}delete(e,t){let i=this,n=!1;function r(e){if(e=tv(e)){let r=ep.findKey(i,e);r&&(!t||tI(i,i[r],r,t))&&(delete i[r],n=!0)}}return ep.isArray(e)?e.forEach(r):r(e),n}clear(e){let t=Object.keys(this),i=t.length,n=!1;for(;i--;){let r=t[i];(!e||tI(this,this[r],r,e,!0))&&(delete this[r],n=!0)}return n}normalize(e){let t=this,i={};return ep.forEach(this,(n,r)=>{let s=ep.findKey(i,r);if(s){t[s]=tw(n),delete t[r];return}let o=e?r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i):String(r).trim();o!==r&&delete t[r],t[o]=tw(n),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return ep.forEach(this,(i,n)=>{null!=i&&!1!==i&&(t[n]=e&&ep.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let i=new this(e);return t.forEach(e=>i.set(e)),i}static accessor(e){let t=this[t_]=this[t_]={accessors:{}},i=t.accessors,n=this.prototype;function r(e){let t=tv(e);i[t]||(!function(e,t){let i=ep.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+i,{value:function(e,i,r){return this[n].call(this,t,e,i,r)},configurable:!0})})}(n,e),i[t]=!0)}return ep.isArray(e)?e.forEach(r):r(e),this}}function tT(e,t){let i=this||tg,n=t||i,r=tE.from(n.headers),s=n.data;return ep.forEach(e,function(e){s=e.call(i,s,r.normalize(),t?t.status:void 0)}),r.normalize(),s}function tC(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function tk(e,t,i){eg.call(this,null==e?"canceled":e,eg.ERR_CANCELED,t,i),this.name="CanceledError"}tE.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ep.reduceDescriptors(tE.prototype,({value:e},t)=>{let i=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[i]=e}}}),ep.freezeMethods(tE),ep.inherits(tk,eg,{__CANCEL__:!0});var tS=tf.isStandardBrowserEnv?{write:function(e,t,i,n,r,s){let o=[];o.push(e+"="+encodeURIComponent(t)),ep.isNumber(i)&&o.push("expires="+new Date(i).toGMTString()),ep.isString(n)&&o.push("path="+n),ep.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function tN(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var tR=tf.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
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
    */return e=n(window.location.href),function(t){let i=ep.isString(t)?n(t):t;return i.protocol===e.protocol&&i.host===e.host}}():function(){return!0},tA=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let i;e=e||10;let n=Array(e),r=Array(e),s=0,o=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),h=r[o];i||(i=l),n[s]=a,r[s]=l;let u=o,c=0;for(;u!==s;)c+=n[u++],u%=e;if((s=(s+1)%e)===o&&(o=(o+1)%e),l-i<t)return;let d=h&&l-h;return d?Math.round(1e3*c/d):void 0}};function tx(e,t){let i=0,n=tA(50,250);return r=>{let s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-i,l=n(a),h=s<=o;i=s;let u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&h?(o-s)/l:void 0,event:r};u[t?"download":"upload"]=!0,e(u)}}let tO="undefined"!=typeof XMLHttpRequest;var tP=tO&&function(e){return new Promise(function(t,i){let n,r=e.data,s=tE.from(e.headers).normalize(),o=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}ep.isFormData(r)&&(tf.isStandardBrowserEnv||tf.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+i))}let h=tN(e.baseURL,e.url);function u(){if(!l)return;// Prepare the response
let n=tE.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),r=o&&"text"!==o&&"json"!==o?l.response:l.responseText,s={data:r,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};!function(e,t,i){let n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new eg("Request failed with status code "+i.status,[eg.ERR_BAD_REQUEST,eg.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}(function(e){t(e),a()},function(e){i(e),a()},s),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(e.method.toUpperCase(),ts(h,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(u)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(i(new eg("Request aborted",eg.ECONNABORTED,e,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
i(new eg("Network Error",eg.ERR_NETWORK,e,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||ta;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),i(new eg(t,n.clarifyTimeoutError?eg.ETIMEDOUT:eg.ECONNABORTED,e,l)),// Clean up request
l=null},tf.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||tR(h))&&e.xsrfCookieName&&tS.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===r&&s.setContentType(null),"setRequestHeader"in l&&ep.forEach(s.toJSON(),function(e,t){l.setRequestHeader(t,e)}),ep.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&"json"!==o&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",tx(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",tx(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{l&&(i(!t||t.type?new tk(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let c=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(h);if(c&&-1===tf.protocols.indexOf(c)){i(new eg("Unsupported protocol "+c+":",eg.ERR_BAD_REQUEST,e));return}// Send the request
l.send(r||null)})};let tL={http:null,xhr:tP};ep.forEach(tL,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});var tD={getAdapter:e=>{let t,i;e=ep.isArray(e)?e:[e];let{length:n}=e;for(let r=0;r<n&&(t=e[r],!(i=ep.isString(t)?tL[t.toLowerCase()]:t));r++);if(!i){if(!1===i)throw new eg(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT");throw Error(ep.hasOwnProp(tL,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`)}if(!ep.isFunction(i))throw TypeError("adapter is not a function");return i},adapters:tL};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function tM(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new tk(null,e)}function tU(e){tM(e),e.headers=tE.from(e.headers),// Transform request data
e.data=tT.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=tD.getAdapter(e.adapter||tg.adapter);return t(e).then(function(t){return tM(e),// Transform response data
t.data=tT.call(e,e.transformResponse,t),t.headers=tE.from(t.headers),t},function(t){return!tC(t)&&(tM(e),t&&t.response&&(t.response.data=tT.call(e,e.transformResponse,t.response),t.response.headers=tE.from(t.response.headers))),Promise.reject(t)})}let tF=e=>e instanceof tE?e.toJSON():e;function tj(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let i={};function n(e,t,i){return ep.isPlainObject(e)&&ep.isPlainObject(t)?ep.merge.call({caseless:i},e,t):ep.isPlainObject(t)?ep.merge({},t):ep.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function r(e,t,i){return ep.isUndefined(t)?ep.isUndefined(e)?void 0:n(void 0,e,i):n(e,t,i)}// eslint-disable-next-line consistent-return
function s(e,t){if(!ep.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function o(e,t){return ep.isUndefined(t)?ep.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function a(i,r,s){return s in t?n(i,r):s in e?n(void 0,i):void 0}let l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(tF(e),tF(t),!0)};return ep.forEach(Object.keys(Object.assign({},e,t)),function(n){let s=l[n]||r,o=s(e[n],t[n],n);ep.isUndefined(o)&&s!==a||(i[n]=o)}),i}let tB="1.5.0",tq={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tq[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});let tz={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */tq.transitional=function(e,t,i){function n(e,t){return"[Axios v"+tB+"] Transitional option '"+e+"'"+t+(i?". "+i:"")}// eslint-disable-next-line func-names
return(i,r,s)=>{if(!1===e)throw new eg(n(r," has been removed"+(t?" in "+t:"")),eg.ERR_DEPRECATED);return t&&!tz[r]&&(tz[r]=!0,// eslint-disable-next-line no-console
console.warn(n(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(i,r,s)}};var tW={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,i){if("object"!=typeof e)throw new eg("options must be an object",eg.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),r=n.length;for(;r-- >0;){let s=n[r],o=t[s];if(o){let t=e[s],i=void 0===t||o(t,s,e);if(!0!==i)throw new eg("option "+s+" must be "+i,eg.ERR_BAD_OPTION_VALUE);continue}if(!0!==i)throw new eg("Unknown option "+s,eg.ERR_BAD_OPTION)}},validators:tq};let tH=tW.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class t${constructor(e){this.defaults=e,this.interceptors={request:new to,response:new to}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let i,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=tj(this.defaults,t);let{transitional:r,paramsSerializer:s,headers:o}=t;void 0!==r&&tW.assertOptions(r,{silentJSONParsing:tH.transitional(tH.boolean),forcedJSONParsing:tH.transitional(tH.boolean),clarifyTimeoutError:tH.transitional(tH.boolean)},!1),null!=s&&(ep.isFunction(s)?t.paramsSerializer={serialize:s}:tW.assertOptions(s,{encode:tH.function,serialize:tH.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=o&&ep.merge(o.common,o[t.method]);o&&ep.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=tE.concat(a,o);// filter out skipped interceptors
let l=[],h=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(h=h&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let u=[];this.interceptors.response.forEach(function(e){u.push(e.fulfilled,e.rejected)});let c=0;if(!h){let e=[tU.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,u),n=e.length,i=Promise.resolve(t);c<n;)i=i.then(e[c++],e[c++]);return i}n=l.length;let d=t;for(c=0;c<n;){let e=l[c++],t=l[c++];try{d=e(d)}catch(e){t.call(this,e);break}}try{i=tU.call(this,d)}catch(e){return Promise.reject(e)}for(c=0,n=u.length;c<n;)i=i.then(u[c++],u[c++]);return i}getUri(e){e=tj(this.defaults,e);let t=tN(e.baseURL,e.url);return ts(t,e.params,e.paramsSerializer)}}ep.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/t$.prototype[e]=function(t,i){return this.request(tj(i||{},{method:e,url:t,data:(i||{}).data}))}}),ep.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(i,n,r){return this.request(tj(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:i,data:n}))}}t$.prototype[e]=t(),t$.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class tV{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let i=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!i._listeners)return;let t=i._listeners.length;for(;t-- >0;)i._listeners[t](e);i._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{i.subscribe(e),t=e}).then(e);return n.cancel=function(){i.unsubscribe(t)},n},e(function(e,n,r){i.reason||(i.reason=new tk(e,n,r),t(i.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new tV(function(t){e=t});return{token:t,cancel:e}}}let tK={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tK).forEach(([e,t])=>{tK[t]=e});// Create the default instance to be exported
let tG=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let i=new t$(t),n=M(t$.prototype.request,i);return ep.extend(n,t$.prototype,i,{allOwnKeys:!0}),ep.extend(n,i,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(i){return e(tj(t,i))},n}(tg);// Expose Axios class to allow class inheritance
tG.Axios=t$,// Expose Cancel & CancelToken
tG.CanceledError=tk,tG.CancelToken=tV,tG.isCancel=tC,tG.VERSION=tB,tG.toFormData=te,// Expose AxiosError class
tG.AxiosError=eg,// alias for CanceledError for backward compatibility
tG.Cancel=tG.CanceledError,// Expose all/spread
tG.all=function(e){return Promise.all(e)},tG.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
tG.isAxiosError=function(e){return ep.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
tG.mergeConfig=tj,tG.AxiosHeaders=tE,tG.formToJSON=e=>tp(ep.isHTMLForm(e)?new FormData(e):e),tG.getAdapter=tD.getAdapter,tG.HttpStatusCode=tK,tG.default=tG;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:tJ,AxiosError:tY,CanceledError:tX,isCancel:tQ,CancelToken:tZ,VERSION:t0,all:t1,Cancel:t2,isAxiosError:t4,spread:t9,toFormData:t5,AxiosHeaders:t6,HttpStatusCode:t3,formToJSON:t8,getAdapter:t7,mergeConfig:ie}=tG;async function it(e){try{let t=await tG.get("https://books-backend.p.goit.global/books/"+e);return t.data}catch(e){console.error("An error occurred while fetching data:",e)}}async function ii(){let{data:e}=await tG.get("https://books-backend.p.goit.global/books/category-list");return e}let ir=document.querySelector(".categories-list");(async function e(){try{let e=await ii();if(!e.length){(0,D.Notify).failure("Oops something going wrong.");return}ir.insertAdjacentHTML("beforeend",e.map(({list_name:e})=>`
    <li class="categories-list-item">
      <a href="#" class="categories-link">${e}</a>
    </li>
  `).join(""))}catch(e){console.log("TRY-CATCH:",e),(0,D.Notify).failure("Oops something going wrong.")}})(),ir.addEventListener("click",e=>{e.preventDefault()}),P("ksGdE");var is=P("6JpON");let io=(e,t)=>{try{let i=JSON.stringify(t);localStorage.setItem(e,i)}catch(e){(0,is.Notify).error("Set state error: ",e.message)}},ia=e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){(0,is.Notify).error("Get state error: ",e.message)}};var is=P("6JpON");(0,is.Loading).pulse({svgColor:"#eac645"});let il=document.querySelector(".common-list"),ih=document.querySelector(".main-title"),iu=document.querySelector(".categories-list"),ic=window.innerWidth<767?1:window.innerWidth<1439?3:5;function id(e){//render categories
let t=function(e){let t=[...e];for(let e=t.length-1;e>0;e--){let i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}(e),i="";for(let e of(ih.textContent="Best Sellers",ih.insertAdjacentHTML("beforeend",'&nbsp;<span class="main-title main-title-wrapper">Books</span>'),t)){let{books:t,list_name:n}=e;i+=` 
        <li class="common-item">
        <h2 class="common-title">${n}</h2>
        <ul class="book-list">
            ${function(e,t){// render books inside the category
let i="";for(let n=0;n<t;n+=1){let{book_image:t,title:r,author:s,_id:o}=e[n];i+=`
              <li class="book-item" data-id="${o}" tabindex="0">
              <div class="thumb" data-id="${o}">
              <img src="${t||"../images/default_image.png"}" alt="${r}" class="book-img" data-id="${o}">
              <p class="notifications" data-id="${o}">quick view</p>
              </div> 
              <h3 class="book-title" data-id="${o}">${r}</h3>
              <p class="book-author" data-id="${o}">${s}</p>
              </li>
            `}return i}(t,ic)}
        </ul>
        <button type="button" class="showMore-btn" name="${n}">see more</button>
    </li>`}il.innerHTML=i}iu.firstElementChild.addEventListener("click",function(){(0,is.Loading).pulse({svgColor:"#eac645"});let e=ia("data");id(e),(0,is.Loading).remove()}),window.addEventListener("resize",function(){// Check wether we should render markup or not.
let e=window.innerWidth<767?1:window.innerWidth<1439?3:5;if(e!=ic){ic=e;let t=ia("data");id(t)}}),it("top-books").then(e=>{io("data",e),id(e)}).catch(e=>(0,is.Notify).failure(e)).finally(()=>(0,is.Loading).remove());var is=P("6JpON");let ip={categories:document.querySelector(".categories-list"),title:document.querySelector(".main-title"),list:document.querySelector(".common-list")},ig="Sorry, there are no books matching the selected category. Please select something else.",im="Sorry, something went wrong. Try again!";ip.categories.addEventListener("click",function(e){"categories-link"===e.target.className&&(iT(e.target),iy=e.target.textContent.replaceAll(" ","%20"),e.target!==ip.categories.firstElementChild.firstElementChild&&((0,is.Loading).pulse({svgColor:"#eac645"}),iw(iy).then(e=>{if(0===e.data.length)throw Error((0,is.Notify).info(ig));let t=e.data[0].list_name;ip.title.textContent=iI(t),ip.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${iE(t)}</span>`),ip.list.innerHTML=ib(e.data)}).catch(function(e){e.response?(0,is.Notify).failure(im):e.request&&(0,is.Notify).failure(im)}).finally(()=>(0,is.Loading).remove())))}),ip.list.addEventListener("click",function(e){if("showMore-btn"!==e.target.className)return;(0,is.Loading).pulse({svgColor:"#eac645"}),i_=e.target.name.replaceAll(" ","%20");let t=Array.from(ip.categories.children);t.forEach(e=>{let t=e.firstElementChild.textContent.replaceAll(" ","%20");t===i_&&iT(e)}),iw(i_).then(e=>{if(0===e.data.length)throw Error((0,is.Notify).info(ig));let t=e.data[0].list_name;ip.title.textContent=iI(t),ip.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${iE(t)}</span>`),ip.list.innerHTML=ib(e.data)}).catch(function(e){e.response?(0,is.Notify).failure(im):e.request&&(0,is.Notify).failure(im)}).finally(()=>(0,is.Loading).remove())});let iy="",i_="",iv=ip.categories.firstElementChild.firstElementChild;async function iw(e){let t=`https://books-backend.p.goit.global/books/category?category=${e}`,i=await tG.get(t);return i}function ib(e){return e.map(({book_image:e,author:t,title:i,_id:n})=>{let r=`<li class="book-item" data-id="${n}" tabindex="0">
              <div class="thumb" data-id="${n}">
              <img src="${e||"../images/default_image.png"}" alt="${i}" class="book-img" data-id="${n}">
              <p class="notifications" data-id="${n}">quick view</p>
              </div> 
              <h3 class="book-title" data-id="${n}">${i}</h3>
              <p class="book-author" data-id="${n}">${t}</p>
              </li>`;return r}).join("")}function iI(e){let t=e.split(" ");return t.splice(0,t.length-1).join(" ")}function iE(e){let t=e.split(" ");return t[t.length-1]}function iT(e){iv&&iv.classList.remove("category-active"),e.classList.add("category-active"),iv=e}iT(iv);var iC={};iC=P("aNJCr").getBundleURL("EVgbq")+P("iE7OH").resolve("kSqT3");var ik={};ik=P("aNJCr").getBundleURL("EVgbq")+P("iE7OH").resolve("hTMkK");var iS={};iS=P("aNJCr").getBundleURL("EVgbq")+P("iE7OH").resolve("9Qt2K");//!------------------------------------------
let iN=document.querySelector(".common-list"),iR=document.querySelector(".modal__content"),iA=document.querySelector("#book-modal"),ix=document.getElementById("book-modal"),iO=document.querySelector(".modal__close-btn"),iP=document.querySelector(".add-bookBtn");document.querySelector(".addNotification"),document.querySelector(".removeNotification");let iL=document.querySelector(".notification");document.querySelector(".remove-book");let iD=document.querySelector(".modal");iN.addEventListener("click",function(e){e.target.closest(".book-item")&&iU(e.target.dataset.id).then(e=>{let{author:t,title:i,description:n,book_image:r,buy_links:s,list_name:o,_id:a}=e.data;iM={author:t,title:i,description:n,book_image:r,buy_links:s,list_name:o,id:a},//!--------------------
iR.innerHTML="",iR.insertAdjacentHTML("afterbegin",function({author:e,title:t,description:i,book_image:n,buy_links:r}){let s=`<div class="modal__img-container"> 
        <img src="${n}" alt="${t}" class="modal__img"> 
      </div> 
      <div class="modal__desc"> 
        <h2 class="modal__title">${t}</h2> 
        <p class="modal__author">${e}</p> 
        <p class="modal__book-desc">${i}</p>
        <ul class="modal-book-image-list">
        <li>
        <a class="modal-book-shop-amazon" href=${iF(r,"Amazon")} target= _blank><img src="${/*@__PURE__*/A(iC)}" alt="Amazon"></a>
          
        </li>
        <li>
        <a class="modal-book-shop" href=${iF(r,"Apple Books")} target= _blank><img src="${/*@__PURE__*/A(ik)}" alt="Apple-Books"></a>
          

        </li>
        <li>
        <a class="modal-book-shop" href=${iF(r,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/A(iS)}" alt="Book-Shop"></a>
         
       
        </li>
      </ul> 
</div>`;return s}(e.data)),document.body.style.overflow="hidden",iA.classList.remove("is-hidden"),iP.textContent=`${iB(e.data._id)}`,"Remove from the shopping list"===iP.textContent?iL.classList.remove("hidden"):"Add to shopping list"===iP.textContent&&iL.classList.add("hidden")})});let iM={};async function iU(e){let t=`https://books-backend.p.goit.global/books/${e}`,i=await tG.get(t);return i}function iF(e,t){for(let{name:i,url:n}of e)if(i===t)return n}document.addEventListener("DOMContentLoaded",function(){function e(){iR.innerHTML="",document.body.style.overflow="auto",ix.classList.add("is-hidden")}iO.addEventListener("click",e),document.addEventListener("keydown",function(t){"Escape"===t.key&&e()}),ix.addEventListener("click",function(t){t.target===ix&&e()}),iR.addEventListener("click",function(e){e.stopPropagation()})});//!--------------------------------
let ij="bookArr";//!--------------------------------
//! Check if the book has alredy been in LS
//!-------------------------------------------------------
function iB(e){let t=JSON.parse(localStorage.getItem(ij));if(!t)return"Add to shopping list";let i=t.findIndex(t=>t.id===e);return -1===i?"Add to shopping list":"Remove from the shopping list"}//!--------------------------------------------------------
function iq(e){let t=JSON.parse(localStorage.getItem(ij));if(!t)return;let i=t.findIndex(t=>t.id===e);-1!==i?iL.classList.remove("hidden"):iL.classList.add("hidden")}iD.addEventListener("click",function(e){"Add to shopping list"===e.target.textContent?function(e){let t=JSON.parse(localStorage.getItem(ij))??[];if(0===t.length)t.push(e);else if(t.length>0){let i=e.id;JSON.parse(localStorage.getItem(ij));let n=t.findIndex(({id:e})=>e===i);-1===n&&t.push(e)}localStorage.setItem(ij,JSON.stringify(t)),iP.textContent=`${iB(e.id)}`,iq(e.id)}(iM):"Remove from the shopping list"===e.target.textContent&&function({id:e}){let t=JSON.parse(localStorage.getItem(ij));t.find(t=>t.id===e);let i=t.findIndex(t=>t.id===e);t.splice(i,1),localStorage.setItem(ij,JSON.stringify(t)),iP.textContent=`${iB(e)}`,iq(e)}(iM)});/**
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
 */var iz={},iW=iz={};function iH(){throw Error("setTimeout has not been defined")}function i$(){throw Error("clearTimeout has not been defined")}function iV(e){if(sJ===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((sJ===iH||!sJ)&&setTimeout)return sJ=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return sJ(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return sJ.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return sJ.call(this,e,0)}}}!function(){try{sJ="function"==typeof setTimeout?setTimeout:iH}catch(e){sJ=iH}try{sY="function"==typeof clearTimeout?clearTimeout:i$}catch(e){sY=i$}}();var iK=[],iG=!1,iJ=-1;function iY(){iG&&sX&&(iG=!1,sX.length?iK=sX.concat(iK):iJ=-1,iK.length&&iX())}function iX(){if(!iG){var e=iV(iY);iG=!0;for(var t=iK.length;t;){for(sX=iK,iK=[];++iJ<t;)sX&&sX[iJ].run();iJ=-1,t=iK.length}sX=null,iG=!1,function(e){if(sY===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((sY===i$||!sY)&&clearTimeout)return sY=clearTimeout,clearTimeout(e);try{sY(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return sY.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return sY.call(this,e)}}}(e)}}// v8 likes predictible objects
function iQ(e,t){this.fun=e,this.array=t}function iZ(){}iW.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];iK.push(new iQ(e,t)),1!==iK.length||iG||iV(iX)},iQ.prototype.run=function(){this.fun.apply(null,this.array)},iW.title="browser",iW.browser=!0,iW.env={},iW.argv=[],iW.version="",iW.versions={},iW.on=iZ,iW.addListener=iZ,iW.once=iZ,iW.off=iZ,iW.removeListener=iZ,iW.removeAllListeners=iZ,iW.emit=iZ,iW.prependListener=iZ,iW.prependOnceListener=iZ,iW.listeners=function(e){return[]},iW.binding=function(e){throw Error("process.binding is not supported")},iW.cwd=function(){return"/"},iW.chdir=function(e){throw Error("process.chdir is not supported")},iW.umask=function(){return 0};let i0={/**
     * @define {boolean} Whether this is the client Node.js SDK.
     */NODE_CLIENT:!1,/**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */NODE_ADMIN:!1,/**
     * Firebase SDK Version
     */SDK_VERSION:"${JSCORE_VERSION}"},i1=function(e,t){if(!e)throw i2(t)},i2=function(e){return Error("Firebase Database ("+i0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},i4=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},i9=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){// Surrogate Pair
let s=e[i++],o=e[i++],a=e[i++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},i5={/**
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
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,u=(3&r)<<4|o>>4,c=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(c=64)),n.push(i[h],i[u],i[c],i[d])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i4(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):i9(this.decodeStringToByteArray(e,t)))},/**
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
     */decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],s=t<e.length,o=s?i[e.charAt(t)]:0;++t;let a=t<e.length,l=a?i[e.charAt(t)]:64;++t;let h=t<e.length,u=h?i[e.charAt(t)]:64;if(++t,null==r||null==o||null==l||null==u)throw new i6;let c=r<<2|o>>4;if(n.push(c),64!==l){let e=o<<4&240|l>>2;if(n.push(e),64!==u){let e=l<<6&192|u;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class i6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */let i3=function(e){let t=i4(e);return i5.encodeByteArray(t,!0)},i8=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return i3(e).replace(/\./g,"")},i7=function(e){try{return i5.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ne=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==R)return R;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,nt=()=>{if(void 0===iz||void 0===iz.env)return;let e=void 0;if(e)return JSON.parse(e)},ni=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&i7(e[1]);return t&&JSON.parse(t)},nn=()=>{try{return ne()||nt()||ni()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},nr=e=>{var t,i;return null===(i=null===(t=nn())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},ns=e=>{let t=nr(e);if(!t)return;let i=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(i<=0||i+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]},no=()=>{var e;return null===(e=nn())||void 0===e?void 0:e.config},na=e=>{var t;return null===(t=nn())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class nl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
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
 */function nh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */function nu(){return"undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nh())}function nc(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */function nd(){return"object"==typeof navigator&&"ReactNative"===navigator.product}/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */function nf(){return!0===i0.NODE_CLIENT||!0===i0.NODE_ADMIN}/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function np(){try{return"object"==typeof indexedDB}catch(e){return!1}}/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */function ng(){return new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class nm extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */i){super(t),this.code=e,this.customData=i,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,nm.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ny.prototype.create)}}class ny{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(n_,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new nm(n,o,i);return a}}let n_=/\{\$([^}]+)}/g;/**
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
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */function nv(e){return JSON.parse(e)}/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */function nw(e){return JSON.stringify(e)}/**
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
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */let nb=function(e){let t={},i={},n={},r="";try{let s=e.split(".");t=nv(i7(s[0])||""),i=nv(i7(s[1])||""),r=s[2],n=i.d||{},delete i.d}catch(e){}return{header:t,claims:i,data:n,signature:r}},nI=function(e){let t=nb(e),i=t.claims;return!!i&&"object"==typeof i&&i.hasOwnProperty("iat")},nE=function(e){let t=nb(e).claims;return"object"==typeof t&&!0===t.admin};/**
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
 */function nT(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function nC(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function nk(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function nS(e,t,i){let n={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=t.call(i,e[r],r,e));return n}/**
 * Deep equal two objects. Support Arrays and Objects.
 */function nN(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);for(let r of i){if(!n.includes(r))return!1;let i=e[r],s=t[r];if(nR(i)&&nR(s)){if(!nN(i,s))return!1}else if(i!==s)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}function nR(e){return null!==e&&"object"==typeof e}/**
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
 */function nA(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function nx(e){let t={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function nO(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}/**
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
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 *//**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */class nP{constructor(){/**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */this.chain_=[],/**
         * A buffer holding the partially computed hash result.
         * @private
         */this.buf_=[],/**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */this.W_=[],/**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */this.pad_=[],/**
         * @private {number}
         */this.inbuf_=0,/**
         * @private {number}
         */this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}/**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */compress_(e,t){let i,n;t||(t=0);let r=this.W_;// get 16 big endian words
if("string"==typeof e)for(let i=0;i<16;i++)// TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
// have a bug that turns the post-increment ++ operator into pre-increment
// during JIT compilation.  We have code that depends heavily on SHA-1 for
// correctness and which is affected by this bug, so I've removed all uses
// of post-increment ++ in which the result value is used.  We can revert
// this change once the Safari bug
// (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
// most clients have been updated.
r[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)r[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;// expand to 80 words
for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];// TODO(user): Try to unroll this loop to speed up the computation.
for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),n=1518500249):(i=o^a^l,n=1859775393):e<60?(i=o&a|l&(o|a),n=2400959708):(i=o^a^l,n=3395469782);let t=(s<<5|s>>>27)+i+h+n+r[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){// TODO(johnlenz): tighten the function signature and remove this check
if(null==e)return;void 0===t&&(t=e.length);let i=t-this.blockSize,n=0,r=this.buf_,s=this.inbuf_;// The outer while loop should execute at most twice.
for(;n<t;){// When we have no data in the block to top up, we can directly process the
// input buffer (assuming it contains sufficient data). This gives ~25%
// speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
// the data is provided in large chunks (or in multiples of 64 bytes).
if(0===s)for(;n<=i;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(r[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}else for(;n<t;)if(r[s]=e[n],++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}/** @override */digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));// Add # bits.
for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let i=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[i]=this.chain_[t]>>n&255,++i;return e}}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class nL{/**
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
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=nD),void 0===n.error&&(n.error=nD),void 0===n.complete&&(n.complete=nD);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){// nothing
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
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nD(){// do nothing
}/**
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
 */// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */let nM=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);// Is this the lead surrogate in a surrogate pair?
if(r>=55296&&r<=56319){let t=r-55296;// the high 10 bits.
i1(++n<e.length,"Surrogate pair missing trail surrogate.");let i=e.charCodeAt(n)-56320;// the low 10 bits.
r=65536+(t<<10)+i}r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},nU=function(e){let t=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(// Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
t+=4,i++):t+=3}return t};/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */function nF(e,t=1e3,i=2){// Calculates an exponentially increasing value.
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
 */function nj(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class nB{/**
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
 */let nq="[DEFAULT]";/**
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
 */class nz{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new nl;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:nq})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=nq){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=nq){return this.instances.has(e)}getOptions(e=nq){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);i===r&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===nq?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return i||null}normalizeInstanceIdentifier(e=nq){return this.component?this.component.multipleInstances?e:nq:e// assume multiple instances are supported before the component is provided.
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
 */class nW{constructor(e){this.name=e,this.providers=new Map}/**
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
let t=new nz(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */let nH=[];(s$=sQ||(sQ={}))[s$.DEBUG=0]="DEBUG",s$[s$.VERBOSE=1]="VERBOSE",s$[s$.INFO=2]="INFO",s$[s$.WARN=3]="WARN",s$[s$.ERROR=4]="ERROR",s$[s$.SILENT=5]="SILENT";let n$={debug:sQ.DEBUG,verbose:sQ.VERBOSE,info:sQ.INFO,warn:sQ.WARN,error:sQ.ERROR,silent:sQ.SILENT},nV=sQ.INFO,nK={[sQ.DEBUG]:"log",[sQ.VERBOSE]:"log",[sQ.INFO]:"info",[sQ.WARN]:"warn",[sQ.ERROR]:"error"},nG=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=nK[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nJ{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=nV,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=nG,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */nH.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in sQ))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?n$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,sQ.DEBUG,...e),this._logHandler(this,sQ.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,sQ.VERBOSE,...e),this._logHandler(this,sQ.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,sQ.INFO,...e),this._logHandler(this,sQ.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,sQ.WARN,...e),this._logHandler(this,sQ.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,sQ.ERROR,...e),this._logHandler(this,sQ.ERROR,...e)}}let nY=(e,t)=>t.some(t=>e instanceof t),nX=new WeakMap,nQ=new WeakMap,nZ=new WeakMap,n0=new WeakMap,n1=new WeakMap,n2={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return nQ.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||nZ.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return n4(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function n4(i){var n;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(i instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(n4(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&nX.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
n1.set(t,e),t}(i);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(n0.has(i))return n0.get(i);let r="function"==typeof(n=i)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
n.apply(n9(this),e),n4(nX.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return n4(n.apply(n9(this),e))}:function(e,...t){let i=n.call(n9(this),e,...t);return nZ.set(i,e.sort?e.sort():[e]),n4(i)}:(n instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(nQ.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
nQ.set(e,t)}(n),nY(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,n2):n;return r!==i&&(n0.set(i,r),n1.set(r,i)),r}let n9=e=>n1.get(e),n5=["get","getKey","getAll","getAllKeys","count"],n6=["put","add","delete","clear"],n3=new Map;function n8(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(n3.get(t))return n3.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=n6.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||n5.includes(i)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return n3.set(t,s),s}n2={...sj=n2,get:(e,t,i)=>n8(e,t)||sj.get(e,t,i),has:(e,t)=>!!n8(e,t)||sj.has(e,t)};/**
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
 */class n7{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
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
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let re="@firebase/app",rt="0.9.18",ri=new nJ("@firebase/app"),rn="[DEFAULT]",rr={[re]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},rs=new Map,ro=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function ra(e){let t=e.name;if(ro.has(t))return ri.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let i of(ro.set(t,e),rs.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(i){ri.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function rl(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}let rh=new ny("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class ru{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nB("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw rh.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
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
 */let rc="10.3.1";function rd(e,t={}){let i=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:rn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw rh.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(r)});if(i||(i=no()),!i)throw rh.create("no-options"/* AppError.NO_OPTIONS */);let s=rs.get(r);if(s){// return the existing app if options and config deep equal the ones in the existing app.
if(nN(i,s.options)&&nN(n,s.config))return s;throw rh.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:r})}let o=new nW(r);for(let e of ro.values())o.addComponent(e);let a=new ru(i,n,o);return rs.set(r,a),a}/**
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
 */function rf(e=rn){let t=rs.get(e);if(!t&&e===rn&&no())return rd();if(!t)throw rh.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function rp(e,t,i){var n;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let r=null!==(n=rr[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ri.warn(e.join(" "));return}ra(new nB(`${r}-version`,()=>({library:r,version:t}),"VERSION"/* ComponentType.VERSION */))}let rg="firebase-heartbeat-store",rm=null;function ry(){return rm||(rm=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=n4(o);return n&&o.addEventListener("upgradeneeded",e=>{n(n4(o.result),e.oldVersion,e.newVersion,n4(o.transaction),e)}),i&&o.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(rg)}}).catch(e=>{throw rh.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),rm}async function r_(e){try{let t=await ry(),i=await t.transaction(rg).objectStore(rg).get(rw(e));return i}catch(e){if(e instanceof nm)ri.warn(e.message);else{let t=rh.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});ri.warn(t.message)}}}async function rv(e,t){try{let i=await ry(),n=i.transaction(rg,"readwrite"),r=n.objectStore(rg);await r.put(t,rw(e)),await n.done}catch(e){if(e instanceof nm)ri.warn(e.message);else{let t=rh.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});ri.warn(t.message)}}}function rw(e){return`${e.name}!${e.options.appId}`}class rb{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new rE(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=rI();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=rI(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let i=[],n=e.slice();for(let r of e){// Look for an existing entry with the same user agent.
let e=i.find(e=>e.agent===r.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(r.date),rT(i)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
i.push({agent:r.agent,dates:[r.date]}),rT(i)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
i.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=i8(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=i,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n)}}function rI(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class rE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!np()&&ng().then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await r_(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return rv(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return rv(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function rT(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return i8(JSON.stringify({version:2,heartbeats:e})).length}ra(new nB("platform-logger",e=>new n7(e),"PRIVATE"/* ComponentType.PRIVATE */)),ra(new nB("heartbeat",e=>new rb(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
rp(re,rt,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
rp(re,rt,"esm2017"),// Register platform SDK identifier (no version).
rp("fire-js",""),rp("firebase","10.3.1","app");let rC=(e,t)=>t.some(t=>e instanceof t),rk=new WeakMap,rS=new WeakMap,rN=new WeakMap,rR=new WeakMap,rA=new WeakMap,rx={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return rS.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||rN.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return rO(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function rO(e){var t;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(rO(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&rk.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
rA.set(t,e),t}(e);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(rR.has(e))return rR.get(e);let r="function"==typeof(t=e)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
t.apply(rP(this),e),rO(rk.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return rO(t.apply(rP(this),e))}:function(e,...i){let n=t.call(rP(this),e,...i);return rN.set(n,e.sort?e.sort():[e]),rO(n)}:(t instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(rS.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
rS.set(e,t)}(t),rC(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,rx):t;return r!==e&&(rR.set(e,r),rA.set(r,e)),r}let rP=e=>rA.get(e),rL=["get","getKey","getAll","getAllKeys","count"],rD=["put","add","delete","clear"],rM=new Map;function rU(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(rM.get(t))return rM.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=rD.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||rL.includes(i)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return rM.set(t,s),s}rx={...sB=rx,get:(e,t,i)=>rU(e,t)||sB.get(e,t,i),has:(e,t)=>!!rU(e,t)||sB.has(e,t)};let rF="@firebase/installations",rj="0.6.4",rB=`w:${rj}`,rq="FIS_v2",rz=new ny("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});/** Returns true if error is a FirebaseError that is based on an error from the server. */function rW(e){return e instanceof nm&&e.code.includes("request-failed"/* ErrorCode.REQUEST_FAILED */)}/**
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
 */function rH({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function r$(e){return{token:e.token,requestStatus:2/* RequestStatus.COMPLETED */,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function rV(e,t){let i=await t.json(),n=i.error;return rz.create("request-failed"/* ErrorCode.REQUEST_FAILED */,{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function rK({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */async function rG(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function rJ({appConfig:e,heartbeatServiceProvider:t},{fid:i}){let n=rH(e),r=rK(e),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let o={fid:i,authVersion:rq,appId:e.appId,sdkVersion:rB},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await rG(()=>fetch(n,a));if(l.ok){let e=await l.json(),t={fid:e.fid||i,registrationStatus:2/* RequestStatus.COMPLETED */,refreshToken:e.refreshToken,authToken:r$(e.authToken)};return t}throw await rV("Create Installation",l)}/**
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
 *//** Returns a promise that resolves after given time passes. */function rY(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */let rX=/^[cdef][\w-]{21}$/;/**
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
 *//** Returns a string key that can be used to identify the app. */function rQ(e){return`${e.appName}!${e.appId}`}/**
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
 */let rZ=new Map;/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */function r0(e,t){let i=rQ(e);r1(i,t),function(e,t){let i=(!r2&&"BroadcastChannel"in self&&((r2=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{r1(e.data.key,e.data.fid)}),r2);i&&i.postMessage({key:e,fid:t}),0===rZ.size&&r2&&(r2.close(),r2=null)}(i,t)}function r1(e,t){let i=rZ.get(e);if(i)for(let e of i)e(t)}let r2=null,r4="firebase-installations-store",r9=null;function r5(){return r9||(r9=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=rO(o);return n&&o.addEventListener("upgradeneeded",e=>{n(rO(o.result),e.oldVersion,e.newVersion,rO(o.transaction))}),i&&o.addEventListener("blocked",()=>i()),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}("firebase-installations-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(r4)}})),r9}/** Assigns or overwrites the record for the given key with the given value. */async function r6(e,t){let i=rQ(e),n=await r5(),r=n.transaction(r4,"readwrite"),s=r.objectStore(r4),o=await s.get(i);return await s.put(t,i),await r.done,o&&o.fid===t.fid||r0(e,t.fid),t}/** Removes record(s) from the objectStore that match the given key. */async function r3(e){let t=rQ(e),i=await r5(),n=i.transaction(r4,"readwrite");await n.objectStore(r4).delete(t),await n.done}/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */async function r8(e,t){let i=rQ(e),n=await r5(),r=n.transaction(r4,"readwrite"),s=r.objectStore(r4),o=await s.get(i),a=t(o);return void 0===a?await s.delete(i):await s.put(a,i),await r.done,a&&(!o||o.fid!==a.fid)&&r0(e,a.fid),a}/**
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
 */async function r7(e){let t;let i=await r8(e.appConfig,i=>{let n=/**
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
return t.substr(0,22)}(e);return rX.test(i)?i:""}catch(e){// FID generation errored
return""}}(),registrationStatus:0/* RequestStatus.NOT_STARTED */};return sn(t)}(i),r=/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */function(e,t){if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){if(!navigator.onLine){// Registration required but app is offline.
let e=Promise.reject(rz.create("app-offline"/* ErrorCode.APP_OFFLINE */));return{installationEntry:t,registrationPromise:e}}// Try registering. Change status to IN_PROGRESS.
let i={fid:t.fid,registrationStatus:1/* RequestStatus.IN_PROGRESS */,registrationTime:Date.now()},n=se(e,i);return{installationEntry:i,registrationPromise:n}}return 1/* RequestStatus.IN_PROGRESS */===t.registrationStatus?{installationEntry:t,registrationPromise:st(e)}:{installationEntry:t}}(e,n);return t=r.registrationPromise,r.installationEntry});return""===i.fid?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}/** This will be executed only once for each new Firebase Installation. */async function se(e,t){try{let i=await rJ(e,t);return r6(e.appConfig,i)}catch(i){throw rW(i)&&409===i.customData.serverCode?// Generate a new ID next time.
await r3(e.appConfig):await r6(e.appConfig,{fid:t.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}),i}}/** Call if FID registration is pending in another request. */async function st(e){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let t=await si(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===t.registrationStatus;)// createInstallation request still in progress.
await rY(100),t=await si(e.appConfig);if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){// The request timed out or failed in a different call. Try again.
let{installationEntry:t,registrationPromise:i}=await r7(e);return i||t}return t}/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */function si(e){return r8(e,e=>{if(!e)throw rz.create("installation-not-found"/* ErrorCode.INSTALLATION_NOT_FOUND */);return sn(e)})}function sn(e){return 1/* RequestStatus.IN_PROGRESS */===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}:e}/**
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
 */async function sr({appConfig:e,heartbeatServiceProvider:t},i){let n=function(e,{fid:t}){return`${rH(e)}/${t}/authTokens:generate`}(e,i),r=function(e,{refreshToken:t}){let i=rK(e);return i.append("Authorization",`${rq} ${t}`),i}(e,i),s=t.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let o={installation:{sdkVersion:rB,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await rG(()=>fetch(n,a));if(l.ok){let e=await l.json(),t=r$(e);return t}throw await rV("Generate Auth Token",l)}/**
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
 */async function ss(e,t=!1){let i;let n=await r8(e.appConfig,n=>{var r;if(!sh(n))throw rz.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let s=n.authToken;if(!t&&2/* RequestStatus.COMPLETED */===(r=s).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(r))return n;if(1/* RequestStatus.IN_PROGRESS */===s.requestStatus)return(// There already is a token request in progress.
i=so(e,t),n);{// No token or token expired.
if(!navigator.onLine)throw rz.create("app-offline"/* ErrorCode.APP_OFFLINE */);let t=/** Returns an updated InstallationEntry with an InProgressAuthToken. */function(e){let t={requestStatus:1/* RequestStatus.IN_PROGRESS */,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return i=sl(e,t),t}}),r=i?await i:n.authToken;return r}/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */async function so(e,t){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let i=await sa(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===i.authToken.requestStatus;)// generateAuthToken still in progress.
await rY(100),i=await sa(e.appConfig);let n=i.authToken;return 0/* RequestStatus.NOT_STARTED */===n.requestStatus?ss(e,t):n}/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */function sa(e){return r8(e,e=>{if(!sh(e))throw rz.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let t=e.authToken;return 1/* RequestStatus.IN_PROGRESS */===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}}):e})}async function sl(e,t){try{let i=await sr(e,t),n=Object.assign(Object.assign({},t),{authToken:i});return await r6(e.appConfig,n),i}catch(i){if(rW(i)&&(401===i.customData.serverCode||404===i.customData.serverCode))// Generate a new ID next time.
await r3(e.appConfig);else{let i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}});await r6(e.appConfig,i)}throw i}}function sh(e){return void 0!==e&&2/* RequestStatus.COMPLETED */===e.registrationStatus}/**
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
 */async function su(e){let{installationEntry:t,registrationPromise:i}=await r7(e);return i?i.catch(console.error):// token if needed.
ss(e).catch(console.error),t.fid}/**
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
 */async function sc(e,t=!1){await sd(e);// At this point we either have a Registered Installation in the DB, or we've
// already thrown an error.
let i=await ss(e,t);return i.token}async function sd(e){let{registrationPromise:t}=await r7(e);t&&await t}function sf(e){return rz.create("missing-app-config-values"/* ErrorCode.MISSING_APP_CONFIG_VALUES */,{valueName:e})}/**
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
 */let sp="installations";ra(new nB(sp,e=>{let t=e.getProvider("app").getImmediate(),i=/**
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
 */function(e){if(!e||!e.options)throw sf("App Configuration");if(!e.name)throw sf("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw sf(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=rl(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC"/* ComponentType.PUBLIC */)),ra(new nB("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),i=rl(t,sp).getImmediate();return{getId:()=>su(i),getToken:e=>sc(i,e)}},"PRIVATE"/* ComponentType.PRIVATE */)),rp(rF,rj),rp(rF,rj,"esm2017");/**
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
 */let sg="analytics",sm="https://www.googletagmanager.com/gtag/js",sy=new nJ("@firebase/analytics"),s_=new ny("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
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
 */function sv(e){if(!e.startsWith(sm)){let t=s_.create("invalid-gtag-resource"/* AnalyticsError.INVALID_GTAG_RESOURCE */,{gtagURL:e});return sy.warn(t.message),""}return e}/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */function sw(e){return Promise.all(e.map(e=>e.catch(e=>e)))}/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */async function sb(e,t,i,n,r,s){// If config is already fetched, we know the appId and can use it to look up what FID promise we
/// are waiting for, and wait only on that one.
let o=n[r];try{if(o)await t[o];else{// If config is not fetched yet, wait for all configs (we don't know which one we need) and
// find the appId (if any) corresponding to this measurementId. If there is one, wait on
// that appId's initialization promise. If there is none, promise resolves and gtag
// call goes through.
let e=await sw(i),n=e.find(e=>e.measurementId===r);n&&await t[n.appId]}}catch(e){sy.error(e)}e("config"/* GtagCommand.CONFIG */,r,s)}/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */async function sI(e,t,i,n,r){try{let s=[];// If there's a 'send_to' param, check if any ID specified matches
// an initializeIds() promise we are waiting for.
if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);// Checking 'send_to' fields requires having all measurement ID results back from
// the dynamic config fetch.
let n=await sw(i);for(let i of e){// Any fetched dynamic measurement ID that matches this 'send_to' ID
let e=n.find(e=>e.measurementId===i),r=e&&t[e.appId];if(r)s.push(r);else{// Found an item in 'send_to' that is not associated
// directly with an FID, possibly a group.  Empty this array,
// exit the loop early, and let it get populated below.
s=[];break}}}0===s.length&&(s=Object.values(t)),// Run core gtag function with args after all relevant initialization
// promises have been resolved.
await Promise.all(s),// Workaround for http://b/141370449 - third argument cannot be undefined.
e("event"/* GtagCommand.EVENT */,n,r||{})}catch(e){sy.error(e)}}let sE=new /**
 * Stubbable retry data storage class.
 */class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */async function sT(e){var t;let{appId:i,apiKey:n}=e,r={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":n})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",i),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{// Try to get any error message text from server response.
let i=await o.json();(null===(t=i.error)||void 0===t?void 0:t.message)&&(e=i.error.message)}catch(e){}throw s_.create("config-fetch-failed"/* AnalyticsError.CONFIG_FETCH_FAILED */,{httpStatus:o.status,responseMessage:e})}return o.json()}/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */async function sC(e,t=sE,i){let{appId:n,apiKey:r,measurementId:s}=e.options;if(!n)throw s_.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!r){if(s)return{measurementId:s,appId:n};throw s_.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}let o=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sS;return setTimeout(async()=>{// Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
a.abort()},void 0!==i?i:6e4),sk({appId:n,apiKey:r,measurementId:s},o,a,t)}/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */async function sk(e,{throttleEndTimeMillis:t,backoffCount:i},n,r=sE// for testing
){var s;let{appId:o,measurementId:a}=e;// Starts with a (potentially zero) timeout to support resumption from stored state.
// Ensures the throttle end time is honored if the last attempt timed out.
// Note the SDK will never make a request if the fetch timeout expires at this point.
try{await new Promise((e,i)=>{// Derives backoff from given end time, normalizing negative numbers to zero.
let r=Math.max(t-Date.now(),0),s=setTimeout(e,r);// Adds listener, rather than sets onabort, because signal is a shared object.
n.addEventListener(()=>{clearTimeout(s),// If the request completes before this timeout, the rejection has no effect.
i(s_.create("fetch-throttle"/* AnalyticsError.FETCH_THROTTLE */,{throttleEndTimeMillis:t}))})})}catch(e){if(a)return sy.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{let t=await sT(e);return(// Note the SDK only clears throttle state if response is success or non-retriable.
r.deleteThrottleMetadata(o),t)}catch(h){if(!/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */function(e){if(!(e instanceof nm)||!e.customData)return!1;// Uses string index defined by ErrorData, which FirebaseError implements.
let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(h)){if(r.deleteThrottleMetadata(o),a)return sy.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:o,measurementId:a};throw h}let t=503===Number(null===(s=null==h?void 0:h.customData)||void 0===s?void 0:s.httpStatus)?nF(i,r.intervalMillis,30):nF(i,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:i+1};return(// Persists state.
r.setThrottleMetadata(o,l),sy.debug(`Calling attemptFetch again in ${t} millis`),sk(e,l,n,r))}}/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */class sS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */async function sN(e,t,i,n,r){if(r&&r.global){e("event"/* GtagCommand.EVENT */,i,n);return}{let r=await t,s=Object.assign(Object.assign({},n),{send_to:r});e("event"/* GtagCommand.EVENT */,i,s)}}/**
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
 */async function sR(){if(!np())return sy.warn(s_.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ng()}catch(e){return sy.warn(s_.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}/**
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
 */async function sA(e,t,i,n,o,a,l){var h;let u=sC(e);// Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
u.then(t=>{i[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&sy.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>sy.error(e)),// Add to list to track state of all dynamic config promises.
t.push(u);let c=sR().then(e=>e?n.getId():void 0),[d,f]=await Promise.all([u,c]);!/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */function(e){let t=window.document.getElementsByTagName("script");for(let i of Object.values(t))if(i.src&&i.src.includes(sm)&&i.src.includes(e))return i;return null}(a)&&/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */function(e,t){let i;let n=(window.trustedTypes&&(i=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:sv})),i),r=document.createElement("script"),s=`${sm}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}(a,d.measurementId),s&&(o("consent"/* GtagCommand.CONSENT */,"default",s),s=void 0),// This command initializes gtag.js and only needs to be called once for the entire web app,
// but since it is idempotent, we can call it multiple times.
// We keep it together with other initialization logic for better code structure.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o("js",new Date);// User config added first. We don't want users to accidentally overwrite
// base Firebase config properties.
let p=null!==(h=null==l?void 0:l.config)&&void 0!==h?h:{};return(// guard against developers accidentally setting properties with prefix `firebase_`
p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),// It should be the first config command called on this GA-ID
// Initialize this GA-ID and set FID on it using the gtag config API.
// Note: This will trigger a page_view event unless 'send_page_view' is set to false in
// `configProperties`.
o("config"/* GtagCommand.CONFIG */,d.measurementId,p),r&&(o("set"/* GtagCommand.SET */,r),r=void 0),d.measurementId)}/**
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
 */class sx{constructor(e){this.app=e}_delete(){return delete sO[this.app.options.appId],Promise.resolve()}}/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */let sO={},sP=[],sL={},sD="dataLayer",sM=!1,sU="@firebase/analytics",sF="0.10.0";ra(new nB(sg,(e,{options:t})=>{// getImmediate for FirebaseApp will always succeed
let i=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return(/**
 * Analytics instance factory.
 * @internal
 */function(e,t,i){!/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */function(){let e=[];if(nc()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),i=s_.create("invalid-analytics-context"/* AnalyticsError.INVALID_ANALYTICS_CONTEXT */,{errorInfo:t});sy.warn(i.message)}}();let n=e.options.appId;if(!n)throw s_.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!e.options.apiKey){if(e.options.measurementId)sy.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw s_.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}if(null!=sO[n])throw s_.create("already-exists"/* AnalyticsError.ALREADY_EXISTS */,{id:n});if(!sM){var r,s;let e,t;e=[],Array.isArray(window[sD])?e=window[sD]:window[sD]=e;let{wrappedGtag:i,gtagCore:n}=(r="gtag",t=function(...e){// Must push IArguments object, not an array.
window[sD].push(arguments)},window[r]&&"function"==typeof window[r]&&(t=window[r]),window[r]=(s=t,/**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */async function(e,...t){try{// If event, check that relevant initialization promises have completed.
if("event"/* GtagCommand.EVENT */===e){let[e,i]=t;// If EVENT, second arg must be measurementId.
await sI(s,sO,sP,e,i)}else if("config"/* GtagCommand.CONFIG */===e){let[e,i]=t;// If CONFIG, second arg must be measurementId.
await sb(s,sO,sP,sL,e,i)}else if("consent"/* GtagCommand.CONSENT */===e){let[e]=t;s("consent"/* GtagCommand.CONSENT */,"update",e)}else if("get"/* GtagCommand.GET */===e){let[e,i,n]=t;s("get"/* GtagCommand.GET */,e,i,n)}else if("set"/* GtagCommand.SET */===e){let[e]=t;// If SET, second arg must be params.
s("set"/* GtagCommand.SET */,e)}else s(e,...t)}catch(e){sy.error(e)}}),{gtagCore:t,wrappedGtag:window[r]});a=i,o=n,sM=!0}// Async but non-blocking.
// This map reflects the completion state of all promises for each appId.
sO[n]=sA(e,sP,sL,t,o,sD,i);let l=new sx(e);return l}(i,n,t))},"PUBLIC"/* ComponentType.PUBLIC */)),ra(new nB("analytics-internal",function(e){try{let t=e.getProvider(sg).getImmediate();return{logEvent:(e,i,n)=>{var r;return r=t,void(r=nj(r),sN(a,sO[r.app.options.appId],e,i,n).catch(e=>sy.error(e)))}}}catch(e){throw s_.create("interop-component-reg-failed"/* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */,{reason:e})}},"PRIVATE"/* ComponentType.PRIVATE */)),rp(sU,sF),rp(sU,sF,"esm2017"),P("6JpON");var sj,sB,sq,sz,sW,sH,s$,sV,sK,sG,sJ,sY,sX,sQ,sZ,s0="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==R?R:"undefined"!=typeof self?self:{},s1={},s2=s2||{},s4=s0||self;function s9(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function s5(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function s6(e,t,i){return e.call.apply(e.bind,arguments)}function s3(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function s8(e,t,i){return(s8=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?s6:s3).apply(null,arguments)}function s7(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function oe(e,t){function i(){}i.prototype=t.prototype,e.$=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.ac=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function ot(){this.s=this.s,this.o=this.o}ot.prototype.s=!1,ot.prototype.sa=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let oi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function on(e){let t=e.length;if(0<t){let i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function or(e,t){for(let t=1;t<arguments.length;t++){let i=arguments[t];if(s9(i)){let t=e.length||0,n=i.length||0;e.length=t+n;for(let r=0;r<n;r++)e[t+r]=i[r]}else e.push(i)}}function os(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}os.prototype.h=function(){this.defaultPrevented=!0};var oo=function(){if(!s4.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{s4.addEventListener("test",()=>{},t),s4.removeEventListener("test",()=>{},t)}catch(e){}return e}();function oa(e){return/^[\s\xa0]*$/.test(e)}function ol(){var e=s4.navigator;return e&&(e=e.userAgent)?e:""}function oh(e){return -1!=ol().indexOf(e)}function ou(e){return ou[" "](e),e}ou[" "]=function(){};var oc=oh("Opera"),od=oh("Trident")||oh("MSIE"),of=oh("Edge"),op=of||od,og=oh("Gecko")&&!(-1!=ol().toLowerCase().indexOf("webkit")&&!oh("Edge"))&&!(oh("Trident")||oh("MSIE"))&&!oh("Edge"),om=-1!=ol().toLowerCase().indexOf("webkit")&&!oh("Edge");function oy(){var e=s4.document;return e?e.documentMode:void 0}e:{var o_,ov="",ow=(o_=ol(),og?/rv:([^\);]+)(\)|;)/.exec(o_):of?/Edge\/([\d\.]+)/.exec(o_):od?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(o_):om?/WebKit\/(\S+)/.exec(o_):oc?/(?:Version)[ \/]?(\S+)/.exec(o_):void 0);if(ow&&(ov=ow?ow[1]:""),od){var ob=oy();if(null!=ob&&ob>parseFloat(ov)){E=String(ob);break e}}E=ov}var oI=s4.document&&od&&(oy()||parseInt(E,10))||void 0;function oE(e,t){if(os.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(og){e:{try{ou(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:oT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&oE.$.h.call(this)}}oe(oE,os);var oT={2:"touch",3:"pen",4:"mouse"};oE.prototype.h=function(){oE.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oC="closure_listenable_"+(1e6*Math.random()|0),ok=0;function oS(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.la=r,this.key=++ok,this.fa=this.ia=!1}function oN(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function oR(e,t,i){for(let n in e)t.call(i,e[n],n,e)}function oA(e){let t={};for(let i in e)t[i]=e[i];return t}let ox="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oO(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<ox.length;t++)i=ox[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function oP(e){this.src=e,this.g={},this.h=0}function oL(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=oi(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(oN(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function oD(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!i==s.capture&&s.la==n)return r}return -1}oP.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=oD(e,t,n,r);return -1<o?(t=e[o],i||(t.ia=!1)):((t=new oS(t,this.src,s,!!n,r)).ia=i,e.push(t)),t};var oM="closure_lm_"+(1e6*Math.random()|0),oU={};function oF(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var o=s5(r)?!!r.capture:!!r,a=oz(e);if(a||(e[oM]=a=new oP(e)),(i=a.add(t,i,n,o,s)).proxy)return i;if(n=function e(t){return oq.call(e.src,e.listener,t)},i.proxy=n,n.src=e,n.listener=i,e.addEventListener)oo||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(oB(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return i}function oj(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[oC])oL(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(oB(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=oz(t))?(oL(i,e),0==i.h&&(i.src=null,t[oM]=null)):oN(e)}}}function oB(e){return e in oU?oU[e]:oU[e]="on"+e}function oq(e,t){if(e.fa)e=!0;else{t=new oE(t,this);var i=e.listener,n=e.la||e.src;e.ia&&oj(e),e=i.call(n,t)}return e}function oz(e){return(e=e[oM])instanceof oP?e:null}var oW="__closure_events_fn_"+(1e9*Math.random()>>>0);function oH(e){return"function"==typeof e?e:(e[oW]||(e[oW]=function(t){return e.handleEvent(t)}),e[oW])}function o$(){ot.call(this),this.i=new oP(this),this.S=this,this.J=null}function oV(e,t){var i,n=e.J;if(n)for(i=[];n;n=n.J)i.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new os(t,e);else if(t instanceof os)t.target=t.target||e;else{var r=t;oO(t=new os(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=t.g=i[s];r=oK(o,n,!0,t)&&r}if(r=oK(o=t.g=e,n,!0,t)&&r,r=oK(o,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=oK(o=t.g=i[s],n,!1,t)&&r}function oK(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==i){var a=o.listener,l=o.la||o.src;o.ia&&oL(e.i,o),r=!1!==a.call(l,n)&&r}}return r&&!n.defaultPrevented}oe(o$,ot),o$.prototype[oC]=!0,o$.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,s){if(Array.isArray(i))for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);else(r=s5(r)?!!r.capture:!!r,n=oH(n),t&&t[oC])?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=oD(o=t.g[i],n,r,s))&&(oN(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[i],t.h--))):t&&(t=oz(t))&&(i=t.g[i.toString()],t=-1,i&&(t=oD(i,n,r,s)),(n=-1<t?i[t]:null)&&oj(n))}(this,e,t,i,n)},o$.prototype.N=function(){if(o$.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)oN(i[n]);delete t.g[e],t.h--}}this.J=null},o$.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},o$.prototype.P=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var oG=s4.JSON.stringify,oJ=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new oY,e=>e.reset());class oY{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let oX,oQ=!1,oZ=new class{constructor(){this.h=this.g=null}add(e,t){let i=oJ.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}},o0=()=>{let e=s4.Promise.resolve(void 0);oX=()=>{e.then(o1)}};var o1=()=>{let e;for(var t;e=null,oZ.g&&(e=oZ.g,oZ.g=oZ.g.next,oZ.g||(oZ.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){s4.setTimeout(()=>{throw e},0)}(e)}oJ.j(t),100>oJ.h&&(oJ.h++,t.next=oJ.g,oJ.g=t)}oQ=!1};function o2(e,t){o$.call(this),this.h=e||1,this.g=t||s4,this.j=s8(this.qb,this),this.l=Date.now()}function o4(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function o9(e,t,i){if("function"==typeof e)i&&(e=s8(e,i));else if(e&&"function"==typeof e.handleEvent)e=s8(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:s4.setTimeout(e,t||0)}oe(o2,o$),(sZ=o2.prototype).ga=!1,sZ.T=null,sZ.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),oV(this,"tick"),this.ga&&(o4(this),this.start()))}},sZ.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},sZ.N=function(){o2.$.N.call(this),o4(this),delete this.g};class o5 extends ot{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=o9(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}N(){super.N(),this.g&&(s4.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function o6(e){ot.call(this),this.h=e,this.g={}}oe(o6,ot);var o3=[];function o8(e,t,i,n){Array.isArray(i)||(i&&(o3[0]=i.toString()),i=o3);for(var r=0;r<i.length;r++){var s=function e(t,i,n,r,s){if(r&&r.once)return function e(t,i,n,r,s){if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=oH(n),t&&t[oC]?t.P(i,n,s5(r)?!!r.capture:!!r,s):oF(t,i,n,!0,r,s)}(t,i,n,r,s);if(Array.isArray(i)){for(var o=0;o<i.length;o++)e(t,i[o],n,r,s);return null}return n=oH(n),t&&t[oC]?t.O(i,n,s5(r)?!!r.capture:!!r,s):oF(t,i,n,!1,r,s)}(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function o7(e){oR(e.g,function(e,t){this.g.hasOwnProperty(t)&&oj(e)},e),e.g={}}function ae(){this.g=!0}function at(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}}return oG(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}o6.prototype.N=function(){o6.$.N.call(this),o7(this)},o6.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ae.prototype.Ea=function(){this.g=!1},ae.prototype.info=function(){};var ai={},an=null;function ar(){return an=an||new o$}function as(e){os.call(this,ai.Ta,e)}function ao(e){let t=ar();oV(t,new as(t))}function aa(e,t){os.call(this,ai.STAT_EVENT,e),this.stat=t}function al(e){let t=ar();oV(t,new aa(t,e))}function ah(e,t){os.call(this,ai.Ua,e),this.size=t}function au(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s4.setTimeout(function(){e()},t)}ai.Ta="serverreachability",oe(as,os),ai.STAT_EVENT="statevent",oe(aa,os),ai.Ua="timingevent",oe(ah,os);var ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ad={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function af(){}function ap(e){return e.h||(e.h=e.i())}function ag(){}af.prototype.h=null;var am={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ay(){os.call(this,"d")}function a_(){os.call(this,"c")}function av(){}function aw(e,t,i,n){this.l=e,this.j=t,this.m=i,this.W=n||1,this.U=new o6(this),this.P=aI,e=op?125:void 0,this.V=new o2(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ab}function ab(){this.i=null,this.g="",this.h=!1}oe(ay,os),oe(a_,os),oe(av,af),av.prototype.g=function(){return new XMLHttpRequest},av.prototype.i=function(){return{}},C=new av;var aI=45e3,aE={},aT={};function aC(e,t,i){e.L=1,e.v=aW(aF(t)),e.s=i,e.S=!0,ak(e,null)}function ak(e,t){e.G=Date.now(),aR(e),e.A=aF(e.v);var i=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),a2(i.i,"t",n),e.C=0,i=e.l.J,e.h=new ab,e.g=l$(e.l,i?t:null,!e.s),0<e.O&&(e.M=new o5(s8(e.Pa,e,e.g),e.O)),o8(e.U,e.g,"readystatechange",e.nb),t=e.I?oA(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ao(),function(e,t,i,n,r,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+o})}(e.j,e.u,e.A,e.m,e.W,e.s)}function aS(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function aN(e,t,i){let n=!0,r;for(;!e.J&&e.C<i.length;)if((r=function(e,t){var i=e.C,n=t.indexOf("\n",i);return -1==n?aT:isNaN(i=Number(t.substring(i,n)))?aE:(n+=1)+i>t.length?aT:(t=t.slice(n,n+i),e.C=n+i,t)}(e,i))==aT){4==t&&(e.o=4,al(14),n=!1),at(e.j,e.m,null,"[Incomplete Response]");break}else if(r==aE){e.o=4,al(15),at(e.j,e.m,i,"[Invalid Chunk]"),n=!1;break}else at(e.j,e.m,r,null),aL(e,r);aS(e)&&r!=aT&&r!=aE&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,al(16),n=!1),e.i=e.i&&n,n?0<i.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),lU(t),t.M=!0,al(11))):(at(e.j,e.m,i,"[Invalid Chunked Response]"),aP(e),aO(e))}function aR(e){e.Y=Date.now()+e.P,aA(e,e.P)}function aA(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=au(s8(e.lb,e),t)}function ax(e){e.B&&(s4.clearTimeout(e.B),e.B=null)}function aO(e){0==e.l.H||e.J||lB(e.l,e)}function aP(e){ax(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,o4(e.V),o7(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function aL(e,t){try{var i=e.l;if(0!=i.H&&(i.g==e||a7(i.i,e))){if(!e.K&&a7(i.i,e)&&3==i.H){try{var n=i.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(i.g.G+3e3<e.G)lj(i),lR(i);else break e}lM(i),al(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=au(s8(i.ib,i),6e3));if(1>=a8(i.i)&&i.oa){try{i.oa()}catch(e){}i.oa=void 0}}else lz(i,11)}else if((e.K||i.g==e)&&lj(i),!oa(t))for(r=i.Ja.g.parse(t),t=0;t<r.length;t++){let a=r[t];if(i.V=a[0],a=a[1],2==i.H){if("c"==a[0]){i.K=a[1],i.pa=a[2];let t=a[3];null!=t&&(i.ra=t,i.l.info("VER="+i.ra));let r=a[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(le(s,s.h),s.h=null))}if(n.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,az(n.I,n.F,e))}}if(i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-e.G,i.l.info("Handshake RTT: "+i.S+"ms")),(n=i).wa=lH(n,n.J?n.pa:null,n.Y),e.K){lt(n.i,e);var o=n.L;o&&e.setTimeout(o),e.B&&(ax(e),aR(e)),n.g=e}else lD(n);0<i.j.length&&lx(i)}else"stop"!=a[0]&&"close"!=a[0]||lz(i,7)}else 3==i.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?lz(i,7):lN(i):"noop"!=a[0]&&i.h&&i.h.Aa(a),i.A=0)}}ao(4)}catch(e){}}function aD(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s9(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s9(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let n in t=[],i=0,e)t[i++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s9(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length,s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}(sZ=aw.prototype).setTimeout=function(e){this.P=e},sZ.nb=function(e){e=e.target;let t=this.M;t&&3==lI(e)?t.l():this.Pa(e)},sZ.Pa=function(e){try{if(e==this.g)e:{let u=lI(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||op||this.g&&(this.h.h||this.g.ja()||lE(this.g)))){this.J||4!=u||7==t||(8==t||0>=c?ao(3):ao(2)),ax(this);var i=this.g.da();this.ca=i;t:if(aS(this)){var n=lE(this.g);e="";var r=n.length,s=4==lI(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){aP(this),aO(this);var o="";break t}this.h.i=new s4.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==i,function(e,t,i,n,r,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.W,u,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oa(a)){var h=a;break t}}h=null}if(i=h)at(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aL(this,i);else{this.i=!1,this.o=3,al(12),aP(this),aO(this);break e}}this.S?(aN(this,u,o),op&&this.i&&3==u&&(o8(this.U,this.V,"tick",this.mb),this.V.start())):(at(this.j,this.m,o,null),aL(this,o)),4==u&&aP(this),this.i&&!this.J&&(4==u?lB(this.l,this):(this.i=!1,aR(this)))}else(function(e){let t={};e=(e.g&&2<=lI(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(oa(e[n]))continue;var i=function(e){var t=1;e=e.split(":");let i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}(e[n]);let r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();let s=t[r]||[];t[r]=s,s.push(i)}!function(e,t){for(let i in e)t.call(void 0,e[i],i,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<o.indexOf("Unknown SID")?(this.o=3,al(12)):(this.o=0,al(13)),aP(this),aO(this)}}}catch(e){}finally{}},sZ.mb=function(){if(this.g){var e=lI(this.g),t=this.g.ja();this.C<t.length&&(ax(this),aN(this,e,t),this.i&&4!=e&&aR(this))}},sZ.cancel=function(){this.J=!0,aP(this)},sZ.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(ao(),al(17)),aP(this),this.o=2,aO(this)):aA(this,this.Y-e)};var aM=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aU(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof aU){this.h=e.h,aj(this,e.j),this.s=e.s,this.g=e.g,aB(this,e.m),this.l=e.l;var t=e.i,i=new aQ;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),aq(this,i),this.o=e.o}else e&&(t=String(e).match(aM))?(this.h=!1,aj(this,t[1]||"",!0),this.s=aH(t[2]||""),this.g=aH(t[3]||"",!0),aB(this,t[4]),this.l=aH(t[5]||"",!0),aq(this,t[6]||"",!0),this.o=aH(t[7]||"")):(this.h=!1,this.i=new aQ(null,this.h))}function aF(e){return new aU(e)}function aj(e,t,i){e.j=i?aH(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function aB(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function aq(e,t,i){var n,r;t instanceof aQ?(e.i=t,n=e.i,(r=e.h)&&!n.j&&(aZ(n),n.i=null,n.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(a0(this,t),a2(this,i,e))},n)),n.j=r):(i||(t=a$(t,aY)),e.i=new aQ(t,e.h))}function az(e,t,i){e.i.set(t,i)}function aW(e){return az(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function aH(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function a$(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,aV),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function aV(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}aU.prototype.toString=function(){var e=[],t=this.j;t&&e.push(a$(t,aK,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(a$(t,aK,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(a$(i,"/"==i.charAt(0)?aJ:aG,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",a$(i,aX)),e.join("")};var aK=/[#\/\?@]/g,aG=/[#\?:]/g,aJ=/[#\?]/g,aY=/[#\?@]/g,aX=/#/g;function aQ(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function aZ(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function a0(e,t){aZ(e),t=a4(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function a1(e,t){return aZ(e),t=a4(e,t),e.g.has(t)}function a2(e,t,i){a0(e,t),0<i.length&&(e.i=null,e.g.set(a4(e,t),on(i)),e.h+=i.length)}function a4(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(sZ=aQ.prototype).add=function(e,t){aZ(this),this.i=null,e=a4(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},sZ.forEach=function(e,t){aZ(this),this.g.forEach(function(i,n){i.forEach(function(i){e.call(t,i,n,this)},this)},this)},sZ.ta=function(){aZ(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let n=0;n<t.length;n++){let r=e[n];for(let e=0;e<r.length;e++)i.push(t[n])}return i},sZ.Z=function(e){aZ(this);let t=[];if("string"==typeof e)a1(this,e)&&(t=t.concat(this.g.get(a4(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},sZ.set=function(e,t){return aZ(this),this.i=null,a1(this,e=a4(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},sZ.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},sZ.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var n=t[i];let s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var r=s;""!==o[n]&&(r+="="+encodeURIComponent(String(o[n]))),e.push(r)}}return this.i=e.join("&")};var a9=class{constructor(e,t){this.g=e,this.map=t}};function a5(e){this.l=e||a6,e=s4.PerformanceNavigationTiming?0<(e=s4.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(s4.g&&s4.g.Ka&&s4.g.Ka()&&s4.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var a6=10;function a3(e){return!!e.h||!!e.g&&e.g.size>=e.j}function a8(e){return e.h?1:e.g?e.g.size:0}function a7(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function le(e,t){e.g?e.g.add(t):e.h=t}function lt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function li(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.F);return t}return on(e.i)}a5.prototype.cancel=function(){if(this.i=li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var ln=class{stringify(e){return s4.JSON.stringify(e,void 0)}parse(e){return s4.JSON.parse(e,void 0)}};function lr(){this.g=new ln}function ls(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function lo(e){this.l=e.fc||null,this.j=e.ob||!1}function la(e,t){o$.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ll,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(lo,af),lo.prototype.g=function(){return new la(this.l,this.j)},lo.prototype.i=(w={},function(){return w}),oe(la,o$);var ll=0;function lh(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function lu(e){e.readyState=4,e.l=null,e.j=null,e.A=null,lc(e)}function lc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(sZ=la.prototype).open=function(e,t){if(this.readyState!=ll)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,lc(this)},sZ.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||s4).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},sZ.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,lu(this)),this.readyState=ll},sZ.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,lc(this)),this.g&&(this.readyState=3,lc(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==s4.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lh(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},sZ.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?lu(this):lc(this),3==this.readyState&&lh(this)}},sZ.Za=function(e){this.g&&(this.response=this.responseText=e,lu(this))},sZ.Ya=function(e){this.g&&(this.response=e,lu(this))},sZ.ka=function(){this.g&&lu(this)},sZ.setRequestHeader=function(e,t){this.v.append(e,t)},sZ.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},sZ.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(la.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ld=s4.JSON.parse;function lf(e){o$.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lp,this.L=this.M=!1}oe(lf,o$);var lp="",lg=/^https?$/i,lm=["POST","PUT"];function ly(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,l_(e),lw(e)}function l_(e){e.F||(e.F=!0,oV(e,"complete"),oV(e,"error"))}function lv(e){if(e.h&&void 0!==s2&&(!e.C[1]||4!=lI(e)||2!=e.da())){if(e.v&&4==lI(e))o9(e.La,0,e);else if(oV(e,"readystatechange"),4==lI(e)){e.h=!1;try{let o=e.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,i,n=!0;break;default:n=!1}if(!(t=n)){if(i=0===o){var r=String(e.I).match(aM)[1]||null;!r&&s4.self&&s4.self.location&&(r=s4.self.location.protocol.slice(0,-1)),i=!lg.test(r?r.toLowerCase():"")}t=i}if(t)oV(e,"complete"),oV(e,"success");else{e.m=6;try{var s=2<lI(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",l_(e)}}finally{lw(e)}}}}function lw(e,t){if(e.g){lb(e);let i=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||oV(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function lb(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(s4.clearTimeout(e.A),e.A=null)}function lI(e){return e.g?e.g.readyState:0}function lE(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case lp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function lT(e){let t="";return oR(e,function(e,i){t+=i+":"+e+"\r\n"}),t}function lC(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=lT(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):az(e,t,i))}function lk(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function lS(e){this.Ga=0,this.j=[],this.l=new ae,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=lk("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=lk("baseRetryDelayMs",5e3,e),this.hb=lk("retryDelaySeedMs",1e4,e),this.eb=lk("forwardChannelMaxRetries",2,e),this.xa=lk("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new a5(e&&e.concurrentRequestLimit),this.Ja=new lr,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function lN(e){if(lA(e),3==e.H){var t=e.W++,i=aF(e.I);if(az(i,"SID",e.K),az(i,"RID",t),az(i,"TYPE","terminate"),lP(e,i),(t=new aw(e,e.l,t)).L=2,t.v=aW(aF(i)),i=!1,s4.navigator&&s4.navigator.sendBeacon)try{i=s4.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!i&&s4.Image&&((new Image).src=t.v,i=!0),i||(t.g=l$(t.l,null),t.g.ha(t.v)),t.G=Date.now(),aR(t)}lW(e)}function lR(e){e.g&&(lU(e),e.g.cancel(),e.g=null)}function lA(e){lR(e),e.u&&(s4.clearTimeout(e.u),e.u=null),lj(e),e.i.cancel(),e.m&&("number"==typeof e.m&&s4.clearTimeout(e.m),e.m=null)}function lx(e){if(!a3(e.i)&&!e.m){e.m=!0;var t=e.Na;oX||o0(),oQ||(oX(),oQ=!0),oZ.add(t,e),e.C=0}}function lO(e,t){var i;i=t?t.m:e.W++;let n=aF(e.I);az(n,"SID",e.K),az(n,"RID",i),az(n,"AID",e.V),lP(e,n),e.o&&e.s&&lC(n,e.o,e.s),i=new aw(e,e.l,i,e.C+1),null===e.o&&(i.I=e.s),t&&(e.j=t.F.concat(e.j)),t=lL(e,i,1e3),i.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),le(e.i,i),aC(i,n,t)}function lP(e,t){e.na&&oR(e.na,function(e,i){az(t,i,e)}),e.h&&aD({},function(e,i){az(t,i,e)})}function lL(e,t,i){i=Math.min(e.j.length,i);var n=e.h?s8(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+i];-1==t?0<i?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<i;o++){let i=r[o].g,a=r[o].map;if(0>(i-=t))t=Math.max(0,r[o].g-100),s=!1;else try{!function(e,t,i){let n=i||"";try{aD(e,function(e,i){let r=e;s5(e)&&(r=oG(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+i+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,i),t.F=e,n}function lD(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;oX||o0(),oQ||(oX(),oQ=!0),oZ.add(t,e),e.A=0}}function lM(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=au(s8(e.Ma,e),lq(e,e.A)),e.A++,!0)}function lU(e){null!=e.B&&(s4.clearTimeout(e.B),e.B=null)}function lF(e){e.g=new aw(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=aF(e.wa);az(t,"RID","rpc"),az(t,"SID",e.K),az(t,"AID",e.V),az(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&az(t,"TO",e.qa),az(t,"TYPE","xmlhttp"),lP(e,t),e.o&&e.s&&lC(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var i=e.g;e=e.pa,i.L=1,i.v=aW(aF(t)),i.s=null,i.S=!0,ak(i,e)}function lj(e){null!=e.v&&(s4.clearTimeout(e.v),e.v=null)}function lB(e,t){var i=null;if(e.g==t){lj(e),lU(e),e.g=null;var n=2}else{if(!a7(e.i,t))return;i=t.F,lt(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){i=t.s?t.s.length:0,t=Date.now()-t.G;var r,s=e.C;oV(n=ar(),new ah(n,i)),lx(e)}else lD(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==n&&(r=t,!(a8(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=au(s8(e.Na,e,r),lq(e,e.C)),e.C++,!0)))||2==n&&lM(e)))switch(i&&0<i.length&&((t=e.i).i=t.i.concat(i)),s){case 1:lz(e,5);break;case 4:lz(e,10);break;case 3:lz(e,6);break;default:lz(e,2)}}}function lq(e,t){let i=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(i*=2),i*t}function lz(e,t){if(e.l.info("Error code "+t),2==t){var i=null;e.h&&(i=null);var n=s8(e.pb,e);i||(i=new aU("//www.google.com/images/cleardot.gif"),s4.location&&"http"==s4.location.protocol||aj(i,"https"),aW(i)),function(e,t){let i=new ae;if(s4.Image){let n=new Image;n.onload=s7(ls,i,n,"TestLoadImage: loaded",!0,t),n.onerror=s7(ls,i,n,"TestLoadImage: error",!1,t),n.onabort=s7(ls,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=s7(ls,i,n,"TestLoadImage: timeout",!1,t),s4.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else al(2);e.H=0,e.h&&e.h.za(t),lW(e),lA(e)}function lW(e){if(e.H=0,e.ma=[],e.h){let t=li(e.i);(0!=t.length||0!=e.j.length)&&(or(e.ma,t),or(e.ma,e.j),e.i.i.length=0,on(e.j),e.j.length=0),e.h.ya()}}function lH(e,t,i){var n=i instanceof aU?aF(i):new aU(i);if(""!=n.g)t&&(n.g=t+"."+n.g),aB(n,n.m);else{var r=s4.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new aU(null);n&&aj(s,n),t&&(s.g=t),r&&aB(s,r),i&&(s.l=i),n=s}return i=e.F,t=e.Da,i&&t&&az(n,i,t),az(n,"VER",e.ra),lP(e,n),n}function l$(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new lf(i&&e.Ha&&!e.va?new lo({ob:!0}):e.va)).Oa(e.J),t}function lV(){}function lK(){if(od&&!(10<=Number(oI)))throw Error("Environmental error: no available transport.")}function lG(e,t){o$.call(this),this.g=new lS(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!oa(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!oa(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new lX(this)}function lJ(e){ay.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function lY(){a_.call(this),this.status=1}function lX(e){this.g=e}function lQ(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function lZ(e,t,i){i||(i=0);var n=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)n[r]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^i&(r^s))+n[0]+3614090360&4294967295;o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[1]+3905402710&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[2]+606105819&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[4]+4118548399&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[5]+1200080426&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[6]+2821735955&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[8]+1770035416&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[9]+2336552879&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[10]+4294925233&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(i=r+(o<<22&4294967295|o>>>10))&(r^s))+n[12]+1804603682&4294967295,o=s+(r^(t=i+(o<<7&4294967295|o>>>25))&(i^r))+n[13]+4254626195&4294967295,o=r+(i^(s=t+(o<<12&4294967295|o>>>20))&(t^i))+n[14]+2792965006&4294967295,o=i+(t^(r=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,i=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(i^r))+n[1]+4129170786&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[0]+3921069994&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[5]+3593408605&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[4]+3889429448&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[9]+568446438&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[8]+1163531501&4294967295,i=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(i^r))+n[13]+2850285829&4294967295,t=i+(o<<5&4294967295|o>>>27),o=s+(i^r&(t^i))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^i&(s^t))+n[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=i+(s^t&(r^s))+n[12]+2368359562&4294967295,o=t+((i=r+(o<<20&4294967295|o>>>12))^r^s)+n[5]+4294588738&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[8]+2272392833&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[11]+1839030562&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[1]+2763975236&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[4]+1272893353&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[7]+4139469664&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[13]+681279174&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[0]+3936430074&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[3]+3572445317&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((i=r+(o<<23&4294967295|o>>>9))^r^s)+n[9]+3654602809&4294967295,o=s+((t=i+(o<<4&4294967295|o>>>28))^i^r)+n[12]+3873151461&4294967295,o=r+((s=t+(o<<11&4294967295|o>>>21))^t^i)+n[15]+530742520&4294967295,o=i+((r=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,i=r+(o<<23&4294967295|o>>>9),o=t+(r^(i|~s))+n[0]+4096336452&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[5]+4237533241&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[12]+1700485571&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[1]+2240044497&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[8]+1873313359&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[13]+1309151649&4294967295,i=r+(o<<21&4294967295|o>>>11),o=t+(r^(i|~s))+n[4]+4149444226&4294967295,t=i+(o<<6&4294967295|o>>>26),o=s+(i^(t|~r))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~i))+n[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=i+(s^(r|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function l0(e,t){this.h=t;for(var i=[],n=!0,r=e.length-1;0<=r;r--){var s=0|e[r];n&&s==t||(i[r]=s,n=!1)}this.g=i}(sZ=lf.prototype).Oa=function(e){this.M=e},sZ.ha=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():C.g(),this.C=this.u?ap(this.u):ap(C),this.g.onreadystatechange=s8(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){ly(this,e);return}if(e=i||"",i=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())i.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,o]of(n=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),r=s4.FormData&&e instanceof s4.FormData,!(0<=oi(lm,t))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;lb(this),0<this.B&&((this.L=(s=this.g,od&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=s8(this.ua,this)):this.A=o9(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ly(this,e)}},sZ.ua=function(){void 0!==s2&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,oV(this,"timeout"),this.abort(8))},sZ.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,oV(this,"complete"),oV(this,"abort"),lw(this))},sZ.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lw(this,!0)),lf.$.N.call(this)},sZ.La=function(){this.s||(this.G||this.v||this.l?lv(this):this.kb())},sZ.kb=function(){lv(this)},sZ.isActive=function(){return!!this.g},sZ.da=function(){try{return 2<lI(this)?this.g.status:-1}catch(e){return -1}},sZ.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},sZ.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ld(t)}},sZ.Ia=function(){return this.m},sZ.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(sZ=lS.prototype).ra=8,sZ.H=1,sZ.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new aw(this,this.l,e),s=this.s;if(this.U&&(s?oO(s=oA(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,i=0;i<this.j.length;i++){t:{var n=this.j[i];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.j.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=lL(this,r,t),az(i=aF(this.I),"RID",e),az(i,"CVER",22),this.F&&az(i,"X-HTTP-Session-Id",this.F),lP(this,i),s&&(this.O?t="headers="+encodeURIComponent(String(lT(s)))+"&"+t:this.o&&lC(i,this.o,s)),le(this.i,r),this.bb&&az(i,"TYPE","init"),this.P?(az(i,"$req",t),az(i,"SID","null"),r.aa=!0,aC(r,i,null)):aC(r,i,t),this.H=2}}else 3==this.H&&(e?lO(this,e):0==this.j.length||a3(this.i)||lO(this))}},sZ.Ma=function(){if(this.u=null,lF(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=au(s8(this.jb,this),e)}},sZ.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,al(10),lR(this),lF(this))},sZ.ib=function(){null!=this.v&&(this.v=null,lR(this),lM(this),al(19))},sZ.pb=function(e){e?(this.l.info("Successfully pinged google.com"),al(2)):(this.l.info("Failed to ping google.com"),al(1))},sZ.isActive=function(){return!!this.h&&this.h.isActive(this)},(sZ=lV.prototype).Ba=function(){},sZ.Aa=function(){},sZ.za=function(){},sZ.ya=function(){},sZ.isActive=function(){return!0},sZ.Va=function(){},lK.prototype.g=function(e,t){return new lG(e,t)},oe(lG,o$),lG.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,i=this.h||void 0;al(0),e.Y=t,e.na=i||{},e.G=e.aa,e.I=lH(e,null,e.Y),lx(e)},lG.prototype.close=function(){lN(this.g)},lG.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=oG(e),e=i);t.j.push(new a9(t.fb++,e)),3==t.H&&lx(t)},lG.prototype.N=function(){this.g.h=null,delete this.j,lN(this.g),delete this.g,lG.$.N.call(this)},oe(lJ,ay),oe(lY,a_),oe(lX,lV),lX.prototype.Ba=function(){oV(this.g,"a")},lX.prototype.Aa=function(e){oV(this.g,new lJ(e))},lX.prototype.za=function(e){oV(this.g,new lY)},lX.prototype.ya=function(){oV(this.g,"b")},oe(lQ,function(){this.blockSize=-1}),lQ.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},lQ.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,n=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=i;)lZ(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[r++]=e.charCodeAt(s++),r==this.blockSize){lZ(this,n),r=0;break}}else for(;s<t;)if(n[r++]=e[s++],r==this.blockSize){lZ(this,n),r=0;break}}this.h=r,this.i+=t},lQ.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.j(e),e=Array(16),t=i=0;4>t;++t)for(var n=0;32>n;n+=8)e[i++]=this.g[t]>>>n&255;return e};var l1={};function l2(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(l1,e)?l1[e]:l1[e]=new l0([0|e],0>e?-1:0):new l0([0|e],0>e?-1:0)}function l4(e){if(isNaN(e)||!isFinite(e))return l5;if(0>e)return he(l4(-e));for(var t=[],i=1,n=0;e>=i;n++)t[n]=e/i|0,i*=l9;return new l0(t,0)}var l9=4294967296,l5=l2(0),l6=l2(1),l3=l2(16777216);function l8(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function l7(e){return -1==e.h}function he(e){for(var t=e.g.length,i=[],n=0;n<t;n++)i[n]=~e.g[n];return new l0(i,~e.h).add(l6)}function ht(e,t){return e.add(he(t))}function hi(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function hn(e,t){this.g=e,this.h=t}function hr(e,t){if(l8(t))throw Error("division by zero");if(l8(e))return new hn(l5,l5);if(l7(e))return t=hr(he(e),t),new hn(he(t.g),he(t.h));if(l7(t))return t=hr(e,he(t)),new hn(he(t.g),t.h);if(30<e.g.length){if(l7(e)||l7(t))throw Error("slowDivide_ only works with positive integers.");for(var i=l6,n=t;0>=n.X(e);)i=hs(i),n=hs(n);var r=ho(i,1),s=ho(n,1);for(n=ho(n,2),i=ho(i,2);!l8(n);){var o=s.add(n);0>=o.X(e)&&(r=r.add(i),s=o),n=ho(n,1),i=ho(i,1)}return t=ht(e,r.R(t)),new hn(r,t)}for(r=l5;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(i=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=l4(i)).R(t);l7(o)||0<o.X(e);)i-=n,o=(s=l4(i)).R(t);l8(s)&&(s=l6),r=r.add(s),e=ht(e,o)}return new hn(r,e)}function hs(e){for(var t=e.g.length+1,i=[],n=0;n<t;n++)i[n]=e.D(n)<<1|e.D(n-1)>>>31;return new l0(i,e.h)}function ho(e,t){var i=t>>5;t%=32;for(var n=e.g.length-i,r=[],s=0;s<n;s++)r[s]=0<t?e.D(s+i)>>>t|e.D(s+i+1)<<32-t:e.D(s+i);return new l0(r,e.h)}(sZ=l0.prototype).ea=function(){if(l7(this))return-he(this).ea();for(var e=0,t=1,i=0;i<this.g.length;i++){var n=this.D(i);e+=(0<=n?n:l9+n)*t,t*=l9}return e},sZ.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(l8(this))return"0";if(l7(this))return"-"+he(this).toString(e);for(var t=l4(Math.pow(e,6)),i=this,n="";;){var r=hr(i,t).g,s=((0<(i=ht(i,r.R(t))).g.length?i.g[0]:i.h)>>>0).toString(e);if(l8(i=r))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},sZ.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},sZ.X=function(e){return l7(e=ht(this,e))?-1:l8(e)?0:1},sZ.abs=function(){return l7(this)?he(this):this},sZ.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0,r=0;r<=t;r++){var s=n+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);n=o>>>16,s&=65535,o&=65535,i[r]=o<<16|s}return new l0(i,-2147483648&i[i.length-1]?-1:0)},sZ.R=function(e){if(l8(this)||l8(e))return l5;if(l7(this))return l7(e)?he(this).R(he(e)):he(he(this).R(e));if(l7(e))return he(this.R(he(e)));if(0>this.X(l3)&&0>e.X(l3))return l4(this.ea()*e.ea());for(var t=this.g.length+e.g.length,i=[],n=0;n<2*t;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<e.g.length;r++){var s=this.D(n)>>>16,o=65535&this.D(n),a=e.D(r)>>>16,l=65535&e.D(r);i[2*n+2*r]+=o*l,hi(i,2*n+2*r),i[2*n+2*r+1]+=s*l,hi(i,2*n+2*r+1),i[2*n+2*r+1]+=o*a,hi(i,2*n+2*r+1),i[2*n+2*r+2]+=s*a,hi(i,2*n+2*r+2)}for(n=0;n<t;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=t;n<2*t;n++)i[n]=0;return new l0(i,0)},sZ.gb=function(e){return hr(this,e).h},sZ.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)&e.D(n);return new l0(i,this.h&e.h)},sZ.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)|e.D(n);return new l0(i,this.h|e.h)},sZ.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)^e.D(n);return new l0(i,this.h^e.h)},lK.prototype.createWebChannel=lK.prototype.g,lG.prototype.send=lG.prototype.u,lG.prototype.open=lG.prototype.m,lG.prototype.close=lG.prototype.close,ac.NO_ERROR=0,ac.TIMEOUT=8,ac.HTTP_ERROR=6,ad.COMPLETE="complete",ag.EventType=am,am.OPEN="a",am.CLOSE="b",am.ERROR="c",am.MESSAGE="d",o$.prototype.listen=o$.prototype.O,lf.prototype.listenOnce=lf.prototype.P,lf.prototype.getLastError=lf.prototype.Sa,lf.prototype.getLastErrorCode=lf.prototype.Ia,lf.prototype.getStatus=lf.prototype.da,lf.prototype.getResponseJson=lf.prototype.Wa,lf.prototype.getResponseText=lf.prototype.ja,lf.prototype.send=lf.prototype.ha,lf.prototype.setWithCredentials=lf.prototype.Oa,lQ.prototype.digest=lQ.prototype.l,lQ.prototype.reset=lQ.prototype.reset,lQ.prototype.update=lQ.prototype.j,l0.prototype.add=l0.prototype.add,l0.prototype.multiply=l0.prototype.R,l0.prototype.modulo=l0.prototype.gb,l0.prototype.compare=l0.prototype.X,l0.prototype.toNumber=l0.prototype.ea,l0.prototype.toString=l0.prototype.toString,l0.prototype.getBits=l0.prototype.D,l0.fromNumber=l4,l0.fromString=function e(t,i){if(0==t.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==t.charAt(0))return he(e(t.substring(1),i));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=l4(Math.pow(i,8)),r=l5,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),i);8>o?(o=l4(Math.pow(i,o)),r=r.R(o).add(l4(a))):r=(r=r.R(n)).add(l4(a))}return r},s1.createWebChannelTransport=function(){return new lK},s1.getStatEventTarget=function(){return ar()},s1.ErrorCode=ac,s1.EventType=ad,s1.Event=ai,s1.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},s1.FetchXmlHttpFactory=lo,s1.WebChannel=ag,s1.XhrIo=lf,s1.Md5=lQ;var ha=s1.Integer=l0;let hl="@firebase/firestore";/**
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
 */class hh{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}/** A user with a null UID. */hh.UNAUTHENTICATED=new hh(null),// non-FirebaseAuth providers.
hh.GOOGLE_CREDENTIALS=new hh("google-credentials-uid"),hh.FIRST_PARTY=new hh("first-party-uid"),hh.MOCK_USER=new hh("mock-user");/**
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
 */let hu="10.3.1",hc=new nJ("@firebase/firestore");function hd(e,...t){if(hc.logLevel<=sQ.DEBUG){let i=t.map(hp);hc.debug(`Firestore (${hu}): ${e}`,...i)}}function hf(e,...t){if(hc.logLevel<=sQ.ERROR){let i=t.map(hp);hc.error(`Firestore (${hu}): ${e}`,...i)}}/**
 * Converts an additional log parameter to a string representation.
 */function hp(e){if("string"==typeof e)return e;try{/**
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
 */function hg(e="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t=`FIRESTORE (${hu}) INTERNAL ASSERTION FAILED: `+e;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw hf(t),Error(t)}/**
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
 */let hm={/** The operation was cancelled (typically by the caller). */CANCELLED:"cancelled",/**
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
     */UNAVAILABLE:"unavailable"};/** An error returned by a Firestore operation. */class hy extends nm{/** @hideconstructor */constructor(/**
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
 */class h_{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){// Fire with initial user.
e.enqueueRetryable(()=>t(hh.UNAUTHENTICATED))}shutdown(){}}class hb{constructor(e){this.t=e,/** Tracks the current User. */this.currentUser=hh.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),r=new h_;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new h_,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{hd("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(hd("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new h_)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==e?(hd("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||hg(),new hv(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||hg(),new hh(e)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class hI{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=hh.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class hE{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new hI(this.l,this.h,this.P))}start(e,t){// Fire with initial uid.
e.enqueueRetryable(()=>t(hh.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let i=e=>{null!=e.error&&hd("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.R;return this.R=e.token,hd("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let n=e=>{hd("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):hd("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||hg(),this.R=e.token,new hT(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class hk{static V(){// Alphanumeric characters
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
i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function hS(e,t){return e<t?-1:e>t?1:0}/**
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
 */class hN{constructor(e,t,i){void 0===t?t=0:t>e.length&&hg(),void 0===i?i=e.length-t:i>e.length-t&&hg(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===hN.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof hN?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let n=0;n<i;n++){let i=e.get(n),r=t.get(n);if(i<r)return -1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class hR extends hN{construct(e,t,i){return new hR(e,t,i)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...e){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new hy(hm.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);// Strip leading and traling slashed.
t.push(...i.split("/").filter(e=>e.length>0))}return new hR(t)}static emptyPath(){return new hR([])}}/**
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
 */class hA{constructor(e){this.path=e}static fromPath(e){return new hA(hR.fromString(e))}static fromName(e){return new hA(hR.fromString(e).popFirst(5))}static empty(){return new hA(hR.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===hR.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return hR.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(e){return new hA(new hR(e.slice()))}}/** Verifies whether `e` is an IndexedDbTransactionError. */function hx(e){// Use name equality, as instanceof checks on errors don't work with errors
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
class hO{constructor(e,t){this.comparator=e,this.root=t||hL.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(e,t){return new hO(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,hL.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(e){return new hO(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hL.BLACK,null,null))}// Returns the value of the node with the given key, or null.
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
getIterator(){return new hP(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hP(this.root,e,this.comparator,!1)}getReverseIterator(){return new hP(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hP(this.root,e,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class hP{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(e);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class hL{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:hL.RED,this.left=null!=n?n:hL.EMPTY,this.right=null!=r?r:hL.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(e,t,i,n,r){return new hL(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
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
insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return hL.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(e,t){let i,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return hL.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,hL.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,hL.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}// For testing.
checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw hg();let e=this.left.check();if(e!==this.right.check())throw hg();return e+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
hL.EMPTY=null,hL.RED=!0,hL.BLACK=!1,// end LLRBEmptyNode
hL.EMPTY=new class{constructor(){this.size=0}get key(){throw hg()}get value(){throw hg()}get color(){throw hg()}get left(){throw hg()}get right(){throw hg()}// Returns a copy of the current node.
copy(e,t,i,n,r){return this}// Returns a copy of the tree, with the specified key/value added.
insert(e,t,i){return new hL(e,t)}// Returns a copy of the tree, with the specified key removed.
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
 */class hD{constructor(e){this.comparator=e,this.data=new hO(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}/** Iterates elements in order defined by "comparator" */forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hM(this.data.getIterator())}getIteratorFrom(e){return new hM(this.data.getIteratorFrom(e))}/** Inserts or updates an element */add(e){return this.copy(this.data.remove(e).insert(e,!0))}/** Deletes an element */delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;// Make sure `result` always refers to the larger one of the two sets.
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof hD)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new hD(this.comparator);return t.data=e,t}}class hM{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hU extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class hF{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&e instanceof DOMException?new hU("Invalid base64 string: "+e):e}}(e);return new hF(t)}static fromUint8Array(e){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let t=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new hF(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return hS(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function hj(e){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof e?e:"string"==typeof e?Number(e):0}hF.EMPTY_BYTE_STRING=new hF(""),new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
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
 */class hB{/**
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
     */constructor(e,t,i,n,r,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class hq{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hq("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof hq&&e.projectId===this.projectId&&e.database===this.database}}new hO(hA.comparator),new hO(hA.comparator),new hO(hA.comparator),new hD(hA.comparator),new hD(hS),/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(S=k||(k={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS",new ha([4294967295,4294967295],0);/**
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
/** Firestore index value writer.  */class hz{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */dt(e,t){this.Tt(e,t),// (see go/firestore-storage-format#encodings).
t.Et()}Tt(e,t){var i;if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(hj(e.integerValue));else if("doubleValue"in e){let i=hj(e.doubleValue);isNaN(i)?this.At(t,13):(this.At(t,15),0===i&&1/i==-1/0?t.Rt(0):t.Rt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.At(t,20),"string"==typeof i?t.Vt(i):(t.Vt(`${i.seconds||""}`),t.Rt(i.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt("string"==typeof(i=e.bytesValue)?hF.fromBase64String(i):hF.fromUint8Array(i)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.At(t,45),t.Rt(i.latitude||0),t.Rt(i.longitude||0)}else"mapValue"in e?"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):hg()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let i=e.fields||{};for(let e of(this.At(t,55),Object.keys(i)))this.ft(e,t),this.Tt(i[e],t)}bt(e,t){let i=e.values||[];for(let e of(this.At(t,50),i))this.Tt(e,t)}wt(e,t){this.At(t,37),hA.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
e.Rt(2)}}hz.Ct=new hz,new Uint8Array(0);class hW{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
e,t,// us from collecting a huge number of sequence numbers if the cache has grown very large.
i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new hW(e,hW.DEFAULT_COLLECTION_PERCENTILE,hW.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/** The Platform's 'document' implementation or null if not available. */function hH(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
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
 *//** A mutation queue for a specific user, backed by IndexedDB. */hW.DEFAULT_COLLECTION_PERCENTILE=10,hW.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hW.DEFAULT=new hW(41943040,hW.DEFAULT_COLLECTION_PERCENTILE,hW.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hW.DISABLED=new hW(-1,0,0);/**
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
 */class h${constructor(/**
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
n>0&&hd("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,()=>(this.ko=Date.now(),e())),// bounds.
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
 */class hV{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new h_,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
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
     */static createAndSchedule(e,t,i,n,r){let s=Date.now()+i,o=new hV(e,t,s,n,r);return o.start(i),o}/**
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
     */cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hy(hm.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class hK{constructor(e,t,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=hh.UNAUTHENTICATED,this.clientId=hk.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{hd("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(hd("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new hy(hm.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new h_;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function(e,t){if(hf("AsyncQueue",`${t}: ${e}`),hx(e))return new hy(hm.UNAVAILABLE,`${t}: ${e}`);throw e}(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}/**
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
 */function hG(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let hJ=new Map;/**
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
 */class hY{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new hy(hm.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new hy(hm.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(e,t,i,n){if(!0===t&&!0===n)throw new hy(hm.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hG(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new hy(hm.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new hy(hm.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new hy(hm.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,i;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hX{/** @hideconstructor */constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hY({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new hy(hm.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new hy(hm.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hY(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new hw;switch(e.type){case"firstParty":return new hE(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new hy(hm.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(e){let t=hJ.get(e);t&&(hd("ComponentProvider","Removing Datastore"),hJ.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class hQ{constructor(){// The last promise in the queue.
this.Za=Promise.resolve(),// retried with backoff.
this.Xa=[],// be changed again.
this.eu=!1,// automatically removed after they are run or canceled.
this.tu=[],this.nu=null,// assertion sanity-checks.
this.ru=!1,this.iu=!1,this.su=[],this.Ho=new h$(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.ou=()=>{let e=hH();e&&hd("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=hH();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(e){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=hH();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let t=new h_;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!hx(e))throw e;// Failure will be handled by AsyncQueue
hd("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
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
    throw hf("INTERNAL UNHANDLED ERROR: ",i),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,i){this._u(),this.su.indexOf(e)>-1&&(t=0);let n=hV.createAndSchedule(this,e,t,i,e=>this.cu(e));return this.tu.push(n),n}_u(){this.nu&&hg()}verifyOperationInProgress(){}/**
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
 */class hZ extends hX{/** @hideconstructor */constructor(e,t,i,n){super(e,t,i,n),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new hQ,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
function(e){var t,i,n,r,s,o;let a=e._freezeSettings(),l=(r=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new hB(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,hG(a.experimentalLongPollingOptions),a.useFetchStreams));e._firestoreClient=new hK(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(i=a.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=a.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}(this),this._firestoreClient.terminate()}}RegExp("[~\\*/\\[\\]]"),new WeakMap,function(e=!0){hu=rc,ra(new nB("firestore",(t,{instanceIdentifier:i,options:n})=>{let r=t.getProvider("app").getImmediate(),s=new hZ(new hb(t.getProvider("auth-internal")),new hC(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new hy(hm.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hq(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),rp(hl,"4.1.3",void 0),rp(hl,"4.1.3","esm2017")}();let h0="@firebase/database",h1="1.0.1",h2="";/**
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
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 */class h4{/**
     * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
     */constructor(e){this.domStorage_=e,// Use a prefix to avoid collisions with other stuff saved by the app.
this.prefix_="firebase:"}/**
     * @param key - The key to save the value under
     * @param value - The value being stored, or null to remove the key.
     */set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nw(t))}/**
     * @returns The value that was stored under this key, or null
     */get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:nv(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 */class h9{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return nT(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param domStorageName - Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @returns Turning off type information until a common interface is defined.
 */let h5=function(e){try{// NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
// so it must be inside the try/catch.
if("undefined"!=typeof window&&void 0!==window[e]){// Need to test cache. Just because it's here doesn't mean it works
let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h4(t)}}catch(e){}// Failed to create wrapper.  Just return in-memory storage.
// TODO: log?
return new h9},h6=h5("localStorage"),h3=h5("sessionStorage"),h8=new nJ("@firebase/database"),h7=(v=1,function(){return v++}),ue=function(e){let t=nM(e),i=new nP;i.update(t);let n=i.digest();return i5.encodeByteArray(n)},ut=function(...e){let t="";for(let i=0;i<e.length;i++){let n=e[i];Array.isArray(n)||n&&"object"==typeof n&&// eslint-disable-next-line @typescript-eslint/no-explicit-any
"number"==typeof n.length?t+=ut.apply(null,n):"object"==typeof n?t+=nw(n):t+=n,t+=" "}return t},ui=null,un=!0,ur=function(e,t){i1(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(h8.logLevel=sQ.VERBOSE,ui=h8.log.bind(h8),t&&h3.set("logging_enabled",!0)):"function"==typeof e?ui=e:(ui=null,h3.remove("logging_enabled"))},us=function(...e){if(!0===un&&(un=!1,null===ui&&!0===h3.get("logging_enabled")&&ur(!0)),ui){let t=ut.apply(null,e);ui(t)}},uo=function(e){return function(...t){us(e,...t)}},ua=function(...e){let t="FIREBASE INTERNAL ERROR: "+ut(...e);h8.error(t)},ul=function(...e){let t=`FIREBASE FATAL ERROR: ${ut(...e)}`;throw h8.error(t),Error(t)},uh=function(...e){let t="FIREBASE WARNING: "+ut(...e);h8.warn(t)},uu=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&uh("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uc=function(e){return"number"==typeof e&&(e!=e||// NaN
e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ud=function(e){if(nf()||"complete"===document.readyState)e();else{// Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
// fire before onload), but fall back to onload.
let t=!1,i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),// fallback to onload.
window.addEventListener("load",i,!1)):document.attachEvent&&(// IE.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&i()}),// fallback to onload.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.attachEvent("onload",i))}},uf="[MIN_NAME]",up="[MAX_NAME]",ug=function(e,t){if(e===t)return 0;{if(e===uf||t===up)return -1;if(t===uf||e===up)return 1;let i=uE(e),n=uE(t);return null!==i?null!==n?i-n==0?e.length-t.length:i-n:-1:null!==n?1:e<t?-1:1}},um=function(e,t){return e===t?0:e<t?-1:1},uy=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+nw(t))},u_=function(e){if("object"!=typeof e||null===e)return nw(e);let t=[];// eslint-disable-next-line guard-for-in
for(let i in e)t.push(i);// Export as json, but with the keys sorted.
t.sort();let i="{";for(let n=0;n<t.length;n++)0!==n&&(i+=","),i+=nw(t[n])+":"+u_(e[t[n]]);return i+"}"},uv=function(e,t){let i=e.length;if(i<=t)return[e];let n=[];for(let r=0;r<i;r+=t)r+t>i?n.push(e.substring(r,i)):n.push(e.substring(r,r+t));return n};/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj - The object or array to iterate over
 * @param fn - The function to apply
 */function uw(e,t){for(let i in e)e.hasOwnProperty(i)&&t(i,e[i])}/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param v - A double
 *
 */let ub=function(e){let t,i,n,r,s;i1(!uc(e),"Invalid JSON number"),0===e?(i=0,n=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(i=// Normalized
(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,n=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(// Denormalized
i=0,n=Math.round(e/5e-324)));// Pack sign, exponent, fraction
let o=[];for(s=52;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);for(s=11;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},uI=RegExp("^-?(0*)\\d{1,10}$"),uE=function(e){if(uI.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},uT=function(e){try{e()}catch(e){// Re-throw exception when it's safe.
setTimeout(()=>{// It used to be that "throw e" would result in a good console error with
// relevant context, but as of Chrome 39, you just get the firebase.js
// file/line number where we re-throw it, which is useless. So we log
// e.stack explicitly.
let t=e.stack||"";throw uh("Exception was thrown by user callback.",t),e},Math.floor(0))}},uC=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";// For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
// believe to support JavaScript/AJAX rendering.
// NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
// would have seen the page" is flaky if we don't treat it as a crawler.
return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},uk=function(e,t){let i=setTimeout(e,t);return"number"==typeof i&&// @ts-ignore Is only defined in Deno environments.
"undefined"!=typeof Deno&&// @ts-ignore Deno and unrefTimer are only defined in Deno environments.
Deno.unrefTimer?Deno.unrefTimer(i):"object"==typeof i&&i.unref&&i.unref(),i};/**
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
 *//**
 * Abstraction around AppCheck's token fetching capabilities.
 */class uS{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{// Support delayed initialization of FirebaseAppCheck. This allows our
// customers to initialize the RTDB SDK before initializing Firebase
// AppCheck and ensures that all requests are authenticated if a token
// becomes available before the timoeout below expires.
setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){uh(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 * Abstraction around FirebaseApp's token fetching capabilities.
 */class uN{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>// TODO: Need to figure out all the cases this is raised and whether
    // this makes sense.
    e&&"auth/token-not-initialized"===e.code?(us("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,i)=>{// Support delayed initialization of FirebaseAuth. This allows our
// customers to initialize the RTDB SDK before initializing Firebase
// Auth and ensures that all requests are authenticated if a token
// becomes available before the timoeout below expires.
setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',uh(e)}}/* AuthTokenProvider that supplies a constant token. Used by Admin SDK or mockUserToken with emulators. */class uR{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){// Invoke the listener immediately to match the behavior in Firebase Auth
// (see packages/auth/src/auth.js#L1807)
e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}/** A string that is treated as an admin access token by the RTDB emulator. Used by Admin SDK. */uR.OWNER="owner";// Matches console.firebase.google.com, firebase-console-*.corp.google.com and
// firebase.corp.google.com
let uA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ux="websocket",uO="long_polling";/**
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
 * A class that holds metadata about a Repo object
 */class uP{/**
     * @param host - Hostname portion of the url for the repo
     * @param secure - Whether or not this repo is accessed over ssl
     * @param namespace - The namespace represented by the repo
     * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
     * @param nodeAdmin - Whether this instance uses Admin SDK credentials
     * @param persistenceKey - Override the default session persistence storage key
     */constructor(e,t,i,n,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=h6.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&h6.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}/**
 * Returns the websocket URL for this repo
 * @param repoInfo - RepoInfo object
 * @param type - of connection
 * @param params - list
 * @returns The URL for this repo
 */function uL(e,t,i){let n;if(i1("string"==typeof t,"typeof type must == string"),i1("object"==typeof i,"typeof params must == object"),t===ux)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===uO)n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(i.ns=e.namespace);let r=[];return uw(i,(e,t)=>{r.push(e+"="+t)}),n+r.join("&")}/**
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
 * Tracks a collection of stats.
 */class uD{constructor(){this.counters_={}}incrementCounter(e,t=1){nT(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */function e(t,i){if(!(i instanceof Object))return i;switch(i.constructor){case Date:return new Date(i.getTime());case Object:void 0===t&&(t={});break;case Array:// Always copy the array source and overwrite the target.
t=[];break;default:// Not a plain Object - treat it as a scalar.
return i}for(let n in i)i.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=e(t[n],i[n]));return t}(void 0,this.counters_))}}/**
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
 */let uM={},uU={};function uF(e){let t=e.toString();return uM[t]||(uM[t]=new uD),uM[t]}/**
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
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 */class uj{/**
     * @param onMessage_
     */constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}/**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     */handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&uT(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */// URL query parameters associated with longpolling
let uB="start";/**
 * This class manages a single long-polling connection.
 */class uq{/**
     * @param connId An identifier for this connection, used for logging
     * @param repoInfo The info for the endpoint to send data to.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The AppCheck token for this client.
     * @param authToken The AuthToken to use for this connection.
     * @param transportSessionId Optional transportSessionid if we are
     * reconnecting for an existing transport session
     * @param lastSessionId Optional lastSessionId if the PersistentConnection has
     * already created a connection previously
     */constructor(e,t,i,n,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=uo(e),this.stats_=uF(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),uL(t,uO,e))}/**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uj(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),// Make sure we clear the host cache
this.onClosed_(),this.connectTimeoutTimer_=null;// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(3e4)),// Ensure we delay the creation of the iframe until the DOM is loaded.
ud(()=>{if(this.isClosed_)return;//Set up a callback that gets triggered once a connection is set up.
this.scriptTagHolder=new uz((...e)=>{let[t,i,n,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===uB)this.id=i,this.password=n;else if("close"===t)i?(// We aren't expecting any more data (other than what the server's already in the process of sending us
// through our already open polls), so don't send any more.
this.scriptTagHolder.sendNewPolls=!1,// arg1 in this case is the last response number sent by the server. We should try to receive
// all of the responses up to this one before closing
this.myPacketOrderer.closeAfter(i,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}// we closed the connection.
},(...e)=>{let[t,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,i)},()=>{this.onClosed_()},this.urlFn);//Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
//from cache.
let e={};e[uB]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&uA.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{/* do nothing */})})}/**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}/**
     * Forces long polling to be considered as a potential transport
     */static forceAllow(){uq.forceAllow_=!0}/**
     * Forces longpolling to not be considered as a potential transport
     */static forceDisallow(){uq.forceDisallow_=!0}// Static method, use string literal so it can be accessed in a generic way
static isAvailable(){return!nf()&&(!!uq.forceAllow_||!uq.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}/**
     * No-op for polling
     */markConnectionHealthy(){}/**
     * Stops polling and cleans up the iframe
     */shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}/**
     * Triggered when this transport is closed
     */onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}/**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}/**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param data - The JSON data to transmit.
     */send(e){let t=nw(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);//first, lets get the base64-encoded data
let i=i3(t),n=uv(i,1840);//Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
//of segments so that we can reassemble the packet on the server.
for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}/**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     */addDisconnectPingFrame(e,t){if(nf())return;this.myDisconnFrame=document.createElement("iframe");let i={};i.dframe="t",i.id=e,i.pw=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}/**
     * Used to track the bytes received by this client
     */incrementIncomingBytes_(e){// TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
let t=nw(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 *********************************************************************************************/class uz{/**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */constructor(e,t,i,n){if(this.onDisconnect=i,this.urlFn=n,//We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
//problems in some browsers.
this.outstandingRequests=new Set,//A queue of the pending segments waiting for transmission to the server.
this.pendingSegs=[],//A serial number. We use this for two things:
// 1) A way to ensure the browser doesn't cache responses to polls
// 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
//    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
//    JSONP code in the order it was added to the iframe.
this.currentSerial=Math.floor(1e8*Math.random()),// This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
// incoming data from the server that we're waiting for).
this.sendNewPolls=!0,nf())this.commandCB=e,this.onMessageCB=t;else{//Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
//iframes where we put the long-polling script tags. We have two callbacks:
//   1) Command Callback - Triggered for control issues, like starting a connection.
//   2) Message Callback - Triggered when new data arrives.
this.uniqueCallbackIdentifier=h7(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,//Create an iframe for us to add script tags to.
this.myIFrame=uz.createIFrame_();// Set the iframe's contents.
let i="";// if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
// for ie9, but ie8 needs to do it again in the document itself.
if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let e=document.domain;i='<script>document.domain="'+e+'";</script>'}let n="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(e){us("frame writing exception"),e.stack&&us(e.stack),us(e)}}}/**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     */static createIFrame_(){let e=document.createElement("iframe");// This is necessary in order to initialize the document inside the iframe
if(e.style.display="none",document.body){document.body.appendChild(e);try{// If document.domain has been modified in IE, this will throw an error, and we need to set the
// domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
// Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
let t=e.contentWindow.document;t||us("No IE domain setting required")}catch(i){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else // never gets hit.
throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}/**
     * Cancel all outstanding queries and remove the frame.
     */close(){//Mark this iframe as dead, so no new requests are sent.
this.alive=!1,this.myIFrame&&(//We have to actually remove all of the html inside this iframe before removing it from the
//window, or IE will continue loading and executing the script tags we've already added, which
//can lead to some errors being thrown. Setting textContent seems to be the safest way to do this.
this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));// Protect from being called recursively.
let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}/**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param id - The ID of this connection
     * @param pw - The password for this connection
     */startLongPoll(e,t){//send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}/**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */newRequest_(){// We keep one outstanding request open all the time to receive data, but if we need to send data
// (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
// close the old request.
if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{//construct our url
this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),i="",n=0;for(;this.pendingSegs.length>0;){//first, lets see if the next segment will fit.
let e=this.pendingSegs[0];if(e.d.length+30+i.length<=1870){//great, the segment will fit. Lets append it.
let e=this.pendingSegs.shift();i=i+"&seg"+n+"="+e.seg+"&ts"+n+"="+e.ts+"&d"+n+"="+e.d,n++}else break}return t+=i,this.addLongPollTag_(t,this.currentSerial),!0}}/**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */enqueueSegment(e,t,i){//add this to the queue of segments to send.
this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}/**
     * Add a script tag for a regular long-poll request.
     * @param url - The URL of the script tag.
     * @param serial - The serial number of the request.
     */addLongPollTag_(e,t){//remember that we sent this request.
this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(i,Math.floor(25e3));this.addTag(e,()=>{// Request completed.  Cancel the keepalive.
clearTimeout(n),// Trigger a new request so we can continue receiving data.
i()})}/**
     * Add an arbitrary script tag to the iframe.
     * @param url - The URL for the script tag source.
     * @param loadCB - A callback to be triggered once the script has loaded.
     */addTag(e,t){nf()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{// if we're already closed, don't add this poll
if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,// eslint-disable-next-line @typescript-eslint/no-explicit-any
i.onload=i.onreadystatechange=function(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
let e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(// eslint-disable-next-line @typescript-eslint/no-explicit-any
i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{us("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(e){// TODO: we should make this error visible somehow
}},Math.floor(1))}}let uW=null;"undefined"!=typeof MozWebSocket?uW=MozWebSocket:"undefined"!=typeof WebSocket&&(uW=WebSocket);/**
 * Create a new websocket connection with the given callbacks.
 */class uH{/**
     * @param connId identifier for this transport
     * @param repoInfo The info for the websocket endpoint.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The App Check Token for this client.
     * @param authToken The Auth Token for this client.
     * @param transportSessionId Optional transportSessionId if this is connecting
     * to an existing transport session
     * @param lastSessionId Optional lastSessionId if there was a previous
     * connection
     */constructor(e,t,i,n,r,s,o){this.connId=e,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=uo(this.connId),this.stats_=uF(t),this.connURL=uH.connectionURL_(t,s,o,n,i),this.nodeAdmin=t.nodeAdmin}/**
     * @param repoInfo - The info for the websocket endpoint.
     * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param lastSessionId - Optional lastSessionId if there was a previous connection
     * @returns connection url
     */static connectionURL_(e,t,i,n,r){let s={};return s.v="5",!nf()&&"undefined"!=typeof location&&location.hostname&&uA.test(location.hostname)&&(s.r="f"),t&&(s.s=t),i&&(s.ls=i),n&&(s.ac=n),r&&(s.p=r),uL(e,ux,s)}/**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,// Assume failure until proven otherwise.
h6.set("previous_websocket_failure",!0);try{let e;if(nf()){let t=this.nodeAdmin?"AdminNode":"Node";// UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>
e={headers:{"User-Agent":`Firebase/5/${h2}/${iz.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);// Plumb appropriate http_proxy environment variable into faye-websocket if it exists.
let i={},n=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;n&&(e.proxy={origin:n})}this.mySock=new uW(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}/**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */start(){}static forceDisallow(){uH.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==uW&&!uH.forceDisallow_}/**
     * Returns true if we previously failed to connect with this transport.
     */static previouslyFailed(){// If our persistent storage is actually only in-memory storage,
// we default to assuming that it previously failed to be safe.
return h6.isInMemoryStorage||!0===h6.get("previous_websocket_failure")}markConnectionHealthy(){h6.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=nv(e);//handle the message
this.onMessage(t)}}/**
     * @param frameCount - The number of frames we are expecting from the server
     */handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}/**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @returns Any remaining data to be process, or null if there is none
     */extractFrameCount_(e){// TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
// currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
if(i1(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}/**
     * Process a websocket frame that has arrived from the server.
     * @param mess - The frame data
     */handleIncomingFrame(e){if(null===this.mySock)return;// Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{// try to parse out a frame count, otherwise, assume 1 and process it
let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}/**
     * Send a message to the server
     * @param data - The JSON object to transmit
     */send(e){this.resetKeepAlive();let t=nw(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);//We can only fit a certain amount in each websocket frame, so we need to split this request
//up into multiple pieces if it doesn't fit in one request.
let i=uv(t,16384);i.length>1&&this.sendString_(String(i.length));//Send the actual data in segments.
for(let e=0;e<i.length;e++)this.sendString_(i[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}/**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}/**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive();// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(45e3))}/**
     * Send a string over the websocket.
     *
     * @param str - String to send.
     */sendString_(e){// Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
// calls for some unknown reason.  We treat these as an error and disconnect.
// See https://app.asana.com/0/58926111402292/68021340250410
try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}/**
 * Number of response before we consider the connection "healthy."
 */uH.responsesRequiredToBeHealthy=2,/**
 * Time to wait for the connection te become healthy before giving up.
 */uH.healthyTimeout=3e4;/**
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
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 */class u${/**
     * @param repoInfo - Metadata around the namespace we're connecting to
     */constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[uq,uH]}/**
     * Returns whether transport has been selected to ensure WebSocketConnection or BrowserPollConnection are not called after
     * TransportManager has already set up transports_
     */static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=uH&&uH.isAvailable(),i=t&&!uH.previouslyFailed();if(e.webSocketOnly&&(t||uh("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[uH];else{let e=this.transports_=[];for(let t of u$.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);u$.globalTransportInitialized_=!0}}/**
     * @returns The constructor for the initial transport to use
     */initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}/**
     * @returns The constructor for the next transport, or null
     */upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}// Keeps track of whether the TransportManager has already chosen a transport to use
u$.globalTransportInitialized_=!1;/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 */class uV{/**
     * @param id - an id for this connection
     * @param repoInfo_ - the info for the endpoint to connect to
     * @param applicationId_ - the Firebase App ID for this project
     * @param appCheckToken_ - The App Check Token for this device.
     * @param authToken_ - The auth token for this session.
     * @param onMessage_ - the callback to be triggered when a server-push message arrives
     * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param onDisconnect_ - the callback to be triggered when a connection was lost
     * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */constructor(e,t,i,n,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0/* RealtimeState.CONNECTING */,this.log_=uo("c:"+this.id+":"),this.transportManager_=new u$(t),this.log_("Connection created"),this.start_()}/**
     * Starts a connection attempt
     */start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),// For certain transports (WebSockets), we need to send and receive several messages back and forth before we
// can consider the transport healthy.
this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,/*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */setTimeout(()=>{// this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
this.conn_&&this.conn_.open(t,i)},Math.floor(0));let n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=uk(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()));// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2/* RealtimeState.DISCONNECTED */!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}/**
     * @param dataMsg - An arbitrary data message to be sent to the server
     */sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(// Most likely the session wasn't valid. Abandon the switch attempt
this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=uy("t",e),i=uy("d",e);if("c"===t)this.onSecondaryControl_(i);else if("d"===t)this.pendingDataMessages.push(i);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(// Send a ping to make sure the connection is healthy.
this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){// tell this connection to consider itself open
this.secondaryConn_.start(),// send ack
this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),// send end packet on primary transport, switch to sending on this one
// can receive on this one, buffer responses until end received on primary transport
this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){// Must refer to parsedData properties in quotes, so closure doesn't touch them.
let t=uy("t",e),i=uy("d",e);"c"===t?this.onControl_(i):"d"===t&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),// We don't do anything with data messages, just kick them up a level
this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=uy("t",e);if("d"in e){let i=e.d;if("h"===t){let e=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?// payload in this case is the reason for the shutdown. Generally a human-readable error
this.onConnectionShutdown_(i):"r"===t?this.onReset_(i):"e"===t?ua("Server Error: "+i):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ua("Unknown control packet command: "+t)}}/**
     * @param handshake - The handshake data returned from the server
     */onHandshake_(e){let t=e.ts,i=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0/* RealtimeState.CONNECTING */===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==i&&uh("Protocol version mismatch detected"),// TODO: do we want to upgrade? when? maybe a delay?
this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),// For certain transports (WebSockets), we need to send and receive several messages back and forth before we
// can consider the transport healthy.
this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),// If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
uk(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1/* RealtimeState.CONNECTED */===this.state_?this.close():(// Close whatever connections we have open and start again.
this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1/* RealtimeState.CONNECTED */,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):uk(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1/* RealtimeState.CONNECTED */!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}/**
     * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     */onConnectionLost_(e){this.conn_=null,e||0/* RealtimeState.CONNECTING */!==this.state_?1/* RealtimeState.CONNECTED */===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(h6.remove("host:"+this.repoInfo_.host),// reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),// We intentionally don't want to fire onDisconnect (kill is a different case),
// so clear the callback.
this.onDisconnect_=null,this.close()}sendData_(e){if(1/* RealtimeState.CONNECTED */!==this.state_)throw"Connection is not connected";this.tx_.send(e)}/**
     * Cleans up this connection, calling the appropriate callbacks
     */close(){2/* RealtimeState.DISCONNECTED */!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2/* RealtimeState.DISCONNECTED */,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */class uK{put(e,t,i,n){}merge(e,t,i,n){}/**
     * Refreshes the auth token for the current connection.
     * @param token - The authentication token
     */refreshAuthToken(e){}/**
     * Refreshes the app check token for the current connection.
     * @param token The app check token
     */refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */class uG{constructor(e){this.allowedEvents_=e,this.listeners_={},i1(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}/**
     * To be called by derived classes to trigger events.
     */trigger(e,...t){if(Array.isArray(this.listeners_[e])){// Clone the list, since callbacks could add/remove listeners.
let i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let n=this.getInitialEvent(e);n&&t.apply(i,n)}off(e,t,i){this.validateEventType_(e);let n=this.listeners_[e]||[];for(let e=0;e<n.length;e++)if(n[e].callback===t&&(!i||i===n[e].context)){n.splice(e,1);return}}validateEventType_(e){i1(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 */class uJ extends uG{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||nu()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new uJ}getInitialEvent(e){return i1("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */class uY{/**
     * @param pathOrString - Path string to parse, or another path, or the raw
     * tokens array
     */constructor(e,t){if(void 0===t){this.pieces_=e.split("/");// Remove empty pieces.
let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function uX(){return new uY("")}function uQ(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}/**
 * @returns The number of segments in this path
 */function uZ(e){return e.pieces_.length-e.pieceNum_}function u0(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new uY(e.pieces_,t)}function u1(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}/**
 * Shallow copy of the parts of the path.
 *
 */function u2(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function u4(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)t.push(e.pieces_[i]);return new uY(t,0)}function u9(e,t){let i=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)i.push(e.pieces_[t]);if(t instanceof uY)for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&i.push(e[t])}return new uY(i,0)}/**
 * @returns True if there are no segments in this path
 */function u5(e){return e.pieceNum_>=e.pieces_.length}/**
 * @returns The path from outerPath to innerPath
 */function u6(e,t){let i=uQ(e),n=uQ(t);if(null===i)return t;if(i===n)return u6(u0(e),u0(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}/**
 * @returns true if paths are the same.
 */function u3(e,t){if(uZ(e)!==uZ(t))return!1;for(let i=e.pieceNum_,n=t.pieceNum_;i<=e.pieces_.length;i++,n++)if(e.pieces_[i]!==t.pieces_[n])return!1;return!0}/**
 * @returns True if this path is a parent of (or the same as) other
 */function u8(e,t){let i=e.pieceNum_,n=t.pieceNum_;if(uZ(e)>uZ(t))return!1;for(;i<e.pieces_.length;){if(e.pieces_[i]!==t.pieces_[n])return!1;++i,++n}return!0}/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */class u7{/**
     * @param path - Initial Path.
     * @param errorPrefix_ - Prefix for any error messages.
     */constructor(e,t){this.errorPrefix_=t,this.parts_=u2(e,0),/** Initialize to number of '/' chars needed in path. */this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=nU(this.parts_[e]);ce(this)}}function ce(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ct(e))}/**
 * String for use in error messages - uses '.' notation for path.
 */function ct(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class ci extends uG{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(// Opera 12.10 and Firefox 18 and later support
t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),// Initially, we always assume we are visible. This ensures that in browsers
// without page visibility support or in cases where we are never visible
// (e.g. chrome extension), we act as if we are visible, i.e. don't delay
// reconnects
this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new ci}getInitialEvent(e){return i1("visible"===e,"Unknown event type: "+e),[this.visible_]}}/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */class cn extends uK{/**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param applicationId_ - The Firebase App ID for this project
     * @param onDataUpdate_ - A callback for new data from the server
     */constructor(e,t,i,n,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,// Used for diagnostic logging.
this.id=cn.nextPersistentConnectionId_++,this.log_=uo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,// Before we get connected, we keep a queue of pending messages to send.
this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!nf())throw Error("Auth override specified in options, but not supported on non Node.js platforms");ci.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&uJ.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_(nw(r)),i1(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[n]=i)}get(e){this.initConnection_();let t=new nl,i={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:i,onComplete:e=>{let i=e.d;"ok"===e.s?t.resolve(i):t.reject(i)}}),this.outstandingGetCount_++;let n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(e,t,i,n){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),i1(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),i1(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:n,hashFn:t,query:e,tag:i};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+i+" for "+n);let r={p:i};e.tag&&(r.q=t._queryObject,r.t=e.tag),r./*hash*/h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r./*data*/d,o=r./*status*/s;// print warnings in any case...
cn.warnOnListenWarnings_(s,t);let a=this.listens.get(i)&&this.listens.get(i).get(n);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(i,n),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&nT(e,"w")){// eslint-disable-next-line @typescript-eslint/no-explicit-any
let i=nC(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();uh(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){// NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
// Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
let t=e&&40===e.length;(t||nE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}/**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=nI(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(t,i,t=>{let i=t./*status*/s,n=t./*data*/d||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,n))})}}/**
     * Attempts to authenticate with the given token. If the authentication
     * attempt fails, it's triggered like the token was revoked (the connection is
     * closed).
     */tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e./*status*/s,i=e./*data*/d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}/**
     * @inheritDoc
     */unlisten(e,t){let i=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+n),i1(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let r=this.removeListen_(i,n);r&&this.connected_&&this.sendUnlisten_(i,n,e._queryObject,t)}sendUnlisten_(e,t,i,n){this.log_("Unlisten on "+e+" for "+t);let r={p:e};n&&(r.q=i,r.t=n),this.sendRequest("n",r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,n){let r={p:t,/*data*/d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{n&&setTimeout(()=>{n(e./*status*/s,e./* data */d)},Math.floor(0))})}put(e,t,i,n){this.putInternal("p",e,t,i,n)}merge(e,t,i,n){this.putInternal("m",e,t,i,n)}putInternal(e,t,i,n,r){this.initConnection_();let s={/*path*/p:t,/*data*/d:i};void 0!==r&&(s./*hash*/h=r),// TODO: Only keep track of the most recent put for a given path?
this.outstandingPuts_.push({action:e,request:s,onComplete:n}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(i./*status*/s,i./* data */d)})}reportStats(e){// If we're not connected, we just drop the stats.
if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest(/*stats*/"s",t,e=>{let t=e./*status*/s;if("ok"!==t){let t=e./* data */d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){// this is a response
this.log_("from server: "+nw(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e./*body*/b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t./*path*/p,t./*data*/d,/*isMerge*/!1,t.t):"m"===e?this.onDataUpdate_(t./*path*/p,t./*data*/d,/*isMerge=*/!0,t.t):"c"===e?this.onListenRevoked_(t./*path*/p,t./*query*/q):"ac"===e?this.onAuthRevoked_(t./*status code*/s,t./* explanation */d):"apc"===e?this.onAppCheckRevoked_(t./*status code*/s,t./* explanation */d):"sd"===e?this.onSecurityDebugPacket_(t):ua("Unrecognized action received from server: "+nw(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){i1(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),// NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
// Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_();// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,// Since we don't know if our sent transactions succeeded or not, we need to cancel them.
this.cancelSentTransactions_(),// Clear out the pending requests.
this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){// If we've been connected long enough, reset reconnect delay to minimum.
let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),// Adjust reconnect delay for next time.
this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+cn.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,i())};this.realtime_={close:a,sendRequest:function(e){i1(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{// First fetch auth and app check token, and establish connection after
// fetching the token was successful
let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?us("getToken() completed but was canceled"):(us("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new uV(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,/* onKill= */e=>{uh(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&// But getToken() may also just have temporarily failed, so we still want to
// continue retrying.
uh(e),a())}}}interrupt(e){us("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){us("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nk(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&/*hash*/"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;i=t?t.map(e=>u_(e)).join("$"):"default";let n=this.removeListen_(e,i);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){let i;let n=new uY(e).toString();// normalize path.
if(this.listens.has(n)){let e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){us("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(// We'll wait a couple times before logging the warning / increasing the
// retry period since oauth tokens will report as "invalid" if they're
// just expired. Plus there may be transient issues that resolve themselves.
this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(// Set a long reconnect delay because recovery is unlikely
this.reconnectDelay_=3e4,// Notify the auth token provider that the token is invalid, which will log
// a warning
this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){us("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(// We'll wait a couple times before logging the warning / increasing the
// retry period since oauth tokens will report as "invalid" if they're
// just expired. Plus there may be transient issues that resolve themselves.
this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){// Puts depend on having received the corresponding data update from the server before they complete, so we must
// make sure to send listens before puts.
for(let e of(//Re-authenticate ourselves if we have a credential stored.
this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}/**
     * Sends client stats for first connection
     */sendConnectStats_(){let e={},t="js";nf()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+h2.replace(/\./g,"-")]=1,nu()?e["framework.cordova"]=1:nd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=uJ.getInstance().currentlyOnline();return nk(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0,/**
 * Counter for number of connections created. Mainly used for tagging in the logs
 */cn.nextConnectionId_=0;/**
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
 */class cr{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new cr(e,t)}}/**
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
 */class cs{/**
     * @returns A standalone comparison function for
     * this index
     */getCompare(){return this.compare.bind(this)}/**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     *
     * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
     */indexedValueChanged(e,t){let i=new cr(uf,e),n=new cr(uf,t);return 0!==this.compare(i,n)}/**
     * @returns a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return cr.MIN}}class co extends cs{static get __EMPTY_NODE(){return l}static set __EMPTY_NODE(e){l=e}compare(e,t){return ug(e.name,t.name)}isDefinedOn(e){// We could probably return true here (since every node has a key), but it's never called
// so just leaving unimplemented for now.
throw i2("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1;// The key for a node never changes.
}minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return cr.MIN}maxPost(){// TODO: This should really be created once and cached in a static property, but
// NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
return new cr(up,l)}makePost(e,t){// We just use empty node, but it'll never be compared, since our comparator only looks at name.
return i1("string"==typeof e,"KeyIndex indexValue must always be a string."),new cr(e,l)}/**
     * @returns String representation for inclusion in a query spec
     */toString(){return".key"}}let ca=new co;/**
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
 * An iterator over an LLRBNode.
 */class cl{/**
     * @param node - Node to iterate.
     * @param isReverse_ - Whether or not to iterate in reverse
     */constructor(e,t,i,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){// This node is exactly equal to our start key. Push it on the stack, but stop iterating;
this.nodeStack_.push(e);break}else // This node is greater than our start key, add it to the stack and move to the next one
this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}/**
 * Represents a node in a Left-leaning Red-Black tree.
 */class ch{/**
     * @param key - Key associated with this node.
     * @param value - Value associated with this node.
     * @param color - Whether this node is red.
     * @param left - Left child.
     * @param right - Right child.
     */constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:ch.RED,this.left=null!=n?n:cu.EMPTY_NODE,this.right=null!=r?r:cu.EMPTY_NODE}/**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param key - New key for the node, or null.
     * @param value - New value for the node, or null.
     * @param color - New color for the node, or null.
     * @param left - New left child for the node, or null.
     * @param right - New right child for the node, or null.
     * @returns The node copy.
     */copy(e,t,i,n,r){return new ch(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}/**
     * @returns The total number of nodes in the tree.
     */count(){return this.left.count()+1+this.right.count()}/**
     * @returns True if the tree is empty.
     */isEmpty(){return!1}/**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}/**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}/**
     * @returns The minimum node in the tree.
     */min_(){return this.left.isEmpty()?this:this.left.min_()}/**
     * @returns The maximum key in the tree.
     */minKey(){return this.min_().key}/**
     * @returns The maximum key in the tree.
     */maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}/**
     * @param key - Key to insert.
     * @param value - Value to insert.
     * @param comparator - Comparator.
     * @returns New tree, with the key/value added.
     */insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp_()}/**
     * @returns New tree, with the minimum key removed.
     */removeMin_(){if(this.left.isEmpty())return cu.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}/**
     * @param key - The key of the item to remove.
     * @param comparator - Comparator.
     * @returns New tree, with the specified item removed.
     */remove(e,t){let i,n;if(i=this,0>t(e,i.key))i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===t(e,i.key)){if(i.right.isEmpty())return cu.EMPTY_NODE;n=i.right.min_(),i=i.copy(n.key,n.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}/**
     * @returns Whether this is a RED node.
     */isRed_(){return this.color}/**
     * @returns New tree after performing any needed rotations.
     */fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}/**
     * @returns New tree, after moveRedLeft.
     */moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}/**
     * @returns New tree, after moveRedRight.
     */moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}/**
     * @returns New tree, after rotateLeft.
     */rotateLeft_(){let e=this.copy(null,null,ch.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}/**
     * @returns New tree, after rotateRight.
     */rotateRight_(){let e=this.copy(null,null,ch.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}/**
     * @returns Newt ree, after colorFlip.
     */colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}/**
     * For testing.
     *
     * @returns True if all is well.
     */checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}ch.RED=!0,ch.BLACK=!1;/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */class cu{/**
     * @param comparator_ - Key comparator.
     * @param root_ - Optional root node for the map.
     */constructor(e,t=cu.EMPTY_NODE){this.comparator_=e,this.root_=t}/**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @returns New map, with item added.
     */insert(e,t){return new cu(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ch.BLACK,null,null))}/**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param key - The key to remove.
     * @returns New map, with item removed.
     */remove(e){return new cu(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ch.BLACK,null,null))}/**
     * Returns the value of the node with the given key, or null.
     *
     * @param key - The key to look up.
     * @returns The value of the node with the given key, or null if the
     * key doesn't exist.
     */get(e){let t;let i=this.root_;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key)))return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}/**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param key - The key to find the predecessor of
     * @returns The predecessor key.
     */getPredecessorKey(e){let t,i=this.root_,n=null;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key))){if(i.left.isEmpty()){if(n)return n.key;// first item.
return null}for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}t<0?i=i.left:t>0&&(n=i,i=i.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}/**
     * @returns True if the map is empty.
     */isEmpty(){return this.root_.isEmpty()}/**
     * @returns The total number of nodes in the map.
     */count(){return this.root_.count()}/**
     * @returns The minimum key in the map.
     */minKey(){return this.root_.minKey()}/**
     * @returns The maximum key in the map.
     */maxKey(){return this.root_.maxKey()}/**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */inorderTraversal(e){return this.root_.inorderTraversal(e)}/**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns True if the traversal was aborted.
     */reverseTraversal(e){return this.root_.reverseTraversal(e)}/**
     * Returns an iterator over the SortedMap.
     * @returns The iterator.
     */getIterator(e){return new cl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new cl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new cl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new cl(this.root_,null,this.comparator_,!0,e)}}/**
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
 */function cc(e,t){return ug(e.name,t.name)}function cd(e,t){return ug(e,t)}/**
 * Always use the same empty node, to reduce memory.
 */cu.EMPTY_NODE=new /**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */class{/**
     * Returns a copy of the current node.
     *
     * @returns The node copy.
     */copy(e,t,i,n,r){return this}/**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @param comparator - Comparator.
     * @returns New tree, with item added.
     */insert(e,t,i){return new ch(e,t,null)}/**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param key - The key to remove.
     * @param comparator - Comparator.
     * @returns New tree, with item removed.
     */remove(e,t){return this}/**
     * @returns The total number of nodes in the tree.
     */count(){return 0}/**
     * @returns True if the tree is empty.
     */isEmpty(){return!0}/**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */inorderTraversal(e){return!1}/**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}/**
     * @returns Whether this node is red.
     */isRed_(){return!1}};let cf=function(e){return"number"==typeof e?"number:"+ub(e):"string:"+e},cp=function(e){if(e.isLeafNode()){let t=e.val();i1("string"==typeof t||"number"==typeof t||"object"==typeof t&&nT(t,".sv"),"Priority must be a string or number.")}else i1(e===h||e.isEmpty(),"priority of unexpected type.");i1(e===h||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */class cg{/**
     * @param value_ - The value to store in this leaf node. The object type is
     * possible in the event of a deferred value
     * @param priorityNode_ - The priority of this node.
     */constructor(e,t=cg.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,i1(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),cp(this.priorityNode_)}static set __childrenNodeConstructor(e){u=e}static get __childrenNodeConstructor(){return u}/** @inheritDoc */isLeafNode(){return!0}/** @inheritDoc */getPriority(){return this.priorityNode_}/** @inheritDoc */updatePriority(e){return new cg(this.value_,e)}/** @inheritDoc */getImmediateChild(e){return(// Hack to treat priority as a regular child
".priority"===e?this.priorityNode_:cg.__childrenNodeConstructor.EMPTY_NODE)}/** @inheritDoc */getChild(e){return u5(e)?this:".priority"===uQ(e)?this.priorityNode_:cg.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}/** @inheritDoc */getPredecessorChildName(e,t){return null}/** @inheritDoc */updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:cg.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}/** @inheritDoc */updateChild(e,t){let i=uQ(e);return null===i?t:t.isEmpty()&&".priority"!==i?this:(i1(".priority"!==i||1===uZ(e),".priority must be the last token in a path"),this.updateImmediateChild(i,cg.__childrenNodeConstructor.EMPTY_NODE.updateChild(u0(e),t)))}/** @inheritDoc */isEmpty(){return!1}/** @inheritDoc */numChildren(){return 0}/** @inheritDoc */forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}/** @inheritDoc */hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cf(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=ub(this.value_):e+=this.value_,this.lazyHash_=ue(e)}return this.lazyHash_}/**
     * Returns the value of the leaf node.
     * @returns The value of the node.
     */getValue(){return this.value_}compareTo(e){return e===cg.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof cg.__childrenNodeConstructor?-1:(i1(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}/**
     * Comparison specifically for two leaf nodes
     */compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,n=cg.VALUE_TYPE_ORDER.indexOf(t),r=cg.VALUE_TYPE_ORDER.indexOf(i);return(i1(n>=0,"Unknown leaf type: "+t),i1(r>=0,"Unknown leaf type: "+i),n!==r)?r-n:// Same type, compare values
"object"===i?0:// Note that this works because true > false, all others are number or string comparisons
this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}/**
 * The sort order for comparing leaf nodes of different types. If two leaf nodes have
 * the same type, the comparison falls back to their value
 */cg.VALUE_TYPE_ORDER=["object","boolean","number","string"];let cm=new class extends cs{compare(e,t){let i=e.node.getPriority(),n=t.node.getPriority(),r=i.compareTo(n);return 0===r?ug(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return cr.MIN}maxPost(){return new cr(up,new cg("[PRIORITY-POST]",d))}makePost(e,t){let i=c(e);return new cr(t,new cg("[PRIORITY-POST]",i))}/**
     * @returns String representation for inclusion in a query spec
     */toString(){return".priority"}},cy=Math.log(2);class c_{constructor(e){this.count=parseInt(Math.log(e+1)/cy,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){//noinspection JSBitwiseOperatorUsage
let e=!(this.bits_&1<<this.current_);return this.current_--,e}}/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @param childList - Unsorted list of children
 * @param cmp - The comparison method to be used
 * @param keyFn - An optional function to extract K from a node wrapper, if K's
 * type is not NamedNode
 * @param mapSortFn - An optional override for comparator used by the generated sorted map
 */let cv=function(e,t,i,n){e.sort(t);let r=function(t,n){let s,o;let a=n-t;if(0===a)return null;if(1===a)return s=e[t],o=i?i(s):s,new ch(o,s.node,ch.BLACK,null,null);{// eslint-disable-next-line @typescript-eslint/no-explicit-any
let l=parseInt(a/2,10)+t,h=r(t,l),u=r(l+1,n);return s=e[l],o=i?i(s):s,new ch(o,s.node,ch.BLACK,h,u)}},s=new c_(e.length),o=function(t){let n=null,s=null,o=e.length,a=function(t,n){let s=o-t,a=o;o-=t;let h=r(s+1,a),u=e[s],c=i?i(u):u;l(new ch(c,u.node,n,null,h))},l=function(e){n?n.left=e:s=e,n=e};for(let e=0;e<t.count;++e){let i=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));i?a(n,ch.BLACK):(// current == 2
a(n,ch.BLACK),a(n,ch.RED))}return s}(s);// eslint-disable-next-line @typescript-eslint/no-explicit-any
return new cu(n||t,o)},cw={};class cb{constructor(e,t){this.indexes_=e,this.indexSet_=t}/**
     * The default IndexMap for nodes without a priority
     */static get Default(){return i1(cw&&cm,"ChildrenNode.ts has not been loaded"),f=f||new cb({".priority":cw},{".priority":cm})}get(e){let t=nC(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof cu?t:null}hasIndex(e){return nT(this.indexSet_,e.toString())}addIndex(e,t){let i;i1(e!==ca,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],r=!1,s=t.getIterator(cr.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();i=r?cv(n,e.getCompare()):cw;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=i,new cb(h,l)}/**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     */addToIndexes(e,t){let i=nS(this.indexes_,(i,n)=>{let r=nC(this.indexSet_,n);if(i1(r,"Missing index implementation for "+n),i===cw){// Check to see if we need to index everything
if(!r.isDefinedOn(e.node))return cw;{// We need to build this index
let i=[],n=t.getIterator(cr.Wrap),s=n.getNext();for(;s;)s.name!==e.name&&i.push(s),s=n.getNext();return i.push(e),cv(i,r.getCompare())}}{let n=t.get(e.name),r=i;return n&&(r=r.remove(new cr(e.name,n))),r.insert(e,e.node)}});return new cb(i,this.indexSet_)}/**
     * Create a new IndexMap instance with the given value removed
     */removeFromIndexes(e,t){let i=nS(this.indexes_,i=>{if(i===cw)return i;{let n=t.get(e.name);return n?i.remove(new cr(e.name,n)):i}});return new cb(i,this.indexSet_)}}/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 */class cI{/**
     * @param children_ - List of children of this node..
     * @param priorityNode_ - The priority of this node (as a snapshot node).
     */constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&cp(this.priorityNode_),this.children_.isEmpty()&&i1(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return p||(p=new cI(new cu(cd),null,cb.Default))}/** @inheritDoc */isLeafNode(){return!1}/** @inheritDoc */getPriority(){return this.priorityNode_||p}/** @inheritDoc */updatePriority(e){return this.children_.isEmpty()?this:new cI(this.children_,e,this.indexMap_)}/** @inheritDoc */getImmediateChild(e){// Hack to treat priority as a regular child
if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?p:t}}/** @inheritDoc */getChild(e){let t=uQ(e);return null===t?this:this.getImmediateChild(t).getChild(u0(e))}/** @inheritDoc */hasChild(e){return null!==this.children_.get(e)}/** @inheritDoc */updateImmediateChild(e,t){if(i1(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let i,n;let r=new cr(e,t);t.isEmpty()?(i=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),n=this.indexMap_.addToIndexes(r,this.children_));let s=i.isEmpty()?p:this.priorityNode_;return new cI(i,s,n)}}/** @inheritDoc */updateChild(e,t){let i=uQ(e);if(null===i)return t;{i1(".priority"!==uQ(e)||1===uZ(e),".priority must be the last token in a path");let n=this.getImmediateChild(i).updateChild(u0(e),t);return this.updateImmediateChild(i,n)}}/** @inheritDoc */isEmpty(){return this.children_.isEmpty()}/** @inheritDoc */numChildren(){return this.children_.count()}/** @inheritDoc */val(e){if(this.isEmpty())return null;let t={},i=0,n=0,r=!0;if(this.forEachChild(cm,(s,o)=>{t[s]=o.val(e),i++,r&&cI.INTEGER_REGEXP_.test(s)?n=Math.max(n,Number(s)):r=!1}),e||!r||!(n<2*i))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{// convert to array.
let e=[];// eslint-disable-next-line guard-for-in
for(let i in t)e[i]=t[i];return e}}/** @inheritDoc */hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+cf(this.getPriority().val())+":"),this.forEachChild(cm,(t,i)=>{let n=i.hash();""!==n&&(e+=":"+t+":"+n)}),this.lazyHash_=""===e?"":ue(e)}return this.lazyHash_}/** @inheritDoc */getPredecessorChildName(e,t,i){let n=this.resolveIndex_(i);if(!n)return this.children_.getPredecessorKey(e);{let i=n.getPredecessorKey(new cr(e,t));return i?i.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new cr(t,this.children_.get(t)):null}/**
     * Given an index, return the key name of the largest value we have, according to that index
     */getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new cr(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,cr.Wrap),n=i.peek();for(;null!=n&&0>t.compare(n,e);)i.getNext(),n=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,cr.Wrap),n=i.peek();for(;null!=n&&t.compare(n,e)>0;)i.getNext(),n=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cE?-1:0}withIndex(e){if(e===ca||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new cI(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ca||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(cm),i=e.getIterator(cm),n=t.getNext(),r=i.getNext();for(;n&&r;){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=t.getNext(),r=i.getNext()}return null===n&&null===r}}/**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     */resolveIndex_(e){return e===ca?null:this.indexMap_.get(e.toString())}}cI.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;/**
 * Marker that will sort higher than any other snapshot.
 */let cE=new class extends cI{constructor(){super(new cu(cd),cI.EMPTY_NODE,cb.Default)}compareTo(e){return e===this?0:1}equals(e){// Not that we every compare it, but MAX_NODE is only ever equal to itself
return e===this}getPriority(){return this}getImmediateChild(e){return cI.EMPTY_NODE}isEmpty(){return!1}};/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param json - JSON to create a node for.
 * @param priority - Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 */function cT(e,t=null){if(null===e)return cI.EMPTY_NODE;// Valid leaf nodes include non-objects or server-value wrapper objects
if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),i1(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let i=e;return new cg(i,cT(t))}if(e instanceof Array){let i=cI.EMPTY_NODE;return uw(e,(t,n)=>{if(nT(e,t)&&"."!==t.substring(0,1)){// ignore metadata nodes.
let e=cT(n);(e.isLeafNode()||!e.isEmpty())&&(i=i.updateImmediateChild(t,e))}}),i.updatePriority(cT(t))}{let i=[],n=!1,r=e;if(uw(r,(e,t)=>{if("."!==e.substring(0,1)){// Ignore metadata nodes
let r=cT(t);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),i.push(new cr(e,r)))}}),0===i.length)return cI.EMPTY_NODE;let s=cv(i,cc,e=>e.name,cd);if(!n)return new cI(s,cT(t),cb.Default);{let e=cv(i,cm.getCompare());return new cI(s,cT(t),new cb({".priority":e},{".priority":cm}))}}}Object.defineProperties(cr,{MIN:{value:new cr(uf,cI.EMPTY_NODE)},MAX:{value:new cr(up,cE)}}),/**
 * Reference Extensions
 */co.__EMPTY_NODE=cI.EMPTY_NODE,cg.__childrenNodeConstructor=cI,h=cE,d=cE,c=cT;/**
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
 */class cC extends cs{constructor(e){super(),this.indexPath_=e,i1(!u5(e)&&".priority"!==uQ(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),n=this.extractChild(t.node),r=i.compareTo(n);return 0===r?ug(e.name,t.name):r}makePost(e,t){let i=cT(e),n=cI.EMPTY_NODE.updateChild(this.indexPath_,i);return new cr(t,n)}maxPost(){let e=cI.EMPTY_NODE.updateChild(this.indexPath_,cE);return new cr(up,e)}toString(){return u2(this.indexPath_,0).join("/")}}let ck=new /**
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
 */class extends cs{compare(e,t){let i=e.node.compareTo(t.node);return 0===i?ug(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return cr.MIN}maxPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return cr.MAX}makePost(e,t){let i=cT(e);return new cr(t,i)}/**
     * @returns String representation for inclusion in a query spec
     */toString(){return".value"}};function cS(e,t,i){return{type:"child_changed"/* ChangeType.CHILD_CHANGED */,snapshotNode:t,childName:e,oldSnap:i}}/**
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
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 *
 * @internal
 */class cN{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cm}hasStart(){return this.startSet_}/**
     * @returns True if it would return from left.
     */isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"/* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT */===this.viewFrom_}/**
     * Only valid to call if hasStart() returns true
     */getIndexStartValue(){return i1(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}/**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     */getIndexStartName(){return(i1(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:uf}hasEnd(){return this.endSet_}/**
     * Only valid to call if hasEnd() returns true.
     */getIndexEndValue(){return i1(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}/**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     */getIndexEndName(){return(i1(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:up}hasLimit(){return this.limitSet_}/**
     * @returns True if a limit has been set and it has been explicitly anchored
     */hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}/**
     * Only valid to call if hasLimit() returns true
     */getLimit(){return i1(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cm}copy(){let e=new cN;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}/**
 * Returns a set of REST query string parameters representing this query.
 *
 * @returns query string parameters
 */function cR(e){let t;let i={};if(e.isDefault())return i;if(e.index_===cm?t="$priority"/* REST_QUERY_CONSTANTS.PRIORITY_INDEX */:e.index_===ck?t="$value"/* REST_QUERY_CONSTANTS.VALUE_INDEX */:e.index_===ca?t="$key"/* REST_QUERY_CONSTANTS.KEY_INDEX */:(i1(e.index_ instanceof cC,"Unrecognized index type!"),t=e.index_.toString()),i.orderBy=nw(t),e.startSet_){let t=e.startAfterSet_?"startAfter"/* REST_QUERY_CONSTANTS.START_AFTER */:"startAt"/* REST_QUERY_CONSTANTS.START_AT */;i[t]=nw(e.indexStartValue_),e.startNameSet_&&(i[t]+=","+nw(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore"/* REST_QUERY_CONSTANTS.END_BEFORE */:"endAt"/* REST_QUERY_CONSTANTS.END_AT */;i[t]=nw(e.indexEndValue_),e.endNameSet_&&(i[t]+=","+nw(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?i.limitToFirst=e.limit_:i.limitToLast=e.limit_),i}function cA(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l"/* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT */:"r"/* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT */),t.vf=i}return e.index_!==cm&&(t.i=e.index_.toString()),t}/**
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
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */class cx extends uK{/**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param onDataUpdate_ - A callback for new data from the server
     */constructor(e,t,i,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=n,/** @private {function(...[*])} */this.log_=uo("p:rest:"),/**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         */this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(i1(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}/** @inheritDoc */listen(e,t,i,n){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);// Mark this listener so we can tell if it's removed.
let s=cx.getListenId_(e,i),o={};this.listens_[s]=o;let a=cR(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,/*isMerge=*/!1,i),nC(this.listens_,s)===o&&n(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}/** @inheritDoc */unlisten(e,t){let i=cx.getListenId_(e,t);delete this.listens_[i]}get(e){let t=cR(e._queryParams),i=e._path.toString(),n=new nl;return this.restRequest_(i+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(i,r,/*isMerge=*/!1,/*tag=*/null),n.resolve(r)):n.reject(Error(r))}),n.promise}/** @inheritDoc */refreshAuthToken(e){// no-op since we just always call getToken.
}/**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     */restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(/*forceRefresh=*/!1),this.appCheckTokenProvider_.getToken(/*forceRefresh=*/!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+nA(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=nv(o.responseText)}catch(e){uh("Failed to parse JSON response for "+s+": "+o.responseText)}i(null,e)}else 401!==o.status&&404!==o.status&&uh("Got unsuccessful REST response for "+s+" Status: "+o.status),i(o.status);i=null}},o.open("GET",s,/*asynchronous=*/!0),o.send()})}}/**
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
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 */class cO{constructor(){this.rootNode_=cI.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function cP(){return{value:null,children:new Map}}/**
 * Recursively iterates through all of the stored tree and calls the
 * callback on each one.
 *
 * @param prefixPath - Path to look up node for.
 * @param func - The function to invoke for each tree.
 */function cL(e,t,i){null!==e.value?i(t,e.value):/**
 * Iterates through each immediate child and triggers the callback.
 * Only seems to be used in tests.
 *
 * @param func - The function to invoke for each child.
 */function(e,t){e.children.forEach((e,i)=>{t(i,e)})}(e,(e,n)=>{let r=new uY(t.toString()+"/"+e);cL(n,r,i)})}/**
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
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ - The collection to "listen" to.
 */class cD{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&uw(this.last_,(e,i)=>{t[e]=t[e]-i}),this.last_=e,t}}class cM{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new cD(e),uk(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;uw(e,(e,n)=>{n>0&&nT(this.statsToReport_,e)&&(t[e]=n,i=!0)}),i&&this.server_.reportStats(t),// queue our next run.
uk(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function cU(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cF(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cj(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(b=N||(N={}))[b.OVERWRITE=0]="OVERWRITE",b[b.MERGE=1]="MERGE",b[b.ACK_USER_WRITE=2]="ACK_USER_WRITE",b[b.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
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
 */class cB{/**
     * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
     */constructor(/** @inheritDoc */e,/** @inheritDoc */t,/** @inheritDoc */i){this.path=e,this.affectedTree=t,this.revert=i,/** @inheritDoc */this.type=N.ACK_USER_WRITE,/** @inheritDoc */this.source=cU()}operationForChild(e){if(!u5(this.path))return i1(uQ(this.path)===e,"operationForChild called for unrelated child."),new cB(u0(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)// All child locations are affected as well; just return same operation.
return i1(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new uY(e));return new cB(uX(),t,this.revert)}}}/**
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
 */class cq{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,/** @inheritDoc */this.type=N.OVERWRITE}operationForChild(e){return u5(this.path)?new cq(this.source,uX(),this.snap.getImmediateChild(e)):new cq(this.source,u0(this.path),this.snap)}}/**
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
 */class cz{constructor(/** @inheritDoc */e,/** @inheritDoc */t,/** @inheritDoc */i){this.source=e,this.path=t,this.children=i,/** @inheritDoc */this.type=N.MERGE}operationForChild(e){if(!u5(this.path))return i1(uQ(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cz(this.source,u0(this.path),this.children);{let t=this.children.subtree(new uY(e));return t.isEmpty()?null:t.value?new cq(this.source,uX(),t.value):new cz(this.source,uX(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */class cW{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}/**
     * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
     */isFullyInitialized(){return this.fullyInitialized_}/**
     * Returns whether this node is potentially missing children due to a filter applied to the node
     */isFiltered(){return this.filtered_}isCompleteForPath(e){if(u5(e))return this.isFullyInitialized()&&!this.filtered_;let t=uQ(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * Given changes of a single change type, generate the corresponding events.
 */function cH(e,t,i,n,r,s){let o=n.filter(e=>e.type===i);o.sort((t,i)=>(function(e,t,i){if(null==t.childName||null==i.childName)throw i2("Should only compare child_ events.");let n=new cr(t.childName,t.snapshotNode),r=new cr(i.childName,i.snapshotNode);return e.index_.compare(n,r)})(e,t,i)),o.forEach(i=>{let n=("value"===i.type||"child_removed"===i.type||(i.prevName=s.getPredecessorChildName(i.childName,i.snapshotNode,e.index_)),i);r.forEach(r=>{r.respondsTo(i.type)&&t.push(r.createEvent(n,e.query_))})})}/**
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
 */function c$(e,t){return{eventCache:e,serverCache:t}}function cV(e,t,i,n){return c$(new cW(t,i,n),e.serverCache)}function cK(e,t,i,n){return c$(e.eventCache,new cW(t,i,n))}function cG(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function cJ(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * Singleton empty children collection.
 *
 */let cY=()=>(g||(g=new cu(um)),g);/**
 * A tree with immutable elements.
 */class cX{constructor(e,t=cY()){this.value=e,this.children=t}static fromObject(e){let t=new cX(null);return uw(e,(e,i)=>{t=t.set(new uY(e),i)}),t}/**
     * True if the value is empty and there are no children
     */isEmpty(){return null===this.value&&this.children.isEmpty()}/**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
     * objects on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param relativePath - The remainder of the path
     * @param predicate - The predicate to satisfy to return a node
     */findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:uX(),value:this.value};if(u5(e))return null;{let i=uQ(e),n=this.children.get(i);if(null===n)return null;{let r=n.findRootMostMatchingPathAndValue(u0(e),t);if(null==r)return null;{let e=u9(new uY(i),r.path);return{path:e,value:r.value}}}}}/**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     */findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}/**
     * @returns The subtree at the given path
     */subtree(e){if(u5(e))return this;{let t=uQ(e),i=this.children.get(t);return null!==i?i.subtree(u0(e)):new cX(null)}}/**
     * Sets a value at the specified path.
     *
     * @param relativePath - Path to set value at.
     * @param toSet - Value to set.
     * @returns Resulting tree.
     */set(e,t){if(u5(e))return new cX(t,this.children);{let i=uQ(e),n=this.children.get(i)||new cX(null),r=n.set(u0(e),t),s=this.children.insert(i,r);return new cX(this.value,s)}}/**
     * Removes the value at the specified path.
     *
     * @param relativePath - Path to value to remove.
     * @returns Resulting tree.
     */remove(e){if(u5(e))return this.children.isEmpty()?new cX(null):new cX(null,this.children);{let t=uQ(e),i=this.children.get(t);if(!i)return this;{let n;let r=i.remove(u0(e));return(n=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&n.isEmpty())?new cX(null):new cX(this.value,n)}}}/**
     * Gets a value from the tree.
     *
     * @param relativePath - Path to get value for.
     * @returns Value at path, or null.
     */get(e){if(u5(e))return this.value;{let t=uQ(e),i=this.children.get(t);return i?i.get(u0(e)):null}}/**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param relativePath - Path to replace subtree for.
     * @param newTree - New tree.
     * @returns Resulting tree.
     */setTree(e,t){if(u5(e))return t;{let i;let n=uQ(e),r=this.children.get(n)||new cX(null),s=r.setTree(u0(e),t);return i=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new cX(this.value,i)}}/**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     */fold(e){return this.fold_(uX(),e)}/**
     * Recursive helper for public-facing fold() method
     */fold_(e,t){let i={};return this.children.inorderTraversal((n,r)=>{i[n]=r.fold_(u9(e,n),t)}),t(e,this.value,i)}/**
     * Find the first matching value on the given path. Return the result of applying f to it.
     */findOnPath(e,t){return this.findOnPath_(e,uX(),t)}findOnPath_(e,t,i){let n=!!this.value&&i(t,this.value);if(n)return n;if(u5(e))return null;{let n=uQ(e),r=this.children.get(n);return r?r.findOnPath_(u0(e),u9(t,n),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,uX(),t)}foreachOnPath_(e,t,i){if(u5(e))return this;{this.value&&i(t,this.value);let n=uQ(e),r=this.children.get(n);return r?r.foreachOnPath_(u0(e),u9(t,n),i):new cX(null)}}/**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param f - A function to be called with the path from the root of the tree to
     * a node, and the value at that node. Called in depth-first order.
     */foreach(e){this.foreach_(uX(),e)}foreach_(e,t){this.children.inorderTraversal((i,n)=>{n.foreach_(u9(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */class cQ{constructor(e){this.writeTree_=e}static empty(){return new cQ(new cX(null))}}function cZ(e,t,i){if(u5(t))return new cQ(new cX(i));{let n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){let r=n.path,s=n.value,o=u6(r,t);return s=s.updateChild(o,i),new cQ(e.writeTree_.set(r,s))}{let n=new cX(i),r=e.writeTree_.setTree(t,n);return new cQ(r)}}}function c0(e,t,i){let n=e;return uw(i,(e,i)=>{n=cZ(n,u9(t,e),i)}),n}/**
 * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
 * location, which must be removed by calling this method with that path.
 *
 * @param compoundWrite - The CompoundWrite to remove.
 * @param path - The path at which a write and all deeper writes should be removed
 * @returns The new CompoundWrite with the removed path
 */function c1(e,t){if(u5(t))return cQ.empty();{let i=e.writeTree_.setTree(t,new cX(null));return new cQ(i)}}/**
 * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
 * considered "complete".
 *
 * @param compoundWrite - The CompoundWrite to check.
 * @param path - The path to check for
 * @returns Whether there is a complete write at that path
 */function c2(e,t){return null!=c4(e,t)}/**
 * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
 * writes from deeper paths, but will return child nodes from a more shallow path.
 *
 * @param compoundWrite - The CompoundWrite to get the node from.
 * @param path - The path to get a complete write
 * @returns The node if complete at that path, or null otherwise.
 */function c4(e,t){let i=e.writeTree_.findRootMostValueAndPath(t);return null!=i?e.writeTree_.get(i.path).getChild(u6(i.path,t)):null}/**
 * Returns all children that are guaranteed to be a complete overwrite.
 *
 * @param compoundWrite - The CompoundWrite to get children from.
 * @returns A list of all complete children.
 */function c9(e){let t=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(cm,(e,i)=>{t.push(new cr(e,i))}):e.writeTree_.children.inorderTraversal((e,i)=>{null!=i.value&&t.push(new cr(e,i.value))}),t}function c5(e,t){if(u5(t))return e;{let i=c4(e,t);return new cQ(null!=i?new cX(i):e.writeTree_.subtree(t))}}/**
 * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
 * @returns Whether this CompoundWrite is empty
 */function c6(e){return e.writeTree_.isEmpty()}/**
 * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
 * node
 * @param node - The node to apply this CompoundWrite to
 * @returns The node with all writes applied
 */function c3(e,t){return function e(t,i,n){if(null!=i.value)return n.updateChild(t,i.value);{let r=null;return i.children.inorderTraversal((i,s)=>{".priority"===i?(i1(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):n=e(u9(t,i),s,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(u9(t,".priority"),r)),n}}(uX(),e.writeTree_,t)}/**
 * The default filter used when constructing the tree. Keep everything that's visible.
 */function c8(e){return e.visible}/**
 * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
 * event data at that path.
 */function c7(e,t,i){let n=cQ.empty();for(let r=0;r<e.length;++r){let s=e[r];// Theory, a later set will either:
// a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
// b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
if(t(s)){let e;let t=s.path;if(s.snap)u8(i,t)?n=cZ(n,e=u6(i,t),s.snap):u8(t,i)&&(e=u6(t,i),n=cZ(n,uX(),s.snap.getChild(e)));else if(s.children){if(u8(i,t))n=c0(n,e=u6(i,t),s.children);else if(u8(t,i)){if(u5(e=u6(t,i)))n=c0(n,uX(),s.children);else{let t=nC(s.children,uQ(e));if(t){// There exists a child in this node that matches the root path
let i=t.getChild(u0(e));n=cZ(n,uX(),i)}}}}else throw i2("WriteRecord should have .snap or .children")}}return n}/**
 * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
 * writes), attempt to calculate a complete snapshot for the given path
 *
 * @param writeIdsToExclude - An optional set to be excluded
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */function de(e,t,i,n,r){if(n||r){let s=c5(e.visibleWrites,t);if(!r&&c6(s))return i;// If the server cache is null, and we don't have a complete cache, we need to return null
if(!r&&null==i&&!c2(s,uX()))return null;{let s=c7(e.allWrites,function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(u8(e.path,t)||u8(t,e.path))},t),o=i||cI.EMPTY_NODE;return c3(s,o)}}{let n=c4(e.visibleWrites,t);if(null!=n)return n;{let n=c5(e.visibleWrites,t);if(c6(n))return i;{if(null==i&&!c2(n,uX()))return null;let e=i||cI.EMPTY_NODE;return c3(n,e)}}}}/**
 * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
 * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
 * can lead to a more expensive calculation.
 *
 * @param writeIdsToExclude - Optional writes to exclude.
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */function dt(e,t,i,n){return de(e.writeTree,e.treePath,t,i,n)}/**
 * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
 * mix of the given server data and write data.
 *
 */function di(e,t){return(/**
 * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
 * Used when creating new views, to pre-fill their complete event children snapshot.
 */function(e,t,i){let n=cI.EMPTY_NODE,r=c4(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(cm,(e,t)=>{n=n.updateImmediateChild(e,t)}),n;if(i){// Layer any children we have on top of this
// We know we don't have a top-level set, so just enumerate existing children
let r=c5(e.visibleWrites,t);return i.forEachChild(cm,(e,t)=>{let i=c3(c5(r,new uY(e)),t);n=n.updateImmediateChild(e,i)}),// Add any complete children we have from the set
c9(r).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}{// We don't have anything to layer on top of. Layer on any children we have
// Note that we can return an empty snap if we have a defined delete
let i=c5(e.visibleWrites,t);return c9(i).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}}(e.writeTree,e.treePath,t))}/**
 * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
 * if anything, needs to be applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events should be raised
 *
 * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
 *
 *
 */function dn(e,t,i,n){return(/**
 * Given that the underlying server data has updated, determine what, if anything, needs to be
 * applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events
 *
 * Either existingEventSnap or existingServerSnap must exist
 */function(e,t,i,n,r){i1(n||r,"Either existingEventSnap or existingServerSnap must exist");let s=u9(t,i);if(c2(e.visibleWrites,s))// May need to check visibility while doing the findRootMostValueAndPath call
return null;{// No complete shadowing. We're either partially shadowing or not shadowing at all.
let t=c5(e.visibleWrites,s);return c6(t)?r.getChild(i):c3(t,r.getChild(i))}}(e.writeTree,e.treePath,t,i,n))}/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 *
 */function dr(e,t){var i,n;return i=e.writeTree,n=u9(e.treePath,t),c4(i.visibleWrites,n)}/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */function ds(e,t,i){return(/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */function(e,t,i,n){let r=u9(t,i),s=c4(e.visibleWrites,r);if(null!=s)return s;if(!n.isCompleteForChild(i))return null;{let t=c5(e.visibleWrites,r);return c3(t,n.getNode().getImmediateChild(i))}}(e.writeTree,e.treePath,t,i))}/**
 * Return a WriteTreeRef for a child.
 */function da(e,t){return dl(u9(e.treePath,t),e.writeTree)}function dl(e,t){return{treePath:e,writeTree:t}}/**
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
 */class dh{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;i1("child_added"/* ChangeType.CHILD_ADDED */===t||"child_changed"/* ChangeType.CHILD_CHANGED */===t||"child_removed"/* ChangeType.CHILD_REMOVED */===t,"Only child changes supported for tracking"),i1(".priority"!==i,"Only non-priority child changes can be tracked.");let n=this.changeMap.get(i);if(n){let r=n.type;if("child_added"/* ChangeType.CHILD_ADDED */===t&&"child_removed"/* ChangeType.CHILD_REMOVED */===r)this.changeMap.set(i,cS(i,e.snapshotNode,n.snapshotNode));else if("child_removed"/* ChangeType.CHILD_REMOVED */===t&&"child_added"/* ChangeType.CHILD_ADDED */===r)this.changeMap.delete(i);else if("child_removed"/* ChangeType.CHILD_REMOVED */===t&&"child_changed"/* ChangeType.CHILD_CHANGED */===r)this.changeMap.set(i,{type:"child_removed"/* ChangeType.CHILD_REMOVED */,snapshotNode:n.oldSnap,childName:i});else if("child_changed"/* ChangeType.CHILD_CHANGED */===t&&"child_added"/* ChangeType.CHILD_ADDED */===r)this.changeMap.set(i,{type:"child_added"/* ChangeType.CHILD_ADDED */,snapshotNode:e.snapshotNode,childName:i});else if("child_changed"/* ChangeType.CHILD_CHANGED */===t&&"child_changed"/* ChangeType.CHILD_CHANGED */===r)this.changeMap.set(i,cS(i,e.snapshotNode,n.oldSnap));else throw i2("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * Singleton instance.
 */let du=new /**
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
 * An implementation of CompleteChildSource that never returns any additional children
 */// eslint-disable-next-line @typescript-eslint/naming-convention
class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}};/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 */class dc{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new cW(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ds(this.writes_,e,t)}}getChildAfterChild(e,t,i){var n;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:cJ(this.viewCache_),s=/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window.
 */function(e,t,i,n,r,s,o){let a;let l=c5(e.visibleWrites,t),h=c4(l,uX());if(null!=h)a=h;else{if(null==i)return[];a=c3(l,i)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),i=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o),r=i.getNext();for(;r&&e.length<1;)0!==t(r,n)&&e.push(r),r=i.getNext();return e}}((n=this.writes_).writeTree,n.treePath,r,t,0,i,e);return 0===s.length?null:s[0]}}function dd(e,t,i,n,r,s){let o=t.eventCache;if(null!=dr(n,i))return t;{let a,l;if(u5(i)){if(i1(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){// We need to special case this, because we need to only apply writes to complete children, or
// we might end up raising events for incomplete children. If the server data is filtered deep
// writes cannot be guaranteed to be complete
let i=cJ(t),r=i instanceof cI?i:cI.EMPTY_NODE,o=di(n,r);a=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{let i=dt(n,cJ(t));a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}}else{let h=uQ(i);if(".priority"===h){i1(1===uZ(i),"Can't have a priority with additional path components");let r=o.getNode();l=t.serverCache.getNode();// we might have overwrites for this priority
let s=dn(n,i,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let u;let c=u0(i);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=dn(n,i,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(h).updateChild(c,e):o.getNode().getImmediateChild(h)}else u=ds(n,h,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),h,u,c,r,s):o.getNode()}}return cV(t,a,o.isFullyInitialized()||u5(i),e.filter.filtersNodes())}}function df(e,t,i,n,r,s,o,a){let l;let h=t.serverCache,u=o?e.filter:e.filter.getIndexedFilter();if(u5(i))l=u.updateFullNode(h.getNode(),n,null);else if(u.filtersNodes()&&!h.isFiltered()){// we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
let e=h.getNode().updateChild(i,n);l=u.updateFullNode(h.getNode(),e,null)}else{let e=uQ(i);if(!h.isCompleteForPath(i)&&uZ(i)>1)return t;let r=u0(i),s=h.getNode().getImmediateChild(e),o=s.updateChild(r,n);l=".priority"===e?u.updatePriority(h.getNode(),o):u.updateChild(h.getNode(),e,o,r,du,null)}let c=cK(t,l,h.isFullyInitialized()||u5(i),u.filtersNodes()),d=new dc(r,c,s);return dd(e,c,i,r,d,a)}function dp(e,t,i,n,r,s,o){let a,l;let h=t.eventCache,u=new dc(r,t,s);if(u5(i))l=e.filter.updateFullNode(t.eventCache.getNode(),n,o),a=cV(t,l,!0,e.filter.filtersNodes());else{let r=uQ(i);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),n),a=cV(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=u0(i),c=h.getNode().getImmediateChild(r);if(u5(l))s=n;else{let e=u.getCompleteChild(r);// server will send down the priority in the update, so ignore for now
s=null!=e?".priority"===u1(l)&&e.getChild(u4(l)).isEmpty()?e:e.updateChild(l,n):cI.EMPTY_NODE}if(c.equals(s))a=t;else{let i=e.filter.updateChild(h.getNode(),r,s,l,u,o);a=cV(t,i,h.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function dg(e,t){return e.eventCache.isCompleteForChild(t)}function dm(e,t,i){return i.foreach((e,i)=>{t=t.updateChild(e,i)}),t}function dy(e,t,i,n,r,s,o,a){let l;// If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
// wait for the complete data update coming soon.
if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;// HACK: In the case of a limit query, there may be some changes that bump things out of the
// window leaving room for new items.  It's important we process these changes first, so we
// iterate the changes twice, first processing any that affect items currently in view.
// TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
// and event snap.  I'm not sure if this will result in edge cases when a child is in one but
// not the other.
let h=t;l=u5(i)?n:new cX(null).setTree(i,n);let u=t.serverCache.getNode();return l.children.inorderTraversal((i,n)=>{if(u.hasChild(i)){let l=t.serverCache.getNode().getImmediateChild(i),u=dm(e,l,n);h=df(e,h,new uY(i),u,r,s,o,a)}}),l.children.inorderTraversal((i,n)=>{let l=!t.serverCache.isCompleteForChild(i)&&null===n.value;if(!u.hasChild(i)&&!l){let l=t.serverCache.getNode().getImmediateChild(i),u=dm(e,l,n);h=df(e,h,new uY(i),u,r,s,o,a)}}),h}/**
 * Applies the given Operation, updates our cache, and returns the appropriate events.
 */function d_(e,t,i,n){var r,s;t.type===N.MERGE&&null!==t.source.queryId&&(i1(cJ(e.viewCache_),"We should always have a full cache before handling merges"),i1(cG(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,i,n,r){let s,o;let a=new dh;if(i.type===N.OVERWRITE)i.source.fromUser?s=dp(e,t,i.path,i.snap,n,r,a):(i1(i.source.fromServer,"Unknown source."),// We filter the node if it's a tagged update or the node has been previously filtered  and the
// update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
// again
o=i.source.tagged||t.serverCache.isFiltered()&&!u5(i.path),s=df(e,t,i.path,i.snap,n,r,o,a));else if(i.type===N.MERGE){var l,h;let u;i.source.fromUser?(l=i.path,h=i.children,u=t,h.foreach((i,s)=>{let o=u9(l,i);dg(t,uQ(o))&&(u=dp(e,u,o,s,n,r,a))}),h.foreach((i,s)=>{let o=u9(l,i);dg(t,uQ(o))||(u=dp(e,u,o,s,n,r,a))}),s=u):(i1(i.source.fromServer,"Unknown source."),// We filter the node if it's a tagged update or the node has been previously filtered
o=i.source.tagged||t.serverCache.isFiltered(),s=dy(e,t,i.path,i.children,n,r,o,a))}else if(i.type===N.ACK_USER_WRITE)s=i.revert?function(e,t,i,n,r,s){let o;if(null!=dr(n,i))return t;{let a;let l=new dc(n,t,r),h=t.eventCache.getNode();if(u5(i)||".priority"===uQ(i)){let i;if(t.serverCache.isFullyInitialized())i=dt(n,cJ(t));else{let e=t.serverCache.getNode();i1(e instanceof cI,"serverChildren would be complete if leaf node"),i=di(n,e)}a=e.filter.updateFullNode(h,i,s)}else{let r=uQ(i),u=ds(n,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=h.getImmediateChild(r)),(a=null!=u?e.filter.updateChild(h,r,u,u0(i),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,cI.EMPTY_NODE,u0(i),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&// We might have reverted all child writes. Maybe the old event was a leaf node
(o=dt(n,cJ(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=dr(n,uX()),cV(t,a,o,e.filter.filtersNodes())}}(e,t,i.path,n,r,a):function(e,t,i,n,r,s,o){if(null!=dr(r,i))return t;// Only filter server node if it is currently filtered
let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){// This is an overwrite.
if(u5(i)&&l.isFullyInitialized()||l.isCompleteForPath(i))return df(e,t,i,l.getNode().getChild(i),r,s,a,o);if(!u5(i))return t;{// This is a goofy edge case where we are acking data at this location but don't have full data.  We
// should just re-apply whatever we have in our cache as a merge.
let n=new cX(null);return l.getNode().forEachChild(ca,(e,t)=>{n=n.set(new uY(e),t)}),dy(e,t,i,n,r,s,a,o)}}{// This is a merge.
let h=new cX(null);return n.foreach((e,t)=>{let n=u9(i,e);l.isCompleteForPath(n)&&(h=h.set(e,l.getNode().getChild(n)))}),dy(e,t,i,h,r,s,a,o)}}(e,t,i.path,i.affectedTree,n,r,a);else if(i.type===N.LISTEN_COMPLETE)s=function(e,t,i,n,r){let s=t.serverCache,o=cK(t,s.getNode(),s.isFullyInitialized()||u5(i),s.isFiltered());return dd(e,o,i,n,du,r)}(e,t,i.path,n,a);else throw i2("Unknown operation type: "+i.type);let u=a.getChanges();return function(e,t,i){let n=t.eventCache;if(n.isFullyInitialized()){let r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=cG(e);!(i.length>0)&&e.eventCache.isFullyInitialized()&&(!r||n.getNode().equals(s))&&n.getNode().getPriority().equals(s.getPriority())||i.push({type:"value"/* ChangeType.VALUE */,snapshotNode:cG(t)})}}(t,s,u),{viewCache:s,changes:u}}(e.processor_,o,t,i,n);return r=e.processor_,i1((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),i1(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),i1(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,function(e,t,i,n){let r=n?[n]:e.eventRegistrations_;return(/**
 * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
 * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
 *
 * Notes:
 *  - child_moved events will be synthesized at this time for any child_changed events that affect
 *    our index.
 *  - prevName will be calculated based on the index ordering.
 */function(e,t,i,n){let r=[],s=[];return t.forEach(t=>{if("child_changed"/* ChangeType.CHILD_CHANGED */===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var i;s.push((i=t.childName,{type:"child_moved"/* ChangeType.CHILD_MOVED */,snapshotNode:t.snapshotNode,childName:i}))}}),cH(e,r,"child_removed"/* ChangeType.CHILD_REMOVED */,t,n,i),cH(e,r,"child_added"/* ChangeType.CHILD_ADDED */,t,n,i),cH(e,r,"child_moved"/* ChangeType.CHILD_MOVED */,s,n,i),cH(e,r,"child_changed"/* ChangeType.CHILD_CHANGED */,t,n,i),cH(e,r,"value"/* ChangeType.VALUE */,t,n,i),r}(e.eventGenerator_,t,i,r))}(e,a.changes,a.viewCache.eventCache.getNode(),null)}function dv(e,t,i,n){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return i1(null!=s,"SyncTree gave us an op for an invalid query."),d_(s,t,i,n)}{let r=[];for(let s of e.views.values())r=r.concat(d_(s,t,i,n));return r}}/**
 * @param path - The path to the desired complete snapshot
 * @returns A complete cache, if it exists
 */function dw(e,t){let i=null;for(let n of e.views.values())i=i||function(e,t){let i=cJ(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!u5(t)&&!i.getImmediateChild(uQ(t)).isEmpty())?i.getChild(t):null}(n,t);return i}/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 */class db{/**
     * @param listenProvider_ - Used by SyncTree to start / stop listening
     *   to server data.
     */constructor(e){this.listenProvider_=e,/**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         */this.syncPointTree_=new cX(null),/**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         */this.pendingWriteTree_={visibleWrites:cQ.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}/**
 * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
 *
 * @param revert - True if the given write failed and needs to be reverted
 * @returns Events to raise.
 */function dI(e,t,i=!1){let n=function(e,t){for(let i=0;i<e.allWrites.length;i++){let n=e.allWrites[i];if(n.writeId===t)return n}return null}(e.pendingWriteTree_,t),r=/**
 * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
 * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
 *
 * @returns true if the write may have been visible (meaning we'll need to reevaluate / raise
 * events as a result).
 */function(e,t){// Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
// out of order.
//const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
//assert(validClear, "Either we don't have this write, or it's the first one in the queue");
let i=e.allWrites.findIndex(e=>e.writeId===t);i1(i>=0,"removeWrite called with nonexistent writeId.");let n=e.allWrites[i];e.allWrites.splice(i,1);let r=n.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=i&&function(e,t){if(e.snap)return u8(e.path,t);for(let i in e.children)if(e.children.hasOwnProperty(i)&&u8(u9(e.path,i),t))return!0;return!1}(t,n.path)?r=!1:u8(n.path,t.path)&&(s=!0)),o--}if(!r)return!1;if(s)return e.visibleWrites=c7(e.allWrites,c8,uX()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1,!0;// There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
if(n.snap)e.visibleWrites=c1(e.visibleWrites,n.path);else{let t=n.children;uw(t,t=>{e.visibleWrites=c1(e.visibleWrites,u9(n.path,t))})}return!0}(e.pendingWriteTree_,t);if(!r)return[];{let t=new cX(null);return null!=n.snap?t=t.set(uX(),!0):uw(n.children,e=>{t=t.set(new uY(e),!0)}),dC(e,new cB(n.path,t,i))}}/**
 * Apply new server data for the specified path..
 *
 * @returns Events to raise.
 */function dE(e,t,i){return dC(e,new cq(cF(),t,i))}/**
 * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
 * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
 * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
 *     <incremented total> as the write is applied locally and then acknowledged at the server.
 *
 * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
 *
 * @param path - The path to the data we want
 * @param writeIdsToExclude - A specific set to be excluded
 */function dT(e,t,i){let n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,i)=>{let n=u6(e,t),r=dw(i,n);if(r)return r});return de(n,t,r,i,!0)}/**
 * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
 *
 * NOTES:
 * - Descendant SyncPoints will be visited first (since we raise events depth-first).
 *
 * - We call applyOperation() on each SyncPoint passing three things:
 *   1. A version of the Operation that has been made relative to the SyncPoint location.
 *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
 *   3. A snapshot Node with cached server data, if we have it.
 *
 * - We concatenate all of the events returned by each SyncPoint and return the result.
 */function dC(e,t){var i;return(/**
 * Recursive helper for applyOperationToSyncPoints_
 */function e(t,i,n,r){if(u5(t.path))return(/**
 * Recursive helper for applyOperationToSyncPoints_
 */function e(t,i,n,r){let s=i.get(uX());null==n&&null!=s&&(n=dw(s,uX()));let o=[];return i.children.inorderTraversal((i,s)=>{let a=n?n.getImmediateChild(i):null,l=da(r,i),h=t.operationForChild(i);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(dv(s,t,r,n))),o}(t,i,n,r));{let s=i.get(uX());null==n&&null!=s&&(n=dw(s,uX()));let o=[],a=uQ(t.path),l=t.operationForChild(a),h=i.children.get(a);if(h&&l){let t=n?n.getImmediateChild(a):null,i=da(r,a);o=o.concat(e(l,h,t,i))}return s&&(o=o.concat(dv(s,t,r,n))),o}}(t,e.syncPointTree_,/*serverCache=*/null,(i=e.pendingWriteTree_,dl(uX(),i))))}/**
 * Return the query associated with the given tag, if we have one
 */function dk(e,t){return e.tagToQueryMap.get(t)}/**
 * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
 */function dS(e){let t=e.indexOf("$");return i1(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new uY(e.substr(0,t))}}/**
 * A helper method to apply tagged operations
 */function dN(e,t,i){let n=e.syncPointTree_.get(t);i1(n,"Missing sync point for query tag that we're tracking");let r=dl(t,e.pendingWriteTree_);return dv(n,i,r,null)}/**
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
 */class dR{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new dR(t)}node(){return this.node_}}class dA{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=u9(this.path_,e);return new dA(this.syncTree_,t)}node(){return dT(this.syncTree_,this.path_)}}/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 */let dx=function(e,t,i){return e&&"object"==typeof e?(i1(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?dO(e[".sv"],t,i):"object"==typeof e[".sv"]?dP(e[".sv"],t):void i1(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},dO=function(e,t,i){if("timestamp"===e)return i.timestamp;i1(!1,"Unexpected server value: "+e)},dP=function(e,t,i){e.hasOwnProperty("increment")||i1(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let n=e.increment;"number"!=typeof n&&i1(!1,"Unexpected increment value: "+n);let r=t.node();// Incrementing a non-number sets the value to the incremented amount
if(i1(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;let s=r.getValue();return"number"!=typeof s?n:s+n};function dL(e,t,i){let n;let r=e.getPriority().val(),s=dx(r,t.getImmediateChild(".priority"),i);if(!e.isLeafNode())return n=e,s!==e.getPriority().val()&&(n=n.updatePriority(new cg(s))),e.forEachChild(cm,(e,r)=>{let s=dL(r,t.getImmediateChild(e),i);s!==r&&(n=n.updateImmediateChild(e,s))}),n;{let n=dx(e.getValue(),t,i);return n!==e.getValue()||s!==e.getPriority().val()?new cg(n,cT(s)):e}}/**
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
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */class dD{/**
     * @param name - Optional name of the node.
     * @param parent - Optional parent node.
     * @param node - Optional node to wrap.
     */constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}/**
 * Returns a sub-Tree for the given path.
 *
 * @param pathObj - Path to look up.
 * @returns Tree for path.
 */function dM(e,t){// TODO: Require pathObj to be Path?
let i=t instanceof uY?t:new uY(t),n=e,r=uQ(i);for(;null!==r;){let e=nC(n.node.children,r)||{children:{},childCount:0};n=new dD(r,n,e),r=uQ(i=u0(i))}return n}/**
 * Returns the data associated with this tree node.
 *
 * @returns The data or null if no data exists.
 */function dU(e){return e.node.value}/**
 * Sets data to this tree node.
 *
 * @param value - Value to set.
 */function dF(e,t){e.node.value=t,/**
 * Adds or removes this child from its parent based on whether it's empty or not.
 */function e(t){null!==t.parent&&/**
 * Adds or removes the passed child to this tree node, depending on whether it's empty.
 *
 * @param childName - The name of the child to update.
 * @param child - The child to update.
 */function(t,i,n){let r=void 0===dU(n)&&!dj(n),s=nT(t.node.children,i);r&&s?(delete t.node.children[i],t.node.childCount--,e(t)):r||s||(t.node.children[i]=n.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}/**
 * @returns Whether the tree has any children.
 */function dj(e){return e.node.childCount>0}/**
 * Calls action for each child of this tree node.
 *
 * @param action - Action to be called for each child.
 */function dB(e,t){uw(e.node.children,(i,n)=>{t(new dD(i,e,n))})}/**
 * @returns The path of this tree node, as a Path.
 */function dq(e){return new uY(null===e.parent?e.name:dq(e.parent)+"/"+e.name)}/**
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
 * True for invalid Firebase keys
 */let dz=/[\[\].#$\/\u0000-\u001F\u007F]/,dW=/[\[\].#$\u0000-\u001F\u007F]/,dH=function(e){return"string"==typeof e&&0!==e.length&&!dz.test(e)},d$=function(e){var t;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(t=e)&&0!==t.length&&!dW.test(t)},dV=function(e,t,i){let n=i instanceof uY?new u7(i,e):i;if(void 0===t)throw Error(e+"contains undefined "+ct(n));if("function"==typeof t)throw Error(e+"contains a function "+ct(n)+" with contents = "+t.toString());if(uc(t))throw Error(e+"contains "+t.toString()+" "+ct(n));// Check max leaf size, but try to avoid the utf8 conversion if we can.
if("string"==typeof t&&t.length>10485760/3&&nU(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+ct(n)+" ('"+t.substring(0,50)+"...')");// TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
// to save extra walking of large objects.
if(t&&"object"==typeof t){let i=!1,r=!1;if(uw(t,(t,s)=>{if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!dH(t)))throw Error(e+" contains an invalid key ("+t+") "+ct(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=nU(t),ce(n),dV(e,s,n),function(e){let t=e.parts_.pop();e.byteLength_-=nU(t),e.parts_.length>0&&(e.byteLength_-=1)}(n)}),i&&r)throw Error(e+' contains ".value" child '+ct(n)+" in addition to actual children.")}},dK=function(e,t){// TODO = Validate server better.
let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!dH(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&!d$(i))throw Error(`${e} failed: url argument must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 */class dG{constructor(){this.eventLists_=[],/**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         */this.recursionDepth_=0}}/**
 * Queues the specified events and synchronously raises all events (including previously queued ones) for
 * locations related to the specified change path (i.e. all ancestors and descendants).
 *
 * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
 *
 * @param changedPath - The path to raise events for.
 * @param eventDataList - The events to raise
 */function dJ(e,t,i){!/**
 * @param eventDataList - The new events to queue.
 */function(e,t){// We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
let i=null;for(let n=0;n<t.length;n++){let r=t[n],s=r.getPath();null===i||u3(s,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:s}),i.events.push(r)}i&&e.eventLists_.push(i)}(e,i),function(e,t){e.recursionDepth_++;let i=!0;for(let n=0;n<e.eventLists_.length;n++){let r=e.eventLists_[n];if(r){let s=r.path;t(s)?(/**
 * Iterates through the list and raises each event
 */function(e){for(let t=0;t<e.events.length;t++){let i=e.events[t];if(null!==i){e.events[t]=null;let n=i.getEventRunner();ui&&us("event: "+i.toString()),uT(n)}}}(e.eventLists_[n]),e.eventLists_[n]=null):i=!1}}i&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>u8(e,t)||u8(t,e))}/**
 * A connection to a single data repository.
 */class dY{constructor(e,t,i,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dG,this.nextWriteId_=1,this.interceptServerDataCallback_=null,/** A list of data pieces and paths to be set when this client disconnects. */this.onDisconnect_=cP(),/** Stores queues of outstanding transactions for Firebase locations. */this.transactionQueueTree_=new dD,// TODO: This should be @private but it's used by test_access.js and internal.js
this.persistentConnection_=null,// This key is intentionally not updated if RepoInfo is later changed or replaced
this.key=this.repoInfo_.toURLString()}/**
     * @returns The URL corresponding to the root of this Firebase.
     */toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}/**
 * Generate ServerValues using some variables from the repo object.
 */function dX(e){var t;return(t=t={timestamp:/**
 * @returns The time in milliseconds, taking the server offset into account if we have one.
 */function(e){let t=e.infoData_.getNode(new uY(".info/serverTimeOffset")),i=t.val()||0;return new Date().getTime()+i}(e)}).timestamp=t.timestamp||new Date().getTime(),t}/**
 * Called by realtime when we get new messages from the server.
 */function dQ(e,t,i,n,r){// For testing.
e.dataUpdateCount++;let s=new uY(t);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,i):i;let o=[];if(r){if(n){let t=nS(i,e=>cT(e));o=/**
 * Apply server data to be merged in for the specified tagged query.
 *
 * @returns Events to raise.
 */function(e,t,i,n){let r=dk(e,n);if(!r)return[];{let n=dS(r),s=n.path,o=n.queryId,a=u6(s,t),l=cX.fromObject(i),h=new cz(cj(o),a,l);return dN(e,s,h)}}(e.serverSyncTree_,s,t,r)}else{let t=cT(i);o=/**
 * Apply new server data for the specified tagged query.
 *
 * @returns Events to raise.
 */function(e,t,i,n){let r=dk(e,n);if(null==r)return[];{let n=dS(r),s=n.path,o=n.queryId,a=u6(s,t),l=new cq(cj(o),a,i);return dN(e,s,l)}}(e.serverSyncTree_,s,t,r)}}else if(n){let t=nS(i,e=>cT(e));o=/**
 * Apply new server data to be merged in at the specified path.
 *
 * @returns Events to raise.
 */function(e,t,i){let n=cX.fromObject(i);return dC(e,new cz(cF(),t,n))}(e.serverSyncTree_,s,t)}else{let t=cT(i);o=dE(e.serverSyncTree_,s,t)}let a=s;o.length>0&&// is a proxy for some change having occurred.
(a=d4(e,s)),dJ(e.eventQueue_,a,o)}function dZ(e,t){d0(e,"connected",t),!1===t&&/**
 * Applies all of the changes stored up in the onDisconnect_ tree.
 */function(e){d1(e,"onDisconnectEvents");let t=dX(e),i=cP();cL(e.onDisconnect_,uX(),(n,r)=>{var s;let o=(s=e.serverSyncTree_,dL(r,new dA(s,n),t));!/**
 * Stores the given node at the specified path. If there is already a node
 * at a shallower path, it merges the new data into that snapshot node.
 *
 * @param path - Path to look up snapshot for.
 * @param data - The new data, or null.
 */function e(t,i,n){if(u5(i))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(i,n);else{let r=uQ(i);t.children.has(r)||t.children.set(r,cP());let s=t.children.get(r);e(s,i=u0(i),n)}}(i,n,o)});let n=[];cL(i,uX(),(t,i)=>{n=n.concat(dE(e.serverSyncTree_,t,i));let r=/**
 * Aborts all transactions on ancestors or descendants of the specified path.
 * Called when doing a set() or update() since we consider them incompatible
 * with transactions.
 *
 * @param path - Path for which we want to abort related transactions.
 */function(e,t){let i=dq(d9(e,t)),n=dM(e.transactionQueueTree_,t);return(/**
 * Calls action on each ancestor node.
 *
 * @param action - Action to be called on each parent; return
 *   true to abort.
 * @param includeSelf - Whether to call action on this node as well.
 * @returns true if the action callback returned true.
 */function(e,t,i){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(n,t=>{d3(e,t)}),d3(e,n),/**
 * Does a depth-first traversal of this node's descendants, calling action for each one.
 *
 * @param action - Action to be called for each child.
 * @param includeSelf - Whether to call action on this node as well. Defaults to
 *   false.
 * @param childrenFirst - Whether to call action on children before calling it on
 *   parent.
 */function e(t,i,n,r){n&&!r&&i(t),dB(t,t=>{e(t,i,!0,r)}),n&&r&&i(t)}(n,t=>{d3(e,t)}),i)}(e,t);d4(e,r)}),e.onDisconnect_=cP(),dJ(e.eventQueue_,uX(),n)}(e)}function d0(e,t,i){let n=new uY("/.info/"+t),r=cT(i);e.infoData_.updateSnapshot(n,r);let s=dE(e.infoSyncTree_,n,r);dJ(e.eventQueue_,n,s)}function d1(e,...t){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),us(i,...t)}/**
 * @param excludeSets - A specific set to exclude
 */function d2(e,t,i){return dT(e.serverSyncTree_,t,i)||cI.EMPTY_NODE}/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions. This
 * is the path at which events need to be raised for.
 *
 * @param changedPath - The path in mergedData that changed.
 * @returns The rootmost path that was affected by rerunning transactions.
 */function d4(e,t){let i=d9(e,t),n=dq(i),r=d5(e,i);return(/**
 * Does all the work of rerunning transactions (as well as cleans up aborted
 * transactions and whatnot).
 *
 * @param queue - The queue of transactions to run.
 * @param path - The path the queue is for.
 */function(e,t,i){if(0===t.length)return;// Nothing to do!
// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more transactions or
// sets.
let n=[],r=[],s=t.filter(e=>0/* TransactionStatus.RUN */===e.status),o=s.map(e=>e.currentWriteId);for(let s=0;s<t.length;s++){let a=t[s],l=u6(i,a.path),h=!1,u;if(i1(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4/* TransactionStatus.NEEDS_ABORT */===a.status)h=!0,u=a.abortReason,r=r.concat(dI(e.serverSyncTree_,a.currentWriteId,!0));else if(0/* TransactionStatus.RUN */===a.status){if(a.retryCount>=25)h=!0,u="maxretry",r=r.concat(dI(e.serverSyncTree_,a.currentWriteId,!0));else{// This code reruns a transaction
let i=d2(e,a.path,o);a.currentInputSnapshot=i;let n=t[s].update(i.val());if(void 0!==n){dV("transaction failed: Data returned ",n,a.path);let t=cT(n),s="object"==typeof n&&null!=n&&nT(n,".priority");s||(t=t.updatePriority(i.getPriority()));let l=a.currentWriteId,h=dX(e),u=dL(t,new dR(i),h);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=u,a.currentWriteId=e.nextWriteId_++,// Mutates setsToIgnore in place
o.splice(o.indexOf(l),1),r=(r=r.concat(/**
 * Apply the data changes for a user-generated set() or transaction() call.
 *
 * @returns Events to raise.
 */function(e,t,i,n,r){var s,o;return(s=e.pendingWriteTree_,o=r,i1(n>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:n,visible:o}),o&&(s.visibleWrites=cZ(s.visibleWrites,t,i)),s.lastWriteId=n,r)?dC(e,new cq(cU(),t,i)):[]}(e.serverSyncTree_,a.path,u,a.currentWriteId,a.applyLocally))).concat(dI(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(dI(e.serverSyncTree_,a.currentWriteId,!0))}}dJ(e.eventQueue_,i,r),r=[],h&&(// Abort.
t[s].status=2/* TransactionStatus.COMPLETED */,setTimeout(t[s].unwatcher,Math.floor(0)),t[s].onComplete&&("nodata"===u?n.push(()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot)):n.push(()=>t[s].onComplete(Error(u),!1,null))))}// Clean up completed transactions.
d6(e,e.transactionQueueTree_);// Now fire callbacks, now that we're in a good, known state.
for(let e=0;e<n.length;e++)uT(n[e]);// Try to send the transaction result to the server.
/**
 * Sends any already-run transactions that aren't waiting for outstanding
 * transactions to complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively
 * with a particular transactionQueueTree node to recurse through the tree.
 *
 * @param node - transactionQueueTree node to start at.
 */(function e(t,i=t.transactionQueueTree_){if(i||d6(t,i),dU(i)){let n=d5(t,i);i1(n.length>0,"Sending zero length transaction queue");let r=n.every(e=>0/* TransactionStatus.RUN */===e.status);r&&/**
 * Given a list of run transactions, send them to the server and then handle
 * the result (success or failure).
 *
 * @param path - The location of the queue.
 * @param queue - Queue of transactions under the specified location.
 */function(t,i,n){// Mark transactions as sent and increment retry count!
let r=n.map(e=>e.currentWriteId),s=d2(t,i,r),o=s,a=s.hash();for(let e=0;e<n.length;e++){let t=n[e];i1(0/* TransactionStatus.RUN */===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1/* TransactionStatus.SENT */,t.retryCount++;let r=u6(i,t.path);// If we've gotten to this point, the output snapshot must be defined.
o=o.updateChild(r/** @type {!Node} */,t.currentOutputSnapshotRaw)}let l=o.val(!0);// Send the put.
t.server_.put(i.toString(),l,r=>{d1(t,"transaction put response",{path:i.toString(),status:r});let s=[];if("ok"===r){// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more
// transactions or sets.
let r=[];for(let e=0;e<n.length;e++)n[e].status=2/* TransactionStatus.COMPLETED */,s=s.concat(dI(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&// transaction is complete, it should be set
r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();// Now remove the completed transactions.
d6(t,dM(t.transactionQueueTree_,i)),// There may be pending transactions that we can now send.
e(t,t.transactionQueueTree_),dJ(t.eventQueue_,i,s);// Finally, trigger onComplete callbacks.
for(let e=0;e<r.length;e++)uT(r[e])}else{// transactions are no longer sent.  Update their status appropriately.
if("datastale"===r)for(let e=0;e<n.length;e++)3/* TransactionStatus.SENT_NEEDS_ABORT */===n[e].status?n[e].status=4/* TransactionStatus.NEEDS_ABORT */:n[e].status=0/* TransactionStatus.RUN */;else{uh("transaction at "+i.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4/* TransactionStatus.NEEDS_ABORT */,n[e].abortReason=r}d4(t,i)}},a)}(t,dq(i),n)}else dj(i)&&dB(i,i=>{e(t,i)})})(e,e.transactionQueueTree_)}(e,r,n),n)}/**
 * Returns the rootmost ancestor node of the specified path that has a pending
 * transaction on it, or just returns the node for the given path if there are
 * no pending transactions on any ancestor.
 *
 * @param path - The location to start at.
 * @returns The rootmost node with a transaction.
 */function d9(e,t){let i;// Start at the root and walk deeper into the tree towards path until we
// find a node with pending transactions.
let n=e.transactionQueueTree_;for(i=uQ(t);null!==i&&void 0===dU(n);)n=dM(n,i),i=uQ(t=u0(t));return n}/**
 * Builds the queue of all transactions at or below the specified
 * transactionNode.
 *
 * @param transactionNode
 * @returns The generated queue.
 */function d5(e,t){// Walk any child transaction queues and aggregate them into a single queue.
let i=[];return function e(t,i,n){let r=dU(i);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);dB(i,i=>{e(t,i,n)})}(e,t,i),// Sort them by the order the transactions were created.
i.sort((e,t)=>e.order-t.order),i}/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 */function d6(e,t){let i=dU(t);if(i){let e=0;for(let t=0;t<i.length;t++)2/* TransactionStatus.COMPLETED */!==i[t].status&&(i[e]=i[t],e++);i.length=e,dF(t,i.length>0?i:void 0)}dB(t,t=>{d6(e,t)})}/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param node - Node to abort transactions for.
 */function d3(e,t){let i=dU(t);if(i){// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more transactions
// or sets.
let n=[],r=[],s=-1;for(let t=0;t<i.length;t++)3/* TransactionStatus.SENT_NEEDS_ABORT */===i[t].status||(1/* TransactionStatus.SENT */===i[t].status?(i1(s===t-1,"All SENT items should be at beginning of queue."),s=t,// Mark transaction for abort when it comes back.
i[t].status=3/* TransactionStatus.SENT_NEEDS_ABORT */,i[t].abortReason="set"):(i1(0/* TransactionStatus.RUN */===i[t].status,"Unexpected transaction status in abort"),// We can abort it immediately.
i[t].unwatcher(),r=r.concat(dI(e.serverSyncTree_,i[t].currentWriteId,!0)),i[t].onComplete&&n.push(i[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?dF(t,void 0):i.length=s+1,// Now fire the callbacks.
dJ(e.eventQueue_,dq(t),r);for(let e=0;e<n.length;e++)uT(n[e])}}let d8=function(e,t){let i=d7(e),n=i.namespace;"firebase.com"===i.domain&&ul(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===i.domain||ul("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||uu();let r="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new uP(i.host,i.secure,n,r,t,/*persistenceKey=*/"",/*includeNamespaceInQueryParams=*/n!==i.subdomain),path:new uY(i.pathString)}},d7=function(e){// Default to empty strings in the event of a malformed string.
let t="",i="",n="",r="",s="",o=!0,a="https",l=443;// Don't do any validation here. The caller is responsible for validating the result of parsing.
if("string"==typeof e){// Parse scheme.
let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));// Parse host, path, and query string.
let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(r=/**
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
 */function(e){let t="",i=e.split("/");for(let e=0;e<i.length;e++)if(i[e].length>0){let n=i[e];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(e){}t+="/"+n}return t}(e.substring(u,c)));let d=/**
 * @returns key value hash
 */function(e){let t={};for(let i of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===i.length)continue;let n=i.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):uh(`Invalid query segment '${i}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));// If we have a port, use scheme for determining if it's secure.
(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let f=t.slice(0,h);if("localhost"===f.toLowerCase())i="localhost";else if(f.split(".").length<=2)i=f;else{// Interpret the subdomain of a 3 or more component URL as the namespace name.
let e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),i=t.substring(e+1),// Normalize namespaces to lowercase to share storage / connection.
s=n}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:i,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 * @internal
 */class fe{/**
     * @hideconstructor
     */constructor(e,t,i,n){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=n}get key(){return u5(this._path)?null:u1(this._path)}get ref(){return new ft(this._repo,this._path)}get _queryIdentifier(){let e=cA(this._queryParams),t=u_(e);return"{}"===t?"default":t}/**
     * An object representation of the query parameters used by this Query.
     */get _queryObject(){return cA(this._queryParams)}isEqual(e){if(!((e=nj(e))instanceof fe))return!1;let t=this._repo===e._repo,i=u3(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&i&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(t+="/"+encodeURIComponent(String(e.pieces_[i])));return t||"/"}(this._path)}}/**
 * @internal
 */class ft extends fe{/** @hideconstructor */constructor(e,t){super(e,t,new cN,!1)}get parent(){let e=u4(this._path);return null===e?null:new ft(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}i1(!m,"__referenceConstructor has already been defined"),m=ft,i1(!y,"__referenceConstructor has already been defined"),y=ft;/**
 * Creates and caches `Repo` instances.
 */let fi={};/**
 * Class representing a Firebase Realtime Database.
 */class fn{/** @hideconstructor */constructor(e,/** The {@link @firebase/app#FirebaseApp} associated with this Realtime Database instance. */t){this._repoInternal=e,this.app=t,/** Represents a `Database` instance. */this.type="database",/** Track if the instance has been used (root or repo accessed) */this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,i){if(e.stats_=uF(e.repoInfo_),e.forceRestClient_||uC())e.server_=new cx(e.repoInfo_,(t,i,n,r)=>{dQ(e,t,i,n,r)},e.authTokenProvider_,e.appCheckProvider_),// Minor hack: Fire onConnect immediately, since there's no actual connection.
setTimeout(()=>dZ(e,/* connectStatus= */!0),0);else{// Validate authOverride
if(null!=i){if("object"!=typeof i)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{nw(i)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new cn(e.repoInfo_,t,(t,i,n,r)=>{dQ(e,t,i,n,r)},t=>{dZ(e,t)},t=>{uw(t,(t,i)=>{d0(e,t,i)})},e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),// In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
// we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
e.statsReporter_=function(e,t){let i=e.toString();return uU[i]||(uU[i]=t()),uU[i]}(e.repoInfo_,()=>new cM(e.stats_,e.server_)),// Used for .info.
e.infoData_=new cO,e.infoSyncTree_=new db({startListening:(t,i,n,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=dE(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),d0(e,"connected",!1),e.serverSyncTree_=new db({startListening:(t,i,n,r)=>(e.server_.listen(t,n,i,(i,n)=>{let s=r(i,n);dJ(e.eventQueue_,t._path,s)}),[]),stopListening:(t,i)=>{e.server_.unlisten(t,i)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ft(this._repo,uX())),this._rootInternal}_delete(){return null!==this._rootInternal&&(/**
 * Remove the repo and make sure it is disconnected.
 *
 */function(e,t){let i=fi[t];i&&i[e.key]===e||ul(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ul("Cannot call "+e+" on a deleted database.")}}function fr(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function fs(e){return void 0!==e&&void 0!==e.enterprise}// eslint-disable-next-line @typescript-eslint/no-explicit-any
cn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},// eslint-disable-next-line @typescript-eslint/no-explicit-any
cn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},h2=rc,ra(new nB("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return(/**
 * This function should only ever be called to CREATE a new database instance.
 * @internal
 */function(e,t,i,n,r){var s,o;let a,l,h,u,c=n||e.options.databaseURL;void 0===c&&(e.options.projectId||ul("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),us("Using default host for project ",e.options.projectId),c=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=d8(c,r),f=d.repoInfo;void 0!==iz&&iz.env&&(h=iz.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(u=!0,f=(d=d8(c=`http://${h}?ns=${f.namespace}`,r)).repoInfo):u=!d.repoInfo.secure;let p=r&&u?new uR(uR.OWNER):new uN(e.name,e.options,t);dK("Invalid Firebase Database URL",d),u5(d.path)||ul("Database URL must point to the root of a Firebase Database (not including a child path).");let g=(s=f,o=new uS(e.name,i),(a=fi[e.name])||(a={},fi[e.name]=a),(l=a[s.toURLString()])&&ul("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new dY(s,!1,p,o),a[s.toURLString()]=l,l);return new fn(g,e)}(i,n,r,t))},"PUBLIC"/* ComponentType.PUBLIC */).setMultipleInstances(!0)),rp(h0,h1,void 0),rp(h0,h1,"esm2017"),"function"==typeof SuppressedError&&SuppressedError;class fo{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function fa(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let fl=new ny("auth","Firebase",fa()),fh=new nJ("@firebase/auth");function fu(e,...t){fh.logLevel<=sQ.ERROR&&fh.error(`Auth (${rc}): ${e}`,...t)}/**
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
 */function fc(e,...t){throw ff(e,...t)}function fd(e,...t){return ff(e,...t)}function ff(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return fl.create(e,...t)}function fp(e,t,...i){if(!e)throw ff(t,...i)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function fg(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw fu(t),Error(t)}/**
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
 */function fm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function fy(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */class f_{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||fg("Short delay should be less than long delay!"),this.isMobile=nu()||nd()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===fy()||"https:"===fy()||nc()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
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
 */function fv(e,t){e.emulator||fg("Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class fw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void fg("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void fg("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void fg("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */let fb={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},fI=new f_(3e4,6e4);function fE(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fT(e,t,i,n,r={}){return fC(e,r,async()=>{let r={},s={};n&&("GET"/* HttpMethod.GET */===t?s=n:r={body:JSON.stringify(n)});let o=nA(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(a["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),fw.fetch()(fS(e,e.config.apiHost,i,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function fC(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},fb),t);try{let t=new fN(e),r=await Promise.race([i(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let s=await r.json();if("needConfirmation"in s)throw fR(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,s);if(r.ok&&!("errorMessage"in s))return s;{let t=r.ok?s.errorMessage:s.error.message,[i,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===i)throw fR(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,s);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===i)throw fR(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,s);if("USER_DISABLED"/* ServerError.USER_DISABLED */===i)throw fR(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,s);let a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,i){let n=Object.assign(Object.assign({},fa()),{[t]:i}),r=new ny("auth","Firebase",n);return r.create(t,{appName:e.name})}(e,a,o);fc(e,a)}}catch(t){if(t instanceof nm)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
fc(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function fk(e,t,i,n,r={}){let s=await fT(e,t,i,n,r);return"mfaPendingCredential"in s&&fc(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:s}),s}function fS(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?fv(e.config,r):`${e.config.apiScheme}://${r}`}class fN{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(fd(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),fI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fR(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=fd(e,t,n);return(// We know customData is defined on error because errorParams is defined
r.customData._tokenResponse=i,r)}async function fA(e,t){return fT(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,fE(e,t))}/**
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
 */async function fx(e,t){return fT(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function fO(e,t){return fT(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
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
 */function fP(e){if(e)try{// Convert to date object.
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
 */async function fL(e,t=!1){let i=nj(e),n=await i.getIdToken(t),r=fM(n);fp(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:fP(fD(r.auth_time)),issuedAtTime:fP(fD(r.iat)),expirationTime:fP(fD(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function fD(e){return 1e3*Number(e)}function fM(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return fu("JWT malformed, contained fewer than 3 sections"),null;try{let e=i7(i);if(!e)return fu("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return fu("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */async function fU(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof nm&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */class fF{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
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
 */class fj{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fP(this.lastLoginAt),this.creationTime=fP(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fB(e){var t;let i=e.auth,n=await e.getIdToken(),r=await fU(e,fO(i,{idToken:n}));fp(null==r?void 0:r.users.length,i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let s=r.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,i=fr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],a=function(e,t){let i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,o),l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fj(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&h};Object.assign(e,u)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function fq(e){let t=nj(e);await fB(t),// Even though the current user hasn't changed, update
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
 */async function fz(e,t){let i=await fC(e,{},async()=>{let i=nA({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,s=fS(e,n,"/v1/token"/* Endpoint.TOKEN */,`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",fw.fetch()(s,{method:"POST"/* HttpMethod.POST */,headers:o,body:i})});// The response comes back in snake_case. Convert to camel:
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
 */class fW{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){fp(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),fp(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),fp(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=fM(e);return fp(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),fp(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),fp(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(fp(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await fz(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new fW;return i&&(fp("string"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.refreshToken=i),n&&(fp("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.accessToken=n),r&&(fp("number"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fW,this.toJSON())}_performRefresh(){return fg("not implemented")}}/**
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
 */function fH(e,t){fp("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class f${constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=fr(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new fF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fj(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await fU(this,this.stsTokenManager.getToken(this.auth,e));return fp(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fL(this,e)}reload(){return fq(this)}_assign(e){this!==e&&(fp(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new f$(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
fp(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await fB(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await fU(this,fx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,l,h;let u=null!==(i=t.displayName)&&void 0!==i?i:void 0,c=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:_,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:I}=t;fp(_&&I,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let E=fW.fromJSON(this.name,I);fp("string"==typeof _,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),fH(u,e.name),fH(c,e.name),fp("boolean"==typeof v,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),fp("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),fH(d,e.name),fH(f,e.name),fH(p,e.name),fH(g,e.name),fH(m,e.name),fH(y,e.name);let T=new f$({uid:_,auth:e,email:c,emailVerified:v,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(T.providerData=b.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,i=!1){let n=new fW;n.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let r=new f$({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return(// Updates the user info and data and resolves with a user instance.
await fB(r),r)}}/**
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
 */let fV=new Map;function fK(e){e instanceof Function||fg("Expected a class definition");let t=fV.get(e);return t?t instanceof e||fg("Instance stored in cache mismatched with class"):(t=new e,fV.set(e,t)),t}/**
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
 */class fG{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function fJ(e,t,i){return`firebase:${e}:${t}:${i}`}fG.type="NONE";class fY{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=fJ(this.userKey,n.apiKey,r),this.fullPersistenceKey=fJ("persistence"/* KeyName.PERSISTENCE_USER */,n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?f$._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new fY(fK(fG),e,i);// Eliminate any persistences that are not available
let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||fK(fG),s=fJ(i,e.config.apiKey,e.name),o=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let i of t)try{let t=await i._get(s);if(t){let n=f$._fromJSON(e,t);// throws for unparsable blob (wrong format)
i!==r&&(o=n),r=i;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],o&&// we'll just let it bubble to surface the error.
await r._set(s,o.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new fY(r,e,i)}}/**
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
 */function fX(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(f1(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(fQ(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(f4(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(f9(t))return"Webos"/* BrowserName.WEBOS */;if(fZ(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||f0(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(f2(t))return"Android"/* BrowserName.ANDROID */;let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"/* BrowserName.OTHER */}function fQ(e=nh()){return/firefox\//i.test(e)}function fZ(e=nh()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function f0(e=nh()){return/crios\//i.test(e)}function f1(e=nh()){return/iemobile/i.test(e)}function f2(e=nh()){return/android/i.test(e)}function f4(e=nh()){return/blackberry/i.test(e)}function f9(e=nh()){return/webos/i.test(e)}function f5(e=nh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function f6(e=nh()){// TODO: implement getBrowserName equivalent for OS.
return f5(e)||f2(e)||f9(e)||f4(e)||/windows phone/i.test(e)||f1(e)}/**
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
 */function f3(e,t=[]){let i;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
i=fX(nh());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
i=`${fX(nh())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${i}/JsCore/${rc}/${n}`}/**
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
 */class f8{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
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
 */async function f7(e,t={}){return fT(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,fE(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class pe{constructor(e){var t,i,n,r;// Only include custom strength options defined in the response.
let s=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,s,o;let a={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),// Combine the status into single isValid property.
a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a)}/**
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
 */class pt{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pi(this),this.idTokenSubscription=new pi(this),this.beforeStateQueue=new f8(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fK(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await fY.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
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
let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(null==o?void 0:o.user)&&(n=o.user,r=!0)}// If no user in persistence, there is no current user. Set to null.
if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(fp(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
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
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fB(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?nj(e):null;return t&&fp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fK(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await f7(this),t=new pe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ny("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&fK(e)||this._popupRedirectResolver;fp(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await fY.create(this,[fK(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(fp(o,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
o.then(()=>{s||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,i,n);return()=>{s=!0,r()}}{let i=e.addObserver(t);return()=>{s=!0,i()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return fp(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=f3(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=i);// If the App Check service exists, add the App Check token in the headers
let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){fh.logLevel<=sQ.WARN&&fh.warn(`Auth (${rc}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class pi{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let i=new nL(e,void 0);return i.subscribe.bind(i)}(e=>this.observer=e)}get next(){return fp(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function pn(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,i)=>{var n,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=fd("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,i(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(s)})}function pr(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ps{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=nj(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{fA(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new fo(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;fs(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&fs(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}pn("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function po(e,t,i,n=!1){let r;let s=new ps(e);try{r=await s.verify(i)}catch(e){r=await s.verify(i,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),o}function pa(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function pl(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */class ph{/** @internal */constructor(/**
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
     */toJSON(){return fg("not implemented")}/** @internal */_getIdTokenResponse(e){return fg("not implemented")}/** @internal */_linkToIdToken(e,t){return fg("not implemented")}/** @internal */_getReauthenticationResolver(e){return fg("not implemented")}}async function pu(e,t){return fT(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
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
 */async function pc(e,t){return fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,fE(e,t))}/**
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
 */async function pd(e,t){return fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,fE(e,t))}async function pf(e,t){return fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,fE(e,t))}/**
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
 */class pp extends ph{/** @internal */constructor(/** @internal */e,/** @internal */t,i,/** @internal */n=null){super("password"/* ProviderId.PASSWORD */,i),this._email=e,this._password=t,this._tenantId=n}/** @internal */static _fromEmailAndPassword(e,t){return new pp(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,i=null){return new pp(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,i)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return pc(e,i).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await po(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return pc(e,t)}});{let t=await po(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return pc(e,t)}case"emailLink"/* SignInMethod.EMAIL_LINK */:return pd(e,{email:this._email,oobCode:this._password});default:fc(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return pu(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return pf(e,{idToken:t,email:this._email,oobCode:this._password});default:fc(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pg(e,t){return fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,fE(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class pm extends ph{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new pm(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fc("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=fr(t,["providerId","signInMethod"]);if(!i||!n)return null;let s=new pm(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return pg(e,t)}/** @internal */_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,pg(e,i)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,pg(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nA(t)}return e}}/**
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
 */async function py(e,t){return fT(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,fE(e,t))}async function p_(e,t){return fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,fE(e,t))}async function pv(e,t){let i=await fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,fE(e,t));if(i.temporaryProof)throw fR(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,i);return i}let pw={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function pb(e,t){let i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,fE(e,i),pw)}/**
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
 */class pI extends ph{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new pI({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new pI({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return p_(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return pv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return pb(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new pI({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class pE{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,i,n,r,s,o;let a=nx(nO(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(i=a.oobCode)&&void 0!==i?i:null,u=/**
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
fp(l&&h&&u,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}/**
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
 */function(e){let t=nx(nO(e)).link,i=t?nx(nO(t)).deep_link_id:null,n=nx(nO(e)).deep_link_id,r=n?nx(nO(n)).link:null;return r||n||i||t||e}(e);try{return new pE(t)}catch(e){return null}}}/**
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
 */class pT{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=pT.PROVIDER_ID}/**
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
     */static credential(e,t){return pp._fromEmailAndPassword(e,t)}/**
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
     */static credentialWithLink(e,t){let i=pE.parseLink(t);return fp(i,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),pp._fromEmailAndCode(e,i.code,i.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */pT.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */pT.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */pT.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
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
 */class pC{/**
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
 */class pk extends pC{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
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
 */class pS extends pk{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
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
     */static credential(e){return pm._fromParams({providerId:pS.PROVIDER_ID,signInMethod:pS.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return pS.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return pS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pS.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */pS.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */pS.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
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
 */class pN extends pk{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
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
     */static credential(e,t){return pm._fromParams({providerId:pN.PROVIDER_ID,signInMethod:pN.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return pN.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return pN.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return pN.credential(t,i)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */pN.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */pN.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
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
 */class pR extends pk{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return pm._fromParams({providerId:pR.PROVIDER_ID,signInMethod:pR.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return pR.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return pR.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pR.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */pR.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */pR.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
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
 */class pA extends pk{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return pm._fromParams({providerId:pA.PROVIDER_ID,signInMethod:pA.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return pA.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return pA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return pA.credential(t,i)}catch(e){return null}}}/**
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
 */async function px(e,t){return fk(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,fE(e,t))}/** Always set to {@link SignInMethod}.TWITTER. */pA.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */pA.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
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
 */class pO{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){let r=await f$._fromIdTokenResponse(e,i,n),s=pP(i),o=new pO({user:r,providerId:s,_tokenResponse:i,operationType:t});return o}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,/* reload */!0);let n=pP(i);return new pO({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function pP(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
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
 */class pL extends nm{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,pL.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new pL(e,t,i,n)}}function pD(e,t,i,n){let r="reauthenticate"/* OperationType.REAUTHENTICATE */===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return r.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw pL._fromErrorAndOperation(e,i,t,n);throw i})}async function pM(e,t,i=!1){let n=await fU(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return pO._forOperation(e,"link"/* OperationType.LINK */,n)}/**
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
 */async function pU(e,t,i=!1){let{auth:n}=e,r="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let s=await fU(e,pD(n,r,t,e),i);fp(s.idToken,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o=fM(s.idToken);fp(o,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:a}=o;return fp(e.uid===a,n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),pO._forOperation(e,r,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&fc(n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
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
 */async function pF(e,t,i=!1){let n="signIn"/* OperationType.SIGN_IN */,r=await pD(e,n,t),s=await pO._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}/**
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
 */async function pj(e){let t=nj(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}/**
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
 */async function pB(e,t,i){var n;let r;let s=nj(e),o={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(n=s._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){let e=await po(s,o,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);r=px(s,e)}else r=px(s,o).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await po(s,o,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);return px(s,e)}throw e});let a=await r.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&pj(e),t}),l=await pO._fromIdTokenResponse(s,"signIn"/* OperationType.SIGN_IN */,a);return await s._updateCurrentUser(l.user),l}new WeakMap;let pq="__sak";/**
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
class pz{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(pq,"1"),this.storage.removeItem(pq),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class pW extends pz{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
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
 */function(){let e=nh();return fZ(e)||f5(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=f6(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
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
let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);/** Detects Internet Explorer. */(function(){let e=nh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pW.type="LOCAL";/**
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
 */class pH extends pz{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}pH.type="SESSION";/**
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
 */class p${constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new p$(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:i});let s=Array.from(r).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:i,response:o})}/**
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
 */function pV(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}p$.receivers=[];/**
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
 */class pK{constructor(e){this.target=e,this.handlers=new Set}/**
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
     */async _send(e,t,i=50/* _TimeoutDuration.ACK */){let n,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((o,a)=>{let l=pV("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},i);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(h),n=setTimeout(()=>{a(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(n),o(e.data.response);break;default:clearTimeout(h),clearTimeout(n),a(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
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
 */function pG(){return window}/**
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
 */function pJ(){return void 0!==pG().WorkerGlobalScope&&"function"==typeof pG().importScripts}async function pY(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
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
 */let pX="firebaseLocalStorageDb",pQ="firebaseLocalStorage",pZ="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class p0{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function p1(e,t){return e.transaction([pQ],t?"readwrite":"readonly").objectStore(pQ)}function p2(){let e=indexedDB.open(pX,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(pQ,{keyPath:pZ})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(pQ)?t(i):(// Need to close the database or else you get a `blocked` event
i.close(),await function(){let e=indexedDB.deleteDatabase(pX);return new p0(e).toPromise()}(),t(await p2()))})})}async function p4(e,t,i){let n=p1(e,!0).put({[pZ]:t,value:i});return new p0(n).toPromise()}async function p9(e,t){let i=p1(e,!1).get(t),n=await new p0(i).toPromise();return void 0===n?null:n.value}function p5(e,t){let i=p1(e,!0).delete(t);return new p0(i).toPromise()}class p6{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await p2()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return pJ()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=p$._getInstance(pJ()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let i=await this._poll();return{keyProcessed:i.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await pY(),!this.activeServiceWorker)return;this.sender=new pK(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let i=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await p2();return await p4(e,pq,"1"),await p5(e,pq),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>p4(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>p9(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>p5(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=p1(e,!1).getAll();return new p0(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function p3(e,t,i){var n,r,s;let o=await i.verify();try{let a;if(fp("string"==typeof o,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),fp("recaptcha"===i.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){fp("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},fT(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,fE(e,r)));return i.phoneSessionInfo.sessionInfo}{fp("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;fp(i,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let r=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:o}},fT(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,fE(e,s)));return r.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await py(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{i._reset()}}p6.type="LOCAL",pr("rcb"),new f_(3e4,6e4);/**
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
 */class p8{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=p8.PROVIDER_ID,this.auth=nj(e)}/**
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
     */verifyPhoneNumber(e,t){return p3(this.auth,e,nj(t))}/**
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
     */static credential(e,t){return pI._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return p8.credentialFromTaggedObject(e)}/**
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
     */static credentialFromError(e){return p8.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?pI._fromTokenResponse(t,i):null}}/** Always set to {@link ProviderId}.PHONE. */p8.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */p8.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
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
 */class p7 extends ph{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return pg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pg(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ge(e){return pF(e.auth,new p7(e),e.bypassAuthState)}function gt(e){let{auth:t,user:i}=e;return fp(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),pU(i,new p7(e),e.bypassAuthState)}async function gi(e){let{auth:t,user:i}=e;return fp(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),pM(i,new p7(e),e.bypassAuthState)}/**
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
 */class gn{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return ge;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return gi;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return gt;default:fc(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||fg("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||fg("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */let gr=new f_(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class gs extends gn{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return fp(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||fg("Popup operations only handle one event");let e=pV();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(fd(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(fd(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fd(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,gr.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
gs.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
let go=new Map;class ga extends gn{constructor(e,t,i=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,i),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=go.get(this.auth._key());if(!e){try{let t=await gl(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gl(e,t){let i=fJ("pendingRedirect",t.config.apiKey,t.name),n=fK(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function gh(e,t){go.set(e._key(),t)}async function gu(e,t,i=!1){let n=nj(e),r=t?fK(t):(fp(n._popupRedirectResolver,n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),n._popupRedirectResolver),s=new ga(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class gc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return gf(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!gf(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(fd(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}}function gd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function gf({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function gp(e,t={}){return fT(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
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
 */let gg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gm=/^https?/;async function gy(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await gp(e);for(let e of t)try{if(function(e){let t=fm(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!gm.test(i))return!1;if(gg.test(e))// only contain the IP, no extra character.
return n===e;// Dots in pattern should be escaped.
let r=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(n)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
fc(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
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
 */let g_=new f_(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function gv(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=pG().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let gw=null,gb=new f_(5e3,15e3),gI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gE=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function gT(e){let t=await (gw=gw||new Promise((t,i)=>{var n,r,s;// Function to run when gapi.load is ready.
function o(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
gv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
gv(),i(fd(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:g_.get()})}if(null===(r=null===(n=pG().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=pG().gapi)||void 0===s?void 0:s.load)o();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=pr("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
pG()[t]=()=>{gapi.load?o():i(fd(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},pn(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
gw=null,e)})),i=pG().gapi;return fp(i,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;fp(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let i=t.emulator?fv(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:rc},r=gE.get(e.config.apiHost);r&&(n.eid=r);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${nA(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gI,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let r=fd(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),s=pG().setTimeout(()=>{n(r)},gb.get());// Clear timer and resolve pending iframe ready promise.
    function o(){pG().clearTimeout(s),i(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(o).then(o,()=>{n(r)})}))}/**
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
 */let gC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class gk{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */let gS=encodeURIComponent("fac");async function gN(e,t,i,n,r,s){fp(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),fp(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:rc,eventId:r};if(t instanceof pC)// TODO set additionalParams from the provider as well?
for(let[i,n]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",nk(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[i]=n;if(t instanceof pk){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];// Sets the App Check token to pass to the widget
let a=await e._getAppCheckToken(),l=a?`#${gS}=${encodeURIComponent(a)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?fv(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${nA(o).slice(1)}${l}`}/**
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
 */let gR="webStorageSupport",gA=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pH,this._completeRedirectFn=gu,this._overrideRedirectResult=gh}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,i,n){var r;(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager)||fg("_initialize() not called before _openPopup()");let s=await gN(e,t,i,fm(),n);return function(e,t,i,n=500,r=600){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},gC),{width:n.toString(),height:r.toString(),top:s,left:o}),h=nh().toLowerCase();i&&(a=f0(h)?"_blank":i),fQ(h)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let u=Object.entries(l).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=nh()){var t;return f5(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",a),new gk(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let c=window.open(t||"",a,u);fp(c,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{c.focus()}catch(e){}return new gk(c)}(e,s,pV())}async _openRedirect(e,t,i,n){await this._originValidation(e);let r=await gN(e,t,i,fm(),n);return pG().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||fg("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await gT(e),i=new gc(e);return t.register("authEvent",t=>{fp(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let n=i.onEvent(t.authEvent);return{status:n?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){let i=this.iframes[e._key()];i.send(gR,{type:gR},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[gR];void 0!==r&&t(!!r),fc(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return f6()||fZ()||f5()}};class gx{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,i);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return fg("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class gO extends gx{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new gO(e)}/** @internal */_finalizeEnroll(e,t,i){return fT(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,fE(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return fT(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,fE(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class gP extends gx{constructor(e,t,i){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=i}/** @internal */static _fromSecret(e,t){return new gP(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new gP(t,e)}/** @internal */async _finalizeEnroll(e,t,i){return fp(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),fT(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,fE(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){fp(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let i={verificationCode:this.otp};return fT(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,fE(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class gL{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,i,n,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new gL(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var i;let n=!1;return(gD(e)||gD(t))&&(n=!0),n&&(gD(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),gD(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function gD(e){return void 0===e||(null==e?void 0:e.length)===0}var gM="@firebase/auth",gU="1.3.0";/**
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
 */class gF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let gj=na("authIdTokenMaxAge")||300,gB=null,gq=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>gj)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let r=null==i?void 0:i.token;gB!==r&&(gB=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};I="Browser"/* ClientPlatform.BROWSER */,ra(new nB("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=i.options;fp(s&&!s.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:i.name});let a={apiKey:s,authDomain:o,clientPlatform:I,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:f3(I)},l=new pt(i,n,r,a);return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(fK);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,i)=>{let n=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);n.initialize()})),ra(new nB("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=nj(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new gF(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),rp(gM,gU,/**
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
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(I)),rp(gM,gU,"esm2017");// Ініціалізація Firebase
let gz=rd({apiKey:"AIzaSyBbyJ1YQ4-GD4N0lhO_z3BVagmCNn0IKFk",authDomain:"bookshelf-ee661.firebaseapp.com",databaseURL:"https://bookshelf-ee661-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-ee661",storageBucket:"bookshelf-ee661.appspot.com",messagingSenderId:"956258341440",appId:"1:956258341440:web:ca611f9dfc8a224323c5a5",measurementId:"G-WDP0VVBWDK"});!/* eslint-disable @typescript-eslint/no-explicit-any *//**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e=rf()){e=nj(e);// Dependencies
let t=rl(e,sg);t.isInitialized()?t.getImmediate():/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e,t={}){// Dependencies
let i=rl(e,sg);if(i.isInitialized()){let e=i.getImmediate();if(nN(t,i.getOptions()))return e;throw s_.create("already-initialized"/* AnalyticsError.ALREADY_INITIALIZED */)}let n=i.initialize({options:t});return n}(e)}(gz);let gW=/**
 * Returns the instance of the Realtime Database SDK that is associated
 * with the provided {@link @firebase/app#FirebaseApp}. Initializes a new instance with
 * with default settings if no instance exists or if the existing instance uses
 * a custom database URL.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned Realtime
 * Database instance is associated with.
 * @param url - The URL of the Realtime Database instance to connect to. If not
 * provided, the SDK connects to the default instance of the Firebase App.
 * @returns The `Database` instance of the provided app.
 */function(e=rf(),t){let i=rl(e,"database").getImmediate({identifier:void 0});if(!i._instanceStarted){let e=ns("database");e&&/**
 * Modify the provided instance to communicate with the Realtime Database
 * emulator.
 *
 * <p>Note: This method must be called before performing any other operation.
 *
 * @param db - The instance to modify.
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 8080)
 * @param options.mockUserToken - the mock auth token to use for unit testing Security Rules
 */function(e,t,i,n={}){var r;let s;(e=nj(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ul("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;if(o.repoInfo_.nodeAdmin)n.mockUserToken&&ul('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new uR(uR.OWNER);else if(n.mockUserToken){let t="string"==typeof n.mockUserToken?n.mockUserToken:/**
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[i8(JSON.stringify({alg:"none",type:"JWT"})),i8(JSON.stringify(s)),""].join(".")}(n.mockUserToken,e.app.options.projectId);s=new uR(t)}r=s,o.repoInfo_=new uP(`${t}:${i}`,/* secure= */!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,/*isUsingEmulator=*/!0),r&&(o.authTokenProvider_=r)}(i,...e)}return i}(gz),gH=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=rf()){let t=rl(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
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
 */function(e,t){let i=rl(e,"auth");if(i.isInitialized()){let e=i.getImmediate(),n=i.getOptions();if(nN(n,null!=t?t:{}))return e;fc(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let n=i.initialize({options:t});return n}(e,{popupRedirectResolver:gA,persistence:[p6,pW,pH]}),n=na("authTokenSyncURL");if(n){let e=gq(n);nj(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),nj(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let r=nr("auth");return r&&/**
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
 */function(e,t,i){let n=nj(e);fp(n._canInitEmulator,n,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),fp(/^https?:\/\//.test(t),n,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let r=!!(null==i?void 0:i.disableWarnings),s=pa(t),{host:o,port:a}=function(e){let t=pa(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);// Strip out "username:password@".
if(r){let e=r[1];return{host:e,port:pl(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:pl(t)}}}(t),l=null===a?"":`:${a}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${r}`),i}();document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("[data-auth-open]"),t=document.querySelector(".auth-btn-close"),i=document.querySelector(".auth-backdrop"),n=document.querySelector(".auth-form"),r=document.querySelector(".auth-button-signup"),s=n.querySelector('input[name="user_name"]'),o=n.querySelector('input[name="user_email"]'),a=n.querySelector('input[name="user_password"]');e.addEventListener("click",// Відкриття/закриття вікна
function(){i.style.display="block",document.querySelector(".auth").style.visibility="visible",s.value="",o.value="",a.value=""}),t.addEventListener("click",function(){i.style.display="none"}),// Реєстрація користувача при натисканні кнопки SIGN UP
r.addEventListener("click",async e=>{e.preventDefault();let t=s.value,i=o.value;a.value,pB(gH,email,password).then(e=>{let n=e.user;set(ref(gW,"users/"+n.uid),{userName:t,userEmail:i}),onCloseModalLogin(),Notify.success("Користувач зареєстрован!")}).catch(e=>{e.code,e.message});// async function addUserToFirebase(userData) {
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
var g$=document.querySelector(".auth-button-in"),gV=document.querySelector(".auth-input");g$.addEventListener("click",function(){gV&&gV.remove()}),P("E6hPi")}();//# sourceMappingURL=index.4e7ea666.js.map

//# sourceMappingURL=index.4e7ea666.js.map
