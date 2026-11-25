/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` produces a plain `out/` folder you can host anywhere.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
