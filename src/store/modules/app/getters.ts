/**
 * Imports
 */
import { GetterTree } from 'vuex'
import { State } from '@/types/app/interfaces.ts'
import { AppGettersEnum, Getters } from '@/types/app/types.ts'

/**
 * Todos getters
 */
export const AppGetters: GetterTree<State, any> & Getters = {
  [AppGettersEnum.GetControlPanelViewStatus](state) {
    return state.controlPanelViewStatus
  },
  [AppGettersEnum.GetModalCategoryAddViewStatus](state) {
    return state.modalCategoryAddViewStatus
  },
  [AppGettersEnum.GetModalCategoryEditID](state) {
    return state.modalCategoryEditID
  }
}
