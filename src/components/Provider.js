import * as React from "react";

import axios from "axios";

import { DataContext } from "../contexts/data";

export class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      loading: false,
      loadData: this.loadData
    };
  }
  
  loadData = async (sidoName) => {
    try {
      this.setState({
        loading: true
      });

      const info = await axios.get(
        "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
        {
          params: {
            itemCode: "PM10",
            dataGubun: "DAILY",
            ServiceKey:
              "wq2UIS5hMW+1Zw2Z2h3F5PzmdSDbrUd22dmuyLu/iPeoqNvmUAB28ooH+skp/fc9+nchM2h5PiVi9hnsXxltog==",
            pageNo: "1",
            sidoName,
            ver: "1.0",
            _returnType: "json"
          }
        }
      );

      this.setState({
        info: info.data.list
      });
    } catch (e) {
      console.error(e);
    }

    this.setState({
      loading: false
    });
  };

  render() {
    const { children } = this.props;

    return (
      <DataContext.Provider value={this.state}>{children}</DataContext.Provider>
    );
  }
}
