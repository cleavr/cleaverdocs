<template>
  <div class="fixed w-full max-w-6xl z-10 flex-shrink-0 flex h-16 bg-white border-b-2 border-gray-100">
    <button @click="showMobileMenu" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none md:hidden">
      <span class="sr-only">Open sidebar</span>
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>
    <div class="flex-1 px-4 flex items-center justify-between">
      <logo class="hidden md:flex" />
      <sectionsnav class="hidden md:flex" />
      <search />
    </div>
  </div>
</template>

<script>
import Sectionsnav from "~/components/SectionsNav";
export default {
  components: {Sectionsnav},
  methods: {
    showMobileMenu () {
      this.$emit('openMobileMenu', true)
    }
  }
}
</script>
