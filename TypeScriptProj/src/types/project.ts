import type { User } from './user'

export type Project = {
  id: string
  title: string
  description?: string
  members: User[]
}