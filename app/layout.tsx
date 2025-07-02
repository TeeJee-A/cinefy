import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/navbar";
import { ReduxProviders } from "@/components/providers/redux-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cinefy",
  description: "Watch what you want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProviders>
            <header className="fixed w-screen top-0 left-0 backdrop-blur-md z-50">
              <Navbar />
            </header>
            <main className="w-screen h-[100dvh] pt-20 overflow-y-auto overflow-x-hidden scrollbar-none">
              {children}
            </main>
          </ReduxProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
