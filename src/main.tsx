import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../customTheme.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/multi-step-form/"}>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
