/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    baseUrl: "http://localhost:8000",
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/:path*",
      },
    ];
  },
};
