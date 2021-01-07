<template>
  <div class="fixed flex flex-shrink-0 h-16 w-full max-w-6xl z-10 bg-white border-b-2 border-gray-100">
    <button @click="showMobileMenu" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none md:hidden">
      <span class="sr-only">Open sidebar</span>
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>
    <div class="flex-1 px-4 flex items-center justify-between">
      <div class="flex">
        <logo class="hidden md:flex" />
        <search class="md:ml-24 md:pl-3" />
      </div>
      <div>
        <a href="https://cleavr.io/login">
          <svg class="mr-1 h-5 w-5 text-gray-700 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    showMobileMenu () {
      this.$emit('openMobileMenu', true)
    }
  }
}
</script>
