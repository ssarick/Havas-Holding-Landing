import { p as publicAssetsURL } from './renderer.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import __nuxt_component_0 from './ShapeWithAnimation-f2daa222.mjs';

const _imports_0 = "" + publicAssetsURL("images/about/about-5.jpg");
const _imports_1 = "" + publicAssetsURL("images/about/about-6.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AboutTwo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding overflow-hidden" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6" data-aos="fade-up"><div class="about-content-area"><div class="section-title-two"></div><div class="row"><div class="col-md-12 col-sm-12 col-12 mt-30" data-aos="fade-up"><div class="about-funfact"><div class="number"><span class="counter">\u041E \u043D\u0430\u0441</span></div><p class="text mt-4"><span style="${ssrRenderStyle({ "font-weight": "bold" })}">Havas Holding </span> - \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439, \u0441\u0442\u0440\u0435\u043C\u044F\u0449\u0430\u044F\u0441\u044F \u0432\u043D\u0435\u0434\u0440\u044F\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044B \u043A \u0432\u0435\u0434\u0435\u043D\u0438\u044E \u0431\u0438\u0437\u043D\u0435\u0441\u0430, \u0431\u044B\u0442\u044C \u043B\u0438\u0434\u0435\u0440\u043E\u043C \u0432\u043E \u0432\u0441\u0435\u0445 \u0441\u0444\u0435\u0440\u0430\u0445 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043D\u0430\u0440\u0430\u0449\u0438\u0432\u0430\u0442\u044C \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435. <br><br> \u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F Havas Holding \u2014 \u044D\u0442\u043E 4 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u0431\u043E\u043B\u0435\u0435 50 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0438\u0437 \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 4000 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u043E\u043F\u043B\u043E\u0449\u0430\u044E\u0449\u0438\u0445 \u0432 \u0436\u0438\u0437\u043D\u044C \u0440\u044F\u0434 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0440\u0438\u0442\u0435\u0439\u043B\u0430, \u0441\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0430, \u0434\u0435\u0432\u0435\u043B\u043E\u043F\u043C\u0435\u043D\u0442\u0430 \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438. </p></div></div></div></div></div><div class="col-lg-6" data-aos="fade-up"><div class="about-image-area about-two about-shape-animation right-0 mr-0"><div class="about-image js-tilt"><img${ssrRenderAttr("src", _imports_0)} alt="image"></div><div class="about-image js-tilt"><img${ssrRenderAttr("src", _imports_1)} alt="image"></div>`);
      _push(ssrRenderComponent(__nuxt_component_0, {
        addClassName: "shape-1",
        "data-depth": "1",
        imgSrc: "/images/shape-animation/video-shape-1.png"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AboutTwo-2838c89a.mjs.map
