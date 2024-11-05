/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
        },
        {
          protocol: 'https',
          hostname: 'tvgxenufqrnhvhpnhglq.supabase.co',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/sitemap.xml', // This is the URL you want to serve the sitemap at
          destination: '/api/sitemap.xml', // The actual API route serving the sitemap
          permanent: true, // This is a permanent redirect
        },
      ];
    },
  };
  
  export default nextConfig;