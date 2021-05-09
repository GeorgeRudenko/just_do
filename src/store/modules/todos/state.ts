/**
 * Imports
 */
import { State } from '@/types/todos/interfaces'

/**
 * State
 */
export const TodosState: State = {
  todos: [
    { id: 1, parent_id: null, category_id: 3, title: 'Write second page to my book', completed: false, target_date: '2021-04-13', created_at: '2021-04-08 14:24:15', deleted_at: null },
    { id: 2, parent_id: null, category_id: 1, title: 'Clean my workroom', completed: false, target_date: '2021-04-12', created_at: '2021-04-08 16:40:03', deleted_at: null },
    { id: 3, parent_id: null, category_id: null, title: 'Call Mr. Black', completed: true, target_date: '2021-04-11', created_at: '2021-04-08 18:44:52', deleted_at: null },
    { id: 4, parent_id: null, category_id: 3, title: 'Buy new historical books in Walmart', completed: false, target_date: '2021-04-16', created_at: '2021-04-08 18:44:52', deleted_at: null },
    { id: 5, parent_id: 2, category_id: 1, title: 'Buy new table & desk', completed: false, target_date: null, created_at: '2021-04-08 18:44:52', deleted_at: null },
    { id: 6, parent_id: 2, category_id: 1, title: 'Clean room window', completed: true, target_date: null, created_at: '2021-04-08 18:44:52', deleted_at: null },
    { id: 7, parent_id: 2, category_id: 1, title: 'Remove children toys', completed: false, target_date: null, created_at: '2021-04-08 18:44:52', deleted_at: null },
    { id: 8, parent_id: null, category_id: 1, title: 'Buy new toys for Buddy', completed: false, target_date: null, created_at: '2021-04-08 18:44:52', deleted_at: null },
  ]
}
