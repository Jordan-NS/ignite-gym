const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
};

config.resolver = {
  ...resolver,
  resolverMainFields: ['react-native', 'browser', 'main'],
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
  extraNodeModules: {
    'react-dom': require.resolve('./node_modules/react-native'),
  }
};

module.exports = config; 