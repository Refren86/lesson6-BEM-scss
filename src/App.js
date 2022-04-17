import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage, KontaktPage, ReferenzenPage, PreisePage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kontakt" element={<KontaktPage />} />
      <Route path="/refrenzen" element={<ReferenzenPage />} />
      <Route path="/preise" element={<PreisePage />} />
    </Routes>
  );
};

export default App;
