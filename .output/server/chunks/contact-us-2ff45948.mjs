import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_9 } from './TheFooter-1264bedf.mjs';
import { _ as __nuxt_component_2 } from './SearchPopup-1aaa7501.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-20d2fbda.mjs';
import { _ as __nuxt_component_6 } from './CallToActionOne-27e9b04a.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './renderer.mjs';
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
import './nuxt-link-58ca22a8.mjs';
import './SectionTitle-28396b98.mjs';
import './ShapeWithAnimation-f2daa222.mjs';
import 'parallax-js';
import './linea-basic-message-txt-f767b2a9.mjs';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact-form-section section-padding-t90-b100",
    style: { backgroundColor: "#f8faff" }
  }, _attrs))}><div class="container"><div class="row"><div class="offset-lg-2 col-lg-8"><div class="section-title text-center" data-aos="fade-up"><h2 class="title fz-32">Let\u2019s talk about your project</h2><p class="sub-title">We have made it easy for clients to reach us and get their solutions weaved</p></div><div class="contact-form"><form><div class="row mtn-30"><div class="col-md-6 col-12 mt-30"><input type="text" placeholder="Your Name *" name="name"></div><div class="col-md-6 col-12 mt-30"><input type="email" placeholder="Email *" name="email"></div><div class="col-md-12 col-12 mt-30"><input type="text" placeholder="Subject *" name="subject"></div><div class="col-12 mt-30"><textarea name="message" placeholder="Message"></textarea></div><div class="col-12 text-center mt-30"><button class="btn btn-primary btn-hover-secondary">Submit</button></div></div></form></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_CallToActionOne = __nuxt_component_6;
  const _component_ContactForm = __nuxt_component_5;
  const _component_TheFooter = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Contact Us",
    title: "We are an agency located in New York",
    backgroundUrl: "/images/bg/breadcrumb-bg-five.jpg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionOne, null, null, _parent));
  _push(`<div class="google-map-area section-padding-bottom"><div class="container"><div class="contact-map-area"><iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div></div></div>`);
  _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contactUs as default };
//# sourceMappingURL=contact-us-2ff45948.mjs.map
