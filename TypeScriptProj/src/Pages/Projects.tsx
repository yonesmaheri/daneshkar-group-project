import { Link } from 'react-router-dom'
import { projects } from '../mock/data'
import type { Project } from '../types/project'

import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import Input from '../components/ui/Input'
import Modal from '../components/ui/Modal'
import { useState } from 'react'

const Projects = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Projects</h1>
        <Button variant="primary" onClick={() => setOpen(true)}>+ New Project</Button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-semibold mb-4">Add New Project</h2>
        <div className="flex flex-col gap-3">
          <Input placeholder="Title" />
          <Input placeholder="Descrption" />
          <Button variant="primary" onClick={() => setOpen(false)}>Save Project</Button>
        </div>
      </Modal>

      {/* Grid پروژه‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <Card>
              <h3 className="text-lg font-semibold text-slate-800">{project.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{project.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-slate-400">{project.members.length} Members</span>
                <div className="flex -space-x-2">
                  {project.members.map(member => (
                    <Avatar key={member.id} name={member.name} size="md" />
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects