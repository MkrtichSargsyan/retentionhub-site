/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",       // enable static export
    basePath: "/retentionhub-site", // your GitHub repo name
    trailingSlash: true,
    assetPrefix: '/retentionhub-site/'
};

export default nextConfig;
