import type { Project } from '../types/project'
import { users } from './users'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Website Redesign',
    description: 'Redesign company website UI/UX',
    members: [users[0], users[1]]
  },
  {
    id: '2',
    title: 'Dashboard UI',
    description: 'Create admin dashboard with charts',
    members: [users[2]]
  },
  {
    id: '3',
    title: 'Website Redesign2',
    description: 'Redesign company website UI/UX',
    members: [users[0], users[1]]
  },
  {
    id: '4',
    title: 'Website Redesign3',
    description: 'Redesign company website UI/UX',
    members: [users[1]]
  },
  {
    id: '5',
    title: 'Website Redesign4',
    description: 'Redesign company website UI/UX',
    members: [users[0], users[1]]
  }
]