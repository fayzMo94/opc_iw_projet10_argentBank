import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { User } from "./components/User/User";
import Home from "./pages/Home/Home";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import {UserProfile} from "./pages/UserProfile/UserProfile.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home/> */}
      {/* <LoginPage /> */}
      <UserProfile />
      <Footer />
    </div>
  );
}

export default App;
