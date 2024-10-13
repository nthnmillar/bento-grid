import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import DMSans Regular
const dmSansRegular = localFont({
  src: "./fonts/static/DMSans-Regular.ttf",
  variable: "--font-dm-sans-regular",
  weight: "400",
  style: "normal",
});

// Import DMSans Italic
const dmSansItalic = localFont({
  src: "./fonts/DMSans-Italic-VariableFont_opsz,wght.ttf",
  variable: "--font-dm-sans-italic",
  weight: "400",
  style: "italic",
});

// Import DMSans Medium
const dmSansMedium = localFont({
  src: "./fonts/static/DMSans-Medium.ttf",
  variable: "--font-dm-sans-medium",
  weight: "500",
  style: "normal",
});

// Import DMSans Medium Italic
const dmSansMediumItalic = localFont({
  src: "./fonts/static/DMSans-MediumItalic.ttf",
  variable: "--font-dm-sans-medium-italic",
  weight: "500",
  style: "italic",
});

// Import DMSans Variable
const dmSansVariable = localFont({
  src: "./fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dm-sans-variable",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Bento Grid",
  description: "A portfolio project built with Next.js and Tailwind",
  icons: {
    icon: "/favicon-arvec.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSansRegular.variable} ${dmSansItalic.variable} ${dmSansMedium.variable} ${dmSansMediumItalic.variable}  ${dmSansVariable.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
