import React, { FC } from "react";
import DataExplorer from "./views/DataExplorer";
import "./styles/global.scss";

const App: FC = () => (
  <div className="App">
    <div>
      <DataExplorer />
    </div>
  </div>
);

export default App;
