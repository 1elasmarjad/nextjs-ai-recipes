import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ReactQueryProvider } from "~/components/ReactQueryProvider";

export const metadata = {
  title: "AI Recipe Generator",
  description: "Generate recipes using AI to find the perfect meal for you!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
