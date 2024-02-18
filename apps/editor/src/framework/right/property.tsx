import { Card, Empty, Form, Typography } from "antd";
import { css } from "@emotion/css";
export const Property = () => {
  return (
    <div
      className={css({
        height: "100%",
        ["& .ant-pro-form-group-title"]: {
          fontWeight: 600,
          marginBlockEnd: 0,
          cursor: "pointer",
        },
      })}
    >
      <Card size="small">
        <Typography.Text type="secondary">
          暂无选中组件，点击画布中的组件可以进行选择。
        </Typography.Text>
      </Card>
    </div>
  );
};
