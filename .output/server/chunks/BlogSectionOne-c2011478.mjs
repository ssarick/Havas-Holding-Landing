import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_0 from './SectionTitle-28396b98.mjs';
import __nuxt_component_1 from './BlogGridItem-21050a2f.mjs';
import { b as blogData } from './blog-1a780929.mjs';

const portfolios = [
  {
    id: 3,
    imgSrc: "/images/portfolio/3.png",
    title: "Graphics Design",
    category: "marketing"
  },
  {
    id: 1,
    imgSrc: "/images/portfolio/1.png",
    title: "Digital marketing",
    category: "development"
  },
  {
    id: 2,
    imgSrc: "/images/portfolio/2.png",
    title: "App Development",
    category: "design"
  },
  {
    id: 4,
    imgSrc: "/images/portfolio/4.png",
    title: "Web Development",
    category: "development"
  }
];
const _sfc_main$1 = {
  data() {
    return {
      portfolios,
      categories: [],
      selectedCat: "all"
    };
  },
  methods: {
    filterHandler(selection) {
      this.selectedCat = selection;
    },
    shuffle() {
      this.portfolios = this.portfolios.groupBy("category");
    },
    filterCategories() {
      this.categories = [...new Set(this.portfolios.map((item) => item.category))];
    }
  },
  mounted() {
    this.filterCategories();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="container-fluid px-0"><div class="section-title text-center" data-aos="fade-up"><h2 class="title" style="${ssrRenderStyle({ "margin-bottom": "80px" })}">\u041D\u0430\u0448\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B</h2></div><div class="row row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-2 g-0 box"><!--[-->`);
  ssrRenderList($data.portfolios, (portfolio, index) => {
    _push(`<div class="${ssrRenderClass([portfolio.category, "col portfolio-item"])}">`);
    if ($data.selectedCat === portfolio.category || $data.selectedCat === "all") {
      _push(`<div class="single-portfolio"><div class="thumbnail"><img class="img-fluid"${ssrRenderAttr("src", portfolio.imgSrc)}${ssrRenderAttr("alt", portfolio.title)}></div><div class="content"><h5 class="title"></h5></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioGalleryTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      blogData
    };
  },
  components: {
    BlogGridItem: () => import('./BlogGridItem-21050a2f.mjs'),
    SectionTitle: () => import('./SectionTitle-28396b98.mjs')
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_BlogGridItem = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C \u0438 \u043E\u043F\u044B\u0442",
    "sub-title": "\u041C\u044B \u0433\u043E\u0440\u0434\u0438\u043C\u0441\u044F \u043D\u0430\u0448\u0438\u043C\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430\u043C\u0438, \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u043C\u0438 \u043E\u0442\u0440\u0430\u0441\u043B\u0435\u0432\u044B\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0438\u043C \u0434\u043E\u0441\u0442\u0438\u0447\u044C \u0441\u0432\u043E\u0438\u0445 \u0446\u0435\u043B\u0435\u0439 \u0438 \u0431\u044B\u0442\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u043C\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435."
  }, null, _parent));
  _push(`<div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60"><!--[-->`);
  ssrRenderList($data.blogData, (blog, index) => {
    _push(`<div class="col mt-30">`);
    _push(ssrRenderComponent(_component_BlogGridItem, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSectionOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _, __nuxt_component_5 as a };
//# sourceMappingURL=BlogSectionOne-c2011478.mjs.map
