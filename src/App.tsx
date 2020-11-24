import React from 'react';
import { windowEnv } from '@src/environment';

const App = () => {
  return <div>{windowEnv.API_URL}</div>;
};

export default App;
