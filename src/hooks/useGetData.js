import { useState, useEffect } from 'react';

const api = 'https://pokeapi.co/api/v2/pokemon/';
const useGetData = () => {
  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data.results.map((pokemon) => pokemon.name)));
  }, []);

  return mydata;
};

export default useGetData;
