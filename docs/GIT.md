# Git

Bookmark this page: Flight rules for git [git-flight-rules](https://github.com/k88hudson/git-flight-rules)

Read this: [Git tutorial](https://www.atlassian.com/git/tutorials)

We use [Github](https://github.com/kumpan) for all our internal development.

Follow these 3 rules:

## Rule #1: Create a Git repository for every new project

This first rule is quite straightforward, but making a habit out of it is very important. Every time you start working on something new   you should create a new Git repository and push it to GitHub.

## Rule #2: Create a new branch for every new feature

When you start working on something new in a project, create a dedicated branch for this new feature, give it a meaningful name (e.g. feature/contact-me-section), and commit all the code to that specific branch. Recommended reading [GitHub flow](https://guides.github.com/introduction/flow/)

## Rule #3: Use Pull Requests to merge code to Master

Every repository starts with a master branch by default. You should never push changes directly to the master branch. Instead, you should use feature branches as described above, and open a new Pull Request to merge the feature branch code with the master branch code. Also remember to ask for a review from one of your colleagues. [Code review best practices](https://medium.com/palantir/code-review-best-practices-19e02780015f)
