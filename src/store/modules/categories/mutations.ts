/**
 * Imports
 */
import { MutationTree } from 'vuex'
import { State, Category } from '@/types/categories/interfaces.ts'
import { CategoriesActionsEnum, Mutations } from '@/types/categories/types.ts'

/**
 * Categories mutations
 */
export const CategoriesMutations: MutationTree<State> & Mutations = {
  [CategoriesActionsEnum.CreateCategory](state, category: Category) {
    state.categories.push(category)
  },
  [CategoriesActionsEnum.RemoveCategory](state, payload: number) {
    console.log(state, payload)
  },
  [CategoriesActionsEnum.UpdateCategory](state, payload: Category) {
    state.categories.filter((category) => {
      if (category.id === payload.id) {
        category.title = payload.title
        category.icon = payload.icon
        category.color = payload.color
        category.is_favourite = payload.is_favourite
        category.deleted_at = payload.deleted_at
      }
    })
  },
  [CategoriesActionsEnum.UpdateCategoryName](state, payload: Category) {
    state.categories.filter((category) => {
      if (category.id === payload.id) {
        category.title = payload.title
      }
    })
  },
  [CategoriesActionsEnum.UpdateCategoryFavourite](state, payload: Category) {
    state.categories.filter((category) => {
      if (category.id === payload.id) {
        category.is_favourite = payload.is_favourite
      }
    })
  },
}
