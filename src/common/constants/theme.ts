import {ITheme} from "@common/types";

const theme = {
  colorPrimary: "#ff1818",
  colorSecondary: "#722ed1",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorDanger: "#ff4d4f",
  colorInfo: "#389bf8",

  siderWidth: "250px",
  headerHeight: "64px",
  borderRadius: "6px",
  fontSizeBase: "14px",
} as const satisfies ITheme;

export default theme;
