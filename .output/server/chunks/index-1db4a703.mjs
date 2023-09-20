import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_9 } from './TheFooter-1264bedf.mjs';
import { _ as __nuxt_component_2 } from './HeroFixedBanner-732520d2.mjs';
import { _ as _sfc_main$1 } from './AboutTwo-2838c89a.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './BlogSectionOne-c2011478.mjs';
import { _ as __nuxt_component_6 } from './CallToActionOne-27e9b04a.mjs';
import { mergeProps, useSSRContext } from 'vue';
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
import './funfacts-0607a356.mjs';
import './ShapeWithAnimation-f2daa222.mjs';
import 'parallax-js';
import './SectionTitle-28396b98.mjs';
import './BlogGridItem-21050a2f.mjs';
import './blog-1a780929.mjs';
import './linea-basic-message-txt-f767b2a9.mjs';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';

const _sfc_main = {
  head() {
    return {
      title: "Havas Holding"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_HeroFixedBanner = __nuxt_component_2;
  const _component_AboutTwo = _sfc_main$1;
  const _component_PortfolioGalleryTwo = __nuxt_component_4;
  const _component_BlogSectionOne = __nuxt_component_5;
  const _component_CallToActionOne = __nuxt_component_6;
  const _component_TheFooter = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroFixedBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutTwo, { id: "about" }, null, _parent));
  _push(ssrRenderComponent(_component_PortfolioGalleryTwo, {
    id: "projects",
    style: { backgroundColor: "#f8faff" }
  }, null, _parent));
  _push(ssrRenderComponent(_component_BlogSectionOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionOne, { id: "contact-us" }, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-1db4a703.mjs.map
