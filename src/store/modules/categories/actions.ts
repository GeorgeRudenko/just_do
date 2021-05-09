/**
 * Imports
 */
import { ActionTree } from 'vuex'
import { Category, State } from '@/types/categories/interfaces'
import { CategoriesActionsEnum, Actions } from '@/types/categories/types'

/**
 * Categories actions
 */
export const CategoriesActions: ActionTree<State, State> & Actions = {
  [CategoriesActionsEnum.CreateCategory]({ commit }, payload: Category) {
    commit(CategoriesActionsEnum.CreateCategory, payload)
  },
  [CategoriesActionsEnum.RemoveCategory]({ commit }, payload: number) {
    commit(CategoriesActionsEnum.RemoveCategory, payload)
  },
  [CategoriesActionsEnum.UpdateCategory]({ commit }, payload: Category) {
    commit(CategoriesActionsEnum.UpdateCategory, payload)
  },
  [CategoriesActionsEnum.UpdateCategoryName]({ commit }, payload: Category) {
    commit(CategoriesActionsEnum.UpdateCategoryName, payload)
  },
  [CategoriesActionsEnum.UpdateCategoryFavourite]({ commit }, payload: Category) {
    commit(CategoriesActionsEnum.UpdateCategoryFavourite, payload)
  },
}
