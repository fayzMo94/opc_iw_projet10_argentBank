import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { User } from "./components/User/User";
import Home from "./pages/Home/Home";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { UserProfile } from "./pages/UserProfile/UserProfile.jsx";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/Error/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
