import{_ as m}from"./nuxt-link.1c79b736.js";import{b as f}from"./blog.e9925ec0.js";import{f as v,o as s,e as a,i as t,F as l,m as _,j as g,w as d,t as c,l as r,c as h,k,q as x}from"./entry.82e2d082.js";const S={data(){return{blogData:f}},computed:{allCategories(){return[...new Set(this.blogData.flatMap(n=>n.categories))]},allTags(){return[...new Set(this.blogData.flatMap(n=>n.tags))]}}},y={class:"sidebar-widget-wrapper"},N=x('<div class="sidebar-widget"><div class="sidebar-widget-content"><div class="sidebar-widget-search"><form><input type="text" placeholder="Search..."><button><i class="fas fa-search"></i></button></form></div></div></div>',1),$={class:"sidebar-widget"},D=t("h3",{class:"sidebar-widget-title mb-2"},"Categories",-1),B={class:"sidebar-widget-content"},C={class:"sidebar-widget-cate-list"},V={class:"text"},P={class:"count"},T={class:"sidebar-widget"},j=t("h3",{class:"sidebar-widget-title mb-2"},"Popular Posts",-1),F={class:"sidebar-widget-content"},L={class:"sidebar-widget-list-post"},M={class:"cate"},q={class:"sidebar-widget"},z={class:"sidebar-widget-content"},A=t("h3",{class:"title"},"Subscribe to our newsletter",-1),E=t("p",null,"All the latest marketing news, including updates on brand campaigns, and the most interesting insights",-1),I={class:"sidebar-widget"},G=t("h3",{class:"sidebar-widget-title"},"Popular tags",-1),H={class:"sidebar-widget-content"},J={class:"tagcloud"};function K(n,O,Q,R,p,u){const i=m;return s(),a("div",y,[N,t("div",$,[D,t("div",B,[t("ul",C,[(s(!0),a(l,null,_(u.allCategories,(e,o)=>(s(),a("li",{key:o},[g(i,{to:`/blog/categories/${e}`},{default:d(()=>[t("span",V,c(e),1),r(),t("span",P,c(`${e.length}`.padStart(2,0)),1)]),_:2},1032,["to"])]))),128))])])]),t("div",T,[j,t("div",F,[t("ul",L,[(s(!0),a(l,null,_(p.blogData,(e,o)=>(s(),a("li",{key:o},[t("span",M,[(s(!0),a(l,null,_(e.categories.slice(0,1),(b,w)=>(s(),h(i,{to:`/blog/categories/${b}`,key:w},{default:d(()=>[r(c(b),1)]),_:2},1032,["to"]))),128))]),g(i,{to:`/blog/${e.slug}`},{default:d(()=>[r(c(e.title),1)]),_:2},1032,["to"])]))),128))])])]),t("div",q,[t("div",z,[t("div",{class:"sidebar-widget-banner bg-cover","data-overlay":"0.7",style:k({backgroundImage:"url('/images/bg/breadcrumb-bg.jpg')"})},[A,E,g(i,{to:""},{default:d(()=>[r("Subscribe Now")]),_:1})],4)])]),t("div",I,[G,t("div",H,[t("div",J,[(s(!0),a(l,null,_(u.allTags,(e,o)=>(s(),h(i,{to:`/blog/tags/${e}`,key:o},{default:d(()=>[r(c(e),1)]),_:2},1032,["to"]))),128))])])])])}const Y=v(S,[["render",K]]);export{Y as _};