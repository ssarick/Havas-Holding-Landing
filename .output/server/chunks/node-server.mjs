globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=2592000, immutable"}}}},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"423e-fTFP9ETMcB1NaYwBbrYTZZchLjs\"",
    "mtime": "2023-09-20T16:57:17.640Z",
    "size": 16958,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/about.759b0970.js": {
    "type": "application/javascript",
    "etag": "\"edc-KlPkqKh0JbOjaBd5pUBIiJuebA0\"",
    "mtime": "2023-09-20T17:33:25.861Z",
    "size": 3804,
    "path": "../public/_nuxt/about.759b0970.js"
  },
  "/_nuxt/AboutFour.b4029667.js": {
    "type": "application/javascript",
    "etag": "\"6c5-i5VyCMbl1fM5KL1gmEDf6Us/+cA\"",
    "mtime": "2023-09-20T17:33:25.861Z",
    "size": 1733,
    "path": "../public/_nuxt/AboutFour.b4029667.js"
  },
  "/_nuxt/AboutTwo.vue.35abde29.js": {
    "type": "application/javascript",
    "etag": "\"809-RDDdq2mbPVPGDVBxCiXpr/kxoy0\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 2057,
    "path": "../public/_nuxt/AboutTwo.vue.35abde29.js"
  },
  "/_nuxt/blog-classic.b8852b38.js": {
    "type": "application/javascript",
    "etag": "\"a60-2F7vu3DGJkl1Vt5D+0BEvA0YVds\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 2656,
    "path": "../public/_nuxt/blog-classic.b8852b38.js"
  },
  "/_nuxt/blog-details.e984a84d.js": {
    "type": "application/javascript",
    "etag": "\"1c7c-fgFwOzDZQ+nI7LBgAQkZDfzvTqc\"",
    "mtime": "2023-09-20T17:33:25.863Z",
    "size": 7292,
    "path": "../public/_nuxt/blog-details.e984a84d.js"
  },
  "/_nuxt/blog.e9925ec0.js": {
    "type": "application/javascript",
    "etag": "\"933-UQw399rWzCnOHo7lZUamUzZ7Z+4\"",
    "mtime": "2023-09-20T17:33:25.855Z",
    "size": 2355,
    "path": "../public/_nuxt/blog.e9925ec0.js"
  },
  "/_nuxt/BlogGridItem.8802f8d3.js": {
    "type": "application/javascript",
    "etag": "\"274-UT2ypVO7OWL198qUuuH6AyP6SF8\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 628,
    "path": "../public/_nuxt/BlogGridItem.8802f8d3.js"
  },
  "/_nuxt/BlogSectionOne.203cc860.js": {
    "type": "application/javascript",
    "etag": "\"b3b-Keq7GGA+e/dd3mAPE5HaPnW31xc\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 2875,
    "path": "../public/_nuxt/BlogSectionOne.203cc860.js"
  },
  "/_nuxt/BlogSectionOne.5a03298f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"24-MTKWFoEj+m6iW9EGt9HBHFKaE6A\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 36,
    "path": "../public/_nuxt/BlogSectionOne.5a03298f.css"
  },
  "/_nuxt/BlogSidebar.fab16d2e.js": {
    "type": "application/javascript",
    "etag": "\"9cd-P60LQIAH9xQTFnngW1BXXP5Ts+8\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 2509,
    "path": "../public/_nuxt/BlogSidebar.fab16d2e.js"
  },
  "/_nuxt/BrandLogoCarousel.52a97760.js": {
    "type": "application/javascript",
    "etag": "\"204f-10/29zvMQA67BZBEjRFoAshPLPk\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 8271,
    "path": "../public/_nuxt/BrandLogoCarousel.52a97760.js"
  },
  "/_nuxt/BreadcrumbOne.4ca7f74d.js": {
    "type": "application/javascript",
    "etag": "\"34f-Uv473vLoIyz5Z8tPbJmx8KWthLs\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 847,
    "path": "../public/_nuxt/BreadcrumbOne.4ca7f74d.js"
  },
  "/_nuxt/CallToActionOne.8546bf16.js": {
    "type": "application/javascript",
    "etag": "\"893-Jmmti3ciUBFq1Xs2vOUA/+Q3akY\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 2195,
    "path": "../public/_nuxt/CallToActionOne.8546bf16.js"
  },
  "/_nuxt/CallToActionTwo.e4241ac7.js": {
    "type": "application/javascript",
    "etag": "\"51f-BlLxNkjkqqsL86Jw2Z9kJDtO2TI\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 1311,
    "path": "../public/_nuxt/CallToActionTwo.e4241ac7.js"
  },
  "/_nuxt/comment3.20bd032f.js": {
    "type": "application/javascript",
    "etag": "\"14b-gsiLwwjk1F6EkxHapIIy2JL9pDs\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 331,
    "path": "../public/_nuxt/comment3.20bd032f.js"
  },
  "/_nuxt/composables.b0559551.js": {
    "type": "application/javascript",
    "etag": "\"61-btfadvH1ZRHasFZZOmlnmLXPu2I\"",
    "mtime": "2023-09-20T17:33:25.861Z",
    "size": 97,
    "path": "../public/_nuxt/composables.b0559551.js"
  },
  "/_nuxt/contact-us.368d0ab4.js": {
    "type": "application/javascript",
    "etag": "\"90b-SZgLC31Uji4nWMhcLKTn4qxY1c0\"",
    "mtime": "2023-09-20T17:33:25.858Z",
    "size": 2315,
    "path": "../public/_nuxt/contact-us.368d0ab4.js"
  },
  "/_nuxt/default.fe4bb2ea.js": {
    "type": "application/javascript",
    "etag": "\"e0-tTHW5LfhMRxR+7+8g7Enwm3lCWk\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 224,
    "path": "../public/_nuxt/default.fe4bb2ea.js"
  },
  "/_nuxt/entry.45ed8505.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"52055-JHoEeMpVrBkJFBbZduYcpp08aVg\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 335957,
    "path": "../public/_nuxt/entry.45ed8505.css"
  },
  "/_nuxt/entry.82e2d082.js": {
    "type": "application/javascript",
    "etag": "\"357c5-KGOyUuwfYUxq03pufQ7bw2z6cug\"",
    "mtime": "2023-09-20T17:33:25.865Z",
    "size": 219077,
    "path": "../public/_nuxt/entry.82e2d082.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-09-20T17:33:25.855Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.b269d358.js": {
    "type": "application/javascript",
    "etag": "\"8f9-/H7f7w2/O8Hhxu0bzjwFaJ8ykho\"",
    "mtime": "2023-09-20T17:33:25.864Z",
    "size": 2297,
    "path": "../public/_nuxt/error-404.b269d358.js"
  },
  "/_nuxt/error-500.1657ed64.js": {
    "type": "application/javascript",
    "etag": "\"77d-pZ13vHbEyFVWPOb9NOVSo+8yXb0\"",
    "mtime": "2023-09-20T17:33:25.864Z",
    "size": 1917,
    "path": "../public/_nuxt/error-500.1657ed64.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-09-20T17:33:25.851Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.2fccd774.js": {
    "type": "application/javascript",
    "etag": "\"4b0-lxZ+/mR5lt4LiryZyotzNYNvFMw\"",
    "mtime": "2023-09-20T17:33:25.858Z",
    "size": 1200,
    "path": "../public/_nuxt/error-component.2fccd774.js"
  },
  "/_nuxt/error.4b853568.js": {
    "type": "application/javascript",
    "etag": "\"3d7-T4lGI3BlwpCupoaMnNu6KQ+XgT4\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 983,
    "path": "../public/_nuxt/error.4b853568.js"
  },
  "/_nuxt/error.ccd17648.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"127-jnBioH2tsaMs/dh0Tu6sabSXEME\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 295,
    "path": "../public/_nuxt/error.ccd17648.css"
  },
  "/_nuxt/fa-brands-400.8ea87917.woff2": {
    "type": "font/woff2",
    "etag": "\"12bc0-BhPH67pV7kfvMCwPd2YyRpL4mac\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 76736,
    "path": "../public/_nuxt/fa-brands-400.8ea87917.woff2"
  },
  "/_nuxt/fa-brands-400.9b3a8965.svg": {
    "type": "image/svg+xml",
    "etag": "\"b781c-t/0wNeg8I8cgyfWVevMdfiiPtOs\"",
    "mtime": "2023-09-20T17:33:25.851Z",
    "size": 751644,
    "path": "../public/_nuxt/fa-brands-400.9b3a8965.svg"
  },
  "/_nuxt/fa-brands-400.cda59d6e.ttf": {
    "type": "font/ttf",
    "etag": "\"20b64-irkHCD/sqqKp7JOyf4hK10VzcFw\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 133988,
    "path": "../public/_nuxt/fa-brands-400.cda59d6e.ttf"
  },
  "/_nuxt/fa-brands-400.e4299464.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"20c96-0f/WNAzb9yiQzLZ/MgFer8XfUac\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 134294,
    "path": "../public/_nuxt/fa-brands-400.e4299464.eot"
  },
  "/_nuxt/fa-brands-400.f9217f66.woff": {
    "type": "font/woff",
    "etag": "\"15f84-Hh8Cv6ieF5/i3RODJzuIEqqHNBg\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 89988,
    "path": "../public/_nuxt/fa-brands-400.f9217f66.woff"
  },
  "/_nuxt/fa-regular-400.62f1f2b9.svg": {
    "type": "image/svg+xml",
    "etag": "\"2386b-Ip3sokZfqe/IwD0OvrmgHBVZgi4\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 145515,
    "path": "../public/_nuxt/fa-regular-400.62f1f2b9.svg"
  },
  "/_nuxt/fa-regular-400.79d08806.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"84f2-Zw+wHkkwrkb+jW0rderSiPVOjmE\"",
    "mtime": "2023-09-20T17:33:25.849Z",
    "size": 34034,
    "path": "../public/_nuxt/fa-regular-400.79d08806.eot"
  },
  "/_nuxt/fa-regular-400.cb9e9e69.woff": {
    "type": "font/woff",
    "etag": "\"3f94-OtT05LH7Pt7j1Lol5s3+0vC4ilQ\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 16276,
    "path": "../public/_nuxt/fa-regular-400.cb9e9e69.woff"
  },
  "/_nuxt/fa-regular-400.e42a8844.woff2": {
    "type": "font/woff2",
    "etag": "\"33a8-E1F1Ka/6OeJYXFkayubcM2tqqRc\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 13224,
    "path": "../public/_nuxt/fa-regular-400.e42a8844.woff2"
  },
  "/_nuxt/fa-regular-400.e8711bbb.ttf": {
    "type": "font/ttf",
    "etag": "\"83c8-w0rNaBjfbba+QaLjMYhnZdYB8us\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 33736,
    "path": "../public/_nuxt/fa-regular-400.e8711bbb.ttf"
  },
  "/_nuxt/fa-solid-900.25630646.svg": {
    "type": "image/svg+xml",
    "etag": "\"e1979-Aju0gbZd2M3rjEJMqQDzhmKSv7A\"",
    "mtime": "2023-09-20T17:33:25.851Z",
    "size": 924025,
    "path": "../public/_nuxt/fa-solid-900.25630646.svg"
  },
  "/_nuxt/fa-solid-900.373c04fd.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"31916-6oRcWb7kpcbbd0uNgGD1ZBt4muk\"",
    "mtime": "2023-09-20T17:33:25.845Z",
    "size": 203030,
    "path": "../public/_nuxt/fa-solid-900.373c04fd.eot"
  },
  "/_nuxt/fa-solid-900.3f6d3488.woff": {
    "type": "font/woff",
    "etag": "\"18d10-oirNdpfzbn1MwxqFPHDndurFS7E\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 101648,
    "path": "../public/_nuxt/fa-solid-900.3f6d3488.woff"
  },
  "/_nuxt/fa-solid-900.9834b82a.woff2": {
    "type": "font/woff2",
    "etag": "\"131bc-DMssgUp+TKEsR3iCFjOAnLA2Hqo\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 78268,
    "path": "../public/_nuxt/fa-solid-900.9834b82a.woff2"
  },
  "/_nuxt/fa-solid-900.af639750.ttf": {
    "type": "font/ttf",
    "etag": "\"317f8-64kU9rF5e0XuCIPmCJ2SaV2flEE\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 202744,
    "path": "../public/_nuxt/fa-solid-900.af639750.ttf"
  },
  "/_nuxt/FeatureOne.26996c88.js": {
    "type": "application/javascript",
    "etag": "\"7f0-z5E1wQzdugUzV+VXmnh/KStfQ6A\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 2032,
    "path": "../public/_nuxt/FeatureOne.26996c88.js"
  },
  "/_nuxt/funfacts.cab4d971.js": {
    "type": "application/javascript",
    "etag": "\"d5-2SmAy9Lr4A9ZsMOrbraQwih+cWo\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 213,
    "path": "../public/_nuxt/funfacts.cab4d971.js"
  },
  "/_nuxt/HeroFixedBanner.d8dd99cb.js": {
    "type": "application/javascript",
    "etag": "\"4ad-5xXVqJrQvV3I6M10ZkW/a4pGzj8\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 1197,
    "path": "../public/_nuxt/HeroFixedBanner.d8dd99cb.js"
  },
  "/_nuxt/home-three.31c437e3.js": {
    "type": "application/javascript",
    "etag": "\"2fd9-ZjS6j59SE/Sjbxv5Qo/VXywbQh8\"",
    "mtime": "2023-09-20T17:33:25.865Z",
    "size": 12249,
    "path": "../public/_nuxt/home-three.31c437e3.js"
  },
  "/_nuxt/home-three.8b6e9104.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"146-vWBtYJWt0XSnbsMkpszSw/h1aDE\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 326,
    "path": "../public/_nuxt/home-three.8b6e9104.css"
  },
  "/_nuxt/home-two.cea25cf1.js": {
    "type": "application/javascript",
    "etag": "\"15fb-+Wo5g2pIJyldN06KdBjlTmkF+Jw\"",
    "mtime": "2023-09-20T17:33:25.864Z",
    "size": 5627,
    "path": "../public/_nuxt/home-two.cea25cf1.js"
  },
  "/_nuxt/index.2d301979.js": {
    "type": "application/javascript",
    "etag": "\"3a9-DSQmU8AfROVi53f0TzWzrygCRG0\"",
    "mtime": "2023-09-20T17:33:25.861Z",
    "size": 937,
    "path": "../public/_nuxt/index.2d301979.js"
  },
  "/_nuxt/index.2d961a4c.js": {
    "type": "application/javascript",
    "etag": "\"d06-zNQldWmeszmns3bQ6jroqJgxHQY\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 3334,
    "path": "../public/_nuxt/index.2d961a4c.js"
  },
  "/_nuxt/index.dd861c3c.js": {
    "type": "application/javascript",
    "etag": "\"2325-7CHvMvhhOEVzVrmfCU7qvjaVW8s\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 8997,
    "path": "../public/_nuxt/index.dd861c3c.js"
  },
  "/_nuxt/index.e6e37577.js": {
    "type": "application/javascript",
    "etag": "\"5c1-1lphYXDnWv6yTu/HFMNePVyrYGk\"",
    "mtime": "2023-09-20T17:33:25.861Z",
    "size": 1473,
    "path": "../public/_nuxt/index.e6e37577.js"
  },
  "/_nuxt/linea-basic-message-txt.e062e4a7.js": {
    "type": "application/javascript",
    "etag": "\"d5-FcfFguW6pYdWNZtR2JJohRBauIY\"",
    "mtime": "2023-09-20T17:33:25.861Z",
    "size": 213,
    "path": "../public/_nuxt/linea-basic-message-txt.e062e4a7.js"
  },
  "/_nuxt/nuxt-link.1c79b736.js": {
    "type": "application/javascript",
    "etag": "\"e53-VpqUsu/ll/3cLokU8EQ19HusmxI\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 3667,
    "path": "../public/_nuxt/nuxt-link.1c79b736.js"
  },
  "/_nuxt/project-details.528e9641.js": {
    "type": "application/javascript",
    "etag": "\"12c5-wI3hHuxxHv2avkO3KlSJNxr+d9E\"",
    "mtime": "2023-09-20T17:33:25.861Z",
    "size": 4805,
    "path": "../public/_nuxt/project-details.528e9641.js"
  },
  "/_nuxt/SearchPopup.b3075680.js": {
    "type": "application/javascript",
    "etag": "\"333-TL1JeoxP8R7BxSmEMUEFjnyYULc\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 819,
    "path": "../public/_nuxt/SearchPopup.b3075680.js"
  },
  "/_nuxt/SectionTitle.539723b2.js": {
    "type": "application/javascript",
    "etag": "\"195-aG5IaAlX3Bk4ppaxBeBcUAH61wM\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 405,
    "path": "../public/_nuxt/SectionTitle.539723b2.js"
  },
  "/_nuxt/service.52cb9f94.js": {
    "type": "application/javascript",
    "etag": "\"5a3-qIfNJfrV9pmpNjVB5fI9QMpvYe0\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 1443,
    "path": "../public/_nuxt/service.52cb9f94.js"
  },
  "/_nuxt/ShapeWithAnimation.3714dc29.js": {
    "type": "application/javascript",
    "etag": "\"459f-qrIFYbNDk539XeF2YIoFDaF6YZc\"",
    "mtime": "2023-09-20T17:33:25.865Z",
    "size": 17823,
    "path": "../public/_nuxt/ShapeWithAnimation.3714dc29.js"
  },
  "/_nuxt/swiper-slide.87b8027d.js": {
    "type": "application/javascript",
    "etag": "\"14249-CgmgP8IAxrDIAGjTNp4vH5hAu/g\"",
    "mtime": "2023-09-20T17:33:25.865Z",
    "size": 82505,
    "path": "../public/_nuxt/swiper-slide.87b8027d.js"
  },
  "/_nuxt/TestimonialSectionOne.9181dfde.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15b6-0b00+zNuXab52CcFMHeZArUZY5w\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 5558,
    "path": "../public/_nuxt/TestimonialSectionOne.9181dfde.css"
  },
  "/_nuxt/TestimonialSectionOne.b4317c8b.js": {
    "type": "application/javascript",
    "etag": "\"28d4-HwS1VTDl9sCOYHjKyX36QH7ZAIg\"",
    "mtime": "2023-09-20T17:33:25.864Z",
    "size": 10452,
    "path": "../public/_nuxt/TestimonialSectionOne.b4317c8b.js"
  },
  "/_nuxt/TheFooter.0b0ef97f.js": {
    "type": "application/javascript",
    "etag": "\"194c-UU3aCCijqsjcg5HlOFrVKCctYdc\"",
    "mtime": "2023-09-20T17:33:25.864Z",
    "size": 6476,
    "path": "../public/_nuxt/TheFooter.0b0ef97f.js"
  },
  "/_nuxt/TheFooter.dcd3e745.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75d-5WdXDZ3D2pyz60srCwJn33olhsQ\"",
    "mtime": "2023-09-20T17:33:25.850Z",
    "size": 1885,
    "path": "../public/_nuxt/TheFooter.dcd3e745.css"
  },
  "/_nuxt/_slug_.8b8bc1b0.js": {
    "type": "application/javascript",
    "etag": "\"4aa-0zc3XkErVZQp8eRGzvLAkFDOwGM\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 1194,
    "path": "../public/_nuxt/_slug_.8b8bc1b0.js"
  },
  "/_nuxt/_slug_.bbb99aa1.js": {
    "type": "application/javascript",
    "etag": "\"e2f-i1IcpTLwLrDObjNHB7kj+nAToPs\"",
    "mtime": "2023-09-20T17:33:25.862Z",
    "size": 3631,
    "path": "../public/_nuxt/_slug_.bbb99aa1.js"
  },
  "/_nuxt/_slug_.d531c458.js": {
    "type": "application/javascript",
    "etag": "\"4bc-QnIuDjm3/bQXrhs0fpNLruOQkXQ\"",
    "mtime": "2023-09-20T17:33:25.856Z",
    "size": 1212,
    "path": "../public/_nuxt/_slug_.d531c458.js"
  },
  "/_nuxt/_slug_.ddc04fa4.js": {
    "type": "application/javascript",
    "etag": "\"1cb9-Osoh0nWZ3t5UUALwbtKTW/RnYxY\"",
    "mtime": "2023-09-20T17:33:25.859Z",
    "size": 7353,
    "path": "../public/_nuxt/_slug_.ddc04fa4.js"
  },
  "/images/about/about-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43f-CaiiKrHdoACCfc3bftdyTIALgvg\"",
    "mtime": "2023-09-20T16:57:17.653Z",
    "size": 54335,
    "path": "../public/images/about/about-1.jpg"
  },
  "/images/about/about-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"895e-Baf46v/HDwqtCXqGY3KDkvpYyGg\"",
    "mtime": "2023-09-20T16:57:17.653Z",
    "size": 35166,
    "path": "../public/images/about/about-2.jpg"
  },
  "/images/about/about-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"11c18-yGZaCW2gHyqiD1qr21IS+FYdFzc\"",
    "mtime": "2023-09-20T16:57:17.654Z",
    "size": 72728,
    "path": "../public/images/about/about-3.jpg"
  },
  "/images/about/about-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1158c-Xtqyfjw6FauTwVZHaYtkDpSuflw\"",
    "mtime": "2023-09-20T16:57:17.654Z",
    "size": 71052,
    "path": "../public/images/about/about-4.jpg"
  },
  "/images/about/about-5.jpg": {
    "type": "image/jpeg",
    "etag": "\"25da1-Es3/u/CH60j9cTYuG9EUXGlICTI\"",
    "mtime": "2023-09-20T17:30:49.386Z",
    "size": 155041,
    "path": "../public/images/about/about-5.jpg"
  },
  "/images/about/about-6.jpg": {
    "type": "image/jpeg",
    "etag": "\"ae1f-xXmYZMq7kF+JZ2a1T9UQsWrrU6U\"",
    "mtime": "2023-09-20T17:09:01.992Z",
    "size": 44575,
    "path": "../public/images/about/about-6.jpg"
  },
  "/images/about/agency_about_1.jpg": {
    "type": "image/jpeg",
    "etag": "\"9e33-C/uSI0AOmQa+ZUBxqu7Eu003eXE\"",
    "mtime": "2023-09-20T16:57:17.655Z",
    "size": 40499,
    "path": "../public/images/about/agency_about_1.jpg"
  },
  "/images/about/agency_about_2.jpg": {
    "type": "image/jpeg",
    "etag": "\"c451-zo7/Y9oNVBYXs3yIAQ8m80h6zuI\"",
    "mtime": "2023-09-20T16:57:17.655Z",
    "size": 50257,
    "path": "../public/images/about/agency_about_2.jpg"
  },
  "/images/bg/breadcrumb-bg-five.jpg": {
    "type": "image/jpeg",
    "etag": "\"49ee0-4pPfe+aICNZtToNRtIzj7gjnLZk\"",
    "mtime": "2023-09-20T16:57:17.658Z",
    "size": 302816,
    "path": "../public/images/bg/breadcrumb-bg-five.jpg"
  },
  "/images/bg/breadcrumb-bg-four.jpg": {
    "type": "image/jpeg",
    "etag": "\"5ff66-2E21fKKa02ByUfjJYyL/yC4YGbQ\"",
    "mtime": "2023-09-20T16:57:17.659Z",
    "size": 393062,
    "path": "../public/images/bg/breadcrumb-bg-four.jpg"
  },
  "/images/bg/breadcrumb-bg-three.jpg": {
    "type": "image/jpeg",
    "etag": "\"708e4-fxIvIHTeKPJEGbfAPG4bSt77coo\"",
    "mtime": "2023-09-20T16:57:17.661Z",
    "size": 461028,
    "path": "../public/images/bg/breadcrumb-bg-three.jpg"
  },
  "/images/bg/breadcrumb-bg-two.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ee71-zv5sRe3e/+YGRw52WBdZbNCVsqY\"",
    "mtime": "2023-09-20T16:57:17.662Z",
    "size": 257649,
    "path": "../public/images/bg/breadcrumb-bg-two.jpg"
  },
  "/images/bg/breadcrumb-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"44dda-Lkoj63HXwUjZU8xY+Zwe7F49kBc\"",
    "mtime": "2023-09-20T16:57:17.663Z",
    "size": 282074,
    "path": "../public/images/bg/breadcrumb-bg.jpg"
  },
  "/images/bg/contact-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"29c7b-mD3yDGiaCXxZJEgEXDD3B3WIC90\"",
    "mtime": "2023-09-20T16:57:17.664Z",
    "size": 171131,
    "path": "../public/images/bg/contact-bg.jpg"
  },
  "/images/bg/mobile-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"14576-a1d3aVflMk428rR1jYhZqbW93Nw\"",
    "mtime": "2023-09-20T16:57:17.665Z",
    "size": 83318,
    "path": "../public/images/bg/mobile-bg.jpg"
  },
  "/images/bg/newsletter.jpg": {
    "type": "image/jpeg",
    "etag": "\"30f0a-WLn5xfCSVGcact87qcBQUUt6ESk\"",
    "mtime": "2023-09-20T16:57:17.666Z",
    "size": 200458,
    "path": "../public/images/bg/newsletter.jpg"
  },
  "/images/bg/video-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"3b3f0-jNJQc7rQz34D7i2cSPB2hXzt6Ro\"",
    "mtime": "2023-09-20T16:57:17.667Z",
    "size": 242672,
    "path": "../public/images/bg/video-bg.jpg"
  },
  "/images/brand/client-logo-01.png": {
    "type": "image/png",
    "etag": "\"1fe-GSNsvO59Wl1m/lRDG9C+L2YZUu0\"",
    "mtime": "2023-09-20T16:57:17.673Z",
    "size": 510,
    "path": "../public/images/brand/client-logo-01.png"
  },
  "/images/brand/client-logo-02.png": {
    "type": "image/png",
    "etag": "\"432-WInjbsErSCv2opWo4FsXnsS/ZoU\"",
    "mtime": "2023-09-20T16:57:17.673Z",
    "size": 1074,
    "path": "../public/images/brand/client-logo-02.png"
  },
  "/images/brand/client-logo-03.png": {
    "type": "image/png",
    "etag": "\"407-6irEwHzqBcxJTB0WRM2t3M1XxHA\"",
    "mtime": "2023-09-20T16:57:17.674Z",
    "size": 1031,
    "path": "../public/images/brand/client-logo-03.png"
  },
  "/images/brand/client-logo-04.png": {
    "type": "image/png",
    "etag": "\"380-RF3KXkbpJ8yooYUvcHSqOGgid5E\"",
    "mtime": "2023-09-20T16:57:17.674Z",
    "size": 896,
    "path": "../public/images/brand/client-logo-04.png"
  },
  "/images/brand/client-logo-05.png": {
    "type": "image/png",
    "etag": "\"412-U1wMytvVBRnQLmlB1Lwq5O7V+3g\"",
    "mtime": "2023-09-20T16:57:17.674Z",
    "size": 1042,
    "path": "../public/images/brand/client-logo-05.png"
  },
  "/images/brand/client-logo-06.png": {
    "type": "image/png",
    "etag": "\"408-Vd+Kc1C3LVMi08ppEx9lw4KWE7w\"",
    "mtime": "2023-09-20T16:57:17.675Z",
    "size": 1032,
    "path": "../public/images/brand/client-logo-06.png"
  },
  "/images/blog/blog-author.png": {
    "type": "image/png",
    "etag": "\"1f34-PVlqOtvhNQap2U5VxfFqeszkyeU\"",
    "mtime": "2023-09-20T16:57:17.673Z",
    "size": 7988,
    "path": "../public/images/blog/blog-author.png"
  },
  "/images/comment/comment1.png": {
    "type": "image/png",
    "etag": "\"149b-QMK3qMjgttEd4SxxxrskXPTiGwU\"",
    "mtime": "2023-09-20T16:57:17.675Z",
    "size": 5275,
    "path": "../public/images/comment/comment1.png"
  },
  "/images/comment/comment2.png": {
    "type": "image/png",
    "etag": "\"13d4-PWXpjIzqQy/y3ZJXOyeyWKpR/Sg\"",
    "mtime": "2023-09-20T16:57:17.675Z",
    "size": 5076,
    "path": "../public/images/comment/comment2.png"
  },
  "/images/comment/comment3.png": {
    "type": "image/png",
    "etag": "\"1356-OO+OvJZZ1k4jXUABWzfa5jnFRKE\"",
    "mtime": "2023-09-20T16:57:17.676Z",
    "size": 4950,
    "path": "../public/images/comment/comment3.png"
  },
  "/images/comment/comment4.png": {
    "type": "image/png",
    "etag": "\"1457-N8n0/3JqDYPEb7rvg98JgErfpiA\"",
    "mtime": "2023-09-20T16:57:17.676Z",
    "size": 5207,
    "path": "../public/images/comment/comment4.png"
  },
  "/images/faq/faq-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"14e2e-JSxLyB1OJUfe4cVIfpFM3ta6Akg\"",
    "mtime": "2023-09-20T16:57:17.677Z",
    "size": 85550,
    "path": "../public/images/faq/faq-1.jpg"
  },
  "/images/faq/faq-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"8bc3-NyDujlpjtS4DULXiOasaQwFpsyA\"",
    "mtime": "2023-09-20T16:57:17.677Z",
    "size": 35779,
    "path": "../public/images/faq/faq-2.jpg"
  },
  "/images/hero-image/havas.jpg": {
    "type": "image/jpeg",
    "etag": "\"49fd89-9/EixJHtNrUBzl32ByHMiZmb8KI\"",
    "mtime": "2023-09-20T16:57:17.701Z",
    "size": 4849033,
    "path": "../public/images/hero-image/havas.jpg"
  },
  "/images/hero-image/hero-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c146-cdYHYyl+llUvOxEcpDq/5oUQE3M\"",
    "mtime": "2023-09-20T16:57:17.704Z",
    "size": 377158,
    "path": "../public/images/hero-image/hero-1.jpg"
  },
  "/images/hero-image/hero-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"34808-LldqjqrxfX/JPaF+Gl9hs7MH2/c\"",
    "mtime": "2023-09-20T16:57:17.705Z",
    "size": 215048,
    "path": "../public/images/hero-image/hero-2.jpg"
  },
  "/images/hero-image/hero-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"58050-roF8a7CfkYDGgP+GkO+BJaZYD9Q\"",
    "mtime": "2023-09-20T16:57:17.707Z",
    "size": 360528,
    "path": "../public/images/hero-image/hero-3.jpg"
  },
  "/images/hero-image/hero-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"69039-pKzh2lH0fhK6SNiOvrv9BHm3BHQ\"",
    "mtime": "2023-09-20T16:57:17.709Z",
    "size": 430137,
    "path": "../public/images/hero-image/hero-4.jpg"
  },
  "/images/icon-animation/icon-1.png": {
    "type": "image/png",
    "etag": "\"70a-AowKMz9FqnYnTktSxR0LaXRZRMs\"",
    "mtime": "2023-09-20T16:57:17.709Z",
    "size": 1802,
    "path": "../public/images/icon-animation/icon-1.png"
  },
  "/images/icon-animation/icon-2.png": {
    "type": "image/png",
    "etag": "\"427-GIMROgXYwZKG12YauVwqY2s8P/I\"",
    "mtime": "2023-09-20T16:57:17.709Z",
    "size": 1063,
    "path": "../public/images/icon-animation/icon-2.png"
  },
  "/images/icon-animation/icon-3.png": {
    "type": "image/png",
    "etag": "\"589-Ai73ohaZM6LfgEQH/Hqe1B9IgQ8\"",
    "mtime": "2023-09-20T16:57:17.710Z",
    "size": 1417,
    "path": "../public/images/icon-animation/icon-3.png"
  },
  "/images/icon-animation/icon-4.png": {
    "type": "image/png",
    "etag": "\"906-D1ZYBDmKQ+magXQ6IpiKk1L3bgE\"",
    "mtime": "2023-09-20T16:57:17.710Z",
    "size": 2310,
    "path": "../public/images/icon-animation/icon-4.png"
  },
  "/images/icon-animation/icon-5.png": {
    "type": "image/png",
    "etag": "\"6f0-WHqbpFM39f7YXeB/T4sfn+9iCgQ\"",
    "mtime": "2023-09-20T16:57:17.711Z",
    "size": 1776,
    "path": "../public/images/icon-animation/icon-5.png"
  },
  "/images/icon-animation/icon-6.png": {
    "type": "image/png",
    "etag": "\"4b1-yRlSzLqWTyUYq0EFh88bTne3E7c\"",
    "mtime": "2023-09-20T16:57:17.711Z",
    "size": 1201,
    "path": "../public/images/icon-animation/icon-6.png"
  },
  "/images/icon-animation/icon-7.png": {
    "type": "image/png",
    "etag": "\"48f-i2CKWPc0crt9IZ7cP2LPCyOzAlg\"",
    "mtime": "2023-09-20T16:57:17.711Z",
    "size": 1167,
    "path": "../public/images/icon-animation/icon-7.png"
  },
  "/images/icon-animation/icon-8.png": {
    "type": "image/png",
    "etag": "\"409-eQot4RV3HKq/D94Drcob58NiQdQ\"",
    "mtime": "2023-09-20T16:57:17.712Z",
    "size": 1033,
    "path": "../public/images/icon-animation/icon-8.png"
  },
  "/images/icon-animation/icon-9.png": {
    "type": "image/png",
    "etag": "\"3c7-GLLYvZRS1oQ70JY7S7MQqfHVo2Q\"",
    "mtime": "2023-09-20T16:57:17.712Z",
    "size": 967,
    "path": "../public/images/icon-animation/icon-9.png"
  },
  "/images/logo/footer-havas.svg": {
    "type": "image/svg+xml",
    "etag": "\"ef9-gF8QWnz4X/S7quHx7x2l8ANy6qY\"",
    "mtime": "2023-09-20T16:57:17.712Z",
    "size": 3833,
    "path": "../public/images/logo/footer-havas.svg"
  },
  "/images/logo/footer-logo.png": {
    "type": "image/png",
    "etag": "\"79a-WsYqxB8zK7kcVliIenf3bWISZAs\"",
    "mtime": "2023-09-20T16:57:17.713Z",
    "size": 1946,
    "path": "../public/images/logo/footer-logo.png"
  },
  "/images/logo/header-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"ef7-3ta+6cBNhJlLdKhynv4b0LGk3OE\"",
    "mtime": "2023-09-20T16:57:17.713Z",
    "size": 3831,
    "path": "../public/images/logo/header-logo.svg"
  },
  "/images/logo/logo.png": {
    "type": "image/png",
    "etag": "\"651-7RorF9XFsBRgNMRiIpjulwqaDlE\"",
    "mtime": "2023-09-20T16:57:17.713Z",
    "size": 1617,
    "path": "../public/images/logo/logo.png"
  },
  "/images/others/check-tick.png": {
    "type": "image/png",
    "etag": "\"4ec-4XRLcFfGXu7m6X3chcqPxdX+5vo\"",
    "mtime": "2023-09-20T16:57:17.714Z",
    "size": 1260,
    "path": "../public/images/others/check-tick.png"
  },
  "/images/others/page-404-image.png": {
    "type": "image/png",
    "etag": "\"2b68-l7hTXpOouNL9gScIN+OaMS4rVWc\"",
    "mtime": "2023-09-20T16:57:17.714Z",
    "size": 11112,
    "path": "../public/images/others/page-404-image.png"
  },
  "/images/pagination/blog-pagination-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d6a-sX5oCcgFtYL3Xj9mP9Qd0DIrAkg\"",
    "mtime": "2023-09-20T16:57:17.715Z",
    "size": 28010,
    "path": "../public/images/pagination/blog-pagination-2.jpg"
  },
  "/images/pagination/blog-pagination.jpg": {
    "type": "image/jpeg",
    "etag": "\"5de1-oXI3Tb/BDWGGpwkGuLC7Uc9dzSw\"",
    "mtime": "2023-09-20T16:57:17.715Z",
    "size": 24033,
    "path": "../public/images/pagination/blog-pagination.jpg"
  },
  "/images/portfolio/1.png": {
    "type": "image/png",
    "etag": "\"3e3c-Y6J/0VSuvQholyHzNmwsHnBxeo0\"",
    "mtime": "2023-09-20T16:57:17.716Z",
    "size": 15932,
    "path": "../public/images/portfolio/1.png"
  },
  "/images/portfolio/2.png": {
    "type": "image/png",
    "etag": "\"2d37-2sT3G8FzU+VwgbZa/xr+smwzzg4\"",
    "mtime": "2023-09-20T16:57:17.716Z",
    "size": 11575,
    "path": "../public/images/portfolio/2.png"
  },
  "/images/portfolio/3.png": {
    "type": "image/png",
    "etag": "\"2561-gfQXDJGvd88cPMnBuNEO8Qtnujg\"",
    "mtime": "2023-09-20T16:57:17.717Z",
    "size": 9569,
    "path": "../public/images/portfolio/3.png"
  },
  "/images/portfolio/4.png": {
    "type": "image/png",
    "etag": "\"2766-mvmiuRNmdcRLrgFn16adC7QIv68\"",
    "mtime": "2023-09-20T16:57:17.717Z",
    "size": 10086,
    "path": "../public/images/portfolio/4.png"
  },
  "/images/shape-animation/about-shape-1.png": {
    "type": "image/png",
    "etag": "\"e99-M4BPX+CYedbIec61dt83K1+pQHA\"",
    "mtime": "2023-09-20T16:57:17.723Z",
    "size": 3737,
    "path": "../public/images/shape-animation/about-shape-1.png"
  },
  "/images/shape-animation/contact-shape.png": {
    "type": "image/png",
    "etag": "\"75c-1a1ieoJRgI2XyVe7ci0gFHBPLLY\"",
    "mtime": "2023-09-20T16:57:17.724Z",
    "size": 1884,
    "path": "../public/images/shape-animation/contact-shape.png"
  },
  "/images/shape-animation/newsletter-shape.png": {
    "type": "image/png",
    "etag": "\"3bc-ZG0B0nYuH+oknfDQ6vIYALS+Hgc\"",
    "mtime": "2023-09-20T16:57:17.724Z",
    "size": 956,
    "path": "../public/images/shape-animation/newsletter-shape.png"
  },
  "/images/shape-animation/qute-shape-1.png": {
    "type": "image/png",
    "etag": "\"381-L1hywTTar2k2Fetj/O9A4rczU0M\"",
    "mtime": "2023-09-20T16:57:17.725Z",
    "size": 897,
    "path": "../public/images/shape-animation/qute-shape-1.png"
  },
  "/images/shape-animation/video-shape-1.png": {
    "type": "image/png",
    "etag": "\"34c-Et19zx7wLUGPkgVX6EK1l15A1DA\"",
    "mtime": "2023-09-20T16:57:17.725Z",
    "size": 844,
    "path": "../public/images/shape-animation/video-shape-1.png"
  },
  "/images/project/project-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"94b9-hv5ITG1Pl2prBadoKu955J0fyEI\"",
    "mtime": "2023-09-20T16:57:17.718Z",
    "size": 38073,
    "path": "../public/images/project/project-1.jpg"
  },
  "/images/project/project-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"defb-PPa8JDe/g6mJRTmZ6x6KIxyrwtM\"",
    "mtime": "2023-09-20T16:57:17.718Z",
    "size": 57083,
    "path": "../public/images/project/project-2.jpg"
  },
  "/images/project/project-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"c6c6-Vp92CgC8S32vvVCgd2/5Fw1IzlY\"",
    "mtime": "2023-09-20T16:57:17.719Z",
    "size": 50886,
    "path": "../public/images/project/project-3.jpg"
  },
  "/images/project/project-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"ad56-28Eaa+TpbjxQ758Cq0cH9WSKkG8\"",
    "mtime": "2023-09-20T16:57:17.719Z",
    "size": 44374,
    "path": "../public/images/project/project-4.jpg"
  },
  "/images/project/project-5.jpg": {
    "type": "image/jpeg",
    "etag": "\"8c99-RGL7RQv60aO/vPArcdl9Rt07UDg\"",
    "mtime": "2023-09-20T16:57:17.720Z",
    "size": 35993,
    "path": "../public/images/project/project-5.jpg"
  },
  "/images/project/project-6.jpg": {
    "type": "image/jpeg",
    "etag": "\"ab4a-8lO81kwUNhX+OMbWLDqTP88mXpQ\"",
    "mtime": "2023-09-20T16:57:17.720Z",
    "size": 43850,
    "path": "../public/images/project/project-6.jpg"
  },
  "/images/project/work-details-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"2c8dd-qPQWMpwo1u/KwBcbZiSnhkUijZo\"",
    "mtime": "2023-09-20T16:57:17.721Z",
    "size": 182493,
    "path": "../public/images/project/work-details-1.jpg"
  },
  "/images/project/work-details-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"9ea6-4Dtjunmmkm5XCeAKoCYPBY4KHx0\"",
    "mtime": "2023-09-20T16:57:17.721Z",
    "size": 40614,
    "path": "../public/images/project/work-details-2.jpg"
  },
  "/images/project/work-details-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"8749-+8P+29vzTvIcyJaeilSVig2qjS4\"",
    "mtime": "2023-09-20T16:57:17.722Z",
    "size": 34633,
    "path": "../public/images/project/work-details-3.jpg"
  },
  "/images/project/work-details-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"4088f-eaeAy8OqvIrxntuLLmGmf8XsR1M\"",
    "mtime": "2023-09-20T16:57:17.723Z",
    "size": 264335,
    "path": "../public/images/project/work-details-4.jpg"
  },
  "/images/skill/skill-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b711-JKQWHezKNRfeTAjO/yEhV5k9TVk\"",
    "mtime": "2023-09-20T16:57:17.726Z",
    "size": 46865,
    "path": "../public/images/skill/skill-1.jpg"
  },
  "/images/skill/skill-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1828c-PNs6veUqnL0QMRikvsKBUWz0q18\"",
    "mtime": "2023-09-20T16:57:17.726Z",
    "size": 98956,
    "path": "../public/images/skill/skill-2.jpg"
  },
  "/images/team/team-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"e68e-C6TsdF7iQFxJHiCHs87ia9KOTq4\"",
    "mtime": "2023-09-20T16:57:17.731Z",
    "size": 59022,
    "path": "../public/images/team/team-1.jpg"
  },
  "/images/team/team-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"10003-dV+WXl7ElWuw3MGikcb/HLjKz2w\"",
    "mtime": "2023-09-20T16:57:17.732Z",
    "size": 65539,
    "path": "../public/images/team/team-2.jpg"
  },
  "/images/team/team-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"10890-amQNobbzlJ/tW3zM0s/GYRnvp/I\"",
    "mtime": "2023-09-20T16:57:17.732Z",
    "size": 67728,
    "path": "../public/images/team/team-3.jpg"
  },
  "/images/team/team-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"11d43-Aw0RHPZ9Mp0KoZcD5aejhPZW6n8\"",
    "mtime": "2023-09-20T16:57:17.733Z",
    "size": 73027,
    "path": "../public/images/team/team-4.jpg"
  },
  "/images/testimonial/author-1.png": {
    "type": "image/png",
    "etag": "\"1bc9-eSbCTExXJx8EXotOR3zlWlJpsfk\"",
    "mtime": "2023-09-20T16:57:17.733Z",
    "size": 7113,
    "path": "../public/images/testimonial/author-1.png"
  },
  "/images/testimonial/author-2.png": {
    "type": "image/png",
    "etag": "\"1b31-7uKnp3wbVatp84IJHgP5dbaOSGs\"",
    "mtime": "2023-09-20T16:57:17.734Z",
    "size": 6961,
    "path": "../public/images/testimonial/author-2.png"
  },
  "/images/testimonial/author-3.png": {
    "type": "image/png",
    "etag": "\"1d0b-F0+YOs8YyBnIpbGSrj1yHh6JAAI\"",
    "mtime": "2023-09-20T16:57:17.734Z",
    "size": 7435,
    "path": "../public/images/testimonial/author-3.png"
  },
  "/images/video/about-video.jpg": {
    "type": "image/jpeg",
    "etag": "\"29bd5-C5I+JiJuQLxM1LfmHYWa/81P1Nw\"",
    "mtime": "2023-09-20T16:57:17.736Z",
    "size": 170965,
    "path": "../public/images/video/about-video.jpg"
  },
  "/images/video/skill-video.jpg": {
    "type": "image/jpeg",
    "etag": "\"a6d2-AmzI8TNE5/VZF2VFYNB+B40RfB4\"",
    "mtime": "2023-09-20T16:57:17.736Z",
    "size": 42706,
    "path": "../public/images/video/skill-video.jpg"
  },
  "/images/blog/370/blog-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"294d3-NY1eVlnt623rnABloRCSaJrYncM\"",
    "mtime": "2023-09-20T16:57:17.670Z",
    "size": 169171,
    "path": "../public/images/blog/370/blog-1.jpg"
  },
  "/images/blog/370/blog-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"18091-9awioiF0aIwTSaJ56ht0+tKU0pM\"",
    "mtime": "2023-09-20T16:57:17.671Z",
    "size": 98449,
    "path": "../public/images/blog/370/blog-2.jpg"
  },
  "/images/blog/370/blog-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"180df-35+s33J4NvuB6Lk5Ke9lqY9urfM\"",
    "mtime": "2023-09-20T16:57:17.671Z",
    "size": 98527,
    "path": "../public/images/blog/370/blog-3.jpg"
  },
  "/images/blog/370/blog-4.jpg": {
    "type": "image/jpeg",
    "etag": "\"29d99-Pj6yXBI1q2PPrRy2QAdIlI5OUpU\"",
    "mtime": "2023-09-20T16:57:17.673Z",
    "size": 171417,
    "path": "../public/images/blog/370/blog-4.jpg"
  },
  "/images/svg/linea/linea-basic-display.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a6-bqS0hmPbGyXYVHIsfjlDybReU0o\"",
    "mtime": "2023-09-20T16:57:17.727Z",
    "size": 934,
    "path": "../public/images/svg/linea/linea-basic-display.svg"
  },
  "/images/svg/linea/linea-basic-gear.svg": {
    "type": "image/svg+xml",
    "etag": "\"377-Oe0PS2d31TmJ28ZtiO4KJTeAU70\"",
    "mtime": "2023-09-20T16:57:17.727Z",
    "size": 887,
    "path": "../public/images/svg/linea/linea-basic-gear.svg"
  },
  "/images/svg/linea/linea-basic-mail-open-text-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"354-Cc6S7GBHbbBjsW36A9hyfuFGFZo\"",
    "mtime": "2023-09-20T16:57:17.728Z",
    "size": 852,
    "path": "../public/images/svg/linea/linea-basic-mail-open-text-white.svg"
  },
  "/images/svg/linea/linea-basic-mail-open-text.svg": {
    "type": "image/svg+xml",
    "etag": "\"4c8-bPzos3y5Lemhnbz0N6eMcxrdLGk\"",
    "mtime": "2023-09-20T16:57:17.728Z",
    "size": 1224,
    "path": "../public/images/svg/linea/linea-basic-mail-open-text.svg"
  },
  "/images/svg/linea/linea-basic-map-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b0-oMOFLGEkuZSkCZAfVXYyOBogjzo\"",
    "mtime": "2023-09-20T16:57:17.728Z",
    "size": 688,
    "path": "../public/images/svg/linea/linea-basic-map-white.svg"
  },
  "/images/svg/linea/linea-basic-map.svg": {
    "type": "image/svg+xml",
    "etag": "\"36e-fGftUPUTQUyMr6UW4ct5ieVbhIk\"",
    "mtime": "2023-09-20T16:57:17.729Z",
    "size": 878,
    "path": "../public/images/svg/linea/linea-basic-map.svg"
  },
  "/images/svg/linea/linea-basic-message-txt-white.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b5-sOBs/XSwJ2w2iNNI64mz3iAaX90\"",
    "mtime": "2023-09-20T16:57:17.729Z",
    "size": 693,
    "path": "../public/images/svg/linea/linea-basic-message-txt-white.svg"
  },
  "/images/svg/linea/linea-basic-message-txt.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a8-PsOSo/BKYecqJTdHh1CMjC6e6xY\"",
    "mtime": "2023-09-20T16:57:17.729Z",
    "size": 936,
    "path": "../public/images/svg/linea/linea-basic-message-txt.svg"
  },
  "/images/svg/linea/linea-basic-picture-multiple.svg": {
    "type": "image/svg+xml",
    "etag": "\"3b2-oit1mozuoUbRjB0bGFNrHb+3Vy4\"",
    "mtime": "2023-09-20T16:57:17.730Z",
    "size": 946,
    "path": "../public/images/svg/linea/linea-basic-picture-multiple.svg"
  },
  "/images/svg/linea/linea-basic-picture.svg": {
    "type": "image/svg+xml",
    "etag": "\"33d-SPR37VAGjSkUsiw69n8RvA0NugM\"",
    "mtime": "2023-09-20T16:57:17.730Z",
    "size": 829,
    "path": "../public/images/svg/linea/linea-basic-picture.svg"
  },
  "/images/svg/linea/linea-basic-target.svg": {
    "type": "image/svg+xml",
    "etag": "\"414-wEgnzMqfbnmlVzHFoW8Q7CDTNOs\"",
    "mtime": "2023-09-20T16:57:17.730Z",
    "size": 1044,
    "path": "../public/images/svg/linea/linea-basic-target.svg"
  },
  "/images/svg/linea/linea-ecommerce-cart-plus.svg": {
    "type": "image/svg+xml",
    "etag": "\"4da-ukFTSnpAN6we2DJ8hFjq+wB8mQI\"",
    "mtime": "2023-09-20T16:57:17.731Z",
    "size": 1242,
    "path": "../public/images/svg/linea/linea-ecommerce-cart-plus.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_cOaDay = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_cOaDay, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_cOaDay, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
