/**
 * Imports
 */
import { ActionTree } from 'vuex'
import { State } from '@/types/todos/interfaces'
import { TodosActionsEnum, Actions } from '@/types/todos/types'

/**
 * Todos actions
 */
export const TodosActions: ActionTree<State, State> & Actions = {
  [TodosActionsEnum.CreateTask]({ commit }, task) {
    commit(TodosActionsEnum.CreateTask, task)
  },
  [TodosActionsEnum.RemoveTask]({ commit }, payload) {
    commit(TodosActionsEnum.RemoveTask, payload)
  },
  [TodosActionsEnum.UpdateTask]({ commit }, payload) {
    commit(TodosActionsEnum.UpdateTask, payload)
  },
  [TodosActionsEnum.CompleteTask]({ commit }, payload) {
    commit(TodosActionsEnum.CompleteTask, payload)
  },
}
