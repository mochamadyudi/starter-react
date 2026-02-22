import Color from "color";
import {ITheme} from "@common/types";
import {toKebabCase} from "@common/utils/general.ts";

const tokenKeys: (keyof ITheme)[] = [
  "fontSizeBase",
  "fontSizeSm",
  "fontSizeLg",
  "fontSizeXl",
  "spacingXs",
  "spacingSm",
  "spacingMd",
  "spacingLg",
  "spacingXl",
  "borderRadius",
  "borderRadiusSm",
  "borderRadiusLg",
  "heightSm",
  "heightMd",
  "heightLg",
  "siderWidth",
  "headerHeight",
];

const colorMap: Partial<Record<keyof ITheme, string>> = {
  colorPrimary: "primary",
  colorSecondary: "secondary",
  colorSuccess: "success",
  colorWarning: "warning",
  colorDanger: "danger",
};

/**
 * Converts a hexadecimal color value to HSL format
 * @param hex - The hexadecimal color string to convert
 * @returns HSL color values as a space-separated string
 */
function hexToHSL(hex: string): string {
  const [h, s, l] = Color(hex).hsl().array();
  return `${h} ${s}% ${l}%`;
}

/**
 * Generates different shades of a given color
 * @param hex - The base hexadecimal color to generate shades from
 * @returns Object containing shade variations from 50 to 900
 */
function generateShades(hex: string): Record<string, string> {
  const base = Color(hex);
  return {
    "50": hexToHSL(base.lighten(0.6).hex()),
    "100": hexToHSL(base.lighten(0.5).hex()),
    "200": hexToHSL(base.lighten(0.4).hex()),
    "300": hexToHSL(base.lighten(0.3).hex()),
    "400": hexToHSL(base.lighten(0.15).hex()),
    "500": hexToHSL(hex),
    "600": hexToHSL(base.darken(0.15).hex()),
    "700": hexToHSL(base.darken(0.3).hex()),
    "800": hexToHSL(base.darken(0.4).hex()),
    "900": hexToHSL(base.darken(0.5).hex()),
  };
}

/**
 * Builds CSS variables for HeroUI color system
 * @param name - The name of the color variable
 * @param hex - The hexadecimal color value
 * @returns CSS variable declarations as a string
 */
function buildHeroUIColorVars(name: string, hex: string): string {
  const shades = generateShades(hex);
  const shadeVars = Object.entries(shades)
    .map(([shade, value]) => `  --heroui-${name}-${shade}: ${value};`)
    .join("\n");

  return `  --heroui-${name}: ${hexToHSL(hex)};\n${shadeVars}`;
}

/**
 * Generates CSS variable declarations from theme configuration
 * @param theme - Partial theme configuration object
 * @returns Complete CSS variable declarations as a string
 */
export function buildThemeCSS(theme: Partial<ITheme>): string {
  const tokenVars = tokenKeys
    .filter((key) => theme[key])
    .map((key) => `  --${toKebabCase(key)}: ${theme[key]};`)
    .join("\n");

  const colorVars = Object.entries(colorMap)
    .filter(([key]) => theme[key as keyof ITheme])
    .map(([key, name]) =>
      buildHeroUIColorVars(name, theme[key as keyof ITheme] as string),
    )
    .join("\n");

  return `${tokenVars}\n${colorVars}`;
}

/**
 * Applies theme variables to the document by creating or updating a style element
 * @param theme - Partial theme configuration to apply
 */
export function applyCustomVars(theme: Partial<ITheme>): void {
  const id = "app-theme-vars";
  let styleEl = document.getElementById(id) as HTMLStyleElement | null;

  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }
  const css = buildThemeCSS(theme);
  styleEl.textContent = `
  :root, [data-theme=light], [data-theme=dark] {
${css}
  }
  `.trim();
}
