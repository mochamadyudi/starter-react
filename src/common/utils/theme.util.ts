import Color from "color";
import {ITheme} from "@common/types";
import {toKebabCase} from "@common/utils/general.ts";

function hexToHSL(hex: string): string {
  const [h, s, l] = Color(hex).hsl().array();
  return `${h} ${s}% ${l}%`;
}

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

export function applyHeroUIColor(name: string, hex: string) {
  const root = document.documentElement;
  const shades = generateShades(hex);
  const base = Color(hex);

  root.style.setProperty(`--heroui-${name}`, hexToHSL(base.hex()));

  Object.entries(shades).forEach(([key, value]) => {
    root.style.setProperty(`--heroui-${name}-${key}`, value);
  });
}

function buildHeroUIColorVars(name: string, hex: string): string {
  const shades = generateShades(hex);
  const shadeVars = Object.entries(shades)
    .map(([shade, value]) => `  --heroui-${name}-${shade}: ${value};`)
    .join("\n");

  return `  --heroui-${name}: ${hexToHSL(hex)};\n${shadeVars}`;
}

export function applyCustomVars(theme: Partial<ITheme>): void {
  const id = "app-theme-vars";
  let styleEl = document.getElementById(id) as HTMLStyleElement | null;

  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }

  const heroUIColorMap: Partial<Record<keyof ITheme, string>> = {
    colorPrimary: "primary",
    colorSecondary: "secondary",
    colorSuccess: "success",
    colorWarning: "warning",
    colorDanger: "danger",
  };

  const customKeys: (keyof ITheme)[] = [
    "borderRadius",
    "fontSizeBase",
    "siderBgColor",
    "colorPrimary",
    "siderWidth",
    "headerHeight",
  ];

  const customVars = customKeys
    .filter((key) => theme[key])
    .map((key) => `  --${toKebabCase(key)}: ${theme[key]};`)
    .join("\n");

  const heroUIVars = Object.entries(heroUIColorMap)
    .filter(([key]) => theme[key as keyof ITheme])
    .map(([key, name]) =>
      buildHeroUIColorVars(name, theme[key as keyof ITheme] as string),
    )
    .join("\n");

  const css = `
${customVars}
${heroUIVars}
  `.trim();

  // ✅ Match selector yang dipakai HeroUI v2
  styleEl.textContent = `
:root,
[data-theme=light] {
  ${css}
}

[data-theme=dark] {
  ${css}
}
  `.trim();
}
