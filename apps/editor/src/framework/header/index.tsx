import { css } from "@emotion/css";
import { Button, Divider, Space, Typography, theme } from "antd";
export const Header: React.FC = () => {
  const { token } = theme.useToken();
  const classes = {
    header: css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      paddingInline: token.paddingSM,
      height: "50px",
      border: `1px solid ${token.colorBorderSecondary}`,
    }),
    flex: css({
      display: "flex",
      alignItems: "center",
      gap: 6,
    }),
  };

  return (
    <div className={classes.header}>
      <div
        className={classes.flex}
        style={{
          justifyContent: "flex-start",
        }}
      >
        <Divider
          style={{ marginInline: 8, borderColor: token.colorBorderSecondary }}
          type="vertical"
        />
        <Typography.Text
          strong
          editable={{
            autoSize: true,
          }}
        >
          标准标题
        </Typography.Text>
      </div>
      <div></div>
      <div className={classes.flex} style={{ justifyContent: "flex-end" }}>
        <Button type="dashed">预览</Button>
        <Button type="primary">发布</Button>
      </div>
    </div>
  );
};
