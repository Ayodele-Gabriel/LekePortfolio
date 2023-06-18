const withVideos = require("next-videos");

module.exports = {
  withVideos: withVideos(),
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/djhh4kkml/**",
      },
    ],
  },
};
