import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./auth/login";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web3Wave",
  description: "Generated by Web3Wave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
