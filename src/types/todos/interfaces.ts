/**
 * Task
 */
export interface Task {
  readonly id: number
  parent_id: number | null
  category_id: number | null
  title: string
  completed: boolean
  target_date: string | null
  created_at: string
  deleted_at: string | null
}

/**
 * Todos state
 */
export interface State {
  todos: Array<Task>
}
