import{f as c,o as r,e as i,i as t,q as n}from"./entry.82e2d082.js";const l={methods:{toggleClass(o,s){const e=document.querySelector("#search-popup");o==="addClass"?e.classList.add(s):e.classList.remove(s)}}},d={class:"main-search-active",id:"search-popup"},p={class:"sidebar-search-icon"},_=t("i",{class:"fa fa-times"},null,-1),h=[_],u=n('<div class="sidebar-search-input"><form><div class="form-search"><input id="search" class="input-text" value="" placeholder="" type="search"><button><i class="fa fa-search"></i></button></div></form><p class="form-description">Hit enter to search</p></div>',1);function f(o,s,e,m,v,a){return r(),i("div",d,[t("div",p,[t("button",{class:"search-close",onClick:s[0]||(s[0]=b=>a.toggleClass("removeClass","search-popup-open"))},h)]),u])}const C=c(l,[["render",f]]);export{C as _};
