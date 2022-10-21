import React, { useState, useEffect } from "react";
import { getText } from "./api/handler";
import "@atlaskit/css-reset";
import SuperForgeBlob from "./assets/super-forge-blob.gif";

function App() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    getText().then((response) => setData(response.data));
  }, []);

  return (
    <div className="App" style={{ textAlign: "center", alignItems: "center" }}>
      <img src={SuperForgeBlob} height="300" width="400" />
      <h1>⚡Super Forge⚡</h1>
      <h2>A super charged Forge project template</h2>
      <p style={{ color: "blue" }}>by Innovation Nation</p>
      <p>{data}</p>
    </div>
  );
}

export default App;
