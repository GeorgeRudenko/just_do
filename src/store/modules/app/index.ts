/**
 * Imports
 */
import { Module } from 'vuex'
import { AppState } from '@/store/modules/app/state.ts'
import { AppGetters } from '@/store/modules/app/getters.ts'
import { AppMutations } from '@/store/modules/app/mutations.ts'
import { AppActions } from '@/store/modules/app/actions.ts'

export const AppStore: Module<any, any> = {
  // # State
  state: AppState,
  // # Getters
  getters: AppGetters,
  // # Mutation
  mutations: AppMutations,
  // # Action
  actions: AppActions,
}
