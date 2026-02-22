import {applyCustomVars} from "@common/utils/theme.util";
import openStorage from "@common/utils/storage";
import {ReactNode} from "react";
import {createRoot} from "react-dom/client";
import {APP_PATTERN} from "@common/configs/app.config";
import {APP_THEME} from "@common/configs/theme.config";
import Security from "./common/utils/security";

export default async function bootstrap(
  element: HTMLElement,
  render: ReactNode,
) {
  try {
    const db = await openStorage(
      APP_PATTERN.storage.name,
      APP_PATTERN.storage.path,
    );

    const persisted = await db.getItem(APP_PATTERN.storage.table.persist);
    if (persisted) {
      const persistParse = JSON.parse(persisted);
      const decompressed = Security.decompress(JSON.parse(persistParse.theme));
      if (decompressed) {
        if ("mode" in decompressed) {
          const el = document.documentElement;
          el.setAttribute(`data-theme`, decompressed?.mode);
        }
        applyCustomVars(decompressed);
      } else {
        applyCustomVars(APP_THEME);
      }
    } else {
      applyCustomVars(APP_THEME);
    }
  } catch {
    applyCustomVars(APP_THEME);
  }

  createRoot(element).render(render);
}
