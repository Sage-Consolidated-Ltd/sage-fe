import { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppInitializer from "./AppInitializer";

function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div className="p-8">Loading…</div>}>
        <AppRoutes />
      </Suspense> */}
      <AppInitializer />
    </BrowserRouter>
  );
}

export default App;
