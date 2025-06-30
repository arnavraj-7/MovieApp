module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@": "./app", // ✅ or './' if assets/constants are in root
          },
        },
      ],
    ],
  };
};
