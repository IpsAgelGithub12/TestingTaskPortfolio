import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Sidenav />
      <Home />
      <Profile />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
