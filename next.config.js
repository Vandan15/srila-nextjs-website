/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index-dark",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-dark-particles1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-dark-particles2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-dark-slider",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-dark-video",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-dark-youtube-video",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-light",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-light-particles1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-light-particles2",
        destination: "/",
        permanent: true,
      },
      // {
      //   source: "/index-light-slider",
      //   destination: "/",
      //   permanent: true,
      // },
      {
        source: "/index-light-video",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-light-youtube-video",
        destination: "/",
        permanent: true,
      },
    ];
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
