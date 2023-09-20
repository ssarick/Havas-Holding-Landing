import { p as publicAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_9$2 } from './TheFooter-1264bedf.mjs';
import { _ as __nuxt_component_2 } from './SearchPopup-1aaa7501.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-58ca22a8.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, EffectFade } from 'swiper/core';
import { _ as __nuxt_component_9$1 } from './TestimonialSectionOne-c83df8d9.mjs';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_0$3 from './ShapeWithAnimation-f2daa222.mjs';
import { _ as __nuxt_component_5, a as __nuxt_component_6 } from './FeatureOne-9930856b.mjs';
import { _ as __nuxt_component_8, a as __nuxt_component_7 } from './BrandLogoCarousel-8f957757.mjs';
import { _ as __nuxt_component_4$1, a as __nuxt_component_5$2 } from './BlogSectionOne-c2011478.mjs';
import { _ as __nuxt_component_5$1 } from './CallToActionTwo-eb84b64b.mjs';
import { _ as __nuxt_component_6$1 } from './CallToActionOne-27e9b04a.mjs';
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
import 'parallax-js';
import './funfacts-0607a356.mjs';
import './SectionTitle-28396b98.mjs';
import './service-c1a7ef1a.mjs';
import './BlogGridItem-21050a2f.mjs';
import './blog-1a780929.mjs';
import './linea-basic-message-txt-f767b2a9.mjs';

