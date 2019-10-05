import * as React from "react";

import styled from "styled-components";

import { DataContext } from "../contexts/data";

import { Item } from "./Item";

const Message = styled.p`
  text-align: center;
`;

export function List() {
  const { info, loading } = React.useContext(DataContext);

  if (!info) {
    return <Message>열람할 항목을 선택하세요.</Message>;
  }

  if (loading) {
    return <Message>로딩중입니다.</Message>;
  }

  return <Item info={info} />;
}
