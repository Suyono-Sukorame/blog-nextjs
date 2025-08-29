import type { Metadata } from "next";
import Link from "next/link"
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog NextJS",
  description: "A simple blog created with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-8 py-5 flex justify-between items-center">
            <div className="text-xl font-bold">
              <Link href="/">MyBlog</Link>
            </div>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-blue-600" prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600" prefetch={false}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600" prefetch={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
