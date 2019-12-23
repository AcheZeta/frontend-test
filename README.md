# Frontend-test

## Index  📌

- [About](#About) ℹ️
- [Goals](#Goals) 📝
- [Plans](#Plans) 📅
- [Thoughts & Details](#Thoughts-&-Details) 📁
- [Deploy](#Deploy) 🚀
- [About Me](#About-Me) 👩‍💻 
- [Scripts & Test](#Scripts-&-Test) ✏️ 

## About ℹ️

This is an open-ended test for Front End Developers.  
I have 5 days to finish it.  
You can see the original repository [here](https://github.com/runahr/frontend-test)

## Goals 📝

- I set up a greenfield project using react, webpack, babel, [Eslint Airbnb](https://github.com/airbnb/javascript) and redux.
- I took the information from an open API [JsonPlaceHolder](https://jsonplaceholder.typicode.com/users).
- I had not to use Redux before so this was my biggest problem to store and control the information. 
- I create a list of users.
- I use styled-components to style the application.

## Plans. 📅 

- For this project I decided to create a React project from scratch, building my own Webpack, this took me longer than I expected. For another iteration, I would use libraries like `create-react-app` and use the time more efficiently.
- I weren't able to finish all the goals of the project but if I had to start over or continue, I will: 

    - Create and get the data from the state using REDUX.
    - Manipulate the data allowing delete, edit or add more items in State.
    - Show the data in DOM. 
    - Set styles with styled-components.

### Thoughts & Details 📁

_Explain your thoughts on the project you built, the Architecture of the folders, how you built the pages, and elements, etc._

I liked this project, although I was familiar with some parts of the test, my biggest challenge was deciding how to face the aspects that I did not know as a state.

For this reason, first, I created a project with things that already knew before, creating an MVP that obtained and displayed the data but without styles. Then I create branches and test components with the knowledge you acquired about react-redux, jest, and styles.

The Architecture was:
 
 [src folder](https://github.com/AcheZeta/frontend-test/tree/develop/src), in this, I separate the components, containers, hooks.

In the Components folder i create: 

- [Button component](https://github.com/AcheZeta/frontend-test/blob/develop/src/components/ButtonDelete.jsx).
- [Card component to show my users](https://github.com/AcheZeta/frontend-test/blob/develop/src/components/Cards.jsx).
- [Form component to add more users](https://github.com/AcheZeta/frontend-test/blob/develop/src/components/Form.jsx).
- [Main component as container](https://github.com/AcheZeta/frontend-test/blob/develop/src/components/Main.jsx).

In containers Folders i only have the [app.jsx ](https://github.com/AcheZeta/frontend-test/blob/develop/src/containers/App.jsx)

[Hooks folder](https://github.com/AcheZeta/frontend-test/blob/develop/src/hooks/) contain [useGetData.js]((https://github.com/AcheZeta/frontend-test/blob/develop/src/hooks/useGetData.js)) the file to call the API where i use the Hooks ``` { useState, useEffect } ``` to set the data. 

```
import { useState, useEffect } from 'react';

const api = 'https://jsonplaceholder.typicode.com/users';

const useGetData = () => {
  const [myData, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return myData;
};

export default useGetData;
```

Then in the [app.jsx ](https://github.com/AcheZeta/frontend-test/blob/develop/src/containers/App.jsx) I import the data and pass it to card component as a prop.

In the [Card component](https://github.com/AcheZeta/frontend-test/blob/develop/src/components/Cards.jsx) I map the properties in the data to show the users.

In this card component, I can import and display the button component, but in the final version, I decided to delete it (because it had no functionality).

The form component has text entries to receive the values ​​that would be passed to the Data using the POST method.

The button will take the id of the letter and using the Http delete method would delete the selected user. (Not available yet).

## Deploy. 🚀

I use [Travis-ci](https://travis-ci.org/AcheZeta/frontend-test) to deploy into [GitHub Pages](https://achezeta.github.io/frontend-test).


## About Me. 👩‍💻 

- [Github project](https://github.com/AcheZeta/frontend-test)
- [Deployed project](https://achezeta.github.io/frontend-test/).
- Personal websites: [Portfolio](https://achezeta.github.io/portafolio/), [LinkedIn](https://www.linkedin.com/in/hame-elizalde/) 


## Scripts & Test ✏️ 

In the project directory, you can run:

**`npm start`**

To Run the app in the development mode.
The page will reload if you make edits.

**Testing (Not available yet)**

For testing I read [How to test React-Redux connected Components](https://www.robinwieruch.de/react-connected-component-test)
