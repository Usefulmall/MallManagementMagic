/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/knowledge-hub',
        destination: '/books',
        permanent: true,
      },
      {
        source: '/the-book',
        destination: '/books',
        permanent: true,
      },
      {
        source: '/about-johan',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/free-resources',
        destination: '/resources',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
