import React from 'react';
import { windowEnv } from '@src/environment';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: Lexend Deca;
`;

const EnvVariableValue = styled.span`
  font-size: 14px;
`;

const App = () => {
  return (
    <AppWrapper>
      <h2> Environment Variables </h2>
      <ul>
        {Object.entries(windowEnv).map(([key, value]: any) => {
          return (
            <li key={key}>
              {key} : <EnvVariableValue>{value}</EnvVariableValue>
            </li>
          );
        })}
      </ul>
    </AppWrapper>
  );
};

export default App;
