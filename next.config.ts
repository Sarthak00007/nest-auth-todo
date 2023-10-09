import withDotenv from 'dotenv-webpack';

module.exports = {
  webpack: (config) => {
    config.plugin.push(new withDotenv());
    return config;
  },
};
