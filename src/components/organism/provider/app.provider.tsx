import {IntlProvider} from "react-intl";
import {PropsWithChildren, useEffect} from "react";
import Dictionary from "@/common/dictionary";
import {HeroUIProvider} from "@heroui/react";
import ConnectionMiddleware from "@components/organism/middleware/connection.middleware.tsx";
import {applyCustomVars} from "@common/utils/theme.util.ts";
import useTheme from "@hooks/useTheme.ts";
import classNames from "classnames";

interface Props extends PropsWithChildren {}

export default function AppProvider({children}: Props) {
  const locale = Dictionary["id"];
  const {theme} = useTheme();

  useEffect(() => {
    applyCustomVars(theme);
  }, [theme]);

  return (
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      <HeroUIProvider>
        <ConnectionMiddleware>
          <main className={classNames(theme.mode, "app")}>{children}</main>
        </ConnectionMiddleware>
      </HeroUIProvider>
    </IntlProvider>
  );
}
