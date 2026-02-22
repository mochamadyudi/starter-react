export type ThemeType = "default" | "compact";
export type ThemeMode = "light" | "dark";

export interface IThemeTokens {
  // Typography
  fontSizeBase: string;
  fontSizeSm: string;
  fontSizeLg: string;
  fontSizeXl: string;

  // Spacing
  spacingXs: string;
  spacingSm: string;
  spacingMd: string;
  spacingLg: string;
  spacingXl: string;

  // Border
  borderRadius: string;
  borderRadiusSm: string;
  borderRadiusLg: string;

  // Component height
  heightSm: string;
  heightMd: string;
  heightLg: string;

  // Layout
  siderWidth: string;
  headerHeight: string;
}

export interface IThemeLayout {
  hoverOpacity: number;
  disabledOpacity: number;
  dividerWeight: string;
  fontSizeTiny: string;
  fontSizeSmall: string;
  fontSizeMedium: string;
  fontSizeLarge: string;
  lineHeightTiny: string;
  lineHeightSmall: string;
  lineHeightMedium: string;
  lineHeightLarge: string;
  radiusSmall: string;
  radiusMedium: string;
  radiusLarge: string;
  borderWidthSmall: string;
  borderWidthMedium: string;
  borderWidthLarge: string;
  boxShadowSmall: string;
  boxShadowMedium: string;
  boxShadowLarge: string;
}

export interface IThemeColors {
  colorPrimary: string;
  colorSecondary?: string;
  colorSuccess?: string;
  colorWarning?: string;
  colorDanger?: string;

  colorDefault?: string;

  colorBackground?: string;
  colorForeground?: string;
  colorFocus?: string;
  colorContent1?: string;
  colorContent2?: string;
  colorContent3?: string;
  colorContent4?: string;
  colorDivider?: string;
  colorOverlay?: string;
}

export interface ITheme extends IThemeLayout, IThemeColors, IThemeTokens {
  colorInfo?: string;
  siderBgColor?: string;
  layoutBg?: string;
  layoutContentBg?: string;
  layoutContentPadding?: string;

  type: ThemeType;
  mode: ThemeMode;
}
