# Deriv Assignment Task

This project is consuming Deriv websocket API as a data source.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Git Repo for reference`

**https://github.com/kunalbajaj11/deriv_assignment.git**

## Concepts Utilised

**Created functional components and have implemented below hooks: **
1. useState
2. useEffect
3. useContext
4. useRef
5. useDeriv (custom hook)
6. useMemo

**Things kept in consideration: **
1. Implemented CSS-in-JS (styled components)
2. Also used module css approach (used in wide spread projects)
3. Folder structure to support the apt flow of the application
4. Instead of introducing Redux for state management, implemented context approach
5. Not dirty check and reloads of application (prevented by using memoized values)