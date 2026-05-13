import { BrowserRouter } from "react-router-dom";
import AppInitializer from "./AppInitializer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // ✅ Created once, lives for the lifetime of the app
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1, // retry failed requests once before showing error
        staleTime: 1000 * 60 * 5, // cache stays fresh for 5 minutes
      },
    },
  });
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div className="p-8">Loading…</div>}>
        <AppRoutes />
      </Suspense> */}
      <QueryClientProvider client={queryClient}>
        <AppInitializer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
