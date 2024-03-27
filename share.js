const as_share = {}
as_share.get = function(k){
return document.querySelector(k);
}
as_share.create = function(n){
return document.createElement(n);
}
as_share.open = function(){
document.getElementById('as-share-open-btn').style.display = 'none';
document.getElementById('as-share-platforms').classList.add('active');
document.getElementById('as-share-close-btn').style.display = 'inline-block';
}
as_share.close = function(){
document.getElementById('as-share-close-btn').style.display = 'none';
document.getElementById('as-share-platforms').classList.remove('active');
document.getElementById('as-share-open-btn').style.display = 'inline-block';
}
as_share.title = document.title;
as_share.url = location.href;
as_share.whatsapp = function(){
window.open('https://api.whatsapp.com/send?text='+as_share.title+' - '+as_share.url, "_blank");
as_share.close();
}
as_share.facebook = function(){
window.open('https://www.facebook.com/sharer/sharer.php?u='+as_share.url, "_blank");
as_share.close();
}
as_share.mail = function(){
window.open('mailto:?subject='+as_share.title+'&body='+as_share.url, "_blank");
as_share.close();
}
as_share.telegram = function(){
window.open('https://telegram.me/share/url?url='+as_share.url+'&text='+as_share.title, "_blank");
as_share.close();
}
as_share.copyLink = function(){
if(navigator.clipboard){
navigator.clipboard.writeText(as_share.url);
}else{
 alert("Can't Copy Link");
}
as_share.close();
}
const as_share_font = as_share.create("link");
as_share_font.setAttribute("rel", "stylesheet");
as_share_font.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
document.documentElement.appendChild(as_share_font);
const as_share_style = as_share.create("style");
as_share_style.innerText = "#as-share-container{user-select: none;-webkit-user-select: none;-ms-user-select: none;position:fixed;bottom:20px;right:20px;width:55px;z-index:99999999999999}#as-share-close-btn,#as-share-open-btn{background-color:#f44336;color:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);height:55px;width:55px;border:0;border-radius:50%;font-size:23px;position:fixed;right:20px;bottom:20px;-webkit-tap-highlight-color:transparent;transition:all .2s}#as-share-open-btn.active{position:fixed!important;right:20px!important;bottom:20px!important}#as-share-platforms{height:0;overflow:hidden;pointer-events:none;transition:all .3s}#as-share-platforms.active{height:270px;margin-bottom:55px;pointer-events:auto}#as-share-platforms button{display:block;height:45px;width:45px;font-size:23px;border:none;border-radius:50%;color:#fff;margin-left:5px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);margin-bottom:8px;cursor:pointer;-webkit-tap-highlight-color:transparent}#as-share-whatsapp{background-color: #25D366;}#as-share-facebook{background-color: #1877f2;}#as-share-mail{background-color: #f2a60c;}#as-share-telegram{background-color: #0088cc;}#as-share-copyLink{background-color: #444;}";
document.documentElement.appendChild(as_share_style);
const as_share_container = as_share.create("div");
as_share_container.setAttribute("id", "as-share-container");
const as_share_platforms = as_share.create("div");
as_share_platforms.setAttribute("id", "as-share-platforms");
const as_share_whatsapp = as_share.create("button");
as_share_whatsapp.setAttribute("id", "as-share-whatsapp");
as_share_whatsapp.innerHTML = "<i class='fab fa-whatsapp'></i>";
as_share_whatsapp.addEventListener("click", as_share.whatsapp);
const as_share_facebook = as_share.create("button");
as_share_facebook.setAttribute("id", "as-share-facebook");
as_share_facebook.innerHTML = "<i class='fab fa-facebook-f'></i>";
as_share_facebook.addEventListener("click", as_share.facebook);
const as_share_mail = as_share.create("button");
as_share_mail.setAttribute("id", "as-share-mail");
as_share_mail.innerHTML = "<i class='fas fa-envelope'></i>";
as_share_mail.addEventListener("click", as_share.mail);
const as_share_telegram = as_share.create("button");
as_share_telegram.setAttribute("id", "as-share-telegram");
as_share_telegram.innerHTML = "<i class='fab fa-telegram-plane'></i>";
as_share_telegram.addEventListener("click", as_share.telegram);
const as_share_copyLink = as_share.create("button");
as_share_copyLink.setAttribute("id", "as-share-copyLink");
as_share_copyLink.innerHTML = "<i class='fas fa-copy'></i>";
as_share_copyLink.addEventListener("click", as_share.copyLink);
as_share_platforms.appendChild(as_share_whatsapp);
as_share_platforms.appendChild(as_share_facebook);
as_share_platforms.appendChild(as_share_mail);
as_share_platforms.appendChild(as_share_telegram);
as_share_platforms.appendChild(as_share_copyLink);
const as_share_openBtn = as_share.create("button");
as_share_openBtn.setAttribute("id", "as-share-open-btn");
as_share_openBtn.setAttribute("style", "position: fixed;right: -100px;");
as_share_openBtn.innerHTML = "<i class='fas fa-share'></i>";
as_share_openBtn.addEventListener("click", as_share.open);
const as_share_closeBtn = as_share.create("button");
as_share_closeBtn.setAttribute("id", "as-share-close-btn");
as_share_closeBtn.setAttribute("style", "display: none;");
as_share_closeBtn.innerHTML = "<i class='fas fa-times'></i>";
as_share_closeBtn.addEventListener("click", as_share.close);
as_share_container.appendChild(as_share_platforms);
as_share_container.appendChild(as_share_openBtn);
as_share_container.appendChild(as_share_closeBtn);
document.documentElement.appendChild(as_share_container);
as_share.init = function (){
document.getElementById('as-share-open-btn').classList.add('active');
}