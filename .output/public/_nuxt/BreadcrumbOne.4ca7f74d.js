import{_ as o}from"./nuxt-link.1c79b736.js";import{f as c,o as n,e as i,i as t,t as s,j as _,w as r,l,k as d}from"./entry.82e2d082.js";const m={props:["activePageName","title","backgroundUrl"]},u={class:"page-title"},p={class:"container"},b={class:"title"},g={class:"page-breadcrumb position-static"},h={class:"container"},v={class:"breadcrumb page-breadcrumb"},f={class:"breadcrumb-item"},x={class:"breadcrumb-item"};function k(N,y,e,B,V,w){const a=o;return n(),i("div",{class:"page-title-section section-padding-top bg-cover","data-overlay":"0.7",style:d({backgroundImage:`url(${e.backgroundUrl})`})},[t("div",u,[t("div",p,[t("h1",b,s(e.title),1)])]),t("div",g,[t("div",h,[t("ul",v,[t("li",f,[_(a,{to:"/"},{default:r(()=>[l("Home")]),_:1})]),t("li",x,[t("span",null,s(e.activePageName),1)])])])])],4)}const U=c(m,[["render",k]]);export{U as _};