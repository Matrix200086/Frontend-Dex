// Dashboard Table Column Data
export const DashboardTableColumnData = [
  {
    title: "Asset Staked",
    dataIndex: "asset",
    render: () => (
      <div>
        <img
          style={{ marginRight: "1rem" }}
          src="/images/asset-icon.svg"
          alt="click here"
        />
        <span>SPACE</span>
      </div>
    ),
  },
  {
    title: "Price of  Token",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Token Holdings",
    dataIndex: "token",
    key: "token",
  },
  {
    title: "Current Balance",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "APR",
    dataIndex: "apr",
    key: "apr",
  },
];
// Dashboard Table Content Data
export const DashboardTableContentData = [];
for (let i = 1; i <= 12; i++) {
  DashboardTableContentData.push({
    key: i,
    price: `$${2 + i}`,
    token: `10,${i}00`,
    balance: `$${2000 + i}`,
    apr: `${1 + i}%`,
  });
}
