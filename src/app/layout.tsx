import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Az Európai Unió Főbb Szervei",
  description:
    "az EU legfontosabb intézményei központi szerepet játszanak a döntéshozatalban, a pénzügyekben és az uniós jog végrehajtásában.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
