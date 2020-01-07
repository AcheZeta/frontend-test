import React from 'react';
import Main from '../components/Main';
import Forms from '../components/Form';
import Cards from '../components/Cards';

import useGetData from '../hooks/useGetData';

const App = () => {
  const data = useGetData();
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
