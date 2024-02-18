import { theme } from "antd";
import { css } from "@emotion/css";
import { Iframe } from "./iframe";
export const Canvas: React.FC = () => {
  const { token } = theme.useToken();

  const classes = {
    main: css({
      borderLeft: `1px solid ${token.colorBorderSecondary}`,
      borderRight: `1px solid ${token.colorBorderSecondary}`,
      background: "#e8ebed",
    }),
    canvas: css({
      height: "100%",
      width: "100%",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      padding: 30,
    }),
  };

  return (
    <div className={classes.main}>
      <div className={classes.canvas}>
        <Iframe />
      </div>
    </div>
  );
};
