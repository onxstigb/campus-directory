import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Campus Directory",
  description: "A Next.js Student and Faculty directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Nav Header */}
        <header className="bg-gray-100 p-4 border-b border-gray-300">
          <nav className="flex space-x-6 font-bold text-blue-600">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/students" className="hover:underline">Students</Link>
            <Link href="/faculty" className="hover:underline">Faculty</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}