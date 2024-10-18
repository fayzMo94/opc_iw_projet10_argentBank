import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home/> */}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
