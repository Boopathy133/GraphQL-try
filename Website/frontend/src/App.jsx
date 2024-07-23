// src/App.js
import React from 'react';
import ApolloProviderComponent from './ApolloProvider';
import Shop from './Components/Shop';



function App() {
  const filter = {
    "filter": {
      "id": 347
    }
  } // Replace with your actual filter

  return (
    <ApolloProviderComponent>
      <Shop filter={filter} />
    </ApolloProviderComponent>
  );
}

export default App;
