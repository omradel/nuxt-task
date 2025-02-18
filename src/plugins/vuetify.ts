import { createVuetify } from "vuetify";
import {
  VBtn,
  VProgressLinear,
  VLayout,
  VIcon,
  VCheckbox,
  VInfiniteScroll,
  VNavigationDrawer,
} from "vuetify/components";
import { Ripple } from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VBtn,
      VProgressLinear,
      VLayout,
      VIcon,
      VCheckbox,
      VInfiniteScroll,
      VNavigationDrawer,
    },
    directives: {
      Ripple,
    },
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            primary: "rgba(217, 55, 73, 1)",
          },
        },
      },
    },
    defaults: {
      VBtn: {
        color: "primary",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
