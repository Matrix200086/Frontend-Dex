import React from "react";
import { Col, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  FarmTableColumnData,
  FarmTableContentData,
} from "../../../data/farmData/FarmTableData";
import { Btn, Card, ExpandableTable, FarmBtn, FarmCheck } from "./index.style";

const FarmTable = (props) => {
  return (
    <>
      <ExpandableTable
        columns={FarmTableColumnData}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <Row gutter={24}>
                <Col md={12}>
                  <Card>
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
                      <span
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--Lightest)",
                        }}
                      >
                        EARNED
                      </span>
                    </p>
                    <div className="claim">
                      <h5 className="mb-0" style={{ color: "var(--White)" }}>
                        $0
                      </h5>
                      <Btn className="mt-lg-0 mt-3">Claim</Btn>
                    </div>
                  </Card>
                </Col>
                <Col md={12}>
                  <Card className="odd">
                    <div>
                      <FarmCheck>Use as Collateral</FarmCheck>
                      <FarmCheck>Use as Collateral</FarmCheck>
                      <FarmCheck>Use as Collateral</FarmCheck>
                    </div>
                    <div>
                      <FarmBtn
                        className="mt-lg-0 mt-3"
                        onClick={() => props.setIsModalOpen(true)}
                      >
                        Farm
                      </FarmBtn>
                    </div>
                  </Card>
                </Col>
              </Row>
              <ul className="mb-0">
                <li style={{ fontSize: "0.75rem", color: "var(--Lightest)" }}>
                  Liquidity providers have their rewards auto compounded (80%)
                  and distributed as SPACE (20%)
                </li>
              </ul>
            </>
          ),
          defaultExpandedRowKeys: ["0"],
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <UpOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <DownOutlined onClick={(e) => onExpand(record, e)} />
            ),
        }}
        dataSource={FarmTableContentData}
        pagination={false}
      />
    </>
  );
};

export default FarmTable;
