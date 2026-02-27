import { Link } from 'react-router-dom'

const Sidebar = () => (
  <aside className="w-60 bg-slate-900 text-white p-6 flex flex-col gap-6">
    <h2 className="text-xl font-bold">Team Board</h2>
    <nav className="flex flex-col gap-3 mt-4">
      <Link to="/" className="hover:text-primary transition">Dashboard</Link>
      <Link to="/projects" className="hover:text-primary transition">Projects</Link>
      <Link to="/users" className="hover:text-primary transition">Users</Link>
    </nav>
  </aside>
)

export default Sidebar