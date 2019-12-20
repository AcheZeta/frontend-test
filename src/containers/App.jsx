import React from 'react';
import Main from '../components/Main';
import Forms from '../components/Form';
import Cards from '../components/Cards';
import useGetData from '../hooks/useGetData';

const App = () => {
  const data = useGetData();
  console.log(data);
  return (
    <Main>
      <Cards
        data={data}
      />
      <Forms />
    </Main>
  );
};

export default App;
