const {heroui} = require("@heroui/theme");
import forms from "@tailwindcss/forms";

/** @type {import("tailwindcss").Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"',
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      backdropBlur: ({theme}) => theme("blur"),
      backdropBrightness: ({theme}) => theme("brightness"),
      backdropContrast: ({theme}) => theme("contrast"),
      backdropGrayscale: ({theme}) => theme("grayscale"),
      backdropHueRotate: ({theme}) => theme("hueRotate"),
      backdropInvert: ({theme}) => theme("invert"),
      backdropOpacity: ({theme}) => theme("opacity"),
      backdropSaturate: ({theme}) => theme("saturate"),
      backdropSepia: ({theme}) => theme("sepia"),
      backgroundColor: ({theme}) => theme("colors"),
      backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
      },
      backgroundOpacity: ({theme}) => theme("opacity"),
    },
  },
  plugins: [forms, heroui()],
};
