/**
 * Imports
 */
import { GetterTree } from 'vuex'
import { State } from '@/types/categories/interfaces.ts'
import { CategoriesGettersEnum, GetCategoriesEnum, Getters } from '@/types/categories/types.ts'

/**
 * Categories getters
 */
export const CategoriesGetters: GetterTree<State, State> & Getters = {
  [CategoriesGettersEnum.GetAllCategories](state) {
    return state.categories
  },
  [CategoriesGettersEnum.GetCategories](state) {
    return (type: string) => {
      switch (type) {
        case GetCategoriesEnum.All:
          return state.categories
        case GetCategoriesEnum.Favourites:
          return state.categories.filter(category => category.is_favourite === true)
        case GetCategoriesEnum.NotFavourites:
          return state.categories.filter(category => category.is_favourite === false)
        default:
          throw new Error('Unrecognized Handler')
      }
    }
  },
  [CategoriesGettersEnum.GetCategory](state) {
    return (id: number) => state.categories.filter(category => category.id === id)[0]
  },
}
