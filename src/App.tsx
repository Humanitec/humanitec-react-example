import React from 'react';
import { windowEnv } from '@src/environment';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: Lexend Deca;
`;

const EnvVariablesList = styled.ul`
  width: 50%;
  padding: 0;
`;

const EnvVariable = styled.li`
  font-size: 14px;
  background-color: aliceblue;
  border: 1px solid cornflowerblue;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 8px;
  list-style: none;
`;

const EnvVariableValue = styled.span`
  font-size: 14px;
  margin-left: 15px;
`;

const App = () => {
  return (
    <AppWrapper>
      <h2> Environment Variables </h2>
      <EnvVariablesList>
        {Object.entries(windowEnv).map(([key, value]: any) => {
          return (
            <EnvVariable key={key}>
              {key}: <EnvVariableValue>{value}</EnvVariableValue>
            </EnvVariable>
          );
        })}
      </EnvVariablesList>
    </AppWrapper>
  );
};

export default App;
