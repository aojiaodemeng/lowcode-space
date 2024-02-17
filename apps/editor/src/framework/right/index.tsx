import { Tabs, theme, TabsProps } from "antd";
import { css } from "@emotion/css";
export const Right: React.FC = () => {
  const { token } = theme.useToken();
  const classes = {
    main: css({
      height: "calc(100% - 50px)",
    }),
  };

  const items: TabsProps["items"] = [
    {
      key: "prototype",
      label: "属性",
      children: <div>属性</div>,
    },
    {
      key: "event",
      label: "事件",
      children: <div>事件</div>,
    },
  ];
  return (
    <div className={classes.main}>
      <Tabs
        tabBarStyle={{ paddingInline: token.paddingXS }}
        size="small"
        items={items}
      />
    </div>
  );
};
