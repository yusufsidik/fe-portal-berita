import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {

  return (
    <main className="font-sans antialiased bg-gray-50 text-gray-900">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
