import { MaterialItem } from "./material-item";
import { css } from "@emotion/css";
import { theme } from "antd";

export const MaterialList = () => {
  const { token } = theme.useToken();
  const classes = {
    list: css({
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: token.paddingSM,
    }),
  };

  return (
    <div className={classes.list}>
      <MaterialItem />
      <MaterialItem />
      <MaterialItem />
    </div>
  );
};
