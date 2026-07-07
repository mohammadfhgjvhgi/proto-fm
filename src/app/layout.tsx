import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Arabic, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/site/language-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "مهندس محمد عادل العقيلي — تكنولوجيا المباني الذكية",
  description:
    "هوية هندسية رقمية. أصمم وأنفذ أنظمة مبانٍ ذكية موثّقة بالكامل — من المستشعر إلى السحابة. كل ادّعاء له دليل قابل للتحقق.",
  keywords: [
    "محمد عادل العقيلي",
    "Arduino",
    "ESP8266",
    "Firebase",
    "IoT",
    "Smart Building",
    "المباني الذكية",
    "هندسة",
  ],
  authors: [{ name: "Mohammed Adil Alakaly" }],
  openGraph: {
    title: "مهندس محمد عادل العقيلي — تكنولوجيا المباني الذكية",
    description:
      "هوية هندسية رقمية. كل ادّعاء موثّق بالكود والصور والتقييم.",
    type: "website",
    locale: "ar",
  },
  twitter: {
    card: "summary_large_image",
    title: "مهندس محمد عادل العقيلي — تكنولوجيا المباني الذكية",
    description: "هوية هندسية رقمية. كل ادّعاء موثّق.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${notoSansArabic.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
