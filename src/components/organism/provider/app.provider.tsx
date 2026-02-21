import {IntlProvider} from "react-intl";
import {PropsWithChildren} from "react";
import Dictionary from "@/common/dictionary";
import ConnectionMiddleware from "@components/organism/middleware/connection.middleware.tsx";

interface Props extends PropsWithChildren {}

export default function AppProvider({children}: Props) {
  const locale = Dictionary["id"];

  return (
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      <ConnectionMiddleware>{children}</ConnectionMiddleware>
    </IntlProvider>
  );
}
