<template lang="pug">
.greeting_wrapper
  h2.title Good {{ timeOfDay.toLowerCase() }},#[br]{{ userName }}!
</template>

<script lang="ts">
// Vue
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
// Helpers
import { GetTimesOfDay } from '@/helpers/date'

export default defineComponent({
  name: 'Greeting',
  setup () {
    /**
     * Context
     */
    const store = useStore()

    /**
     * Helpers
     */
    const timeOfDay = GetTimesOfDay()

    /**
     * Data
     */
    const userName = computed<string>(() => 'Mike Brown')

    /**
     * Return
     */
    return {
      // Helpers
      timeOfDay,
      // Data
      userName
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.greeting_wrapper
  width 100%
  margin 24px 0
  df_rss()
  .title
    text(34px, 800, normal, 1.4, left)
    color $color_app_white
</style>
