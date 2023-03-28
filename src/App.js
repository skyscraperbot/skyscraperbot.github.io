import React, { useState, Suspense, lazy } from "react";
import { NavigationBar } from "./components";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <Home />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="App">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Suspense fallback={Loader()}>{renderSwitch(currentTab)}</Suspense>
    </div>
  );
};

export default App;
