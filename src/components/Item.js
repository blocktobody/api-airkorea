import * as React from "react";

import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > table {
    width: 600px;

    th {
      width: 20%;
    }
  }
`;

export function Item(props) {
  const { info } = props;

  return (
    <TableContainer>
      <table>
        <thead>
          <th>지역</th>
          <th>PM10 농도</th>
          <th>PM10 등급</th>
          <th>PM2.5 농도</th>
          <th>PM2.5 등급</th>
        </thead>
        <tbody>
          {info.map(item => (
            <tr>
              <td>{item.stationName}</td>
              <td>{item.pm10Value}</td>
              <td>{item.pm10Grade}</td>
              <td>{item.pm25Value}</td>
              <td>{item.pm25Grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
