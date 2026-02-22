import {
  ITheme,
  IThemeLayout,
  IThemeTokens,
  ThemeMode,
  ThemeType,
} from "@common/types";

export const APP_THEME_TOKENS = {
  default: {
    fontSizeBase: "14px",
    fontSizeSm: "12px",
    fontSizeLg: "16px",
    fontSizeXl: "20px",
    spacingXs: "4px",
    spacingSm: "8px",
    spacingMd: "16px",
    spacingLg: "24px",
    spacingXl: "32px",
    borderRadius: "6px",
    borderRadiusSm: "4px",
    borderRadiusLg: "8px",
    heightSm: "24px",
    heightMd: "32px",
    heightLg: "40px",
    siderWidth: "250px",
    headerHeight: "64px",
    hoverOpacity: 0.9,
    disabledOpacity: 0.5,
    dividerWeight: "1px",

    fontSizeTiny: "0.75rem", // 12px
    fontSizeSmall: "0.875rem", // 14px
    fontSizeMedium: "1rem", // 16px
    fontSizeLarge: "1.125rem", // 18px

    lineHeightTiny: "1rem",
    lineHeightSmall: "1.25rem",
    lineHeightMedium: "1.5rem",
    lineHeightLarge: "1.75rem",

    radiusSmall: "0.5rem",
    radiusMedium: "0.75rem",
    radiusLarge: "0.875rem",

    borderWidthSmall: "1px",
    borderWidthMedium: "2px",
    borderWidthLarge: "3px",

    boxShadowSmall:
      "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2)",
    boxShadowMedium:
      "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22)",
    boxShadowLarge:
      "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26)",
  },
  compact: {
    fontSizeBase: "12px",
    fontSizeSm: "10px",
    fontSizeLg: "14px",
    fontSizeXl: "16px",
    spacingXs: "2px",
    spacingSm: "4px",
    spacingMd: "8px",
    spacingLg: "12px",
    spacingXl: "16px",
    borderRadius: "4px",
    borderRadiusSm: "2px",
    borderRadiusLg: "6px",
    heightSm: "20px",
    heightMd: "24px",
    heightLg: "32px",
    siderWidth: "200px",
    headerHeight: "48px",
    hoverOpacity: 0.9,
    disabledOpacity: 0.5,
    dividerWeight: "1px",

    fontSizeTiny: "0.625rem", // 10px
    fontSizeSmall: "0.75rem", // 12px
    fontSizeMedium: "0.875rem", // 14px
    fontSizeLarge: "1rem", // 16px

    lineHeightTiny: "0.75rem",
    lineHeightSmall: "1rem",
    lineHeightMedium: "1.25rem",
    lineHeightLarge: "1.5rem",

    radiusSmall: "0.25rem",
    radiusMedium: "0.5rem",
    radiusLarge: "0.75rem",

    borderWidthSmall: "1px",
    borderWidthMedium: "1px",
    borderWidthLarge: "2px",

    boxShadowSmall: "0px 0px 5px 0px rgb(0 0 0 / 0.05)",
    boxShadowMedium: "0px 0px 15px 0px rgb(0 0 0 / 0.06)",
    boxShadowLarge: "0px 0px 30px 0px rgb(0 0 0 / 0.07)",
  },
} as const satisfies Record<ThemeType, IThemeLayout & IThemeTokens>;

export const APP_THEME = {
  colorPrimary: "#2563EB",
  colorSecondary: "#5381e7",
  colorSuccess: "#52c41a",
  colorWarning: "#b8831c",
  colorDanger: "#ff4d4f",
  colorInfo: "#389bf8",

  siderBgColor: "#ffffff",
  layoutBg: "#F1F1FF",
  layoutContentBg: "#f6f6ff",
  layoutContentPadding: "20px",

  type: "default" as ThemeType,
  mode: "dark" as ThemeMode,
  ...APP_THEME_TOKENS.default,
} as const satisfies ITheme;
