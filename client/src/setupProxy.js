const { createProxyMiddleware } = require("http-proxy-middleware");

// See create-react-app for an intro to usage of this setupProxy.js file
// https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
module.exports = function (app) {
  app.use(
    // Passing the route patterns to createProxyMiddleware() instead of app.use()
    // may be more reliable and is the document way to do so
    // See `multiple path matching` in http-proxy-middleware v2 docs at
    // https://github.com/chimurai/http-proxy-middleware/tree/v2.0.4#context-matching
    createProxyMiddleware(["/api"], {
      // If desired REACT_APP_PORT is specified in .env.development or .env.production
      // A configurable port is desirable because on some macOS machines port 5000
      // is sometimes already occupied
      target: `http://localhost:${process.env.REACT_APP_PORT || 5000}`,
      // Specify a proxyTimeout because the /api/wallets may be long-running due to fetching external APIs
      proxyTimeout: 15000,
    })
  );
};
