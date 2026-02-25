export const metadata = {
  title: "Miguel Sumo | Portfolio",
  description: "Web Developer and Designer Portfolio",
  keywords: "web development, web design, portfolio, fullstack developer",
  authors: [{ name: "Miguel Sumo" }],
  openGraph: {
    title: "Miguel Sumo | Portfolio",
    description: "Web Developer and Designer Portfolio",
    type: "website",
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