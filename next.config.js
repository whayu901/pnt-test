const path = require("path");

module.exports = {
  images: {
    domains: [
      "s3-ap-southeast-1.amazonaws.com",
      "d3t32hsnjxo7q6.cloudfront.net",
    ],
    formats: ["image/webp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
