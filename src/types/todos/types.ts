/**
 * Imports
 */
import { ActionContext } from 'vuex'
import { Task, State } from '@/types/todos/interfaces'

/**
 * Actions enum
 */
export enum TodosActionsEnum {
  CreateTask = 'CREATE_TASK',
  RemoveTask = 'REMOVE_TASK',
  UpdateTask = 'UPDATE_TASK',
  CompleteTask = 'COMPLETE_TASK'
}
/**
 * Getters enum
 */
export enum TodosGettersEnum {
  GetAllTodos = 'GET_ALL_TODOS',
  GetAllTodosByCategory = 'GET_ALL_TODOS_BY_CATEGORY',
  GetAllChildTodos = 'GET_ALL_CHILD_TODOS',
  GetActiveTodosByCategory = 'GET_ACTIVE_TODOS_BY_CATEGORY',
  GetActiveTodosByCategoryAndDate = 'GET_ACTIVE_TODOS_BY_CATEGORY_AND_DATE',
  GetActiveTodos = 'GET_ACTIVE_TODOS',
  GetActiveTodosByDate = 'GET_ACTIVE_TODOS_BY_DATE',
  GetChildActiveTodos = 'GET_CHILD_ACTIVE_TODOS',
  GetCompletedTodos = 'GET_COMPLETED_TODOS',
  GetCompletedTodosByCategory = 'GET_COMPLETED_TODOS_BY_CATEGORY',
  GetChildCompletedTodos = 'GET_CHILD_COMPLETED_TODOS',
  GetChildCompletedTodosByCategory = 'GET_CHILD_COMPLETED_TODOS_BY_CATEGORY',
  GetDeletedTodos = 'GET_DELETED_TODOS',
  GetTask = 'GET_TASK',
}

/**
 * Mutations types
 */
export type Mutations = {
  [TodosActionsEnum.CreateTask](state: State, task: Task): void
  [TodosActionsEnum.UpdateTask](state: State, task: Partial<Task> & { id: number }): void
  [TodosActionsEnum.RemoveTask](state: State, task: Partial<Task> & { id: number }): void
}
/**
 * Actions type
 */
export type Actions = {
  [TodosActionsEnum.CreateTask](context: ActionContext<State, State>, payload: Task): void
  [TodosActionsEnum.RemoveTask](context: ActionContext<State, State>, payload: Task): void
  [TodosActionsEnum.UpdateTask](context: ActionContext<State, State>, payload: Task): void
  [TodosActionsEnum.CompleteTask](context: ActionContext<State, State>, payload: Task): void
}
/**
 * Getters type
 */
export type Getters = {
  [TodosGettersEnum.GetAllTodos](state: State): Task[]
  [TodosGettersEnum.GetAllTodosByCategory](state: State): (id: number) => Task[]
  [TodosGettersEnum.GetAllChildTodos](state: State): (id: number) => Task[]
  [TodosGettersEnum.GetActiveTodos](state: State): Task[]
  [TodosGettersEnum.GetActiveTodosByDate](state: State): (date: string) => Task[]
  [TodosGettersEnum.GetActiveTodosByCategory](state: State): (id: number) => Task[]
  [TodosGettersEnum.GetActiveTodosByCategoryAndDate](state: State): (id: number, date: string) => Task[]
  [TodosGettersEnum.GetChildActiveTodos](state: State): (id: number) => Task[]
  [TodosGettersEnum.GetCompletedTodos](state: State): Task[]
  [TodosGettersEnum.GetCompletedTodosByCategory](state: State): (id: number) => Task[]
  [TodosGettersEnum.GetChildCompletedTodos](state: State): (id: number) => Task[]
  [TodosGettersEnum.GetChildCompletedTodosByCategory](state: State): (category_id: number) => Task[]
  [TodosGettersEnum.GetDeletedTodos](state: State): Task[]
  [TodosGettersEnum.GetTask](state: State): (id: number) => Task | undefined
}
