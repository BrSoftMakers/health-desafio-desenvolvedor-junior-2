import Context from "../../src/context/Context"

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
    <>
      <html lang="en">
        <Context>
          <body>{children}</body>
        </Context>
        
      </html>
    </>
  )
}
