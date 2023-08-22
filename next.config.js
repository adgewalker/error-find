/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.cambridge.org",
        port: "",
        pathname: "/modules/custom/gnav/icons/**",
      },
    ],
  },
};

module.exports = nextConfig;
