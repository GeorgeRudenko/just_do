<template lang="pug">
.user_control
  //- # Search
  SearchControl.element
  //- # Alert
  AlertControl.element
  //- # Account
  AccountControl.element
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Components
import AccountControl from '@/components/Navigation/includes/UserControl/includes/AccountControl/index.vue'
import AlertControl from '@/components/Navigation/includes/UserControl/includes/AlertControl/index.vue'
import SearchControl from '@/components/Navigation/includes/UserControl/includes/SearchControl/index.vue'

export default defineComponent({
  name: 'UserControl',
  components: {
    AccountControl,
    AlertControl,
    SearchControl
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.user_control
  width auto
  df_rcc()
  .element:not(:last-child)
    margin-right 32px
</style>
