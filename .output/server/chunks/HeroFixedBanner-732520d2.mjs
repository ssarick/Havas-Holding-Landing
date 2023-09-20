import { f as funFacts } from './funfacts-0607a356.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { c as _imports_0 } from './TheFooter-1264bedf.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  data() {
    return {
      funFacts
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "intro-slider" }, _attrs))}><div class="intro-section overlay bg-cover" style="${ssrRenderStyle({ backgroundImage: `url('/images/hero-image/havas.jpg')` })}"><div class="container"><div class="row row-cols-lg-1 row-cols-1"><div class="col align-self-center"><div class="intro-content"><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "transform": "scale(2.5)", "padding-left": "70px" })}" alt="logo"><div style="${ssrRenderStyle({ "margin-top": "250px" })}"><div class="container"><div class="row"><div class="col-lg-12 mx-auto"><div class="row row-cols-lg-4 row-cols-sm-4 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.funFacts, (item, i) => {
    _push(`<div class="col mt-30" data-aos="fade-up"><div class="funfact2"><div class="number"><span class="counter">${ssrInterpolate(item.count)}</span></div><h6 class="text">${ssrInterpolate(item.text)}</h6></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroFixedBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=HeroFixedBanner-732520d2.mjs.map
