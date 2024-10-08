/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/bun-version",
    assetPrefix: '/bun-version/',
    output: "export",
    //strict mode rerenders twice, which slows down the performance.
    // reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
