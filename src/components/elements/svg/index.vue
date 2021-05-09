<template lang="pug">
svgDashboard(v-if="icon === 'dashboard'")
svgFolder(v-else-if="icon === 'folder'")
svgSearch(v-else-if="icon === 'search'")
svgBell(v-else-if="icon === 'bell'")
svgUser(v-else-if="icon === 'user'")
svgArrow(v-else-if="icon === 'arrow'")
svgCheck(v-else-if="icon === 'check'")
svgCalendar(v-else-if="icon === 'calendar'")
svgFavourite(v-else-if="icon === 'favourite'")
svgFavouriteEmpty(v-else-if="icon === 'favouriteEmpty'")
svgStructure(v-else-if="icon === 'structure'")
svgPieChart(v-else-if="icon === 'pieChart'")
svgPencil(v-else-if="icon === 'pencil'")
svgFlag(v-else-if="icon === 'flag'")
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
// SVG
import svgDashboard from '@/static/svg/dashboard.vue'
import svgFolder from '@/static/svg/folder.vue'
import svgSearch from '@/static/svg/search.vue'
import svgBell from '@/static/svg/bell.vue'
import svgUser from '@/static/svg/user.vue'
import svgArrow from '@/static/svg/arrow.vue'
import svgCheck from '@/static/svg/check.vue'
import svgCalendar from '@/static/svg/calendar.vue'
import svgFavourite from '@/static/svg/favourite.vue'
import svgFavouriteEmpty from '@/static/svg/favouriteEmpty.vue'
import svgStructure from '@/static/svg/structure.vue'
import svgPieChart from '@/static/svg/pieChart.vue'
import svgPencil from '@/static/svg/pencil.vue'
import svgFlag from '@/static/svg/flag.vue'

export default defineComponent({
  name: 'svgWrapper',
  components: {
    svgDashboard,
    svgFolder,
    svgSearch,
    svgBell,
    svgUser,
    svgArrow,
    svgCheck,
    svgCalendar,
    svgFavourite,
    svgFavouriteEmpty,
    svgStructure,
    svgPieChart,
    svgPencil,
    svgFlag
  },
  props: {
    /**
     * Icon
     */
    icon: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
// Import
@import '~@/assets/styles/base.styl'

// Styles
.mint,
.green,
.pink,
.brown,
.red,
.purple,
.black
  fill $color_app_white !important
.yellow,
.grey
  fill $color_app_black !important
</style>
