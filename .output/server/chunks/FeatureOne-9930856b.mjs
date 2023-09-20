import { f as funFacts } from './funfacts-0607a356.mjs';
import { mergeProps, useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_0 from './SectionTitle-28396b98.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-58ca22a8.mjs';
import { s as serviceData } from './service-c1a7ef1a.mjs';

const _sfc_main$1 = {
  data() {
    return {
      funFacts
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12 mx-auto"><div class="row row-cols-lg-3 row-cols-sm-3 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.funFacts, (item, i) => {
    _push(`<div class="col mt-30" data-aos="fade-up"><div class="funfact"><div class="number"><span class="counter">${ssrInterpolate(item.count)}</span></div><h6 class="text">${ssrInterpolate(item.text)}</h6></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: ["addClassName"],
  components: {
    SectionTitle: () => import('./SectionTitle-28396b98.mjs')
  },
  data() {
    return {
      serviceData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "We create a unique action plan for brands",
    "sub-title": "Get your company heading in the right direction with our digital marketing strategist",
    "add-class-name": "mb-60"
  }, null, _parent));
  _push(`<div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.serviceData.slice(0, 3), (feature, index) => {
    _push(`<div class="col mt-30" data-aos="fade-up"><div class="${ssrRenderClass([$props.addClassName, "icon-box text-center"])}"><div class="icon"><img${ssrRenderAttr("src", feature.iconSrc)}${ssrRenderAttr("alt", feature.title)}></div><div class="content"><h3 class="title">${ssrInterpolate(feature.title)}</h3><div class="desc"><p>${ssrInterpolate(feature.text)}</p></div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/service/${feature.slug}`,
      class: "link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`View Details`);
        } else {
          return [
            createTextVNode("View Details")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as _, __nuxt_component_6 as a };
//# sourceMappingURL=FeatureOne-9930856b.mjs.map
