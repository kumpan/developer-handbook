module.exports = {
  base: "/developer-handbook/",
  title: "Kumpan Developer Handbook",
  description: "Info!",
  themeConfig: {
    sidebar: [
      "/",
      {
        title: "General setup",
        collapsable: false,
        children: [["/MacOS.html", "macOS"], ["/Windows.html", "Windows"]],
      },
      {
        title: "Project management",
        collapsable: false,
        children: [
          ["/blocket-integration.html", "Blocket integrations"],
          ["/wordpress-project.html", "WordPress sites"],
          ["/nothing-todo.html", "I have nothing to do!"],
          ["/Dropbox.html", "How we organize files"],
        ],
      },
      {
        title: "Code",
        collapsable: false,
        children: [
          ["/Codeguidelines.html", "Code guidelines"],
          ["/Git.html", "Git"],
          ["/ESLint.html", "ESLint"],
          ["/Wordpress.html", "WordPress"],
          ["/testing.html", "Testing"],
          ["/SEO.html", "SEO"],
        ],
      },
      {
        title: "Tools we use",
        collapsable: false,
        children: [
          ["/Trello.html", "Trello"],
          ["/Toggl.html", "Toggl"],
          ["/1password.html", "1Password"],
          ["/Browserstack.html", "Browserstack"],
        ],
      },
    ],
    repo: "kumpan/developer-handbook",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
  },
};
