# Deriv Assignment Task

This project is consuming Deriv websocket API as a data source.

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

### `Git Repo for reference`

**https://github.com/kunalbajaj11/deriv_assignment.git**

## Concepts Utilised

#### Created functional components and have implemented below hooks:
1. useState
2. useEffect
3. useContext
4. useRef
5. useDeriv (custom hook)
6. useMemo

#### Things kept in consideration:
1. Implemented CSS-in-JS (styled components)
2. Also used module css approach (used in wide spread projects)
3. Folder structure to support the apt flow of the application
4. Instead of introducing Redux for state management, implemented context approach
5. Not dirty check and reloads of application (prevented by using memoized values)

#### Test scenarios as per requirement:
1. Only single Category to be selected at a time
2. Multiple subcategories could work simultaneously
3. Charts are static for now, was not able to understand data properly, given some guidance would be able to make it functional.
4. The Add button for now will be changed to Added. Could have built a basket behaviour but skiiped as of now.
5. Conditional color implemented : 'green' if positive, 'red' if negetive
6. Could have added sortable feature for the DataTable, skipped for now as not part of requirement.
7. The data refreshes every 3 seconds (refer useDeriv.js:42:43)
8. Charts do support data points on hover (recharts library used)
9. Pagination implemented and 10 records at a time visible with fixed headers and scrolling option in grid.

### Snippets for reference: 

![image](https://user-images.githubusercontent.com/87039860/222267365-819262fd-4b02-4261-9c74-1e03ee049bcf.png)

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

![image](https://user-images.githubusercontent.com/87039860/222267469-1759df11-cb1a-469c-9b03-a6e3570d08d3.png)


## There is always a scope for betterment, within given time and resources have made best efforts from my side. Feedbacks will definitely be considered positively. Thanks!! 
