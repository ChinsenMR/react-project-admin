import React from "react";
import BaseLayout from "./layout/BaseLayout";
import {Button} from 'antd'
import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <Button type="primary">test</Button>
      <div className="App">
        <BaseLayout />
      </div>
    </div>
  );
}

export default App;
