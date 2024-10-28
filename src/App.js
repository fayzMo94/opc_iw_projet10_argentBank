import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { UserProfile } from "./pages/UserProfile/UserProfile.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { useSelector } from "react-redux";

function App() {
const isConnected = useSelector((state)=> state.auth.isConnected)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={isConnected ? <UserProfile /> : <Navigate to="/login"/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
