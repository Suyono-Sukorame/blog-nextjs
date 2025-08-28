import Link from "next/link"

export const metadata = {
  title: "Blog NextJS",
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/" prefetch={false}>Home</Link></li>
              <li><Link href="/blog" prefetch={false}>Blog</Link></li>
              <li><Link href="/about" prefetch={false}>About</Link></li>
              <li><Link href="/contact" prefetch={false}>Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
            <hr />
            <span>I'am here to stay (footer)</span>
        </footer>
      </body>
    </html>
  )
}
