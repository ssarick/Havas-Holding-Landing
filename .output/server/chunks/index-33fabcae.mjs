import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_9 } from './TheFooter-1264bedf.mjs';
import { _ as __nuxt_component_2 } from './SearchPopup-1aaa7501.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-20d2fbda.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-58ca22a8.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_5 } from './CallToActionTwo-eb84b64b.mjs';
import { _ as __nuxt_component_6 } from './AboutFour-72c92a70.mjs';
import { a as __nuxt_component_7, _ as __nuxt_component_8 } from './BrandLogoCarousel-8f957757.mjs';
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
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import './SectionTitle-28396b98.mjs';
import './ShapeWithAnimation-f2daa222.mjs';
import 'parallax-js';
import 'swiper/vue';
import 'swiper/core';

const projectData = [
  {
    id: 1,
    imgSrc: "/images/project/project-1.jpg",
    title: "HasThemes Development: An outstanding payment app",
    desc: "Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies."
  },
  {
    id: 2,
    imgSrc: "/images/project/project-2.jpg",
    title: "Dashboards UI Kit open-source set of ready-to-use templates",
    desc: "Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies."
  },
  {
    id: 3,
    imgSrc: "/images/project/project-3.jpg",
    title: "Project You X Ventures Studio. Toronto, Canada",
    desc: "Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies."
  },
  {
    id: 4,
    imgSrc: "/images/project/project-4.jpg",
    title: "Launching a new campaign this month, Nike by you",
    desc: "Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies."
  },
  {
    id: 5,
    imgSrc: "/images/project/project-5.jpg",
    title: "Branding and photography. Mother Nature: Summer",
    desc: "Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies."
  },
  {
    id: 6,
    imgSrc: "/images/project/project-6.jpg",
    title: "Modern and unique design for a furniture application",
    desc: "Quickly analyzing the digital business landscape, we create effective action plans and design optimal strategies."
  }
];
const _sfc_main$1 = {
  data() {
    return {
      projectData
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100" }, _attrs))}><div class="container"><div class="section-title text-center" data-aos="fade-up"><h2 class="title fz-32">Crafting effective digital marketing, web development,<br>video content and communication design</h2></div><div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.projectData, (project, index2) => {
    _push(`<div class="col mt-30"><div class="work"><div class="thumbnail">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/project/project-details",
      class: "image"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", project.imgSrc)}${ssrRenderAttr("alt", project.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: project.imgSrc,
              alt: project.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="info"><h3 class="title">`);
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/project/project-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(project.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(project.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3><p class="desc">${ssrInterpolate(project.desc)}</p>`);
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/project/project-details" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`View Project`);
        } else {
          return [
            createTextVNode("View Project")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_ProjectWrapper = __nuxt_component_4;
  const _component_CallToActionTwo = __nuxt_component_5;
  const _component_AboutFour = __nuxt_component_6;
  const _component_BrandLogoCarousel = __nuxt_component_7;
  const _component_FaqOne = __nuxt_component_8;
  const _component_TheFooter = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "All Project",
    title: "We work with bold brands that we believe in",
    backgroundUrl: "/images/bg/breadcrumb-bg-two.jpg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ProjectWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutFour, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, { class: "pt-0" }, null, _parent));
  _push(ssrRenderComponent(_component_FaqOne, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-33fabcae.mjs.map
