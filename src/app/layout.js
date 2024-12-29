import "./globals.css";
import AppsProvider from "@/context/AppsProvider";


export const metadata = {
  title: "ShareTrip Assessment",
  description: "Assessment Done by Samiul Kabir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppsProvider>
          {children}
        </AppsProvider>
      </body>
    </html>
  );
}
