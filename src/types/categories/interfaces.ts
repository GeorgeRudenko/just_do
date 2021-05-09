/**
 * Category
 */
export interface Category {
  readonly id: number
  title: string
  icon: number
  color: number
  is_favourite: boolean
  deleted_at: boolean | null
}
/**
 * Categories state
 */
export interface State {
  categories: Category[]
}
