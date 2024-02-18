import { Tabs, theme, TabsProps } from "antd";
import { css } from "@emotion/css";
import { Property } from "./property";
import { Events } from "./events";
export const Right: React.FC = () => {
  const { token } = theme.useToken();
  const classes = {
    main: css({
      height: "calc(100% - 50px)",
    }),
    tab: css({
      height: "100%",
      ".ant-tabs-content-top": {
        height: "100%",
      },
      ".ant-tabs-tabpane": {
        padding: token.paddingXS,
        overflow: "auto",
        height: "calc(100% - 80px)",
        boxSizing: "border-box",
      },
    }),
  };

  const items: TabsProps["items"] = [
    {
      key: "prototype",
      label: "属性",
      children: <Property />,
    },
    {
      key: "event",
      label: "事件",
      children: <Events />,
    },
  ];
  return (
    <div className={classes.main}>
      <Tabs
        tabBarStyle={{ paddingInline: token.paddingXS, margin: 0 }}
        className={classes.tab}
        size="small"
        items={items}
      />
    </div>
  );
};
