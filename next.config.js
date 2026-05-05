const withVideos = require("next-videos");

module.exports = withVideos({
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/djhh4kkml/**",
      },
    ],
  },
});
