import { DndContext, type DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useState } from 'react'
import BoardColumn from './BoardColumn'
import type { Column } from '../../types/board'
import { initialBoard } from '../../mock/board'

const Board = () => {
  const [columns, setColumns] = useState<Column[]>(initialBoard)
  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const sourceCol = columns.find(c => c.tasks.some(t => t.id === active.id))
    const targetCol = columns.find(c => c.tasks.some(t => t.id === over.id))
    if (!sourceCol || !targetCol || sourceCol.id === targetCol.id) return

    const task = sourceCol.tasks.find(t => t.id === active.id)!
    setColumns(cols =>
      cols.map(c => {
        if (c.id === sourceCol.id) return { ...c, tasks: c.tasks.filter(t => t.id !== task.id) }
        if (c.id === targetCol.id) return { ...c, tasks: [...c.tasks, task] }
        return c
      })
    )
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex gap-6 overflow-x-auto">
        {columns.map(c => <BoardColumn key={c.id} column={c} />)}
      </div>
    </DndContext>
  )
}

export default Board