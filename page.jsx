import "./globals.css";

export const metadata = {
  title: "Pyrox Bio",
  description: "Single-page direct enquiry website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
