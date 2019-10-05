import * as React from "react";

import styled from "styled-components";

import { SidoMap } from "../contexts/data";

import { CategoryItem } from "./CategoryItem";

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export function Category() {
  return (
    <CategoryList>
      {Object.entries(SidoMap).map(([key, value]) => (
        <CategoryItem key={key}>{value}</CategoryItem>
      ))}
    </CategoryList>
  );
}
