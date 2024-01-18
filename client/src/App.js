import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import LoginScreen from "./Pages/LoginScreen";
import RegisterationScreen from "./Pages/RegisterationScreen";
import Settings from "./Pages/Settings";
import Coffee from "./Pages/Coffee";
import CoffeeCard from "./Components/CoffeeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterationScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/coffeecard" element={<CoffeeCard />} />
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
