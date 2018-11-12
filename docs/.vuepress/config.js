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
        children: [["/MacOS.html", "macOS"], ["/Windows.html", "Windows"]]
      },
      {
        title: "Project management",
        collapsable: false,
        children: [
          ["/blocket-integration.html", "Blocket Integrations"],
          ["/wordpress-project.html", "Wordpress site"],
          ["/nothing-todo.html", "I have nothing todo"]
        ]
      },
      {
        title: "Code",
        collapsable: false,
        children: [
          ["/Codeguidelines.html", "Code guidelines"],
          ["/Git.html", "Git"],
          ["/ESLint.html", "ESLint"],
          ["/Wordpress.html", "Wordpress"],
          ["/testing.html", "Testing"],
          ["/SEO.html", "SEO"]
        ]
      },
      {
        title: "Tools we use",
        collapsable: false,
        children: [
          ["/Trello.html", "Trello"],
          ["/Toggl.html", "Toggl"],
          ["/1password.html", "1Password"],
          ["/Dropbox.html", "Dropbox"]
        ]
      }
    ],
    repo: "kumpan/developer-handbook",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!"
  }
};
