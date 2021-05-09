/**
 * Imports
 */
import { ActionContext } from 'vuex'
import { State } from '@/types/app/interfaces.ts'

/**
 * Actions enum
 */
export enum AppActionsEnum {
  // # Control panel
  UpdateControlPanelViewStatus = 'UPDATE_CONTROL_PANEL_VIEW_STATUS',
  // # Category modal
  UpdateModalCategoryAddViewStatus = 'UPDATE_MODAL_CATEGORY_ADD_VIEW_STATUS',
  UpdateModalCategoryEditID = 'UPDATE_MODAL_CATEGORY_EDIT_ID'
}
/**
 * Getters enum
 */
export enum AppGettersEnum {
  // # Control panel
  GetControlPanelViewStatus = 'GET_CONTROL_PANEL_VIEW_STATUS',
  // # Category modal
  GetModalCategoryAddViewStatus = 'GET_MODAL_CATEGORY_ADD_VIEW_STATUS',
  GetModalCategoryEditID = 'GET_MODAL_CATEGORY_EDIT_ID'
}

/**
 * Mutations types
 */
export type Mutations = {
  // # Control panel
  [AppActionsEnum.UpdateControlPanelViewStatus](state: State, payload: boolean): void
  // # Category modal
  [AppActionsEnum.UpdateModalCategoryAddViewStatus](state: State, payload: boolean): void
  [AppActionsEnum.UpdateModalCategoryEditID](state: State, payload: number | null): void
}
/**
 * Actions type
 */
export type Actions = {
  // # Control panel
  [AppActionsEnum.UpdateControlPanelViewStatus](context: ActionContext<State, State>, payload: boolean): void
  // # Category modal
  [AppActionsEnum.UpdateModalCategoryAddViewStatus](context: ActionContext<State, State>, payload: boolean): void
  [AppActionsEnum.UpdateModalCategoryEditID](context: ActionContext<State, State>, payload: number | null): void
}
/**
 * Getters type
 */
export type Getters = {
  // # Control panel
  [AppGettersEnum.GetControlPanelViewStatus](state: State): boolean
  // # Category modal
  [AppGettersEnum.GetModalCategoryAddViewStatus](state: State): boolean
  [AppGettersEnum.GetModalCategoryEditID](state: State): number | null
}
