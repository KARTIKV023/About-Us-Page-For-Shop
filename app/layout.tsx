import type { Metadata } from "next";
import "./globals.css";
import HeaderSpacer from "@/components/site/HeaderSpacer";
import ProgressBar from "@/components/site/ProgressBar";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://shop.vijyapana.com"),
  title: {
    default: "Vijyapana",
    template: "%s | Vijyapana",
  },
};

const motionGateScript = `document.documentElement.classList.add("js-motion");`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <script dangerouslySetInnerHTML={{ __html: motionGateScript }} />
        <ProgressBar />
        <SiteHeader />
        <HeaderSpacer />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}