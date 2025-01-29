import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xenia's World",
  description: "Personal website",
  // TODO: add your base here; this should be your repo name!
  base: "/portfolio/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Photography", link: "/photos" },
      { text: "Recent Reads", link: "/reads" },
      { text: "About Me", link: "/about" },
    ],

    sidebar: [
      {
        text: "Photography",
        link: "/photos",
      },
      {
        text: "Recent Reads",
        link: "/reads",
      },
      {
        text: "About Me",
        link: "/about",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/xzhao31/portfolio" }],
  },
});
