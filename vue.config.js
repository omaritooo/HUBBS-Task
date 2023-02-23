const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/variables.scss";
          @import "@/scss/classes.scss";
        `,
      },
    },
  },
});
