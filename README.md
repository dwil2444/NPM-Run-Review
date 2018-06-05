# NPM-Run-Review

The goal of this task is to enforce a specific coding style/format when anyone creates a pull request (PR). When a PR is created, the system should check the coding style and mark the PR as failed if the code doesn't match our coding style. This will help to enforce discipline for developers who insist on their "own coding style" (example, indent 2 space vs 4 spaces, etc.).

This involves 4 tasks:
1) Add a linter (use eslint https://eslint.org/)
2) Add a beautifier (use js-beautify https://github.com/beautify-web/js-beautify)
3) Add the command 'npm run review' that will run #1 and #2 (this allows anyone to test their code before checking in)
3) Add the cmd from #3 to the Jenkinsfile so these commands are run at build time (when a PR is created)
