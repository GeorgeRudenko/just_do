<template lang="pug">
.wrapper
  //- Control button
  router-link.control(to="/account" active-class="active") #[svgWrapper.icon(icon="user")]
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import svgWrapper from '@/components/elements/svg/index.vue'

export default defineComponent({
  name: 'AccountControl',
  components: {
    svgWrapper
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.wrapper
  width auto
  position relative
  // Control button
  .control
    header_nav_control_btn()
</style>
