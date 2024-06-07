# Website of O-Robotics

This website is for the collaboration of the students from [ReDI school](https://www.redi-school.org/) and O-Robotics.

This is our project for building the website for our outdoor cleaning robot, with three different functions of weeding, cleaning garbage and snow
<br/>
Team members: [Monika](https://github.com/MMonikaFirst), [Mariia](https://github.com/mariiaipatova) and [Ziye Li](https://github.com/Liziye725)

# Installation / Project Setup

## React + Vite

We use a template for minimal setup to get React working in Vite with HMR and some ESLint rules.

You can set your environment by:

```
npx create-vite@latest your_folder_name --template react
```

Use `cd` to the folder by:

```
cd your_folder_name
```

Install the packages by:

```
npm install
```

Install the packages of router by:

```
npm install react-router-dom
```

Run on your localhost:

```
npm run dev
```

# Structure of website_o_robotics

```
.
├── components                        # Reusable components
│   └── Menu.jsx                      # Menu bar by Ziye Li

├── pages                             # Pages of the website
│   ├── homepage                      # Home page by Ziye Li
│       └── HomePage.jsx
│   ├── MainProductPage               # Product page by Mariia
│       └── MainProductPage.jsx
│   ├── ProductPage1
│       └── ProductPage1.jsx
│   ├── ProductPage2
│       └── ProductPage2.jsx
│   ├── ProductPage3
│       └── ProductPage3.jsx
│   ├── ContactPage                   # Contact page by Monika
│   └── aboutpage                     # About page by Ziye Li
│       └── AboutPage.jsx
├── features                          # Advanced features (for future development)
│   ├── Search                        # Search functionality by Ziye Li
│   ├── Footer                        # Footer component by Monika
│   └── CountDataJson                 # JSON data for counting by Monika
└── ...

```

# Website Features

## Routing

The website uses **react-router-dom** for client-side routing, enabling navigation between different pages without refreshing the browser.

## Responsive Design

The website is designed to be responsive, ensuring a seamless experience across various devices, including desktops, tablets, and mobile phones.

## Reusable Components

Components such as the menu bar and footer are designed to be reusable, promoting **DRY** (Don't Repeat Yourself) principles and making the codebase easier to maintain.

## Future Enhancements

The features directory includes placeholders for future development, such as search functionality and JSON data handling.

# Dependencies

## Font Awesome 6

You can choose download [SVGs to PC](https://fontawesome.com/download) or add them through [npm](https://docs.fontawesome.com/web/setup/packages/#2-install-your-package)

> When using Font Awesome with React, we recommend using the official `react-fontawesome` component to make everything work just right.

```bash
# You can choose the specific packages you want:
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/free-brands-svg-icons
# Or you can download all by:
npm install --save @fortawesome/fontawesome-free
```

# Git Workflow

Normally, we work on our own branch. So remember to change your branch before you start to work.

```
git checkout your-branch   # Switch to your branch
```

## Working on Your Own Branch

Update from main branch, and merge it with your own local branch at first:

```bash
git checkout main
git pull origin main   # Make sure your branch updated with main branch
git checkout your-branch
git merge main
```

Then, upload your code on your own local branch:

```bash
git branch    # Check the current branch
git checkout Li   # Ensure you are on the your branch, mine is "Li"
git add .
git commit -m "Add new feature or fix a bug"
git push origin Li  # Push the changes to the remote repository
```

Finally, merge your own local branch, and push them to main branch:

```bash
git checkout main      # Switch to the main branch
git pull origin main   # Pull the latest changes in the main branch
git merge Li           # Merge your branch
git push origin main     # Push the updated to main branch
```

## Working Directly on Main Branch

```bash
git add .
git commit -m "Add new feature or fix a bug"
git fetch origin      # It updates your local copies of remote branches but doesn't merge them into your local branches or modify your working directory.
git merge origin/main
git push origin main
```

If you work on main branch and forget using your own branch for a long time:

```bash
git reset --hard main   # It will remove your branch and set it the same as main branch
```

## For merging a pull request

Ensure that your changes have been pushed successfully by checking the remote repository. Verify that your recent commits are visible.

Resolve any merge conflicts (if they arise).

## For conflicts in local and remote

If you're certain that your local branch is up to date while the remote branch has fallen behind, yet your push is still being rejected, it could be due to the remote branch being updated by someone else or through another means, resulting in conflicts.

```bash
git push origin main --force
```

This will forcefully push your local branch to the remote branch, overriding its history. However, please note that using the --force option may lead to loss or confusion of history in the remote repository, so ensure that your actions won't adversely affect others' work.

## Git comflicts

Follow this or check `git rebase` / `git stash`

```bash
git fetch origin
git merge origin/main
git status
# Then handle conflicts manually
git add <conflicted-file>
git commit -m "handle conflicts of xxx"
```

# Reference

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- [React tutorial](https://react.dev/learn) by Official
- [MDN Web Docs for React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) by MDN
- [Creating a Fully Functional Contact Form with React and Formspree API](https://dev.to/allenarduino/creating-a-fully-functional-contact-form-with-react-and-formspree-api-2ecp)
  > > > > > > >
