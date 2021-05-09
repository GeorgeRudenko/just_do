<template lang="pug">
#content
  //- Header
  PageHeader(title="Statistics" :control-panel="false")
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// Component
import PageHeader from '@/components/elements/content/Header/index.vue'

export default defineComponent({
  name: 'Statistics',
  components: {
    PageHeader
  }
})
</script>
