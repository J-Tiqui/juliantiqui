import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Tiqui — AI Automation & Computer Engineering",
  description:
    "Julian Tiqui is an AI Automation Analyst and Computer Engineering student building intelligent agents, autonomous systems, and practical software.",
  keywords: [
    "Julian Tiqui",
    "AI automation",
    "computer engineering",
    "autonomous robotics",
    "software engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
