/**
 * Imports
 */
import { MutationTree } from 'vuex'
import { State, Task } from '@/types/todos/interfaces'
import { TodosActionsEnum, Mutations } from '@/types/todos/types'

/**
 * Todos mutations
 */
export const TodosMutations: MutationTree<State> & Mutations = {
  [TodosActionsEnum.CreateTask](state, task) {
    state.todos.unshift(task)
  },
  [TodosActionsEnum.RemoveTask](state, payload) {
    console.log(state, payload)
  },
  [TodosActionsEnum.UpdateTask](state, payload: Task) {
    state.todos.filter((todo) => {
      if (todo.id === payload.id) {
        todo.title = payload.title
      }
    })
  },
  [TodosActionsEnum.CompleteTask](state, payload: number) {
    state.todos.filter((todo) => {
      if (todo.id === payload) {
        todo.completed = !todo.completed
      }
    })
  },
}
