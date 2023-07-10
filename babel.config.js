process.env.EXPO_ROUTER_APP_ROOT = '../../src/app';

module.exports = function (api) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      require.resolve('expo-router/babel'),
      [
        'module-resolver',
        {
          alias: {
            '@src': './src',
          },
        },
      ],
    ],
  };
};
