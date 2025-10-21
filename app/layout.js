import '../styles/globals.css'

export const metadata = {
  title: 'Couched Ideas',
  description: 'Side Projects, often made from my couch.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
