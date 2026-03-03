export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white">{/* Sidebar */}</aside>
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <header className="bg-white border-b p-4">{/* Topbar */}</header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
