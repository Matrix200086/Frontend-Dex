import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NexusService from "./pages/nexusService/NexusService";
import DappLayout from "./components/layout/dappLayout/DappLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Swap from "./pages/swap/Swap";
import Farm from "./pages/farm/Farm";
import Yield from "./pages/yield/Yield";
import Trade from "./pages/trade/Trade";
import Analytics from "./pages/analytics/Analytics";
import SwapOption from "./pages/swapOption/SwapOption";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nexusService" element={<NexusService />} />
          <Route element={<DappLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/swapoption" element={<SwapOption />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/yield" element={<Yield />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
