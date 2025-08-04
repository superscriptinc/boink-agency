"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { useEffect, useState } from "react";
import { getOptions } from "../next-i18next.config.js";

export default function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [i18n, setI18n] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const initI18next = async () => {
      const i18nInstance = createInstance();
      await i18nInstance.use(initReactI18next).init({
        ...getOptions(locale),
        resources: {
          [locale]: {
            common: await import(
              `../public/locales/${locale}/common.json`
            ).then((m) => m.default),
          },
        },
      });
      setI18n(i18nInstance);
    };

    initI18next();
  }, [locale]);

  // Don't render anything until we're on the client to avoid hydration mismatch
  if (!isClient || !i18n) {
    return <div>Loading...</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
