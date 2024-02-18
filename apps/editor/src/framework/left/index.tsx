import { css } from "@emotion/css";
import { Tabs, TabsProps, theme, Space, Typography, Divider } from "antd";
import { MaterialList } from "./material-list";

export const Left: React.FC = () => {
  const { token } = theme.useToken();
  const classes = {
    main: css({
      width: 280,
      paddingInline: token.paddingXS,
    }),
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "组件",
      children: (
        <div>
          <Space size={12} direction="vertical" style={{ width: "100%" }}>
            <Typography.Text type="secondary">基础组件</Typography.Text>
            <MaterialList />
            {/* <Materials components={__baseMaterias__} /> */}
          </Space>
          <Divider />
          <Space size={12} direction="vertical" style={{ width: "100%" }}>
            <Typography.Text type="secondary">元素组件</Typography.Text>
            <MaterialList />
            {/* <Materials components={__arcoDesignMaterias} /> */}
          </Space>
          <Divider />
        </div>
      ),
    },
    {
      key: "2",
      label: "大纲树",
      children: <div>大纲树</div>,
    },
    {
      key: "3",
      label: "数据源",
      children: <div>数据源</div>,
    },
  ];

  return (
    <div className={classes.main}>
      <Tabs
        style={{
          height: "100%",
        }}
        defaultActiveKey="1"
        items={items}
      />
    </div>
  );
};
