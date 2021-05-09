/**
 * Imports
 */
import { GetterTree } from 'vuex'
import { State } from '@/types/todos/interfaces'
import { TodosGettersEnum, Getters } from '@/types/todos/types'

/**
 * Todos getters
 */
export const TodosGetters: GetterTree<State, State> & Getters = {
  [TodosGettersEnum.GetAllTodos](state) {
    return state.todos
  },
  [TodosGettersEnum.GetAllTodosByCategory](state) {
    return (id: number) => state.todos.filter(todo => todo.deleted_at === null && todo.category_id === id)
  },
  [TodosGettersEnum.GetAllChildTodos](state) {
    return (id: number) => state.todos.filter(todo => todo.deleted_at === null && todo.parent_id === id)
  },
  [TodosGettersEnum.GetActiveTodos](state) {
    return state.todos.filter(todo => todo.completed === false && todo.deleted_at === null && todo.parent_id === null)
  },
  [TodosGettersEnum.GetActiveTodosByDate](state) {
    return (date: string) => state.todos.filter(todo => todo.target_date === date && todo.completed === false && todo.deleted_at === null && todo.parent_id === null)
  },
  [TodosGettersEnum.GetActiveTodosByCategory](state) {
    return (id: number) => state.todos.filter(todo => todo.category_id === id && todo.completed === false && todo.deleted_at === null && todo.parent_id === null)
  },
  [TodosGettersEnum.GetActiveTodosByCategoryAndDate](state) {
    return (id: number, date: string) => state.todos.filter(todo => todo.category_id === id && todo.target_date === date && todo.completed === false && todo.deleted_at === null && todo.parent_id === null)
  },
  [TodosGettersEnum.GetChildActiveTodos](state) {
    return (id: number) => state.todos.filter(todo => todo.completed === false && todo.deleted_at === null && todo.parent_id === id)
  },
  [TodosGettersEnum.GetCompletedTodos](state) {
    return state.todos.filter(todo => todo.completed === true && todo.deleted_at === null && todo.parent_id === null)
  },
  [TodosGettersEnum.GetCompletedTodosByCategory](state) {
    return (id: number) => state.todos.filter(todo => todo.category_id === id && todo.completed === true && todo.deleted_at === null && todo.parent_id === null)
  },
  [TodosGettersEnum.GetChildCompletedTodos](state) {
    return (id: number) => state.todos.filter(todo => todo.completed === true && todo.deleted_at === null && todo.parent_id === id)
  },
  [TodosGettersEnum.GetChildCompletedTodosByCategory](state) {
    return (category_id: number) => state.todos.filter(todo => todo.category_id === category_id && todo.completed === true && todo.deleted_at === null && todo.parent_id !== null)
  },
  [TodosGettersEnum.GetDeletedTodos](state) {
    return state.todos.filter(todo => todo.deleted_at !== null)
  },
  [TodosGettersEnum.GetTask](state) {
    return (id: number) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
}
