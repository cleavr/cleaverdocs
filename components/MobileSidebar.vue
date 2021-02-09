<template>
  <div>
    <div class="fixed inset-0 flex z-40">
      <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="display"
          class="fixed inset-0"
          aria-hidden="true"
          @click="closeMobileMenu"
        >
          <div class="absolute inset-0 bg-gray-600 opacity-75" />
        </div>
      </transition>
      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-show="display"
          class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="closeMobileMenu"
            >
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <logo />
          <div class="overflow-y-auto">
            <sections-nav class="flex-col justify-left px-5 pt-6" />
            <GuidesLeftNav
              v-if="isGuides"
              class="px-6 pt-6"
            />
            <DocsLeftNav
              v-else
              class="px-6 pt-6"
            />
          </div>
        </div>
      </transition>
      <div
        class="flex-shrink-0 w-14"
        aria-hidden="true"
      >
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>

<script>
import DocsLeftNav from "~/components/DocsLeftNav";
import GuidesLeftNav from "~/components/GuidesLeftNav";
import SectionsNav from "~/components/SectionsNav";

export default {
  components: {DocsLeftNav, SectionsNav, GuidesLeftNav},
  data () {
    return {
      display: null
    }
  },
  computed: {
    isGuides () {
      return this.$nuxt._route.name === 'guides-guide' || this.$nuxt._route.name === 'guides'
    }
  },
  mounted() {
    self = this
    setTimeout(function(){
      self.display = true
    }, 100);
  },
  methods: {
    closeMobileMenu () {
      self = this
      this.display = false
      setTimeout(function(){
        self.$emit('closeMobileMenu', true)
      }, 500);
    }
  }
}
</script>
