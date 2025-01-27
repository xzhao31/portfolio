import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xenia's World",
  // description: "6.1040 Fall 2024",
  // TODO: add your base here; this should be your repo name!
  base: "/personal-blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Photos", link: "/photos" },
    ],

    sidebar: [
      {
        text: "Photos",
        link: "/photos",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/xzhao31/personal-blog" }],
  },
});
