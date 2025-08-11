import "./globals.css";

export const metadata = {
  title: "Siri Pochareddy — Portfolio",
  description:
    "Aspiring Product Marketing Professional & Business Administration student (Singapore Polytechnic, 2027).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Force dark theme site-wide */}
      <body className="dark min-h-dvh bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
