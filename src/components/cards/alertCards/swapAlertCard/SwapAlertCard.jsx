import React from "react";
import { ALertCard, DismissBtn } from "../index.style";
import { CloseOutlined } from "@ant-design/icons";

const SwapAlertCard = () => {
  return (
    <>
      <ALertCard
        message={false}
        description={
          <>
            <ul className="mb-0" style={{ width: "100%", maxWidth: "500px" }}>
              <li>
                Crosschain Fee is 0.01 %, Minimum Crosschain Fee is 0.5 USDC,
                Maximum Crosschain Fee is 1,000 USDC
              </li>
              <li>Minimum Crosschain Amount is 12 USDC</li>
              <li>Maximum Crosschain Amount is 20,000,000 USDC</li>
              <li>Estimated Time of Crosschain Arrival is 10-30 min</li>
              <li>
                Crosschain amount larger than 5,000,000 USDC could take up to 12
                hours
              </li>
              <div className="dismiss">
                <li>Use “Send Gas” to receive gas on the receiving chain</li>
                <DismissBtn>Dismiss</DismissBtn>
              </div>
            </ul>
          </>
        }
        closable
        closeIcon={<CloseOutlined />}
      />
    </>
  );
};

export default SwapAlertCard;
