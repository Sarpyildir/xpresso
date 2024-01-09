import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import LoginScreen from "./Pages/LoginScreen";
import RegisterationScreen from "./Pages/RegisterationScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterationScreen />} />
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
