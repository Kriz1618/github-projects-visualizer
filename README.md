# GitHub projects visualizer 

## Requirements
  ```
  npm@8.12.1
  node@v18.4.0
  ```

## Clone
Clone this project with the command `git clone https://github.com/Kriz1618/github-projects.git`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run deploy`

Before run this command, add the homepage key in the package file with the respective repo url `"homepage": "https://github.com/Kriz1618/github-projects"`, then execute the `build command`, with this command the build folder will be pushed to the `gh-pages` and the app will be available in the [Link](https://kriz1618.github.io/github-projects/)

#### Heroku
* Install heroku cli `npm install heroku`
* Login to heroku `heroku login`
* Create a commit `git flow`
* Create a new heroku project `heroku create github-projects-visualizer`
* Deploy app in heroku `git push geroku master`

Visualize app on [Heroku platform](https://github-projects-visualizer.herokuapp.com/)
