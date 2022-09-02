module.exports = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js", "api.js", "_app.js", "api.ts"],
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false, path: false };
    return config;
  },
};
