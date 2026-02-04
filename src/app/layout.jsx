import "./globals.css";

export const metadata = {
  title: "My Valentine 💕",
  description: "A special love letter for someone special",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
