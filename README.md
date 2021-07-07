# fetch rewards Take Home

This is my submission for the fetch rewards take home assignment for the Frontend Engineer Position

## Prerequisties

- **nvm**: use [nvm](https://github.com/nvm-sh/nvm) and run `nvm install` and nvm will read the .npmrc file to install the compatible node version for this project - Node version 12.8.0

- **yarn**: install [npm](https://docs.npmjs.com/) globally. Its a great package manager and the following steps will utilize `npm` in the examples.

## Tech Stack

- [React](https://reactjs.org/)
- HTML/CSS

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To develop on the project you have the following available scripts: `start`, `build`, `test`, `eject`. (See docs as part of the [react-scripts](https://create-react-app.dev/docs/available-scripts/) for more info):

For the purposes of a demo, you won't need most of the scripts. You can run:

```
$ npm i && npm start
```

For tests run:

```
$ npm run test
```

This will spin up the development server at `localhost:3000` and allow you to see the app live!

## Technical Design

The project was pretty straightforward, with having several components being conditionaly rendered in the App component dependent on three different pieces of state. I kept it really simple with styling by using HTML/CSS. In a more production ready application, I would use a CSS-in-JS solution and maybe implement some sort of design system. The color palette was chosen from [Happy Hues](https://www.happyhues.co/palettes/4). There a few helper functions for sorting and displaying the list items in a UX friendly way. I used the latest version of React and the latest features such as Hooks. I used the followinf third party libraries:

- [axios](https://axios-http.com/docs/intro)
  - a promise-based HTTP Client for node.js and the browser. Used in lieu of the native fetch api found in the browser.

## Project Walkthrough

Made with Create React App, this project is fairly standard in terms of design.

- Start off at `public/index.html`. This gets served with all the bundled JS when this app is deployed. From there, the JS initializes React which renders DOM into the <div#root>.
- The Javascript begins at [`index.js`](src/index.js). There you will find where React is bootstrapped and rendered into the DOM mentioned above.
- [`App.js`](src/components/App.js) is the starting point of the React component heirarchy.
- For this small app, I only have the index route and have all the components conditionally rendered depending on certain pieces of state defined in the App Component.
- The list items are grouped into four expandable containers holding each set of List Items. The containers can be expanded all at the same time, and can be collapsed back into the group at any moment.
- There's an initial loading state and an error state as well.

## Stretch Features

- More in depth unit tests, such as mocking the API response and testing the the loader and error handler components, making sure the app was behaving as intended.
- Implement pagination to handle multiple containers and even more list items, or a load more button and/or infinite scrolling.
- Change the data structure from an array to an object for better lookup times and possibly build a search feature.
- Other optimizations such as using useMemo or useCallback for extremely long lists.
