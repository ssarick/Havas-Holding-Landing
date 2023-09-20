import { p as publicAssetsURL } from './renderer.mjs';
import __nuxt_component_0 from './ShapeWithAnimation-f2daa222.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-58ca22a8.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + publicAssetsURL("images/about/about-3.jpg");
const _imports_1 = "" + publicAssetsURL("images/about/about-4.jpg");
const _sfc_main = {
  components: {
    ShapeWithAnimation: () => import('./ShapeWithAnimation-f2daa222.mjs')
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShapeWithAnimation = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-top section-padding-bottom-180 overflow-hidden" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up"><div class="about-image-area"><div class="about-image js-tilt"><img${ssrRenderAttr("src", _imports_0)} alt="image"></div><div class="about-image js-tilt"><img${ssrRenderAttr("src", _imports_1)} alt="image"></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/about-shape-1.png"
  }, null, _parent));
  _push(`</div></div><div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up"><div class="about-content-area about-four"><div class="section-title-two"><span class="sub-title">Our solutions begin with brand research</span><h3 class="title">We\u2019ve worked alongside plenty of brands &amp; startups</h3></div><p>Our team of designers and developers are perfectionists who love what they do \u2013 we thrive off pushing the boundaries of our clients\u2019 expectations and our own capabilities.</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "btn btn-primary btn-hover-secondary mt-30"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get Started`);
      } else {
        return [
          createTextVNode("Get Started")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutFour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=AboutFour-72c92a70.mjs.map
