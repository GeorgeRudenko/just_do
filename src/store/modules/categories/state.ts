/**
 * Imports
 */
import { State } from '@/types/categories/interfaces'

/**
 * State
 */
export const CategoriesState: State = {
  categories: [
    {
      id: 1,
      title: 'Personal',
      icon: 2,
      color: 1,
      is_favourite: false,
      deleted_at: null
    },
    {
      id: 2,
      title: 'Work',
      icon: 1,
      color: 4,
      is_favourite: true,
      deleted_at: null
    },
    {
      id: 3,
      title: 'Weekends',
      icon: 4,
      color: 2,
      is_favourite: false,
      deleted_at: null
    }
  ]
}
