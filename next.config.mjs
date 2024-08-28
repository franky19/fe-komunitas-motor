/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      BASEURL_API: process.env.BASEURL_API,
    },
    images: {
      domains: ['localhost'], // Removed protocol and port
    },
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: "/:path*", // Removed unnecessary trailing slash
          headers: [
            { key: "Strict-Transport-Security", value: "max-age=31536000" },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-XSS-Protection", value: "1; mode=block" }, // Added mode=block for better protection
            { key: "X-Content-Type-Options", value: "nosniff" },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  