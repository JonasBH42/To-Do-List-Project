import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getQueryData, updateQueryData } from "./services/http-api/httpApi";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryData,
      onError: (err) => console.error(err),
    },
    mutations: {
      mutationFn: updateQueryData,
      onError: (err) => console.error(err),
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
