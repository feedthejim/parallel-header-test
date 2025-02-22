import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, header }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div
          style={{
            border: "1px solid black",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          {header}
        </div>
        {children}
        <br />
        <Link href="/">To Home</Link>
        <br />
        <Link href="/1">To 1</Link>
        <br />
        <Link href="/2">To 2</Link>
        <br />
        <Link href="/3">To 3</Link>
      </body>
    </html>
  );
}
