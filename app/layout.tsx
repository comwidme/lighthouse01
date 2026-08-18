import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://comwidme.github.io/lighthouse01/";
const socialImageUrl = `${siteUrl}og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "등대독서회",
    template: "%s | 등대독서회",
  },
  description:
    "책을 통해 서로의 생각을 비추는 곳. ㈜제주비 임직원 누구나 함께하는 사내 독서동호회입니다.",
  openGraph: {
    title: "등대독서회",
    description: "한 주의 끝, 책과 사람을 잇는 두 시간",
    locale: "ko_KR",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: socialImageUrl,
        width: 1733,
        height: 909,
        alt: "등대독서회 — 한 주의 끝, 책과 사람을 잇는 두 시간",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "등대독서회",
    description: "한 주의 끝, 책과 사람을 잇는 두 시간",
    images: [socialImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
