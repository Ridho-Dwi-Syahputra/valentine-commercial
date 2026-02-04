import "./globals.css";

export const metadata = {
  title: "Valentine",
  description: "A special love letter for someone special",
  icons: {
    icon: "/heart.svg",
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
