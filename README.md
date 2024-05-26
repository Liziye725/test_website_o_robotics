# React + Vite

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
This website is for the collaboration of the students from ReDI school and O-Robotics.
<br/>
Team members: [Monika](https://github.com/MMonikaFirst), [Mariia](https://github.com/mariiaipatova) and [Li](https://github.com/Liziye725)
```

.
├── components                        # Reusable components
│   ├── Menu.jsx                      # Menu bar by Ziye Li
├── pages                             # Pages of the website
│   ├── homepage                      # Home page by Ziye Li
│       └── HomePage.jsx
│   ├── ProductPage                   # Product page by Mariia
│   ├── ContactPage                   # Contact page by Monika
│   └── aboutpage                     # About page by Ziye Li
│       └── AboutPage.jsx
├── features                          # Advanced features (for future development)
│   ├── Search                        # Search functionality by Mariia
│   ├── Footer                        # Footer component by Monika
│   └── CountDataJson                 # JSON data for counting by Ziye Li
└── ...

```

# git command
## For your local branch
```bash
# Check the current branch
git branch

# Ensure you are on the your branch, mine is "Li"
git checkout Li

# Stage the modified files
git add .

# Commit the changes
git commit -m "Add new feature or fix a bug"

# Push the changes to the remote repository
git push origin Li
```
## For merging a pull request
Ensure that your changes have been pushed successfully by checking the remote repository. Verify that your recent commits are visible. 

Resolve any merge conflicts (if they arise).

```bash
# Switch to the Main Branch
git checkout main

# Pull the latest changes in the main branch
git pull origin main

# Merge your branch
git merge Li

# Push the updated main branch
git push origin main
```
## For conflicts in local and remote

If you're certain that your local branch is up to date while the remote branch has fallen behind, yet your push is still being rejected, it could be due to the remote branch being updated by someone else or through another means, resulting in conflicts.

```bash
git push origin main --force
```
This will forcefully push your local branch to the remote branch, overriding its history. However, please note that using the --force option may lead to loss or confusion of history in the remote repository, so ensure that your actions won't adversely affect others' work.
# Reference

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
>>>>>>> 
