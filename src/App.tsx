import React from "react";
import { AppRoutes } from "routes";
import { QueryClient, QueryClientProvider } from "react-query";
import "styles/global.css";

const queryClient = new QueryClient();

function App() {
  return (
    //react query provider
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
