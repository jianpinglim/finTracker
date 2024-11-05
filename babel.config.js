module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Remove 'expo-router/babel' from plugins if present
    plugins: [
      // other plugins you might have
    ],
  };
};
