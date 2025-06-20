
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
    'index.csr.html': {size: 6153, hash: '3893df02476b330ab56a69088d380b2ebd67082a488a1541552684a84c492d6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1169, hash: '1902fdf48a45d7e18894f258efc74acfb0e5154269a6bae198109decce663361', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hotels/index.html': {size: 33748, hash: 'ac1024b316956f35bd116d5b4e175965e5fb1d9b15beb3bb8b6708c5fd5f8257', text: () => import('./assets-chunks/hotels_index_html.mjs').then(m => m.default)},
    'create-hotel/index.html': {size: 18886, hash: '8272d897319d1dd32219f8c13c01110122f7a10a86776c8920add7dfb0db645c', text: () => import('./assets-chunks/create-hotel_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 26784, hash: '301d4d77b671b90d3573775e064694de1e21c4c7edcb47cde0330d03025e220e', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-K4B74LV3.css': {size: 304573, hash: 'fYjp0Co/stQ', text: () => import('./assets-chunks/styles-K4B74LV3_css.mjs').then(m => m.default)}
  },
};
