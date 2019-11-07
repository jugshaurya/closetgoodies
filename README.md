This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# cloth-zone

An E-Commerce Website build in REACT

![Progress](https://github.com/jugshaurya/cloth-zone/blob/master/public/progress.png)

## Important

react (build a modern single-page React app)
react-bootstrap
react-router-dom
firebase

react-redux - <Provider/>, connect()
redux - createStore(), applyMiddleware(), combineReducers()
redux-logger - logger

## React State

- Do Not Modify State Directly. use setState()
- React may batch multiple setState() calls into a single update for performance.
  - Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
- State Updates are Merged
  - When you call setState(), React merges the object you provide into the current state.
- Data Flows Down
  - If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

## Some more:

- A good rule of thumb is that elements inside the map() call need keys.

## React Challenges:

- Decide on Components
- Decide the state and where it lives
- What changes when state changes

## Firebase

https://www.npmjs.com/package/firebase

Adding server-side (Backend) code without writing server-side code.

Include only the features you need
The full Firebase JavaScript client includes support for Firebase Authentication, the Firebase Realtime Database, Firebase Storage, and Firebase Cloud Messaging. Including code via the above snippets will pull in all of these features.

firebase-app - The core firebase client (required). `firebase/app`
firebase-auth - Firebase Authentication (optional). `firebase/auth`
firebase-firestore - Cloud Firestore (optional). `firebase/firestore`

Firebase gives us :-

- Auth

  - We will be doing OAuth and email-password Login using Firebase
    Steps:

    - GoogleOAuth

      - yarn add firebase
      - Go to project overview and create a web app and copy the configuration
      - Handle the google sign-in flow with firebase SDK https://firebase.google.com/docs/auth/web/google-signin
      - Show Sign in Popup
      - use onAuthStateChange method to signin/signout and add UI accordingly
      - use auth.signOut() to logout
      - also add the user to firestore so that we can say user loggedin to our website

    - Email-Password

      - Firestore(Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity.
      - Firestore is a cloud-hosted, NoSQL database that your iOS, Android, and web apps can access directly via native SDKs. )
      - Require Firestore(Database) to store our users email-Pass Data
      - firestore returns two type of objects: Reference and Snapshot
      - can read the data using .get() or .onSnapShot() methods over reference which returns a snapshot

- Storage for information storing like image,videos or assets
- Hosting handle website deployment

---

## State Management - Redux

- why am i using it?

  - Because i don't like props drilling to pass data as for debugging i need to go all the way up to see from where it was coming

  - other Reasons:
    - Forgetting to pass props
    - Problem in manageing deeply nested state
    - Duplicate information in state
    - Not updating all dependent props
    - Components with large number of props
    - uncertanity where a piece if data is managed

- 3 Principles of redux

  - Single Source of truth(store)
  - State is read only
  - changes are made using pure functions

- Action -> Reducer -> Store -> Components
  - Reducer:
    - A `pure function` which takes the previous state and an update and returns a `new object( immutability)` with updation applied to passed state.
  - store: (Internally implemented as a class)
    - Responsible for maintaining state
    - Exposes getter via `store.getState()`
    - can only be updated through reducers by calling `store.dispatch({type:"", payload:""})`
    - can add listeners that get invoked when state changes(Reconcilliation)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Run: yarn start
