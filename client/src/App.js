import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import EntryScreen from "./Pages/EntryScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/entry" element={<EntryScreen />} />
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
