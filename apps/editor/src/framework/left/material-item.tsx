import { css } from "@emotion/css";
import { theme } from "antd";
export const MaterialItem = () => {
  const { token } = theme.useToken();
  const classes = {
    item: css({
      border: `1px solid #e4e4e7`,
      paddingInline: token.paddingSM,
      fontSize: 14,
      borderRadius: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "border-color .85s",
      cursor: "pointer",
      color: token.colorTextSecondary,
      paddingBlock: 8,
      ["&:hover"]: {
        color: token.colorPrimary,
        borderColor: token.colorPrimary,
      },
    }),
  };
  return <div className={classes.item}>MaterialItem</div>;
};
