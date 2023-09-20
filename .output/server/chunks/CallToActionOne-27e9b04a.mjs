import __nuxt_component_0 from './SectionTitle-28396b98.mjs';
import __nuxt_component_0$1 from './ShapeWithAnimation-f2daa222.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './linea-basic-message-txt-f767b2a9.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  components: {
    SectionTitle: () => import('./SectionTitle-28396b98.mjs'),
    ShapeWithAnimation: () => import('./ShapeWithAnimation-f2daa222.mjs')
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_shape_with_animation = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100 overflow-hidden" }, _attrs))}><div class="container shape-animate">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438",
    "add-class-name": "mb-30"
  }, null, _parent));
  _push(`<div class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><div class="col mt-30" data-aos="fade-up"><div class="contact-info"><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_0)} alt="Icon"></div><div class="info"><h4 class="title">\u0410\u0434\u0440\u0435\u0441</h4><span class="info-text"> \u0443\u043B. \u0421\u0430\u0444\u0434\u043E\u0448 5, \u042F\u043A\u043A\u0430\u0441\u0430\u0440\u0430\u0439\u0441\u043A\u0438\u0439 \u0440\u043D. \u0422\u0430\u0448\u043A\u0435\u043D\u0442, \u0423\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u0430\u043D.</span></div></div></div><div class="col mt-30" data-aos="fade-up"><div class="contact-info"><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_1)} alt="Icon"></div><div class="info"><h4 class="title"> \u0422\u0435\u043B\u0435\u0444\u043E\u043D </h4><a href="tel:+998712059595">+99871 205 95 95</a></div></div></div></div>`);
  _push(ssrRenderComponent(_component_shape_with_animation, {
    "add-class-name": "shape-1",
    "data-depth": "4",
    "img-src": "/images/shape-animation/video-shape-1.png"
  }, null, _parent));
  _push(`</div><div class="google-map-area mt-30"><div class="container"><div class="contact-map-area"><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1499.2445770590584!2d69.23913138601644!3d41.27645746036164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzM1LjAiTiA2OcKwMTQnMjIuNSJF!5e0!3m2!1sru!2s!4v1695211575563!5m2!1sru!2s" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-hidden="false" tabindex="0"></iframe></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToActionOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=CallToActionOne-27e9b04a.mjs.map
