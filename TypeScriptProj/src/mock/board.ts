import type { Column } from '../types/board'

export const initialBoard: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 't1', title: 'Design UI' },
      { id: 't2', title: 'Create components' }
    ]
  },
  {
    id: 'doing',
    title: 'Doing',
    tasks: [{ id: 't3', title: 'Implement board' }]
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [{ id: 't4', title: 'Setup project' }]
  }
]