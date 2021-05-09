/**
 * Imports
 */
import { ActionTree } from 'vuex'
import { State } from '@/types/app/interfaces.ts'
import { AppActionsEnum, Actions } from '@/types/app/types.ts'

/**
 * App actions
 */
export const AppActions: ActionTree<State, State> & Actions = {
  [AppActionsEnum.UpdateControlPanelViewStatus]({ commit }, payload) {
    commit(AppActionsEnum.UpdateControlPanelViewStatus, payload)
  },
  [AppActionsEnum.UpdateModalCategoryAddViewStatus]({ commit }, payload) {
    commit(AppActionsEnum.UpdateModalCategoryAddViewStatus, payload)
  },
  [AppActionsEnum.UpdateModalCategoryEditID]({ commit }, payload) {
    commit(AppActionsEnum.UpdateModalCategoryEditID, payload)
  }
}
