import { users } from '../mock/users'
import type { User } from '../types/user'

import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import Input from '../components/ui/Input'
import Modal from '../components/ui/Modal'
import Select from '../components/ui/Select'

import { useState } from 'react'
const Users = () => {
  const [role, setRole] = useState<'admin' | 'member'>('member')

  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Users</h1>
        <Button variant="primary" onClick={() => setOpen(true)}>+ Add User</Button>
      </div>

      {/* Modal Add User */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-semibold mb-4">Add New User</h2>

        <div className="flex flex-col gap-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />

          {/* Select Role */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-600 font-medium">
            </label>

            <Select
              value={role}
              onChange={(value) => setRole(value as 'admin' | 'member')}
              placeholder="Select role"
              options={[
                { label: 'Member', value: 'member' },
                { label: 'Admin', value: 'admin' }
              ]}
            />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <Button variant="primary">
              Save User
            </Button>
          </div>
        </div>
      </Modal>

      {/* Users Table */}
      <Card hover={false}>
        <table className="w-full table-fixed">
          <thead className="bg-slate-50 border-b">
            <tr>
              {/* Name - چپ */}
              <th className="p-4 text-left font-semibold text-slate-600 w-1/3">
                Name
              </th>

              {/* Email - وسط */}
              <th className="p-4 text-center font-semibold text-slate-600 w-1/3">
                Email
              </th>

              {/* Role - راست */}
              <th className="p-4 text-right font-semibold text-slate-600 w-1/3">
                Role
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user: User) => (
              <tr
                key={user.id}
                className="border-b last:border-none hover:bg-slate-50 transition"
              >
                {/* Name - چپ */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar name={user.name} size="sm" />
                    <span>{user.name}</span>
                  </div>
                </td>

                {/* Email - وسط */}
                <td className="p-4 text-center text-slate-600">
                  {user.email}
                </td>

                {/* Role - راست */}
                <td className="p-4 text-right">
                  <span className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700">
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

    </div>
  )
}

export default Users