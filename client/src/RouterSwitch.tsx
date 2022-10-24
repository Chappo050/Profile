import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
