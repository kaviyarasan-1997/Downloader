const as = {};
 as.stylePopup = function(){
   var im = '@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");';
   var key = '@keyframes AsPopup-popup--animation{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes AsPopup-popup--animation{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes AsPopup-popup-icon--rotate{to{transform: rotateY(720deg)}}@-webkit-keyframes AsPopup-popup-icon--rotate{to{transform: rotateY(720deg)}}@keyframes Aspopup-toast-toast--bottom{12.5%{margin-bottom: 20px;}25%{transform:rotate(-1deg);}37.5%{transform:rotate(1deg);}50%{transform:rotate(-1deg);}62.5%{transform:rotate(1deg);}75%{transform:rotate(-1deg);}87.5%{transform:rotate(1deg);}100%{transform:rotate(0deg);margin-bottom: 20px;}}@-webkit-keyframes Aspopup-toast-toast--bottom{12.5%{margin-bottom: 20px;}25%{transform:rotate(-1deg);}37.5%{transform:rotate(1deg);}50%{transform:rotate(-1deg);}62.5%{transform:rotate(1deg);}75%{transform:rotate(-1deg);}87.5%{transform:rotate(1deg);}100%{transform:rotate(0deg);margin-bottom: 20px;}}@keyframes Aspopup-toast-toast--top{12.5%{margin-top: 20px;}25%{transform:rotate(-1deg);}37.5%{transform:rotate(1deg);}50%{transform:rotate(-1deg);}62.5%{transform:rotate(1deg);}75%{transform:rotate(-1deg);}87.5%{transform:rotate(1deg);}100%{transform:rotate(0deg);margin-top: 20px;}}@-webkit-keyframes Aspopup-toast-toast--top{12.5%{margin-top: 20px;}25%{transform:rotate(-1deg);}37.5%{transform:rotate(1deg);}50%{transform:rotate(-1deg);}62.5%{transform:rotate(1deg);}75%{transform:rotate(-1deg);}87.5%{transform:rotate(1deg);}100%{transform:rotate(0deg);margin-top: 20px;}}';
   var s1 = '.AsPopup-popup{min-width: 270px;width: 32em;max-width: 90%;max-height: 95%;background: #fff;padding: 20px;transform: scale(0);transition: all 0.3s;position: relative;border-radius: 5px;box-sizing: border-box;text-align: center;overflow: auto;animation: AsPopup-popup--animation 1 0.75s forwards;-webkit-animation: AsPopup-popup--animation 1 0.75s forwards;scrollbar-width: thin;}.AsPopup-popup::-webkit-scrollbar {width: 6px;}.AsPopup-popup::-webkit-scrollbar-track {background-color: transparent;border-radius: 5px;}.AsPopup-popup::-webkit-scrollbar-thumb{border-radius: 5px;background: grey;box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);}.AsPopup-popup *{box-sizing: border-box;font-family: "Lato";line-height: normal;}.AsPopup-popup-title{display: block;text-align: center;font-weight: 600;font-size: 32px;color: rgb(84,84,84);overflow-wrap: break-word;margin-bottom: 2px;margin-top: 5px;}.AsPopup-popup-text{color: #545454;font-size: 18px;max-height: 70%;word-wrap: break-word;overflow: auto;margin: 1em 1.6em .6em;font-weight: normal;}.AsPopup-popup-overlay{position: fixed;bottom: 0px;right: 0px;top: 0px;left: 0px;height: 100%;width: 100vw;background: rgba(0,0,0,0.4);display: flex;justify-content: center;align-items: center;transition: all 0.3s;z-index: 999999999999999999999999999;}';
   var s2 = '.AsPopup-popup-footer{display: flex;flex-wrap: wrap;justify-content: center;user-select: none;-ms-user-select: none;-webkit-user-select: none;-moz-user-select: none;padding-top: 6px;}.AsPopup-popup-footer button{background-color: rgb(84,104,255);border: 0;color: #fff;padding: 9px 22px 12px;font-size: 15px;border-radius: 3px;margin: 5px;cursor: pointer;display: flex;justify-content: center;align-items: center;transition: all 0.3s;}.AsPopup-popup-footer button:active{transform: scale(0.8);}.AsPopup-popup-icon{height: 120px !important;width: 100% !important;user-select: none;-ms-user-select: none;-webkit-user-select: none;-moz-user-select: none;display: flex;justify-content: center;text-align: center;transition: all 1s;animation: AsPopup-popup-icon--rotate 1 2s forwards;font-size: 30px;-webkit-animation: AsPopup-popup-icon--rotate 1 2s forwards;font-size: 30px;}.AsPopup-popup-icon svg{height: auto !important;width: auto !important;fill: auto !important;stroke: auto !important;}.AsPopup-popup-image{width: 100%;margin-bottom: 10px;}.Aspopup-toast-toast{box-sizing: border-box;width: auto;max-width: 100%;word-wrap: break-word;padding: 12px 25px;background: #323232;color: #fff;transition: all 0.4s;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);user-select: none;-ms-user-select: none;-webkit-user-select: none;-moz-user-select: none;font-family: "Lato";z-index: 999999999999999999999999999999;}.Aspopup-toast-top{animation: Aspopup-toast-toast--top 1 1.5s forwards;-webkit-animation: Aspopup-toast-toast--top 1 1.5s forwards;}.Aspopup-toast-bottom{animation: Aspopup-toast-toast--bottom 1 1.5s forwards;-webkit-animation: Aspopup-toast-toast--bottom 1 1.5s forwards;}';
   if (document.head) {
     document.head.innerHTML += "<style>"+im+key+s1+s2+"</style>"
   } else {
     document.documentElement.innerHTML += "<style>"+im+key+s1+s2+"</style>";
   }
 }
 as.stylePopup();
 as.popup = function(o){
  var popup = document.createElement("div");
  popup.setAttribute("class","AsPopup-popup");
  var title = document.createElement("div");
  title.setAttribute("class","AsPopup-popup-title");
  var html = document.createElement("div");
  html.setAttribute("style","margin-top: 12px; margin-bottom: 5px;");
  var text = document.createElement("div");
  text.setAttribute("class","AsPopup-popup-text");
  var overlay = document.createElement("div");
  overlay.setAttribute("class","AsPopup-popup-overlay");
  var closeIcon = document.createElement("button");
  closeIcon.setAttribute("style","position: absolute;top: 0;right: 2px;background: none;border: 0;height: 40px;width: 40px;display: flex;justify-content: center;align-items: center;cursor: pointer;");
  closeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#505050"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
  var footer = document.createElement("div");
  footer.setAttribute("class","AsPopup-popup-footer");
  if(o.color){
   title.style.color = o.color;
   text.style.color = o.color;
  }
  if(o.titleColor){
   title.style.color = o.titleColor;
  }
  if(o.textColor){
   text.style.color = o.textColor;
  }
  if(o.font){
   title.style.fontFamily = o.font;
   text.style.fontFamily = o.font;
   html.style.fontFamily = o.font;
  }
  if(o.position){
   if(o.position == "top-left"){
    overlay.style.alignItems = "flex-start";
    overlay.style.justifyContent = "flex-start";
    popup.style.marginTop = "20px";
    popup.style.marginLeft = "15px";
   }
   if (o.position == "top-center") {
     overlay.style.alignItems = "flex-start";
     overlay.style.justifyContent = "center";
     popup.style.marginTop = "20px";
   }
   if (o.position == "top-right") {
     overlay.style.alignItems = "flex-start";
     overlay.style.justifyContent = "flex-end";
     popup.style.marginTop = "20px";
     popup.style.marginRight = "15px";
   }
   if (o.position == "bottom-left") {
     overlay.style.alignItems = "flex-end";
     overlay.style.justifyContent = "flex-start";
     popup.style.marginBottom = "20px";
     popup.style.marginLeft = "15px";
   }
   if (o.position == "bottom-center") {
     overlay.style.alignItems = "flex-end";
     overlay.style.justifyContent = "center";
     popup.style.marginBottom = "20px";
   }
   if (o.position == "bottom-right") {
     overlay.style.alignItems = "flex-end";
     overlay.style.justifyContent = "flex-end";
     popup.style.marginBottom = "20px";
     popup.style.marginRight = "15px";
   }
  }
  if(o.background){
   popup.style.background = o.background;
  }
  if(o.overlayBackground){
   overlay.style.background = o.overlayBackground;
  }
   var icon = document.createElement("div");
   icon.setAttribute("class","AsPopup-popup-icon");
  if(o.icon){
    var img = o.icon;
    var h;
    if(img == "success"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(16,185,129)"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>';
    }else if(img == "error"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(239,68,68)"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>';
    }else if(img == "warning"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(245,158,11)"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
    }else if(img == "info"){
        h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0088ff"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>';
    }else if(img == "question"){
      h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(233,30,99)"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>';
    }else if(img == "none"){
      h = '';
      icon.style.display = "none";
    }else{
      h = '<img src="'+img+'" style="margin-bottom: 5px;height: 120px;width: 120px;border-radius: 50%;"/>';
    }
    icon.innerHTML = h;
    popup.appendChild(icon);
  }
  if(o.emoji){
    var ico = document.createElement("div");
    ico.setAttribute("style","text-align: center;font-size: 64px  ;margin-bottom: 8px;user-select: none;-ms-user-select: none;-webkit-user-select: none;-moz-user-select: none;");
    ico.innerText = o.emoji;
    popup.appendChild(ico);
  }
  if(o.image){
   var img = document.createElement("img");
   img.setAttribute("src",o.image);
   img.setAttribute("class","AsPopup-popup-image");
   if (o.imageHeight) {
     img.style.height = o.imageHeight+"px";
   }
   if (o.imageWidth) {
     img.style.width = o.imageWidth+"px";
   }
   if (o.imageAlt) {
     img.setAttribute("alt", o.imageAlt);
   }
   popup.appendChild(img);
  }
  if(o.title){
   title.innerText = o.title;
   popup.appendChild(title);
  }
  if(o.text){
   text.innerText = o.text;
   popup.appendChild(text);
  }
  if(o.buttons){
   var btns = o.buttons;
   for(x in btns){
    var b = btns[x];
    var btn = document.createElement("button");
    if(b.html){
    btn.innerHTML = b.html;
    }  
    if(b.color){
     btn.style.color = b.color;
    }
    if(o.font){
     btn.style.fontFamily = o.font;
    }
    if(b.id){
     btn.setAttribute("id",b.id);
    }
    if(b.bg){
     btn.style.backgroundColor = b.bg;
    }
    if(b.type){
     var bg;
     if(b.type == "success"){
      bg = "rgb(16,185,129)";
     }else if(b.type == "info"){
       bg = "#0088ff";
     }else if(b.type == "warning"){
       bg = "rgb(245,158,11)";
     }else if(b.type == "error"){
       bg = "#dc3741";
     }else if(b.type == "dark"){
       bg = "#637881";
     }else if(b.type == "question"){
       bg = "rgb(233,30,99)";
     }else{
     }
     btn.style.backgroundImage = "none";
     btn.style.backgroundColor = bg;
    }
    if(b.click){
      btn.addEventListener("click",b.click);
    }
    if(b.close != false){
      btn.addEventListener("click", function(){
        close.click();
      });
    }
    footer.appendChild(btn);
   }
  }
  if(o.width){
   popup.style.width = o.width+"px";
  }
  if(o.padding){
   popup.style.padding = o.padding;
  }
  if(o.titleSize){
   title.style.fontSize = o.titleSize+"px";
  }
  if(o.textSize){
   text.style.fontSize = o.textSize+"px";
  }
   var close = document.createElement("button");
   close.innerHTML = "Close";
   close.addEventListener("click", function(){
     overlay.style.opacity = "0";
     overlay.style.visibility = "hidden";
     setTimeout(function(){
       try{document.documentElement.removeChild(overlay);}catch(e){};
      },400);
   });
  if(o.closeIcon){
    closeIcon.addEventListener("click",function (){
      close.click();
    });
    popup.appendChild(closeIcon);
    popup.style.paddingTop = "43px";
  }
  if(o.html){
    html.innerHTML = o.html;
    popup.appendChild(html);
  }
  if(o.script){
    var script = document.createElement("script");
    script.innerText = o.script;
    popup.appendChild(script);
  }
  if(o.closeBtn != false){
   footer.appendChild(close);
  }
  if(o.timer){
    setTimeout(function (){
     close.click();
    },o.timer);
  }
  popup.addEventListener("click",function(event){
    event.stopPropagation();
  });
  overlay.addEventListener("click",function(){
  if(o.overlayClick != false){
    close.click();
  }
  });
  popup.appendChild(footer);
  document.addEventListener("keyup", function(e){
   if (e.keyCode == 27){
     overlay.click();
   }
  });
  overlay.appendChild(popup);
  close.focus();
  document.documentElement.appendChild(overlay);
 };
 as.alert = function(o){
  var txt,ic,tt;
   if(typeof o == "object"){
    if(o.title){tt = o.title}
    if(o.text){txt = o.text}
    if(o.icon == true){ic = "warning";}else{ic = "none"}
       as.popup({
        title: tt,
        text: txt,
        image: o.image,
        closeBtn: false,
        icon: ic,
        buttons: [{html: "OK",click: o.onOk,type:"success"}],
        overlayClick: false
       });
     }
 }
 as.confirm = function(o){
  var i,cbt,obt;
  if(o.icon == true){i = "question";}else{i = "none"}
  if(o.cancelBtnHtml == undefined || o.cancelBtnHtml.trim() == ""){cbt = "Cancel"}else{cbt = o.cancelBtnHtml;}
  if(o.okBtnHtml == undefined || o.okBtnHtml.trim() == ""){obt = "OK"}else{obt = o.okBtnHtml;}
  as.popup({
    title: o.title,
    text: o.text,
    image: o.image,
    closeBtn: false,
    icon: i,
    buttons: [{ html: cbt, click: o.onCancel,type: "error"}, { html: obt, click: o.onConfirm,type: "success"}],
    overlayClick: false
  });
 }
 as.prompt = function(o){
   var i;
  if(o.value == undefined){o.value = ""}
  if(o.placeholder == undefined){o.placeholder = ""}
  if(o.icon == true){i = "question";}else{i = "none"}
  var cbt,obt,cos;
  if(o.closeOnSubmit == false){cos = false}else{cos = true}
  if(o.cancelBtnHtml == undefined || o.cancelBtnHtml.trim() == ""){cbt = "Cancel"}else{cbt = o.cancelBtnHtml;}
  if(o.submitBtnHtml == undefined || o.submitBtnHtml.trim() == ""){obt = "Submit"}else{obt = o.submitBtnHtml;}
  as.popup({
    title: o.title,
    icon: i,
    html: "<div style='display:flex;justify-content:center;'><input type='text' style='width: 95%;display: block;padding: 8px 8px;border-radius: 4px;border: 2px solid #0088;outline: none;font-size:16px;' id='Aspopup-popup--prompt--input' placeholder='"+o.placeholder+"' value='"+o.value+"'/></div>",
    image: o.image,
    text: o.text,
    overlayClick: false,
    closeBtn: false,
    buttons: [{ html: cbt, click: o.onCancel,type: "error",id: "Aspopup-prompt-cancelBtn"}, { html: obt, click: function() { o.onSubmit(document.getElementById("Aspopup-popup--prompt--input").value), function(){}}, type: "success" , close: cos}]
  });
  if(o.cancelBtn == false){
    document.getElementById("Aspopup-prompt-cancelBtn").style.display = "none";
  }
  document.getElementById("Aspopup-popup--prompt--input").addEventListener("keyup", function(event){
     if(event.keyCode == 13){
      event.preventDefault();
      o.onSubmit(this.value);
      this.blur();
      if(cos == true){
      this.parentElement.parentElement.parentElement.style.opacity = "0";
      this.parentElement.parentElement.parentElement.style.visibility = "hidden";
     }
     }
  });
 }
 as.loader = function() {
   var p = document.createElement("div");
   p.setAttribute("class", "AsPopup-popup");
   p.style.width = "fit-content";
   p.style.minWidth = "20em";
   p.style.padding = "10px";
   var ov = document.createElement("div");
   ov.setAttribute("class", "AsPopup-popup-overlay");
   var loader = {};
   loader.hide = function(f) {
     ov.style.opacity = "0";
     ov.style.visibility = "hidden";
     if(typeof f == "function"){
       f();
     }
   }
   loader.show = function(o) {
     if (!o) {
       var o = {};
     } else {
       if (typeof o == "string" || typeof o == "number") {
         var t = o;
         o = {};
         o.title = t;
       }
     }
     var d = document.createElement("div");
     d.setAttribute("style", "display: flex;");
     var i = document.createElement("img");
     if (o.icon) {
       i.setAttribute("src", o.icon);
       i.setAttribute("style", "max-width: 75px;max-height: 75px;");
       d.appendChild(i);
     } else {
       d.innerHTML += '<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none;margin-left: 5px;shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#0088ff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform></circle></svg></div>';
     }
     var s = document.createElement("span");
     s.setAttribute("style", "margin-left: 7px;font-size: 20px;color: #000;");
     if (o.title) {
       s.innerText = o.title;
     } else {
       s.innerText = "Loading...";
     }
     var sd = document.createElement("div");
     sd.setAttribute("style", "display: flex;align-items: center;");
     sd.appendChild(s);
     d.appendChild(sd);
     p.appendChild(d);
     ov.appendChild(p);
     document.documentElement.appendChild(ov);
     if (typeof o.timer == "number") {
       if(typeof o.onHide == "function"){
        setTimeout(function (){
          loader.hide();
          o.onHide();
        },o.timer);
       }else{
         setTimeout(loader.hide, o.timer);
       }
     }
   }
   return loader;
 }
 as.toastTopLeftCont = document.createElement("div");
 as.toastTopLeftCont.setAttribute("style","position: fixed;top: 0;left: 0;max-width: 90%;z-index: 9999999999999999999999;");
 document.documentElement.appendChild(as.toastTopLeftCont);
 as.toastTopCenterCont = document.createElement("div");
 as.toastTopCenterCont.setAttribute("style","position: fixed;top: 0;left: 50%;transform: translateX(-50%);width: fit-content;max-width: 90%;z-index: 9999999999999999999999;");
 document.documentElement.appendChild(as.toastTopCenterCont);
 as.toastTopRightCont = document.createElement("div");
 as.toastTopRightCont.setAttribute("style","position: fixed;top: 0;right: 0;max-width: 90%;z-index: 9999999999999999999999;");
 document.documentElement.appendChild(as.toastTopRightCont);
 as.toastBottomLeftCont = document.createElement("div");
 as.toastBottomLeftCont.setAttribute("style","position: fixed;bottom: 0;left: 0;max-width: 90%;z-index: 9999999999999999999999;");
 document.documentElement.appendChild(as.toastBottomLeftCont);
 as.toastBottomCenterCont = document.createElement("div");
 as.toastBottomCenterCont.setAttribute("style","position: fixed;bottom: 0;left: 50%;transform: translateX(-50%);width: fit-content;max-width: 90%;z-index: 9999999999999999999999;");
 document.documentElement.appendChild(as.toastBottomCenterCont);
 as.toastBottomRightCont = document.createElement("div");
 as.toastBottomRightCont.setAttribute("style","position: fixed;bottom: 0;right: 0;max-width: 90%;z-index: 9999999999999999999999;");
 document.documentElement.appendChild(as.toastBottomRightCont);
 as.toaster = function(o){
  if(o.title){
   var t =  document.createElement("div");
   t.setAttribute("class","Aspopup-toast-toast");
   t.innerText = o.title;
   var con;
   if(o.position){
    var op = o.position;
    if (op == "bottom-center") {
      con = as.toastBottomCenterCont;
      t.style.marginLeft = "0px";
      t.style.marginRight = "0px";
      t.classList.add("Aspopup-toast-bottom");
    }
    if (op == "top-center") {
      con = as.toastTopCenterCont;
      t.style.marginRight = "0px";
      t.style.marginLeft = "0px";
      t.classList.add("Aspopup-toast-top");
    }
    if (op == "top-right") {
      con = as.toastTopRightCont;
      t.style.marginRight = "20px";
      t.classList.add("Aspopup-toast-top");
    }
    if (op == "bottom-right") {
      con = as.toastBottomRightCont;
      t.style.marginRight = "20px";
      t.classList.add("Aspopup-toast-bottom");
    }
    if (op == "top-left") {
      con = as.toastTopLeftCont;
      t.style.marginLeft = "20px";
      t.classList.add("Aspopup-toast-top");
    }
    if (op == "bottom-left") {
      con = as.toastBottomLeftCont;
      t.style.marginLeft = "20px";
      t.classList.add("Aspopup-toast-bottom");
    }
   }else{
    con = as.toastBottomCenterCont;
    t.style.margin = "0px";
    t.classList.add("Aspopup-toast-bottom");
   }
   if(o.type){
    var y = o.type;
    if (y == "success") {
     t.style.backgroundColor = "rgb(16,185,129)";
    }
    if (y == "error") {
     t.style.backgroundColor = "rgb(239,68,68)";
    }
    if (y == "warning") {
     t.style.backgroundColor = "rgb(245,158,11)";
    }
    if (y == "info") {
     t.style.backgroundColor = "#0088ff";
    }
    if (y == "question") {
     t.style.backgroundColor = "rgb(233,30,99)";
    }
   }
   function hide(){
    t.style.opacity = "0";
    t.style.visibility = "hidden";
    setTimeout(function(){con.removeChild(t)},100);
   }
   if(o.clickToClose){
    t.addEventListener("click", function(){
      hide();
    });
   }
   con.appendChild(t);
   if(o.timer){
    setTimeout(hide,o.timer);
   }
  }
 }
 as.toast = function(o){
   if(typeof o == "string"){
     as.toaster({
       title: o
     });
   }else{
     as.toaster(o);
   }
 }
