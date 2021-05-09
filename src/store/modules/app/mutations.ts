/**
 * Imports
 */
import { MutationTree } from 'vuex'
import { State } from '@/types/app/interfaces.ts'
import { AppActionsEnum, Mutations } from '@/types/app/types.ts'

/**
 * Todos mutations
 */
export const AppMutations: MutationTree<State> & Mutations = {
  [AppActionsEnum.UpdateControlPanelViewStatus](state, payload: boolean) {
    state.controlPanelViewStatus = payload
  },
  [AppActionsEnum.UpdateModalCategoryAddViewStatus](state, payload: boolean) {
    state.modalCategoryAddViewStatus = payload
  },
  [AppActionsEnum.UpdateModalCategoryEditID](state, payload: number | null) {
    state.modalCategoryEditID = payload
  }
}
