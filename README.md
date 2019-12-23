This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# cloth-zone

An E-Commerce Website build in REACT(https://cloth-zone.herokuapp.com)

![Progress](https://github.com/jugshaurya/cloth-zone/blob/master/public/progress.png)

## Important

```sh
Libraries Used:
  react (build a modern single-page React app)
  react-bootstrap
  react-router-dom
  firebase

  react-redux - <Provider/>, connect()
  redux - createStore(), applyMiddleware(), combineReducers()
  redux-logger - logger
  react-stripe-checkout - <stripeCheckout />
  redux-thunk
```

## React State

- Do Not Modify State Directly. use setState()
- React may batch multiple setState() calls into a single update for performance.
  - Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
- State Updates are Merged
  - When you call setState(), React merges the object you provide into the current state.
- Data Flows Down
  - If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

## React Challenges:

- Decide on Components
- Decide the state and where it lives
- What changes when state changes

## Firebase (https://www.npmjs.com/package/firebase)

- Adding server-side (Backend) code without writing server-side code.

- Include only the features you need
  The full Firebase JavaScript client includes support for Firebase Authentication, the Firebase Realtime Database, Firebase Storage, and Firebase Cloud Messaging. Including code via the above snippets will pull in all of these features.

```
firebase-app - The core firebase client (required). `firebase/app`
firebase-auth - Firebase Authentication (optional). `firebase/auth`
firebase-firestore - Cloud Firestore (optional). `firebase/firestore`
```

- Firebase gives us :-

  1. Auth

  - We will be doing OAuth and email-password Login using Firebase
    Steps:

    1.a GoogleOAuth

    - yarn add firebase
    - Go to project overview and create a web app and copy the configuration
    - Handle the google sign-in flow with firebase SDK https://firebase.google.com/docs/auth/web/google-signin
    - Show Sign in Popup
    - use onAuthStateChange method to signin/signout and add UI accordingly
    - use auth.signOut() to logout
    - also add the user to firestore so that we can say user loggedin to our website

      1.b Email-Password

    - Firestore(Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Realtime Database, it keeps your data in sync across client apps through realtime listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity.
    - Firestore is a cloud-hosted, NoSQL database that your iOS, Android, and web apps can access directly via native SDKs. )
    - Require Firestore(Database) to store our users email-Pass Data
    - firestore returns two type of objects: Reference and Snapshot
    - can read the data using .get() or .onSnapShot() methods over reference which returns a snapshot

  2. Storage for information storing like image,videos or assets like shop data
  3. Hosting handle website deployment
  4. adding some demodata to firebase firestore:


      4.a. use batch() to add multiple data at a time to firestore, so that we dont save partial data to firebase if some network error occurs and we end up some data in firestore and some don't.

      4.b Creates a write batch, used for performing multiple writes as a single atomic operation. The maximum number of writes allowed in a single WriteBatch is 500

      - used inside `addShopDataToFirestore()`

Note:- Observable and observer Pattern

- We have Observable, which is an object we’d like to observe (it may be also called Subject in the Observer pattern) and we can subscribe for observing changes in those object. Every object interested in those changes will be called Observer. We can have one Subject and many Observers, and these single Observers may know nothing about each other. We can also stop observing changes at any time.

- firebase onAuthChange(), onSnapshot() were the functions based on this pattern or to which we subscribed to, for ex- onAuthChange method is the mechansim to observe the auth changes whenever user sign in or sign out. and the onAuthChange(user => userWorkHere..., error=> errorHandlerHere) was the observer. if any auth changes happens observers are notified with value/error.and we can end the subscription when we dont want to listen to auth changed, which we have done in ComponentWillUnmount().

- observable is the chain of events that happens one after the other and we subscribe to this chain so to get notified about the changes/error/completeness and when anyof this happens observer reacts toward it.
  observer = {
  next(nextValue) // when any event in chain return some value this function runs ex- user => userWorkHere...,
  error(errorValue),
  complete() // when chain is complete and no further actions are there
  }

5. Grabbing firestore Data into our app

- using `snapshot()` and unsubscribefromServices() like we did while authorizing the user.

---

## State Management - Redux

- #### why am i using it?

  - Because i don't like props drilling to pass data as for debugging i need to go all the way up to see from where it was coming

  - other Reasons:
    - Forgetting to pass props
    - Problem in manageing deeply nested state
    - Duplicate information in state
    - Not updating all dependent props
    - Components with large number of props
    - uncertanity where a piece if data is managed

- #### 3 Principles of redux

  - Single Source of truth(store)
  - State is read only
  - changes are made using pure functions

- #### Action -> Reducer -> Store -> Components

  - Reducer:
    - A `pure function` which takes the previous state and an update and returns a `new object( immutability)` with updation applied to passed state.
  - store: (Internally implemented as a class)

    - Responsible for maintaining state
    - Exposes getter via `store.getState()`
    - can only be updated through reducers by calling `store.dispatch({type:"", payload:""})`
    - can add listeners that get invoked when state changes(Reconcilliation)

  - store:

    - a place where all the dynamic data or the state is stored.

  - action :-

    - an action is a piece of data that contains the information required to make a state update.

    - a object with type:'some reducer action' and payload:'some update' passed to store.dispatch() to update certain property of store state. i.e. actions must be dispatched to make a state update.


    - functions that create the actions are action creators.

- #### Action -> redux-thunk-middleWare -> Reducer -> Store -> Components
  [redux-thunk Github](https://github.com/reduxjs/redux-thunk)
  - Async redux dispatching is dine using middleware redux thunk, which is i guess is a smart way to alter the actions which are of type functions to take a dispatch as an argument and dispatching START, SUCCESS, FAILURE actions depending upon the asynchronous activites and time of it.
    ![Redux-thunk](https://github.com/jugshaurya/cloth-zone/blob/master/public/redux-thunk.png)

## Stripe Payments:

- react-stripe-checkout

  - stripe's Checkout makes it almost too easy to take people's money.
  - npm install react-stripe-checkout
  - token and stripeKey are the only required props, everything else is optional as per the stripe docs
  - import StripeCheckout from 'react-stripe-checkout'
  - https://github.com/azmenak/react-stripe-checkout
  - More Help: https://www.robinwieruch.de/react-express-stripe-payment

## Folder Naming Convention

Refactoring adding comments and fixing file naming ambiguity i.e foldername instead of camelcase now uses hypen as seperation and components/css files as camelcase.

## Heroku Deployment (https://devcenter.heroku.com/articles/heroku-cli)

sudo snap install --classic heroku

- https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack

  - heroku create \$APP_NAME --buildpack mars/create-react-app
  - This buildpack deploys a React UI as a static web site. The Nginx web server provides optimum performance and security for the runtime.
  - git push heroku master
  - Adding https://cloth-zone.herokuapp.com/ to authorized domain in firebase
  - and makking logger middleware to work in development mode only.

## others:

- React Reselect
  - can be added to optimize the react-app configuration.Will add later if i got my mind around it later on
- other Libraries to do: react-persist to get localStorage and SessionStorage in React to save data temporarily in browser

- styledComponents(Personally dont like them at first glance, will later look once more...)

  - use to add css in JS using ` styled.tag`` `etc.

- React-Saga

  - other alternative to redux-thunk, do async activities to update the store
  - uses generator functions i.e function\* a(){ yield something}

- Context API
- Optimaization

  - React Lazy + Suspense
  - Error Boundaries
  -

### [Hooks (React 16.8+)](https://reactjs.org/docs/hooks-intro.html)

> They let you use state and other React features without writing a class

> use when u want to have functional Components but yet need to use state or any lifecycle Methods.

- useState
  - Let us use state in functional Components
- [useEffect](https://reactjs.org/docs/hooks-effect.html)

  - The Effect Hook lets you perform side effects in function components
  - Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effect(interation with outside world).
  - Think useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  - used in 2 ways:

    1. useEffect(()=> {})

    - this is called for any change in component, whether it is mounting, rendering or update.

      2.useEffect(()=>{}, [0 or more arguments])

    - always called on mounting, but only called on rendering if any of argument value is changed inside useEffect

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

  - An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

  - useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

* useRef
* useCallback
* useMemo
* useDefaultValue
*

- Containers and Presentational Components
  - Containers = components, that have state and uses some lifecycle methods
  - Presentational = components, that are dumb, rely on props to render the view only

* ## Color Pallets
  #0b0c10
  #1f2833
  #c5c6c7
  #66fcf1 -react blue
  #45a29e
  https://visme.co/blog/website-color-schemes/
