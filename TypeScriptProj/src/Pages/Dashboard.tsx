import { projects } from '../mock/data'
import { users } from '../mock/users'

import Card from '../components/ui/Card'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card hover={false}>
          <p className="text-sm text-slate-500">Projects</p>
          <p className="text-3xl font-bold">{projects.length}</p>
        </Card>

        <Card hover={false}>
          <p className="text-sm text-slate-500">Users</p>
          <p className="text-3xl font-bold">{users.length}</p>
        </Card>

        <Card hover={false}>
          <p className="text-sm text-slate-500">Tasks</p>
          <p className="text-3xl font-bold">12</p>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard