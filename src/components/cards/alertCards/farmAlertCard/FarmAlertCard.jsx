import React from "react";
import { ALertCard, DismissBtn } from "../index.style";
import { CloseOutlined } from "@ant-design/icons";

const FarmAlertCard = () => {
  return (
    <>
      <ALertCard
        message={
          <p
            className="mb-0"
            style={{
              fontSize: "0.8125rem",
              fontWeight: "300",
              color: "var(--White)",
            }}
          >
            An update is available for token list. “SpaceDex Default” (v1.0.0 to
            v1.4.0).
          </p>
        }
        description={
          <>
            <ul
              className="d-flex justify-content-between align-items-center mb-0"
              style={{ width: "100%", maxWidth: "320px" }}
            >
              <li>BTC.b added </li>
              <li>CRAFT, MAC removed</li>
            </ul>
            <DismissBtn className="mt-lg-0 mt-2">Accept Update</DismissBtn>
          </>
        }
        closable
        closeIcon={<CloseOutlined />}
      />
    </>
  );
};

export default FarmAlertCard;
