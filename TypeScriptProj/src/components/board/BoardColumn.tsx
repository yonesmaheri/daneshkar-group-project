import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import TaskCard from './TaskCard'
import type { Column } from '../../types/board'

type Props = { column: Column }

const BoardColumn = ({ column }: Props) => (
  <div className="w-72 bg-slate-100 p-4 rounded-xl flex flex-col gap-3">
    <h3 className="font-semibold text-slate-700">{column.title}</h3>
    <SortableContext items={column.tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
      <div className="flex flex-col gap-2">
        {column.tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </SortableContext>
  </div>
)

export default BoardColumn