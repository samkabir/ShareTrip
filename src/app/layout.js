import "./globals.css";


export const metadata = {
  title: "ShareTrip Assessment",
  description: "Assessment Done by Samiul Kabir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
