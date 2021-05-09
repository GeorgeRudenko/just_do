<template lang="pug">
#content
  //- Header
  PageHeader(title="Account" :control-panel="false")
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Component
import PageHeader from '@/components/elements/content/Header/index.vue'

export default defineComponent({
  name: 'Account',
  components: {
    PageHeader
  }
})
</script>
