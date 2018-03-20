"use strict";!function(){function e(e){r()}function t(e){a()}function o(){return h.classList.add("loaded"),setTimeout(function(e){h.querySelector(".loader").remove()},1e3),!0}function n(e,t){"scratch2"==t&&r(e)}function r(e){kenrobot.postMessage("app:projectOpen","scratch2",e).then(function(e){w={path:e.path,project_name:e.project_name},_.loadProject(e.data),w.project_name&&_.setProjectName(w.project_name),kenrobot.view.project=e.data,kenrobot.trigger("util","message","打开成功")},function(e){kenrobot.trigger("util","message",{text:"打开失败",type:"error"})})}function a(e){var t=function(t){w.path?_.exportProject(e):e||!w.project_name?kenrobot.trigger("prompt","show",{title:"项目保存",placeholder:"项目名字",callback:function(t){t?(w.project_name=t,_.setProjectName(w.project_name),_.exportProject(e)):kenrobot.trigger("util","message",{text:"保存失败",type:"error"})}}):(w.project_name&&_.setProjectName(w.project_name),_.exportProject(e))};kenrobot.user||e||w.hasShowSave?t():(w.hasShowSave=!0,kenrobot.trigger("save","show",t))}function c(e,t){if(j){var o=kenrobot.view.project&&kenrobot.view.project!==e;j(o),j=null}else(t?kenrobot.postMessage("app:projectSaveAs",w.project_name,e,"scratch2"):kenrobot.postMessage("app:projectSave",w.project_name,e,"scratch2",w.path)).then(function(e){(w=Object.assign(w,e)).project_name&&_.setProjectName(w.project_name),kenrobot.trigger("util","message","保存成功"),kenrobot.view.project=e.data,v&&v(),v=null},function(e){kenrobot.trigger("util","message",{text:"保存失败",type:"error"}),v=null})}function s(e){j=e,_.exportProject()}function i(e){v=e,_.exportProject()}function l(){var e=[{key:["ctrl+n","command+n"],callback:function(e){return u("new-project")}},{key:["ctrl+o","command+o"],callback:function(e){return u("open-project")}},{key:["ctrl+s","command+s"],callback:function(e){return u("save-project")}},{key:["ctrl+shift+s","command+shift+s"],callback:function(e){return u("save-as-project")}}];kenrobot.delayTrigger(100,"shortcut","register",e)}function u(e){switch(e){case"new-project":w={},_.newProject();break;case"open-project":r(arguments.length<=1?void 0:arguments[1]);break;case"save-project":a();break;case"save-as-project":a(!0);break;case"is-project-changed":s(arguments.length<=1?void 0:arguments[1]);break;case"save-project-before-quit":i(arguments.length<=1?void 0:arguments[1]);break;case"undelete":_.undelete();break;case"toggle-samll-stage":_.toggleSmallStage();break;case"toggle-turbo-mode":_.toggleTurboMode();break;case"edit-block-colors":_.editBlockColors()}}function p(e){D=e,_.onSerialPortReady()}function d(e,t){D&&D==e&&U(t)}function g(e){D&&D==e&&(D=null,kenrobot.trigger("util","message",{text:"串口已断开",type:"error"}),_.onSerialPortClose())}function U(e){P.length>30&&(P=[]);for(var t=0;t<e.length;t++)if(P.push(e[t]),!(P.length<2)&&(85==P[P.length-1]&&255==P[P.length-2]&&(C=!0,K=P.length-2),13==P[P.length-1]&&C)){C=!1;var o=K+4,n=P[o],r=P[++o];o++;var a;switch(r){case 1:a=P[o],o++;break;case 2:a=b(P,o),o+=4;break;case 3:a=T(P,o),o+=2;break;case 4:var c=P[o];a=E(P,++o,c),o+=c;break;case 5:a=f(P,o),o+=4;break;case 6:a=O(P,o),o+=4}k(n,r,a),P=[]}}function k(e,t,o){t>6||t<0?_.responseValue():e==y.TUDOU_IR?(o=o>0?o:65536+o,_.responseValue(o)):_.responseValue(o)}function m(e){var t=new DataView(new ArrayBuffer(e.length));return e.forEach(function(e,o){return t.setUint8(o,e)}),t}function b(e,t){return m(e.slice(t,t+4)).getFloat32(0,!0)}function f(e,t){return b(e,t)}function O(e,t){return m(e.slice(t,t+4)).getInt32(0,!0)}function T(e,t){return m(e.slice(t,t+2)).getInt16(0,!0)}function E(e,t,o){return e.slice(t,t+o).map(function(e){return String.fromCharCode(e)}).join("")}var h,_,j,v,D,S=function(){function e(e){if(!o&&("onreadystatechange"!==e.type||"complete"===document.readyState)){for(var n=0;n<t.length;n++)t[n].call(document);o=!0,t=null}}var t=[],o=!1;return document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),document.addEventListener("readystatechange",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",e),window.attachEvent("onload",e)),function(e){o?e.call(document):t.push(e)}}(),w={},y={TUDOU_MOVE:52,TUDOU_STOP:53,TUDOU_BATTERY:54,TUDOU_OBSTACLE:55,TUDOU_TRACKING:56,TUDOU_LED:57,TUDOU_BUZZER:58,TUDOU_IR:59,TUDOU_SERVO:60,TUDOU_RGBLED:61,KEDOU_MOVE:62,KEDOU_STOP:63,KEDOU_BATTERY:64,KEDOU_OBSTACLE:65,KEDOU_TRACKING:66,KEDOU_VOICE:67},R={GET:1,RUN:2,RESET:4,START:5},P=(y.TUDOU_MOVE,y.TUDOU_STOP,y.TUDOU_BATTERY,y.TUDOU_OBSTACLE,y.TUDOU_TRACKING,y.TUDOU_LED,y.TUDOU_BUZZER,y.TUDOU_IR,y.TUDOU_SERVO,y.TUDOU_RGBLED,y.KEDOU_MOVE,y.KEDOU_STOP,y.KEDOU_BATTERY,y.KEDOU_OBSTACLE,y.KEDOU_TRACKING,y.KEDOU_VOICE,[]),C=!1,K=0;S(function(){window.kenrobot=window.kenrobot||top.kenrobot,_=document.getElementById("ken-scratch");var r=(h=document.querySelector(".player")).querySelector(".toolbar");window.JSeditorReady=o,kenrobot&&!kenrobot.isPC||r.remove(),kenrobot&&(kenrobot.isPC||(r.querySelector(".open").addEventListener("click",e),r.querySelector(".save").addEventListener("click",t)),kenrobot.view.saveProject=c,kenrobot.viewType="scratch2",l(),kenrobot.on("app","command",u).on("project","open-by",n).on("serial","ready",p).on("serial","data",d).on("serial","close",g))})}();