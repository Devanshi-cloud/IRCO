import type { NextConfig } from "next"; // ✅ Use 'type' to avoid unnecessary imports

/** @type {NextConfig} */
const nextConfig = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during production build
  },
  output: "export", // Enables static HTML export
  distDir: "out", // Output directory for static files
  images: {
    unoptimized: true, // Fixes image issues (Netlify doesn't support Next.js Image Optimization)
  },
};

export default nextConfig;






// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   devIndicators: false
// };

// export default nextConfig;