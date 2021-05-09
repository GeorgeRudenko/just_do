/**
 * Imports
 */
import { Module } from 'vuex'
import { TodosState } from '@/store/modules/todos/state'
import { TodosGetters } from '@/store/modules/todos/getters'
import { TodosMutations } from '@/store/modules/todos/mutations'
import { TodosActions } from '@/store/modules/todos/actions'

export const TodosStore: Module<any, any> = {
  // # State
  state: TodosState,
  // # Getters
  getters: TodosGetters,
  // # Mutation
  mutations: TodosMutations,
  // # Action
  actions: TodosActions,
}
