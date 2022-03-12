import React from "react";
import ReactDOM from "react-dom";
import AdminContext from "./context/AdminContext";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AdminContext>
      <App />
    </AdminContext>
  </React.StrictMode>,
  document.getElementById("root")
);
