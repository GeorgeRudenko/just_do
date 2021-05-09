/**
 * Imports
 */
import { Module } from 'vuex'
import { CategoriesState } from '@/store/modules/categories/state'
import { CategoriesGetters } from '@/store/modules/categories/getters'
import { CategoriesMutations } from '@/store/modules/categories/mutations'
import { CategoriesActions } from '@/store/modules/categories/actions'

export const CategoriesStore: Module<any, any> = {
  // # State
  state: CategoriesState,
  // # Getters
  getters: CategoriesGetters,
  // # Mutation
  mutations: CategoriesMutations,
  // # Action
  actions: CategoriesActions,
}
