import * as React from "react";

import styled from "styled-components";

import { Provider } from "./components/Provider";
import { Category } from "./components/Category";
import { List } from "./components/List";

const Title = styled.h1`
  text-align: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Title>시도별 미세먼지 현황</Title>
        <Category />
        <List />
      </Provider>
    );
  }
}
