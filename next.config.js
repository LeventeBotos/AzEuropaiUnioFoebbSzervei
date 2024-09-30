/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      // További hostokat is hozzáadhatsz, ha szükséges
    ],
  },
};

module.exports = nextConfig;
