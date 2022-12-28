export const FarmTableColumnData = [
  {
    title: "Farms",
    dataIndex: "farms",
    key: "farms",
    render: () => (
      <div className="d-flex align-items-center">
        <img src="/images/network-icon.svg" alt="click here" />
        <h5
          className="ms-3 mb-0 heading"
          style={{ fontWeight: "500", color: "white" }}
        >
          USDT
        </h5>
      </div>
    ),
  },
  {
    title: (
      <>
        <p
          className="mb-0 ps-3"
          style={{
            fontSize: "0.625rem",
            fontWeight: "400",
            color: "var(--Accent)",
          }}
        >
          SOON!
        </p>
        <span>
          Features
          <img
            className="ms-2"
            src="/images/question-icon.svg"
            alt="click here"
          />
        </span>
      </>
    ),
    dataIndex: "features",
    key: "features",
    responsive: ["sm"],
    render: () => (
      <div className="d-flex align-items-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "var(--Accent)",
          }}
        >
          <span style={{ color: "var(--Darkest)", fontWeight: "500" }}>C</span>
        </div>
        <div
          className="d-flex justify-content-center align-items-center mx-2"
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "var(--Accent)",
          }}
        >
          <span style={{ color: "var(--Darkest)", fontWeight: "500" }}>LF</span>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "var(--DarkestSecondary)",
          }}
        >
          <span style={{ color: "var(--Lightest)", fontWeight: "500" }}>
            DF
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Earned",
    dataIndex: "earned",
    key: "earned",
  },
  {
    title: (
      <span>
        Liquidity{" "}
        <img
          className="ms-2"
          src="/images/question-icon.svg"
          alt="click here"
        />
      </span>
    ),
    dataIndex: "liquidity",
    key: "liquidity",
  },
  {
    title: "APR",
    dataIndex: "apr",
    key: "apr",
  },
];
export const FarmTableContentData = [];
for (let i = 0; i < 4; i++) {
  FarmTableContentData.push({
    key: i,
    earned: `$0`,
    liquidity: `$2,000,000`,
    apr: `13%`,
  });
}
