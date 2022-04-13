var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);var x=Math.floor((Math.random()*7)+1);var xxx=null;if(x=="1"){xxx="ideas.html"}
if(x=="2"){xxx="opportunities.html"}
if(x=="3"){xxx="careers.html"}
if(x=="4"){xxx="healthcare.html"}
if(x=="5"){xxx="business.html"}
if(x=="6"){xxx="management.html"}
if(x=="7"){xxx="health.html"}a_to_ve[i].href="http://www.mogie.us/1999/01/"+xxx+"?url="+encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}
auto_safelink();
var mql=window.matchMedia("screen and (min-width: 60em)");mql.matches&&function(e,t){var a=e.document,n=typeof t;function d(){function d(e,t){var d=a.createElement("div"),o=a.body,s=o.style,r=o.childNodes.length;typeof t!=n&&(d.setAttribute("id",t),s.margin=s.padding=0,s.height="100%",r=Math.floor(Math.random()*r)+1),d.innerHTML=e,o.insertBefore(d,o.childNodes[r-1])}function o(e,t){return t?a.getElementsByTagName(t):a.getElementById(e)}function s(e){o("notif")||d("<p>Please disable your Adblocker to access this site! Thanks.</p>","notif")}var r,i,c;!function(){var t,n,r=["ad_300x250_m_c","hp-store-ad","inner-top-ads","mod_ad","ps-vertical-ads","row2AdContainer","systemad_background","ad","ads","adsense"],i=r.length,c="";for(t=0;t<i;t++)o(r[t])||(c+='<a id="'+r[t]+'"></a>');d(c),i=r.length,setTimeout(function(){for(t=0;t<i;t++)if(null==(n=o(r[t])).offsetParent||"none"==(e.getComputedStyle?a.defaultView.getComputedStyle(n,null).getPropertyValue("display"):n.currentStyle.display))return s()},250)}(),i=o(0,"img"),c=["/adcde.js","/admez/ad","/adsales/ad","/adsenceSearch.","/adtools2.","/adv2.","/partner_ads_","/rcolads1.","_ads.html",".468x60-"],typeof i[0]!=n&&typeof i[0].src!=n&&((r=new Image).onload=function(){this.onload=n,this.onerror=function(){s(this.src)},this.src=i[0].src+"#"+c.join("")},r.src=i[0].src),function(){var d,r,i,c,l,h={"https://pagead2.googlesyndication.com/pagead/show_ads.js":"google_ad_client","https://js.adscale.de/getads.js":"adscale_slot_id","https://get.mirando.de/mirando.js":"adPlaceId"},u=o(0,"script"),m=u.length-1;for(a.write=null,i=m;i>=0;--i)if(typeof h[(l=u[i]).src]!=n){(d=a.createElement("script")).type="text/javascript",d.src=l.src,c=h[l.src],e[c]=t,r=u[0],d.onload=d.onreadystatechange=function(){typeof e[c]!=n||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d.onload=d.onreadystatechange=null,r.parentNode.removeChild(d),e[c]=null)},r.parentNode.insertBefore(d,r),setTimeout(function(){e[c]===t&&s(d.src)},2e3);break}}()}a.addEventListener?e.addEventListener("load",d,!1):e.attachEvent("onload",d)}(window);
