export default function Layout({ children }) {
  return (
    <html>
        <head>
            <title>Blog NextJS</title>
        </head>
        <body>{children}</body>
    </html>
  )
}