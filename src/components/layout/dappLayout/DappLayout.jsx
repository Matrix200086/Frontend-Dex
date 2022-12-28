import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DappHeader from "../../dappHeader/DappHeader";
import Sidebar from "../../sidebar/Sidebar";
import { Main, MainContent } from "./index.style";

const DappLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="d-flex">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Main>
          <DappHeader setShowSidebar={setShowSidebar} />
          <MainContent>
            <Outlet />
          </MainContent>
        </Main>
      </div>
    </>
  );
};

export default DappLayout;
