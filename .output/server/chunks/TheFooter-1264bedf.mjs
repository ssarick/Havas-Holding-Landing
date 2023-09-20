import { p as publicAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-58ca22a8.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "site-main-menu" }, _attrs))}><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
      } else {
        return [
          createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041E \u043D\u0430\u0441`);
      } else {
        return [
          createTextVNode("\u041E \u043D\u0430\u0441")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B`);
      } else {
        return [
          createTextVNode("\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#contact-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B`);
      } else {
        return [
          createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const Navigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$2
});
const _imports_0 = "" + publicAssetsURL("images/logo/header-logo.svg");
const _sfc_main$3 = {
  components: {
    Navigation: () => Promise.resolve().then(function() {
      return Navigation;
    })
  },
  data() {
    return {
      isSticky: false,
      isOpened: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      this.isSticky = scrollPos >= 200;
      this.isOpened = scrollPos >= 200;
    });
  },
  methods: {
    // offcanvas mobile menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    //offcanvas search 
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#search-popup");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["header-section header-transparent", { "is-sticky": $data.isSticky }]
  }, _attrs))}><div class="header-inner"><div class="container position-relative"><div class="row justify-content-between align-items-center">`);
  if ($data.isOpened) {
    _push(`<div class="col-xl-2 col-auto order-0"><div class="header-logo">`);
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="dark-logo"${ssrRenderAttr("src", _imports_0)} alt="Agency Logo"${_scopeId}><img class="light-logo"${ssrRenderAttr("src", _imports_0)} alt="Agency Logo"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              class: "dark-logo",
              src: _imports_0,
              alt: "Agency Logo"
            }),
            createVNode("img", {
              class: "light-logo",
              src: _imports_0,
              alt: "Agency Logo"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([!$data.isOpened ? "justify-content-center" : "justify-content-end", "col-auto col-xl d-flex align-items-center order-2 order-xl-1"])}"><div class="menu-column-area d-none d-xl-block position-static">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</div><div class="header-mobile-menu-toggle d-xl-none ml-sm-2"><button class="toggle"><i class="icon-top"></i><i class="icon-middle"></i><i class="icon-bottom"></i></button></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");
    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }
    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;
    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }
    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
      offcanvasMobileMenu == null ? void 0 : offcanvasMobileMenu.classList.remove("active");
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-navigation" }, _attrs))}><nav class="offcanvas-navigation" id="offcanvas-navigation"><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
      } else {
        return [
          createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041E \u043D\u0430\u0441`);
      } else {
        return [
          createTextVNode("\u041E \u043D\u0430\u0441")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B`);
      } else {
        return [
          createTextVNode("\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#contact-us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B`);
      } else {
        return [
          createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const MobileNavigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$1
});
const _sfc_main$1 = {
  components: {
    MobileNavigation: () => Promise.resolve().then(function() {
      return MobileNavigation;
    })
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_MobileNavigation = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "popup-mobile-menu popup-mobile-visiable",
    id: "offcanvas-menu"
  }, _attrs))}><div class="mobile-menu-overlay"></div><div class="inner custom-scrollbar"><div class="mobile-header"><div class="logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="site logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "site logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="mobile-close-btn"></button></div><div class="menu-content">`);
  _push(ssrRenderComponent(_component_MobileNavigation, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OffCanvasMobileMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const footerAboutWidget = {
  logoSrc: "/images/logo/header-logo.svg",
  telephone: "+998 (71) 205 95 95",
  email: "demo@example.com",
  fbUrl: "https://www.facebook.com/",
  twitterUrl: "https://twitter.com/",
  instagramUrl: "https://www.instagram.com/"
};
const footerLinkTitleOne = "Services";
const navListOne = [
  {
    navTitle: "Marketing",
    navUrl: "/"
  },
  {
    navTitle: "SEO/SEM",
    navUrl: "/"
  },
  {
    navTitle: "Development",
    navUrl: "/"
  },
  {
    navTitle: "UX Design",
    navUrl: "/"
  }
];
const footerLinkTitleTwo = "Products";
const navListTwo = [
  {
    navTitle: "Elementor Guru",
    navUrl: "/"
  },
  {
    navTitle: "WooLentor Pro",
    navUrl: "/"
  },
  {
    navTitle: "Plugins",
    navUrl: "/"
  },
  {
    navTitle: "Page Builder",
    navUrl: "/"
  }
];
const footerLinkTitleThree = "About";
const navListThree = [
  {
    navTitle: "Features",
    navUrl: "/"
  },
  {
    navTitle: "Our Partners",
    navUrl: "/"
  },
  {
    navTitle: "Affiliate Program",
    navUrl: "/"
  },
  {
    navTitle: "Pricing",
    navUrl: "/"
  }
];
const footerLinkTitleFour = "Contact";
const navListFour = [
  {
    navTitle: "Support Ticket",
    navUrl: "/"
  },
  {
    navTitle: "Help Desk",
    navUrl: "/"
  },
  {
    navTitle: "Live Chat",
    navUrl: "/"
  },
  {
    navTitle: "FAQs",
    navUrl: "/"
  }
];
const footerData = {
  footerAboutWidget,
  footerLinkTitleOne,
  navListOne,
  footerLinkTitleTwo,
  navListTwo,
  footerLinkTitleThree,
  navListThree,
  footerLinkTitleFour,
  navListFour
};
const _sfc_main = {
  data() {
    return {
      footerData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "footer-section",
    style: { backgroundColor: "#030e22" }
  }, _attrs))}><div class="container"><div class="row pb-5 mtn-30"><div class="col-md-12 col-sm-6 col-12 mt-30"><div class="footer-widget d-flex justify-content-between"><div class="footer-logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $data.footerData.footerAboutWidget.logoSrc)} alt="Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $data.footerData.footerAboutWidget.logoSrc,
            alt: "Logo"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-widget-content"><div class="content"><p>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:</p><a href="tel:+998(71)-205-95-95">${ssrInterpolate($data.footerData.footerAboutWidget.telephone)}</a></div></div></div></div></div><div class="row"><div class="col"><p class="copyright">\xA9 2023 Havas Holding.</p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_9 as b, _imports_0 as c };
//# sourceMappingURL=TheFooter-1264bedf.mjs.map
