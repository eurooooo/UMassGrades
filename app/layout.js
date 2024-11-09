import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "UMassGrades",
  description:
    "View all the past grades for classes taken at the University of Massachusetts, Amherst",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
