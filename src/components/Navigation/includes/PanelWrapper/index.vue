<template lang="pug">
.wrapper(:class="{active: viewStatus}")
  //- Categories group
  .group
    Title(text="Categories")
    //- Link
    Link(v-for="(category, key) in categories" :key="key" :text="category.title" :route="`/categories/${category.id}`" :icon="getIconByID(category.icon).label" :color="getColorByID(category.color).label")
    //- Link
    ButtonCreator(text="Create new category")
  //- Separator
  Separator
</template>

<script lang="ts">
// Vue
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
// Helpers
import { getIconByID } from '@/helpers/UI/icons'
import { getColorByID } from '@/helpers/UI/colors'
// Types
import { AppGettersEnum } from '@/types/app/types'
import { CategoriesGettersEnum, GetCategoriesEnum } from '@/types/categories/types'
// Components
import Title from '@/components/Navigation/includes/PanelWrapper/elements/Title.vue'
import Link from '@/components/Navigation/includes/PanelWrapper/elements/Link.vue'
import ButtonCreator from '@/components/Navigation/includes/PanelWrapper/elements/ButtonCreator.vue'
import Separator from '@/components/Navigation/includes/PanelWrapper/elements/Separator.vue'

export default defineComponent({
  name: 'PanelWrapper',
  components: {
    Title,
    Link,
    ButtonCreator,
    Separator
  },
  setup () {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Data
     */
    // # View status panel
    const viewStatus = computed<boolean>(() => store.getters[AppGettersEnum.GetControlPanelViewStatus])
    // # Categories
    const categories = computed(() => store.getters[CategoriesGettersEnum.GetCategories](GetCategoriesEnum.All))

    /**
     * Return
     */
    return {
      // Helpers
      getIconByID,
      getColorByID,
      // Data
      viewStatus,
      categories
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.wrapper
  max-width 280px
  width 100%
  min-height $size_header_panel
  max-height $size_header_panel
  height 100%
  padding 16px 0
  background-color $color_app_dark_light
  transition $transition
  position fixed
  left -280px
  bottom 0
  z-index 1
  // Active
  &.active
    left 0
</style>
