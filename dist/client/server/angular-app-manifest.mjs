
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/hotels"
  },
  {
    "renderMode": 2,
    "route": "/create-hotel"
  },
  {
    "renderMode": 2,
    "redirectTo": "/hotels",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6152, hash: 'b1ebd4d769a34bef56463c293e0773fb98fbf6f2e11f40bba3bf2d619a2798e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1168, hash: 'd21b35bd9549b56ac08d58b42576dfbd309ef4247e743ca63eb2972a62b2939f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'create-hotel/index.html': {size: 18884, hash: 'b1929947503c37c5720b024d557d4b2372cad33149dc95b2c69f705d2867112c', text: () => import('./assets-chunks/create-hotel_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 26783, hash: '0824600924ba75a5f8b2d0fb4b5fb2154ff57e4908bbf06de40e6ef465aa607a', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'hotels/index.html': {size: 34411, hash: 'ff8129ad86a240daac6f64ea1923ca747292d82a8d9b2545dacae9fb6bf7fcba', text: () => import('./assets-chunks/hotels_index_html.mjs').then(m => m.default)},
    'styles-K4B74LV3.css': {size: 304573, hash: 'fYjp0Co/stQ', text: () => import('./assets-chunks/styles-K4B74LV3_css.mjs').then(m => m.default)}
  },
};
