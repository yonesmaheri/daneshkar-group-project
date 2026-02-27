// import { useParams } from 'react-router-dom'
// import { projects } from '../mock/data'
// import type { Project } from '../types/project'

// import Card from '../components/ui/Card'
// import Button from '../components/ui/Button'
// import Avatar from '../components/ui/Avatar'
// import Board from '../components/board/Board'

// const ProjectDetails = () => {
//   const { id } = useParams<{ id: string }>()
//   const project = projects.find(p => p.id === id) as Project | undefined

//   if (!project) return <p className="p-6 text-red-500">Project not found</p>

//   return (
//     <div className="flex flex-col gap-6 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-slate-800">{project.title}</h1>
//         <Button variant="primary">+ Add Task</Button>
//       </div>

//       {/* Description */}
//       <Card hover={false}>
//         <p className="text-slate-600">{project.description}</p>
//       </Card>

//       {/* Members */}
//       <Card hover={false}>
//         <h2 className="font-semibold text-slate-800 mb-3">Members</h2>
//         <div className="flex items-center gap-3">
//           {project.members.map(member => (
//             <Avatar key={member.id} name={member.name} size="md" />
//           ))}
//         </div>
//       </Card>

//       {/* Board */}
//       <div>
//         <h2 className="font-semibold text-slate-800 mb-3">Tasks</h2>
//         <Board />
//       </div>
//     </div>
//   )
// }

// export default ProjectDetails

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../mock/data'
import type { Project } from '../types/project'

import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import Input from '../components/ui/Input'
import Modal from '../components/ui/Modal'
import Board from '../components/board/Board'

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id) as Project | undefined

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  if (!project) return <p className="p-6 text-red-500">Project not found</p>

  const handleSave = () => {
    console.log('New Task:', {
      title,
      description,
      projectId: project.id,
    })

    // بعداً تیم بک‌اند اینجا state یا API رو هندل می‌کنه
    setOpen(false)
    setTitle('')
    setDescription('')
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">
          {project.title}
        </h1>

        <Button variant="primary" onClick={() => setOpen(true)}>
          + Add Task
        </Button>
      </div>

      {/* Modal Add Task */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-semibold mb-4">
          Add New Task
        </h2>

        <div className="flex flex-col gap-3">
          <Input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex flex-col gap-3">
            <Button variant="primary" onClick={handleSave}>
              Save Task
            </Button>
          </div>
        </div>
      </Modal>

      {/* Description */}
      <Card hover={false}>
        <p className="text-slate-600">
          {project.description}
        </p>
      </Card>

      {/* Members */}
      <Card hover={false}>
        <h2 className="font-semibold text-slate-800 mb-3">
          Members
        </h2>

        <div className="flex items-center gap-3">
          {project.members.map(member => (
            <Avatar
              key={member.id}
              name={member.name}
              size="md"
            />
          ))}
        </div>
      </Card>

      {/* Board */}
      <div>
        <h2 className="font-semibold text-slate-800 mb-3">
          Tasks
        </h2>
        <Board />
      </div>
    </div>
  )
}

export default ProjectDetails