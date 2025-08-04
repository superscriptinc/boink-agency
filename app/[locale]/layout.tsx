import { Metadata } from "next";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export const metadata: Metadata = {
  icons: {
    icon: "favicon.png",
  },
};

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  return <>{children}</>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "pt" }];
}
