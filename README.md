Mobile first Web App for getting Satori Stats, this will refresh the visible stats every 30 seconds.

You can view a CI development version here: <a href="http://reactstats.herokuapp.com">http://reactstats.herokuapp.com</a>

This is built using the following technologies:

- Babel ECMAScript 6 / 2015: https://babeljs.io/learn-es2015/
- React: https://facebook.github.io/react/
- React Bootstrap: https://react-bootstrap.github.io/
- Redux: http://redux.js.org/docs/introduction/ 
- Redux Container Components: http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components
- Redux Saga: https://github.com/redux-saga/redux-saga
- Reselect: https://github.com/reactjs/reselect 
- React Router Redux: https://github.com/reactjs/react-router-redux
- Jest: https://facebook.github.io/jest/
- React D3 Components: https://github.com/codesuki/react-d3-components 
- React Google Login: https://www.npmjs.com/package/react-google-login 
- SCSS: http://sass-lang.com/

Server:

- Node: https://nodejs.org/en/
- Express: https://expressjs.com/

The Facebook Create React App was the original starting point which handles the majority of the build config (such as Webpack), the tech above was all added on top of create react app (apart from React):
- Create React App: https://github.com/facebookincubator/create-react-app

Build steps:
- "npm install" inside the root directory
- "npm start" to run localhost on port 3000, this will run the node.js server on port 4000
- "npm build" to make a release build
- "npm test" to run the unit tests
- "npm run test:watch" to run a watcher which will automatically run your tests when code is modified.

For the node server to function you'll need to add a tokens.json file to the src folder, the format of which should be:

```
{
    "sessionSecret":  "xxxxxxxxxxxxxxxx"
}
```