SwiperCore.use([Navigation, EffectFade]);
const _sfc_main$4 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      sliderData: [
        {
          id: 1,
          heading: "Designing awesome brands & experiences",
          text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
          bgImgSrc: "/images/hero-image/hero-3.jpg"
        },
        {
          id: 2,
          heading: "Developing awesome sites & experiences",
          text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
          bgImgSrc: "/images/hero-image/hero-4.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "intro-slider" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    loop: true,
    effect: "fade",
    navigation: $data.swiperOptions.navigation
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.sliderData, (banner, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="intro-section overlay bg-cover" style="${ssrRenderStyle({ backgroundImage: `url(${banner.bgImgSrc})` })}"${_scopeId2}><div class="container"${_scopeId2}><div class="row row-cols-lg-1 row-cols-1"${_scopeId2}><div class="col align-self-center"${_scopeId2}><div class="intro-content m-auto text-center"${_scopeId2}><h2 class="title"${_scopeId2}>${ssrInterpolate(banner.heading)}</h2><div class="desc"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(banner.text)}</p></div>`);
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: "/about",
                  class: "btn btn-primary btn-hover-secondary"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Get Started`);
                    } else {
                      return [
                        createTextVNode("Get Started")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_NuxtLink, {
                  to: "/about",
                  class: "btn btn-outline-white btn-hover-primary"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Learn More`);
                    } else {
                      return [
                        createTextVNode("Learn More")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "intro-section overlay bg-cover",
                    style: { backgroundImage: `url(${banner.bgImgSrc})` }
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row row-cols-lg-1 row-cols-1" }, [
                        createVNode("div", { class: "col align-self-center" }, [
                          createVNode("div", { class: "intro-content m-auto text-center" }, [
                            createVNode("h2", { class: "title" }, toDisplayString(banner.heading), 1),
                            createVNode("div", { class: "desc" }, [
                              createVNode("p", null, toDisplayString(banner.text), 1)
                            ]),
                            createVNode(_component_NuxtLink, {
                              to: "/about",
                              class: "btn btn-primary btn-hover-secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Get Started")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NuxtLink, {
                              to: "/about",
                              class: "btn btn-outline-white btn-hover-primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Learn More")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])
                  ], 4)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--><div class="home-slider-prev swiper-button-prev main-slider-nav"${_scopeId}><i class="fa fa-angle-left"${_scopeId}></i></div><div class="home-slider-next swiper-button-next main-slider-nav"${_scopeId}><i class="fa fa-angle-right"${_scopeId}></i></div>`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.sliderData, (banner, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "intro-section overlay bg-cover",
                  style: { backgroundImage: `url(${banner.bgImgSrc})` }
                }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("div", { class: "row row-cols-lg-1 row-cols-1" }, [
                      createVNode("div", { class: "col align-self-center" }, [
                        createVNode("div", { class: "intro-content m-auto text-center" }, [
                          createVNode("h2", { class: "title" }, toDisplayString(banner.heading), 1),
                          createVNode("div", { class: "desc" }, [
                            createVNode("p", null, toDisplayString(banner.text), 1)
                          ]),
                          createVNode(_component_NuxtLink, {
                            to: "/about",
                            class: "btn btn-primary btn-hover-secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Get Started")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, {
                            to: "/about",
                            class: "btn btn-outline-white btn-hover-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Learn More")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ], 4)
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode("div", { class: "home-slider-prev swiper-button-prev main-slider-nav" }, [
            createVNode("i", { class: "fa fa-angle-left" })
          ]),
          createVNode("div", { class: "home-slider-next swiper-button-next main-slider-nav" }, [
            createVNode("i", { class: "fa fa-angle-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSliderTwo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = "" + publicAssetsURL("images/video/about-video.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_ShapeWithAnimation = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100 overflow-hidden" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 m-auto"><div class="about-content-full text-center mb-50" data-aos="fade-up"><h2 class="title">Creative agency focused on vision, product and people</h2><p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences.</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<mark${_scopeId}>Read More</mark>`);
      } else {
        return [
          createVNode("mark", null, "Read More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-12"><div class="video-popup-area video-three"><div class="skill-video"><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank"><img class="image"${ssrRenderAttr("src", _imports_0)} alt="image"><div class="icon video-popup"><i class="fa fa-play"></i></div></a></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/video-shape-1.png"
  }, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutThree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  props: ["team"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team" }, _attrs))}><div class="thumb"><img${ssrRenderAttr("src", $props.team.imgSrc)}${ssrRenderAttr("alt", $props.team.name)}><div class="overlay"></div><ul class="social-icon text-center"><!--[-->`);
  ssrRenderList($props.team.socialList, (social, index) => {
    _push(`<li><a${ssrRenderAttr("href", social.url)} class="link"><i class="${ssrRenderClass(social.iconName)}"></i></a></li>`);
  });
  _push(`<!--]--></ul></div><div class="team-info text-center"><div class="info"><h5>${ssrInterpolate($props.team.name)}</h5><span>${ssrInterpolate($props.team.position)}</span></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamMember.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const TeamMember = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const teamData = [
  {
    imgSrc: "/images/team/team-1.jpg",
    name: "Merrie Lewis",
    position: "General Director",
    role: "admin",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  },
  {
    imgSrc: "/images/team/team-2.jpg",
    name: "Mariana Buenos",
    position: "CEO & Chief Manager",
    role: "admin",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  },
  {
    imgSrc: "/images/team/team-3.jpg",
    name: "Maya",
    position: "Project Manager",
    role: "admin",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  },
  {
    imgSrc: "/images/team/team-4.jpg",
    name: "Parks Missie",
    position: "Marketing Manager",
    role: "employee",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  }
];
const _sfc_main$1 = {
  components: {
    TeamMember: () => Promise.resolve().then(function() {
      return TeamMember;
    })
  },
  data() {
    return {
      teamData
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TeamMember = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "section-padding",
    "data-bg-color": "#f8faff"
  }, _attrs))}><div class="container"><div class="section-title text-center mb-60" data-aos="fade-up"><h2 class="title">People behind the screen</h2><p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p></div><div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.teamData.slice(0, 4), (team, index) => {
    _push(`<div class="col mt-30">`);
    _push(ssrRenderComponent(_component_TeamMember, { team }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_HeroSliderTwo = __nuxt_component_3;
  const _component_AboutThree = __nuxt_component_4;
  const _component_FunFact = __nuxt_component_5;
  const _component_FeatureOne = __nuxt_component_6;
  const _component_FaqOne = __nuxt_component_8;
  const _component_PortfolioGalleryTwo = __nuxt_component_4$1;
  const _component_TeamOne = __nuxt_component_9;
  const _component_TestimonialSectionOne = __nuxt_component_9$1;
  const _component_CallToActionTwo = __nuxt_component_5$1;
  const _component_BlogSectionOne = __nuxt_component_5$2;
  const _component_CallToActionOne = __nuxt_component_6$1;
  const _component_BrandLogoCarousel = __nuxt_component_7;
  const _component_TheFooter = __nuxt_component_9$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroSliderTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutThree, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFact, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureOne, { addClassName: "box-border" }, null, _parent));
  _push(ssrRenderComponent(_component_FaqOne, null, null, _parent));
  _push(ssrRenderComponent(_component_PortfolioGalleryTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialSectionOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogSectionOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-three.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeThree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { homeThree as default };
//# sourceMappingURL=home-three-fd8e5596.mjs.map
