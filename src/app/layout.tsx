export const metadata = {
  title: "Miguel Sumo | Portfolio",
  description: "Web Developer and Designer Portfolio",
  keywords: "web development, web design, portfolio, fullstack developer",
  authors: [{ name: "Miguel Sumo" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Miguel Sumo | Portfolio",
    description: "Web Developer and Designer Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}