module.exports = {
  stories: ['../src/app/components/**/*.stories.ts'],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};
