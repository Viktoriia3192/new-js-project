!function(){var t,e,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=o.parcelRequired7c6;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},o.parcelRequired7c6=a),a("6JpON"),a("knWGd");let r={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{let t=window.scrollY||document.documentElement.scrollTop;t>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};r.addEventListener();var s={};t=void 0!==o?o:"undefined"!=typeof window?window:s,e=function(t){// COMMON: SSR check: begin
if(void 0===t&&void 0===t.document)return!1;// COMMON: Variables: end
// NOTIFY: Default Settings: begin
var e,o={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},i={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},n=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},a=function(e){return e||(e="head"),null!==t.document[e]||(n('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},r=function(e,o){// check doc head
if(!a("head"))return!1;// internal css
if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}},s=function(){// variables
var t={},e=!1,o=0;// loop through each object and conduct a merge
for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);o<arguments.length;o++)!function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=s(t[i],o[i]):t[i]=o[i])}(arguments[o]);return t},l=function(e){var o=t.document.createElement("div");return o.innerHTML=e,o.textContent||o.innerText||""},c=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,m=function(n,r,c,m){// check doc body
if(!a("body"))return!1;e||d.Notify.init({});// create a backup for new settings
var p=s(!0,e,{});// check callbackOrOptions and options: begin
if("object"==typeof c&&!Array.isArray(c)||"object"==typeof m&&!Array.isArray(m)){// new options
var y={};"object"==typeof c?y=c:"object"==typeof m&&(y=m),// extend new settings with the new options
e=s(!0,e,y)}// check callbackOrOptions and options: end
// notify type
var u=e[n.toLocaleLowerCase("en")];// notify counter
f++,"string"!=typeof r&&(r="Notiflix "+n),e.plainText&&(r=l(r)),!e.plainText&&r.length>e.messageMaxLength&&(// extend settings for error massege
e=s(!0,e,{closeButton:!0,messageMaxLength:150}),// error message
r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>e.messageMaxLength&&(r=r.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(u.fontAwesomeIconColor=u.background),e.cssAnimation||(e.cssAnimationDuration=0);// if cssAnimaion is false => duration: end
// notify wrap: begin
var x=t.document.getElementById(i.wrapID)||t.document.createElement("div");// wrap position: end
// if background overlay is true: begin
if(x.id=i.wrapID,x.style.width=e.width,x.style.zIndex=e.zindex,x.style.opacity=e.opacity,"center-center"===e.position?(x.style.left=e.distance,x.style.top=e.distance,x.style.right=e.distance,x.style.bottom=e.distance,x.style.margin="auto",x.classList.add("nx-flex-center-center"),x.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.justifyContent="center",x.style.alignItems="center",x.style.pointerEvents="none"):"center-top"===e.position?(x.style.left=e.distance,x.style.right=e.distance,x.style.top=e.distance,x.style.bottom="auto",x.style.margin="auto"):"center-bottom"===e.position?(x.style.left=e.distance,x.style.right=e.distance,x.style.bottom=e.distance,x.style.top="auto",x.style.margin="auto"):"right-bottom"===e.position?(x.style.right=e.distance,x.style.bottom=e.distance,x.style.top="auto",x.style.left="auto"):"left-top"===e.position?(x.style.left=e.distance,x.style.top=e.distance,x.style.right="auto",x.style.bottom="auto"):"left-bottom"===e.position?(x.style.left=e.distance,x.style.bottom=e.distance,x.style.top="auto",x.style.right="auto"):(x.style.right=e.distance,x.style.top=e.distance,x.style.left="auto",x.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(i.overlayID)||t.document.createElement("div");g.id=i.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=u.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(i.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(i.wrapID)||t.document.body.appendChild(x);// notify wrap: end
// notify content: begin
var b=t.document.createElement("div");b.id=e.ID+"-"+f,b.className=e.className+" "+u.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof c?"nx-with-close-button":"")+" "+("function"==typeof c?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),b.style.fontSize=e.fontSize,b.style.color=u.textColor,b.style.background=u.background,b.style.borderRadius=e.borderRadius,b.style.pointerEvents="all",e.rtl&&(b.setAttribute("dir","rtl"),b.classList.add("nx-rtl-on")),// rtl: end
// font-family: begin
b.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(b.style.animationDuration=e.cssAnimationDuration+"ms");// use css animation: end
// close button element: begin
var h="";// close buttpon element: end
// use icon: begin
if(e.closeButton&&"function"!=typeof c&&(h='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+u.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon){// use font awesome
if(e.useFontAwesome)b.innerHTML='<i style="color:'+u.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+u.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(e.closeButton?h:"");else{var w="";n===o.Success?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===o.Failure?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===o.Warning?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===o.Info&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),b.innerHTML=w+'<span class="nx-message nx-with-icon">'+r+"</span>"+(e.closeButton?h:"")}}else b.innerHTML='<span class="nx-message">'+r+"</span>"+(e.closeButton?h:"");// use icon: end
// notify content: end
// notify append or prepend: begin
if("left-bottom"===e.position||"right-bottom"===e.position){var v=t.document.getElementById(i.wrapID);v.insertBefore(b,v.firstChild)}else t.document.getElementById(i.wrapID).appendChild(b);// notify append or prepend: end
// remove by timeout or click: begin
var k=t.document.getElementById(b.id);if(k){// hide notify elm and hide overlay: begin
var N,C,I=function(){k.classList.add("nx-remove");var e=t.document.getElementById(i.overlayID);e&&x.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(N)},W=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),x.childElementCount<=0&&null!==x.parentNode){x.parentNode.removeChild(x);var e=t.document.getElementById(i.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(C)};// if callbackOrOptions or click to close: end
// else auto remove: begin
if(e.closeButton&&"function"!=typeof c&&t.document.getElementById(b.id).querySelector("span.nx-close-button").addEventListener("click",function(){I();var t=setTimeout(function(){W(),clearTimeout(t)},e.cssAnimationDuration)}),("function"==typeof c||e.clickToClose)&&k.addEventListener("click",function(){"function"==typeof c&&c(),I();var t=setTimeout(function(){W(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof c){// auto remove: begin
var z=function(){N=setTimeout(function(){I()},e.timeout),C=setTimeout(function(){W()},e.timeout+e.cssAnimationDuration)};z(),e.pauseOnHover&&(k.addEventListener("mouseenter",function(){k.classList.add("nx-paused"),clearTimeout(N),clearTimeout(C)}),k.addEventListener("mouseleave",function(){k.classList.remove("nx-paused"),z()}));// pause auto remove: end
}// else auto remove: end
}// remove by timeout or click: end
// notify - show only the last one: begin
if(e.showOnlyTheLastOne&&f>0)for(var A=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+f+"])"),E=0;E<A.length;E++){var L=A[E];null!==L.parentNode&&L.parentNode.removeChild(L)}// notify - show only the last one: end
// extend new settings with the backup settings
e=s(!0,e,p)},d={Notify:{// Init
init:function(t){// extend options
e=s(!0,i,t),// internal css if exist
r(c,"NotiflixNotifyInternalCSS")},// Merge First Init
merge:function(t){// if initialized already
if(!e)return n("You have to initialize the Notify module before call Merge function."),!1;e=s(!0,e,t)},// Success
success:function(t,e,i){m(o.Success,t,e,i)},// Failure
failure:function(t,e,i){m(o.Failure,t,e,i)},// Warning
warning:function(t,e,i){m(o.Warning,t,e,i)},// Info
info:function(t,e,i){m(o.Info,t,e,i)}}};return"object"==typeof t.Notiflix?s(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],function(){return e(t)}):"object"==typeof s?s=e(t):t.Notiflix=e(t);var l=a("dIxxU");async function c(t){try{let e=await (0,l.default).get("https://books-backend.p.goit.global/books/"+t);return e.data}catch(t){console.error("An error occurred while fetching data:",t)}}async function f(){let{data:t}=await (0,l.default).get("https://books-backend.p.goit.global/books/category-list");return t}let m=document.querySelector(".categories-list");(async function t(){try{let t=await f();if(!t.length){(0,s.Notify).failure("Oops something going wrong.");return}m.insertAdjacentHTML("beforeend",t.map(({list_name:t})=>`
    <li class="categories-list-item">
      <a href="#" class="categories-link">${t}</a>
    </li>
  `).join(""))}catch(t){console.log("TRY-CATCH:",t),(0,s.Notify).failure("Oops something going wrong.")}})(),m.addEventListener("click",t=>{t.preventDefault()}),a("ksGdE");let d=(t,e)=>{try{let o=JSON.stringify(e);localStorage.setItem(t,o)}catch(t){console.error("Set state error: ",t.message)}},p=t=>{try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}};!function(){let t=document.querySelector(".loader");t.style.display="block"}();let y=document.querySelector(".common-list"),u=document.querySelector(".main-title"),x=document.querySelector(".categories-list"),g=window.innerWidth<767?1:window.innerWidth<1439?3:5;function b(t){u.textContent="Best Sellers",function(){let t=document.querySelector(".loader");t.style.display="none"}();let e="";for(let o of t){let{books:t,list_name:i}=o;e+=` 
        <li class="common-item">
        <h2 class="common-title">${i}</h2>
        <ul class="book-list">
            ${function(t,e){let o="";for(let i=0;i<e;i+=1){let{book_image:e,title:n,author:a,_id:r}=t[i];o+=`
              <li class="book-item" data-id="${r}">
             
              <a href="#" class="book-link"> 
              <div class="thumb">
              <img src="${e||"../images/default_image.jpg"}" alt="${n}" class="book-img" data-id="${r}">
              <p class="notification">quick view</p>
              </div> 
              <h3 class="book-title">${n}</h3>
              <p class="book-author">${a}</p>
              </a>
              </li>
            `}return o}(t,g)}
        </ul>
        <button type="button" class="showMore-btn" name="${i}">see more</button>
    </li>`}y.innerHTML=e}x.firstElementChild.addEventListener("click",function(){let t=p("data");console.log(t),b(t)}),window.addEventListener("resize",function(){let t=window.innerWidth<767?1:window.innerWidth<1439?3:5;if(t!=g){g=t;let e=p("data");b(e)}}),c("top-books").then(t=>{d("data",t),b(t)}).catch(t=>console.log(t));var l=a("dIxxU"),h=a("6JpON");let w={categories:document.querySelector(".categories-list"),title:document.querySelector(".main-title"),list:document.querySelector(".common-list")},v="Sorry, there are no books matching the selected category. Please select something else.",k="Sorry, something went wrong. Try again!";w.categories.addEventListener("click",function(t){"categories-link"===t.target.className&&(E(t.target),N=t.target.textContent.replaceAll(" ","%20"),t.target!==w.categories.firstElementChild.firstElementChild&&I(N).then(t=>{if(0===t.data.length)throw Error((0,h.Notify).info(v));let e=t.data[0].list_name;w.title.textContent=z(e),w.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${A(e)}</span>`),w.list.innerHTML=W(t.data)}).catch(function(t){t.response?(0,h.Notify).failure(k):t.request&&(0,h.Notify).failure(k)}))}),w.list.addEventListener("click",function(t){"showMore-btn"===t.target.className&&(console.log(t.target),I(t.target.name.replaceAll(" ","%20")).then(t=>{if(0===t.data.length)throw Error((0,h.Notify).info(v));let e=t.data[0].list_name;w.title.textContent=z(e),w.title.insertAdjacentHTML("beforeend",`&nbsp;<span class="main-title main-title-wrapper">${A(e)}</span>`),w.list.innerHTML=W(t.data)}).catch(function(t){t.response?(0,h.Notify).failure(k):t.request&&(0,h.Notify).failure(k)}))});let N="",C=w.categories.firstElementChild.firstElementChild;async function I(t){let e=`https://books-backend.p.goit.global/books/category?category=${t}`,o=await (0,l.default).get(e);return o}function W(t){return t.map(({book_image:t,author:e,title:o,_id:i})=>{let n=`<li class="book-item" data-id="${i}">
            <a href="#" class="book-link">
                <img class="book-img" src="${t||"../images/default_image.jpg"}" data-id="${i}" alt="${o}"> 
                <h3 class="book-title">${o}</h3>
                <p class="book-author">${e}</p>
            </a>
        </li>`;return n}).join("")}function z(t){let e=t.split(" ");return e.splice(0,e.length-1).join(" ")}function A(t){let e=t.split(" ");return e[e.length-1]}function E(t){C&&C.classList.remove("category-active"),t.classList.add("category-active"),C=t}E(C),a("fxge8"),// import { initializeApp } from "firebase/app";
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
a("E6hPi")}();//# sourceMappingURL=index.66a83be5.js.map

//# sourceMappingURL=index.66a83be5.js.map
