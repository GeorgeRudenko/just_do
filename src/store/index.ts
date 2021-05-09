/**
 * Imports
 */
import { createStore } from 'vuex'
// Modules
import { AppStore } from '@/store/modules/app'
import { CategoriesStore } from '@/store/modules/categories'
import { TodosStore } from '@/store/modules/todos'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    App: AppStore,
    Categories: CategoriesStore,
    Todos: TodosStore
  }
})
