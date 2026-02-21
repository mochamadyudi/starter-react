import {applyCustomVars} from "@common/utils/theme.util";
import openStorage from "@common/utils/storage";
import {ReactNode} from "react";
import {createRoot} from "react-dom/client";
import Security from "./common/utils/security";
import {APP_PATTERN, APP_THEME} from "@common/configs/app.config";

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
    if (persisted && "theme" in persisted) {
      const decompressed = Security.decompress(persisted.theme);
      applyCustomVars(decompressed);
    } else {
      applyCustomVars(APP_THEME);
    }
  } catch {
    applyCustomVars(APP_THEME); // fallback jika error
  }

  createRoot(element).render(render);
}
