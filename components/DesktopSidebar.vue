<template>
  <div class="hidden bg-white md:flex md:flex-shrink-0 ">
    <div class="flex flex-col w-64">
      <div class="fixed pl-6 pt-16 pb-6 pr-12 h-full justify-left overflow-y-auto">
        <sections-nav class="flex-col pt-12" />
        <guides-left-nav v-if="isGuides" class="mt-6" />
        <docs-left-nav v-else class="mt-6" />
      </div>
    </div>
  </div>
</template>

<script>
import DocsLeftNav from "~/components/DocsLeftNav";
import GuidesLeftNav from "~/components/GuidesLeftNav";
import SectionsNav from "~/components/SectionsNav";

export default {
  components: {SectionsNav, DocsLeftNav, GuidesLeftNav},
  computed: {
    isGuides () {
      return this.$nuxt._route.name === 'guides-guide' || this.$nuxt._route.name === 'guides'
    }
  }
}
</script>
