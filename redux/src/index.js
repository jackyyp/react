import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux"; // react-redux connection
import { store } from "./store"; //import redux store

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // redux provider wrapper
  <Provider store={store}>
    <App />
  </Provider>
);
