import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import LoginScreen from "./Pages/LoginScreen";
import RegisterationScreen from "./Pages/RegisterationScreen";
import Settings from "./Pages/Settings";
import Coffee from "./Pages/Coffee";
import Bean from "./Pages/Bean";
import LearnCoffee from "./Pages/LearnCoffee";
import LearnBean from "./Pages/LearnBean";
import Favorites from "./Pages/Favorites";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";
import SearchBar from "./Components/SearchBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginScreen />} />
        <Route path="/register" element={<RegisterationScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/bean" element={<Bean />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/learncoffee/:coffeeName" element={<LearnCoffee />} />
        <Route path="/learnbean/:beanName" element={<LearnBean />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogread/:blogId" element={<BlogPost />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
