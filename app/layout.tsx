import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jiaping-ai-lab.vercel.app"),
  title: "佳萍 AI 創作實驗室",
  description:
    "55 歲開始學 AI，從不懂程式到做出網站、遊戲、音樂與作品。每一次跌倒，都是佳萍重新出發的證明。",
  openGraph: {
    title: "佳萍 AI 創作實驗室",
    description:
      "55 歲開始學 AI，把人生變成一件一件作品。一起看看佳萍的 AI 創作旅程。",
    url: "https://jiaping-ai-lab.vercel.app",
    siteName: "佳萍 AI 創作實驗室",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/jiaping-chibi.png",
        width: 1536,
        height: 1024,
        alt: "佳萍 AI 創作實驗室 Q 版佳萍",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "佳萍 AI 創作實驗室",
    description:
      "55 歲開始學 AI，把人生變成一件一件作品。一起看看佳萍的 AI 創作旅程。",
    images: ["/jiaping-chibi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
