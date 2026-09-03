import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOSSEVFX | Cinema for Dub & Sound System Culture",
  description: "Leuven-based director & videographer capturing festival aftermovies, sound system clashes, and underground merchandise drops.",
  keywords: ["Videographer Leuven", "Dub Festival Aftermovie", "Sound System Culture", "Reggae Videography", "Music Video Belgium", "JosseVFX"],
  openGraph: {
    title: "JOSSEVFX | Cinematographer & Editor",
    description: "Festival Aftermovies • Sound System Culture • Heavy Merch Campaigns",
    type: "website",
    locale: "en_BE",
    url: "https://jossevfx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#08080A]">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-inter antialiased bg-[#08080A] text-[#F3F4F6] selection:bg-[#00E575] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
