export const metadata = {
  title: 'Login Page',
  description: 'เข้าสู่หน้า Admin',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
