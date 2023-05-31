export const metadata = {
  title: 'ArukaShop',
  description: 'Uma API para petshop construída com Node.js, React e Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
