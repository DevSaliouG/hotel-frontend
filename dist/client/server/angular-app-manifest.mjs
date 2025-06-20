
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
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
    'index.csr.html': {size: 6153, hash: '1b31d39051c6dc64dd4d46778e5339a73155e27ee63405cd93a56b93cf210b82', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1169, hash: '611a4df482ada177bf68cee536f34d17a6dde1bf0563b848a25dc6a9f3fe4689', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'create-hotel/index.html': {size: 18886, hash: '190cd17c7efee7fe64a3b4992c461472e5ce705551f08bafb57c40a18816450e', text: () => import('./assets-chunks/create-hotel_index_html.mjs').then(m => m.default)},
    'hotels/index.html': {size: 33748, hash: '94d4b77911e818ca91ba28a6a631275976cf2f28cb4df2153841953d5b3ba111', text: () => import('./assets-chunks/hotels_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 26784, hash: '9f05329d208a6a4387bc40c514a412c6525100e4a8596642f9679059f28dd873', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-K4B74LV3.css': {size: 304573, hash: 'fYjp0Co/stQ', text: () => import('./assets-chunks/styles-K4B74LV3_css.mjs').then(m => m.default)}
  },
};
