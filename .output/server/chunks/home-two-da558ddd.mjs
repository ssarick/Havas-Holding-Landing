import { p as publicAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_9$1 } from './TheFooter-1264bedf.mjs';
import { _ as __nuxt_component_2 } from './SearchPopup-1aaa7501.mjs';
import { _ as __nuxt_component_2$1 } from './HeroFixedBanner-732520d2.mjs';
import { _ as _sfc_main$3 } from './AboutTwo-2838c89a.mjs';
import { _ as __nuxt_component_5, a as __nuxt_component_6 } from './FeatureOne-9930856b.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-58ca22a8.mjs';
import __nuxt_component_0$2 from './ShapeWithAnimation-f2daa222.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5$1 } from './BlogSectionOne-c2011478.mjs';
import { _ as __nuxt_component_9 } from './TestimonialSectionOne-c83df8d9.mjs';
import { _ as _imports_0$1, a as _imports_1 } from './linea-basic-message-txt-f767b2a9.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'defu';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './funfacts-0607a356.mjs';
import './SectionTitle-28396b98.mjs';
import './service-c1a7ef1a.mjs';
import 'parallax-js';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import './BlogGridItem-21050a2f.mjs';
import './blog-1a780929.mjs';
import 'swiper/core';
import 'swiper/vue';

const _imports_0 = "" + publicAssetsURL("images/video/skill-video.jpg");
const _sfc_main$2 = {
  components: {
    ShapeWithAnimation: () => import('./ShapeWithAnimation-f2daa222.mjs')
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_ShapeWithAnimation = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding overflow-hidden" }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up"><div class="skill-with-video-content"><div class="section-title-two"><span class="sub-title">Development that converts and delivers</span><h3 class="title"> We offer the tools and skills that your company deserves </h3></div><ul class="agency-list"><li class="item"><div class="icon"><i class="fas fa-check"></i></div><div class="text">Select &amp; customize courses to your preferences</div></li><li class="item"><div class="icon"><i class="fas fa-check"></i></div><div class="text">Change the tutor and make arrangements</div></li><li class="item"><div class="icon"><i class="fas fa-check"></i></div><div class="text">Participate in events to join others</div></li><li class="item"><div class="icon"><i class="fas fa-check"></i></div><div class="text">Get the desired certificate delivered at house</div></li></ul>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact-us",
    class: "btn btn-primary btn-hover-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get started for free `);
      } else {
        return [
          createTextVNode(" Get started for free ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="offset-xl-1 col-xl-6 col-lg-6 col-12"><div class="video-popup-area"><div class="skill-video"><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank"><img class="image"${ssrRenderAttr("src", _imports_0)} alt="image"><div class="icon video-popup"><i class="fa fa-play"></i></div></a></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/video-shape-1.png"
  }, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillWithVideo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_2 = "" + publicAssetsURL("images/svg/linea/linea-basic-mail-open-text.svg");
const _sfc_main$1 = {
  components: {
    ShapeWithAnimation: () => import('./ShapeWithAnimation-f2daa222.mjs')
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShapeWithAnimation = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding contact-section overflow-hidden" }, _attrs))}><div class="container"><div class="row row-cols-lg-2 row-cols-1 align-items-center"><div class="col"><div class="contact-Information mr-xl-7"><div class="section-title-two"><h3 class="title">We use latest technologies that are proven and practical</h3></div><div class="contact-info ct-info-two" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="info"><h4 class="title">Our Locations</h4><span class="info-text"> 110 W 34th St, NYC. / 67 Madison Avenue.</span></div></div><div class="contact-info ct-info-two" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="info"><h4 class="title">Give Us A Call</h4><span class="info-text"> 0123456789 / 0123456789</span></div></div><div class="contact-info ct-info-two" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="info"><h4 class="title"> Help Desk</h4><span class="info-text"><a href="mailto:demo@example.com">demo@example.com</a>, <a href="mailto:demo@example.com">demo@example.com</a></span></div></div></div></div><div class="col"><div class="contact-form-area box-shadow"><div class="section-title text-center mb-7"><h2 class="title fz-28">Let\u2019s talk about your project</h2><p class="sub-title">We have made it easy for clients to reach us and get their solutions weaved</p></div><form><div class="row mb-n4"><div class="col-md-12 col-12 mb-4"><input type="text" placeholder="Your Name *" name="name"></div><div class="col-md-12 col-12 mb-4"><input type="email" placeholder="Email *" name="email"></div><div class="col-12 mb-30"><textarea name="message" placeholder="Message"></textarea></div><div class="col-12 text-center mb-4"><button class="btn btn-primary btn-hover-secondary">Get a free consultation</button></div></div></form>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/contact-shape.png"
  }, null, _parent));
  _push(`</div></div></div></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/contact-shape.png"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSectionOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_HeroFixedBanner = __nuxt_component_2$1;
  const _component_AboutTwo = _sfc_main$3;
  const _component_FunFact = __nuxt_component_5;
  const _component_FeatureOne = __nuxt_component_6;
  const _component_SkillWithVideo = __nuxt_component_7;
  const _component_PortfolioGalleryTwo = __nuxt_component_4;
  const _component_TestimonialSectionOne = __nuxt_component_9;
  const _component_BlogSectionOne = __nuxt_component_5$1;
  const _component_ContactSectionOne = __nuxt_component_11;
  const _component_TheFooter = __nuxt_component_9$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroFixedBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFact, null, null, _parent));
  _push(ssrRenderComponent(_component_FeatureOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_SkillWithVideo, null, null, _parent));
  _push(ssrRenderComponent(_component_PortfolioGalleryTwo, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialSectionOne, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogSectionOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_ContactSectionOne, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-two.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { homeTwo as default };
//# sourceMappingURL=home-two-da558ddd.mjs.map
