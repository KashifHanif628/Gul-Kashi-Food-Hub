// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
};

module.exports = nextConfig;