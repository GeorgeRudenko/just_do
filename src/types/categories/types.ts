/**
 * Imports
 */
import { ActionContext } from 'vuex'
import { Category, State } from '@/types/categories/interfaces.ts'

/**
 * Actions enum
 */
export enum CategoriesActionsEnum {
  UpdateCategory = 'UPDATE_CATEGORY',
  UpdateCategoryName = 'UPDATE_CATEGORY_NAME',
  UpdateCategoryFavourite = 'UPDATE_CATEGORY_FAVOURITE',
  CreateCategory = 'CREATE_CATEGORY',
  RemoveCategory = 'REMOVE_CATEGORY',
}
/**
 * Getters enum
 */
export enum CategoriesGettersEnum {
  GetAllCategories = 'GET_ALL_CATEGORIES',
  GetCategories = 'GET_CATEGORIES',
  GetCategory = 'GET_CATEGORY',
}
/**
 * Getters arguments enum
 */
export enum GetCategoriesEnum {
  All = 'ALL',
  Favourites = 'FAVOURITES',
  NotFavourites = 'NOT_FAVOURITES',
}

/**
 * Mutations types
 */
export type Mutations = {
  [CategoriesActionsEnum.UpdateCategory](state: State, payload: Category): void
  [CategoriesActionsEnum.UpdateCategoryName](state: State, payload: Category): void
  [CategoriesActionsEnum.UpdateCategoryFavourite](state: State, payload: Category): void
  [CategoriesActionsEnum.CreateCategory](state: State, payload: Category): void
  [CategoriesActionsEnum.RemoveCategory](state: State, payload: number): void
}

/**
 * Actions type
 */
export type Actions = {
  [CategoriesActionsEnum.UpdateCategoryName](context: ActionContext<State, State>, payload: Category): void
  [CategoriesActionsEnum.UpdateCategoryFavourite](context: ActionContext<State, State>, payload: Category): void
  [CategoriesActionsEnum.CreateCategory](context: ActionContext<State, State>, payload: Category): void
  [CategoriesActionsEnum.RemoveCategory](context: ActionContext<State, State>, payload: number): void
}

/**
 * Getters type
 */
export type Getters = {
  [CategoriesGettersEnum.GetAllCategories](state: State): Category[]
  [CategoriesGettersEnum.GetCategories](state: State): (type: string) => Category[]
  [CategoriesGettersEnum.GetCategory](state: State): (id: number) => Category
}
