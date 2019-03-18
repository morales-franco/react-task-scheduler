# react-task-scheduler
## Basic Task Scheduler

First Application in React.js - Testing React in a simple application.

GitHub Hosting: [Test - Demo](https://morales-franco.github.io/react-task-scheduler) 

### Use GitHub Pages for Hosting
1. npm install gh-pages
2. modify package.json - 
```
{
  "name": "my-task-scheduler",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://morales-franco.github.io/react-task-scheduler",
  ....
 ```
3. modify package.json  - build options add "predeploy" & "deploy"
```
"scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
4. commit & push
5. npm run deploy --> Publish!
