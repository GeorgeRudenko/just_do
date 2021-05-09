<template lang="pug">
.modal_select_ui(v-click-outside="closeOptionList" :class="[{ small: isSmall}, iconColor]")
  //- # Active wrapper
  .active_wrapper.row(@click.prevent="toggleViewOptionsList()")
    //- ## Icon
    svgWrapper.fill_color.icon(v-if="selectType === 'icon'" :icon="active.label")
    //- ## Color
    .color_dot(v-if="selectType === 'color'" :class="active.label")
    //- ## Name
    | {{ active.name }}
    //- ––––––––––––––––––
  //- # Options wrapper
  .options_wrapper(v-if="viewOptionsList")
    //- ## Option
    span.option.row(v-for="(option, key) in options" :key="key" :class="{active: modelValue === option.id}" @click.prevent="[$emit('update:modelValue', option.id),toggleViewOptionsList()]")
      //- ### Icon
      svgWrapper.fill_color.icon(v-if="selectType === 'icon'" :icon="option.label")
      //- ### Color
      .color_dot(v-if="selectType === 'color'" :class="option.label")
      //- ### Name
      | {{ option.name }}
</template>

<script lang="ts">
// Vue
import { ref, defineComponent } from 'vue'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'ModalSelect',
  components: {
    svgWrapper
  },
  props: {
    /**
     * Model value (created by v-model)
     */
    modelValue: {
      type: [String, Number, Boolean],
      required: false,
      default: null
    },
    /**
     * Is small select
     */
    isSmall: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Select type
     * color – for choose color
     * icon – for choose icon
     */
    selectType: {
      type: String,
      required: true
    },
    /**
     * Active option
     */
    active: {
      type: Object,
      required: true
    },
    /**
     * Options
     */
    options: {
      type: [Object, Array],
      required: true
    },
    /**
     * Icon color
     */
    iconColor: {
      type: String,
      required: false,
      default: 'purple'
    }
  },
  setup () {
    /**
     * Data
     */
    // # View option list status
    const viewOptionsList = ref<boolean>(false)

    /**
     * Methods
     */
    // # Close option list
    const closeOptionList = (): void => {
      viewOptionsList.value = false
        }
    // # Toggle view
    const toggleViewOptionsList = (status?: boolean): void => {
      if (status) {
        viewOptionsList.value = status
      } else {
        viewOptionsList.value = !viewOptionsList.value
      }
    }

    /**
     * Return
     */
    return {
      // Data
      viewOptionsList,
      // Methods
      closeOptionList,
      toggleViewOptionsList
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// # Modal select
.modal_select_ui
  width auto
  height 100%
  margin-right 12px
  background transparent
  dFlex(column, flex-start, flex-start)
  position relative
  // # Active wrapper
  .active_wrapper
    max-width max-content
    width 100%
    border 2px solid $color_app_dark_grey
    border-radius $size_radius_big
  // # Option wrapper
  .options_wrapper
    max-width 220px
    min-width 220px
    width 100%
    max-height 200px
    height auto
    border 2px solid $color_app_dark_grey
    background-color $color_app_dark_grey
    border-radius $size_radius_big
    dFlex(column, flex-start, flex-start)
    overflow-y auto
    position absolute
    top 60px
    left 0
    z-index 1
  // # Row
  .row
    width 100%
    min-height 48px
    max-height 48px
    padding 4px 16px
    text(16px, 600, 1, left)
    text-transform capitalize
    color $color_app_grey
    dFlex(row, flex-start, center)
    cursor pointer
    // @Icon
    .icon, svg,
    // @Color
    .color_dot
      max-width 28px
      min-width 28px
      width 100%
      max-height 28px
      min-height 28px
      height 100%
      margin-right 16px
    // @Color
    .color_dot
      border-radius 50%
      bg_color_schema()
  // ! SVG Color schema
  svg_color_schema()
  // ! Small
  &.small
    // # Row
    .row
      min-height 36px
      max-height 36px
      padding-left 12px
      padding-right 12px
      // @Icon
      .icon, svg,
        // @Color
      .color_dot
        max-width 18px
        min-width 18px
        max-height 18px
        min-height 18px
        margin-right 12px
    // # Option wrapper
    .options_wrapper
      top 48px
</style>
