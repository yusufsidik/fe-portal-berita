import { Outlet } from "react-router"

function App() {
  return (
    <main className="font-sans antialiased bg-gray-50 text-gray-900">
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default App
