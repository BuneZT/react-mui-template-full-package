import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <ReduxProvider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
