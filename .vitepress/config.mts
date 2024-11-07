import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DundeeScript Meetup",
  description: "DundeeScript Meetup",
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/dundeescript" },
      { icon: "linkedin", link: "https://www.linkedin.com/groups/13109068/" },
    ],
    nav: [
      { text: "Sponsors", link: "/sponsors" },
      { text: "Organisers", link: "/organisers" },
      { text: "Code of Conduct", link: "/code-of-conduct" },
      { text: "JS News", link: "/news/" },
      { text: "Activities", link: "/activities" },
      {
        text: "Submit a talk",
        link: "https://forms.gle/vTYNzgCEXggSroNz9",
      },
    ],

    sidebar: {
      "/news/": [
        {
          text: "JS News Archive",
          items: [
            { text: "December 2024", link: "/news/2024-12.md" },
            { text: "November 2024", link: "/news/2024-11.md" },
          ],
        },
      ],
    },
  },
});
