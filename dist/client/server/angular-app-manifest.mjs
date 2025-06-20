
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
    'index.csr.html': {size: 6152, hash: '8dee6968cb30d5ed007e77e538a6024db360aa06bf6867cd843d6f91f06561b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1168, hash: '2cd396843cd14461d11c2238d0e3f9ee63fc50f7b898da4878474cd3fbf09269', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'create-hotel/index.html': {size: 18884, hash: '7637cbf3da0f571a5179737a2c6d7b85ada19534d03a6b8067f3144b608fc5c9', text: () => import('./assets-chunks/create-hotel_index_html.mjs').then(m => m.default)},
    'hotels/index.html': {size: 34411, hash: '0f20c4d09a2441459336eb7d945b8b19f96038d70dd3ae2b94b66c169a12f175', text: () => import('./assets-chunks/hotels_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 26783, hash: '470e9b12a8e8c734aaa1d2b4f90f54a447ff8ee03f5caa5ea903cefd44d96a48', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-K4B74LV3.css': {size: 304573, hash: 'fYjp0Co/stQ', text: () => import('./assets-chunks/styles-K4B74LV3_css.mjs').then(m => m.default)}
  },
};
