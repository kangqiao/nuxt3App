export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:error", (..._args) => {
    console.log("zp::: app:error", _args);
  });
  nuxtApp.hook("vue:error", (..._args) => {
    console.log("zp::: app:error", _args);
  });
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log("zp::: errorHandler", _args);
  };
});
