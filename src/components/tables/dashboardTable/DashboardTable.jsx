import React from "react";
import {
  DashboardTableColumnData,
  DashboardTableContentData,
} from "../../../data/dashboardData/dashboardTableData";
import DashboardTableTitle from "../title/DashboardTableTitle";
import { TableArea } from "./index.style";

const DashboardTable = () => {
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a style={{ color: "var(--Lightest)" }}>{`< prev`}</a>;
    }

    if (type === "next") {
      return (
        <a
          style={{ color: "var(--Lightest)", marginLeft: "1rem" }}
        >{`next >`}</a>
      );
    }

    return originalElement;
  };
  return (
    <>
      <TableArea
        columns={DashboardTableColumnData}
        dataSource={DashboardTableContentData}
        pagination={{
          pageSize: 6,
          // simple: true,
          // defaultCurrent: 2,
          // total: 50,
          itemRender: itemRender,
          position: ["bottomCenter"],
        }}
        title={() => <DashboardTableTitle />}
      />
    </>
  );
};

export default DashboardTable;
