import * as React from "react";

import styled from "styled-components";

import { DataContext } from "../contexts/data";

const ItemElement = styled.div`
  cursor: pointer;
  text-decoration: underline;
  margin: 0 10px;
`;

export function CategoryItem(props) {
  const { children } = props;

  return (
    <DataContext.Consumer>
      {({ loadData }) => (
        <ItemElement onClick={() => loadData(children)}>{children}</ItemElement>
      )}
    </DataContext.Consumer>
  );
}
