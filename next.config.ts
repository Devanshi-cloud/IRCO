import type { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false, // ✅ Disables Next.js build activity indicator
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint errors during production build
  },
  output: "export", // ✅ Enables static HTML export for Netlify
  distDir: "out", // ✅ Output directory for static files
  images: {
    unoptimized: true, // ✅ Fixes Next.js image issues on Netlify
  },
};

export default nextConfig;







// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   devIndicators: false
// };

// export default nextConfig;