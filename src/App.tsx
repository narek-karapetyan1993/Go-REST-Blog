import Loading from "components/Common/Loading";
import Layout from "components/Layout/Layout";
import { Home } from "pages/Home";
import * as React from "react";
import { Route, Routes } from "react-router-dom";

const NoMatch = React.lazy(() => import("components/NoMatch"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Go-REST-Blog" element={<Home />} />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <NoMatch />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
