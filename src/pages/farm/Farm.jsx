import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import FarmAlertCard from "../../components/cards/alertCards/farmAlertCard/FarmAlertCard";
import DappMainHeading from "../../components/dappMainHeading/DappMainHeading";
import FarmTabs from "../../components/tabs/farmTabs/FarmTabs";
import { Btn, ButtonGroup, FarmContent, FarmHead } from "./index.style";
import FarmModal from "../../components/modals/farmModal/FarmModal";

const Farm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <FarmHead>
        <div>
          <DappMainHeading heading="Space Farm" />
        </div>
        <div className="text-xxl-start text-end">
          <Input
            placeholder="Search by Name, Symbol, Address"
            suffix={<SearchOutlined />}
          />
        </div>
        <div>
          <ButtonGroup>
            <p className="mb-0">
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: "700",
                  color: "var(--Accent)",
                }}
              >
                SPACE {"  "}
              </span>
              <span style={{ fontSize: "0.8125rem", color: "var(--Lightest)" }}>
                EARNED
              </span>
            </p>
            <p className="mb-0" style={{ color: "var(--Gray)" }}>
              500
            </p>
            <Btn>Claim All</Btn>
          </ButtonGroup>
        </div>
      </FarmHead>
      <FarmContent>
        <FarmTabs setIsModalOpen={setIsModalOpen} />
      </FarmContent>
      <FarmAlertCard />
      <FarmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Farm;
